"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Loader2, Mic, Volume2, VolumeX, Square, MessageSquareText, Sparkles } from "lucide-react";
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

// Full Deepgram config matching the original plan
const AGENT_SETTINGS = {
  type: "Settings",
  audio: {
    input: { encoding: "linear16", sample_rate: 48000 },
    output: { encoding: "linear16", sample_rate: 24000, container: "none" },
  },
  agent: {
    speak: { provider: { type: "deepgram", model: "aura-2-thalia-en" } },
    listen: { provider: { type: "deepgram", version: "v1", model: "nova-3-medical", language: "en" } },
    think: {
      provider: { type: "google", model: "gemini-2.5-flash", temperature: 0.4 },
      prompt: `Your name is Sunny. You are the virtual care assistant for Sunrise Human Care Services, a mental health clinic in Darby, Pennsylvania serving Delaware County and the Greater Philadelphia area.

You are warm, empathetic, professional, and concise. You speak naturally as if on a phone call — short sentences, no bullet points, no lists. Never read out URLs or say "slash" — just speak naturally about the page or service.

You are NOT a therapist or doctor. Never give medical advice, diagnosis, or clinical guidance. If someone is in crisis, calmly tell them to call 911 or go to their nearest emergency room.

ALWAYS refer to the clinic as "we", "our team", or "Sunrise Human Care" — never say "I offer therapy" or "I treat anxiety."

KEY FACTS TO WEAVE IN NATURALLY:
- We proudly accept Medicaid as well as private pay
- We currently have no waitlist — patients can start right away
- We offer flexible telehealth appointments for those who prefer to meet from home
- Our phone number is 814-620-2162
- We are located in Darby, Pennsylvania

SERVICES WE OFFER:
Child and adolescent therapy, couples and marriage counseling, individual therapy, family therapy, psychiatric evaluations, medication management, and IBHS services for children.

CONDITIONS WE TREAT:
Anxiety, depression, ADHD, PTSD, trauma, grief, OCD, bipolar disorder, BPD, schizophrenia, eating disorders, sleep disorders, somatic disorders, substance use, and dissociative disorders.

NAVIGATION:
When a user asks about a specific service or condition, include a navigation marker in your response using this exact format on a new line: [NAVIGATE:/the-route-here]
Use only these exact routes:
/ | /#about | /#team | /#faq | /#appointment | /services | /conditions |
/child-therapy-darby-pa | /couples-counseling-darby-pa | /individual-therapy-darby-pa |
/family-therapy-darby-pa | /relationship-therapy-darby-pa | /ibhs-darby-pa |
/psychiatric-evaluations-darby-pa | /medication-management-darby-pa |
/adhd-treatment-darby-pa | /anxiety-therapy-darby-pa | /bipolar-disorder-therapy-darby-pa |
/bpd-treatment-darby-pa | /depression-therapy-darby-pa | /dissociative-disorders-treatment-darby-pa |
/eating-disorders-treatment-darby-pa | /grief-therapy-darby-pa | /ocd-therapy-darby-pa |
/ptsd-therapy-darby-pa | /schizophrenia-treatment-darby-pa | /sleep-disorders-treatment-darby-pa |
/somatic-disorders-treatment-darby-pa | /substance-use-treatment-darby-pa
Only navigate once per topic.

CONVERSATION RULES:
- Keep responses under 3 sentences unless the caller genuinely needs more detail
- Only give the phone number when the caller explicitly asks how to reach us or wants to book
- If someone asks about cost, gently mention we accept Medicaid and there is no waitlist
- If someone wants to book, give the phone number and encourage them to call the front desk
- Never repeat the phone number more than once per conversation
- If you don't know something specific say "I'd recommend calling our front desk at 814-620-2162 and they can help you directly"
- Never say goodbye abruptly — always end warmly`,
    },
    greeting: "Hello. I'm the Sunrise AI Assistant. Tell me what you're looking for, and I'll find the right care for you.",
  },
};

