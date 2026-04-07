"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, Phone, ChevronRight,
  MapPin, Shield, Layers, Brain, Anchor,
  ChevronDown
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import AppointmentSection from '@/components/Appointment/AppointmentSection';
import SectionTag from '@/components/ui/section-tag';
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is dissociation the same as having multiple personalities?",
    answer: "Dissociation exists on a spectrum. While Dissociative Identity Disorder (formerly called multiple personality disorder) involves distinct identity states, many people experience milder forms of dissociation like depersonalization (feeling detached from oneself) or derealization (feeling the world is unreal). All forms of dissociation involve some degree of disconnection from full awareness."
  },
  {
    question: "How long does treatment for dissociative disorders take?",
    answer: "Treatment for dissociative disorders is typically longer-term, often lasting several years, especially for more complex presentations like Dissociative Identity Disorder. The pace of treatment is determined by the client's needs and readiness, focusing first on stabilization before addressing traumatic material."
  },
  {
    question: "Can medication cure dissociative disorders?",
    answer: "There are no medications that specifically cure dissociation. However, psychiatric medications are highly effective in treating the severe anxiety, depression, or sleep disturbances that almost always accompany dissociative disorders. Therapy (such as EMDR or CBT) remains the primary treatment for the dissociation itself."
  },
  {
    question: "What causes dissociative disorders?",
    answer: "Dissociative disorders usually develop as a psychological response to severe trauma, particularly chronic physical, sexual, or emotional abuse during childhood. The dissociation serves as a survival mechanism, allowing the mind to detach from an overwhelmingly painful reality."
  }
];

