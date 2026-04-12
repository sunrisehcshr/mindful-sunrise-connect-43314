"use client";

/**
 * src/components/SunnyAgent.tsx
 *
 * Voice-first Sunny agent built on Deepgram Voice Agent WebSocket.
 *
 * Architecture:
 * - One persistent WebSocket to /api/sunny (proxied to Deepgram)
 * - Microphone audio streamed as raw PCM linear16 @ 48kHz
 * - Deepgram streams back raw PCM linear16 @ 24kHz (Thalia voice)
 * - An AudioWorklet handles mic capture and playback with no dropouts
 * - Navigation extracted from [NAVIGATE:/route] markers in ConversationText
 * - VoicePoweredOrb reacts to agent state (idle/listening/thinking/speaking)
 * - iOS audio fully unlocked on first user tap before any async work
 *
 * States:
 *   idle       → widget closed or not yet started
 *   connecting → WebSocket opening
 *   listening  → mic active, waiting for user to speak
 *   thinking   → user finished speaking, Sunny processing
 *   speaking   → Sunny playing audio response
 *   error      → connection failed
 */

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MessageSquareText, Mic, MicOff, Volume2, VolumeX } from "lucide-react";
import { VoicePoweredOrb, type OrbState } from "@/components/ui/voice-powered-orb";

// ─── Types ────────────────────────────────────────────────────────────────────

type AgentState = "idle" | "connecting" | "listening" | "thinking" | "speaking" | "error";

interface Transcript {
  id: string;
  role: "user" | "assistant";
  text: string;
}

// ─── Navigation intent parser ─────────────────────────────────────────────────
// Extracts [NAVIGATE:/route] markers from Sunny's text responses
const NAVIGATE_REGEX = /\[NAVIGATE:(\/[^\]]*)\]/;

function extractNavigation(text: string): { clean: string; route: string | null } {
  const match = text.match(NAVIGATE_REGEX);
  return {
    clean: text.replace(NAVIGATE_REGEX, "").trim(),
    route: match ? match[1] : null,
  };
}

// ─── iOS audio unlock ─────────────────────────────────────────────────────────
let audioUnlocked = false;
function unlockAudio() {
  if (audioUnlocked || typeof window === "undefined") return;
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const buf = ctx.createBuffer(1, 1, 22050);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.connect(ctx.destination);
    src.start(0);
    src.onended = () => ctx.close();
    audioUnlocked = true;
  } catch {}
}

// ─── PCM helpers ─────────────────────────────────────────────────────────────

