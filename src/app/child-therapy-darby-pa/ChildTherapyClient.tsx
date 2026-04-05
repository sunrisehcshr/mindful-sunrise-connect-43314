"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, AnimatePresence, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { HugeiconsIcon } from "@hugeicons/react";
import { BrainIcon, ShieldIcon, SafeIcon, StarIcon, CallIcon, ArrowRightIcon, CheckmarkCircle02Icon, ArrowDown01Icon, ArrowUp01Icon, Location01Icon, Calendar01Icon, Clock01Icon, UserGroupIcon, SparklesIcon, BookOpen01Icon, UserCircleIcon, CloudAngledRainIcon, HeartbreakIcon, CheckmarkBadge01Icon, FavouriteIcon } from "@hugeicons/core-free-icons";
import { Lightbulb, CheckCircle2, Shield, Users, Heart, Brain, Sparkles, ArrowRight, Star, ChevronDown, Plus } from 'lucide-react';
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
    
    // Instead of glowing when passed, we only glow when the progress is inside this step's range
    // Or if it's the last step and we are at the end.
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
                    className="relative rounded-[2rem] p-8 transition-all duration-500 cursor-default bg-white group/step"
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
                            "font-bold text-5xl font-instrument-serif mb-4 block transition-all duration-500",
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

// --- Scramble Text Effect (Brand Style) ---
function ScrambleText({ text, className }: { text: string, className?: string }) {
    const [displayText, setDisplayText] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    const scramble = () => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) return text[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);
    };

    return (
        <span
            onMouseEnter={scramble}
            className={cn("cursor-default", className)}
        >
            {displayText}
        </span>
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
                "group relative border border-stone-200/80 bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-500",
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
    title: "Let's Talk (Stress-Free Onboarding)",
    desc: "We handle the paperwork and verify your insurance coverage—including Medicaid. We'll match your child with the right specialist on day one."
  },
  {
    title: "Understanding Your Unique Needs",
    desc: "During the first sessions, we take the time to truly understand your child's history, behavior, and what they need to feel better."
  },
  {
    title: "Your Custom Healing Plan",
    desc: "Collaborate to design a customized roadmap tailored to your child, establishing clear objectives for therapy and practical at-home strategies for parents."
  },
  {
    title: "Seeing Real Changes at Home",
    desc: "Engage in regular sessions utilizing proven methods to build coping skills, track your child's improvement, and adjust strategies as they grow."
  }
];

const faqs = [
    {
      question: "What can we expect from child therapy in Darby?",
      answer: "Child therapy at Sunrise Human Care provides a safe, engaging environment where licensed specialists use age-appropriate methods like play therapy and CBT to help children express emotions, develop coping skills, and overcome behavioral challenges."
    },
    {
      question: "Do parents participate in the therapy sessions?",
      answer: "Yes, parental involvement is highly encouraged. Depending on your child's age and needs, therapists will regularly consult with parents, offer at-home strategies, and may include you in joint sessions to ensure progress continues outside the clinic."
    },
    {
      question: "How do I know if my child needs therapy?",
      answer: "If your child is experiencing sudden changes in mood, extreme tantrums, school refusal, withdrawal from friends, or difficulty sleeping, professional support can make a significant difference. Early intervention often prevents minor issues from becoming long-term struggles."
    },
    {
      question: "How long does child therapy usually take?",
      answer: "The duration depends entirely on your child's specific goals and challenges. Some children see significant behavioral improvements through short-term therapy in 8-12 sessions, while children dealing with trauma or deep-seated anxiety may engage longer."
    },
    {
      question: "Does your child therapy in PA accept Medicaid?",
      answer: "Yes, our child therapy services accept Medicaid to ensure that crucial developmental support is accessible to the Darby and broader Delaware County community. Our team will verify your benefits prior to your first session."
    }
];

const scrollOffset: any = ["start center", "end center"];

