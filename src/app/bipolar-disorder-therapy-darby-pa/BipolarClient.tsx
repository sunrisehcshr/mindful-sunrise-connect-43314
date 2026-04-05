"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, Phone, ChevronRight,
  MapPin, Shield, Activity, Brain, ArrowUpCircle, ArrowDownCircle,
  ChevronDown
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import AppointmentSection from '@/components/Appointment/AppointmentSection';
import SectionTag from '@/components/ui/section-tag';
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is the difference between Bipolar I and Bipolar II?",
    answer: "Bipolar I Disorder involves severe manic episodes that last at least 7 days or require hospitalization, often accompanied by depressive episodes. Bipolar II Disorder involves less severe manic periods (called hypomania) alternating with deep depressive episodes. Both require professional treatment but may need different medication strategies."
  },
  {
    question: "Is medication always necessary to treat bipolar disorder?",
    answer: "For the vast majority of individuals, yes. Bipolar disorder is deeply rooted in brain chemistry. Mood stabilizers or antipsychotic medications are typically the cornerstone of treatment to prevent extreme highs and lows. Therapy is then used alongside medication to manage triggers, rebuild relationships, and develop coping skills."
  },
  {
    question: "Can bipolar disorder be cured?",
    answer: "Bipolar disorder is a lifelong, chronic condition and cannot be permanently 'cured'. However, it is highly treatable. With a consistent, customized treatment plan involving medication management and psychotherapy, most people with bipolar disorder can achieve long-term mood stability and lead incredibly successful, fulfilling lives."
  },
  {
    question: "What should family members know about supporting someone with bipolar disorder?",
    answer: "Family support is crucial. Family members should learn to recognize the early warning signs of both manic and depressive episodes. It's important to encourage treatment adherence, help maintain a calm environment with regular sleep schedules, and participate in family therapy to improve communication and boundaries."
  },
  {
    question: "Is bipolar disorder genetic?",
    answer: "Yes, bipolar disorder has one of the strongest genetic links of all psychiatric conditions. If you have a first-degree relative (parent or sibling) with bipolar disorder, your risk of developing the condition is significantly higher, though environmental factors and severe stress also play a role in triggering the onset."
  }
];

