
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionTag from '../ui/section-tag';
import AppointmentForm from './AppointmentForm';
import ContactInfo from './ContactInfo';

const itemVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const AppointmentSection = () => {
  return (
    <section id="appointment" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-6" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionTag>Book Now</SectionTag>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="font-barlow font-normal text-4xl md:text-5xl text-balance text-stone-900 tracking-tighter leading-none mb-3">
            Start your recovery within {' '}
            <span className="font-instrument-serif italic text-orange-500 font-normal">24 hours.</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-stone-500 font-barlow text-lg max-w-2xl mx-auto">
            You shouldn&apos;t have to wait months for professional support. Our Darby clinical team is ready to respond to your request by the next business day. 100% confidential. Medicaid accepted.
          </motion.p>
        </motion.div>

        {/* Unified Bento Grid - Matching Why Choose Us layout */}
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="relative z-10 mx-auto max-w-6xl flex flex-col gap-4 bg-white p-3 md:p-4 rounded-[3rem] border border-stone-100/50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            
            {/* Main Content - 7 columns */}
            <motion.div variants={itemVariants} className="lg:col-span-7 flex">
              {/* Main Form Card */}
              <div className="w-full bg-white rounded-[2.5rem] p-5 md:p-8 border border-stone-200/60 shadow-[0_30px_60px_rgba(0,0,0,0.02)] relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[100px] -mr-32 -mt-32 pointer-events-none" />
                <div className="relative z-10 w-full h-full">
                  <AppointmentForm />
                </div>
              </div>
            </motion.div>
            
            {/* Sidebar Info - 5 columns */}
            <motion.div variants={itemVariants} className="lg:col-span-5 flex">
              {/* Contact Info Card */}
              <div className="w-full bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-[2.5rem] border border-stone-200/60 shadow-sm group flex flex-col h-full">
                <ContactInfo />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentSection;
