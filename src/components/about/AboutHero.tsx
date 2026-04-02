"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="relative pt-40 pb-28 md:pt-48 md:pb-40 overflow-hidden bg-stone-950">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774917953/the-young-family-with-a-child-are-having-a-session-2023-11-27-05-18-05-utc_z6v3ed.jpg" 
          alt="Sunrise Human Care Darby PA" 
          fill 
          className="object-cover opacity-60"
          priority
        />
        {/* Soft overlay gradient mimicking the brand warmth */}
        <div className="absolute inset-0 z-0 bg-black/50" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-orange-900/30 via-stone-950/80 to-stone-50" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block font-barlow font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-orange-400 mb-6 bg-orange-500/10 px-5 py-2.5 rounded-full border border-orange-500/20 backdrop-blur-md">
            About Sunrise Human Care
          </span>
          <h1 className="font-barlow font-normal text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-[1.1] mb-6">
            Dedicated to illuminating the path to <span className="font-instrument-serif italic text-orange-400 font-normal">mental wellness.</span>
          </h1>
          <p className="text-stone-300 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We are a sanctuary for healing, growth, and transformation, providing compassionate and expert psychiatric care to the Darby community since 2018. We exclusively accept Medicaid.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
