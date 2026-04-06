
import React, { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import SectionTag from "../ui/section-tag";
import { 
  ArrowUpRight, 
  Brain, 
  CloudRain, 
  Zap, 
  Heart, 
  Search, 
  Focus, 
  Users, 
  ShieldAlert, 
  Moon, 
  Activity, 
  Stethoscope, 
  MessageSquare, 
  Wind,
  Shield,
  Layers,
  Apple
} from 'lucide-react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import CurveTransition from "../ui/CurveTransition";

// --- Glowing Bento Card (Shared Style) ---
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
                "group relative border border-stone-200/80 bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-500 rounded-3xl",
                "hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-amber-200/50 hover:bg-white",
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
              rgba(245, 158, 11, 0.12),
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 12, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as any
    }
  }
};

import { HorizontalScroll } from '../ui/HorizontalScroll';

const ConditionsSection = () => {
  const conditions = [
    {
      title: "Anxiety Disorders",
      short: "Managing generalized anxiety, panic attacks, and social phobia. We provide evidence-based strategies to calm your mind and regain control over daily life.",
      url: "/anxiety-therapy-darby-pa",
      icon: Wind,
      color: "amber"
    },
    {
      title: "Depression",
      short: "Compassionate support for major, persistent, and seasonal depression. Our therapists help you rediscover hope and build a path toward emotional resilience.",
      url: "/depression-therapy-darby-pa",
      icon: CloudRain,
      color: "blue"
    },
    {
      title: "Bipolar Disorder",
      short: "Specialized care for managing mood episodes and achieving stability. We focus on symptom tracking, medication management, and sustainable coping mechanisms.",
      url: "/bipolar-disorder-therapy-darby-pa",
      icon: Zap,
      color: "orange"
    },
    {
      title: "PTSD",
      short: "Trauma-informed recovery focusing on emotional safety and processing. Our clinicians are trained in helping you navigate past trauma in a safe, healing environment.",
      url: "/ptsd-therapy-darby-pa",
      icon: Shield,
      color: "rose"
    },
    {
      title: "OCD",
      short: "Support for managing obsessive thoughts and compulsions through targeted therapy. We help you break cycles of ritualized behavior and reduce daily distress.",
      url: "/ocd-therapy-darby-pa",
      icon: Search,
      color: "orange"
    },
    {
      title: "ADHD",
      short: "Focus, organization, and impulse control strategies for children and adults. Our approach combines executive function coaching with clinical support.",
      url: "/adhd-treatment-darby-pa",
      icon: Focus,
      color: "indigo"
    },
    {
      title: "Relationships",
      short: "Navigating conflict, intimacy, and communication in partnerships and families. We facilitate healthy dialogue to strengthen your most important connections.",
      url: "/relationship-therapy-darby-pa",
      icon: Users,
      color: "emerald"
    },
    {
      title: "Schizophrenia",
      short: "Long-term management of psychosis and daily functioning. We provide a supportive framework for individuals and families navigating complex symptoms.",
      url: "/schizophrenia-treatment-darby-pa",
      icon: Brain,
      color: "blue"
    },
    {
      title: "BPD",
      short: "Dialectical approach to Borderline Personality Disorder support. We focus on emotional regulation, distress tolerance, and interpersonal effectiveness.",
      url: "/bpd-treatment-darby-pa",
      icon: ShieldAlert,
      color: "rose"
    },
    {
      title: "Sleep Disorders",
      short: "Addressing insomnia and improving sleep hygiene through behavioral therapy. Better mental health starts with consistent, restorative rest.",
      url: "/sleep-disorders-treatment-darby-pa",
      icon: Moon,
      color: "indigo"
    },
    {
      title: "Somatic Disorders",
      short: "Bridging the gap between physical symptoms and psychological roots. We help you understand the mind-body connection to reduce physical distress.",
      url: "/somatic-disorders-treatment-darby-pa",
      icon: Stethoscope,
      color: "orange"
    },
    {
      title: "Eating Disorders",
      short: "Support for building a healthy relationship with food and body image. Our team provides compassionate, specialized care for sustainable recovery.",
      url: "/eating-disorders-treatment-darby-pa",
      icon: Apple,
      color: "emerald"
    },
    {
      title: "Grief & Loss",
      short: "A safe space for navigating bereavement and life transitions. We support you through the complex stages of loss with patience and empathy.",
      url: "/grief-therapy-darby-pa",
      icon: Heart,
      color: "blue"
    },
    {
      title: "Substance Use",
      short: "Comprehensive addiction recovery and relapse prevention. We address the underlying causes of substance use to build a foundation for long-term sobriety.",
      url: "/substance-use-treatment-darby-pa",
      icon: Activity,
      color: "red"
    },
    {
      title: "Dissociative Disorders",
      short: "Specialized support for identity, memory, and consciousness integration. We help you navigate feelings of detachment and build a cohesive sense of self.",
      url: "/dissociative-disorders-treatment-darby-pa",
      icon: Layers,
      color: "indigo"
    }
  ];

  return (
    <section id="conditions" className="relative py-24 pb-16 bg-white font-barlow overflow-hidden">
      <CurveTransition fillColor="#fdfdfc" />
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} 
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
            <SectionTag>Conditions We Treat</SectionTag>
            <h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight max-w-[20ch] md:max-w-[25ch] mx-auto">
              Don&apos;t let your diagnosis define you.<br />
              <span className="font-instrument-serif italic text-orange-500">Find targeted relief</span><br />
              <span className="font-instrument-serif italic text-orange-500">for your specific struggle.</span>
            </h2>
          </motion.div>
          <motion.p variants={itemVariants} className="text-stone-500 font-barlow text-lg mt-6 max-w-2xl mx-auto">
            We provide evidence-based treatment for a wide range of conditions, ensuring you get exactly the right support for your unique situation.
          </motion.p>
        </motion.div>
      </div>

      {/* Horizontal Scroll System */}
      <div className="relative w-full py-10">
        <HorizontalScroll className="px-4 md:px-8 pb-16" autoPlay={true} autoPlaySpeed={1.2}>
          {[...conditions, ...conditions].map((condition, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block h-full w-[300px] sm:w-[380px]"
            >
              <Link href={condition.url} className="block h-full group/card">
                <Card containerClassName="h-full border-stone-100 hover:border-orange-200/50" className="p-8">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className={cn(
                        "p-3 rounded-2xl transition-all duration-500 group-hover/card:scale-110",
                        condition.color === 'amber' && "bg-amber-50 text-amber-600 group-hover/card:bg-amber-100",
                        condition.color === 'blue' && "bg-blue-50 text-blue-600 group-hover/card:bg-blue-100",
                        condition.color === 'orange' && "bg-orange-50 text-orange-600 group-hover/card:bg-orange-100",
                        condition.color === 'rose' && "bg-rose-50 text-rose-600 group-hover/card:bg-rose-100",
                        condition.color === 'indigo' && "bg-indigo-50 text-indigo-600 group-hover/card:bg-indigo-100",
                        condition.color === 'emerald' && "bg-emerald-50 text-emerald-600 group-hover/card:bg-emerald-100",
                        condition.color === 'red' && "bg-red-50 text-red-600 group-hover/card:bg-red-100"
                      )}>
                        <condition.icon className="w-6 h-6" />
                      </div>
                      <div className="h-10 w-10 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-500 transform translate-x-4 group-hover/card:translate-x-0">
                        <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover/card:text-orange-500" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-stone-900 mb-4 tracking-tight group-hover/card:text-orange-600 transition-colors">
                      {condition.title}
                    </h3>
                    
                    <p className="text-stone-500 text-sm leading-relaxed mb-6 font-barlow">
                      {condition.short}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-stone-50 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-orange-600 transition-colors">
                      Learn More <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </HorizontalScroll>
      </div>

      <div className="container mx-auto px-4 text-center mt-4">
        <Link href="/conditions">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-stone-900 px-10 py-4 text-sm font-bold text-white shadow-xl shadow-stone-200/50 transition-all hover:bg-orange-500 hover:shadow-orange-200/40"
          >
            Explore All Conditions We Treat
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default ConditionsSection;
