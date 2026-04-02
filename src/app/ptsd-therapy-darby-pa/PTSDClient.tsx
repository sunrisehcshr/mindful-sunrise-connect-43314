"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, Phone, ChevronRight,
  MapPin, Shield, Brain, HeartPulse, EyeOff, Sparkles,
  ChevronDown
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import AppointmentSection from '@/components/Appointment/AppointmentSection';
import SectionTag from '@/components/ui/section-tag';
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do I have to talk about my trauma in detail?",
    answer: "Not necessarily. While traditional talk therapy involves discussing the event, specialized trauma therapies like EMDR (Eye Movement Desensitization and Reprocessing) often require very little verbal description of the traumatic event. Our priority is your safety and emotional regulation; we will never force you to recount details before you are ready."
  },
  {
    question: "Can you get PTSD from something that isn't military combat?",
    answer: "Absolutely. While PTSD was initially recognized in veterans, it can develop after any event where you felt your life or safety (or the life/safety of others) was in danger. Common causes include car accidents, domestic abuse, sexual assault, medical trauma, childhood neglect, or sudden loss."
  },
  {
    question: "What is Complex PTSD (C-PTSD)?",
    answer: "Traditional PTSD is often linked to a single traumatic event (like an accident). Complex PTSD (C-PTSD) develops from chronic, prolonged, or repeated trauma from which escape was difficult or impossible—such as childhood abuse, domestic violence, or human trafficking. It includes PTSD symptoms plus severe difficulties with emotional regulation and self-worth."
  },
  {
    question: "Will trauma therapy make my symptoms worse?",
    answer: "It is common to experience a temporary increase in distress when you first begin processing trauma—similar to cleaning out a wound. However, our highly trained therapists focus heavily on 'resourcing' (teaching you grounding and coping skills) before any trauma processing begins, ensuring you have the tools to manage distress safely."
  },
  {
    question: "Can PTSD ever go away completely?",
    answer: "Yes. With evidence-based treatment like EMDR or Trauma-Focused CBT, many individuals experience a complete remission of their PTSD symptoms. While the memory of the event remains, it loses its emotional charge and stops triggering the intense physical 'fight or flight' response, allowing you to reclaim your life."
  }
];

