"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Loader2, Mic, MicOff, Volume2, VolumeX, Square, MessageSquareText, Sparkles } from "lucide-react";
import { VoicePoweredOrb, type OrbState } from "@/components/ui/voice-powered-orb";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type AgentState = "idle" | "connecting" | "listening" | "thinking" | "speaking" | "error";

const NAVIGATE_REGEX = /\[NAVIGATE:(\/[^\]]*)\]/;

function extractNavigation(text: string): { clean: string; route: string | null } {
  const match = text.match(NAVIGATE_REGEX);
  return {
    clean: text.replace(NAVIGATE_REGEX, "").trim(),
    route: match ? match[1] : null,
  };
}

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

function float32ToInt16(float32Array: Float32Array): ArrayBuffer {
  const int16 = new Int16Array(float32Array.length);
  for (let i = 0; i < float32Array.length; i++) {
    const s = Math.max(-1, Math.min(1, float32Array[i]));
    int16[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
  }
  return int16.buffer;
}

function int16ToFloat32(buffer: ArrayBuffer): Float32Array {
  const int16 = new Int16Array(buffer);
  const float32 = new Float32Array(int16.length);
  for (let i = 0; i < int16.length; i++) {
    float32[i] = int16[i] / (int16[i] < 0 ? 0x8000 : 0x7fff);
  }
  return float32;
}

export default function HybridChatWidget() {
  const router = useRouter();

  // Core UI States
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mode, setMode] = useState<"text" | "voice">("text");

  // Text Chat States
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content: "Hello. I'm the Sunrise AI Assistant. Tell me what you're looking for, or tap the microphone to speak with me directly.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoadingText, setIsLoadingText] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Voice Chat States (Deepgram)
  const [agentState, setAgentState] = useState<AgentState>("idle");
  const [isMuted, setIsMuted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Audio / WS Refs
  const wsRef = useRef<WebSocket | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const micStreamRef = useRef<MediaStream | null>(null);
  const micSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  
  const playbackCtxRef = useRef<AudioContext | null>(null);
  const playbackQueue = useRef<Float32Array[]>([]);
  const isPlayingRef = useRef(false);
  const nextPlayTimeRef = useRef(0);
  const orbAudioRef = useRef<HTMLAudioElement | null>(null);

  const orbState: OrbState =
    agentState === "listening"  ? "listening"  :
    agentState === "thinking"   ? "thinking"   :
    agentState === "speaking"   ? "speaking"   : "idle";

  // ─── UI Scrolling ──────────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.4);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, mode]);

  // ─── Text Chat Engine ──────────────────────────────────────────────────────
  const handleSendText = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoadingText || mode === "voice") return;

    const userMessage: Message = { id: Date.now().toString(), role: "user", content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoadingText(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error("Failed to send message");
      const data = await response.json();
      
      if (data.route) router.push(data.route);

      setMessages(prev => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: "assistant", content: data.message },
      ]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: "assistant", content: "I'm having trouble connecting right now. Please try again later or call our front desk." },
      ]);
    } finally {
      setIsLoadingText(false);
    }
  };

  // ─── Voice Engine (Deepgram WebSocket) ─────────────────────────────────────
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

  const handleWsMessage = useCallback((event: MessageEvent) => {
    if (event.data instanceof ArrayBuffer) {
      if (isMuted) return;
      const samples = int16ToFloat32(event.data);
      playbackQueue.current.push(samples);
      flushPlaybackQueue();
      setAgentState("speaking");
      return;
    }

    try {
      const msg = JSON.parse(event.data as string);
      switch (msg.type) {
        case "SettingsApplied":
          setAgentState("listening");
          break;
        case "UserStartedSpeaking":
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
          const role = msg.role === "user" ? "user" : "assistant";
          const rawText: string = msg.content || "";
          
          if (role === "assistant") {
            const { clean, route } = extractNavigation(rawText);
            setMessages(prev => [...prev, { id: Date.now().toString(36), role, content: clean }]);
            if (route) router.push(route);
          } else {
            setMessages(prev => [...prev, { id: Date.now().toString(36), role, content: rawText }]);
          }
          break;
        }
        case "Error":
          console.error("Deepgram error:", msg);
          setErrorMsg(msg.description || "Voice connection failed.");
          setAgentState("error");
          break;
      }
    } catch {}
  }, [isMuted, flushPlaybackQueue, router]);

  const startVoiceSession = useCallback(async () => {
    unlockAudio();
    setMode("voice");
    setAgentState("connecting");
    setErrorMsg(null);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { channelCount: 1, sampleRate: 48000, echoCancellation: true, noiseSuppression: true, autoGainControl: true },
      });
      micStreamRef.current = stream;

      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 48000 });
      audioCtxRef.current = audioCtx;

      const playCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      playbackCtxRef.current = playCtx;
      nextPlayTimeRef.current = playCtx.currentTime;

      const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      const ws = new WebSocket(`${protocol}//${window.location.host}/api/sunny`);
      ws.binaryType = "arraybuffer";
      wsRef.current = ws;

      ws.onopen = () => {
        const source = audioCtx.createMediaStreamSource(stream);
        const processor = audioCtx.createScriptProcessor(4096, 1, 1);
        processor.onaudioprocess = (e) => {
          if (ws.readyState !== WebSocket.OPEN) return;
          ws.send(float32ToInt16(e.inputBuffer.getChannelData(0)));
        };
        source.connect(processor);
        processor.connect(audioCtx.destination);
        micSourceRef.current = source;
        processorRef.current = processor;
      };

      ws.onmessage = handleWsMessage;
      ws.onerror = () => {
        setErrorMsg("Could not connect to Sunny's voice server.");
        setAgentState("error");
      };
      ws.onclose = () => {
        if (agentState !== "idle") setAgentState("idle");
      };
    } catch (err: any) {
      if (err?.name === "NotAllowedError") setErrorMsg("Microphone access denied.");
      else setErrorMsg("Could not start voice session.");
      setAgentState("error");
    }
  }, [handleWsMessage, agentState]);

  const stopVoiceSession = useCallback(() => {
    processorRef.current?.disconnect();
    micSourceRef.current?.disconnect();
    micStreamRef.current?.getTracks().forEach(t => t.stop());
    audioCtxRef.current?.close();
    playbackQueue.current = [];
    playbackCtxRef.current?.close();
    nextPlayTimeRef.current = 0;
    isPlayingRef.current = false;
    wsRef.current?.close();

    processorRef.current = null;
    micSourceRef.current = null;
    micStreamRef.current = null;
    audioCtxRef.current = null;
    playbackCtxRef.current = null;
    wsRef.current = null;

    setAgentState("idle");
    setMode("text"); // revert to text UI
  }, []);

  const toggleMute = () => {
    setIsMuted(prev => {
      if (!prev) processorRef.current?.disconnect();
      else if (micSourceRef.current && processorRef.current && audioCtxRef.current) {
        micSourceRef.current.connect(processorRef.current);
        processorRef.current.connect(audioCtxRef.current.destination);
      }
      return !prev;
    });
  };

  const closeWidget = () => {
    if (mode === "voice") stopVoiceSession();
    setIsOpen(false);
  };

  useEffect(() => {
    return () => { if (mode === "voice") stopVoiceSession(); };
  }, [stopVoiceSession, mode]);

  // ─── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[350px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl flex flex-col h-[520px] max-h-[calc(100vh-8rem)] pointer-events-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-stone-900 px-4 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-inner border border-orange-500/20">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-barlow font-bold text-[15px] leading-tight">Sunny</h3>
                  <p className="text-[11px] text-stone-400 mt-0.5">Virtual care assistant</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {mode === "voice" && (
                  <button onClick={toggleMute} className={`rounded-full p-2 transition-colors ${isMuted ? "text-red-400 hover:bg-stone-800" : "text-stone-400 hover:bg-stone-800 hover:text-white"}`}>
                    {isMuted ? <MicOff size={18} /> : <Mic size={18} />}
                  </button>
                )}
                <button onClick={closeWidget} className="rounded-full p-2 text-stone-400 hover:bg-stone-800 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Voice Orb Area (Only visible in voice mode) */}
            <AnimatePresence>
              {mode === "voice" && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="relative bg-stone-50/80 flex flex-col items-center justify-center pt-6 pb-4 border-b border-stone-100"
                >
                  <div className="w-32 h-32">
                    <VoicePoweredOrb state={orbState} aiAudioRef={orbAudioRef} />
                  </div>
                  <p className={`mt-3 text-sm font-medium tracking-wide transition-colors ${agentState === "error" ? "text-red-500" : agentState === "listening" ? "text-orange-500 animate-pulse" : "text-stone-500"}`}>
                    {agentState === "error" ? errorMsg : agentState === "connecting" ? "Connecting to voice..." : agentState === "listening" ? "Listening..." : agentState === "thinking" ? "Thinking..." : "Speaking..."}
                  </p>
                  {agentState === "error" && (
                    <button onClick={startVoiceSession} className="mt-2 text-xs text-orange-500 underline hover:text-orange-600">Try again</button>
                  )}
                  <button onClick={stopVoiceSession} className="mt-4 text-xs font-semibold text-stone-500 hover:text-stone-800 flex items-center gap-1">
                    <Square size={12} /> Stop Voice Mode
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Chat Transcript Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-stone-50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 mt-1">
                      <Sparkles size={14} />
                    </div>
                  )}
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed ${msg.role === "user" ? "bg-stone-900 text-white rounded-tr-sm shadow-md" : "bg-white border border-stone-200 text-stone-800 rounded-tl-sm shadow-sm"}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoadingText && (
                <div className="flex justify-start">
                  <div className="mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 mt-1">
                    <Sparkles size={14} />
                  </div>
                  <div className="max-w-[80%] rounded-2xl bg-white border border-stone-200 px-4 py-3 rounded-tl-sm flex items-center shadow-sm">
                    <Loader2 className="h-4 w-4 animate-spin text-orange-500" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area (Only visible in text mode) */}
            {mode === "text" && (
              <div className="border-t border-stone-200 bg-white p-4">
                <form onSubmit={handleSendText} className="flex items-end gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask Sunny a question..."
                      className="w-full rounded-full border border-stone-300 bg-stone-50 py-3 pl-4 pr-12 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 shadow-inner"
                      disabled={isLoadingText}
                    />
                    <button
                      type="button"
                      onClick={startVoiceSession}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-stone-400 hover:bg-orange-100 hover:text-orange-600 transition-colors"
                      title="Switch to Voice Mode"
                    >
                      <Mic size={18} />
                    </button>
                  </div>
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoadingText}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white shadow-md hover:bg-orange-600 hover:shadow-lg disabled:opacity-50 transition-all active:scale-95"
                  >
                    <Send size={18} className="ml-0.5" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Pill Button */}
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
                >
                  <X size={24} />
                </motion.button>
              ) : (
                <motion.div
                  key="open"
                  onClick={() => setIsOpen(true)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center bg-[#1a1a1a] p-1 rounded-full shadow-2xl cursor-pointer hover:bg-orange-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group h-12"
                >
                  <div className="flex h-full items-center bg-white rounded-full pl-1 pr-5 sm:pr-6 gap-2.5 sm:gap-3">
                    <div className="flex shrink-0 items-center justify-center w-[36px] h-[36px] bg-[#f4f4f5] rounded-full">
                      <Sparkles size={18} className="text-stone-800" />
                    </div>
                    <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.15em] font-bold text-stone-900 uppercase mt-0.5 whitespace-nowrap">
                      Chat with AI
                    </span>
                  </div>
                  <div className="px-3 sm:px-4 text-stone-400 group-hover:text-white transition-colors duration-300 flex items-center justify-center w-[36px] h-[36px] shrink-0 box-content">
                    <MessageCircle size={22} className="opacity-90" />
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