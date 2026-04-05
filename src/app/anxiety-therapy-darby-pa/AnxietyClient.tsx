"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, Phone, ChevronRight, CheckCircle2,
  MapPin, Shield, Activity, Brain, HeartPulse, Wind,
  ChevronDown
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import AppointmentSection from '@/components/Appointment/AppointmentSection';
import SectionTag from '@/components/ui/section-tag';
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is anxiety genetic?",
    answer: "Yes, there is a genetic component to anxiety disorders. Having a family member with an anxiety disorder can increase your risk. However, genetics are only one factor; environmental stressors, trauma, and brain chemistry also play significant roles."
  },
  {
    question: "Can therapy help with anxiety disorders?",
    answer: "Absolutely. Therapy, particularly Cognitive Behavioral Therapy (CBT), is considered the gold standard for anxiety treatment. It helps individuals identify and challenge anxious thoughts, develop coping strategies, and gradually face feared situations in a safe environment."
  },
  {
    question: "What is the difference between a panic attack and an anxiety attack?",
    answer: "A panic attack is sudden, intense, and often occurs without an obvious trigger, accompanied by severe physical symptoms like a racing heart and shortness of breath. An 'anxiety attack' is not a clinical term, but people usually use it to describe a period of intense worry and distress that builds gradually, often in response to a specific stressor."
  },
  {
    question: "How do I know if my anxiety is a disorder?",
    answer: "Occasional anxiety is a normal part of life. However, if your anxiety is persistent, difficult to control, out of proportion to the actual danger, and interferes with your daily activities, relationships, or work, it may be an anxiety disorder that requires professional treatment."
  },
  {
    question: "Will I need medication for my anxiety?",
    answer: "Not necessarily. Many people effectively manage anxiety through therapy and lifestyle changes alone. However, for moderate to severe anxiety, a combination of therapy and psychiatric medication (such as SSRIs or SNRIs) is often the most effective approach. Our providers will evaluate your specific needs."
  }
];

