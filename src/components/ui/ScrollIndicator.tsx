"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const { scrollYProgress } = useScroll();
  
  // Smooth spring for the circle fill - matches the scroll speed smoothly
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If we are at the very top (less than 300px), definitely hide it
      if (currentScrollY < 300) {
        setIsVisible(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Check if scrolling up (current is less than last)
      const isScrollingUp = currentScrollY < lastScrollY.current;
      
      // If scrolling up, show it. If scrolling down, hide it.
      if (isScrollingUp) {
        setIsVisible(true);
        
        // Clear any existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        
        // Set a new timeout to hide the button after 3 seconds of inactivity
        timeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      } else {
        setIsVisible(false);
      }

      // Update last scroll position
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-8 right-8 z-[100]"
        >
          <button
            onClick={scrollToTop}
            className="group relative flex items-center justify-center w-14 h-14 bg-white/90 backdrop-blur-md rounded-full border border-stone-200 shadow-2xl transition-all duration-300 hover:border-orange-500 hover:bg-white"
            aria-label="Scroll to top"
          >
            {/* SVG Progress Circle */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 56 56">
              <circle
                cx="28"
                cy="28"
                r="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-stone-100"
              />
              <motion.circle
                cx="28"
                cy="28"
                r="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="text-orange-500"
                style={{
                  pathLength,
                }}
              />
            </svg>

            {/* Arrow Icon */}
            <ArrowUp className="w-6 h-6 text-stone-700 group-hover:text-orange-600 transition-colors" />
            
            {/* Tooltip for accessibility */}
            <span className="sr-only">Back to top</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
