"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, AnimatePresence, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Calendar, Phone, MapPin, ShieldCheck, Users, Navigation, HeartPulse, UserPlus, Plus, Home, BookOpen, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import AppointmentSection from '@/components/Appointment/AppointmentSection';
import SectionTag from '@/components/ui/section-tag';
import CurveTransition from '@/components/ui/CurveTransition';
import ClinicStatus from '@/components/ui/ClinicStatus';
import dynamic from 'next/dynamic';
const UiloraFrostedGlass = dynamic(() => import('@/components/ui/uilora-frosted-glass'), { ssr: false });
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar01Icon, ArrowRight01Icon, CallIcon } from "@hugeicons/core-free-icons";

// --- Timeline Step Component ---
const TimelineStep = React.memo(({
    step,
    i,
    totalSteps,
    hoveredIndex,
    setHoveredIndex,
    accentColor,
    progress,
    prefersReducedMotion,
}: {
    step: { title: string; desc: string };
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

    const stepThresholdStart = i / totalSteps;
    const stepThresholdEnd = (i + 1) / totalSteps;
    
    const isCardGlowing = useTransform(progress, (p: number) => {
        if (i === totalSteps - 1 && p >= stepThresholdStart) return true;
        return p >= stepThresholdStart && p < stepThresholdEnd;
    });
    const [shouldGlow, setShouldGlow] = useState(false);

    useEffect(() => {
        const unsubscribe = isCardGlowing.on("change", (latest) => {
            setShouldGlow(latest);
        });
        return () => unsubscribe();
    }, [isCardGlowing]);

    return (
        <div className="relative flex items-start md:items-center">
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
                    className="relative rounded-[2rem] p-8 transition duration-500 cursor-default bg-white group/step"
                    style={{
                        border: `1px solid ${shouldGlow ? `${accentColor}80` : (isHovered ? `${accentColor}40` : "rgba(0,0,0,0.05)")}`,
                        boxShadow: shouldGlow
                            ? `0 10px 40px -10px ${accentColor}40`
                            : (isHovered ? `0 10px 30px -10px ${accentColor}20` : "0 4px 20px -10px rgba(0,0,0,0.05)"),
                        transform: (isHovered || (shouldGlow && !isHovered)) && !prefersReducedMotion
                            ? (isLeft ? "translateX(-5px)" : "translateX(5px)")
                            : "none",
                        background: shouldGlow ? 'linear-gradient(135deg, #ffffff 0%, #fff7ed 100%)' : '#ffffff'
                    }}
                >
                    <span 
                        className={cn(
                            "font-bold text-5xl font-instrument-serif mb-4 block transition duration-500",
                            shouldGlow ? "text-orange-500 opacity-100" : "text-orange-500 opacity-30 group-hover/step:opacity-100"
                        )}
                    >
                        {number}
                    </span>
                    <h3 className={cn(
                        "text-2xl font-bold font-barlow mb-3 tracking-tight transition-colors duration-500",
                        shouldGlow ? "text-orange-600" : "text-stone-900 group-hover/step:text-orange-600"
                    )}>
                        {step.title}
                    </h3>
                    <p className="text-stone-500 text-base leading-relaxed font-barlow">
                        {step.desc}
                    </p>
                </div>
            </motion.div>
        </div>
    );
});

TimelineStep.displayName = "TimelineStep";

const processSteps = [
  {
    title: "Free Initial Consultation",
    desc: "We verify your Medicaid coverage and discuss your child's specific behavioral challenges. No stress, no surprise bills."
  },
  {
    title: "Comprehensive Assessment",
    desc: "A licensed Behavior Consultant evaluates your child's needs across their home, school, and social settings to understand the root of the behaviors."
  },
  {
    title: "Custom Treatment Plan",
    desc: "We build a tailored roadmap combining the right interventions, specifying exact hours of one-on-one BHT and BC support."
  },
  {
    title: "Consistent, In-Environment Care",
    desc: "Our team begins working directly with your child in their natural environments—where the behaviors actually occur—to build lasting positive habits."
  }
];

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
function Card({ children, className, containerClassName }: { children: React.ReactNode; className?: string, containerClassName?: string }) {
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
                "group relative border border-stone-200/80 bg-white/95 backdrop-blur-md overflow-hidden transition duration-500",
                "hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-orange-200/50 hover:bg-white rounded-3xl",
                containerClassName
            )}
            onMouseMove={handleMouseMove}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-stone-50/50 pointer-events-none" />
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(249, 115, 22, 0.08),
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

