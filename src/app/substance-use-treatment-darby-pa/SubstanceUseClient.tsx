"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, Phone, ChevronRight,
  MapPin, Shield, Activity, RefreshCcw, HandHeart,
  ChevronDown
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import AppointmentSection from '@/components/Appointment/AppointmentSection';
import SectionTag from '@/components/ui/section-tag';
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is a Dual Diagnosis?",
    answer: "A dual diagnosis (or co-occurring disorder) occurs when a person has both a substance use disorder and a mental health condition (like Depression, Anxiety, or PTSD) simultaneously. Effective treatment must address both conditions at the same time, as they often fuel each other."
  },
  {
    question: "Do I need residential rehab or can I do outpatient therapy?",
    answer: "It depends on the severity of the addiction and your physical health. Outpatient therapy is highly effective for many individuals, allowing them to maintain work and family life while receiving treatment. However, if medical detox is required, we will help coordinate a referral to an inpatient facility first."
  },
  {
    question: "Can psychiatric medication help with substance use?",
    answer: "Yes. Medication-Assisted Treatment (MAT) can be a crucial component of recovery for certain substance use disorders (like alcohol or opioid use). Additionally, properly medicating underlying psychiatric conditions (like severe anxiety or ADHD) often drastically reduces the urge to self-medicate with drugs or alcohol."
  },
  {
    question: "What happens if I relapse?",
    answer: "We view relapse as a symptom of a chronic condition, not a moral failure. If a relapse occurs, we do not judge or shame you. Instead, we use it as an opportunity to understand the trigger, adjust your treatment plan, and strengthen your coping skills to prevent future occurrences."
  }
];

