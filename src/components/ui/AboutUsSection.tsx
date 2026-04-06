"use client"

import React, { useState } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { Heart, ShieldCheck, ArrowUpRight, MapPin, Leaf } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import SectionTag from "./section-tag"
import MagnifiedBento from "./magnified-bento"

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
                "group relative border border-stone-200/80 bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-500",
                "hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-amber-200/50 hover:bg-white",
                containerClassName
            )}
            onMouseMove={handleMouseMove}
        >
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

const AboutUsSection = () => {
  const iconContainerStyles = "h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-md shadow-stone-200/50 border border-stone-100 transition-transform group-hover:scale-110 duration-300";

  return (
    <section id="about" className="py-24 bg-white selection:bg-amber-100 selection:text-amber-900 font-barlow">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16" 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center gap-4">
            <SectionTag>Our Story</SectionTag>
            <h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight">
                Compassionate support to help you <br />
                <span className="font-instrument-serif italic text-orange-500">feel like yourself again.</span>
            </h2>
          </div>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-6xl mx-auto">
          
          {/* Main Story Card */}
          <Card containerClassName="md:col-span-8 rounded-[2.5rem]" className="flex flex-col md:flex-row gap-8 items-center p-8 md:p-10">
            <div className="w-full md:w-1/2 space-y-6">
              <div className={iconContainerStyles}>
                <MapPin className="h-5 w-5 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
                Our Vision for Darby
              </h3>
              <div className="space-y-4">
                <p className="text-stone-500 leading-relaxed font-medium italic">
                  &quot;We treat the person, not the symptom. Our goal is to provide a trauma-informed environment where evidence-based therapy leads to measurable clinical improvement.&quot;
                </p>
                <p className="text-stone-500 leading-relaxed font-medium">
                  Since 2018, we have combined clinical excellence with deep community roots to ensure your path to wellness is supported by local experts who understand your needs.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:h-full min-h-[300px] rounded-3xl overflow-hidden shadow-xl group/img">
              <Image 
                src="/images/holly.jpg"
                alt="Holli O'Donnell - Clinical Director at Sunrise Human Care Services in Darby, PA"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 px-3 py-2 bg-stone-900/40 backdrop-blur-md border border-white/10 rounded-xl shadow-xl">
                <p className="text-white font-bold text-[10px] uppercase tracking-widest leading-none">Holli O&apos;Donnell</p>
                <p className="text-orange-400 font-bold text-[8px] uppercase tracking-[0.1em] mt-1 leading-none opacity-90">Clinical Director</p>
              </div>
            </div>
          </Card>

          {/* Experience Magnified Bento Card */}
          <MagnifiedBento className="md:col-span-4 rounded-[2.5rem]" />

          {/* Patient-Centered Feature */}
          <Card containerClassName="md:col-span-4 rounded-[2.5rem]" className="p-8">
            <div className={cn(iconContainerStyles, "mb-6")}>
              <Heart className="h-5 w-5 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-orange-600 transition-colors">
                Personalized Care
            </h3>
            <p className="text-sm text-stone-500 leading-relaxed font-medium">
              Treatment as unique as you are. Your path to recovery starts with a clinical plan designed for your specific history, goals, and lifestyle.
            </p>
          </Card>

          {/* Accessible Care Feature */}
          <Card containerClassName="md:col-span-4 rounded-[2.5rem]" className="p-8">
            <div className={cn(iconContainerStyles, "mb-6")}>
              <ShieldCheck className="h-5 w-5 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-orange-600 transition-colors">
                Accessible Care
            </h3>
            <p className="text-sm text-stone-500 leading-relaxed font-medium">
              Professional support, within reach. We accept Medicaid and private insurance for both in-person Darby visits and secure telehealth sessions.
            </p>
          </Card>

          {/* Holistic Growth Stat Card */}
          <Card containerClassName="md:col-span-4 rounded-[2.5rem]" className="flex flex-col justify-center items-center text-center p-8">
            <div className={cn(iconContainerStyles, "mb-6")}>
              <Leaf className="h-5 w-5 text-orange-500" />
            </div>
            <div className="text-5xl font-black text-stone-900 tracking-tighter mb-2">Holistic</div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
                Wellness Approach
            </p>
          </Card>

          {/* CTA Card */}
          <Card containerClassName="md:col-span-12 rounded-[2.5rem] bg-stone-900 border-none" className="p-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110" />
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-normal text-white tracking-tight mb-2 transition-colors duration-500 group-hover:text-orange-500">
                Take the first step today.
              </h3>
              <p className="text-stone-400 text-lg transition-colors duration-500 group-hover:text-stone-300">Our Darby team typically responds to appointment requests by the next business day.</p>
            </div>
            <Link href="/appointment#home" className="relative z-10 shrink-0">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-stone-50 font-bold rounded-full shadow-lg shadow-orange-500/20 transition-all flex items-center gap-2 group/btn"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </motion.div>
            </Link>
          </Card>

        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
