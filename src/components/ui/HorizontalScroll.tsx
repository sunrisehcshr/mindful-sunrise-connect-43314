
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

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

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let lastTime = performance.now();
    const scroll = (currentTime: number) => {
      if (scrollRef.current) {
        const deltaTime = currentTime - lastTime;
        const pixelsToScroll = (autoPlaySpeed * deltaTime) / 16.67;
        
        const currentPos = scrollRef.current.scrollLeft;
        const newPos = currentPos + pixelsToScroll;
        
        // Loop back logic
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        
        if (newPos >= maxScroll - 2) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'instant' as any });
        } else {
          scrollRef.current.scrollTo({ left: newPos, behavior: 'instant' as any });
        }
      }
      lastTime = currentTime;
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [autoPlay, isPaused, autoPlaySpeed]);

  // Check if content is scrollable
  useEffect(() => {
    const checkScrollable = () => {
      if (scrollRef.current) {
        setCanScroll(scrollRef.current.scrollWidth > scrollRef.current.clientWidth);
      }
    };

    // Initial check after a short delay for layout stability
    const timer = setTimeout(checkScrollable, 100);
    
    checkScrollable();
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
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => {
        // Delay resuming auto-play after touch to prevent jumpiness
        setTimeout(() => setIsPaused(false), 2000);
      }}
    >
      <div
        ref={scrollRef}
        tabIndex={0}
        className={cn(
          "flex overflow-x-auto overflow-y-hidden gap-6 pb-12 pt-4 no-scrollbar outline-none focus-visible:ring-2 focus-visible:ring-orange-500/20",
          "cursor-grab active:cursor-grabbing snap-x snap-mandatory",
          "touch-pan-x",
          className
        )}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {React.Children.map(children, (child) => (
          <div className="snap-center shrink-0">
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

      {/* Optional: Add shadow indicators for scroll depth */}
      <motion.div 
        className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"
        style={{ opacity: useTransform(scrollXProgress, [0, 0.1], [0, 1]) }}
      />
      <motion.div 
        className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"
        style={{ opacity: useTransform(scrollXProgress, [0.9, 1], [1, 0]) }}
      />
    </div>
  );
};
