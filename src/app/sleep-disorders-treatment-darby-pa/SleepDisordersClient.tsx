"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, Phone, ChevronRight,
  MapPin, Shield, Moon, Clock, Brain,
  ChevronDown
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import AppointmentSection from '@/components/Appointment/AppointmentSection';
import SectionTag from '@/components/ui/section-tag';
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I know if I have a sleep disorder?",
    answer: "Occasional restless nights are normal. However, if you consistently have trouble falling asleep, staying asleep, or if you wake up feeling unrefreshed and exhausted for more than a month, it is likely a clinical sleep disorder. If your sleep issues are affecting your mood, focus, or ability to work, it is time to seek professional evaluation."
  },
  {
    question: "What is CBT-I and how does it work?",
    answer: "Cognitive Behavioral Therapy for Insomnia (CBT-I) is the gold standard, first-line treatment for chronic insomnia. Unlike sleeping pills, which only provide a temporary fix, CBT-I addresses the underlying thoughts and behaviors that ruin sleep. It involves sleep restriction, stimulus control, and cognitive restructuring to literally retrain your brain to sleep."
  },
  {
    question: "Do I have to take sleeping pills?",
    answer: "Not necessarily. While psychiatric medication can be a helpful short-term tool to break a severe cycle of insomnia, our goal is long-term, sustainable sleep without reliance on heavy sedatives. We strongly prioritize behavioral interventions (like CBT-I) and, when necessary, utilize non-habit-forming medications to support your sleep architecture."
  },
  {
    question: "Can mental health issues cause sleep disorders?",
    answer: "Absolutely. The relationship is highly bidirectional. Conditions like Anxiety, Depression, and PTSD frequently cause severe insomnia or hypersomnia (oversleeping). Conversely, chronic sleep deprivation can trigger or drastically worsen mental health conditions. We treat both the sleep disorder and the underlying mental health condition simultaneously."
  },
  {
    question: "What is Sleep Apnea and do you treat it?",
    answer: "Sleep Apnea is a physical medical condition where breathing repeatedly stops and starts during sleep. While our psychiatric team does not prescribe CPAP machines, we frequently screen for Sleep Apnea during our psychiatric evaluations. If we suspect Sleep Apnea is the root cause of your mental health symptoms, we will coordinate a referral to a specialized sleep medicine clinic while continuing to support your mental health."
  }
];

