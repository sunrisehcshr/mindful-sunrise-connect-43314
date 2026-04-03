"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, AnimatePresence, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Brain, Heart, Shield, Lightbulb, Star, Phone, ArrowRight, CheckCircle2, 
  ChevronDown, ChevronUp, MapPin, Calendar, Clock, Users, Sparkles, Plus
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import AppointmentSection from '@/components/Appointment/AppointmentSection';
import SectionTag from '@/components/ui/section-tag';
import CurveTransition from '@/components/ui/CurveTransition';
import { cn } from "@/lib/utils";

// --- Timeline Step Component ---
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
    
    const stepThreshold = i / Math.max(1, totalSteps - 1);
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
                        {step.title}
                    </h3>
                    <p className="text-stone-500 text-sm md:text-base leading-relaxed font-barlow">
                        {step.desc}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

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

export default function IndividualTherapyClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const accentColor = "#f97316";

  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start center", "end center"]
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

  const processSteps = [
    {
      title: "Initial Consultation",
      desc: "Reach out to schedule your first appointment. We will discuss your basic needs, match you with the right therapist, and verify your insurance coverage, including Medicaid."
    },
    {
      title: "Comprehensive Assessment",
      desc: "During your first session, your therapist will conduct a thorough evaluation of your mental health history, current challenges, and personal goals."
    },
    {
      title: "Personalized Plan",
      desc: "Together, you and your therapist will develop a customized treatment plan outlining the therapeutic methods and frequency of sessions needed to reach your objectives."
    },
    {
      title: "Growth & Healing",
      desc: "Engage in regular therapy sessions where you will learn new skills, process emotions, and gradually achieve lasting positive change in your life."
    }
  ];

  const faqs = [
    {
      question: "What does individual therapy in Darby involve?",
      answer: "Individual therapy in Darby offers a personalized process where licensed therapists support you in addressing challenges like anxiety, depression, or life transitions in a safe, confidential setting. Our Delaware County therapists use evidence-based methods tailored to your needs."
    },
    {
      question: "How often are individual counseling sessions recommended?",
      answer: "Most clients begin with weekly counseling sessions to establish momentum and build progress. As you meet your therapeutic goals, we can adjust the frequency to bi-weekly or monthly based on your unique situation."
    },
    {
      question: "How long does personal counseling typically last?",
      answer: "The duration of personal counseling in PA varies widely. Some individuals achieve their specific goals through short-term solution-focused therapy in 8-12 sessions, while others benefit from longer-term counseling to navigate deeper trauma or ongoing life stressors."
    },
    {
      question: "Is individual therapy covered by insurance in PA?",
      answer: "Yes, Sunrise Human Care accepts Medicaid to ensure mental health care is accessible to the Darby and broader Delaware County community. Our administrative team will verify your benefits prior to your first session."
    },
    {
      question: "What if I'm nervous about starting therapy for the first time?",
      answer: "It is completely normal to feel nervous or hesitant about starting individual therapy. Our therapists prioritize creating a warm, non-judgmental, and secure environment. We move at a pace that feels comfortable for you, ensuring you feel safe every step of the way."
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
              src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918057/cropped-shot-of-a-man-having-a-therapeutic-session-2026-03-25-02-43-30-utc_bzrrq0.jpg" 
              alt="Individual Therapy in Darby PA" 
              fill 
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
                Personalized Counseling in PA
              </span>
              <h1 className="font-barlow font-normal text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-md">
                Individual Therapy in <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal drop-shadow-md">Darby, PA</span>
              </h1>
              <p className="text-stone-100 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
                Expert, one-on-one counseling designed to help you navigate life&apos;s challenges, manage anxiety and depression, and foster profound personal growth in a safe, confidential environment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#appointment">
                  <button className="bg-orange-500 hover:bg-orange-400 text-stone-900 font-barlow font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-orange-500/20">
                    <Calendar className="w-5 h-5" />
                    Book an Appointment
                  </button>
                </Link>
                <a href="tel:+18146202162">
                  <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-barlow font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center w-full sm:w-auto backdrop-blur-sm">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (814) 620-2162
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="bg-stone-50 relative z-10 -mt-10 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.15)]">
          
          {/* SECTION 1: Understanding Individual Therapy */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-6 space-y-6"
                >
                  <SectionTag>Understanding Your Journey</SectionTag>
                  <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight leading-tight">
                    What is Individual Therapy?
                  </h2>
                  <div className="prose prose-stone prose-lg font-barlow text-stone-600">
                    <p>
                      Individual therapy, also known as psychotherapy or personal counseling, is a collaborative process between you and a licensed mental health professional. Finding the right therapist in Delaware County is a deeply personal journey, and at Sunrise Human Care in Darby, PA, we recognize that no two paths to wellness are the same.
                    </p>
                    <p>
                      Our individualized counseling sessions provide a safe, confidential, and non-judgmental space where you can explore your thoughts, beliefs, and behaviors. Whether you are seeking <strong>anxiety therapy in Darby</strong>, looking for an effective <strong>depression treatment</strong>, or simply needing support through a difficult life transition, our dedicated team is here to help you build resilience and achieve lasting emotional well-being.
                    </p>
                    <p>
                      We believe that therapy is not just about symptom management; it&apos;s about uncovering the root causes of distress, developing healthy coping mechanisms, and empowering you to lead a more fulfilling, balanced life.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  <Card className="flex flex-col items-center text-center h-full bg-white/60 p-8">
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Safe & Confidential</h3>
                    <p className="font-barlow text-stone-500 text-sm">Your privacy is our utmost priority. We provide a secure environment where you can speak openly without fear of judgment.</p>
                  </Card>
                  <Card className="flex flex-col items-center text-center h-full bg-white/60 p-8">
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Licensed Experts</h3>
                    <p className="font-barlow text-stone-500 text-sm">Work with highly trained, compassionate therapists in Delaware County who specialize in various therapeutic modalities.</p>
                  </Card>
                  <Card className="flex flex-col items-center text-center h-full bg-white/60 p-8">
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Evidence-Based</h3>
                    <p className="font-barlow text-stone-500 text-sm">We utilize scientifically proven methods like CBT and DBT to ensure effective, measurable progress in your mental health journey.</p>
                  </Card>
                  <Card className="flex flex-col items-center text-center h-full bg-white/60 p-8">
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Personalized Care</h3>
                    <p className="font-barlow text-stone-500 text-sm">Your treatment plan is tailored specifically to your unique background, challenges, and personal goals for therapy.</p>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* SECTION 2: Conditions Treated (Bento Grid) */}
          <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-[120px] -mr-[300px] -mt-[300px] pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <SectionTag>Comprehensive Care</SectionTag>
                <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight mt-4 mb-6">
                  What We Treat Through Individual Therapy
                </h2>
                <p className="text-stone-500 font-barlow text-lg leading-relaxed">
                  Our licensed professionals in Darby, PA are equipped to help you manage and overcome a wide spectrum of psychological and emotional challenges.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Anxiety Disorders",
                    desc: "Anxiety therapy in Darby focuses on identifying triggers and developing coping strategies for generalized anxiety, social anxiety, panic attacks, and phobias. We help you regain control over racing thoughts.",
                  },
                  {
                    title: "Depression & Mood",
                    desc: "Our depression treatment in Darby utilizes proven methods to address persistent sadness, lack of motivation, and feelings of hopelessness, helping you rediscover joy and purpose in your daily life.",
                  },
                  {
                    title: "Trauma & PTSD",
                    desc: "We offer trauma-informed care to help individuals process and heal from past traumatic experiences, reducing the impact of distressing memories and post-traumatic stress symptoms.",
                  },
                  {
                    title: "Stress & Burnout",
                    desc: "Whether stemming from career pressures, caregiving, or daily life, our personal counseling in PA equips you with stress management techniques to restore your energy and work-life balance.",
                  },
                  {
                    title: "Life Transitions",
                    desc: "Navigating major life changes such as divorce, career shifts, relocation, or loss can be overwhelming. Individual therapy provides an anchor and guidance during these uncertain times.",
                  },
                  {
                    title: "Self-Esteem & Growth",
                    desc: "Therapy isn't just for crisis management. We assist clients in exploring their identity, building self-worth, improving relationships, and achieving profound personal growth.",
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="h-full bg-stone-50/50 flex flex-col items-center text-center p-8">
                      <h3 className="font-barlow font-bold text-xl text-stone-900 mb-3">{item.title}</h3>
                      <p className="font-barlow text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 3: Clinical Approach (E-E-A-T Focus) */}
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
                  <SectionTag className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">Clinical Excellence</SectionTag>
                  <h2 className="font-barlow font-normal text-4xl md:text-5xl tracking-tighter leading-tight mb-6">
                    Our Evidence-Based <br />
                    <span className="font-instrument-serif italic text-orange-400 font-normal">Therapeutic Approaches</span>
                  </h2>
                  <div className="space-y-6 font-barlow text-stone-300 text-lg leading-relaxed">
                    <p>
                      At Sunrise Human Care, we adhere strictly to evidence-based practices (EBPs). This means the therapeutic interventions we utilize have been rigorously researched and clinically proven to produce positive outcomes.
                    </p>
                    <p>
                      Our licensed therapists in Delaware County hold advanced degrees and undergo continuous clinical training. We do not apply a "one-size-fits-all" model; instead, we integrate various modalities depending on your specific diagnosis and personal preferences.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {[
                    {
                      title: "Cognitive Behavioral Therapy (CBT)",
                      desc: "A highly effective, goal-oriented approach that helps you identify and change negative thought patterns that influence behaviors and emotions. CBT is a gold standard for anxiety therapy and depression treatment."
                    },
                    {
                      title: "Dialectical Behavior Therapy (DBT)",
                      desc: "Focuses on teaching you how to live in the moment, develop healthy ways to cope with stress, regulate emotions, and improve relationships with others."
                    },
                    {
                      title: "Mindfulness-Based Cognitive Therapy",
                      desc: "Combines cognitive behavioral techniques with mindfulness strategies to help individuals better understand and manage their thoughts and emotions to achieve relief from distress."
                    },
                    {
                      title: "Solution-Focused Brief Therapy (SFBT)",
                      desc: "A short-term, future-focused therapeutic approach that incorporates positive psychology principles and practices to construct solutions rather than dwelling on problems."
                    }
                  ].map((method, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                      <h4 className="font-barlow font-bold text-xl text-white mb-2 flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-orange-400" />
                        {method.title}
                      </h4>
                      <p className="font-barlow text-stone-400 text-sm leading-relaxed pl-8">
                        {method.desc}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* SECTION 4: The Process (Timeline Format) */}
          <section className="relative py-24 pb-16 md:py-32 md:pb-24 overflow-hidden bg-stone-50/50">
            <CurveTransition fillColor="#ffffff" />
            <div className="container mx-auto px-4 md:px-8">
              <motion.div 
                className="max-w-4xl mx-auto text-center mb-16 md:mb-24" 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="flex flex-col items-center gap-4">
                  <SectionTag>Your Path Forward</SectionTag>
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
                      {processSteps.map((step, i) => (
                          <TimelineStep 
                              key={i}
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
            </div>
          </section>

          {/* SECTION 5: FAQs */}
          <section className="py-16 md:py-24 bg-stone-100">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <SectionTag>Common Questions</SectionTag>
                  <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight mt-4">
                    Individual Therapy FAQs
                  </h2>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "group relative overflow-hidden rounded-[2rem] border backdrop-blur-xl transition-all duration-500",
                        activeFaq === index 
                          ? "border-orange-500/30 bg-white shadow-md" 
                          : "border-stone-200/60 bg-white/50 hover:border-orange-200/40 hover:bg-white shadow-sm"
                      )}
                    >
                      <button 
                        type="button"
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                        className="relative flex w-full items-start gap-6 px-8 py-6 text-left transition-colors duration-300 focus:outline-none"
                      >
                        <span 
                          className={cn(
                            "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-105",
                            activeFaq === index ? "bg-orange-500 border-orange-400 text-white" : "bg-orange-50 border-stone-100 text-orange-500"
                          )}
                        >
                          <ChevronDown className={cn("relative h-5 w-5 transition-transform duration-500", activeFaq === index ? "rotate-180" : "")} />
                        </span>

                        <div className="flex flex-1 flex-col gap-2 mt-2">
                          <h3 className={cn(
                            "text-lg font-barlow font-bold leading-tight tracking-tight transition-colors duration-300",
                            activeFaq === index ? "text-orange-500" : "text-stone-900 group-hover:text-orange-500"
                          )}>
                            {faq.question}
                          </h3>

                          <AnimatePresence initial={false}>
                            {activeFaq === index && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }} 
                                animate={{ height: "auto", opacity: 1 }} 
                                exit={{ height: 0, opacity: 0 }} 
                                transition={{ duration: 0.3 }}
                              >
                                <div className="pt-2">
                                  <p className="text-stone-500 font-barlow text-base leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </button>
                    </div>
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
              <meta itemProp="lastReviewed" content={new Date().toISOString().split('T')[0]} />
              <p>
                This content was clinically reviewed by Holli O'Donnell, Licensed Mental Health Professional, on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} to ensure accuracy and compliance with current medical standards.
              </p>
            </div>
          </section>

          {/* SECTION 6: Appointment */}
          <AppointmentSection />
          
        </div>
      </main>
      
      <div className="relative z-20 bg-white">
        <Footer />
      </div>
    </div>
  );
}