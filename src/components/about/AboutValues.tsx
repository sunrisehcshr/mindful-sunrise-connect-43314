"use client";

import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Heart, ShieldCheck, Users, Sparkles } from 'lucide-react';
import SectionTag from '../ui/section-tag';
import { cn } from "@/lib/utils";

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

const values = [
  {
    icon: Heart,
    title: "Empathy First",
    description: "We listen without judgment and treat every individual with the profound respect, dignity, and compassion they deserve."
  },
  {
    icon: ShieldCheck,
    title: "Evidence-Based",
    description: "Our therapeutic and psychiatric approaches are grounded in proven clinical research to ensure safe, effective outcomes."
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "We are deeply rooted in Darby, PA, striving to make high-quality mental health support accessible to our neighbors."
  },
  {
    icon: Sparkles,
    title: "Holistic Healing",
    description: "We treat the whole person—mind, body, and spirit—recognizing that true wellness goes beyond symptom management."
  }
];

const AboutValues = () => {
  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag>Our Core Values</SectionTag>
          <h2 className="font-barlow font-normal text-4xl md:text-5xl text-stone-900 tracking-tighter leading-none mb-6">
            The principles that <span className="font-instrument-serif italic text-orange-500 font-normal">guide us</span>
          </h2>
          <p className="text-stone-500 font-barlow text-lg max-w-2xl mx-auto leading-relaxed">
            Everything we do at Sunrise Human Care is built upon a foundation of core beliefs designed to create a safe, supportive environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="h-full"
            >
              <Card className="flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-500 shadow-sm border border-orange-100">
                  <value.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-barlow font-bold text-stone-900 mb-3 tracking-tight group-hover:text-orange-500 transition-colors">{value.title}</h3>
                <p className="text-stone-500 font-barlow text-sm leading-relaxed flex-grow">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
