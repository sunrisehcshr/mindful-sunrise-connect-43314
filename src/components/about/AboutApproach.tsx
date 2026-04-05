"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTag from '../ui/section-tag';
import { CheckCircle2 } from 'lucide-react';
import CurveTransition from '../ui/CurveTransition';

const AboutApproach = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const highlights = [
    "Personalized, evidence-based treatment plans",
    "Safe, trauma-informed care environment",
    "Collaborative, multidisciplinary clinical team",
    "Continuous progress monitoring and adjustments"
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto flex flex-col gap-6 bg-stone-50/20 p-4 md:p-6 rounded-[3rem] border border-stone-100/50 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Text Content - 6 cols */}
            <div className="lg:col-span-6 flex flex-col justify-center p-4 md:p-8 lg:pr-12">
              <div className="mb-6">
                <SectionTag>Clinical Approach</SectionTag>
              </div>
              <h2 className="font-barlow font-normal text-4xl md:text-5xl text-stone-900 tracking-tighter leading-none mb-6">
                Healing tailored to <span className="font-instrument-serif italic text-orange-500 font-normal">your life</span>
              </h2>
              <div className="space-y-4 text-stone-500 font-barlow text-sm md:text-base leading-relaxed mb-8">
                <p>
                  We recognize that mental health is deeply connected to every aspect of your life. That&apos;s why our clinical approach moves beyond simple symptom management. We look at the complete picture—your history, environment, relationships, and physical health.
                </p>
                <p>
                  By combining psychotherapy with responsible psychiatric medication management when necessary, we provide a robust, dual-pronged approach to mental wellness. Our goal is to empower you with the tools, insights, and resilience needed to thrive independently.
                </p>
              </div>
              
              <div className="space-y-4 bg-stone-50 rounded-3xl p-6 border border-stone-100">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="font-barlow font-bold text-stone-700 text-sm group-hover:text-stone-900 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Content - 6 cols */}
            <div className="lg:col-span-6">
              <div className="relative h-[400px] lg:h-full w-full rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.02)] border border-stone-200/60 group">
                <Image 
                  src="/images/family-counseling-havertown.webp" 
                  alt="Clinical therapy session environment" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-700" />
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Curved Transition into the next section (FullTeamSection which is stone-50) */}
      <CurveTransition fillColor="#fafaf9" inverted className="z-20" targetRef={sectionRef as any} />
    </section>
  );
};

export default AboutApproach;
