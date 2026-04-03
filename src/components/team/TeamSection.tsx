"use client";

import React from "react";
import Image from "next/image";
import { HorizontalScroll } from "../ui/HorizontalScroll";
import { motion } from "framer-motion";
import SectionTag from "@/components/ui/section-tag";
import UiloraFrostedGlass from "@/components/ui/uilora-frosted-glass";
import { Users, Star, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    name: "Michael Thevar",
    role: "President & Founder",
    image: "/images/michael.jpg"
  },
  {
    name: "Holli O'Donnell",
    role: "Clinical Director",
    image: "/images/holly.jpg"
  },
  {
    name: "Dr. Farah Khan",
    role: "Psychiatrist",
    image: "/images/dr-farah-khan.jpeg"
  },
  {
    name: "Chevonne Worthy",
    role: "Outpatient Therapist",
    image: "/images/chevonne-worthy.jpg"
  },
  {
    name: "Anthony Obi",
    role: "Outpatient Therapist",
    image: "/images/Toni Obi's Profile Picture.jpeg"
  },
  {
    name: "Michael Flynn",
    role: "Outpatient Therapist",
    image: "/images/michael-flynn.jpg"
  },
  {
    name: "Shanada Anderson",
    role: "Outpatient Therapist",
    image: "/images/Shanada Anderson.jpeg"
  }
];

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

export default function TeamSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24 font-barlow selection:bg-stone-100 selection:text-stone-900">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div 
          className="mx-auto mb-16 flex max-w-5xl flex-col items-center px-6 text-center lg:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionTag>
              Our Professionals
            </SectionTag>
            <h2 className="mb-6 font-normal text-4xl md:text-6xl text-balance text-stone-900 tracking-tighter leading-tight">
              Meet our expert <br />
              <span className="font-instrument-serif italic text-orange-500">mental health professionals</span>
            </h2>
            <p className="max-w-2xl text-stone-500 text-lg leading-relaxed mx-auto">
              Our compassionate team of licensed therapists and psychiatrists is dedicated to providing personalized, evidence-based care in Darby, PA.
            </p>
          </motion.div>
        </motion.div>

        {/* Horizontal Scroll System */}
        <motion.div 
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full py-4"
        >
          <HorizontalScroll className="px-4 md:px-8 pb-20" autoPlay={true} autoPlaySpeed={0.4}>
            {[...teamMembers, ...teamMembers].map((member, idx) => (
              <div key={idx} className="w-72 shrink-0">
                <motion.div 
                  whileTap={{ scale: 0.98 }}
                  className="group flex flex-col cursor-pointer" 
                >
                  <div className="relative h-[420px] w-full overflow-hidden rounded-[2.5rem] bg-stone-50 border border-stone-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                    <Image 
                      alt={`${member.name}, ${member.role} at Sunrise Human Care Services in Darby, PA`} 
                      className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                      fill 
                      src={member.image} 
                    />
                    <div className="absolute bottom-4 left-4 right-4 rounded-3xl bg-white/90 backdrop-blur-md p-5 border border-white/50 shadow-lg transform transition-all duration-500 group-hover:bg-white">
                      <h3 className="font-bold text-stone-900 tracking-tight text-lg"> 
                        {member.name} 
                      </h3> 
                      <p className="text-orange-500 font-bold text-xs uppercase tracking-widest mt-1"> 
                        {member.role} 
                      </p> 
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </HorizontalScroll>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-5xl px-6 text-center lg:px-0"
        >
          <div className="rounded-[2.5rem] p-12 md:p-16 border border-white/10 relative overflow-hidden shadow-2xl bg-orange-600 group">
            <UiloraFrostedGlass 
              baseColor="#f97316" 
              accentColor="#fdba74" 
              speed={1.2} 
              className="z-[1]"
            />
            
            <div className="relative z-10 flex flex-col items-center text-center gap-10">
              <p className="font-instrument-serif italic text-3xl md:text-5xl text-white leading-snug tracking-tight max-w-4xl"> 
                &quot;The team at Sunrise didn&apos;t just listen to me; they gave me the exact tools I needed to finally manage my anxiety and <span className="text-amber-200">get my life back.</span>&quot; 
              </p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="shrink-0">
                <Link 
                  href="/about"
                  className="inline-flex px-10 py-5 bg-white text-orange-600 font-bold rounded-full items-center gap-3 shadow-xl transition-all hover:bg-amber-50 group/btn whitespace-nowrap"
                >
                  Meet the Full Team
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
