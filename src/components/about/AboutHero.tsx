
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="relative min-h-[750px] md:min-h-screen flex items-center pt-40 pb-28 md:pt-48 md:pb-36 overflow-hidden bg-stone-950">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/therapy-for-older-adults.webp"
          alt="Older adult receiving compassionate support at Sunrise Human Care Services"
          fill
          className="object-cover object-[35%_center] opacity-100"
          priority
          sizes="100vw"
        />

        {/* Left-side dark gradient */}
       <div
  className="absolute inset-0"
  style={{
    background:
      "linear-gradient(90deg, rgba(12,10,9,0.92) 0%, rgba(12,10,9,0.78) 25%, rgba(12,10,9,0.40) 43%, rgba(12,10,9,0.08) 60%, transparent 72%)",
  }}
/>

        {/* Subtle overall overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Bottom transition into white section */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-stone-950/10" />
      </div>

      {/* Hero Content */}
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl text-left"
        >

          {/* Eyebrow */}
          <span className="inline-flex items-center font-barlow font-bold text-xs md:text-sm tracking-[0.2em] uppercase text-orange-400 mb-8 bg-orange-500/10 px-6 py-3 rounded-full border border-orange-500/40 backdrop-blur-md">
            About Sunrise Human Care
          </span>

          {/* Main Heading */}
          <h1 className="font-barlow font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08] mb-7 max-w-3xl">
            Supporting every step of your
            <span className="block text-orange-400 font-normal mt-2">
              mental wellness journey.
            </span>
          </h1>

          {/* Description */}
          <p className="text-stone-100 font-barlow text-lg md:text-xl max-w-2xl leading-relaxed">
            Since 2018, we've partnered with the Darby community to provide
            compassionate mental health care. Our team works alongside
            individuals and families, recognizing their strengths and
            supporting them as they work toward their personal well-being
            goals. We currently accept Medicaid.
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
