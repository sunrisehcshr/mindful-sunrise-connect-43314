"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, Phone, ChevronRight,
  MapPin, Shield, Brain, EyeOff, Sparkles, UserX,
  ChevronDown
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import AppointmentSection from '@/components/Appointment/AppointmentSection';
import SectionTag from '@/components/ui/section-tag';
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is schizophrenia treatable?",
    answer: "Yes. While schizophrenia is a chronic condition without a permanent cure, it is highly treatable. With the right combination of antipsychotic medication, therapy, and social support, many individuals experience a significant reduction in symptoms and are able to lead independent, fulfilling lives."
  },
  {
    question: "Does schizophrenia mean having multiple personalities?",
    answer: "No. This is a common misconception. Schizophrenia literally translates to 'split mind,' but it refers to a split from reality, not a split into multiple personalities. Dissociative Identity Disorder (DID) is a completely separate condition."
  },
  {
    question: "Will someone with schizophrenia need to take medication forever?",
    answer: "In most cases, long-term or lifelong medication is necessary to prevent relapse, similar to how someone with diabetes needs daily insulin. Antipsychotic medications are crucial for keeping the neurochemical balance in the brain stable. Abruptly stopping medication often leads to a severe return of symptoms."
  },
  {
    question: "How can family members help someone with schizophrenia?",
    answer: "Family support is one of the strongest predictors of successful recovery. Families should educate themselves on the illness, help ensure the individual adheres to their medication schedule, maintain a low-stress home environment, and participate in family therapy to learn how to communicate effectively during a crisis."
  },
  {
    question: "What causes schizophrenia?",
    answer: "The exact cause is unknown, but it is believed to be a combination of genetics, brain chemistry (specifically dysregulation of the neurotransmitter dopamine), and environmental factors. Severe stress, trauma, or substance use (especially high-THC cannabis) during teen years can trigger the onset in individuals who are genetically predisposed."
  }
];

