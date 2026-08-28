"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface CurveTransitionProps {
  fillColor?: string;
  className?: string;
  inverted?: boolean;
  targetRef?: React.RefObject<HTMLElement | null>;
}

export default function CurveTransition({ fillColor = "#ffffff", className, inverted = false, targetRef }: CurveTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number>(-1);

  useEffect(() => {
    const target = targetRef?.current || containerRef.current;
    if (!target) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "200px 0px", 
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
      }
    );

    observerRef.current.observe(target);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (animationRef.current !== -1) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetRef]);

  const updateCurve = React.useCallback(() => {
    const target = targetRef?.current || containerRef.current;
    if (!target || !pathRef.current) return;

    const rect = target.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let progress;
    if (inverted) {
      progress = (windowHeight - rect.bottom) / windowHeight;
    } else {
      progress = (windowHeight - rect.top) / windowHeight;
    }

    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    const curveValue = 150 * (1 - progress);

    const d = inverted
      ? `M 0 100 Q 400 ${curveValue} 800 100 Z`
      : `M 0 0 Q 400 ${curveValue} 800 0 Z`;

    pathRef.current.setAttribute("d", d);
  }, [inverted, targetRef]);

  useEffect(() => {
    if (!isVisible) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        animationRef.current = requestAnimationFrame(() => {
          updateCurve();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    updateCurve();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animationRef.current !== -1) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, updateCurve]);

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
        position: "absolute",
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