export default function BipolarClient() {
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
              alt="Bipolar Disorder Treatment in Darby PA" 
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
                Bipolar Disorder Treatment <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal">in Darby, PA</span>
              </h1>
              <p className="text-stone-300 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                Experiencing extreme shifts in mood, energy, and activity levels? Our clinical team provides the expert medication management and therapy required to achieve lasting stability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#appointment" onClick={(e) => { e.preventDefault(); document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <button className="bg-orange-500 hover:bg-orange-400 text-stone-900 font-barlow font-bold px-4 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap rounded-full transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-orange-500/20">
                    <Calendar className="w-5 h-5" />
                    Book an Evaluation
                  </button>
                </Link>
                <a href="tel:+18146202162">
                  <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-barlow font-bold px-4 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap rounded-full transition-all duration-300 flex items-center justify-center w-full sm:w-auto backdrop-blur-sm">
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
                    <a href="#what-is-bipolar" onClick={(e) => scrollToSection(e, 'what-is-bipolar')} className="block hover:text-orange-500 transition-colors">What is Bipolar Disorder?</a>
                    <a href="#types" onClick={(e) => scrollToSection(e, 'types')} className="block hover:text-orange-500 transition-colors">Types of Bipolar Disorder</a>
                    <a href="#bipolar-1" onClick={(e) => scrollToSection(e, 'bipolar-1')} className="block hover:text-orange-500 transition-colors ml-4">Bipolar I</a>
                    <a href="#bipolar-2" onClick={(e) => scrollToSection(e, 'bipolar-2')} className="block hover:text-orange-500 transition-colors ml-4">Bipolar II</a>
                    <a href="#cyclothymia" onClick={(e) => scrollToSection(e, 'cyclothymia')} className="block hover:text-orange-500 transition-colors ml-4">Cyclothymia</a>
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
                
                {/* Section 1: What is Bipolar */}
                <div id="what-is-bipolar" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">What is Bipolar Disorder?</h2>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Bipolar disorder, formerly known as manic depression, is a complex mental health condition that causes extreme shifts in mood, energy, activity levels, and concentration. These shifts can make it profoundly difficult to carry out day-to-day tasks, maintain stable relationships, and succeed in professional environments.
                    </p>
                    <p>
                      Unlike the normal ups and downs everyone goes through, the mood swings of bipolar disorder are severe. They can range from the intense highs of mania (feeling euphoric, unusually irritable, or invincible) to the crushing lows of depression (feeling hopeless, lethargic, or suicidal). These mood episodes can last for days, weeks, or even months.
                    </p>
                    <p>
                      Bipolar disorder is a lifelong condition, but it is highly treatable. Because of the neurochemical nature of the disorder, successful management almost always requires a specialized combination of psychiatric medication and targeted psychotherapy. At Sunrise Human Care Services, we provide the clinical expertise necessary to help you achieve and maintain mood stability.
                    </p>
                  </div>
                </div>

                {/* Section 2: Types */}
                <div id="types" className="scroll-mt-32">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-900 mb-6">Types of Bipolar Disorder</h2>
                  <p className="font-barlow text-lg text-stone-600 leading-relaxed mb-8">
                    The DSM-5 categorizes bipolar disorder into three main types, defined by the severity and duration of the manic and depressive episodes.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <ArrowUpCircle className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Bipolar I</h4>
                      <p className="font-barlow text-sm text-stone-500">Defined by severe manic episodes lasting at least 7 days, often accompanied by depressive episodes.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <Activity className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Bipolar II</h4>
                      <p className="font-barlow text-sm text-stone-500">Characterized by depressive episodes and less severe manic periods known as hypomania.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                        <ArrowDownCircle className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-barlow font-bold text-stone-900 text-lg mb-2">Cyclothymia</h4>
                      <p className="font-barlow text-sm text-stone-500">A milder, chronic form involving numerous periods of hypomania and mild depression over 2+ years.</p>
                    </div>
                  </div>
                </div>

                {/* Section 3: Bipolar I */}
                <div id="bipolar-1" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Bipolar I Disorder Symptoms and Causes</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Bipolar I Disorder is diagnosed when an individual experiences at least one full manic episode. This manic episode must last for at least one week, or be so severe that the person requires hospitalization. Most people with Bipolar I will also experience episodes of major depression, though this is not strictly required for a diagnosis.
                    </p>
                    <p>
                      <strong>Causes:</strong> The exact cause is a complex mix of genetics, neurochemistry (imbalances in neurotransmitters like dopamine and serotonin), and altered brain structure. High-stress environments or traumatic events can trigger the first episode.
                    </p>
                    <p>
                      <strong>Symptoms of Mania:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li>Abnormally upbeat, jumpy, or wired feeling (euphoria)</li>
                      <li>Increased activity, energy, or agitation</li>
                      <li>Exaggerated sense of well-being and self-confidence (grandiosity)</li>
                      <li>Decreased need for sleep (feeling rested after only a few hours)</li>
                      <li>Unusual talkativeness or racing thoughts</li>
                      <li>Poor decision-making (e.g., reckless spending, risky sexual encounters)</li>
                    </ul>
                  </div>
                </div>

                {/* Section 4: Bipolar II */}
                <div id="bipolar-2" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Bipolar II Disorder Symptoms</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Bipolar II Disorder is not a "milder" form of Bipolar I, but a separate diagnosis. While the manic episodes (hypomania) are less extreme and do not cause the severe impairment seen in Bipolar I, the depressive episodes in Bipolar II are often very deep, prolonged, and debilitating.
                    </p>
                    <p>
                      <strong>Symptoms of Hypomania:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                      <li>Similar symptoms to full mania (increased energy, talkativeness) but less severe</li>
                      <li>Does not cause significant impairment in social or occupational functioning</li>
                      <li>Often feels like a period of high productivity and creativity</li>
                      <li>Can dangerously escalate into severe depression if left untreated</li>
                    </ul>
                  </div>
                </div>

                {/* Section 5: Cyclothymia */}
                <div id="cyclothymia" className="scroll-mt-32">
                  <h3 className="font-barlow font-bold text-2xl md:text-3xl text-stone-900 mb-4">Cyclothymic Disorder</h3>
                  <div className="prose prose-stone max-w-none font-barlow text-lg text-stone-600 leading-relaxed">
                    <p>
                      Cyclothymia (Cyclothymic Disorder) is a chronic mood disorder characterized by numerous periods of hypomanic symptoms and periods of depressive symptoms that last for at least two years (one year in children and adolescents). However, the symptoms do not meet the full diagnostic requirements for a hypomanic episode or a major depressive episode.
                    </p>
                  </div>
                </div>

                {/* Section 6: Local SEO & Accessibility */}
                <div id="local-treatment" className="scroll-mt-32 bg-stone-900 text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />
                  
                  <h3 className="font-barlow font-normal text-3xl md:text-4xl tracking-tighter mb-6 relative z-10">
                    Accessible Bipolar Treatment in <span className="font-instrument-serif italic text-orange-400">Darby, PA</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="font-barlow text-stone-300 text-lg leading-relaxed space-y-4">
                      <p>
                        At Sunrise Human Care Services, we proudly serve the Darby community and surrounding areas in Delaware County. Conveniently located at 869 Main Street, we make high-quality psychiatric evaluations, mood stabilization, and therapy accessible.
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
                      Holli O'Donnell is a dedicated mental health professional at Sunrise Human Care Services, specializing in the diagnosis and evidence-based treatment of mood disorders and complex psychiatric conditions.
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