export default function DissociativeDisordersClient() {
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
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" 
              alt="Dissociative Disorders Treatment in Darby PA" 
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
                Dissociative Disorders Treatment <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal">in Darby, PA</span>
              </h1>
              <p className="text-stone-300 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                Feeling detached from yourself, your memories, or your reality? Our trauma-informed psychiatric team provides the specialized, compassionate care needed to help you safely reconnect and integrate your life.
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
                    <a href="#what-is-dissociation" onClick={(e) => scrollToSection(e, 'what-is-dissociation')} className="block hover:text-orange-500 transition-colors">What is Dissociation?</a>
                    <a href="#types" onClick={(e) => scrollToSection(e, 'types')} className="block hover:text-orange-500 transition-colors">Types We Treat</a>
                    <a href="#depersonalization" onClick={(e) => scrollToSection(e, 'depersonalization')} className="block hover:text-orange-500 transition-colors ml-4">Depersonalization</a>
                    <a href="#did" onClick={(e) => scrollToSection(e, 'did')} className="block hover:text-orange-500 transition-colors ml-4">Dissociative Identity Disorder</a>
                    <a href="#treatment" onClick={(e) => scrollToSection(e, 'treatment')} className="block hover:text-orange-500 transition-colors">Our Treatment Approach</a>
                    <a href="#local-treatment" onClick={(e) => scrollToSection(e, 'local-treatment')} className="block hover:text-orange-500 transition-colors">Treatment in Darby, PA</a>
                    <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="block hover:text-orange-500 transition-colors">Frequently Asked Questions</a>
                  </nav>

                  <div className="mt-8 pt-6 border-t border-stone-100">
                    <h4 className="font-barlow font-bold text-stone-900 text-sm mb-3">Related Services</h4>
                    <div className="space-y-2">
                      <Link href="/ptsd-therapy-darby-pa" className="flex items-center text-sm text-stone-500 hover:text-orange-500 transition-colors group">
                        <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" /> PTSD Therapy
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
                
                {/* Section 1: What is Dissociation */}
                <div id="what-is-dissociation" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">What is a Dissociative Disorder?</h2>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Dissociation is a mental process where a person disconnects from their thoughts, feelings, memories, or sense of identity. While many people experience mild dissociation (like "spacing out" during a long drive), clinical Dissociative Disorders are severe, chronic conditions that drastically interfere with daily functioning.
                    </p>
                    <p>
                      These disorders are almost always rooted in severe, repetitive childhood trauma, such as physical, sexual, or emotional abuse. The developing brain uses dissociation as an extreme defense mechanism to compartmentalize and survive experiences that are too horrifying for the conscious mind to process at the time.
                    </p>
                    <p>
                      At Sunrise Human Care Services, we recognize that your symptoms were once brilliant survival strategies. Our goal is to provide a profoundly safe environment where those extreme defenses are no longer necessary, allowing you to integrate your experiences and live fully in the present.
                    </p>
                  </div>
                </div>

                {/* Section 2: Types Overview */}
                <div id="types" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">Types of Dissociative Disorders We Treat</h2>
                  <p className="font-barlow text-lg text-stone-600 leading-relaxed mb-8">
                    Dissociation exists on a spectrum. Our psychiatric providers are trained to accurately assess, diagnose, and treat the following conditions:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Anchor className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Depersonalization / Derealization</h4>
                      <p className="font-barlow text-sm text-stone-500">Feeling completely detached from your own body or mind (depersonalization) or feeling that the world around you is fake or dream-like (derealization).</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Brain className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Dissociative Amnesia</h4>
                      <p className="font-barlow text-sm text-stone-500">The inability to recall important personal information, usually related to a traumatic or stressful event, that goes far beyond normal forgetfulness.</p>
                    </div>
                  </div>
                </div>

                {/* Section 3: DID */}
                <div id="did" className="scroll-mt-32">
                  <div className="bg-orange-50/50 rounded-3xl p-8 border border-orange-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                        <Layers className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900">Dissociative Identity Disorder (DID)</h2>
                    </div>
                    <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                      <p>
                        Formerly known as Multiple Personality Disorder, DID is the most severe form of dissociation. It is characterized by the presence of two or more distinct personality states (often called "alters" or "parts") that recurrently take control of the person's behavior.
                      </p>
                      <p>
                        <strong>Common Symptoms of DID:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                        <li>Significant gaps in memory regarding everyday events, personal information, and past trauma</li>
                        <li>Feeling like an observer to your own speech and actions</li>
                        <li>Hearing voices inside your head that have distinct identities or opinions</li>
                        <li>Sudden, dramatic shifts in preferences, skills, or handwriting</li>
                        <li>Finding items you bought but have no memory of purchasing</li>
                      </ul>
                      <p>
                        Treatment for DID is highly specialized. It requires a long-term commitment to therapy focusing on mapping the internal system, building internal communication, and slowly processing the trauma that fragmented the identity in the first place.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 4: Treatment Approach */}
                <div id="treatment" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Our Phase-Oriented Treatment Approach</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Treating complex trauma and dissociation requires a careful, highly structured approach. We follow the gold-standard, three-phase model of trauma treatment to ensure you are never overwhelmed:
                    </p>
                    <ol className="list-decimal pl-6 space-y-4 mt-4 mb-6">
                      <li><strong>Phase 1: Safety and Stabilization.</strong> We spend significant time building a therapeutic alliance, teaching grounding techniques, managing co-occurring symptoms (like depression or panic attacks), and ensuring you are physically and emotionally safe in your daily life.</li>
                      <li><strong>Phase 2: Processing Trauma.</strong> Only when you have strong stabilization skills do we carefully begin to process the traumatic memories. We use therapies like EMDR or Trauma-Focused CBT, pacing the work to prevent re-traumatization.</li>
                      <li><strong>Phase 3: Integration and Reconnection.</strong> The final phase focuses on consolidating your sense of self (or increasing internal cooperation in DID) and re-engaging fully with relationships, work, and the world around you.</li>
                    </ol>
                  </div>
                </div>

                {/* Section 5: Local SEO & Accessibility */}
                <div id="local-treatment" className="scroll-mt-32 bg-stone-900 text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />
                  
                  <h3 className="font-barlow font-normal text-3xl md:text-4xl tracking-tighter mb-6 relative z-10">
                    Trauma-Informed Care in <span className="font-instrument-serif italic text-orange-400">Darby, PA</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="font-barlow text-stone-300 text-lg leading-relaxed space-y-4">
                      <p>
                        At Sunrise Human Care Services, we provide the specialized psychiatric support and intensive therapy required to heal from dissociative disorders. Located at 869 Main Street in Darby, we serve Delaware County with the utmost compassion and clinical rigor.
                      </p>
                      <div className="flex items-center gap-4 bg-orange-500/20 border border-orange-500/30 p-4 rounded-2xl">
                        <Shield className="w-8 h-8 text-orange-400 flex-shrink-0" />
                        <div>
                          <h4 className="font-barlow font-bold text-white">100% Medicaid Acceptance</h4>
                          <p className="text-sm text-stone-400">We exclusively accept Medicaid to ensure highly specialized trauma care is accessible to those who need it most.</p>
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

                  <div className="mt-8 rounded-2xl overflow-hidden h-64 border border-white/10 relative z-10">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.7251810565893!2d-75.26385702341498!3d39.91854498410065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c19c8aaf0c5f%3A0xda74d062dc04cad0!2sSunrise%20Human%20Care%20Services!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>

                {/* Section 6: EEAT Reviewer Block */}
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
                      Holli O'Donnell is a dedicated mental health professional at Sunrise Human Care Services, specializing in trauma-informed care and the treatment of dissociative disorders.
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
