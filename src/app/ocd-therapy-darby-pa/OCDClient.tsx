"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, Phone, ChevronRight,
  MapPin, Shield, Brain, Sparkles, RefreshCw,
  ChevronDown
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import AppointmentSection from '@/components/Appointment/AppointmentSection';
import SectionTag from '@/components/ui/section-tag';
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How is OCD different from being a perfectionist or liking things organized?",
    answer: "While perfectionism involves high standards, OCD involves unwanted, intrusive thoughts (obsessions) that cause significant distress. Compulsive behaviors are performed not out of preference, but out of a desperate need to reduce anxiety or prevent a feared outcome. OCD symptoms typically interfere substantially with daily functioning."
  },
  {
    question: "Is Exposure and Response Prevention (ERP) therapy difficult?",
    answer: "ERP is challenging because it involves intentionally facing feared situations and tolerating anxiety without performing compulsions. However, it is done gradually. We start with less difficult situations and progress at your pace. Most clients find that the temporary discomfort of ERP is well worth the long-term freedom it provides."
  },
  {
    question: "How long does OCD treatment typically take?",
    answer: "The duration of treatment varies depending on OCD severity and individual factors. Many clients see significant improvement within 12 to 20 weeks of regular ERP sessions and medication management. We provide a personalized timeline after your comprehensive initial psychiatric assessment."
  },
  {
    question: "Can medication help with OCD?",
    answer: "Yes, absolutely. Certain medications, primarily specific SSRIs (Selective Serotonin Reuptake Inhibitors) given at higher doses than typically used for depression, are highly effective for OCD. Our psychiatric providers specialize in finding the right medication balance to complement your therapy."
  },
  {
    question: "Can OCD be cured completely?",
    answer: "OCD is considered a chronic neurobiological condition, meaning there is no permanent 'cure'. However, with proper evidence-based treatment (ERP and medication), many people achieve significant symptom reduction and even full remission. The goal is to help you manage symptoms so effectively that OCD no longer dictates your life choices."
  }
];

