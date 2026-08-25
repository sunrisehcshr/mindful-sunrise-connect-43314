"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, Phone, ChevronRight,
  MapPin, Shield, Activity, Brain, CloudRain, Zap,
  ChevronDown
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import AppointmentSection from '@/components/Appointment/AppointmentSection';
import SectionTag from '@/components/ui/section-tag';
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How is depression different from just feeling sad?",
    answer: "While sadness is a normal human emotion triggered by difficult events, clinical depression is a persistent mood disorder. Sadness usually comes in waves and allows for moments of joy, whereas depression is a constant heavy cloud that affects your sleep, appetite, energy, and self-worth for weeks or months at a time."
  },
  {
    question: "Can therapy alone cure my depression?",
    answer: "For mild to moderate depression, therapy (especially Cognitive Behavioral Therapy) is often highly effective on its own. It helps you build coping skills and rewire negative thought patterns. However, for severe depression, a combination of therapy and medication is usually the gold standard of treatment."
  },
  {
    question: "How long does depression treatment take?",
    answer: "There is no set timeline, as it depends on the severity and type of depression. Many patients start noticing improvements in their sleep and energy levels within 4 to 6 weeks of starting treatment. Deeper emotional shifts often occur over 3 to 6 months of consistent therapy."
  },
  {
    question: "What if I'm too exhausted to even attend therapy?",
    answer: "Extreme fatigue is a core symptom of depression. We understand how hard it can be to take that first step. We offer telehealth appointments so you can begin treatment from the comfort of your home, removing the barrier of having to travel when you're feeling depleted."
  },
  {
    question: "Is depression genetic?",
    answer: "Genetics do play a role; if you have a first-degree relative with depression, your risk is higher. However, it's usually a combination of genetic vulnerability, brain chemistry, and environmental stressors (like trauma, loss, or chronic stress) that trigger a depressive episode."
  }
];

