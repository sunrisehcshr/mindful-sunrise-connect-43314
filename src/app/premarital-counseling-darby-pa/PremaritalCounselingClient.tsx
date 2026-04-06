"use client";

import React, { useState, useRef, useEffect } from 'react';
import AnimatedCardStack from "@/components/ui/animate-card-animation";
import { BentoCard } from "@/components/ui/bento-card";
import { motion, useMotionTemplate, useMotionValue, AnimatePresence, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { HugeiconsIcon } from "@hugeicons/react";
import { BrainIcon, ShieldIcon, SafeIcon, StarIcon, CallIcon, ArrowRightIcon, CheckmarkCircle02Icon, ArrowDown01Icon, ArrowUp01Icon, Location01Icon, Calendar01Icon, Clock01Icon, UserGroupIcon, SparklesIcon, BookOpen01Icon, UserCircleIcon, CloudAngledRainIcon, HeartbreakIcon, CheckmarkBadge01Icon, FavouriteIcon } from "@hugeicons/core-free-icons";
import { Lightbulb, CheckCircle2, Shield, Users, Heart, Brain, Sparkles, ArrowRight, Star, ChevronDown, Plus, Wallet, HeartHandshake, Briefcase, MessagesSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SectionTag from '@/components/ui/section-tag';
import CurveTransition from '@/components/ui/CurveTransition';
import { cn } from "@/lib/utils";
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/components/Footer/Footer'));
const AppointmentSection = dynamic(() => import('@/components/Appointment/AppointmentSection'));
const UiloraFrostedGlass = dynamic(() => import('@/components/ui/uilora-frosted-glass'), { ssr: false });

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

SpotlightItem.displayName = "SpotlightItem";

const processSteps = [
  {
    title: "Initial Consultation",
    desc: "We handle the paperwork and verify your insurance coverage—including Medicaid—before you even start. We'll match you with the right therapist on day one."
  },
  {
    title: "Relationship Assessment",
    desc: "During your first session, your therapist will conduct a thorough evaluation of your relationship history, current communication patterns, and shared goals."
  },
  {
    title: "Your Roadmap",
    desc: "Collaborate to design a customized roadmap tailored to your specific dynamic, establishing clear, achievable objectives to build a strong foundation."
  },
  {
    title: "Growing Together",
    desc: "Engage in regular joint sessions utilizing evidence-based practices to build communication skills, track your improvement, and prepare for marriage."
  }
];

const faqs = [
    {
      question: "Is premarital counseling only for couples with problems?",
      answer: "Not at all. Premarital counseling is a proactive step for any couple wanting to build a strong foundation, improve communication, and align expectations before marriage."
    },
    {
      question: "How many sessions are recommended before marriage?",
      answer: "While every couple is different, we typically recommend starting 3 to 6 months before your wedding and planning for 6 to 8 sessions to cover key areas comprehensively."
    },
    {
      question: "Does Medicaid cover premarital counseling in Pennsylvania?",
      answer: "Yes, at Sunrise Human Care, we accept Medicaid and Medical Assistance for our therapy services, removing cost barriers so you can focus on building a healthy marriage."
    },
    {
      question: "Can we do premarital counseling via telehealth?",
      answer: "Yes! We offer flexible telehealth options so you and your partner can attend sessions from the comfort of your home, making it easier to fit into busy pre-wedding schedules."
    },
    {
      question: "What is the Gottman Method and how does it apply to premarital counseling?",
      answer: "The Gottman Method is an evidence-based approach that helps couples build friendship, manage conflict, and create shared meaning. We use these principles to give you practical tools for a lasting marriage."
    }
];

const scrollOffset: any = ["start center", "end center"];

export default function PremaritalCounselingClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const accentColor = "#f97316";

  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: scrollOffset
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

  return (
    <div className="flex flex-col min-h-screen bg-stone-950">
      <Navbar />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-28 md:pt-48 md:pb-40 overflow-hidden bg-stone-950">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_1600/v1774918015/diverse-couple-on-a-therapy-session-in-a-psycholog-2026-03-25-04-41-39-utc_jebtlc.jpg" 
              alt="Premarital Counseling in Darby PA" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized={true}
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 z-0 bg-black/30" />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-950/30 via-transparent to-stone-50" />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto"
            >
              <span className="inline-block font-barlow font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-orange-400 mb-6 bg-orange-500/10 px-5 py-2.5 rounded-full border border-orange-500/20 backdrop-blur-md">
                Start Strong in PA
              </span>
              <h1 className="text-balance font-barlow font-normal text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-md">
                Premarital Counseling <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal drop-shadow-md">in Darby, PA</span>
              </h1>
              <p className="text-stone-100 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
                Build the foundation your marriage deserves before you say "I do." Our licensed therapists help you navigate finances, family dynamics, communication, and expectations — together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#appointment" onClick={(e) => { e.preventDefault(); document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <button className="bg-orange-500 hover:bg-orange-400 text-stone-50 font-barlow font-bold px-4 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap rounded-full transition duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-orange-500/20">
                    <HugeiconsIcon icon={Calendar01Icon} className="w-5 h-5" />
                    Schedule Your First Session
                  </button>
                </Link>
                <a href="tel:+18146202162">
                  <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-barlow font-bold px-4 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap rounded-full transition duration-300 flex items-center justify-center w-full sm:w-auto backdrop-blur-sm">
                    <HugeiconsIcon icon={CallIcon} className="w-5 h-5 mr-2" />
                    Call (814) 620-2162
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="bg-white relative z-10 -mt-10 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.15)]">
          
          {/* SECTION 1: What is Premarital Counseling? */}
          <section className="pt-16 md:pt-24 pb-20 relative overflow-hidden bg-white selection:bg-stone-100 selection:text-stone-900 font-barlow">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <div className="flex flex-col items-center gap-4">
                        <SectionTag>About Premarital Therapy</SectionTag>
                        <h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight">
                            What is Premarital Counseling?
                        </h2>
                    </div>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
                    }}
                    className="relative z-10 mx-auto max-w-4xl flex flex-col gap-6"
                >
                    <p className="text-stone-500 font-barlow text-lg md:text-xl leading-relaxed text-center">
                        Premarital counseling is a proactive, specialized form of therapy that helps couples prepare for long-term commitment. Rather than waiting for conflicts to arise, couples seek premarital therapy to openly discuss expectations, align on core values, and build healthy communication habits. Studies consistently show that premarital counseling is highly effective—in fact, couples who participate in premarital education have up to a 30% lower risk of divorce and report significantly higher relationship satisfaction.
                    </p>
                    <p className="text-stone-500 font-barlow text-lg md:text-xl leading-relaxed text-center">
                        At Sunrise Human Care in Darby, PA (serving all of Delaware County), our licensed relationship specialists utilize evidence-based approaches, including the renowned Gottman Method and Emotionally Focused Therapy (EFT). We don't just offer generic advice; we provide a structured, supportive environment where you and your partner can deeply understand each other, resolve potential friction points early, and walk down the aisle with absolute confidence.
                    </p>
                </motion.div>
            </div>
          </section>

          {/* SECTION 2: What We Cover */}
          <section className="pt-16 md:pt-24 pb-40 bg-stone-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-4xl mx-auto text-center mb-16"
              >
                <div className="flex flex-col items-center gap-4">
                  <SectionTag>Core Focus Areas</SectionTag>
                  <h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight">
                    What We <span className="font-instrument-serif italic text-orange-500">Cover.</span>
                  </h2>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {[
                  { title: "Communication Styles", icon: MessagesSquare, desc: "Learn how to listen and express needs without triggering conflict. Discover your partner's communication style." },
                  { title: "Financial Expectations", icon: Wallet, desc: "Align on spending, saving, and financial goals before they become arguments. Money is a leading cause of marital stress." },
                  { title: "Family Dynamics", icon: Users, desc: "Navigate boundaries with in-laws and establish your own family identity as a new, united partnership." },
                  { title: "Conflict Resolution", icon: Shield, desc: "Develop tools to disagree constructively rather than destructively, preventing minor issues from escalating." },
                  { title: "Intimacy & Connection", icon: Heart, desc: "Build emotional and physical closeness that sustains through life's challenges and changes over time." },
                  { title: "Roles & Responsibilities", icon: Briefcase, desc: "Discuss expectations around household duties, careers, and future family planning to prevent resentment." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative overflow-hidden rounded-[2rem] bg-white border border-stone-200 p-8 hover:border-orange-500/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition duration-500 hover:-translate-y-1"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-orange-500/10 transition-colors duration-500" />
                    <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center mb-6 border border-stone-100 group-hover:bg-orange-50 group-hover:border-orange-100 transition-colors duration-500">
                        <item.icon className="w-6 h-6 text-stone-400 group-hover:text-orange-500 transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-3 tracking-tight group-hover:text-orange-600 transition-colors">{item.title}</h3>
                    <p className="text-stone-500 text-base leading-relaxed font-medium">
                        {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            <CurveTransition fillColor="#ffffff" inverted />
          </section>

          {/* SECTION 3: Why Choose Sunrise */}
          <section className="pt-16 md:pt-24 pb-40 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
                className="max-w-7xl mx-auto bg-stone-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-stone-100 shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <SectionTag className="bg-white/10 text-white border-white/20 mb-6 w-fit">The Sunrise Difference</SectionTag>
                        <h2 className="text-3xl md:text-5xl text-balance font-normal text-white tracking-tighter leading-tight mb-6">
                            Why Couples Choose <br />
                            <span className="font-instrument-serif italic text-orange-400">Sunrise Human Care</span>
                        </h2>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 gap-4">
                        {[
                            { title: "Medicaid Accepted", desc: "No cost barrier to a healthy marriage. We proudly accept Medicaid and Medical Assistance, making expert premarital counseling accessible to everyone." },
                            { title: "No Waitlist", desc: "Start within days before the wedding date pressure hits. We match you with a therapist immediately so you can focus on your relationship right away." },
                            { title: "Specialized Licensed Therapists", desc: "You'll work directly with highly trained, fully licensed clinicians who specialize in relationship dynamics, communication, and family systems." }
                        ].map((method, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:bg-white/10 transition-colors duration-300 flex flex-col sm:flex-row items-start gap-4 group">
                                <div className="w-10 h-10 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-orange-400" />
                                </div>
                                <div>
                                  <h4 className="font-barlow font-bold text-lg text-white mb-2">{method.title}</h4>
                                  <p className="text-stone-400 text-sm leading-relaxed">{method.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
              </motion.div>
            </div>
            <CurveTransition fillColor="#fafaf9" inverted />
          </section>

          {/* SECTION 4: The Process */}
          <section className="py-16 md:py-32 bg-stone-50 relative overflow-hidden">
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
                    The 4-step path to <span className="font-instrument-serif italic text-orange-500">starting strong.</span>
                  </h2>
                </div>
              </motion.div>

              {/* Timeline Container */}
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

              {/* Inlined Sun-style Fluid CTA */}
              <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
                  className="mt-16 md:mt-24 max-w-5xl mx-auto bg-stone-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center shadow-2xl shadow-stone-900/20"
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
                   
                   <h2 className="text-balance font-barlow font-normal text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-[1.1] mb-6 max-w-3xl drop-shadow-lg">
                     Start communicating better <br className="hidden md:block" />
                     <span className="font-instrument-serif italic text-orange-400 font-normal">this week.</span>
                   </h2>
                   
                   <p className="text-white/90 font-barlow text-lg max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                     Schedule your first premarital session today and let our Darby, PA specialists help you build the strongest possible foundation for your marriage.
                   </p>
                   
                   <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
                     <Link href="#appointment" className="w-full sm:w-auto" onClick={(e) => { e.preventDefault(); document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' }); }}>
                       <button className="bg-orange-500 hover:bg-orange-400 text-stone-50 font-barlow font-bold px-4 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap rounded-full transition duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto shadow-lg shadow-orange-500/20">
                         <HugeiconsIcon icon={Calendar01Icon} className="w-5 h-5" />
                         Schedule Your First Session
                         <HugeiconsIcon icon={ArrowRightIcon} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
          <section className="pt-8 pb-40 bg-stone-50 relative overflow-hidden">
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
                  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 flex flex-col items-center gap-4">
                  <SectionTag>Common Questions</SectionTag>
                  <h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight">
                    Premarital Counseling <span className="font-instrument-serif italic text-orange-500">FAQs.</span>
                  </h2>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq) => (
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
            <CurveTransition fillColor="#ffffff" inverted />
          </section>

          {/* Medical Reviewer / E-E-A-T Footer Section (Visually Hidden for SEO) */}
          <section className="sr-only">
            <div itemScope itemType="https://schema.org/WebPage">
              <div itemProp="reviewedBy" itemScope itemType="https://schema.org/Person">
                <meta itemProp="name" content="Holli O'Donnell" />
                <meta itemProp="jobTitle" content="Licensed Mental Health Professional" />
                <link itemProp="image" href="/images/holly.jpg" />
              </div>
              <meta itemProp="lastReviewed" content="2026-04-05" />
              <p>
                This content was clinically reviewed by Holli O'Donnell, Licensed Mental Health Professional, on April 5, 2026 to ensure accuracy and compliance with current medical standards.
              </p>
            </div>
          </section>

          {/* SECTION: Related Services (Animated Stack) */}
          <section className="pt-24 pb-0 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto text-center mb-2"
              >
                <div className="flex flex-col items-center gap-4">
                  <SectionTag>More Support</SectionTag>
                  <h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight">
                    Explore <span className="font-instrument-serif italic text-orange-500">related services.</span>
                  </h2>
                </div>
              </motion.div>
              
              <AnimatedCardStack items={[
                  { title: "Couples Counseling in Darby", description: "Strengthen your bond and resolve ongoing conflicts.", href: "/couples-counseling-darby-pa", image: "/images/couple-counseling-havertown-pa.webp" },
                  { title: "Individual Therapy in Darby", description: "One-on-one therapy tailored to your unique experience.", href: "/individual-therapy-darby-pa", image: "/images/finding-therapist-havertown.webp" },
                  { title: "Family Therapy in Darby", description: "Support for families navigating difficult transitions.", href: "/family-therapy-darby-pa", image: "/images/family-counseling-havertown.webp" }
                ]} />
            </div>
          </section>

          {/* SECTION 6: Appointment */}
          <div className="bg-white pt-16 md:pt-24">
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
