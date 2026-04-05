"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, Phone, ChevronRight,
  MapPin, Shield, Activity, Scale, Heart,
  ChevronDown
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import AppointmentSection from '@/components/Appointment/AppointmentSection';
import SectionTag from '@/components/ui/section-tag';
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I know if I or my loved one has an eating disorder?",
    answer: "Warning signs include a severe preoccupation with weight, food, calories, and body image; restrictive eating or skipping meals; frequent episodes of binge eating; purging behaviors (like vomiting or excessive exercise); and intense body dissatisfaction. If these thoughts and behaviors interfere with daily life, it is time for a professional assessment."
  },
  {
    question: "Do you treat severe Anorexia Nervosa?",
    answer: "We provide outpatient psychiatric care and therapy for eating disorders. However, severe Anorexia Nervosa often requires intensive medical stabilization or inpatient care if a patient is medically compromised. We conduct thorough assessments to determine the appropriate level of care and will coordinate with specialized inpatient facilities if necessary."
  },
  {
    question: "Can medication help with eating disorders?",
    answer: "Yes, psychiatric medication can be an important component of treatment, particularly for Binge Eating Disorder or Bulimia Nervosa, and to treat co-occurring conditions like Depression, Anxiety, or OCD that frequently accompany eating disorders. Our psychiatric team carefully manages medications to support your overall recovery."
  },
  {
    question: "How long does eating disorder treatment take?",
    answer: "Recovery from an eating disorder is typically a gradual, long-term process that varies based on the severity of the condition and individual needs. It requires consistency, patience, and a comprehensive approach. Many people require months to years of support to achieve full, sustainable recovery and a healthy relationship with food."
  },
  {
    question: "Is full recovery from an eating disorder possible?",
    answer: "Absolutely. While it is a challenging journey, many people achieve full recovery with the right professional support. Recovery involves normalizing eating behaviors, addressing the underlying emotional pain or trauma, and fundamentally changing how you view and value your body."
  }
];