export default function DepressionClient() {
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
              src="/lovable-uploads/depression.webp" 
              alt="Depression Therapy in Darby PA" 
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
                Depression Treatment <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal">in Darby, PA</span>
              </h1>
              <p className="text-stone-300 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                Struggling with persistent sadness, exhaustion, or a loss of interest in life? You don't have to carry this weight alone. Our compassionate psychiatric providers and therapists are here to help you rediscover hope.
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
                    <a href="#what-is-depression" onClick={(e) => scrollToSection(e, 'what-is-depression')} className="block hover:text-orange-500 transition-colors">What is Depression?</a>
                    <a href="#types" onClick={(e) => scrollToSection(e, 'types')} className="block hover:text-orange-500 transition-colors">Types of Depression</a>
                    <a href="#mdd" onClick={(e) => scrollToSection(e, 'mdd')} className="block hover:text-orange-500 transition-colors ml-4">Major Depressive Disorder</a>
                    <a href="#pdd" onClick={(e) => scrollToSection(e, 'pdd')} className="block hover:text-orange-500 transition-colors ml-4">Persistent Depressive Disorder</a>
                    <a href="#sad" onClick={(e) => scrollToSection(e, 'sad')} className="block hover:text-orange-500 transition-colors ml-4">Seasonal Affective Disorder</a>
                    <a href="#local-treatment" onClick={(e) => scrollToSection(e, 'local-treatment')} className="block hover:text-orange-500 transition-colors">Treatment in Darby, PA</a>
                    <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="block hover:text-orange-500 transition-colors">Frequently Asked Questions</a>
                  </nav>

                  <div className="mt-8 pt-6 border-t border-stone-100">
                    <h4 className="font-barlow font-bold text-stone-900 text-sm mb-3">Related Services</h4>
                    <div className="space-y-2">
                      <Link href="/medication-management-darby-pa" className="flex items-center text-sm text-stone-500 hover:text-orange-500 transition-colors group">
                        <ChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" /> Medication Management
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
                
                {/* Section 1: What is Depression */}
                <div id="what-is-depression" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">What is Depression?</h2>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Depression (major depressive disorder) is a common and serious medical illness that negatively affects how you feel, the way you think, and how you act. Unlike the normal sadness or grief that accompanies life's challenges, depression is a persistent state that impairs your ability to function at work, at home, and in relationships.
                    </p>
                    <p>
                      The relationship between depression and overall mental health is profound. Untreated depression can lead to severe anxiety, substance use disorders, and chronic physical health issues like heart disease and weakened immune response. It fundamentally alters brain chemistry, specifically affecting neurotransmitters like serotonin and dopamine that regulate mood and energy.
                    </p>
                    <p>
                      According to the National Institute of Mental Health (NIMH), an estimated 21 million adults in the United States have had at least one major depressive episode. Despite its prevalence, the stigma surrounding depression often prevents people from seeking the care they need. At Sunrise Human Care Services, we provide a judgment-free, clinical environment to help you heal.
                    </p>
                  </div>
                </div>

                {/* Section 2: Types */}
                <div id="types" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">Types of Depression</h2>
                  <p className="font-barlow text-lg text-stone-600 leading-relaxed mb-8">
                    Depression isn't a single, uniform condition. It presents in various forms, each requiring a tailored clinical approach. The most common types of depression we treat include:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Brain className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Major Depressive Disorder</h4>
                      <p className="font-barlow text-sm text-stone-500">Severe, persistent low mood and loss of interest lasting for at least two weeks.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Activity className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Persistent Depressive (PDD)</h4>
                      <p className="font-barlow text-sm text-stone-500">A continuous, long-term, chronic form of depression lasting for two years or more.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <CloudRain className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Seasonal Affective (SAD)</h4>
                      <p className="font-barlow text-sm text-stone-500">Depression that occurs at a specific time of year, usually during winter months.</p>
                    </div>
                  </div>
                </div>

                {/* Section 3: MDD */}
                <div id="mdd" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Major Depressive Disorder (MDD) Symptoms and Causes</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Major Depressive Disorder (MDD) is the classic form of clinical depression. It involves episodes of overwhelming sadness and a loss of interest in previously enjoyed activities, severely impacting day-to-day life.
                    </p>
                    <p>
                      <strong>Causes:</strong> MDD is caused by a combination of genetic, biological, environmental, and psychological factors. Changes in brain function, particularly involving neurotransmitters, are significant. Major life changes, trauma, and severe stress can trigger an episode in vulnerable individuals.
                    </p>
                    <p>
                      <strong>Symptoms:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li>Persistent sad, anxious, or "empty" mood</li>
                      <li>Feelings of hopelessness or pessimism</li>
                      <li>Loss of interest or pleasure in hobbies and activities</li>
                      <li>Decreased energy, fatigue, or feeling "slowed down"</li>
                      <li>Difficulty sleeping, early-morning awakening, or oversleeping</li>
                      <li>Appetite and/or weight changes</li>
                      <li>Thoughts of death or suicide, or suicide attempts</li>
                    </ul>
                  </div>
                </div>

                {/* Section 4: PDD */}
                <div id="pdd" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Persistent Depressive Disorder (Dysthymia)</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Persistent Depressive Disorder (PDD), formerly known as dysthymia, is a continuous, long-term form of depression. While the symptoms may not be as severe as Major Depressive Disorder, they are chronic and can last for years, making it difficult to feel upbeat even on happy occasions.
                    </p>
                    <p>
                      <strong>Causes:</strong> The exact cause of PDD is unknown, but like MDD, it likely involves biological differences in the brain, inherited traits, and life events. People with PDD often have co-occurring anxiety disorders or substance use issues.
                    </p>
                    <p>
                      <strong>Symptoms:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li>Deep sadness or feelings of emptiness lasting for years</li>
                      <li>Low self-esteem and feelings of inadequacy</li>
                      <li>Chronic fatigue and lack of energy</li>
                      <li>Difficulty making decisions and poor concentration</li>
                      <li>A general feeling of "going through the motions" of life</li>
                    </ul>
                  </div>
                </div>

                {/* Section 5: SAD */}
                <div id="sad" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Seasonal Affective Disorder (SAD)</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Seasonal Affective Disorder is a type of depression related to changes in seasons. SAD begins and ends at about the same times every year. For most people with SAD, symptoms start in the fall and continue into the winter months, sapping energy and making them feel moody.
                    </p>
                    <p>
                      <strong>Causes:</strong> The reduced level of sunlight in fall and winter may cause winter-onset SAD. This decrease in sunlight may disrupt your body's internal clock (circadian rhythm) and cause a drop in serotonin, a brain chemical that affects mood. It can also disrupt the balance of the body's level of melatonin, which plays a role in sleep patterns and mood.
                    </p>
                    <p>
                      <strong>Symptoms:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li>Oversleeping (hypersomnia)</li>
                      <li>Appetite changes, especially a craving for foods high in carbohydrates</li>
                      <li>Weight gain</li>
                      <li>Tiredness or low energy despite getting enough sleep</li>
                      <li>Social withdrawal or "hibernating"</li>
                    </ul>
                  </div>
                </div>

                {/* Section 6: Local SEO & Accessibility */}
                <div id="local-treatment" className="scroll-mt-32 bg-stone-900 text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />
                  
                  <h3 className="font-barlow font-normal text-3xl md:text-4xl tracking-tighter mb-6 relative z-10">
                    Accessible Depression Treatment in <span className="font-instrument-serif italic text-orange-400">Darby, PA</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="font-barlow text-stone-300 text-lg leading-relaxed space-y-4">
                      <p>
                        At Sunrise Human Care Services, we proudly serve the Darby community and surrounding areas in Delaware County. Conveniently located at 869 Main Street, we make high-quality psychiatric care and depression therapy accessible.
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
                    <h3 className="font-barlow font-bold text-2xl text-stone-900">Holli O'Donnell, Licensed Mental Health Professional</h3>
                    <p className="font-barlow text-stone-500 mt-2 text-sm leading-relaxed">
                      Holli O'Donnell is a dedicated mental health professional at Sunrise Human Care Services, specializing in the diagnosis and evidence-based treatment of mood disorders, anxiety, and complex psychiatric conditions.
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