"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CurveTransitionProps {
  fillColor?: string; // The background color of the PREVIOUS section (e.g. "#ffffff" or "rgb(250, 250, 249)")
  className?: string; // Additional classes for positioning
  inverted?: boolean; // If true, the curve points upwards (for bottom of sections)
  targetRef?: React.RefObject<HTMLElement | null>; // Optional target to track for scroll
}

export default function CurveTransition({ fillColor = "#ffffff", className, inverted = false, targetRef }: CurveTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateCurve = () => {
      const target = targetRef?.current || containerRef.current;
      if (!target || !pathRef.current) {
        ticking = false;
        return;
      }

      const rect = target.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      let progress;
      if (inverted) {
        // Curve is at the bottom of the section
        // Animate from when bottom enters viewport (windowHeight) to when it reaches top (0)
        progress = (windowHeight - rect.bottom) / windowHeight;
      } else {
        // Curve is at the top of the section
        // Animate from when top enters viewport (windowHeight) to when it reaches top (0)
        progress = (windowHeight - rect.top) / windowHeight;
      }
      
      // Clamp between 0 and 1
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      // Curve value goes from 150 down to 0
      const curveValue = 150 * (1 - progress);
      
      const d = inverted 
        ? `M 0 100 Q 400 ${curveValue} 800 100 Z` 
        : `M 0 0 Q 400 ${curveValue} 800 0 Z`;
        
      pathRef.current.setAttribute("d", d);
      ticking = false;
    };

    // Initial update
    updateCurve();

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateCurve);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [inverted, targetRef]);

  return (
    <div 
      ref={containerRef} 
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
        position: "absolute" 
      }} 
    >
      <svg 
        viewBox="0 0 800 100" 
        preserveAspectRatio="none" 
        className="w-full h-full overflow-visible"
      >
        <path 
          ref={pathRef}
          fill={fillColor} 
          d={inverted ? "M 0 100 Q 400 150 800 100 Z" : "M 0 0 Q 400 150 800 0 Z"} 
        />
      </svg>
    </div>
  );
}