export default function PTSDClient() {
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
              alt="Trauma and PTSD Treatment in Darby PA" 
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
                Trauma & PTSD Treatment <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal">in Darby, PA</span>
              </h1>
              <p className="text-stone-300 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                Struggling with flashbacks, hypervigilance, or a sense of unsafety? Our trauma-informed specialists provide evidence-based therapies like EMDR to help you process the past and reclaim your future.
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
                    <a href="#what-is-ptsd" onClick={(e) => scrollToSection(e, 'what-is-ptsd')} className="block hover:text-orange-500 transition-colors">What is PTSD & Trauma?</a>
                    <a href="#types" onClick={(e) => scrollToSection(e, 'types')} className="block hover:text-orange-500 transition-colors">Types of Trauma Disorders</a>
                    <a href="#acute-ptsd" onClick={(e) => scrollToSection(e, 'acute-ptsd')} className="block hover:text-orange-500 transition-colors ml-4">Uncomplicated PTSD</a>
                    <a href="#complex-ptsd" onClick={(e) => scrollToSection(e, 'complex-ptsd')} className="block hover:text-orange-500 transition-colors ml-4">Complex PTSD (C-PTSD)</a>
                    <a href="#developmental" onClick={(e) => scrollToSection(e, 'developmental')} className="block hover:text-orange-500 transition-colors ml-4">Developmental Trauma</a>
                    <a href="#local-treatment" onClick={(e) => scrollToSection(e, 'local-treatment')} className="block hover:text-orange-500 transition-colors">Treatment in Darby, PA</a>
                    <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="block hover:text-orange-500 transition-colors">Frequently Asked Questions</a>
                  </nav>

                  <div className="mt-8 pt-6 border-t border-stone-100">
                    <h4 className="font-barlow font-bold text-stone-900 text-sm mb-3">Related Services</h4>
                    <div className="space-y-2">
                      <Link href="/individual-therapy-darby-pa" className="flex items-center text-sm text-stone-500 hover:text-orange-500 transition-colors group">
                        <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" /> Individual Therapy
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
                
                {/* Section 1: What is PTSD */}
                <div id="what-is-ptsd" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">What is Trauma and PTSD?</h2>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Post-Traumatic Stress Disorder (PTSD) is a severe psychiatric condition that can occur in people who have experienced or witnessed a traumatic, life-threatening, or terrifying event. While it is normal to experience fear and anxiety after a traumatic event, people with PTSD have a nervous system that remains "stuck" in a state of high alert, long after the danger has passed.
                    </p>
                    <p>
                      Trauma profoundly alters the brain, specifically the amygdala (the brain's alarm system) and the hippocampus (responsible for memory processing). This causes the brain to incorrectly process safe, present-day stimuli as immediate, life-threatening danger, resulting in flashbacks, severe anxiety, and uncontrollable physical reactions.
                    </p>
                    <p>
                      According to the National Center for PTSD, about 6% of the U.S. population will have PTSD at some point in their lives. However, many individuals suffer silently due to stigma or a belief that their trauma "wasn't bad enough" to warrant treatment. At Sunrise Human Care Services, our trauma-informed team provides specialized therapies designed to heal the brain and restore your sense of safety.
                    </p>
                  </div>
                </div>

                {/* Section 2: Types */}
                <div id="types" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">Types of Trauma Disorders</h2>
                  <p className="font-barlow text-lg text-stone-600 leading-relaxed mb-8">
                    Trauma affects everyone differently depending on the nature, duration, and age at which the trauma occurred. The primary clinical classifications include:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <HeartPulse className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Uncomplicated PTSD</h4>
                      <p className="font-barlow text-sm text-stone-500">Linked to a single, distinct traumatic event such as a car accident, natural disaster, or assault.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Brain className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Complex PTSD (C-PTSD)</h4>
                      <p className="font-barlow text-sm text-stone-500">Resulting from prolonged, repeated trauma, often involving a sense of captivity or inescapable threat.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Sparkles className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Developmental Trauma</h4>
                      <p className="font-barlow text-sm text-stone-500">Trauma occurring during critical stages of childhood development, heavily impacting attachment.</p>
                    </div>
                  </div>
                </div>

                {/* Section 3: Acute PTSD */}
                <div id="acute-ptsd" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Uncomplicated PTSD Symptoms and Causes</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Often referred to simply as PTSD, this presentation is typically tied to a single, isolated traumatic incident. Despite the name "uncomplicated," the symptoms are severe and deeply disruptive to the individual's life.
                    </p>
                    <p>
                      <strong>Causes:</strong> A single event involving actual or threatened death, serious injury, or sexual violence. This can happen through direct experience, witnessing the event, or learning that a violent or accidental event occurred to a close family member.
                    </p>
                    <p>
                      <strong>Core Symptoms:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li><strong>Intrusion:</strong> Recurrent, involuntary distress memories, nightmares, or intense flashbacks where it feels like the event is happening again.</li>
                      <li><strong>Avoidance:</strong> Actively avoiding thoughts, feelings, places, people, or activities that act as reminders of the trauma.</li>
                      <li><strong>Arousal/Reactivity:</strong> Hypervigilance, exaggerated startle response, difficulty sleeping, and irritable or aggressive behavior.</li>
                    </ul>
                  </div>
                </div>

                {/* Section 4: Complex PTSD */}
                <div id="complex-ptsd" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Complex PTSD (C-PTSD) Symptoms</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Complex PTSD arises from chronic, long-term trauma where the victim had little or no chance of escape. Because the trauma was ongoing, it fundamentally alters the individual's self-concept and ability to regulate emotions.
                    </p>
                    <p>
                      <strong>Causes:</strong> Ongoing domestic violence, repeated childhood sexual or physical abuse, severe emotional neglect, human trafficking, or living in a war zone for an extended period.
                    </p>
                    <p>
                      <strong>Additional Symptoms (Beyond Standard PTSD):</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li>Severe difficulty regulating emotions (explosive anger or persistent, profound sadness).</li>
                      <li>Negative self-perception: Feelings of deep shame, guilt, and the belief of being fundamentally broken or worthless.</li>
                      <li>Relationship difficulties: Struggling to feel close to others, or repeatedly entering into toxic/abusive relationships.</li>
                      <li>Periods of dissociation or feeling detached from one's own body (depersonalization).</li>
                    </ul>
                  </div>
                </div>

                {/* Section 5: Local SEO & Accessibility */}
                <div id="local-treatment" className="scroll-mt-32 bg-stone-900 text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />
                  
                  <h3 className="font-barlow font-normal text-3xl md:text-4xl tracking-tighter mb-6 relative z-10">
                    Specialized Trauma Treatment in <span className="font-instrument-serif italic text-orange-400">Darby, PA</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="font-barlow text-stone-300 text-lg leading-relaxed space-y-4">
                      <p>
                        At Sunrise Human Care Services, we provide a safe, culturally responsive environment for trauma recovery. Located at 869 Main Street in Darby, we offer evidence-based therapies including EMDR and TF-CBT to the Delaware County community.
                      </p>
                      <div className="flex items-center gap-4 bg-orange-500/20 border border-orange-500/30 p-4 rounded-2xl">
                        <Shield className="w-8 h-8 text-orange-400 flex-shrink-0" />
                        <div>
                          <h4 className="font-barlow font-bold text-white">100% Medicaid Acceptance</h4>
                          <p className="text-sm text-stone-400">We exclusively accept Medicaid to ensure critical trauma care reaches those who need it most.</p>
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

                {/* Section 6: EEAT Reviewer Block */}
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
                      Holli H is a dedicated mental health professional at Sunrise Human Care Services, specializing in trauma-informed care, EMDR therapy, and the treatment of complex PTSD and dissociative symptoms.
                    </p>
                    <p className="font-barlow text-stone-400 text-xs mt-3">
                      Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </div>

                {/* Section 7: FAQs */}
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