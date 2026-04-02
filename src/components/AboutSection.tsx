
"use client";

import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTag from './ui/section-tag';
import { HeartHandshake } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden bg-stone-50">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <SectionTag>Our Story</SectionTag>
          
          <h1 className="font-barlow font-normal text-4xl md:text-6xl text-stone-900 tracking-tighter leading-none mb-6">
            Compassionate care for {' '}
            <span className="font-instrument-serif italic text-orange-500 font-normal">every journey</span>
          </h1>
          
          <p className="text-stone-500 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Learn about our commitment to providing accessible mental health care in Darby, PA and surrounding communities.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="max-w-6xl mx-auto flex flex-col gap-6 bg-stone-50/20 p-4 md:p-6 rounded-[3rem] border border-stone-100/50 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Image Card - 5 columns */}
            <div className="lg:col-span-5 h-[400px] lg:h-auto">
              <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.02)] border border-stone-200/60 group">
                <Image 
                  src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918385/doctor-give-advice-about-medicine-or-vitamin-to-el-2026-01-08-05-55-04-utc_fvofy1.jpg" 
                  alt="Mental health care for older adults at Sunrise Human Care Services in Darby" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/0 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 shadow-lg inline-block">
                     <p className="text-stone-900 font-bold font-barlow text-sm">Founded in 2018</p>
                     <p className="text-orange-500 text-[10px] uppercase tracking-widest font-bold mt-0.5">Darby, PA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Card - 7 columns */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-stone-200/60 shadow-[0_30px_60px_rgba(0,0,0,0.02)] h-full relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[100px] -mr-32 -mt-32 pointer-events-none" />
                
                <div className="relative z-10 space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-2 shadow-sm border border-orange-100">
                    <HeartHandshake className="w-6 h-6 text-orange-500" />
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-barlow font-bold text-stone-900 tracking-tight leading-tight">
                    A Foundation of Trust & Community Care
                  </h2>
                  
                  <div className="space-y-4 text-stone-500 font-barlow text-sm md:text-base leading-relaxed">
                    <p>
                      Founded by Michael Thevar, Sunrise Human Care Services has grown into a leading provider of mental health care in Darby. With over 30 years of dedication to mental health, we&apos;ve built a foundation of experience, trust, and community care to help individuals navigate their challenges and realize their full potential.
                    </p>
                    <p>
                      Our team of experienced therapists and psychiatric providers brings diverse backgrounds and specialties to Darby, PA, united by a shared commitment to compassionate, evidence-based care. We believe in treating the whole person, not just symptoms, and in creating individualized treatment plans that respect each client&apos;s unique needs and goals.
                    </p>
                    <p className="font-medium text-stone-700">
                      Whether you&apos;re seeking support for anxiety, depression, ADHD, or working toward personal growth, our mental health care in Darby is designed to walk alongside you on your journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats / Secondary Bento Row */}
            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stat 1 */}
              <div className="bg-stone-900 rounded-[2rem] p-8 relative overflow-hidden group border border-stone-800">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px] -mr-16 -mt-16 group-hover:bg-orange-500/20 transition-all duration-700" />
                <div className="relative z-10">
                  <h3 className="text-4xl md:text-5xl font-barlow font-normal text-white mb-2 tracking-tighter">
                    30<span className="font-instrument-serif italic text-orange-500">+</span>
                  </h3>
                  <p className="text-stone-400 font-barlow text-sm font-bold uppercase tracking-widest">Years Experience</p>
                  <p className="text-stone-500 font-barlow text-sm mt-3 leading-relaxed">Decades of dedicated clinical excellence and compassionate care.</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white rounded-[2rem] p-8 relative overflow-hidden group border border-stone-200/60 shadow-[0_30px_60px_rgba(0,0,0,0.02)]">
                <div className="relative z-10">
                  <h3 className="text-4xl md:text-5xl font-barlow font-normal text-stone-900 mb-2 tracking-tighter">
                    100<span className="font-instrument-serif italic text-orange-500">%</span>
                  </h3>
                  <p className="text-stone-900 font-barlow text-sm font-bold uppercase tracking-widest">Personalized</p>
                  <p className="text-stone-500 font-barlow text-sm mt-3 leading-relaxed">Treatment plans specifically tailored to your unique journey.</p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="bg-orange-500 rounded-[2rem] p-8 relative overflow-hidden group border border-orange-400">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[50px] -mr-16 -mt-16" />
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <p className="text-orange-950 font-barlow text-sm font-bold uppercase tracking-widest mb-4">Our Mission</p>
                  <p className="text-white font-barlow text-lg md:text-xl leading-tight font-medium">
                    &quot;To empower our community through accessible, evidence-based, and deeply compassionate mental health support.&quot;
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
