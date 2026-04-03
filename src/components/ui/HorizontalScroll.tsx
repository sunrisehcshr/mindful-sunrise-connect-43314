
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { MoveLeft, MoveRight, Smartphone } from "lucide-react";

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  showProgress?: boolean;
  autoPlay?: boolean;
  autoPlaySpeed?: number; // Pixels per frame
}

export const HorizontalScroll = ({
  children,
  className,
  containerClassName,
  showProgress = true,
  autoPlay = true,
  autoPlaySpeed = 0.4,
}: HorizontalScrollProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const animationRef = useRef<number>(0);

  const { scrollXProgress } = useScroll({
    container: scrollRef,
  });

  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Auto-play logic using performance.now() for consistency
  useEffect(() => {
    if (!autoPlay || isPaused) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    let lastTime = performance.now();
    let currentPos = scrollRef.current?.scrollLeft || 0;

    const scroll = (currentTime: number) => {
      if (scrollRef.current) {
        const deltaTime = currentTime - lastTime;
        // Normalize speed to 60fps (16.67ms per frame)
        const pixelsToScroll = (autoPlaySpeed * deltaTime) / 16.67;
        
        currentPos += pixelsToScroll;
        
        // Loop back logic
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        if (currentPos >= maxScroll - 5) {
          currentPos = 0;
        }
        
        scrollRef.current.scrollLeft = currentPos;
      }
      lastTime = currentTime;
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [autoPlay, isPaused, autoPlaySpeed]);

  // Hide swipe hint on scroll or interaction
  useEffect(() => {
    const handleInteraction = () => setShowSwipeHint(false);
    const scrollContainer = scrollRef.current;
    
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleInteraction, { once: true });
      scrollContainer.addEventListener('touchstart', handleInteraction, { once: true });
      scrollContainer.addEventListener('mousedown', handleInteraction, { once: true });
    }
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleInteraction);
        scrollContainer.removeEventListener('touchstart', handleInteraction);
        scrollContainer.removeEventListener('mousedown', handleInteraction);
      }
    };
  }, []);

  // Check if content is scrollable
  useEffect(() => {
    const checkScrollable = () => {
      if (scrollRef.current) {
        setCanScroll(scrollRef.current.scrollWidth > scrollRef.current.clientWidth);
      }
    };

    const timer = setTimeout(checkScrollable, 100);
    window.addEventListener("resize", checkScrollable);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkScrollable);
    };
  }, []);

  return (
    <div 
      className={cn("relative group/scroll w-full", containerClassName)}
      role="region"
      aria-label="Horizontal scrollable content"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onMouseDown={() => setIsPaused(true)}
      onMouseUp={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => {
        // Longer delay for mobile after manual interaction
        setTimeout(() => setIsPaused(false), 4000);
      }}
    >
      <AnimatePresence>
        {showSwipeHint && canScroll && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-stone-200 shadow-sm pointer-events-none"
          >
            <Smartphone className="w-3.5 h-3.5 text-orange-500 animate-bounce" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Swipe to Explore</span>
            <div className="flex gap-1 ml-1">
              <MoveLeft className="w-3 h-3 text-stone-300" />
              <MoveRight className="w-3 h-3 text-stone-300" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        ref={scrollRef}
        tabIndex={0}
        className={cn(
          "flex overflow-x-auto overflow-y-hidden gap-6 pb-12 pt-4 no-scrollbar outline-none focus-visible:ring-2 focus-visible:ring-orange-500/20",
          "cursor-grab active:cursor-grabbing",
          isPaused ? "snap-x snap-mandatory" : "snap-none",
          "touch-pan-x",
          className
        )}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollBehavior: 'auto'
        }}
      >
        {React.Children.map(children, (child) => (
          <div className={cn("shrink-0", isPaused ? "snap-center" : "snap-none")}>
            {child}
          </div>
        ))}
      </div>

      {showProgress && canScroll && (
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[2px] bg-stone-100 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Scroll progress"
        >
          <motion.div
            className="h-full bg-orange-500 origin-left"
            style={{ scaleX }}
          />
        </div>
      )}

      <motion.div 
        className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none z-10"
        style={{ opacity: useTransform(scrollXProgress, [0, 0.1], [0, 1]) }}
      />
      <motion.div 
        className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none z-10"
        style={{ opacity: useTransform(scrollXProgress, [0.9, 1], [1, 0]) }}
      />
    </div>
  );
};
