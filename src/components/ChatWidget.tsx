"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Bot, Loader2, Mic, Volume2, VolumeX, Square, MessageSquareText } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content: "Hi! I'm the Sunrise Human Care Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Voice feature states
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [hasSpeechSupport, setHasSpeechSupport] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Load available voices for TTS
  useEffect(() => {
    const loadVoices = () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        setVoices(window.speechSynthesis.getVoices());
      }
    };
    
    if (typeof window !== "undefined" && window.speechSynthesis) {
      loadVoices();
      // Chrome loads voices asynchronously, so we must listen to the event
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Initialize Speech Recognition (Speech-to-Text)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        setHasSpeechSupport(true);
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event: any) => {
          const current = event.resultIndex;
          const transcript = event.results[current][0].transcript;
          setInput(transcript);
        };

        recognition.onerror = (event: any) => {
          console.error("Speech recognition error:", event.error);
          setIsListening(false);
          if (event.error === 'not-allowed') {
            alert("Microphone access was denied. Please allow microphone permissions in your browser to use voice input.");
          }
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }
    }
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Text-to-Speech Helper
  const speakMessage = (text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel(); // Stop any currently playing speech
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Find a natural sounding English female voice
    const englishVoices = voices.filter(v => v.lang.startsWith('en'));
    const femaleVoice = englishVoices.find(v => 
      v.name.includes('Samantha') || // Apple's high quality voice
      v.name.includes('Google US English') || // Chrome's high quality voice
      v.name.includes('Zira') || // Microsoft's default female
      v.name.includes('Victoria') ||
      v.name.includes('Karen') ||
      v.name.toLowerCase().includes('female')
    );

    if (femaleVoice) {
      utterance.voice = femaleVoice;
    } else if (englishVoices.length > 0) {
      // Fallback to the first English voice if no specific female voice is found
      utterance.voice = englishVoices[0];
    }

    // Slightly tweak the speech properties for a calmer, more natural tone
    utterance.rate = 0.95;
    utterance.pitch = 1.05;

    window.speechSynthesis.speak(utterance);
  };

  const toggleVoice = () => {
    const newState = !isVoiceEnabled;
    setIsVoiceEnabled(newState);
    // Stop speaking immediately if turned off
    if (!newState && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  };

  const toggleListening = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      setInput(""); // Optional: clear input when starting to dictate
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Stop listening if user hits send while mic is active
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

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
      
      // Speak the response if voice mode is enabled
      if (isVoiceEnabled) {
        speakMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I'm having trouble connecting right now. Please call us at (814) 620-2162.",
      };
      setMessages((prev) => [...prev, errorMessage]);
      
      if (isVoiceEnabled) {
        speakMessage(errorMessage.content);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Allow 'Enter' to send when typing
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 w-[350px] max-w-[calc(100vw-3rem)] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl flex flex-col h-[500px] max-h-[calc(100vh-8rem)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-stone-900 px-4 py-4 text-white">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-barlow font-bold leading-none">Sunrise Assistant</h3>
                  <p className="text-xs text-stone-400 mt-1">We typically reply instantly</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {/* Voice Auto-Read Toggle */}
                <button
                  onClick={toggleVoice}
                  className={`rounded-full p-2 transition-colors ${
                    isVoiceEnabled ? "text-orange-400 hover:bg-stone-800" : "text-stone-400 hover:bg-stone-800 hover:text-white"
                  }`}
                  title={isVoiceEnabled ? "Mute Voice" : "Enable Voice Reader"}
                  aria-label="Toggle voice responses"
                >
                  {isVoiceEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
                </button>
                <button
                  onClick={closeChat}
                  className="rounded-full p-2 text-stone-400 hover:bg-stone-800 hover:text-white transition-colors"
                  aria-label="Close chat"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
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
                        msg.role === "user" ? "bg-stone-200" : "bg-orange-100"
                      }`}
                    >
                      {msg.role === "user" ? (
                        <User size={14} className="text-stone-600" />
                      ) : (
                        <Bot size={14} className="text-orange-600" />
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
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100">
                      <Bot size={14} className="text-orange-600" />
                    </div>
                    <div className="rounded-2xl rounded-tl-sm bg-white border border-stone-200 px-4 py-3 shadow-sm">
                      <Loader2 size={16} className="animate-spin text-stone-400" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-stone-200 bg-white p-3">
              <form onSubmit={handleSend} className="relative flex items-center gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={isListening ? "Listening..." : "Type your message..."}
                    className={`w-full rounded-full border bg-stone-50 py-3 pl-4 text-sm focus:outline-none focus:ring-1 ${
                      isListening 
                        ? "border-orange-500 ring-1 ring-orange-500 text-orange-700 pr-10" 
                        : "border-stone-200 pr-10 focus:border-orange-500 focus:ring-orange-500"
                    }`}
                    disabled={isLoading}
                  />
                  {hasSpeechSupport && (
                    <button
                      type="button"
                      onClick={toggleListening}
                      disabled={isLoading}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
                        isListening 
                          ? "bg-orange-100 text-orange-600 animate-pulse" 
                          : "text-stone-400 hover:bg-stone-200 hover:text-stone-700"
                      }`}
                      aria-label={isListening ? "Stop listening" : "Dictate message"}
                    >
                      {isListening ? <Square size={12} className="fill-current" /> : <Mic size={14} />}
                    </button>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white transition-colors hover:bg-orange-600 disabled:bg-stone-300 disabled:text-stone-500"
                  aria-label="Send message"
                >
                  <Send size={16} className="ml-0.5" />
                </button>
              </form>
              <div className="mt-2 text-center">
                <span className="text-[10px] text-stone-400 font-medium">AI Assistant • Powered by Sunrise</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.button
            key="close"
            onClick={closeChat}
            initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1a1a1a] text-white shadow-xl hover:bg-black transition-colors"
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
            className="flex items-center bg-[#1a1a1a] p-1.5 rounded-full shadow-2xl cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform"
            onClick={() => setIsOpen(true)}
          >
            <div className="flex items-center bg-white rounded-full pl-1.5 pr-6 sm:pr-8 py-1.5 gap-3 sm:gap-4">
              <button 
                className="flex shrink-0 items-center justify-center w-10 h-10 bg-[#f4f4f5] rounded-full hover:bg-[#e4e4e7] transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(true);
                  if (hasSpeechSupport) {
                     setTimeout(() => {
                       if (!isListening) {
                         recognitionRef.current?.start();
                         setIsListening(true);
                       }
                     }, 400);
                  }
                }}
                title="Start speaking"
                aria-label="Start speaking"
              >
                <Mic size={18} className="text-stone-800" />
              </button>
              <span className="font-mono text-[11px] sm:text-xs tracking-[0.15em] font-bold text-stone-900 uppercase mt-0.5">
                Tap and ask AI
              </span>
            </div>
            <div className="px-3 sm:px-4 text-stone-400">
              <MessageSquareText size={22} className="opacity-80" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}