const SpotlightItem = React.memo(({ faq, cardBgColor, cardBorderColor, cardTextColor, hoverCardTextColor, answerTextColor, iconColor, hoverIconColor, spotlightColor }: { faq: { question: string, answer: string }, cardBgColor: string, cardBorderColor: string, cardTextColor: string, hoverCardTextColor: string, answerTextColor: string, iconColor: string, hoverIconColor: string, spotlightColor: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);
    
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 40%)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onClick={() => setIsOpen(!isOpen)}
            className="relative rounded-[2rem] border overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-shadow duration-300"
            style={{ backgroundColor: cardBgColor, borderColor: cardBorderColor }}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{ background }}
            />
            <div className="relative z-10 p-6 md:p-8">
                <div className="flex justify-between items-center gap-4">
                    <h3 className="text-lg font-barlow font-medium leading-tight tracking-tight transition-colors group-hover:text-orange-500" style={{ color: cardTextColor }}>{faq.question}</h3>
                    <motion.div 
                        animate={{ rotate: isOpen ? 45 : 0 }} 
                        className="flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-white border border-stone-100 shadow-sm transition-colors duration-300 group-hover:border-orange-200"
                        style={{ color: iconColor }}
                    >
                        <Plus size={20} className="group-hover:text-orange-500 transition-colors" />
                    </motion.div>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <p className="pt-4 font-barlow text-base leading-relaxed" style={{ color: answerTextColor }}>{faq.answer}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
});

