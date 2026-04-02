"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import UiloraFrostedGlass from '../ui/uilora-frosted-glass';

const AboutCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto bg-stone-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center shadow-2xl shadow-stone-900/20"
        >
          {/* WebGL Fluid Background */}
          <div className="absolute inset-0 z-0 opacity-40">
            <UiloraFrostedGlass 
              baseColor="#1c1917" // stone-900
              accentColor="#f97316" // orange-500
              speed={0.15}
            />
          </div>
          
          {/* Subtle Ambient Glow overlays to ensure text readability */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-stone-900/40 blur-[50px] pointer-events-none z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-900/40 blur-[50px] pointer-events-none z-0" />
          
          <div className="relative z-10 flex flex-col items-center">
            <span className="inline-block font-barlow font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-orange-400 mb-6 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20 backdrop-blur-sm">
              Take the first step
            </span>
            
            <h2 className="font-barlow font-normal text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-[1.1] mb-6 max-w-3xl drop-shadow-lg">
              Your journey to wellness <br className="hidden md:block" />
              <span className="font-instrument-serif italic text-orange-400 font-normal">begins here</span>
            </h2>
            
            <p className="text-stone-300 font-barlow text-lg max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
              Our compassionate team is ready to support you. Schedule an appointment today and discover a sanctuary for healing and growth in Darby, PA.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
              <Link href="/#appointment" className="w-full sm:w-auto">
                <button className="bg-orange-500 hover:bg-orange-400 text-stone-900 font-barlow font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto shadow-lg shadow-orange-500/20">
                  <Calendar className="w-5 h-5" />
                  Book an Appointment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <a href="tel:+18146202162" className="w-full sm:w-auto">
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-barlow font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center w-full sm:w-auto backdrop-blur-md">
                  Call (814) 620-2162
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