export default function AnxietyClient() {
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
              src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_1600/v1774918015/diverse-couple-on-a-therapy-session-in-a-psycholog-2026-03-25-04-41-39-utc_jebtlc.jpg" 
              alt="Anxiety Treatment in Darby PA" 
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
                Anxiety Treatment <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal">in Darby, PA</span>
              </h1>
              <p className="text-stone-300 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                Experiencing constant worry, panic, or social fear? You are not alone. Our evidence-based anxiety therapies help you regain control, find peace, and live a fulfilling life.
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
                    <a href="#what-is-anxiety" onClick={(e) => scrollToSection(e, 'what-is-anxiety')} className="block hover:text-orange-500 transition-colors">What Are Anxiety Disorders?</a>
                    <a href="#types" onClick={(e) => scrollToSection(e, 'types')} className="block hover:text-orange-500 transition-colors">Types of Anxiety Disorders</a>
                    <a href="#gad" onClick={(e) => scrollToSection(e, 'gad')} className="block hover:text-orange-500 transition-colors ml-4">Generalized Anxiety (GAD)</a>
                    <a href="#panic" onClick={(e) => scrollToSection(e, 'panic')} className="block hover:text-orange-500 transition-colors ml-4">Panic Disorder</a>
                    <a href="#social" onClick={(e) => scrollToSection(e, 'social')} className="block hover:text-orange-500 transition-colors ml-4">Social Anxiety</a>
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
                
                {/* Section 1: What is Anxiety */}
                <div id="what-is-anxiety" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">What Are Anxiety Disorders?</h2>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Anxiety disorders are conditions that impair a person's emotional stability, cognitive function, and daily life through persistent, excessive fear or worry. While feeling anxious in stressful situations (like a job interview or public speaking) is a normal human response, anxiety disorders signify a pattern of distress that requires professional intervention.
                    </p>
                    <p>
                      Anxiety is deeply intertwined with overall mental health. Chronic anxiety can contribute to the development of other conditions, such as Depression and Sleep Disorders. The physical toll is also significant, often manifesting as muscle tension, fatigue, headaches, and gastrointestinal issues.
                    </p>
                    <p>
                      According to the Anxiety and Depression Association of America (ADAA), anxiety disorders are the most common mental illness in the U.S., affecting over 40 million adults every year. Yet, despite being highly treatable, less than 40% of those suffering receive treatment. At Sunrise Human Care Services, we are committed to changing that statistic.
                    </p>
                  </div>
                </div>

                {/* Section 2: Types */}
                <div id="types" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">Types of Anxiety Disorders</h2>
                  <p className="font-barlow text-lg text-stone-600 leading-relaxed mb-8">
                    The Diagnostic and Statistical Manual of Mental Disorders (DSM-5) categorizes anxiety based on symptom presentation and triggers. The most common types of anxiety disorders treated by our mental health professionals include:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Activity className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Generalized Anxiety</h4>
                      <p className="font-barlow text-sm text-stone-500">Chronic, exaggerated worry about everyday life events with no obvious reasons for concern.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <HeartPulse className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Panic Disorder</h4>
                      <p className="font-barlow text-sm text-stone-500">Sudden, repeated episodes of intense fear accompanied by physical symptoms.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Wind className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Social Anxiety</h4>
                      <p className="font-barlow text-sm text-stone-500">Overwhelming fear of social situations, judgment, and interacting with others.</p>
                    </div>
                  </div>
                </div>

                {/* Section 3: GAD */}
                <div id="gad" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Generalized Anxiety Disorder (GAD) Symptoms and Causes</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Generalized Anxiety Disorder (GAD) is characterized by persistent and excessive worry about various things—including money, health, family, or work—even when there is little or no reason to worry. Individuals with GAD often expect disaster and struggle to control their anxiety.
                    </p>
                    <p>
                      <strong>Causes:</strong> GAD arises from a complex interaction of biological and environmental factors. Genetics play a role, as does brain chemistry (specifically, differences in the way the brain perceives and processes threats). Environmental factors like chronic stress, childhood trauma, or significant life changes can also trigger the onset of GAD.
                    </p>
                    <p>
                      <strong>Symptoms:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li>Restlessness or feeling "on edge"</li>
                      <li>Being easily fatigued</li>
                      <li>Difficulty concentrating or mind going blank</li>
                      <li>Irritability and muscle tension</li>
                      <li>Difficulty falling or staying asleep</li>
                    </ul>
                  </div>
                </div>

                {/* Section 4: Panic */}
                <div id="panic" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Panic Disorder Symptoms and Causes</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Panic Disorder involves sudden, recurring panic attacks—periods of intense fear or discomfort that reach a peak within minutes. People with panic disorder often worry about when the next attack will happen and actively avoid places where panic attacks have occurred in the past.
                    </p>
                    <p>
                      <strong>Causes:</strong> Like other anxiety disorders, genetics and severe stress are major contributors. Some research suggests that people with panic disorder may have a highly sensitive "fight or flight" response, causing their bodies to react to minor physical sensations as if they were life-threatening.
                    </p>
                    <p>
                      <strong>Symptoms:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li>Palpitations, pounding heart, or accelerated heart rate</li>
                      <li>Sweating, trembling, or shaking</li>
                      <li>Sensations of shortness of breath, smothering, or choking</li>
                      <li>Feelings of impending doom or loss of control</li>
                      <li>Nausea or abdominal distress</li>
                    </ul>
                  </div>
                </div>

                {/* Section 5: Social */}
                <div id="social" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Social Anxiety Disorder Symptoms and Causes</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Social Anxiety Disorder goes beyond standard shyness. It is an intense, persistent fear of being watched, judged, or negatively evaluated by others in social or performance situations. It can severely impact a person's ability to attend school, work, or form relationships.
                    </p>
                    <p>
                      <strong>Causes:</strong> It can be a learned behavior—some people may develop the condition after an embarrassing social situation. There may also be a biological link, involving an overactive amygdala (the part of the brain that controls fear response).
                    </p>
                    <p>
                      <strong>Symptoms:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li>Intense fear of interacting with strangers</li>
                      <li>Fear that others will notice you look anxious (blushing, sweating)</li>
                      <li>Avoiding doing things or speaking to people out of fear of embarrassment</li>
                      <li>Rapid heart rate, trembling, or feeling your mind go blank in social settings</li>
                    </ul>
                  </div>
                </div>

                {/* Section 6: Local SEO & Accessibility */}
                <div id="local-treatment" className="scroll-mt-32 bg-stone-900 text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />
                  
                  <h3 className="font-barlow font-normal text-3xl md:text-4xl tracking-tighter mb-6 relative z-10">
                    Accessible Anxiety Treatment in <span className="font-instrument-serif italic text-orange-400">Darby, PA</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="font-barlow text-stone-300 text-lg leading-relaxed space-y-4">
                      <p>
                        At Sunrise Human Care Services, we proudly serve the Darby community and surrounding areas in Delaware County. Conveniently located at 869 Main Street, we make high-quality psychiatric care and anxiety therapy accessible.
                      </p>
                      <div className="flex items-center gap-4 bg-orange-500/20 border border-orange-500/30 p-4 rounded-2xl">
                        <Shield className="w-8 h-8 text-orange-400 flex-shrink-0" />
                        <div>
                          <h4 className="font-barlow font-bold text-white">100% Medicaid Acceptance</h4>
                          <p className="text-sm text-stone-400">We exclusively accept Medicaid to ensure critical care reaches those who need it most.</p>
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
                      Holli O'Donnell is a dedicated mental health professional at Sunrise Human Care Services, specializing in the diagnosis and evidence-based treatment of anxiety disorders, mood disorders, and trauma.
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