export default function IBHSClient() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start center", "end center"] as any,
  });

  const smoothProgress = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
  });

  const lineHeight = useTransform(
      prefersReducedMotion ? scrollYProgress : smoothProgress,
      [0, 1],
      ["0%", "100%"]
  );

  const accentColor = "#f97316"; // orange-500

  const servicesList = [
    {
      title: "One-on-One Support",
      icon: Users,
      desc: "Direct, personalized interventions by a Behavioral Health Technician (BHT) in your home or your child's school to address specific goals in real-time."
    },
    {
      title: "Evidence-Based ABA",
      icon: BookOpen,
      desc: "We don't guess. We utilize Applied Behavior Analysis (ABA) and proven methodologies to build lasting, positive habits and emotional regulation."
    },
    {
      title: "Family & Caregiver Coaching",
      icon: Heart,
      desc: "We don't just treat the child. We equip parents and caregivers with the exact tools needed to sustain progress when our clinicians leave."
    },
    {
      title: "School & Community Integration",
      icon: Home,
      desc: "Behavior happens everywhere. Our team works directly in classrooms and community settings to ensure consistent support across all environments."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-stone-950">
      <Navbar />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-28 md:pt-48 md:pb-40 overflow-hidden bg-stone-950">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_1600/v1774918385/women-discussing-childs-progress-in-kindergarten-e-2026-03-25-09-19-16-utc_j1quiw.jpg" 
              alt="Child receiving behavioral therapy support" 
              fill 
              className="object-cover opacity-40"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 z-0 bg-black/40" />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-950/30 via-transparent to-white" />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto"
            >
              <span className="inline-block font-barlow font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-orange-400 mb-6 bg-orange-500/10 px-5 py-2.5 rounded-full border border-orange-500/20 backdrop-blur-md">
                Intensive Behavioral Health Services (IBHS)
              </span>
              <h1 className="text-balance font-barlow font-normal text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-md">
                Transform Your Child's Behavior in <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal drop-shadow-md">Darby, PA</span>
              </h1>
              <p className="text-stone-100 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
                Stop letting daily meltdowns, school suspensions, and communication struggles disrupt your family. Get comprehensive, in-home and in-school behavioral support fully covered by Medicaid—without the wait.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#appointment" onClick={(e) => { e.preventDefault(); document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <button className="bg-orange-500 hover:bg-orange-400 text-stone-50 font-barlow font-bold px-4 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap rounded-full transition duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-orange-500/20">
                    <Calendar className="w-5 h-5" />
                    Schedule Your Free Consultation
                  </button>
                </Link>
                <a href="tel:+18146202162">
                  <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-barlow font-bold px-4 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap rounded-full transition duration-300 flex items-center justify-center w-full sm:w-auto backdrop-blur-sm">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (814) 620-2162
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="bg-white relative z-10 -mt-10 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.15)]">
          
          {/* SECTION 1: Services Grid */}
          <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-[120px] -ml-[300px] -mt-[300px] pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <SectionTag>Our Approach</SectionTag>
                <h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight mt-4 mb-6">
                  Care Delivered <span className="font-instrument-serif italic text-orange-500">Where It Matters.</span>
                </h2>
                <p className="text-stone-500 font-barlow text-lg leading-relaxed">
                  IBHS is a Pennsylvania-regulated program that provides highly individualized treatment for children under 21. We treat Autism Spectrum Disorder, ADHD, ODD, and severe anxiety right where the behaviors happen.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                {servicesList.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col p-8 overflow-hidden group">
                      <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center border border-orange-100 group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-500 mb-6">
                        <service.icon className="h-7 w-7 text-orange-500 group-hover:text-white transition-colors duration-500" />
                      </div>
                      <h3 className="font-barlow font-bold text-2xl text-stone-900 mb-3 group-hover:text-orange-500 transition-colors">
                        {service.title}
                      </h3>
                      <p className="font-barlow text-stone-600 text-base leading-relaxed">
                        {service.desc}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 2: Why Choose Us */}
          <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center mb-16"
              >
                <div className="flex flex-col items-center gap-4">
                  <SectionTag>Why Choose Sunrise</SectionTag>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tighter leading-tight">
                    Measurable improvements <br className="hidden md:block" />
                    <span className="font-instrument-serif italic text-orange-500">without the barriers.</span>
                  </h2>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}
                className="relative z-10 mx-auto max-w-7xl h-full flex flex-col gap-4 bg-stone-50/30 p-6 md:p-12 rounded-[2.5rem] border border-stone-100"
              >
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
                    }
                  }} 
                  className="grid grid-cols-1 gap-4 md:grid-cols-4 relative z-10"
                >
                  <Card containerClassName="md:col-span-2 rounded-3xl bg-white group/brand" className="flex items-center justify-between gap-6">
                    <div className="flex flex-col justify-center">
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
                    <div className="relative shrink-0 pr-4">
                      <Image src="/images/logo.png" alt="Logo" width={80} height={70} className="object-contain" />
                    </div>
                  </Card>

                  <Card containerClassName="md:col-span-1 rounded-3xl bg-blue-50/80 border-blue-200/50" className="flex flex-col justify-center items-center text-center">
                    <OpeningHours />
                    <span className="text-[10px] text-blue-700/60 uppercase mt-1 font-bold tracking-wider">Business Hours</span>
                  </Card>

                  <Card containerClassName="md:col-span-1 rounded-3xl bg-emerald-50/40 border-emerald-100/50" className="flex flex-col justify-center items-start">
                    <div className="flex items-center justify-between w-full mb-3">
                      <span className="font-bold tracking-tight text-emerald-900">Accepting Patients</span>
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-stone-100">
                        <UserPlus className="h-5 w-5 text-emerald-600" />
                      </div>
                    </div>
                    <div className="text-[11px] text-emerald-800/70 leading-tight font-medium">
                      Immediate Openings for <br /> IBHS Treatment.
                    </div>
                  </Card>
                </motion.div>

                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
                    }
                  }} 
                  className="grid grid-cols-1 gap-4 md:grid-cols-3 relative z-10"
                >
                  <Card containerClassName="md:col-span-2 rounded-3xl bg-white group" className="flex flex-col justify-between py-10 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-orange-500/10 transition-colors duration-700" />
                    <div className="flex justify-between items-start mb-12 relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center border border-orange-100 group-hover:scale-110 transition-transform duration-500">
                        <HeartPulse className="h-6 w-6 text-orange-500" />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-stone-50 border border-stone-100 text-[10px] uppercase tracking-widest text-stone-400 font-bold group-hover:border-orange-200 transition-colors duration-500">
                        In-Environment Care
                      </div>
                    </div>
                    <div className="space-y-6 relative z-10">
                      <h3 className="text-4xl md:text-5xl font-normal leading-[0.95] tracking-tighter text-stone-900 group-hover:text-stone-950 transition-colors duration-300">
                        We go where your child <br />
                        <span className="font-instrument-serif italic text-orange-500 group-hover:text-orange-600 transition-colors duration-300">needs us most.</span>
                      </h3>
                      <p className="max-w-md text-stone-500 text-sm leading-relaxed font-medium group-hover:text-stone-600 transition-colors duration-300">
                        Clinic visits alone aren't enough for severe behavioral challenges. Our licensed clinicians and technicians work directly with your family in the home, coordinate with teachers in the school, and provide support in the community.
                      </p>
                    </div>
                  </Card>

                  <div className="flex flex-col gap-4">
                    <Card containerClassName="rounded-3xl bg-stone-900 text-white border-none group relative overflow-hidden" className="flex flex-col justify-between h-full z-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[-1]" />
                      <ShieldCheck className="h-8 w-8 text-orange-400 mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:text-orange-300" />
                      <div>
                        <h4 className="font-bold text-lg mb-1 group-hover:text-orange-100 transition-colors duration-300">Zero Financial Surprises</h4>
                        <p className="text-stone-400 text-xs leading-relaxed group-hover:text-stone-300 transition-colors duration-300">We proudly and exclusively accept Medicaid. Get premium, intensive behavioral care without the out-of-pocket costs.</p>
                      </div>
                    </Card>
                    <Card containerClassName="rounded-3xl bg-orange-500 text-stone-50 border-none group relative overflow-hidden" className="flex flex-col justify-between h-full z-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[-1]" />
                      <Users className="h-8 w-8 text-white mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-1 group-hover:text-white transition-colors duration-300">No More Waitlists</h4>
                        <p className="text-stone-900/70 text-xs leading-relaxed font-medium group-hover:text-stone-900/90 transition-colors duration-300">Your child can't afford to wait 6 months for help. We prioritize immediate intake and rapid deployment of our IBHS team.</p>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* SECTION 3: Local Context & Service Areas */}
          <section className="py-16 md:py-24 bg-stone-900 text-white relative overflow-hidden rounded-[3rem] mx-4 md:mx-6 my-12">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <SectionTag className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">Community First</SectionTag>
                  <h2 className="font-barlow font-normal text-4xl md:text-5xl tracking-tighter leading-tight mb-6">
                    Accessible IBHS in <br />
                    <span className="font-instrument-serif italic text-orange-400 font-normal">Delaware County, PA</span>
                  </h2>
                  <div className="space-y-6 font-barlow text-stone-300 text-lg leading-relaxed">
                    <p>
                      Finding reliable Intensive Behavioral Health Services (IBHS) shouldn't be a multi-month struggle. Sunrise Human Care Services, headquartered in Darby, PA, deploys trained technicians and consultants across Delaware County.
                    </p>
                    <p>
                      We specialize in reducing challenging behaviors, developing emotional regulation strategies, and increasing independence for children with Autism Spectrum Disorder, ADHD, and other behavioral diagnoses.
                    </p>
                    <p>
                      Our goal is simple: measurable improvements in daily functioning that bring peace back to your household.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
                    <h3 className="font-barlow font-bold text-2xl text-white mb-6 flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-orange-400" />
                      Areas We Serve
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div className="px-4 py-3 bg-orange-500 rounded-xl text-center font-barlow font-bold text-stone-50 shadow-lg shadow-orange-500/20">
                        Darby (19023)
                      </div>
                      {[
                        { name: "Yeadon", zip: "19008" },
                        { name: "Lansdowne", zip: "19003" },
                        { name: "Upper Darby", zip: "19026" },
                        { name: "Collingdale", zip: "19064" },
                        { name: "Sharon Hill", zip: "19073" }
                      ].map(city => (
                        <div key={city.name} className="px-4 py-3 bg-white/10 rounded-xl text-center font-barlow text-stone-300 text-sm flex flex-col items-center justify-center border border-white/5">
                          <span className="font-bold">{city.name}</span>
                          <span className="text-xs opacity-70">{city.zip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* SECTION 4: The Process */}
          <section className="py-16 md:py-32 bg-stone-50 relative overflow-hidden">
            <CurveTransition fillColor="#ffffff" />
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto text-center mb-16 md:mb-24"
              >
                <div className="flex flex-col items-center gap-4">
                  <SectionTag>Your Path Forward</SectionTag>
                  <h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight">
                    The 4-step path to <span className="font-instrument-serif italic text-orange-500">lasting change.</span>
                  </h2>
                </div>
              </motion.div>

              <div className="relative max-w-5xl mx-auto" ref={containerRef}>
                  <div
                      className="absolute top-0 bottom-0 w-px left-4 md:left-1/2 md:-translate-x-px"
                      style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
                  />
                  
                  <motion.div
                      className="absolute top-0 w-1 left-4 md:left-1/2 md:-translate-x-1/2 rounded-full origin-top"
                      style={{ 
                          backgroundColor: accentColor,
                          height: lineHeight,
                          boxShadow: `0 0 10px ${accentColor}40`
                      }}
                  />

                  <div className="flex flex-col gap-12 md:gap-16">
                      {processSteps.map((step, i) => (
                          <TimelineStep 
                              key={step.title}
                              step={step}
                              i={i}
                              totalSteps={processSteps.length}
                              hoveredIndex={hoveredIndex}
                              setHoveredIndex={setHoveredIndex}
                              accentColor={accentColor}
                              progress={prefersReducedMotion ? scrollYProgress : smoothProgress}
                              prefersReducedMotion={prefersReducedMotion}
                          />
                      ))}
                  </div>
              </div>

              <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
                  className="mt-24 md:mt-32 max-w-5xl mx-auto bg-stone-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center shadow-2xl shadow-stone-900/20"
              >
                 <div className="absolute inset-0 z-0 opacity-40">
                    <UiloraFrostedGlass
                      baseColor="#1c1917"
                      accentColor="#f97316"
                      speed={0.15}
                    />
                 </div>

                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-stone-900/40 blur-[50px] pointer-events-none z-0" />
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-900/40 blur-[50px] pointer-events-none z-0" />
                 
                 <div className="relative z-10 flex flex-col items-center">
                    <span className="inline-block font-barlow font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-orange-400 mb-6 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20 backdrop-blur-sm">
                      Don't Wait Another Day
                    </span>
                   
                   <h2 className="font-barlow font-normal text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-[1.1] mb-6 max-w-3xl drop-shadow-lg">
                     Start transforming behavior <br className="hidden md:block" />
                     <span className="font-instrument-serif italic text-orange-400 font-normal">this week.</span>
                   </h2>
                   
                   <p className="text-white/90 font-barlow text-lg max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                     You don't have to figure this out alone. Schedule your free consultation today and let our IBHS specialists help your child thrive.
                   </p>
                   
                   <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
                     <Link href="#appointment" className="w-full sm:w-auto" onClick={(e) => { e.preventDefault(); document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' }); }}>
                       <button className="bg-orange-500 hover:bg-orange-400 text-stone-50 font-barlow font-bold px-4 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap rounded-full transition duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto shadow-lg shadow-orange-500/20">
                         <HugeiconsIcon icon={Calendar01Icon} className="w-5 h-5" />
                         Schedule Free Consultation
                         <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                       </button>
                     </Link>
                     <a href="tel:+18146202162" className="w-full sm:w-auto">
                       <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-barlow font-bold px-4 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap rounded-full transition duration-300 flex items-center justify-center w-full sm:w-auto backdrop-blur-md">
                         <HugeiconsIcon icon={CallIcon} className="w-5 h-5 mr-2" />
                         Call (814) 620-2162
                       </button>
                     </a>
                   </div>
                 </div>
              </motion.div>
            </div>
          </section>

          {/* SECTION 5: FAQs */}
          <section className="py-16 md:py-24 bg-stone-50 relative overflow-hidden">
            <CurveTransition fillColor="#fafaf9" />
            
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0">
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f97316" strokeWidth="0.5" strokeOpacity="0.3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                <motion.circle 
                  cx="80%" 
                  cy="20%" 
                  r="150" 
                  fill="none" 
                  stroke="#ea580c" 
                  strokeWidth="1" 
                  strokeOpacity="0.2"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1] 
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
                <motion.circle 
                  cx="20%" 
                  cy="80%" 
                  r="250" 
                  fill="none" 
                  stroke="#ea580c" 
                  strokeWidth="1" 
                  strokeOpacity="0.1"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1] 
                  }}
                  transition={{ 
                    duration: 12, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 mt-12">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 flex flex-col items-center gap-4">
                  <SectionTag>Common Questions</SectionTag>
                  <h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight">
                    IBHS <span className="font-instrument-serif italic text-orange-500">FAQs.</span>
                  </h2>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      question: "What exactly is IBHS?",
                      answer: "Intensive Behavioral Health Services (IBHS) is a Pennsylvania-regulated program providing evidence-based behavioral treatment for children and adolescents under 21 directly in their home, school, or community."
                    },
                    {
                      question: "Who is eligible for IBHS?",
                      answer: "Children and adolescents under age 21 with a mental health diagnosis or autism spectrum disorder who require behavioral support are typically eligible for IBHS."
                    },
                    {
                      question: "Where are IBHS services provided?",
                      answer: "Services are provided wherever the child needs support, including the family home, school settings, and other community locations throughout Darby and Delaware County."
                    },
                    {
                      question: "What is the role of a Behavioral Health Technician (BHT)?",
                      answer: "A BHT works one-on-one with your child to implement the treatment plan designed by the Behavior Consultant (BC), focusing on specific behavioral and social goals."
                    },
                    {
                      question: "Do you accept Medicaid for IBHS?",
                      answer: "Yes, we exclusively accept Medicaid and Medical Assistance for our IBHS program. We provide these intensive services with no waitlist to ensure children get support quickly."
                    }
                  ].map((faq) => (
                    <SpotlightItem 
                        key={faq.question} 
                        faq={faq} 
                        cardBgColor="#ffffff" 
                        cardBorderColor="rgba(249, 115, 22, 0.15)" 
                        cardTextColor="#1c1917" 
                        hoverCardTextColor="#ea580c" 
                        answerTextColor="#78716c" 
                        iconColor="#f97316" 
                        hoverIconColor="#ffffff" 
                        spotlightColor="rgba(249, 115, 22, 0.08)" 
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="relative z-10 bg-white pb-24 md:pb-32 -mt-1">
            <CurveTransition fillColor="#fafaf9" />
          </div>
          <div className="bg-white pt-24 md:pt-32 -mt-24 md:-mt-32">
            <AppointmentSection />
          </div>
          
        </div>
      </main>
      
      <div className="relative z-20 bg-white">
        <Footer />
      </div>
    </div>
  );
}