export default function OCDClient() {
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
              alt="OCD Treatment in Darby PA" 
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
                OCD Treatment <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal">in Darby, PA</span>
              </h1>
              <p className="text-stone-300 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                Trapped in a cycle of intrusive thoughts and exhausting compulsions? Our specialized psychiatric providers offer the gold-standard ERP therapy and medication management to help you break free.
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

        {/* MAIN CONTENT LAYOUT */}
        <section className="py-12 md:py-20 relative z-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* TABLE OF CONTENTS (Sidebar) */}
              <div className="lg:w-1/4">
                <div className="sticky top-32 bg-white rounded-3xl p-6 border border-stone-100 shadow-sm">
                  <h3 className="font-barlow font-bold text-stone-900 text-lg mb-4">Table of Contents</h3>
                  <nav className="space-y-3 font-barlow text-stone-600 text-sm">
                    <a href="#what-is-ocd" onClick={(e) => scrollToSection(e, 'what-is-ocd')} className="block hover:text-orange-500 transition-colors">What is OCD?</a>
                    <a href="#symptoms" onClick={(e) => scrollToSection(e, 'symptoms')} className="block hover:text-orange-500 transition-colors">Obsessions vs. Compulsions</a>
                    <a href="#common-types" onClick={(e) => scrollToSection(e, 'common-types')} className="block hover:text-orange-500 transition-colors">Common Subtypes of OCD</a>
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
                
                {/* Section 1: What is OCD */}
                <div id="what-is-ocd" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">What is Obsessive-Compulsive Disorder (OCD)?</h2>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Obsessive-Compulsive Disorder (OCD) is a chronic, often debilitating mental health condition characterized by uncontrollable, reoccurring thoughts (obsessions) and behaviors (compulsions) that a person feels the urge to repeat over and over. 
                    </p>
                    <p>
                      Unlike mainstream portrayals of OCD as a quirky desire for neatness, clinical OCD is deeply distressing. It hijacks the brain's threat-detection system, causing individuals to experience intense anxiety over highly unlikely or irrational fears. Because of this severe anxiety, individuals perform compulsions to temporarily relieve the distress, trapping them in a vicious cycle.
                    </p>
                    <p>
                      According to the NIMH, OCD affects about 1.2% of U.S. adults. Due to shame regarding the nature of intrusive thoughts, many suffer in silence for years before seeking help. At Sunrise Human Care Services, we provide a highly clinical, stigma-free environment to correctly diagnose and treat OCD using evidence-based methods.
                    </p>
                  </div>
                </div>

                {/* Section 2: Symptoms Breakdown */}
                <div id="symptoms" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">Obsessions vs. Compulsions</h2>
                  <p className="font-barlow text-lg text-stone-600 leading-relaxed mb-8">
                    To understand OCD, it is crucial to separate the two main components of the disorder. While some individuals experience only obsessions or only compulsions, the vast majority experience both.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                        <Brain className="w-6 h-6 text-orange-500" />
                      </div>
                      <h3 className="font-barlow font-bold text-stone-900 text-2xl mb-4">Obsessions (The Thoughts)</h3>
                      <p className="font-barlow text-stone-600 mb-4">Repeated thoughts, urges, or mental images that cause severe anxiety. Common obsessions include:</p>
                      <ul className="list-disc pl-5 space-y-2 font-barlow text-sm text-stone-500">
                        <li>Fear of germs, dirt, or contamination.</li>
                        <li>Unwanted, taboo thoughts involving sex, religion, or harm.</li>
                        <li>Aggressive thoughts toward others or oneself.</li>
                        <li>Having things symmetrical or in a perfect order.</li>
                      </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                        <RefreshCw className="w-6 h-6 text-orange-500" />
                      </div>
                      <h3 className="font-barlow font-bold text-stone-900 text-2xl mb-4">Compulsions (The Behaviors)</h3>
                      <p className="font-barlow text-stone-600 mb-4">Repetitive behaviors a person feels driven to perform in response to an obsessive thought. Common compulsions include:</p>
                      <ul className="list-disc pl-5 space-y-2 font-barlow text-sm text-stone-500">
                        <li>Excessive cleaning and/or handwashing.</li>
                        <li>Repeatedly checking on things (e.g., locks, appliances).</li>
                        <li>Compulsive counting or tapping in specific patterns.</li>
                        <li>Mental compulsions (silently repeating prayers or phrases).</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 3: Subtypes */}
                <div id="common-types" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Common Subtypes of OCD</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      OCD can latch onto anything that a person values. While the underlying mechanism of the disorder is the same, the "theme" of the obsessions can vary wildly. Some common clinical presentations include:
                    </p>
                    <ul className="list-disc pl-6 space-y-4 mt-4 mb-6">
                      <li><strong>Contamination OCD:</strong> Intense fear of contracting a disease or illness, leading to excessive washing or avoidance of public spaces.</li>
                      <li><strong>Harm OCD:</strong> Intrusive, terrifying thoughts about causing violent harm to loved ones or oneself, despite having no desire to do so.</li>
                      <li><strong>"Just Right" (Symmetry) OCD:</strong> A severe discomfort when objects are not perfectly aligned, leading to hours of arranging and organizing.</li>
                      <li><strong>Scrupulosity (Religious/Moral OCD):</strong> Obsessive fears about committing a sin, offending God, or being a fundamentally "bad" person.</li>
                    </ul>
                  </div>
                </div>

                {/* Section 4: Local SEO & Accessibility */}
                <div id="local-treatment" className="scroll-mt-32 bg-stone-900 text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />
                  
                  <h3 className="font-barlow font-normal text-3xl md:text-4xl tracking-tighter mb-6 relative z-10">
                    Specialized OCD Treatment in <span className="font-instrument-serif italic text-orange-400">Darby, PA</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="font-barlow text-stone-300 text-lg leading-relaxed space-y-4">
                      <p>
                        At Sunrise Human Care Services, we provide the gold-standard treatment for OCD: psychiatric medication management combined with Exposure and Response Prevention (ERP). Located at 869 Main Street in Darby, we proudly serve Delaware County.
                      </p>
                      <div className="flex items-center gap-4 bg-orange-500/20 border border-orange-500/30 p-4 rounded-2xl">
                        <Shield className="w-8 h-8 text-orange-400 flex-shrink-0" />
                        <div>
                          <h4 className="font-barlow font-bold text-white">100% Medicaid Acceptance</h4>
                          <p className="text-sm text-stone-400">We exclusively accept Medicaid to ensure critical, specialized psychiatric care reaches those who need it most.</p>
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
                      alt="Holli O'Donnell, Licensed Mental Health Professional" 
                      fill 
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-wider uppercase text-stone-400 mb-1 block">Clinically Reviewed By</span>
                    <h3 className="font-barlow font-bold text-2xl text-stone-900">Holli O'Donnell, Licensed Mental Health Professional</h3>
                    <p className="font-barlow text-stone-500 mt-2 text-sm leading-relaxed">
                      Holli O'Donnell is a dedicated mental health professional at Sunrise Human Care Services, specializing in the diagnosis and evidence-based treatment of OCD, anxiety disorders, and complex behavioral patterns.
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
                          "border rounded-2xl overflow-hidden transition duration-300",
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
                            "overflow-hidden transition duration-300",
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