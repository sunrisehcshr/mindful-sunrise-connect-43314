"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, Phone, ChevronRight,
  MapPin, Shield, Focus, Brain, Zap, Clock,
  ChevronDown
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import AppointmentSection from '@/components/Appointment/AppointmentSection';
import SectionTag from '@/components/ui/section-tag';
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is ADHD a real condition or just a lack of discipline?",
    answer: "ADHD is a legitimate, highly researched neurodevelopmental condition. Brain imaging studies show distinct differences in the structure and function of brains in individuals with ADHD, particularly in areas controlling executive function. It is not caused by laziness, poor parenting, or a lack of discipline."
  },
  {
    question: "Do I have to take stimulant medication to treat ADHD?",
    answer: "Not necessarily. While stimulant medications (like Adderall or Ritalin) are often the most effective first-line treatment for managing symptoms, non-stimulant medications and behavioral therapies are also highly effective. We provide comprehensive evaluations to find the safest and best approach for your specific needs and medical history."
  },
  {
    question: "I was never diagnosed as a child. Can adults have ADHD?",
    answer: "Absolutely. Many adults with ADHD were never diagnosed in childhood, especially those who did not exhibit disruptive hyperactive behaviors. Adult ADHD often presents as chronic disorganization, missed deadlines, relationship issues, and persistent feelings of underachievement despite high intelligence."
  },
  {
    question: "How does therapy help with ADHD?",
    answer: "Therapy, particularly Cognitive Behavioral Therapy (CBT) adapted for ADHD, helps you develop practical executive functioning skills. We focus on building systems for time management, organization, and emotional regulation, while also addressing the anxiety and low self-esteem that often accompany living with unmanaged ADHD."
  },
  {
    question: "Is ADHD genetic?",
    answer: "Yes, ADHD has a very strong genetic component. Research indicates that if a parent has ADHD, their child has a significantly higher chance of also having the condition. It is one of the most highly heritable psychiatric disorders."
  }
];

