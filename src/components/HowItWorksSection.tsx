"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import SectionTag from './ui/section-tag';
import ParallaxBanner from './ui/ParallaxBanner';
import CurveTransition from './ui/CurveTransition';

interface StepItem {
    q: string;
    a: string;
}

interface HowItWorksSectionProps {
    steps?: StepItem[];
    accentColor?: string;
}

const defaultSteps: StepItem[] = [
    { q: "The First Conversation", a: "Call or click to speak with a care coordinator who actually listens. We'll match you with the right specialist in Darby—no automated menus, just real people." },
    { q: "Your Clinical Evaluation", a: "Meet with a board-certified expert for a deep-dive assessment. We don't just look at symptoms; we look at the whole person." },
    { q: "A Plan Built for You", a: "Receive a clear, evidence-based roadmap combining modern therapy and precise medication management, if needed. No guesswork." },
    { q: "Sustained Recovery", a: "Begin your transformation with the ongoing support of a team that stays by your side until you feel like yourself again." }
];

// Timeline Step Component to safely handle its own hooks
const TimelineStep = ({
    step,
    i,
    totalSteps,
    hoveredIndex,
    setHoveredIndex,
    accentColor,
    progress,
    prefersReducedMotion,
}: {
    step: StepItem;
    i: number;
    totalSteps: number;
    hoveredIndex: number | null;
    setHoveredIndex: (i: number | null) => void;
    accentColor: string;
    progress: any; 
    prefersReducedMotion: boolean | null;
}) => {
    const isLeft = i % 2 === 0;
    const isHovered = hoveredIndex === i;
    const number = String(i + 1).padStart(2, "0");
    
    // Calculate threshold for when this step becomes "active" via scroll
    const stepThreshold = i / Math.max(1, totalSteps - 1);
    
    // Use the vertical line progress to trigger card glow
    const isCardGlowing = useTransform(progress, (p: number) => p >= stepThreshold);
    const [shouldGlow, setShouldGlow] = useState(false);

    useEffect(() => {
        const unsubscribe = isCardGlowing.on("change", (latest) => {
            setShouldGlow(latest);
        });
        return () => unsubscribe();
    }, [isCardGlowing]);

    return (
        <div className="relative flex items-start md:items-center">
            {/* Dot removed as per requirement */}

            {/* Card positioning */}
            <motion.div
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileTap={{ scale: 0.96 }}
                className={`
                    ml-10 md:ml-0 w-full md:w-[calc(50%-2.5rem)]
                    ${isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"}
                    cursor-pointer
                `}
            >
                <div 
                    className="relative rounded-2xl p-6 transition-all duration-500 cursor-default bg-white"
                    style={{
                        border: `1px solid ${shouldGlow ? `${accentColor}80` : (isHovered ? `${accentColor}40` : "rgba(0,0,0,0.05)")}`,
                        boxShadow: shouldGlow 
                            ? `0 10px 40px -10px ${accentColor}40` 
                            : (isHovered ? `0 10px 30px -10px ${accentColor}20` : "0 4px 20px -10px rgba(0,0,0,0.05)"),
                        transform: (isHovered || (shouldGlow && !isHovered)) && !prefersReducedMotion 
                            ? (isLeft ? "translateX(-5px)" : "translateX(5px)") 
                            : "none",
                    }}
                >
                    <span
                        className="block text-sm font-bold mb-3 font-barlow tracking-widest uppercase transition-colors duration-500 tabular-nums"
                        style={{ color: shouldGlow ? accentColor : "rgba(0,0,0,0.4)" }}
                    >
                        Step {number}
                    </span>
                    <h3 className="text-xl md:text-2xl font-normal text-stone-900 mb-3 tracking-tight">
                        {step.q}
                    </h3>
                    <p className="text-stone-500 text-sm md:text-base leading-relaxed font-barlow">
                        {step.a}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
    steps = defaultSteps,
    accentColor = "#f97316", // orange-500
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const prefersReducedMotion = useReducedMotion();

    // Track scroll progress within the timeline container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"] // Start animating when top hits center, finish when bottom hits center
    });

    // Add a spring for smooth, performant interpolation
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Calculate height of the active line based on scroll
    const lineHeight = useTransform(
        prefersReducedMotion ? scrollYProgress : smoothProgress, 
        [0, 1], 
        ["0%", "100%"]
    );

    return (
        <div
            className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-stone-50/50"
        >
            <CurveTransition fillColor="#ffffff" />
            <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
                {/* Header matching site style */}
                <motion.div 
                  className="max-w-4xl mx-auto text-center mb-16 md:mb-24" 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, margin: "-100px" }} 
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <SectionTag>
                        Your Journey
                    </SectionTag>
                    <h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight">
                        The 4-step path to <span className="font-instrument-serif italic text-orange-500">reclaiming your life.</span>
                    </h2>
                  </div>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative" ref={containerRef}>
                    {/* Background Vertical Line */}
                    <div
                        className="absolute top-0 bottom-0 w-px left-4 md:left-1/2 md:-translate-x-px"
                        style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
                    />
                    
                    {/* Animated Fill Line */}
                    <motion.div
                        className="absolute top-0 w-1 left-4 md:left-1/2 md:-translate-x-1/2 rounded-full origin-top"
                        style={{ 
                            backgroundColor: accentColor,
                            height: lineHeight,
                            boxShadow: `0 0 10px ${accentColor}40`
                        }}
                    />

                    <div className="flex flex-col gap-16">
                        {steps.map((step, i) => (
                            <TimelineStep 
                                key={i}
                                step={step}
                                i={i}
                                totalSteps={steps.length}
                                hoveredIndex={hoveredIndex}
                                setHoveredIndex={setHoveredIndex}
                                accentColor={accentColor}
                                progress={prefersReducedMotion ? scrollYProgress : smoothProgress}
                                prefersReducedMotion={prefersReducedMotion}
                            />
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Parallax Banner integrated at the end of the section */}
            <div className="mt-24 md:mt-32">
                <ParallaxBanner />
            </div>
        </div>
    );
};

export default HowItWorksSection;