export default function SubstanceUseClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-stone-950">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918057/cropped-view-of-psychotherapist-writing-on-clipboa-2026-03-11-19-39-36-utc_j17vdo.jpg" 
              alt="Substance Use Treatment in Darby PA" 
              fill 
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-950/90 via-stone-950/70 to-stone-50" />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <SectionTag className="bg-orange-500/10 text-orange-400 border-orange-500/20 mb-6 backdrop-blur-md">
                Conditions We Treat
              </SectionTag>
              <h1 className="font-barlow font-normal text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-md">
                Substance Use Treatment <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal">in Darby, PA</span>
              </h1>
              <p className="text-stone-300 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                Addiction is a medical condition, not a moral failing. Our psychiatric team provides compassionate, evidence-based outpatient care to help you break the cycle of dependency and reclaim your life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#appointment">
                  <button className="bg-orange-500 hover:bg-orange-400 text-stone-900 font-barlow font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-orange-500/20">
                    <Calendar className="w-5 h-5" />
                    Book an Evaluation
                  </button>
                </Link>
                <a href="tel:+18146202162">
                  <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-barlow font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center w-full sm:w-auto backdrop-blur-sm">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (814) 620-2162
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* MAIN CONTENT LAYOUT */}
        <section className="py-12 md:py-20 relative z-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* TABLE OF CONTENTS (Sidebar) */}
              <div className="lg:w-1/4">
                <div className="sticky top-32 bg-white rounded-3xl p-6 border border-stone-100 shadow-sm">
                  <h3 className="font-barlow font-bold text-stone-900 text-lg mb-4">Table of Contents</h3>
                  <nav className="space-y-3 font-barlow text-stone-600 text-sm">
                    <a href="#understanding-addiction" onClick={(e) => scrollToSection(e, 'understanding-addiction')} className="block hover:text-orange-500 transition-colors">Understanding Addiction</a>
                    <a href="#dual-diagnosis" onClick={(e) => scrollToSection(e, 'dual-diagnosis')} className="block hover:text-orange-500 transition-colors">Dual Diagnosis Treatment</a>
                    <a href="#treatment-approach" onClick={(e) => scrollToSection(e, 'treatment-approach')} className="block hover:text-orange-500 transition-colors">Our Approach</a>
                    <a href="#local-treatment" onClick={(e) => scrollToSection(e, 'local-treatment')} className="block hover:text-orange-500 transition-colors">Treatment in Darby, PA</a>
                    <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="block hover:text-orange-500 transition-colors">Frequently Asked Questions</a>
                  </nav>

                  <div className="mt-8 pt-6 border-t border-stone-100">
                    <h4 className="font-barlow font-bold text-stone-900 text-sm mb-3">Related Services</h4>
                    <div className="space-y-2">
                      <Link href="/psychiatric-evaluations-darby-pa" className="flex items-center text-sm text-stone-500 hover:text-orange-500 transition-colors group">
                        <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" /> Psychiatric Evaluations
                      </Link>
                      <Link href="/medication-management-darby-pa" className="flex items-center text-sm text-stone-500 hover:text-orange-500 transition-colors group">
                        <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" /> Medication Management
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* MAIN CONTENT AREA */}
              <div className="lg:w-3/4 space-y-16">
                
                {/* Section 1: Understanding */}
                <div id="understanding-addiction" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">Understanding Substance Use Disorders</h2>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Substance Use Disorders (SUDs) are complex chronic conditions that physically alter brain chemistry, affecting motivation, impulse control, and reward systems. When someone develops an addiction, using the substance is no longer a simple choice—it becomes a biological imperative that overrides logic and self-preservation.
                    </p>
                    <p>
                      Whether struggling with alcohol, prescription medications, opioids, or other substances, the impact on a person's life is devastating. Relationships suffer, careers derail, and physical and mental health rapidly decline. 
                    </p>
                    <p>
                      At Sunrise Human Care Services, we approach addiction with deep empathy. We know that substance use often begins as a desperate attempt to self-medicate untreated emotional pain, trauma, or psychiatric symptoms. Our goal is to address the root cause, not just the behavior.
                    </p>
                  </div>
                </div>

                {/* Section 2: Dual Diagnosis */}
                <div id="dual-diagnosis" className="scroll-mt-32">
                  <div className="bg-orange-50/50 rounded-3xl p-8 border border-orange-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                        <Activity className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900">The Importance of Dual Diagnosis</h2>
                    </div>
                    <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                      <p>
                        A massive percentage of individuals with substance use disorders also suffer from a co-occurring mental health condition, such as Depression, Anxiety, Bipolar Disorder, or PTSD. This is known as a <strong>Dual Diagnosis</strong>.
                      </p>
                      <p>
                        If a treatment program only focuses on getting a patient sober but ignores the underlying severe depression, relapse is almost inevitable. Conversely, you cannot effectively treat depression if the patient is actively abusing alcohol. 
                      </p>
                      <p>
                        <strong>Our integrated approach treats both conditions simultaneously.</strong> Our psychiatric providers evaluate the complete clinical picture, utilizing therapy and safe, non-habit-forming medications to stabilize mental health while supporting substance recovery.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 3: Our Approach */}
                <div id="treatment-approach" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">Our Outpatient Treatment Approach</h2>
                  <p className="font-barlow text-lg text-stone-600 leading-relaxed mb-8">
                    We provide comprehensive outpatient care designed to fit into your life while delivering the clinical support necessary for sustainable sobriety.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                      <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center mb-4">
                        <RefreshCcw className="w-5 h-5 text-stone-700" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Relapse Prevention Therapy</h4>
                      <p className="font-barlow text-sm text-stone-500">Identifying specific emotional and environmental triggers, and developing concrete behavioral strategies to navigate cravings without using.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                      <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center mb-4">
                        <HandHeart className="w-5 h-5 text-stone-700" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Trauma-Informed Care</h4>
                      <p className="font-barlow text-sm text-stone-500">Addressing the deep-seated emotional wounds and past traumas that frequently fuel chronic substance dependency.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                      <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center mb-4">
                        <Activity className="w-5 h-5 text-stone-700" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Psychiatric Medication</h4>
                      <p className="font-barlow text-sm text-stone-500">Careful prescribing of medications to manage intense withdrawal-related anxiety, stabilize mood disorders, and support recovery.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                      <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center mb-4">
                        <Shield className="w-5 h-5 text-stone-700" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Harm Reduction Focus</h4>
                      <p className="font-barlow text-sm text-stone-500">Meeting you where you are in your journey, focusing on reducing the negative consequences of substance use while building toward total recovery.</p>
                    </div>
                  </div>
                </div>

                {/* Section 4: Local SEO & Accessibility */}
                <div id="local-treatment" className="scroll-mt-32 bg-stone-900 text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />
                  
                  <h3 className="font-barlow font-normal text-3xl md:text-4xl tracking-tighter mb-6 relative z-10">
                    Outpatient Addiction Treatment in <span className="font-instrument-serif italic text-orange-400">Darby, PA</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="font-barlow text-stone-300 text-lg leading-relaxed space-y-4">
                      <p>
                        Recovery is possible. At Sunrise Human Care Services, we provide vital psychiatric support, therapy, and dual-diagnosis treatment for individuals battling substance use disorders. Located at 869 Main Street in Darby, we serve the Delaware County community.
                      </p>
                      <div className="flex items-center gap-4 bg-orange-500/20 border border-orange-500/30 p-4 rounded-2xl">
                        <Shield className="w-8 h-8 text-orange-400 flex-shrink-0" />
                        <div>
                          <h4 className="font-barlow font-bold text-white">100% Medicaid Acceptance</h4>
                          <p className="text-sm text-stone-400">We exclusively accept Medicaid to ensure specialized psychiatric addiction care is accessible to everyone.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                      <h4 className="font-barlow font-bold text-xl text-white mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-orange-400" /> Communities We Serve
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {["Darby (19023)", "Yeadon (19008)", "Lansdowne (19003)", "Upper Darby (19026)", "Collingdale (19064)", "Sharon Hill (19073)"].map(city => (
                          <span key={city} className="bg-white/10 text-stone-300 text-sm px-3 py-1.5 rounded-lg border border-white/5">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 5: EEAT Reviewer Block */}
                <div className="bg-white border border-stone-200 p-8 rounded-3xl shadow-sm flex flex-col sm:flex-row gap-6 items-start sm:items-center relative z-20">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-stone-50">
                    <Image 
                      src="/images/holly.jpg" 
                      alt="Holli H, Licensed Mental Health Professional" 
                      fill 
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-wider uppercase text-stone-400 mb-1 block">Clinically Reviewed By</span>
                    <h3 className="font-barlow font-bold text-2xl text-stone-900">Holli H, Licensed Mental Health Professional</h3>
                    <p className="font-barlow text-stone-500 mt-2 text-sm leading-relaxed">
                      Holli H is a dedicated mental health professional at Sunrise Human Care Services, specializing in dual diagnosis evaluation, substance use disorders, and trauma-informed addiction recovery.
                    </p>
                    <p className="font-barlow text-stone-400 text-xs mt-3">
                      Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </div>

                {/* Section 6: FAQs */}
                <div id="faq" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div 
                        key={index} 
                        className={cn(
                          "border rounded-2xl overflow-hidden transition-all duration-300",
                          openFaq === index ? "border-orange-500/50 bg-orange-50/30" : "border-stone-200 bg-white hover:border-orange-200"
                        )}
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === index ? null : index)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <span className="font-barlow font-bold text-lg text-stone-900">{faq.question}</span>
                          <ChevronDown className={cn("w-5 h-5 text-stone-400 transition-transform duration-300", openFaq === index && "transform rotate-180 text-orange-500")} />
                        </button>
                        <div 
                          className={cn(
                            "overflow-hidden transition-all duration-300",
                            openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          )}
                        >
                          <p className="p-6 pt-0 font-barlow text-stone-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <AppointmentSection />
      </main>
      
      <Footer />
    </div>
  );
}