export default function HybridChatWidget() {
  const router = useRouter();
  
  // UI States
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVoiceMode, setIsVoiceMode] = useState(false); // Controls whether we show text input or Orb

  // Text Chat States
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content: "Hello. I'm the Sunrise AI Assistant. Tell me what you're looking for, and I'll find the right care for you.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoadingText, setIsLoadingText] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Deepgram Voice States
  const [agentState, setAgentState] = useState<AgentState>("idle");
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true); // Matches the old auto-read toggle
  
  // Audio & WS Refs
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

  // Auto-scroll messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isVoiceMode]);

  // Scroll visibility logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.4);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ─── Text Engine (Gemini) ───────────────────────────────────────────────────
  const handleSendText = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoadingText || isVoiceMode) return;

    const userMessage: Message = { id: Date.now().toString(), role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
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

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message,
      };

      setMessages((prev) => [...prev, assistantMessage]);

      if (data.navigateTo) {
        router.push(data.navigateTo);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: "assistant", content: "Sorry, I'm having trouble connecting right now. Please call us at (814) 620-2162." },
      ]);
    } finally {
      setIsLoadingText(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendText();
    }
  };

  // ─── Voice Engine (Deepgram Direct WS via Temp Token) ──────────────────────
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
      if (!isVoiceEnabled) return;
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
          setAgentState("error");
          break;
      }
    } catch {}
  }, [isVoiceEnabled, flushPlaybackQueue, router]);

  const startVoiceSession = useCallback(async () => {
    unlockAudio();
    setIsVoiceMode(true);
    setAgentState("connecting");

    try {
      // 1. Fetch short-lived token from our own secure backend
      const tokenRes = await fetch("/api/sunny");
      const { token, error } = await tokenRes.json();
      
      if (error || !token) throw new Error("Failed to get token");

      // 2. Access mic
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { channelCount: 1, sampleRate: 48000, echoCancellation: true, noiseSuppression: true, autoGainControl: true },
      });
      micStreamRef.current = stream;

      // 3. Audio Contexts
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 48000 });
      audioCtxRef.current = audioCtx;

      const playCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      playbackCtxRef.current = playCtx;
      nextPlayTimeRef.current = playCtx.currentTime;

      // 4. Connect DIRECTLY to Deepgram using the temporary token (Bypasses Netlify Edge completely)
      const ws = new WebSocket("wss://agent.deepgram.com/agent", ["token", token]);
      ws.binaryType = "arraybuffer";
      wsRef.current = ws;

      ws.onopen = () => {
        // Send settings first
        ws.send(JSON.stringify(AGENT_SETTINGS));

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
      ws.onerror = () => setAgentState("error");
      ws.onclose = () => {
        if (agentState !== "idle") setAgentState("idle");
      };
    } catch (err: any) {
      if (err?.name === "NotAllowedError") alert("Microphone access denied.");
      setAgentState("error");
      setIsVoiceMode(false); // Revert on failure
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
    setIsVoiceMode(false); // revert to text UI
  }, []);

  const closeChat = () => {
    setIsOpen(false);
    if (isVoiceMode) stopVoiceSession();
  };

  useEffect(() => {
    return () => { if (isVoiceMode) stopVoiceSession(); };
  }, [stopVoiceSession, isVoiceMode]);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 w-[350px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl flex flex-col h-[500px] max-h-[calc(100vh-8rem)] pointer-events-auto"
          >
            {/* Header (EXACTLY matching original UI) */}
            <div className="flex items-center justify-between bg-stone-900 px-4 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-inner border border-orange-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot-icon lucide-bot text-white"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                </div>
                <div>
                  <h3 className="font-barlow font-bold text-[15px] leading-tight">Sunrise AI Assistant</h3>
                  <p className="text-[11px] text-stone-400 mt-0.5">I can help you find what you need.</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
                  className={`rounded-full p-2 transition-colors ${
                    isVoiceEnabled ? "text-orange-400 hover:bg-stone-800" : "text-stone-400 hover:bg-stone-800 hover:text-white"
                  }`}
                  title={isVoiceEnabled ? "Mute Voice" : "Enable Voice Reader"}
                >
                  {isVoiceEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
                </button>
                <button
                  onClick={closeChat}
                  className="rounded-full p-2 text-stone-400 hover:bg-stone-800 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages Area (EXACTLY matching original UI) */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex max-w-[85%] items-start gap-2 ${
                      msg.role === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        msg.role === "user" ? "bg-stone-200" : "bg-gradient-to-br from-orange-400 to-orange-600 shadow-sm"
                      }`}
                    >
                      {msg.role === "user" ? (
                        <User size={14} className="text-stone-600" />
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot-icon lucide-bot text-white"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                      )}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-2.5 text-sm ${
                        msg.role === "user"
                          ? "bg-stone-900 text-white rounded-tr-sm"
                          : "bg-white border border-stone-200 text-stone-800 rounded-tl-sm shadow-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoadingText && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot-icon lucide-bot text-white"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                    </div>
                    <div className="rounded-2xl rounded-tl-sm bg-white border border-stone-200 px-4 py-3 shadow-sm">
                      <Loader2 size={16} className="animate-spin text-stone-400" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area (Text Box OR WebGL Orb) */}
            <div className="border-t border-stone-200 bg-white p-3 relative">
              <AnimatePresence mode="wait">
                {!isVoiceMode ? (
                  <motion.form 
                    key="text-mode"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSendText} 
                    className="relative flex items-center gap-2"
                  >
                    <div className="relative flex-1">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your message..."
                        className="w-full rounded-full border border-stone-200 bg-stone-50 py-3 pl-4 pr-10 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        disabled={isLoadingText}
                      />
                      <button
                        type="button"
                        onClick={(e) => { e.preventDefault(); startVoiceSession(); }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full text-stone-400 hover:bg-stone-200 hover:text-stone-700 transition-colors"
                        title="Switch to Voice Mode"
                      >
                        <Mic size={14} />
                      </button>
                    </div>
                    <button
                      type="submit"
                      disabled={!input.trim() || isLoadingText}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white transition-colors hover:bg-orange-600 disabled:bg-stone-300 disabled:text-stone-500"
                    >
                      <Send size={16} className="ml-0.5" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="voice-mode"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-2"
                  >
                    <div className="w-16 h-16 relative">
                      <VoicePoweredOrb state={orbState} aiAudioRef={orbAudioRef} />
                    </div>
                    <p className={`mt-2 text-xs font-medium ${agentState === "error" ? "text-red-500" : "text-orange-500 animate-pulse"}`}>
                      {agentState === "error" ? "Connection failed" : agentState === "connecting" ? "Connecting..." : agentState === "listening" ? "Listening..." : agentState === "thinking" ? "Thinking..." : "Speaking..."}
                    </p>
                    <button onClick={stopVoiceSession} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600">
                      <Square size={16} className="fill-current" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="mt-2 text-center">
                <span className="text-[10px] text-stone-400 font-medium">AI Assistant • Powered by Sunrise</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button (EXACTLY matching original UI) */}
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
                  onClick={closeChat}
                  initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1a1a1a] text-white shadow-xl hover:bg-orange-500 hover:shadow-orange-500/25 transition-all duration-300"
                  aria-label="Close chat"
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
                  onClick={() => setIsOpen(true)}
                >
                  <div className="flex h-full items-center bg-white rounded-full pl-1 pr-5 sm:pr-6 gap-2.5 sm:gap-3">
                    <button
                      className="flex shrink-0 items-center justify-center w-[36px] h-[36px] bg-[#f4f4f5] rounded-full hover:bg-[#e4e4e7] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(true);
                        startVoiceSession();
                      }}
                      title="Start speaking"
                      aria-label="Start speaking"
                    >
                      <Mic size={18} className="text-stone-800" />
                    </button>
                    <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.15em] font-bold text-stone-900 uppercase mt-0.5 whitespace-nowrap">
                      Tap to ask AI
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