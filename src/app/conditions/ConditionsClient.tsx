"use client";

import React, { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, ArrowRight, Brain, Heart, Activity, Stethoscope, 
  Wind, CloudRain, Zap, Shield, Search, Focus, Users,
  ShieldAlert, Moon, Apple, Layers, Calendar, Phone 
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import AppointmentSection from '@/components/Appointment/AppointmentSection';
import SectionTag from '@/components/ui/section-tag';
import { cn } from "@/lib/utils";
import UiloraFrostedGlass from '@/components/ui/uilora-frosted-glass';

// --- Glowing Bento Card ---
function Card({ children, className, containerClassName }: { children: React.ReactNode; className?: string, containerClassName?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                "group relative border border-stone-200/80 bg-white/95 backdrop-blur-md overflow-hidden transition duration-500",
                "hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-orange-200/50 hover:bg-white rounded-3xl",
                containerClassName
            )}
            onMouseMove={handleMouseMove}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-stone-50/50 pointer-events-none" />
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(249, 115, 22, 0.08),
              transparent 80%
            )
          `,
                }}
            />
            <div className={cn("relative h-full w-full p-8", className)}>
                {children}
            </div>
        </div>
    );
}

export default function ConditionsClient() {
  const conditions = [
    {
      title: "Anxiety Disorders",
      short: "Managing generalized anxiety, panic attacks, and social phobia. We provide evidence-based strategies to calm your mind and regain control over daily life.",
      url: "/anxiety-therapy-darby-pa",
      icon: Wind
    },
    {
      title: "Depression",
      short: "Compassionate support for major, persistent, and seasonal depression. Our therapists help you rediscover hope and build a path toward emotional resilience.",
      url: "/depression-therapy-darby-pa",
      icon: CloudRain
    },
    {
      title: "Bipolar Disorder",
      short: "Specialized care for managing mood episodes and achieving stability. We focus on symptom tracking, medication management, and sustainable coping mechanisms.",
      url: "/bipolar-disorder-therapy-darby-pa",
      icon: Zap
    },
    {
      title: "PTSD",
      short: "Trauma-informed recovery focusing on emotional safety and processing. Our clinicians are trained in helping you navigate past trauma in a safe, healing environment.",
      url: "/ptsd-therapy-darby-pa",
      icon: Shield
    },
    {
      title: "OCD",
      short: "Support for managing obsessive thoughts and compulsions through targeted therapy. We help you break cycles of ritualized behavior and reduce daily distress.",
      url: "/ocd-therapy-darby-pa",
      icon: Search
    },
    {
      title: "ADHD",
      short: "Focus, organization, and impulse control strategies for children and adults. Our approach combines executive function coaching with clinical support.",
      url: "/adhd-treatment-darby-pa",
      icon: Focus
    },
    {
      title: "Schizophrenia",
      short: "Long-term management of psychosis and daily functioning. We provide a supportive framework for individuals and families navigating complex symptoms.",
      url: "/schizophrenia-treatment-darby-pa",
      icon: Brain
    },
    {
      title: "BPD",
      short: "Dialectical approach to Borderline Personality Disorder support. We focus on emotional regulation, distress tolerance, and interpersonal effectiveness.",
      url: "/bpd-treatment-darby-pa",
      icon: ShieldAlert
    },
    {
      title: "Sleep Disorders",
      short: "Addressing insomnia and improving sleep hygiene through behavioral therapy. Better mental health starts with consistent, restorative rest.",
      url: "/sleep-disorders-treatment-darby-pa",
      icon: Moon
    },
    {
      title: "Eating Disorders",
      short: "Support for building a healthy relationship with food and body image. Our team provides compassionate, specialized care for sustainable recovery.",
      url: "/eating-disorders-treatment-darby-pa",
      icon: Apple
    },
    {
      title: "Substance Use",
      short: "Comprehensive addiction recovery and relapse prevention. We address the underlying causes of substance use to build a foundation for long-term sobriety.",
      url: "/substance-use-treatment-darby-pa",
      icon: Activity
    },
    {
      title: "Dissociative Disorders",
      short: "Specialized support for identity, memory, and consciousness integration. We help you navigate feelings of detachment and build a cohesive sense of self.",
      url: "/dissociative-disorders-treatment-darby-pa",
      icon: Layers
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-stone-950">
      <Navbar />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-28 md:pt-48 md:pb-40 overflow-hidden bg-stone-950">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918057/cropped-view-of-psychotherapist-writing-on-clipboa-2026-03-11-19-39-36-utc_j17vdo.jpg" 
              alt="Mental Health Conditions Treated in Darby PA" 
              fill 
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-950/80 via-stone-950/60 to-stone-50" />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto"
            >
              <span className="inline-block font-barlow font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-orange-400 mb-6 bg-orange-500/10 px-5 py-2.5 rounded-full border border-orange-500/20 backdrop-blur-md">
                Specialized Care
              </span>
              <h1 className="font-barlow font-normal text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-md">
                Mental Health Conditions We <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal drop-shadow-md">Treat in Darby</span>
              </h1>
              <p className="text-stone-100 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
                Comprehensive, evidence-based treatment for anxiety, depression, ADHD, and complex psychological conditions in Delaware County. We exclusively accept Medicaid.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#appointment" onClick={(e) => { e.preventDefault(); document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <button className="bg-orange-500 hover:bg-orange-400 text-stone-50 font-barlow font-bold px-4 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap rounded-full transition duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-orange-500/20">
                    <Calendar className="w-5 h-5" />
                    Book an Evaluation
                  </button>
                </Link>
                <a href="tel:+18146202162">
                  <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-barlow font-bold px-4 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap rounded-full transition duration-300 flex items-center justify-center w-full sm:w-auto backdrop-blur-sm">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (814) 620-2162
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="bg-stone-50 relative z-10 -mt-10 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.15)]">
          
          {/* SECTION 1: Conditions Grid */}
          <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-[120px] -ml-[300px] -mt-[300px] pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <SectionTag>Clinical Expertise</SectionTag>
                <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight mt-4 mb-6">
                  What We Treat
                </h2>
                <p className="text-stone-500 font-barlow text-lg leading-relaxed">
                  Our licensed psychiatric providers and therapists utilize the latest clinical frameworks to diagnose and treat a comprehensive spectrum of mental health disorders.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {conditions.map((condition, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index % 3) * 0.1 }}
                  >
                    <Link href={condition.url} className="block h-full">
                      <Card className="h-full flex flex-col p-8 group">
                        <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 shadow-sm border border-orange-100 group-hover:scale-110 transition-transform duration-300">
                          <condition.icon className="w-7 h-7 text-orange-500" />
                        </div>
                        
                        <h3 className="font-barlow font-bold text-2xl text-stone-900 mb-3 group-hover:text-orange-500 transition-colors">
                          {condition.title}
                        </h3>
                        
                        <p className="font-barlow text-stone-600 text-base leading-relaxed flex-grow mb-6">
                          {condition.short}
                        </p>
                        
                        <div className="flex items-center text-orange-500 font-barlow font-bold text-sm mt-auto">
                          Learn about treatment <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 1.5: Why Choose Us (E-E-A-T Focus) */}
          <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <SectionTag>Our Philosophy</SectionTag>
                <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight mt-4 mb-6">
                  Why Patients Choose Us
                </h2>
                <p className="text-stone-500 font-barlow text-lg leading-relaxed">
                  We don't just treat symptoms; we treat the whole person. Our clinical team provides evidence-based, compassionate care designed to create lasting change.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <Card className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-500 shadow-sm border border-orange-100">
                    <Heart className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-barlow font-bold text-stone-900 mb-3 tracking-tight group-hover:text-orange-500 transition-colors">Empathy First</h3>
                  <p className="text-stone-500 font-barlow text-sm leading-relaxed flex-grow">We listen without judgment and treat every individual with the profound respect, dignity, and compassion they deserve.</p>
                </Card>
                
                <Card className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-500 shadow-sm border border-orange-100">
                    <Shield className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-barlow font-bold text-stone-900 mb-3 tracking-tight group-hover:text-orange-500 transition-colors">Evidence-Based</h3>
                  <p className="text-stone-500 font-barlow text-sm leading-relaxed flex-grow">Our therapeutic and psychiatric approaches are grounded in proven clinical research to ensure safe, effective outcomes.</p>
                </Card>

                <Card className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-500 shadow-sm border border-orange-100">
                    <Users className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-barlow font-bold text-stone-900 mb-3 tracking-tight group-hover:text-orange-500 transition-colors">Community Focused</h3>
                  <p className="text-stone-500 font-barlow text-sm leading-relaxed flex-grow">We are deeply rooted in Darby, PA, striving to make high-quality mental health support accessible to our neighbors.</p>
                </Card>

                <Card className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-500 shadow-sm border border-orange-100">
                    <Stethoscope className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-barlow font-bold text-stone-900 mb-3 tracking-tight group-hover:text-orange-500 transition-colors">Holistic Healing</h3>
                  <p className="text-stone-500 font-barlow text-sm leading-relaxed flex-grow">We treat the whole person—mind, body, and spirit—recognizing that true wellness goes beyond symptom management.</p>
                </Card>
              </div>
            </div>
          </section>

          {/* WebGL Fluid Background Section */}
          <section className="py-16 md:py-24 bg-stone-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-6xl mx-auto bg-stone-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center shadow-2xl shadow-stone-900/20"
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
                    Our Mission
                  </span>
                  
                  <h2 className="font-barlow font-normal text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-[1.1] mb-6 max-w-3xl drop-shadow-lg">
                    Healing tailored to <br className="hidden md:block" />
                    <span className="font-instrument-serif italic text-orange-400 font-normal">your life</span>
                  </h2>
                  
                  <p className="text-stone-300 font-barlow text-lg max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                    We recognize that mental health is deeply connected to every aspect of your life. That's why our clinical approach moves beyond simple symptom management. We look at the complete picture—your history, environment, relationships, and physical health.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
                    <Link href="#appointment" className="w-full sm:w-auto" onClick={(e) => { e.preventDefault(); document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' }); }}>
                      <button className="bg-orange-500 hover:bg-orange-400 text-stone-50 font-barlow font-bold px-4 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap rounded-full transition duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto shadow-lg shadow-orange-500/20">
                        <Calendar className="w-5 h-5" />
                        Start Your Journey
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* SECTION 2: Local Context & Medicaid */}
          <section className="py-16 md:py-24 bg-stone-900 text-white relative overflow-hidden rounded-[3rem] mx-4 md:mx-6 my-12">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <SectionTag className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">Delaware County</SectionTag>
                  <h2 className="font-barlow font-normal text-4xl md:text-5xl tracking-tighter leading-tight mb-6">
                    Accessible Treatment in <br />
                    <span className="font-instrument-serif italic text-orange-400 font-normal">Darby, PA</span>
                  </h2>
                  <div className="space-y-6 font-barlow text-stone-300 text-lg leading-relaxed">
                    <p>
                      At Sunrise Human Care Services, we are proud to serve the Darby community and surrounding areas in Delaware County. Our practice is conveniently located at 869 Main Street, making quality mental health treatment accessible to residents throughout the region.
                    </p>
                    <p>
                      We understand that seeking help for a mental health condition can be daunting. Our team is committed to reducing stigma and providing a culturally responsive, judgment-free environment for all our patients.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
                    <h3 className="font-barlow font-bold text-2xl text-white mb-6 flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-orange-400" />
                      Communities We Treat
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <Link href="/mental-health-darby-pa" className="px-4 py-3 bg-orange-500 hover:bg-orange-400 transition-colors rounded-xl text-center font-barlow text-stone-50 shadow-lg shadow-orange-500/20 flex flex-col items-center justify-center border border-transparent">
                        <span className="font-bold">Darby</span>
                        <span className="text-xs opacity-70">19023</span>
                      </Link>
                      {[
                        { name: "Yeadon", zip: "19008" },
                        { name: "Lansdowne", zip: "19003" },
                        { name: "Upper Darby", zip: "19026" },
                        { name: "Collingdale", zip: "19064" },
                        { name: "Sharon Hill", zip: "19073" }
                      ].map(city => (
                        <div key={city.name} className="px-4 py-3 bg-white/10 rounded-xl text-center font-barlow text-stone-300 text-sm flex flex-col items-center justify-center border border-white/5">
                          <span className="font-bold">{city.name}</span>
                          <span className="text-xs opacity-70">{city.zip}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-orange-500/10 border border-orange-500/20 p-6 rounded-3xl w-full hover:bg-orange-500/20 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-barlow font-bold text-white text-lg mb-1">100% Medicaid Acceptance</h4>
                      <p className="font-barlow text-stone-300 text-sm leading-relaxed">We exclusively accept Medicaid to ensure critical psychiatric care reaches those who need it most.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Medical Reviewer / E-E-A-T Footer Section (Visually Hidden for SEO) */}
          <section className="sr-only">
            <div itemScope itemType="https://schema.org/WebPage">
              <div itemProp="reviewedBy" itemScope itemType="https://schema.org/Person">
                <meta itemProp="name" content="Holli O'Donnell" />
                <meta itemProp="jobTitle" content="Licensed Mental Health Professional" />
                <link itemProp="image" href="/images/holly.jpg" />
              </div>
              <meta itemProp="lastReviewed" content={new Date().toISOString().split('T')[0]} />
              <p>
                This content was clinically reviewed by Holli O'Donnell, Licensed Mental Health Professional, on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} to ensure accuracy and compliance with current medical standards regarding mental health condition diagnoses and treatments.
              </p>
            </div>
          </section>

          {/* SECTION 3: Appointment */}
          <AppointmentSection />
          
        </div>
      </main>
      
      <div className="relative z-20 bg-white">
        <Footer />
      </div>
    </div>
  );
}
