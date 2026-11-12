
"use client";

import React, { useRef } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Phone, Calendar, Shield, Users, Heart } from "lucide-react";
import CurveTransition from "./ui/CurveTransition";

const WarmHeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[850px] md:min-h-screen w-full flex items-center overflow-hidden bg-stone-950"
      id="home"
    >
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
        style={{
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center md:bg-[65%_center]"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/l6c5pgwlc3/pexels-kampus-8380086.jpg')",
          }}
        />
      </motion.div>

      {/* Image overlays */}
      <div className="absolute inset-0 z-0 bg-black/5" />

      {/* Darker left side for text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-stone-950/85 via-stone-950/45 via-45% to-stone-950/5" />

      {/* Bottom gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-stone-950/40 via-transparent to-stone-950/10" />

      {/* Hero Content */}
      <div className="container mx-auto px-6 md:px-10 relative z-10 pt-40 pb-20 md:pt-44 md:pb-24">

        <motion.div
          initial="hidden"
          animate="visible"
          className="w-full max-w-3xl text-left"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.15,
              },
            },
          }}
        >

          {/* Eyebrow */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}
            className="mb-8"
          >
            <span className="inline-flex items-center bg-orange-500/10 backdrop-blur-md border border-orange-500/40 text-orange-400 font-barlow font-bold text-xs md:text-sm tracking-[0.2em] uppercase px-6 py-3 rounded-full">
              Compassionate Mental Health Care in PA
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              },
            }}
            className="font-barlow text-balance font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08] mb-7 max-w-3xl"
          >
            Mental Health Care That Starts With Understanding You.
            <span className="block text-orange-400 font-normal mt-2">
              Compassionate Support in Darby, PA.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              },
            }}
            className="text-stone-200 font-barlow text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
          >
            Every person's journey is different. At Sunrise Human Care
            Services, we work alongside individuals and families to
            understand their needs, recognize their strengths, and explore
            personalized approaches to mental health and well-being.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              },
            }}
            className="flex flex-col sm:flex-row gap-4 items-start mb-10"
          >
            <motion.div whileTap={{ scale: 0.96 }}>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-400 text-white h-14 px-8 text-base font-barlow font-bold rounded-full shadow-lg shadow-orange-500/25 transition-all duration-300"
              >
                <a href="#services">
                  Explore Our Services
                </a>
              </Button>
            </motion.div>

            <motion.div whileTap={{ scale: 0.96 }}>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto border border-white/40 text-white bg-white/10 backdrop-blur-md h-14 px-8 text-base font-barlow font-bold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <a href="tel:+18146202162">
                  <Phone className="mr-2 h-5 w-5" />
                  Talk With Our Care Team
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Benefit Highlights */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8 },
              },
            }}
            className="flex flex-wrap items-center gap-x-5 gap-y-5 text-white font-barlow"
          >

            <div className="flex items-center gap-3">
              <Shield className="w-7 h-7 text-orange-400 shrink-0" />
              <span className="text-sm md:text-base font-medium">
                Compassionate<br />Support
              </span>
            </div>

            <div className="hidden sm:block h-10 w-px bg-orange-500/40" />

            <div className="flex items-center gap-3">
              <Users className="w-7 h-7 text-orange-400 shrink-0" />
              <span className="text-sm md:text-base font-medium">
                Personalized<br />Care
              </span>
            </div>

            <div className="hidden sm:block h-10 w-px bg-orange-500/40" />

            <div className="flex items-center gap-3">
              <Heart className="w-7 h-7 text-orange-400 shrink-0" />
              <span className="text-sm md:text-base font-medium">
                Community<br />Focused
              </span>
            </div>

          </motion.div>
        </motion.div>
      </div>

      {/* Bottom section transition */}
      <CurveTransition
        fillColor="#ffffff"
        inverted
        className="z-20"
        targetRef={sectionRef as any}
      />
    </section>
  );
};

export default WarmHeroSection;
