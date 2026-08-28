"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, Phone, ChevronRight,
  MapPin, Shield, Brain, Waves, HeartCrack,
  ChevronDown
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import AppointmentSection from '@/components/Appointment/AppointmentSection';
import SectionTag from '@/components/ui/section-tag';
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is Borderline Personality Disorder (BPD) treatable?",
    answer: "Yes. Historically, BPD was considered highly difficult to treat, but modern therapies—specifically Dialectical Behavior Therapy (DBT)—have proven to be incredibly effective. With committed treatment, many individuals with BPD experience a massive reduction in symptoms and are able to build stable, fulfilling relationships."
  },
  {
    question: "How is BPD different from Bipolar Disorder?",
    answer: "While both involve severe mood swings, they are fundamentally different. Bipolar mood swings last for days, weeks, or months and often happen independently of external events. BPD mood swings are highly reactive to environmental triggers (especially interpersonal conflict) and can shift multiple times within a single day."
  },
  {
    question: "What is 'splitting' in BPD?",
    answer: "Splitting is a common defense mechanism in BPD where an individual views people, situations, or themselves in extreme black-and-white terms. Someone may be seen as perfect and idealized one moment, and completely villainized the next. Therapy helps build 'gray area' thinking to stabilize relationships."
  },
  {
    question: "Is medication used to treat BPD?",
    answer: "There is no specific medication approved to cure BPD itself. However, psychiatric medication is frequently used to manage the severe co-occurring symptoms, such as debilitating anxiety, depression, or severe mood instability. The core treatment for BPD, however, is always long-term psychotherapy."
  },
  {
    question: "Does BPD stem from childhood trauma?",
    answer: "In many cases, yes. A large percentage of individuals with BPD experienced severe childhood trauma, neglect, or invalidating environments where their emotional needs were chronically dismissed. However, genetics and brain structure (specifically an overactive amygdala) also play a significant role."
  }
];

