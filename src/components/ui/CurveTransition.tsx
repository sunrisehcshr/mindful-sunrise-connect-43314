"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CurveTransitionProps {
  fillColor?: string; // The background color of the PREVIOUS section (e.g. "#ffffff" or "rgb(250, 250, 249)")
  className?: string; // Additional classes for positioning
  inverted?: boolean; // If true, the curve points upwards (for bottom of sections)
  targetRef?: React.RefObject<HTMLElement | null>; // Optional target to track for scroll
}

export default function CurveTransition({ fillColor = "#ffffff", className, inverted = false, targetRef }: CurveTransitionProps) {
  const internalRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef || internalRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress (0 to 1) to the curve value (150 down to 0)
  const curveValue = useTransform(scrollYProgress, [0, 1], [150, 0]);
  
  const smoothCurveValue = useSpring(curveValue, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform the curveValue into the SVG path string
  const pathData = useTransform(
    (prefersReducedMotion || isMobile) ? curveValue : smoothCurveValue,
    (val) => inverted 
      ? `M 0 100 Q 400 ${val} 800 100 Z` // Starts at 150 (dip), moves to 0 (hump)
      : `M 0 0 Q 400 ${val} 800 0 Z`        // Normal curve pointing down
  );

  return (
    <div 
      ref={internalRef} 
      className={cn(
        "absolute left-0 w-full overflow-hidden z-10 pointer-events-none", 
        inverted ? "bottom-0" : "top-0",
        className
      )}
      style={{ 
        height: "10vw", 
        minHeight: "60px", 
        maxHeight: "150px", 
        transform: inverted ? "translateY(1px)" : "translateY(-1px)",
        position: "absolute" // Explicitly ensure non-static position for Framer Motion
      }} 
    >
      <svg 
        viewBox="0 0 800 100" 
        preserveAspectRatio="none" 
        className="w-full h-full overflow-visible"
      >
        <motion.path 
          fill={fillColor} 
          d={pathData} 
        />
      </svg>
    </div>
  );
}
