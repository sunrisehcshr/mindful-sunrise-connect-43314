"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin, HeartPulse, Stethoscope, User, UserPlus, ShieldCheck, Navigation } from "lucide-react";
import SectionTag from "./ui/section-tag";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import ClinicStatus from "./ui/ClinicStatus";

// --- Scramble Text Effect (Restored & Enhanced) ---
function ScrambleText({ defaultText, hoverText, isHovered, className }: { defaultText: string, hoverText: string, isHovered?: boolean, className?: string }) {
    const [displayText, setDisplayText] = useState(defaultText);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    useEffect(() => {
        let animationFrameId: number;
        let iteration = 0;
        const targetText = isHovered ? hoverText : defaultText;
        const targetArray = Array.from(targetText); // Use Array.from to correctly handle emojis
        let lastTime = performance.now();
        const fpsInterval = 1000 / 30; // ~30fps for smooth visual scrambling

        const animate = (currentTime: number) => {
            animationFrameId = requestAnimationFrame(animate);
            
            const elapsed = currentTime - lastTime;
            
            if (elapsed > fpsInterval) {
                lastTime = currentTime - (elapsed % fpsInterval);
                
                setDisplayText(
                    targetArray
                        .map((letter, index) => {
                            if (index < iteration) return targetArray[index];
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join("")
                );

                if (iteration >= targetArray.length) {
                    cancelAnimationFrame(animationFrameId);
                }
                iteration += 1 / 3;
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [isHovered, defaultText, hoverText]);

    return (
        <span className={cn("cursor-default font-mono tabular-nums", className)}>
            {displayText}
        </span>
    );
}

// --- Opening Hours Component ---
function OpeningHours() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="font-barlow text-sm font-semibold tracking-tight text-stone-400 uppercase">Mon - Fri</div>
            <div className="font-barlow text-xl font-bold text-stone-900">9:00 AM - 5:00 PM</div>
        </div>
    );
}

// --- Glowing Bento Card ---
function Card({ children, className, containerClassName, onMouseEnter, onMouseLeave }: { children: React.ReactNode; className?: string, containerClassName?: string, onMouseEnter?: () => void, onMouseLeave?: () => void }) {
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
                "group relative border border-stone-200/80 bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-500",
                "hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-amber-200/50 hover:bg-white",
                containerClassName
            )}
            onMouseMove={handleMouseMove}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {/* Subtle Gradient Inset */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-stone-50/50 pointer-events-none" />
            
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(245, 158, 11, 0.12),
              transparent 80%
            )
          `,
                }}
            />
            <div className={cn("relative h-full w-full p-6", className)}>
                {children}
            </div>
        </div>
    );
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
    }
};

// --- Main Layout ---
const WhyChooseUsSection = () => {
    const [isScrambleCardHovered, setIsScrambleCardHovered] = useState(false);
    const iconContainerStyles = "w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 aspect-square rounded-xl bg-white flex items-center justify-center shadow-md shadow-stone-200/50 border border-stone-100 transition-transform group-hover:scale-110 duration-300 shrink-0";

    return (
        <section className="relative overflow-hidden bg-white pt-16 pb-8 selection:bg-stone-100 selection:text-stone-900 font-barlow">
            <div className="container mx-auto px-4 md:px-8">
                {/* Section Header with Animation */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <div className="flex flex-col items-center gap-4">
                        <SectionTag>Why Choose Us</SectionTag>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-balance font-normal text-stone-900 tracking-tighter leading-[1.1] md:leading-tight">
                            Expert clinical care that <br />
                            <span className="font-instrument-serif italic text-orange-500">doesn&apos;t make you wait.</span>
                        </h2>
                    </div>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="relative z-10 mx-auto max-w-7xl h-full flex flex-col gap-4 bg-white p-6 md:p-12 md:pb-20 rounded-[2.5rem] overflow-hidden text-stone-900 border border-stone-100"
                >
                    {/* ROW 1: Header + Status */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4 md:grid-cols-4 md:h-[140px] relative z-10">
                        {/* Brand Spotlight Card */}
                        <Card containerClassName="md:col-span-2 rounded-3xl bg-white group/brand" className="flex items-center justify-between gap-6 overflow-hidden">
                            <div className="flex flex-col justify-center relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="flex flex-col mt-1">
                                        <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-transparent bg-clip-text tracking-tight">
                                            Sunrise
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm md:text-base font-instrument-serif italic text-stone-400">Human Care Services</span>
                                            <div className="h-px w-8 bg-stone-200" />
                                        </div>
                                        <div className="mt-2">
                                            <ClinicStatus showBadge={true} />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative shrink-0 pr-4"
                            >
                                <div className="absolute inset-0 bg-amber-100/50 blur-3xl rounded-full scale-150 group-hover/brand:scale-[2] transition-transform duration-700" />
                                <Image 
                                    src="/images/logo.png" 
                                    alt="Sunrise Human Care Services Logo" 
                                    width={100} 
                                    height={90} 
                                    className="object-contain relative z-10 drop-shadow-2xl"
                                    style={{ height: "auto" }}
                                />
                            </motion.div>
                        </Card>

                        {/* Time Block (Hours) */}
                        <Card containerClassName="md:col-span-1 rounded-3xl bg-blue-50/80 border-blue-200/50 shadow-sm" className="flex flex-col justify-center items-center text-center">
                            <OpeningHours />
                            <span className="text-[10px] text-blue-700/60 uppercase mt-1 font-bold tracking-wider">Business Hours</span>
                        </Card>

                        {/* Availability Block */}
                        <Card containerClassName="md:col-span-1 rounded-3xl bg-emerald-50/40 text-stone-900 border-emerald-100/50 shadow-sm" className="flex flex-col justify-center items-start">
                            <div className="flex items-center justify-between w-full mb-3">
                                <span className="font-bold tracking-tight text-emerald-900">Accepting Patients</span>
                                <div className={iconContainerStyles}>
                                    <UserPlus className="h-5 w-5 text-emerald-600" />
                                </div>
                            </div>
                            <div className="text-[11px] text-emerald-800/70 leading-tight font-medium">
                                Start Your Care Within Days. <br /> Medicaid and Private Pay welcome.
                            </div>
                        </Card>
                    </motion.div>

                    {/* ROW 2: Main Hero Content + Tech Stack */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4 md:grid-cols-3 md:h-[500px] relative z-10">
                        {/* The Big "About" Card */}
                        <Card containerClassName="md:col-span-2 rounded-3xl bg-white shadow-sm" className="flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className={iconContainerStyles}>
                                    <HeartPulse className="h-5 w-5 text-amber-500" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-stone-50 border border-stone-100 text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                                    Why Sunrise?
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-6xl font-normal leading-[0.95] tracking-tighter text-stone-900">
                                    Mental health care <br />
                                    without the <span className="font-instrument-serif italic text-orange-500">3-month waitlist.</span>
                                </h2>
                                <p className="max-w-md text-stone-500 text-sm leading-relaxed font-medium">
                                    We&apos;ve eliminated the typical barriers to care. Get compassionate, licensed clinical specialists ready to help you thrive—available in our clinic or from your home within days, not months.
                                </p>
                            </div>

                            <div className="flex gap-6 pt-6 border-t border-stone-100">
                                <motion.div whileTap={{ scale: 0.96 }}>
                                    <Link href="/services" className="flex items-center gap-2 text-sm font-bold hover:text-amber-600 text-stone-400 transition-all duration-200 group/link">
                                        <span className="border-b-2 border-transparent group-hover/link:border-amber-600 transition-all uppercase tracking-wider">Our Services</span>
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                </motion.div>
                                <motion.div whileTap={{ scale: 0.96 }}>
                                    <Link href="/appointment" className="flex items-center gap-2 text-sm font-bold hover:text-amber-600 text-stone-400 transition-all duration-200 group/link">
                                        <span className="border-b-2 border-transparent group-hover/link:border-amber-600 transition-all uppercase tracking-wider">Book Visit</span>
                                        <Calendar className="h-4 w-4" />
                                    </Link>
                                </motion.div>
                            </div>
                        </Card>

                        {/* Vertical Stack: Services & Stack */}
                        <div className="flex flex-col gap-4 h-full">
                            <Card containerClassName="flex-1 rounded-3xl bg-indigo-50/20 border-indigo-100/30" className="flex flex-col justify-between">
                                <div className={iconContainerStyles}>
                                    <Stethoscope className="h-5 w-5 text-indigo-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-stone-900">Specialties</h3>
                                    <ul className="mt-4 space-y-3 text-sm text-stone-500 font-medium">
                                        <li className="flex justify-between border-b border-indigo-100/20 pb-2 hover:text-stone-900 transition-colors">
                                            <span>Individual Therapy</span>
                                            <User className="h-3.5 w-3.5 text-indigo-400" />
                                        </li>
                                        <li className="flex justify-between border-b border-indigo-100/20 pb-2 hover:text-stone-900 transition-colors">
                                            <span>Psychiatric Eval</span>
                                            <ArrowUpRight className="h-3.5 w-3.5 text-indigo-400" />
                                        </li>
                                        <li className="flex justify-between border-b border-indigo-100/20 pb-2 hover:text-stone-900 transition-colors">
                                            <span>Medication Mgmt</span>
                                            <ArrowUpRight className="h-3.5 w-3.5 text-indigo-400" />
                                        </li>
                                    </ul>
                                </div>
                            </Card>

                            <Card 
                                containerClassName="h-1/3 rounded-3xl bg-gradient-to-br from-stone-50 to-white border-stone-100/30 shadow-sm" 
                                className="flex items-center justify-center"
                                onMouseEnter={() => setIsScrambleCardHovered(true)}
                                onMouseLeave={() => setIsScrambleCardHovered(false)}
                            >
                                <div className="text-center">
                                    <ScrambleText 
                                        defaultText="TRUSTED☀️CARE" 
                                        hoverText="REAL☀️HEALING" 
                                        isHovered={isScrambleCardHovered}
                                        className="text-lg font-bold tracking-[0.2em] text-stone-700 uppercase" 
                                    />
                                    <p className="text-[10px] text-stone-600/60 mt-1 font-bold uppercase tracking-widest">With Compassionate Experts</p>
                                </div>
                            </Card>
                        </div>
                    </motion.div>

                    {/* ROW 3: Gallery / Visuals */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4 md:grid-cols-4 md:h-[300px] relative z-10">
                        <Card containerClassName="md:col-span-1 rounded-3xl bg-stone-50/50 border-stone-100 shadow-sm" className="flex flex-col justify-between group min-h-[200px] md:min-h-0">
                            <div className="flex justify-between items-start">
                                <div className={iconContainerStyles}>
                                    <MapPin className="h-5 w-5 text-stone-400" />
                                </div>
                                <a 
                                    href="https://www.google.com/maps/search/?api=1&query=869+Main+Street+Darby+PA+19023" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="View our Darby clinic location on Google Maps"
                                    className="h-10 w-10 rounded-xl bg-stone-900 text-white flex items-center justify-center hover:bg-orange-600 transition-all active:scale-[0.96] hover:shadow-lg hover:shadow-orange-200"
                                >
                                    <Navigation className="h-4 w-4" />
                                </a>
                            </div>
                            
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Clinic Address</p>
                                <h4 className="text-sm font-bold text-stone-800 leading-tight">
                                    869 Main Street <br />
                                    Darby, PA 19023
                                </h4>
                                <p className="text-[10px] text-stone-500 mt-2 font-medium">United States</p>
                            </div>
                        </Card>

                        <Card containerClassName="md:col-span-3 rounded-3xl bg-stone-50/30 border-stone-100 overflow-hidden group/quality" className="flex flex-col justify-center items-center text-center py-10 md:py-12">
                            <div className="relative z-10 w-full px-4">
                                <div className="h-12 w-12 md:h-16 md:w-16 rounded-2xl bg-white flex items-center justify-center shadow-xl shadow-stone-200/50 border border-stone-100 mx-auto mb-6 transition-transform duration-500 group-hover/quality:scale-110 group-hover/quality:rotate-3">
                                    <ShieldCheck className="h-6 w-6 md:h-8 md:w-8 text-emerald-500" />
                                </div>
                                <h3 className="text-xl sm:text-2xl md:text-4xl font-light tracking-tight text-stone-800 leading-[1.2] md:leading-[1.1] max-w-[900px] mx-auto text-balance">
                                    &quot;We don&apos;t just treat symptoms; we help you <span className="font-instrument-serif italic text-orange-500">reclaim the person you were before the struggle began.</span>&quot;
                                </h3>
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.96 }}
                                        className="mt-6 md:mt-8 rounded-full bg-orange-500 px-8 md:px-10 py-3 md:py-3.5 text-xs md:text-sm font-bold text-stone-50 shadow-2xl shadow-orange-500/20 transition-all hover:bg-orange-400"
                                    >
                                        Start Today
                                    </motion.button>
                                </Link>
                            </div>
                            {/* Enhanced Decorative Elements */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15] pointer-events-none" />
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-100/20 blur-[100px] rounded-full pointer-events-none group-hover/quality:bg-amber-200/30 transition-colors duration-700" />
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