/** Convert Float32 mic samples → Int16 PCM bytes for Deepgram */
function float32ToInt16(float32Array: Float32Array): ArrayBuffer {
  const int16 = new Int16Array(float32Array.length);
  for (let i = 0; i < float32Array.length; i++) {
    const s = Math.max(-1, Math.min(1, float32Array[i]));
    int16[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
  }
  return int16.buffer;
}

/** Convert Int16 PCM bytes from Deepgram → Float32 for Web Audio playback */
function int16ToFloat32(buffer: ArrayBuffer): Float32Array {
  const int16 = new Int16Array(buffer);
  const float32 = new Float32Array(int16.length);
  for (let i = 0; i < int16.length; i++) {
    float32[i] = int16[i] / (int16[i] < 0 ? 0x8000 : 0x7fff);
  }
  return float32;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function SunnyAgent() {
  const router = useRouter();

  const [isOpen,       setIsOpen]       = useState(false);
  const [agentState,   setAgentState]   = useState<AgentState>("idle");
  const [transcripts,  setTranscripts]  = useState<Transcript[]>([]);
  const [isMuted,      setIsMuted]      = useState(false);
  const [isScrolled,   setIsScrolled]   = useState(false);
  const [errorMsg,     setErrorMsg]     = useState<string | null>(null);

  // WebSocket
  const wsRef            = useRef<WebSocket | null>(null);

  // Audio — mic
  const audioCtxRef      = useRef<AudioContext | null>(null);
  const micStreamRef     = useRef<MediaStream | null>(null);
  const micSourceRef     = useRef<MediaStreamAudioSourceNode | null>(null);
  const processorRef     = useRef<ScriptProcessorNode | null>(null);

  // Audio — playback (Sunny's voice)
  const playbackCtxRef   = useRef<AudioContext | null>(null);
  const playbackQueue    = useRef<Float32Array[]>([]);
  const isPlayingRef     = useRef(false);
  const nextPlayTimeRef  = useRef(0);

  // Orb audio ref (for WebGL analyser)
  const orbAudioRef      = useRef<HTMLAudioElement | null>(null);

  const transcriptsEndRef = useRef<HTMLDivElement>(null);

  // ─── Derived orb state ──────────────────────────────────────────────────
  const orbState: OrbState =
    agentState === "listening"  ? "listening"  :
    agentState === "thinking"   ? "thinking"   :
    agentState === "speaking"   ? "speaking"   : "idle";

  // ─── Scroll detection ───────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > window.innerHeight * 0.4);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ─── Auto scroll transcripts ────────────────────────────────────────────
  useEffect(() => {
    transcriptsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [transcripts]);

  // ─── Playback engine ────────────────────────────────────────────────────
  // Queues and plays PCM chunks from Deepgram seamlessly
  const schedulePlayback = useCallback((samples: Float32Array) => {
    const ctx = playbackCtxRef.current;
    if (!ctx) return;

    const buffer = ctx.createBuffer(1, samples.length, 24000);
    buffer.copyToChannel(samples, 0);
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);

    const now = ctx.currentTime;
    const startAt = Math.max(now, nextPlayTimeRef.current);
    source.start(startAt);
    nextPlayTimeRef.current = startAt + buffer.duration;
  }, []);

  const flushPlaybackQueue = useCallback(() => {
    if (isPlayingRef.current) return;
    isPlayingRef.current = true;
    const flush = () => {
      const chunk = playbackQueue.current.shift();
      if (chunk) {
        schedulePlayback(chunk);
        requestAnimationFrame(flush);
      } else {
        isPlayingRef.current = false;
      }
    };
    flush();
  }, [schedulePlayback]);

  // ─── WebSocket message handler ──────────────────────────────────────────
  const handleWsMessage = useCallback((event: MessageEvent) => {
    // Binary = audio PCM from Deepgram (Sunny speaking)
    if (event.data instanceof ArrayBuffer) {
      if (isMuted) return;
      const samples = int16ToFloat32(event.data);
      playbackQueue.current.push(samples);
      flushPlaybackQueue();
      setAgentState("speaking");
      return;
    }

    // Text = JSON control event
    try {
      const msg = JSON.parse(event.data as string);

      switch (msg.type) {
        case "SettingsApplied":
          setAgentState("listening");
          break;

        case "UserStartedSpeaking":
          // User interrupted — clear any queued playback
          playbackQueue.current = [];
          nextPlayTimeRef.current = 0;
          setAgentState("listening");
          break;

        case "AgentThinking":
          setAgentState("thinking");
          break;

        case "AgentAudioDone":
          setAgentState("listening");
          break;

        case "ConversationText": {
          const role   = msg.role === "user" ? "user" : "assistant";
          const rawText: string = msg.content || "";

          if (role === "assistant") {
            const { clean, route } = extractNavigation(rawText);

            setTranscripts(prev => [
              ...prev,
              { id: Date.now().toString(36), role, text: clean },
            ]);

            // Navigate the page if Sunny included a route marker
            if (route) {
              router.push(route);
            }
          } else {
            setTranscripts(prev => [
              ...prev,
              { id: Date.now().toString(36), role, text: rawText },
            ]);
          }
          break;
        }

        case "Error":
          console.error("Deepgram agent error:", msg);
          setErrorMsg(msg.description || "Something went wrong. Please try again.");
          setAgentState("error");
          break;

        default:
          break;
      }
    } catch {
      // Non-JSON binary edge case — ignore
    }
  }, [isMuted, flushPlaybackQueue, router]);

  // ─── Start session ───────────────────────────────────────────────────────
  const startSession = useCallback(async () => {
    // iOS audio unlock MUST happen synchronously in this gesture handler
    unlockAudio();

    setAgentState("connecting");
    setErrorMsg(null);
    setTranscripts([]);

    try {
      // 1. Mic access
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          sampleRate: 48000,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      micStreamRef.current = stream;

      // 2. Audio context for mic capture
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({
        sampleRate: 48000,
      });
      audioCtxRef.current = audioCtx;

      // 3. Audio context for playback (Sunny's voice @ 24kHz)
      const playCtx = new (window.AudioContext || (window as any).webkitAudioContext)({
        sampleRate: 24000,
      });
      playbackCtxRef.current = playCtx;
      nextPlayTimeRef.current = playCtx.currentTime;

      // 4. Connect WebSocket to our proxy route
      const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      const ws = new WebSocket(`${protocol}//${window.location.host}/api/sunny`);
      ws.binaryType = "arraybuffer";
      wsRef.current = ws;

      ws.onopen = () => {
        // 5. Start streaming mic audio once WS is open
        const source    = audioCtx.createMediaStreamSource(stream);
        // ScriptProcessor gives us raw PCM samples — deprecated but widely
        // supported. Replace with AudioWorklet once Safari fully supports it.
        const processor = audioCtx.createScriptProcessor(4096, 1, 1);

        processor.onaudioprocess = (e) => {
          if (ws.readyState !== WebSocket.OPEN) return;
          const samples = e.inputBuffer.getChannelData(0);
          ws.send(float32ToInt16(samples));
        };

        source.connect(processor);
        processor.connect(audioCtx.destination);

        micSourceRef.current  = source;
        processorRef.current  = processor;
      };

      ws.onmessage  = handleWsMessage;
      ws.onerror    = () => {
        setErrorMsg("Could not connect to Sunny. Please try again.");
        setAgentState("error");
      };
      ws.onclose    = () => {
        if (agentState !== "idle") setAgentState("idle");
      };

    } catch (err: any) {
      console.error("Session start error:", err);
      if (err?.name === "NotAllowedError") {
        setErrorMsg("Microphone access denied. Please allow mic permissions and try again.");
      } else {
        setErrorMsg("Could not start session. Please try again.");
      }
      setAgentState("error");
    }
  }, [handleWsMessage, agentState]);

  // ─── End session ────────────────────────────────────────────────────────
  const endSession = useCallback(() => {
    // Stop mic
    processorRef.current?.disconnect();
    micSourceRef.current?.disconnect();
    micStreamRef.current?.getTracks().forEach(t => t.stop());
    audioCtxRef.current?.close();

    // Stop playback
    playbackQueue.current = [];
    playbackCtxRef.current?.close();
    nextPlayTimeRef.current = 0;
    isPlayingRef.current = false;

    // Close WS
    wsRef.current?.close();

    processorRef.current  = null;
    micSourceRef.current  = null;
    micStreamRef.current  = null;
    audioCtxRef.current   = null;
    playbackCtxRef.current = null;
    wsRef.current         = null;

    setAgentState("idle");
  }, []);

  // ─── Open / close widget ────────────────────────────────────────────────
  const openWidget = () => {
    unlockAudio();
    setIsOpen(true);
    startSession();
  };

  const closeWidget = () => {
    endSession();
    setIsOpen(false);
  };

  // ─── Mute toggle ────────────────────────────────────────────────────────
  const toggleMute = () => {
    setIsMuted(prev => {
      if (!prev) {
        // Muting — disconnect mic processor
        processorRef.current?.disconnect();
      } else {
        // Unmuting — reconnect
        if (micSourceRef.current && processorRef.current && audioCtxRef.current) {
          micSourceRef.current.connect(processorRef.current);
          processorRef.current.connect(audioCtxRef.current.destination);
        }
      }
      return !prev;
    });
  };

  // ─── Cleanup on unmount ──────────────────────────────────────────────────
  useEffect(() => {
    return () => endSession();
  }, [endSession]);

  // ─── State label ────────────────────────────────────────────────────────
  const stateLabel = {
    idle:       "",
    connecting: "Connecting…",
    listening:  "Listening…",
    thinking:   "Thinking…",
    speaking:   "Speaking…",
    error:      "Connection error",
  }[agentState];

  // ─── Render ──────────────────────────────────────────────────────────────
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center pointer-events-none">

      {/* ── Chat window ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 w-[350px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl flex flex-col h-[520px] max-h-[calc(100vh-8rem)] pointer-events-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-stone-900 px-4 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-inner border border-orange-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/>
                    <path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-barlow font-bold text-[15px] leading-tight">Sunny</h3>
                  <p className="text-[11px] text-stone-400 mt-0.5">Virtual care assistant · Sunrise Human Care</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {/* Mute mic toggle */}
                <button
                  onClick={toggleMute}
                  className={`rounded-full p-2 transition-colors ${
                    isMuted
                      ? "text-red-400 hover:bg-stone-800"
                      : "text-stone-400 hover:bg-stone-800 hover:text-white"
                  }`}
                  title={isMuted ? "Unmute microphone" : "Mute microphone"}
                  aria-label="Toggle microphone"
                >
                  {isMuted ? <MicOff size={18} /> : <Mic size={18} />}
                </button>
                <button
                  onClick={closeWidget}
                  className="rounded-full p-2 text-stone-400 hover:bg-stone-800 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Orb + state area */}
            <div className="relative bg-stone-50/80 flex flex-col items-center justify-center pt-6 pb-4 border-b border-stone-100">
              <div className="w-32 h-32">
                <VoicePoweredOrb
                  state={orbState}
                  aiAudioRef={orbAudioRef}
                />
              </div>
              <p className={`mt-3 text-sm font-medium tracking-wide transition-all duration-300 ${
                agentState === "error"
                  ? "text-red-500"
                  : agentState === "listening"
                  ? "text-orange-500 animate-pulse"
                  : "text-stone-500"
              }`}>
                {agentState === "error" ? errorMsg : stateLabel}
              </p>

              {/* Retry button on error */}
              {agentState === "error" && (
                <button
                  onClick={startSession}
                  className="mt-2 text-xs text-orange-500 underline hover:text-orange-600"
                >
                  Try again
                </button>
              )}
            </div>

            {/* Transcript area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {transcripts.length === 0 && agentState === "listening" && (
                <p className="text-center text-stone-400 text-sm mt-4">
                  Go ahead — ask Sunny anything about our services.
                </p>
              )}
              {transcripts.map(t => (
                <div
                  key={t.id}
                  className={`flex ${t.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                    t.role === "user"
                      ? "bg-stone-900 text-white rounded-tr-sm"
                      : "bg-white border border-stone-200 text-stone-800 rounded-tl-sm shadow-sm"
                  }`}>
                    {t.text}
                  </div>
                </div>
              ))}
              <div ref={transcriptsEndRef} />
            </div>

            {/* Footer — call CTA */}
            <div className="border-t border-stone-100 bg-white px-4 py-3">
              <a
                href="tel:8146202162"
                className="flex items-center gap-3 w-full rounded-xl bg-stone-50 border border-stone-200 px-3 py-2.5 hover:border-orange-200 hover:bg-orange-50 transition-all group"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Phone size={15} fill="currentColor" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 group-hover:text-orange-500 transition-colors">Call front desk directly</span>
                  <span className="text-[13px] font-semibold text-stone-800">(814) 620-2162</span>
                </div>
              </a>
              <p className="mt-2 text-center text-[10px] text-stone-400">
                Voice AI · Powered by Sunrise Human Care
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating pill button ────────────────────────────────────────── */}
      <AnimatePresence>
        {(isScrolled || isOpen) && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="pointer-events-auto"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.button
                  key="close"
                  onClick={closeWidget}
                  initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1a1a1a] text-white shadow-xl hover:bg-orange-500 transition-all duration-300"
                  aria-label="Close Sunny"
                >
                  <X size={24} />
                </motion.button>
              ) : (
                <motion.div
                  key="open"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center bg-[#1a1a1a] p-1 rounded-full shadow-2xl cursor-pointer hover:bg-orange-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group h-12"
                  onClick={openWidget}
                >
                  <div className="flex h-full items-center bg-white rounded-full pl-1 pr-5 sm:pr-6 gap-2.5 sm:gap-3">
                    <div className="flex shrink-0 items-center justify-center w-[36px] h-[36px] bg-[#f4f4f5] rounded-full">
                      <Mic size={18} className="text-stone-800" />
                    </div>
                    <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.15em] font-bold text-stone-900 uppercase mt-0.5 whitespace-nowrap">
                      Talk to Sunny
                    </span>
                  </div>
                  <div className="px-3 sm:px-4 text-stone-400 group-hover:text-white transition-colors duration-300 flex items-center justify-center w-[36px] h-[36px] shrink-0 box-content">
                    <MessageSquareText size={22} className="opacity-90" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