export default function SchizophreniaClient() {
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
              alt="Schizophrenia Treatment in Darby PA" 
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
                Schizophrenia Treatment <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal">in Darby, PA</span>
              </h1>
              <p className="text-stone-300 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                Navigating the complexities of psychosis, hallucinations, or paranoia? Our expert psychiatric team provides the compassionate, medication-led care required to stabilize symptoms and rebuild your life.
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
                    <a href="#what-is-schizophrenia" onClick={(e) => scrollToSection(e, 'what-is-schizophrenia')} className="block hover:text-orange-500 transition-colors">What is Schizophrenia?</a>
                    <a href="#symptoms" onClick={(e) => scrollToSection(e, 'symptoms')} className="block hover:text-orange-500 transition-colors">Understanding Symptoms</a>
                    <a href="#positive-symptoms" onClick={(e) => scrollToSection(e, 'positive-symptoms')} className="block hover:text-orange-500 transition-colors ml-4">Positive Symptoms</a>
                    <a href="#negative-symptoms" onClick={(e) => scrollToSection(e, 'negative-symptoms')} className="block hover:text-orange-500 transition-colors ml-4">Negative Symptoms</a>
                    <a href="#cognitive-symptoms" onClick={(e) => scrollToSection(e, 'cognitive-symptoms')} className="block hover:text-orange-500 transition-colors ml-4">Cognitive Symptoms</a>
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
                
                {/* Section 1: What is Schizophrenia */}
                <div id="what-is-schizophrenia" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">What is Schizophrenia?</h2>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Schizophrenia is a severe, chronic psychiatric disorder that deeply affects how a person thinks, feels, and behaves. It is characterized by periods of psychosis—meaning the individual experiences a disconnection from reality. People with schizophrenia may seem like they have lost touch with the world around them, which can be highly distressing for them, their families, and friends.
                    </p>
                    <p>
                      Despite widespread stigma and misunderstanding, individuals with schizophrenia are rarely violent. With proper, ongoing psychiatric care, the symptoms can be managed effectively. Because the disorder heavily involves chemical imbalances in the brain (particularly dopamine and glutamate), psychiatric medication is considered the absolute cornerstone of treatment.
                    </p>
                    <p>
                      According to the World Health Organization (WHO), schizophrenia affects approximately 24 million people worldwide. At Sunrise Human Care Services, we provide rigorous, evidence-based medication management alongside supportive therapy to help patients stabilize and integrate safely into their communities.
                    </p>
                  </div>
                </div>

                {/* Section 2: Symptoms Overview */}
                <div id="symptoms" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">Understanding the Symptoms</h2>
                  <p className="font-barlow text-lg text-stone-600 leading-relaxed mb-8">
                    Clinically, the symptoms of schizophrenia are broken down into three main categories: Positive, Negative, and Cognitive. Understanding these categories is essential for effective treatment planning.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Sparkles className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Positive Symptoms</h4>
                      <p className="font-barlow text-sm text-stone-500">The presence of abnormal behaviors or experiences that are not based in reality.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <EyeOff className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Negative Symptoms</h4>
                      <p className="font-barlow text-sm text-stone-500">The absence or reduction of normal emotional responses or behaviors.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Brain className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Cognitive Symptoms</h4>
                      <p className="font-barlow text-sm text-stone-500">Difficulties with memory, attention, and executive functioning.</p>
                    </div>
                  </div>
                </div>

                {/* Section 3: Positive Symptoms */}
                <div id="positive-symptoms" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Positive Symptoms (Psychosis)</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      "Positive" does not mean good; in psychiatry, it means the *addition* of an abnormal experience. These symptoms indicate a break from reality (psychosis) and are usually the most noticeable signs of the disorder. Antipsychotic medications are highly effective at treating these symptoms.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li><strong>Hallucinations:</strong> Hearing voices (the most common type), seeing things, or smelling things that others do not experience.</li>
                      <li><strong>Delusions:</strong> Strong, false beliefs that are not grounded in reality (e.g., believing someone is trying to harm them, or believing they have exceptional fame or power).</li>
                      <li><strong>Thought Disorders:</strong> Unusual or dysfunctional ways of thinking, resulting in disorganized speech or stopping mid-sentence (thought blocking).</li>
                      <li><strong>Movement Disorders:</strong> Agitated body movements or, conversely, remaining completely motionless and unresponsive (catatonia).</li>
                    </ul>
                  </div>
                </div>

                {/* Section 4: Negative Symptoms */}
                <div id="negative-symptoms" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Negative Symptoms</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      "Negative" refers to the *absence* or disruption of normal behaviors and emotions. These symptoms can often be mistaken for clinical depression and are sometimes harder to treat than positive symptoms.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li><strong>Flat Affect:</strong> Reduced expression of emotions via facial expression or voice tone.</li>
                      <li><strong>Avolition:</strong> Reduced motivation or difficulty beginning and sustaining planned activities.</li>
                      <li><strong>Anhedonia:</strong> Reduced feelings of pleasure in everyday life.</li>
                      <li><strong>Alogia:</strong> Reduced speaking or poverty of speech.</li>
                      <li>Social withdrawal and self-neglect (poor hygiene).</li>
                    </ul>
                  </div>
                </div>

                {/* Section 5: Cognitive Symptoms */}
                <div id="cognitive-symptoms" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Cognitive Symptoms</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Cognitive symptoms can be subtle, but for many patients, they are the most disabling aspect of the disorder, severely impacting their ability to maintain employment or live independently.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li>Poor "executive functioning" (the ability to understand information and use it to make decisions).</li>
                      <li>Trouble focusing or paying attention.</li>
                      <li>Problems with "working memory" (the ability to use information immediately after learning it).</li>
                    </ul>
                  </div>
                </div>

                {/* Section 6: Local SEO & Accessibility */}
                <div id="local-treatment" className="scroll-mt-32 bg-stone-900 text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />
                  
                  <h3 className="font-barlow font-normal text-3xl md:text-4xl tracking-tighter mb-6 relative z-10">
                    Psychiatric Care in <span className="font-instrument-serif italic text-orange-400">Darby, PA</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="font-barlow text-stone-300 text-lg leading-relaxed space-y-4">
                      <p>
                        At Sunrise Human Care Services, we provide expert psychiatric evaluation and medication management for severe mental illnesses. Located at 869 Main Street in Darby, we proudly serve Delaware County with compassion and clinical rigor.
                      </p>
                      <div className="flex items-center gap-4 bg-orange-500/20 border border-orange-500/30 p-4 rounded-2xl">
                        <Shield className="w-8 h-8 text-orange-400 flex-shrink-0" />
                        <div>
                          <h4 className="font-barlow font-bold text-white">100% Medicaid Acceptance</h4>
                          <p className="text-sm text-stone-400">We exclusively accept Medicaid to ensure critical, life-saving psychiatric care reaches those who need it most.</p>
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
                      Holli O'Donnell is a dedicated mental health professional at Sunrise Human Care Services, specializing in the management of severe and persistent mental illness, including schizophrenia and schizoaffective disorders.
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