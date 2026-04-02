
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
  hidden: { y: 12, opacity: 0, filter: "blur(4px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as any
    }
  }
};

const ConditionsSection = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes conditions-scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-conditions-scroll {
        display: flex;
        width: max-content;
        animation: conditions-scroll 80s linear infinite;
      }
      .animate-conditions-scroll:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
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
    <section id="conditions" className="relative py-24 pb-8 bg-white font-barlow overflow-hidden">
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
            <h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight">
              Specialized treatment for {' '}
              <span className="font-instrument-serif italic text-orange-500">the challenges you face.</span>
            </h2>
          </motion.div>
          <motion.p variants={itemVariants} className="text-stone-500 font-barlow text-lg mt-6 max-w-2xl mx-auto">
            We provide evidence-based treatment for a wide range of conditions, ensuring you get exactly the right support for your unique situation.
          </motion.p>
        </motion.div>
      </div>

      {/* Infinite Horizontal Scroll */}
      <div className="relative w-full overflow-hidden py-10 group/carousel">
        <div className="animate-conditions-scroll gap-6">
          {/* Double the list for seamless loop */}
          {[...conditions, ...conditions].map((condition, idx) => (
            <motion.div key={idx} className="w-[380px] flex-shrink-0" whileTap={{ scale: 0.98 }}>
              <Card className="flex flex-col h-full min-h-[340px] cursor-pointer">
                <div className="flex items-center justify-between mb-6">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-md shadow-stone-200/50 border border-stone-100 transition-transform group-hover:scale-110 duration-300",
                    condition.color === 'amber' && "text-amber-500",
                    condition.color === 'blue' && "text-blue-500",
                    condition.color === 'orange' && "text-orange-500",
                    condition.color === 'rose' && "text-rose-500",
                    condition.color === 'indigo' && "text-indigo-500",
                    condition.color === 'emerald' && "text-emerald-500",
                    condition.color === 'red' && "text-red-500",
                  )}>
                    <condition.icon className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-stone-300 group-hover:text-amber-600 transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-amber-600 transition-colors whitespace-normal">
                  {condition.title}
                </h3>
                <p className="text-stone-500 text-sm mb-8 flex-grow font-medium leading-relaxed whitespace-normal line-clamp-4">
                  {condition.short}
                </p>
                
                {/* Reveal on hover link - Cleaner replacement for repetitive buttons */}
                <Link href={condition.url} className="mt-auto relative overflow-hidden group/link flex items-center gap-3">
                   <div className="h-px flex-grow bg-stone-100 group-hover/link:bg-amber-200 transition-colors" />
                   <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-300 group-hover/link:text-amber-600 transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                     Read Details
                   </span>
                   <div className="w-8 h-8 rounded-full border border-stone-100 flex items-center justify-center text-stone-300 group-hover/link:bg-amber-500 group-hover/link:border-amber-400 group-hover/link:text-white transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 duration-500 delay-75">
                     <ArrowUpRight className="h-4 w-4" />
                   </div>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Gradient Overlays for Fade Effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
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