export default function EatingDisordersClient() {
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
              alt="Eating Disorders Treatment in Darby PA" 
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
                Eating Disorders Treatment <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal">in Darby, PA</span>
              </h1>
              <p className="text-stone-300 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                Break free from the exhausting cycle of disordered eating. Our compassionate psychiatric team provides specialized care to help you heal your relationship with food, your body, and yourself.
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
                    <a href="#what-are-eating-disorders" onClick={(e) => scrollToSection(e, 'what-are-eating-disorders')} className="block hover:text-orange-500 transition-colors">What Are Eating Disorders?</a>
                    <a href="#types" onClick={(e) => scrollToSection(e, 'types')} className="block hover:text-orange-500 transition-colors">Types We Treat</a>
                    <a href="#anorexia" onClick={(e) => scrollToSection(e, 'anorexia')} className="block hover:text-orange-500 transition-colors ml-4">Anorexia Nervosa</a>
                    <a href="#bulimia" onClick={(e) => scrollToSection(e, 'bulimia')} className="block hover:text-orange-500 transition-colors ml-4">Bulimia Nervosa</a>
                    <a href="#binge-eating" onClick={(e) => scrollToSection(e, 'binge-eating')} className="block hover:text-orange-500 transition-colors ml-4">Binge Eating Disorder</a>
                    <a href="#local-treatment" onClick={(e) => scrollToSection(e, 'local-treatment')} className="block hover:text-orange-500 transition-colors">Treatment in Darby, PA</a>
                    <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="block hover:text-orange-500 transition-colors">Frequently Asked Questions</a>
                  </nav>

                  <div className="mt-8 pt-6 border-t border-stone-100">
                    <h4 className="font-barlow font-bold text-stone-900 text-sm mb-3">Related Services</h4>
                    <div className="space-y-2">
                      <Link href="/psychiatric-evaluations-darby-pa" className="flex items-center text-sm text-stone-500 hover:text-orange-500 transition-colors group">
                        <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" /> Psychiatric Evaluations
                      </Link>
                      <Link href="/individual-therapy-darby-pa" className="flex items-center text-sm text-stone-500 hover:text-orange-500 transition-colors group">
                        <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" /> Individual Therapy
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* MAIN CONTENT AREA */}
              <div className="lg:w-3/4 space-y-16">
                
                {/* Section 1: What are Eating Disorders */}
                <div id="what-are-eating-disorders" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">What Are Eating Disorders?</h2>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Eating disorders are severe, complex mental health conditions characterized by dangerous disturbances in eating behaviors and related thoughts and emotions. They are not a lifestyle choice or a phase; they are potentially life-threatening illnesses that require specialized professional intervention.
                    </p>
                    <p>
                      People with eating disorders often experience an overwhelming, obsessive preoccupation with food, body weight, and body shape. This obsession can completely hijack a person's life, destroying their physical health, emotional well-being, relationships, and ability to function. 
                    </p>
                    <p>
                      At Sunrise Human Care Services, we understand that an eating disorder is rarely just about food. It is often a deeply ingrained coping mechanism for dealing with profound emotional pain, trauma, anxiety, or a need for control. Our psychiatric and therapeutic team works to uncover and heal these root causes while simultaneously helping you normalize your eating behaviors.
                    </p>
                  </div>
                </div>

                {/* Section 2: Types Overview */}
                <div id="types" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">Types of Eating Disorders We Treat</h2>
                  <p className="font-barlow text-lg text-stone-600 leading-relaxed mb-8">
                    We provide outpatient psychiatric care and therapy for various eating disorders. If a patient requires intensive medical stabilization, we will coordinate care with a higher-level facility. Our core outpatient focus includes:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Scale className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Anorexia Nervosa</h4>
                      <p className="font-barlow text-sm text-stone-500">Severe food restriction, intense fear of gaining weight, and a distorted body image.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Activity className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Bulimia Nervosa</h4>
                      <p className="font-barlow text-sm text-stone-500">Cycles of binge eating followed by purging behaviors (vomiting, excessive exercise, laxatives).</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Heart className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Binge Eating</h4>
                      <p className="font-barlow text-sm text-stone-500">Consuming large amounts of food in a short period, accompanied by feelings of intense shame and loss of control.</p>
                    </div>
                  </div>
                </div>

                {/* Section 3: Anorexia */}
                <div id="anorexia" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Anorexia Nervosa</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Anorexia Nervosa involves an intense, terrifying fear of gaining weight, leading to severe food restriction and a significantly distorted perception of one's own body size and shape. Individuals with Anorexia may view themselves as overweight even when they are dangerously malnourished.
                    </p>
                    <p>
                      <strong>Symptoms and Warning Signs:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li>Drastic, noticeable weight loss or inability to maintain a normal weight</li>
                      <li>Obsessive counting of calories, fat grams, and nutrition facts</li>
                      <li>Skipping meals, making excuses not to eat, or eating only "safe" foods</li>
                      <li>Intense anxiety regarding weight gain or being "fat"</li>
                      <li>Physical signs: constant feeling of being cold, lethargy, hair loss (thinning), and loss of menstruation in women</li>
                    </ul>
                  </div>
                </div>

                {/* Section 4: Bulimia */}
                <div id="bulimia" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Bulimia Nervosa</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Bulimia Nervosa is characterized by a devastating cycle: consuming unusually large amounts of food in a short time (bingeing) while feeling a complete loss of control, followed immediately by desperate attempts to avoid weight gain (purging). 
                    </p>
                    <p>
                      <strong>Symptoms and Warning Signs:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li>Frequent episodes of binge eating in secret</li>
                      <li>Purging behaviors: self-induced vomiting, abusing laxatives or diuretics, fasting, or excessive, driven exercise</li>
                      <li>Extreme preoccupation with body weight and shape dictating self-worth</li>
                      <li>Physical signs: chronic sore throat, swollen salivary glands (chipmunk cheeks), worn tooth enamel, and severe dehydration</li>
                    </ul>
                  </div>
                </div>

                {/* Section 5: Binge Eating */}
                <div id="binge-eating" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Binge Eating Disorder (BED)</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Binge Eating Disorder is the most common eating disorder in the United States. Like Bulimia, it involves frequent episodes of consuming very large amounts of food while feeling out of control. However, unlike Bulimia, these binges are not followed by purging behaviors.
                    </p>
                    <p>
                      <strong>Symptoms and Warning Signs:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li>Eating rapidly during binge episodes, often until uncomfortably full</li>
                      <li>Eating large amounts of food even when not physically hungry</li>
                      <li>Eating alone or in secret due to deep embarrassment</li>
                      <li>Feeling intense shame, guilt, depression, or disgust with oneself after bingeing</li>
                    </ul>
                  </div>
                </div>

                {/* Section 6: Local SEO & Accessibility */}
                <div id="local-treatment" className="scroll-mt-32 bg-stone-900 text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />
                  
                  <h3 className="font-barlow font-normal text-3xl md:text-4xl tracking-tighter mb-6 relative z-10">
                    Compassionate Eating Disorder Treatment in <span className="font-instrument-serif italic text-orange-400">Darby, PA</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="font-barlow text-stone-300 text-lg leading-relaxed space-y-4">
                      <p>
                        At Sunrise Human Care Services, we provide vital psychiatric support, medication management, and therapy for individuals battling eating disorders. Located at 869 Main Street in Darby, we serve the Delaware County community with empathy and expertise.
                      </p>
                      <div className="flex items-center gap-4 bg-orange-500/20 border border-orange-500/30 p-4 rounded-2xl">
                        <Shield className="w-8 h-8 text-orange-400 flex-shrink-0" />
                        <div>
                          <h4 className="font-barlow font-bold text-white">100% Medicaid Acceptance</h4>
                          <p className="text-sm text-stone-400">We exclusively accept Medicaid to ensure specialized psychiatric care is accessible to everyone in our community.</p>
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
                      Holli O'Donnell is a dedicated mental health professional at Sunrise Human Care Services, specializing in the diagnosis and evidence-based treatment of eating disorders and body image concerns.
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
