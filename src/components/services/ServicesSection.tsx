
"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import SectionTag from '../ui/section-tag';

interface FeatureItem {
    title: string;
    desc?: string;
    image?: any;
    link?: string;
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
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as any
    }
  }
};

const SpotlightRow = ({ item, index }: { item: FeatureItem; index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isTouch, setIsTouch] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setIsTouch(window.matchMedia("(hover: none)").matches);
    }, []);

    const currentState = isHovered ? "hover" : "initial";

    return (
        <motion.div ref={ref} variants={itemVariants} whileTap={{ scale: 0.98 }} className="w-full">
            <Link href={item.link || "#"} className="block group mb-2 last:mb-0 w-full">
                <motion.div
                    initial="initial"
                    animate={currentState}
                    onHoverStart={() => { if (!isTouch) setIsHovered(true); }}
                    onHoverEnd={() => { if (!isTouch) setIsHovered(false); }}
                    data-active={currentState === "hover"}
                    className="relative border-t border-stone-200 py-6 md:py-12 group cursor-pointer overflow-hidden transition-all duration-300 hover:rounded-3xl data-[active=true]:rounded-3xl hover:border-transparent data-[active=true]:border-transparent min-h-[60px] md:min-h-0"
                >
                    <div className="flex flex-row items-center justify-between relative z-10 px-4 gap-4">
                        {/* Number */}
                        <span className="text-stone-400 font-barlow font-medium text-xs md:text-sm tracking-widest group-hover:text-white group-data-[active=true]:text-white transition-colors duration-300 tabular-nums">
                            0{index + 1}
                        </span>

                        {/* Title */}
                        <motion.h2
                            variants={{ initial: { x: 0 }, hover: { x: 20 } }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="text-lg sm:text-2xl md:text-5xl lg:text-6xl font-normal text-stone-400 group-hover:text-white group-data-[active=true]:text-white transition-colors duration-300 font-barlow tracking-tighter text-left flex-1 px-4 md:px-10"
                        >
                            {item.title}
                        </motion.h2>

                        {/* Button */}
                        <motion.div
                            variants={{ 
                                initial: { scale: 0.8, opacity: 0.5 }, 
                                hover: { scale: 1, opacity: 1 } 
                            }}
                            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                            className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border border-stone-300 text-stone-400 group-hover:border-white group-data-[active=true]:border-white group-hover:text-white group-data-[active=true]:text-white transition-all duration-300 shrink-0"
                        >
                            <ArrowUpRight className="h-4 w-4 md:h-5 md:h-5" />
                        </motion.div>
                    </div>

                    {/* Spotlight Image Reveal with Orange Tint */}
                    {item.image && (
                        <motion.div
                            variants={{ 
                                initial: { opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }, 
                                hover: { opacity: 1, scale: 1, x: "-50%", y: "-50%" } 
                            }}
                            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                            className="absolute top-1/2 left-1/2 w-[200px] h-[140px] md:w-[400px] md:h-[250px] pointer-events-none z-0 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 will-change-transform"
                        >
                            <Image
                              src={typeof item.image === 'string' ? (item.image.includes('cloudinary') ? item.image.replace('/upload/', '/upload/f_auto,q_auto,w_800/') : item.image) : item.image.src}
                              alt={`${item.title} services at Sunrise Human Care Services in Darby, PA`}
                              fill
                              sizes="(max-width: 768px) 200px, 400px"
                              className="object-cover transition-[filter,transform] duration-500 group-hover:sepia group-data-[active=true]:sepia group-hover:hue-rotate-[320deg] group-data-[active=true]:hue-rotate-[320deg] group-hover:saturate-[2] group-data-[active=true]:saturate-[2] group-hover:brightness-[0.8] group-data-[active=true]:brightness-[0.8]"
                            />
                            <div className="absolute inset-0 bg-orange-600/30 mix-blend-overlay" />
                        </motion.div>
                    )}

                    {/* Background Orange Hover State */}
                    <motion.div
                        variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-orange-600/90 blur-none transition-opacity duration-300"
                    />
                </motion.div>
            </Link>
        </motion.div>
    );
};

const ServicesSection: React.FC = () => {
  const services: FeatureItem[] = [
    {
      title: "Individual Therapy",
      link: "/individual-therapy-darby-pa",
      desc: "One-on-one sessions focused on personal growth, emotional healing, and developing practical coping strategies for life's challenges.",
      image: "https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_800/v1774918385/young-woman-with-her-psychologist-during-a-therapy-2025-11-20-15-46-12-utc_d2c80h.jpg",
    },
    {
      title: "Couples Counseling",
      link: "/couples-counseling-darby-pa",
      desc: "Strengthening relationships through improved communication, conflict resolution, and rebuilding trust in a supportive environment.",
      image: "https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_800/v1774918015/diverse-couple-on-a-therapy-session-in-a-psycholog-2026-03-25-04-41-39-utc_jebtlc.jpg",
    },
    {
      title: "Family Therapy",
      link: "/family-therapy-darby-pa",
      desc: "Nurturing family dynamics and fostering healthy connections by addressing collective challenges and improving understanding.",
      image: "https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_800/v1774918385/women-discussing-childs-progress-in-kindergarten-e-2026-03-25-09-19-16-utc_j1quiw.jpg",
    },
    {
      title: "IBHS Services",
      link: "/ibhs-darby-pa",
      desc: "Intensive Behavioral Health Services (IBHS) in Darby, PA and Delaware County. Behavioral therapy for autism and ADHD.",
      image: "https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_800/v1774918385/women-discussing-childs-progress-in-kindergarten-e-2026-03-25-09-19-16-utc_j1quiw.jpg",
    },
    {
      title: "Psychiatric Evaluations",
      link: "/psychiatric-evaluations-darby-pa",
      desc: "Comprehensive diagnostic assessments to understand your mental health needs and determine the best course of treatment.",
      image: "https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_800/v1774918057/cropped-view-of-psychotherapist-writing-on-clipboa-2026-03-11-19-39-36-utc_j17vdo.jpg",
    },
    {
      title: "Medication Management",
      link: "/medication-management-darby-pa",
      desc: "Professional oversight and monitoring of psychiatric medications to ensure optimal effectiveness and safety in your recovery.",
      image: "https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_800/v1774918385/doctor-give-advice-about-medicine-or-vitamin-to-el-2026-01-08-05-55-04-utc_fvofy1.jpg",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} 
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
            <SectionTag>
                Our Specialties
            </SectionTag>
            <h2 className="text-3xl md:text-5xl font-normal text-stone-900 tracking-tighter leading-tight">
                From Talk Therapy to Psychiatric Care: <br />
                <span className="font-instrument-serif italic text-orange-500">Everything you need to heal, under one roof.</span>
            </h2>
          </motion.div>
        </motion.div>
        
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-6xl mx-auto border-b border-stone-200"
        >
            {services.map((item, i) => (
                <SpotlightRow key={i} item={item} index={i} />
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
