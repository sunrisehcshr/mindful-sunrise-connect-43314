"use client";

import React, { useRef } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import CurveTransition from "./ui/CurveTransition";

const WarmHeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900"
      id="home"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
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
          className="absolute inset-0 w-full h-full bg-cover bg-[60%_center] md:bg-center"
          style={{
            backgroundImage: "url('https://ik.imagekit.io/l6c5pgwlc3/pexels-kampus-8380086.jpg')",
          }}
        />
      </motion.div>

      {/* Readability overlay (all devices) */}
      <div className="absolute inset-0 z-0 bg-black/40" />

      <div className="container mx-auto px-4 z-10 relative text-center pt-40 md:pt-32 -mt-16">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto py-12 px-6 md:py-8 md:px-12 relative overflow-hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 12 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="flex flex-col items-center gap-1 sm:gap-2 mb-3 sm:mb-4"
          >
            <div className="inline-block bg-black/20 backdrop-blur-md border border-white/10 text-white font-barlow font-semibold text-[9px] xs:text-[10px] sm:text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full whitespace-nowrap overflow-hidden max-w-[280px] xs:max-w-none shadow-sm">
              <div className="overflow-hidden relative w-full h-full flex items-center" style={{ willChange: 'transform' }}>
                <motion.div
                  initial={{ x: "0%" }}
                  animate={{ x: "-100%" }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                  className="whitespace-nowrap flex"
                >
                  <span className="pr-8">
                    Now accepting new Medicaid patients in Darby, PA — Response
                    within 24 hours — No Waitlist
                  </span>
                  <span className="pr-8">
                    Now accepting new Medicaid patients in Darby, PA — Response
                    within 24 hours — No Waitlist
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="font-barlow text-balance font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white mb-2 md:mb-3 leading-[1.1] tracking-tight drop-shadow-xl"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            Expert mental health care in Darby <br className="sm:hidden" />
            <span className="inline md:block font-instrument-serif italic text-white font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 leading-tight drop-shadow-md">
              to help you reclaim your peace of mind
            </span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-white mb-4 md:mb-5 max-w-2xl mx-auto leading-relaxed font-barlow drop-shadow-md"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            Stop struggling alone. Within 24 hours, our licensed Darby team will
            help you start a personalized, evidence-based plan to manage
            anxiety, depression, or trauma. You don’t have to wait months for
            the support you need today.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <motion.div whileTap={{ scale: 0.96 }}>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-white text-stone-900 hover:bg-amber-50 h-12 px-7 text-sm font-barlow font-bold rounded-full shadow-lg transition-all duration-300 group active:scale-[0.96]"
              >
                <a href="tel:+18146202162" className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 -mt-[1px] group-hover:animate-pulse" />
                  Talk to a Specialist Now
                </a>
              </Button>
            </motion.div>

            <motion.div whileTap={{ scale: 0.96 }}>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto border border-white/30 text-white bg-white/10 backdrop-blur-md h-12 px-7 text-sm font-barlow font-bold rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 group active:scale-[0.96]"
              >
                <a
                  href="#appointment"
                  className="flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("appointment")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Calendar className="mr-2 h-4 w-4 -mt-[1px] group-hover:text-amber-300" />
                  Schedule Your Visit
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

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