export default function SleepDisordersClient() {
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
              alt="Sleep Disorders Treatment in Darby PA" 
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
                Sleep Disorders Treatment <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal">in Darby, PA</span>
              </h1>
              <p className="text-stone-300 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                Exhausted but unable to sleep? Chronic insomnia and sleep disturbances destroy your mental health. Our psychiatric team provides the evidence-based care you need to finally get the rest you deserve.
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
                    <a href="#what-are-sleep-disorders" onClick={(e) => scrollToSection(e, 'what-are-sleep-disorders')} className="block hover:text-orange-500 transition-colors">What Are Sleep Disorders?</a>
                    <a href="#types" onClick={(e) => scrollToSection(e, 'types')} className="block hover:text-orange-500 transition-colors">Types of Sleep Disorders</a>
                    <a href="#insomnia" onClick={(e) => scrollToSection(e, 'insomnia')} className="block hover:text-orange-500 transition-colors ml-4">Insomnia</a>
                    <a href="#hypersomnia" onClick={(e) => scrollToSection(e, 'hypersomnia')} className="block hover:text-orange-500 transition-colors ml-4">Hypersomnia</a>
                    <a href="#circadian" onClick={(e) => scrollToSection(e, 'circadian')} className="block hover:text-orange-500 transition-colors ml-4">Circadian Rhythm Disorders</a>
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
                
                {/* Section 1: What are Sleep Disorders */}
                <div id="what-are-sleep-disorders" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">What Are Sleep Disorders?</h2>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Sleep disorders are conditions that severely impair a person's ability to get enough quality sleep, leading to significant distress and impaired functioning during waking hours. While almost everyone experiences a bad night of sleep occasionally, sleep disorders represent a chronic pattern that damages physical and mental health.
                    </p>
                    <p>
                      The link between sleep and mental health is profoundly bidirectional. Chronic sleep deprivation rapidly deteriorates cognitive function, emotional stability, and impulse control, often triggering or severely worsening conditions like Anxiety and Depression. Conversely, underlying psychiatric conditions are frequently the root cause of sleep disturbances. 
                    </p>
                    <p>
                      According to the CDC, millions of Americans suffer from chronic sleep disorders, with insomnia being the most prevalent. At Sunrise Human Care Services, we treat sleep not as an afterthought, but as a foundational pillar of psychiatric health. We provide targeted interventions to restore your sleep architecture.
                    </p>
                  </div>
                </div>

                {/* Section 2: Types Overview */}
                <div id="types" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">Types of Sleep Disorders We Treat</h2>
                  <p className="font-barlow text-lg text-stone-600 leading-relaxed mb-8">
                    The International Classification of Sleep Disorders (ICSD) categorizes these conditions based on pathophysiology. Our psychiatric team specializes in treating sleep disorders that are heavily intertwined with mental health:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Moon className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Insomnia</h4>
                      <p className="font-barlow text-sm text-stone-500">Chronic difficulty falling asleep, staying asleep, or waking up too early.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Brain className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Hypersomnia</h4>
                      <p className="font-barlow text-sm text-stone-500">Excessive daytime sleepiness and prolonged nighttime sleep that is unrefreshing.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Clock className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Circadian Rhythm</h4>
                      <p className="font-barlow text-sm text-stone-500">Disruptions to the internal body clock, making standard sleep-wake times impossible.</p>
                    </div>
                  </div>
                </div>

                {/* Section 3: Insomnia */}
                <div id="insomnia" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Insomnia Symptoms and Causes</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Insomnia is the most common sleep disorder. It can be acute (short-term, usually tied to a specific stressful event) or chronic (lasting for at least three nights a week for three months or more). 
                    </p>
                    <p>
                      <strong>Causes:</strong> Chronic insomnia is heavily linked to severe stress, Generalized Anxiety Disorder, Depression, and PTSD. Racing thoughts, physical hyperarousal, and poor sleep hygiene (like excessive screen time or irregular schedules) are primary culprits.
                    </p>
                    <p>
                      <strong>Symptoms:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li>Lying awake for long periods before falling asleep</li>
                      <li>Waking up frequently during the night and struggling to return to sleep</li>
                      <li>Waking up too early in the morning</li>
                      <li>Feeling completely unrefreshed upon waking</li>
                      <li>Severe daytime fatigue, irritability, and impaired concentration</li>
                    </ul>
                  </div>
                </div>

                {/* Section 4: Hypersomnia */}
                <div id="hypersomnia" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Hypersomnia Symptoms and Causes</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Hypersomnia is characterized by excessive daytime sleepiness despite getting an adequate (or even prolonged) amount of sleep at night. It goes far beyond normal tiredness.
                    </p>
                    <p>
                      <strong>Causes:</strong> While it can be caused by neurological conditions (like Narcolepsy) or breathing disorders (like Sleep Apnea), hypersomnia is also a very common symptom of Major Depressive Disorder, Bipolar Disorder (during the depressive phase), and certain psychiatric medications.
                    </p>
                    <p>
                      <strong>Symptoms:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li>Struggling to stay awake during the day, often requiring long naps</li>
                      <li>Naps do not provide relief or energy (unrefreshing sleep)</li>
                      <li>Difficulty waking up from long sleep (sleep drunkenness)</li>
                      <li>Brain fog, slow thinking, and memory issues</li>
                    </ul>
                  </div>
                </div>

                {/* Section 5: Circadian */}
                <div id="circadian" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Circadian Rhythm Sleep-Wake Disorders</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      These disorders occur when your internal biological clock is out of sync with your environment. The most common type we treat in psychiatric settings is Delayed Sleep Phase Disorder (often seen in ADHD and Depression), where individuals cannot fall asleep until the early hours of the morning and cannot wake up at a standard time.
                    </p>
                  </div>
                </div>

                {/* Section 6: Local SEO & Accessibility */}
                <div id="local-treatment" className="scroll-mt-32 bg-stone-900 text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />
                  
                  <h3 className="font-barlow font-normal text-3xl md:text-4xl tracking-tighter mb-6 relative z-10">
                    Accessible Sleep Disorder Treatment in <span className="font-instrument-serif italic text-orange-400">Darby, PA</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="font-barlow text-stone-300 text-lg leading-relaxed space-y-4">
                      <p>
                        At Sunrise Human Care Services, we provide highly effective, evidence-based treatments like CBT-I and safe psychiatric medication management for severe sleep disorders. Located at 869 Main Street in Darby, we proudly serve Delaware County.
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
                      Holli H is a dedicated mental health professional at Sunrise Human Care Services, specializing in the psychiatric evaluation of sleep disorders and their deep connection to anxiety, depression, and trauma.
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