export default function BPDClient() {
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
              alt="BPD Treatment in Darby PA" 
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
                BPD Treatment <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal">in Darby, PA</span>
              </h1>
              <p className="text-stone-300 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                Experiencing intense, painful emotions and chaotic relationships? Our clinical team provides the evidence-based therapies and stabilization you need to break the cycle and build a life worth living.
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
                    <a href="#what-is-bpd" onClick={(e) => scrollToSection(e, 'what-is-bpd')} className="block hover:text-orange-500 transition-colors">What is BPD?</a>
                    <a href="#core-symptoms" onClick={(e) => scrollToSection(e, 'core-symptoms')} className="block hover:text-orange-500 transition-colors">Core Symptoms</a>
                    <a href="#emotional-dysregulation" onClick={(e) => scrollToSection(e, 'emotional-dysregulation')} className="block hover:text-orange-500 transition-colors ml-4">Emotional Dysregulation</a>
                    <a href="#interpersonal" onClick={(e) => scrollToSection(e, 'interpersonal')} className="block hover:text-orange-500 transition-colors ml-4">Interpersonal Chaos</a>
                    <a href="#identity" onClick={(e) => scrollToSection(e, 'identity')} className="block hover:text-orange-500 transition-colors ml-4">Identity Disturbances</a>
                    <a href="#local-treatment" onClick={(e) => scrollToSection(e, 'local-treatment')} className="block hover:text-orange-500 transition-colors">Treatment in Darby, PA</a>
                    <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="block hover:text-orange-500 transition-colors">Frequently Asked Questions</a>
                  </nav>

                  <div className="mt-8 pt-6 border-t border-stone-100">
                    <h4 className="font-barlow font-bold text-stone-900 text-sm mb-3">Related Services</h4>
                    <div className="space-y-2">
                      <Link href="/individual-therapy-darby-pa" className="flex items-center text-sm text-stone-500 hover:text-orange-500 transition-colors group">
                        <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" /> Individual Therapy
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
                
                {/* Section 1: What is BPD */}
                <div id="what-is-bpd" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">What is Borderline Personality Disorder?</h2>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Borderline Personality Disorder (BPD) is a complex and deeply painful mental health condition characterized by an intense fear of abandonment, severe emotional instability, impulsive behaviors, and a pattern of unstable relationships. Individuals with BPD feel emotions more intensely, more quickly, and for a longer duration than the average person.
                    </p>
                    <p>
                      Living with BPD is often described as feeling like you have "third-degree burns over your emotional skin." The slightest perceived rejection or criticism can trigger an overwhelming wave of anger, despair, or panic. To cope with this intolerable pain, individuals may engage in self-destructive behaviors, creating a chaotic cycle that is exhausting for both the individual and their loved ones.
                    </p>
                    <p>
                      Despite the heavy stigma surrounding the diagnosis, BPD is highly treatable. At Sunrise Human Care Services, we view BPD not as a character flaw, but as a severe deficit in emotional regulation skills—skills that can be taught, practiced, and mastered through evidence-based therapies.
                    </p>
                  </div>
                </div>

                {/* Section 2: Core Symptoms Overview */}
                <div id="core-symptoms" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">Core Symptoms of BPD</h2>
                  <p className="font-barlow text-lg text-stone-600 leading-relaxed mb-8">
                    The DSM-5 outlines nine criteria for BPD. A diagnosis requires meeting at least five. These symptoms generally fall into three main categories of dysregulation:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Waves className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Emotional Dysregulation</h4>
                      <p className="font-barlow text-sm text-stone-500">Severe, rapid mood swings and chronic feelings of profound emptiness.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <HeartCrack className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Interpersonal Chaos</h4>
                      <p className="font-barlow text-sm text-stone-500">Frantic efforts to avoid abandonment and highly unstable relationships.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Brain className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Identity & Impulsivity</h4>
                      <p className="font-barlow text-sm text-stone-500">An unstable sense of self, leading to reckless behaviors and self-harm.</p>
                    </div>
                  </div>
                </div>

                {/* Section 3: Emotional Dysregulation */}
                <div id="emotional-dysregulation" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Emotional Dysregulation</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      The core feature of BPD is the inability to manage intense emotions. The brain's "fight or flight" center (the amygdala) is hyper-reactive, while the logical, reasoning center (the prefrontal cortex) struggles to shut the alarm off.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li><strong>Intense Mood Swings:</strong> Episodes of severe depression, irritability, or anxiety lasting a few hours to a few days.</li>
                      <li><strong>Inappropriate Anger:</strong> Intense, explosive anger that is disproportionate to the situation, often followed by deep shame.</li>
                      <li><strong>Chronic Emptiness:</strong> A persistent, painful feeling that there is "nothing inside" or a lack of purpose.</li>
                    </ul>
                  </div>
                </div>

                {/* Section 4: Interpersonal */}
                <div id="interpersonal" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Interpersonal Chaos</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Relationships for someone with BPD are often tumultuous and short-lived due to the overwhelming fear of being left alone.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li><strong>Fear of Abandonment:</strong> Frantic, extreme efforts to avoid real or imagined abandonment (e.g., panicking if a text is not answered immediately).</li>
                      <li><strong>Splitting:</strong> A pattern of unstable and intense relationships, alternating between extreme idealization ("You are perfect and the only one who understands me") and extreme devaluation ("You are evil and you betrayed me").</li>
                    </ul>
                  </div>
                </div>

                {/* Section 5: Identity */}
                <div id="identity" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Identity Disturbances and Impulsivity</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Because the internal emotional landscape is so chaotic, individuals with BPD often struggle to know who they truly are.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li><strong>Unstable Self-Image:</strong> Frequently changing goals, values, career plans, and friend groups depending on who they are around.</li>
                      <li><strong>Impulsivity:</strong> Engaging in impulsive, dangerous behaviors to cope with emotional pain (e.g., reckless driving, binge eating, substance abuse, risky sex).</li>
                      <li><strong>Self-Harm:</strong> Recurrent suicidal behavior, gestures, threats, or self-mutilating behavior (like cutting) used as a maladaptive way to regulate extreme emotional pain or feel "real" during dissociation.</li>
                    </ul>
                  </div>
                </div>

                {/* Section 6: Local SEO & Accessibility */}
                <div id="local-treatment" className="scroll-mt-32 bg-stone-900 text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />
                  
                  <h2 className="font-barlow font-normal text-3xl md:text-4xl tracking-tighter mb-6 relative z-10">
                    Specialized BPD Therapy in <span className="font-instrument-serif italic text-orange-400">Darby, PA</span>
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="font-barlow text-stone-300 text-lg leading-relaxed space-y-4">
                      <p>
                        At Sunrise Human Care Services, we provide non-judgmental, highly structured therapy designed specifically for personality disorders. Located at 869 Main Street in Darby, we serve the entire Delaware County area.
                      </p>
                      <div className="flex items-center gap-4 bg-orange-500/20 border border-orange-500/30 p-4 rounded-2xl">
                        <Shield className="w-8 h-8 text-orange-400 flex-shrink-0" />
                        <div>
                          <h4 className="font-barlow font-bold text-white">100% Medicaid Acceptance</h4>
                          <p className="text-sm text-stone-400">We exclusively accept Medicaid to ensure specialized, life-saving mental health care is accessible.</p>
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
                    <h2 className="sr-only">Clinically Reviewed By</h2>
                    <h3 className="font-barlow font-bold text-2xl text-stone-900">Holli O'Donnell, Licensed Mental Health Professional</h3>
                    <p className="font-barlow text-stone-500 mt-2 text-sm leading-relaxed">
                      Holli O'Donnell is a dedicated mental health professional at Sunrise Human Care Services, specializing in dialectical approaches, trauma recovery, and the treatment of complex personality disorders.
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