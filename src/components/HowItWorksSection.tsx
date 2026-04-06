"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion, useMotionValue, useMotionTemplate } from "framer-motion";
import SectionTag from './ui/section-tag';
import ParallaxBanner from './ui/ParallaxBanner';
import CurveTransition from './ui/CurveTransition';
import { cn } from "@/lib/utils";

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

// --- Glowing Bento Card (Shared Style) ---
function Card({ children, className, containerClassName, isActive }: { children: React.ReactNode; className?: string, containerClassName?: string, isActive?: boolean }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                "group relative border border-stone-200/80 bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-500 rounded-3xl",
                "hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-amber-200/50",
                isActive ? "bg-orange-600 border-transparent shadow-[0_20px_50px_rgba(249,115,22,0.3)] -translate-y-1.5" : "hover:bg-white",
                containerClassName
            )}
            onMouseMove={handleMouseMove}
            data-active={isActive}
        >
            <div className={cn(
                "absolute inset-0 pointer-events-none transition-opacity duration-500",
                isActive ? "bg-orange-600" : "bg-gradient-to-br from-transparent to-stone-50/50"
            )} />
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.15),
              transparent 80%
            )
          `,
                }}
            />
            <div className={cn("relative h-full w-full p-8", className)}>
                {children}
            </div>
        </div>
    );
}

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
    // Adjust thresholds so step 1 triggers earlier, and they don't overlap awkwardly
    const stepThreshold = i === 0 ? 0.05 : (i / totalSteps);
    
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
                <Card isActive={shouldGlow} containerClassName={`transition-all duration-500 border ${shouldGlow ? 'border-orange-500 shadow-lg shadow-orange-500/50' : 'border-stone-200/80'} ${(!prefersReducedMotion && (isHovered || (shouldGlow && !isHovered))) ? (isLeft ? '-translate-x-1' : 'translate-x-1') : ''}`}>
                    <span
                        className={cn(
                            "block text-xs md:text-sm font-bold mb-4 font-barlow tracking-widest uppercase transition-colors duration-500 tabular-nums",
                            shouldGlow ? "text-white" : "text-stone-400"
                        )}
                    >
                        Step {number}
                    </span>
                    <h3 className={cn(
                        "text-xl md:text-2xl font-bold mb-3 tracking-tight transition-colors duration-500",
                        shouldGlow ? "text-white" : "text-stone-900 group-hover:text-orange-600"
                    )}>
                        {step.q}
                    </h3>
                    <p className={cn(
                        "text-sm leading-relaxed font-barlow transition-colors duration-500",
                        shouldGlow ? "text-white/90" : "text-stone-500"
                    )}>
                        {step.a}
                    </p>
                </Card>
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