export default function ADHDClient() {
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
              src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_1600/v1774918057/cropped-view-of-psychotherapist-writing-on-clipboa-2026-03-11-19-39-36-utc_j17vdo.jpg" 
              alt="ADHD Treatment in Darby PA" 
              fill 
              className="object-cover opacity-20"
              priority
              sizes="100vw"
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
                ADHD Treatment <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal">in Darby, PA</span>
              </h1>
              <p className="text-stone-300 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                Struggling with focus, chronic disorganization, or impulsivity? Our specialized psychiatric providers and therapists help you harness your brain's unique potential.
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
                    <a href="#what-is-adhd" onClick={(e) => scrollToSection(e, 'what-is-adhd')} className="block hover:text-orange-500 transition-colors">What is ADHD?</a>
                    <a href="#types" onClick={(e) => scrollToSection(e, 'types')} className="block hover:text-orange-500 transition-colors">Types of ADHD</a>
                    <a href="#inattentive" onClick={(e) => scrollToSection(e, 'inattentive')} className="block hover:text-orange-500 transition-colors ml-4">Inattentive Type</a>
                    <a href="#hyperactive" onClick={(e) => scrollToSection(e, 'hyperactive')} className="block hover:text-orange-500 transition-colors ml-4">Hyperactive-Impulsive Type</a>
                    <a href="#combined" onClick={(e) => scrollToSection(e, 'combined')} className="block hover:text-orange-500 transition-colors ml-4">Combined Type</a>
                    <a href="#local-treatment" onClick={(e) => scrollToSection(e, 'local-treatment')} className="block hover:text-orange-500 transition-colors">Treatment in Darby, PA</a>
                    <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="block hover:text-orange-500 transition-colors">Frequently Asked Questions</a>
                  </nav>

                  <div className="mt-8 pt-6 border-t border-stone-100">
                    <h4 className="font-barlow font-bold text-stone-900 text-sm mb-3">Related Services</h4>
                    <div className="space-y-2">
                      <Link href="/medication-management-darby-pa" className="flex items-center text-sm text-stone-500 hover:text-orange-500 transition-colors group">
                        <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" /> Medication Management
                      </Link>
                      <Link href="/psychiatric-evaluations-darby-pa" className="flex items-center text-sm text-stone-500 hover:text-orange-500 transition-colors group">
                        <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" /> Psychiatric Evaluations
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* MAIN CONTENT AREA */}
              <div className="lg:w-3/4 space-y-16">
                
                {/* Section 1: What is ADHD */}
                <div id="what-is-adhd" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">What is ADHD?</h2>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder characterized by an ongoing pattern of inattention, hyperactivity, and impulsivity that interferes with daily functioning or development. While it is often diagnosed in childhood, ADHD is a lifelong condition that heavily impacts adults in the workplace, academic settings, and interpersonal relationships.
                    </p>
                    <p>
                      The relationship between ADHD and mental health is highly complex. Living with unmanaged ADHD often leads to chronic frustration, missed potential, and societal misunderstandings. Because of this, individuals with ADHD have a significantly higher risk of developing co-occurring mental health conditions such as Anxiety, Depression, and Substance Use Disorders. 
                    </p>
                    <p>
                      According to recent data, an estimated 8.7 million adults in the United States have ADHD, yet a vast majority remain undiagnosed and untreated. At Sunrise Human Care Services, our clinical team provides comprehensive evaluations and multimodal treatment to help you manage symptoms and thrive.
                    </p>
                  </div>
                </div>

                {/* Section 2: Types */}
                <div id="types" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">Types of ADHD</h2>
                  <p className="font-barlow text-lg text-stone-600 leading-relaxed mb-8">
                    The DSM-5 recognizes three primary presentations of ADHD. Because symptoms can change over time, the presentation a person experiences may also evolve. The three types include:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Focus className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Inattentive Type</h4>
                      <p className="font-barlow text-sm text-stone-500">Primarily characterized by difficulties with focus, organization, and task completion.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Hyperactive-Impulsive</h4>
                      <p className="font-barlow text-sm text-stone-500">Primarily characterized by restlessness, fidgeting, and acting without thinking.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Brain className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Combined Type</h4>
                      <p className="font-barlow text-sm text-stone-500">The most common presentation, featuring equal symptoms of both inattention and hyperactivity.</p>
                    </div>
                  </div>
                </div>

                {/* Section 3: Inattentive */}
                <div id="inattentive" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Inattentive Presentation Symptoms and Causes</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Formerly known simply as ADD, the Predominantly Inattentive presentation is characterized by severe difficulty in sustaining focus, following detailed instructions, and organizing tasks. Because these individuals are often not disruptive, this type frequently goes undiagnosed until adulthood.
                    </p>
                    <p>
                      <strong>Causes:</strong> Like all forms of ADHD, the exact cause involves differences in brain anatomy and the function of neurotransmitters, specifically dopamine and norepinephrine, which are essential for executive function and reward processing. Genetics are the primary driver.
                    </p>
                    <p>
                      <strong>Symptoms:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li>Frequently making careless mistakes in schoolwork or at work</li>
                      <li>Appearing not to listen when spoken to directly</li>
                      <li>Struggling to follow through on instructions or finish duties</li>
                      <li>Chronic disorganization and poor time management</li>
                      <li>Frequently losing items necessary for tasks (keys, phone, wallet, documents)</li>
                      <li>Being easily distracted by unrelated thoughts or external stimuli</li>
                    </ul>
                  </div>
                </div>

                {/* Section 4: Hyperactive */}
                <div id="hyperactive" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Hyperactive-Impulsive Presentation</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Individuals with the Predominantly Hyperactive-Impulsive presentation feel a constant need for movement and often struggle with impulse control. While the hyperactive symptoms may decrease or internalize (feeling "restless" inside) as a person ages into adulthood, the impulsivity often remains.
                    </p>
                    <p>
                      <strong>Causes:</strong> This presentation shares the same genetic and neurological origins as the inattentive type, but the neurochemical dysregulation more heavily impacts the brain's motor and impulse-control centers.
                    </p>
                    <p>
                      <strong>Symptoms:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li>Fidgeting, tapping hands/feet, or squirming in seats</li>
                      <li>Leaving seat in situations when remaining seated is expected</li>
                      <li>In adults, experiencing a constant internal feeling of restlessness</li>
                      <li>Talking excessively and blurting out answers before questions are completed</li>
                      <li>Difficulty waiting one's turn in lines or conversations</li>
                      <li>Interrupting or intruding on others (e.g., taking over what others are doing)</li>
                    </ul>
                  </div>
                </div>

                {/* Section 5: Combined */}
                <div id="combined" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Combined Presentation</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      The Combined Presentation is diagnosed when an individual meets the criteria for both inattention and hyperactivity-impulsivity for the past six months. This is the most commonly diagnosed form of ADHD and often presents the most comprehensive challenges in daily functioning, requiring a highly customized, multimodal treatment plan.
                    </p>
                  </div>
                </div>

                {/* Section 6: Local SEO & Accessibility */}
                <div id="local-treatment" className="scroll-mt-32 bg-stone-900 text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />
                  
                  <h3 className="font-barlow font-normal text-3xl md:text-4xl tracking-tighter mb-6 relative z-10">
                    Accessible ADHD Treatment in <span className="font-instrument-serif italic text-orange-400">Darby, PA</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="font-barlow text-stone-300 text-lg leading-relaxed space-y-4">
                      <p>
                        At Sunrise Human Care Services, we proudly serve the Darby community and surrounding areas in Delaware County. Conveniently located at 869 Main Street, we make high-quality psychiatric evaluations, medication management, and ADHD therapy accessible.
                      </p>
                      <div className="flex items-center gap-4 bg-orange-500/20 border border-orange-500/30 p-4 rounded-2xl">
                        <Shield className="w-8 h-8 text-orange-400 flex-shrink-0" />
                        <div>
                          <h4 className="font-barlow font-bold text-white">100% Medicaid Acceptance</h4>
                          <p className="text-sm text-stone-400">We exclusively accept Medicaid to ensure critical psychiatric care reaches those who need it most.</p>
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

                {/* Section 7: EEAT Reviewer Block */}
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
                      Holli O'Donnell is a dedicated mental health professional at Sunrise Human Care Services, specializing in the diagnosis and multimodal treatment of ADHD, neurodevelopmental disorders, and co-occurring conditions.
                    </p>
                    <p className="font-barlow text-stone-400 text-xs mt-3">
                      Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </div>

                {/* Section 8: FAQs */}
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