export default function ChildTherapyClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
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

  const [reviewDate, setReviewDate] = useState("");

  useEffect(() => {
    setReviewDate(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-stone-950">
      <Navbar />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-28 md:pt-48 md:pb-40 overflow-hidden bg-stone-950">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_1600/v1774918385/women-discussing-childs-progress-in-kindergarten-e-2026-03-25-09-19-16-utc_j1quiw.jpg" 
              alt="Child Therapy in Darby PA" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized={true}
              className="object-cover opacity-60"
              priority
            />
            {/* Extremely light dark overlay so the image is fully visible while keeping text readable */}
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
                Expert Care for Your Child
              </span>
              <h1 className="text-balance font-barlow font-normal text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-md">
                Help Your Child Thrive with <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal drop-shadow-md">Child Therapy in Darby, PA</span>
              </h1>
              <p className="text-stone-100 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
                Equip your child with healthy coping skills, overcome behavioral challenges, and help them build confidence and succeed with expert child therapy in Darby, PA.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="#appointment">
          <button className="bg-orange-500 hover:bg-orange-400 text-stone-950 font-barlow font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-orange-500/20">
            <HugeiconsIcon icon={Calendar01Icon} className="w-5 h-5" />
            Schedule Your First Session
          </button>
        </Link>
        <a href="tel:+18146202162">
          <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-barlow font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center w-full sm:w-auto backdrop-blur-sm">
            <HugeiconsIcon icon={CallIcon} className="w-5 h-5 mr-2" />
            Call (814) 620-2162
          </button>
        </a>
      </div>
            </motion.div>
          </div>
        </section>

        <div className="bg-white relative z-10 -mt-10 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.15)]">
          
          {/* SECTION 1: Understanding Individual Therapy (Bento Grid) */}
          <section className="py-16 md:py-24 relative overflow-hidden bg-white selection:bg-stone-100 selection:text-stone-900 font-barlow">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header Row */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <div className="flex flex-col items-center gap-4">
                        <SectionTag>Why Choose Sunrise</SectionTag>
                        <h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight">
                            Therapy designed for how children learn, <br className="hidden md:block" /><span className="font-instrument-serif italic text-orange-500">not how adults talk.</span>
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
                    className="relative z-10 mx-auto max-w-7xl flex flex-col gap-4 bg-white p-4 md:p-8 rounded-[3rem] border border-stone-100 shadow-sm"
                >
                    {/* Top Row */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-1 gap-4 md:grid-cols-4 relative z-10">
                        <Card containerClassName="md:col-span-3 rounded-3xl bg-stone-50/50" className="flex flex-col justify-center p-8 md:p-12">
                            <p className="text-stone-500 font-barlow text-lg md:text-xl leading-relaxed max-w-3xl">
                                Children don't process emotions like adults do. Our licensed specialists in Darby, PA provide a safe, engaging environment for your child. Here, they can express themselves naturally through play, helping them build confidence and resilience.
                            </p>
                        </Card>
                        <Card containerClassName="md:col-span-1 rounded-3xl bg-orange-50/50 border-orange-100/50" className="flex flex-col items-center justify-center text-center p-8">
                            <HugeiconsIcon icon={SafeIcon} className="w-10 h-10 text-orange-500 mb-4" />
                            <h3 className="text-xl font-bold text-stone-900 mb-2">Safe Space</h3>
                            <p className="text-stone-500 text-sm font-medium">100% confidential and non-judgmental.</p>
                        </Card>
                    </motion.div>

                    {/* Features Row - With varied colors */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-1 gap-4 md:grid-cols-3 relative z-10">
                        <Card containerClassName="rounded-3xl bg-emerald-50/40 border-emerald-100/50" className="p-8">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md shadow-emerald-200/20 border border-emerald-100 mb-6 shrink-0 transition-transform group-hover:scale-110 duration-300">
                                <HugeiconsIcon icon={CheckmarkBadge01Icon} className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-emerald-700 transition-colors">Guidance You Can Trust</h3>
                            <p className="text-sm text-stone-600 leading-relaxed font-medium">Work with fully licensed, state-certified therapists in Delaware County who specialize in proven therapy methods that actually work for kids.</p>
                        </Card>
                        <Card containerClassName="rounded-3xl bg-blue-50/40 border-blue-100/50" className="p-8">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md shadow-blue-200/20 border border-blue-100 mb-6 shrink-0 transition-transform group-hover:scale-110 duration-300">
                                <HugeiconsIcon icon={BrainIcon} className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-blue-700 transition-colors">Strategies That Actually Work</h3>
                            <p className="text-sm text-stone-600 leading-relaxed font-medium">We use proven methods like Play Therapy and CBT so you see measurable, real-world progress in your child's behavior and happiness.</p>
                        </Card>
                        <Card containerClassName="rounded-3xl bg-rose-50/40 border-rose-100/50" className="p-8">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md shadow-rose-200/20 border border-rose-100 mb-6 shrink-0 transition-transform group-hover:scale-110 duration-300">
                                <HugeiconsIcon icon={FavouriteIcon} className="w-6 h-6 text-rose-600" />
                            </div>
                            <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-rose-700 transition-colors">Tailored to Your Child</h3>
                            <p className="text-sm text-stone-600 leading-relaxed font-medium">Your child's treatment plan is tailored specifically to their unique background, challenges, and goals for therapy.</p>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
          </section>

          {/* SECTION 2: Conditions Treated (Distinct Grid Layout) */}
          <section className="py-16 md:py-24 bg-stone-50 relative overflow-hidden">
            <CurveTransition fillColor="#ffffff" />
            <div className="container mx-auto px-4 md:px-8 relative z-10 mt-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-4xl mx-auto text-center mb-16"
              >
                <div className="flex flex-col items-center gap-4">
                  <SectionTag>Support for Your Child</SectionTag>
                  <h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight">
                    Find relief from childhood <br />
                    <span className="font-instrument-serif italic text-orange-500">behavioral struggles.</span>
                  </h2>
                  <p className="text-stone-500 font-barlow text-lg leading-relaxed max-w-2xl mx-auto mt-2">
                    You don't have to navigate your child's emotional or behavioral challenges alone. Our child specialists in Darby, PA use proven methods to help your child thrive at home and in school.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {[
                  { title: "Childhood Anxiety", icon: Brain, desc: "Equip your child with practical, age-appropriate tools to overcome overwhelming fears, separation anxiety, and daily worry." },
                  { title: "Behavioral Issues", icon: Sparkles, desc: "Transform daily power struggles. We help uncover the root cause of acting out and build positive, sustainable behavior patterns." },
                  { title: "Trauma & Grief", icon: Shield, desc: "Provide gentle, trauma-informed care to help children safely process painful experiences, loss, or family changes." },
                  { title: "ADHD & Focus", icon: Lightbulb, desc: "Help your child harness their unique potential. Learn strategies to improve focus, emotional regulation, and academic success." },
                  { title: "School Refusal", icon: ArrowRight, desc: "Address the underlying anxieties keeping your child from the classroom. Build confidence and a healthy relationship with learning." },
                  { title: "Social & Peer Struggles", icon: Users, desc: "Develop crucial social skills. Help your child navigate bullying, make friends, and build healthy self-esteem." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative overflow-hidden rounded-[2rem] bg-white border border-stone-200 p-8 hover:border-orange-500/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1"
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
          </section>

          {/* SECTION 3: Clinical Approach */}
          <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <CurveTransition fillColor="#fafaf9" />
            <div className="container mx-auto px-4 md:px-8 relative z-10 mt-12">
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
                        <SectionTag className="bg-white/10 text-white border-white/20 mb-6 w-fit">How We Work</SectionTag>
                        <h2 className="text-3xl md:text-5xl text-balance font-normal text-white tracking-tighter leading-tight mb-6">
                            Discover Proven Therapies <br className="hidden md:block" />
                            <span className="font-instrument-serif italic text-orange-400">That Deliver Real Results</span>
                        </h2>
                        <p className="text-stone-400 text-lg leading-relaxed mb-8">
                            Stop guessing what your child needs. Your child will benefit from science-backed, age-appropriate practices tailored for kids and teens—ensuring you see measurable progress at home and in school.
                        </p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { title: "Play Therapy", desc: "Speak your child's language. Utilize guided play to help younger children express complex emotions, resolve trauma, and learn problem-solving skills naturally." },
                            { title: "Cognitive Behavioral Therapy (CBT)", desc: "Rewire anxious minds. Teach older children and teens how to identify negative thought loops and replace them with healthy, confident perspectives." },
                            { title: "Parent-Child Interaction Therapy (PCIT)", desc: "Restore your authority with love. Coach parents in real-time to manage disruptive behaviors and build a warmer, more secure attachment with their child." },
                            { title: "Solution-Focused Counseling", desc: "Get unstuck, fast. Stop dwelling on problems and start building concrete, actionable coping strategies for your child's future." }
                        ].map((method, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:bg-white/10 transition-colors duration-300 flex flex-col items-start gap-4 group">
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
                    The 4-step path to <span className="font-instrument-serif italic text-orange-500">reclaiming your life.</span>
                  </h2>
                </div>
              </motion.div>

              {/* Timeline Container */}
              <div className="relative max-w-5xl mx-auto" ref={containerRef}>
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
                  className="mt-24 md:mt-32 max-w-5xl mx-auto bg-orange-600 rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center shadow-2xl shadow-orange-500/20"
              >
                 {/* WebGL Fluid Background - Sun Theme */}
                 <div className="absolute inset-0 z-0 opacity-90 mix-blend-screen">
                    <UiloraFrostedGlass 
                      baseColor="#ea580c" // Bright Orange Base
                      accentColor="#fef08a" // Bright Yellow highlights
                      speed={0.15}
                    />
                 </div>
                 
                 {/* Subtle Ambient Glow overlays to ensure text readability */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-orange-700/30 blur-[50px] pointer-events-none z-0" />
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-700/30 blur-[50px] pointer-events-none z-0" />
                 
                 <div className="relative z-10 flex flex-col items-center">
                    <span className="inline-block font-barlow font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white mb-6 bg-white/20 px-5 py-2.5 rounded-full border border-white/30 backdrop-blur-md shadow-[0_4px_20px_rgba(255,255,255,0.1)] drop-shadow-md">
                      Don't Wait Another Day
                    </span>
                   
                   <h2 className="text-balance font-barlow font-normal text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-[1.1] mb-6 max-w-3xl drop-shadow-lg">
                     Start supporting your child's <br className="hidden md:block" />
                     <span className="font-instrument-serif italic text-yellow-200 font-normal">growth today.</span>
                   </h2>
                   
                   <p className="text-white/90 font-barlow text-lg max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                     You don't have to figure out these parenting challenges alone. Schedule your child's first therapy session today and let our Darby, PA specialists help them thrive.
                   </p>
                   
                   <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
                     <Link href="/#appointment" className="w-full sm:w-auto">
                       <button className="bg-white hover:bg-stone-50 text-orange-600 font-barlow font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto shadow-lg shadow-white/20">
                         <HugeiconsIcon icon={Calendar01Icon} className="w-5 h-5" />
                         Schedule Your First Session
                         <HugeiconsIcon icon={ArrowRightIcon} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                       </button>
                     </Link>
                     <a href="tel:+18146202162" className="w-full sm:w-auto">
                       <button className="bg-black/10 hover:bg-black/20 text-white border border-white/30 font-barlow font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center w-full sm:w-auto backdrop-blur-md">
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
            
            {/* Animated SVG Background */}
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
                    Child Therapy <span className="font-instrument-serif italic text-orange-500">FAQs.</span>
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
          </section>

          {/* Medical Reviewer / E-E-A-T Footer Section (Visually Hidden for SEO) */}
          <section className="sr-only">
            <div itemScope itemType="https://schema.org/WebPage">
              <div itemProp="reviewedBy" itemScope itemType="https://schema.org/Person">
                <meta itemProp="name" content="Holli O'Donnell" />
                <meta itemProp="jobTitle" content="Licensed Mental Health Professional" />
                <link itemProp="image" href="/images/holly.jpg" />
              </div>
              <meta itemProp="lastReviewed" content={reviewDate} />
              <p>
                This content was clinically reviewed by Holli O'Donnell, Licensed Mental Health Professional, on {reviewDate} to ensure accuracy and compliance with current medical standards.
              </p>
            </div>
          </section>

          {/* SECTION 6: Appointment */}
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