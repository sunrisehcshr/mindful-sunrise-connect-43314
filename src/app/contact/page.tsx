"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import SEOHead from '@/components/SEOHead';
import { Mail, Phone, MapPin, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import AppointmentForm from '@/components/Appointment/AppointmentForm';
import SectionTag from '@/components/ui/section-tag';
import CurveTransition from '@/components/ui/CurveTransition';

export default function ContactPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          {/* Hero Section - Matching Design System */}
          <section className="relative pt-48 pb-20 md:pt-60 md:pb-32 bg-stone-900">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
               <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -ml-48 -mb-48" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-30">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mb-6 flex justify-center"
                >
                  <SectionTag className="border-white/20 text-white bg-white/10">Get In Touch</SectionTag>
                </motion.div>
                
                <h1 className="font-barlow font-bold text-4xl md:text-6xl text-white tracking-tighter leading-none mb-6">
                  We&apos;re here to <br className="hidden sm:block" />
                  <span className="font-instrument-serif italic text-orange-500 font-normal">listen and help.</span>
                </h1>
                
                <p className="text-stone-300 text-lg md:text-xl font-barlow max-w-2xl mx-auto leading-relaxed">
                  Start your journey toward mental wellness today. Our compassionate Darby team is ready to provide the professional support you deserve.
                </p>
              </motion.div>
            </div>
            
            <CurveTransition fillColor="#ffffff" inverted className="z-20" />
          </section>

          {/* Contact Content - Bento Style */}
          <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-7xl mx-auto">
                
                {/* Contact Form - Large Bento Card */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-7 flex"
                >
                  <div className="w-full bg-white rounded-[2.5rem] p-6 md:p-10 border border-stone-100 shadow-[0_30px_60px_rgba(0,0,0,0.03)] relative overflow-hidden">
                    <div className="relative z-10">
                      <h2 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-2 tracking-tight">Send us a message</h2>
                      <p className="text-stone-500 font-barlow mb-8">Tell us how we can support you. Responses within 24 hours.</p>
                      <AppointmentForm />
                    </div>
                  </div>
                </motion.div>

                {/* Contact Info - Stacked Bento Cards */}
                <div className="lg:col-span-5 grid grid-cols-1 gap-6">
                  {/* Info Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-stone-50 rounded-[2.5rem] p-8 md:p-10 border border-stone-100 flex flex-col justify-between"
                  >
                    <div className="space-y-8">
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center shrink-0 shadow-sm">
                          <MapPin className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Location</p>
                          <p className="text-stone-900 font-barlow font-medium text-lg leading-snug">
                            869 Main Street,<br />Darby, PA 19023
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center shrink-0 shadow-sm">
                          <Phone className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Phone</p>
                          <a href="tel:+18146202162" className="text-stone-900 font-barlow font-medium text-lg hover:text-orange-600 transition-colors">
                            (814) 620-2162
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center shrink-0 shadow-sm">
                          <Mail className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Email</p>
                          <a href="mailto:info@sunrisehumancare.com" className="text-stone-900 font-barlow font-medium text-lg hover:text-orange-600 transition-colors">
                            info@sunrisehumancare.com
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-stone-200/60">
                       <div className="flex items-center gap-3 text-orange-600 mb-2">
                         <Clock className="w-4 h-4" />
                         <span className="text-[10px] font-bold uppercase tracking-widest">Office Hours</span>
                       </div>
                       <p className="text-stone-500 font-barlow text-sm">Mon - Fri: 9am - 5pm · Sat & Sun: Closed</p>
                    </div>
                  </motion.div>

                  {/* Map Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="rounded-[2.5rem] overflow-hidden bg-stone-100 border border-stone-100 h-[280px] shadow-sm relative group"
                  >
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.7513337039014!2d-75.2612344!3d39.9184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c19149463283%3A0xc62263152504859a!2s869%20Main%20St%2C%20Darby%2C%20PA%2019023!5e0!3m2!1sen!2sus!4v1709224400000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
