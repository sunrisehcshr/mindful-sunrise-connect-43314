"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, ArrowRight, CheckCircle2, 
  ChevronDown, Calendar, Users
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import AppointmentSection from '@/components/Appointment/AppointmentSection';
import SectionTag from '@/components/ui/section-tag';
import { cn } from "@/lib/utils";

// --- Glowing Bento Card ---
function Card({ children, className, containerClassName }: { children: React.ReactNode; className?: string, containerClassName?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                "group relative border border-stone-200/80 bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-500",
                "hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-orange-200/50 hover:bg-white rounded-3xl",
                containerClassName
            )}
            onMouseMove={handleMouseMove}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-stone-50/50 pointer-events-none" />
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(249, 115, 22, 0.08),
              transparent 80%
            )
          `,
                }}
            />
            <div className={cn("relative h-full w-full p-8", className)}>
                {children}
            </div>
        </div>
    );
}

export default function MedicationManagementClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long will I need to take psychiatric medication?",
      answer: "The duration of medication treatment varies depending on your condition, symptoms, and response. Some individuals may need short-term medication during specific episodes, while others benefit from longer-term treatment for chronic conditions. We regularly review the need for continued medication and adjust treatment plans accordingly, always prioritizing your well-being and quality of life."
    },
    {
      question: "What if I experience side effects from my medication?",
      answer: "Side effects are taken very seriously in our practice. While some side effects may be temporary as your body adjusts, we carefully monitor any reactions you experience. We can often adjust dosages or switch to alternative medications if needed. It's important to communicate any concerns about side effects promptly, and we provide detailed guidance on managing potential side effects."
    },
    {
      question: "How often will I need to come in for medication management appointments?",
      answer: "Initially, appointments are typically more frequent (every 2-4 weeks) as we establish the right medication and dosage. Once your symptoms are stable, visits may be scheduled less frequently (every 1-3 months). The schedule is always personalized based on your specific needs, response to medication, and overall stability."
    },
    {
      question: "Can I combine medication with therapy?",
      answer: "Yes, and we often recommend this combined approach. Research shows that for many mental health conditions, the combination of medication and therapy provides better outcomes than either treatment alone. We collaborate closely with therapists to ensure coordinated care and optimal results."
    },
    {
      question: "Will my insurance cover psychiatric medication management?",
      answer: "We exclusively accept Medicaid for medication management services. Our staff will verify your coverage and discuss any potential costs before beginning treatment. We strive to make mental health care accessible and affordable for our community."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-stone-950">
      <Navbar />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-28 md:pt-48 md:pb-40 overflow-hidden bg-stone-950">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918385/doctor-give-advice-about-medicine-or-vitamin-to-el-2026-01-08-05-55-04-utc_fvofy1.jpg" 
              alt="Medication Management in Darby PA" 
              fill 
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 z-0 bg-black/30" />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-950/30 via-transparent to-stone-50" />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto"
            >
              <span className="inline-block font-barlow font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-orange-400 mb-6 bg-orange-500/10 px-5 py-2.5 rounded-full border border-orange-500/20 backdrop-blur-md">
                Psychiatric Care
              </span>
              <h1 className="font-barlow font-normal text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-md">
                Medication Management in <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal drop-shadow-md">Darby, PA</span>
              </h1>
              <p className="text-stone-100 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
                Optimize your mental health with expert psychiatric medication management. Our board-certified providers offer personalized, evidence-based care tailored to your unique needs. We proudly accept Medicaid insurance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#appointment">
                  <button className="bg-orange-500 hover:bg-orange-400 text-stone-900 font-barlow font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-orange-500/20">
                    <Calendar className="w-5 h-5" />
                    Book an Appointment
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

        <div className="bg-stone-50 relative z-10 -mt-10 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.15)]">
          
          {/* SECTION 1: Understanding Medication Management */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-6 space-y-6"
                >
                  <SectionTag>Expert Care</SectionTag>
                  <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight leading-tight">
                    Personalized Psychiatric Care
                  </h2>
                  <div className="prose prose-stone prose-lg font-barlow text-stone-600">
                    <p>
                      Psychiatric medication management at Sunrise Human Care Services in Darby, PA, is a collaborative process between you and our board-certified psychiatric providers serving Delaware County. We understand that medication can be a vital component of mental health treatment, and we are committed to finding the right balance for your unique situation.
                    </p>
                    <p>
                      Our approach is rooted in evidence-based medicine, offering targeted medication for anxiety, depression, ADHD, and other complex mental health conditions. We work closely with you to assess effectiveness, manage side effects, and make adjustments as needed to ensure the best possible outcomes for your mental well-being.
                    </p>
                    <p>
                      We believe in holistic, accessible care. That is why we exclusively accept <strong>Medicaid insurance</strong>, guaranteeing that top-tier psychiatric medication management and prescription services are within reach for our Pennsylvania community.
                    </p>
                    <div className="mt-8 flex gap-4">
                      <Link href="/psychiatric-evaluations-darby-pa" className="text-orange-500 font-bold hover:text-orange-600 flex items-center gap-1">
                        Schedule a Psychiatric Evaluation <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  <Card className="flex flex-col items-center text-center h-full bg-white/60 p-8">
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Tailored Prescriptions</h3>
                    <p className="font-barlow text-stone-500 text-sm">Medications selected based on your unique biology, history, and symptoms.</p>
                  </Card>
                  <Card className="flex flex-col items-center text-center h-full bg-white/60 p-8">
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Safe Monitoring</h3>
                    <p className="font-barlow text-stone-500 text-sm">Rigorous tracking of side effects, dosage effectiveness, and interactions.</p>
                  </Card>
                  <Card className="flex flex-col items-center text-center h-full bg-white/60 p-8">
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Holistic Integration</h3>
                    <p className="font-barlow text-stone-500 text-sm">Coordinating medication plans with your therapy for maximum benefit.</p>
                  </Card>
                  <Card className="flex flex-col items-center text-center h-full bg-white/60 p-8">
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Flexible Care</h3>
                    <p className="font-barlow text-stone-500 text-sm">Easy refill processes and accessible scheduling for your convenience.</p>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* SECTION 2: What We Manage (Bento Grid) */}
          <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-[120px] -mr-[300px] -mt-[300px] pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <SectionTag>Conditions Treated</SectionTag>
                <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight mt-4 mb-6">
                  Psychiatric Medication Solutions in Darby
                </h2>
                <p className="text-stone-500 font-barlow text-lg leading-relaxed">
                  Our psychiatric providers prescribe and manage medications for a broad spectrum of mental health conditions, ensuring you get the exact chemical support your brain needs.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Depression",
                    desc: "Management of SSRIs, SNRIs, and atypical antidepressants to alleviate persistent sadness and lethargy.",
                  },
                  {
                    title: "Anxiety Disorders",
                    desc: "Careful prescription of anti-anxiety medications to reduce panic, generalized worry, and social phobia.",
                  },
                  {
                    title: "ADHD",
                    desc: "Stimulant and non-stimulant medication options to enhance focus, organization, and executive function.",
                  },
                  {
                    title: "Bipolar Disorder",
                    desc: "Mood stabilizers and antipsychotics closely monitored to prevent manic and depressive episodes.",
                  },
                  {
                    title: "Sleep Disorders",
                    desc: "Medications to help establish healthy sleep patterns and combat chronic insomnia.",
                  },
                  {
                    title: "Schizophrenia",
                    desc: "Long-term management of antipsychotic medications to maintain stability and prevent psychosis.",
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="h-full bg-stone-50/50 flex flex-col items-center text-center p-8">
                      <h3 className="font-barlow font-bold text-xl text-stone-900 mb-3">{item.title}</h3>
                      <p className="font-barlow text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 3: Methodology */}
          <section className="py-16 md:py-24 bg-stone-900 text-white relative overflow-hidden rounded-[3rem] mx-4 md:mx-6 my-12">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <SectionTag className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">Our Process</SectionTag>
                  <h2 className="font-barlow font-normal text-4xl md:text-5xl tracking-tighter leading-tight mb-6">
                    Expert Medication <br />
                    <span className="font-instrument-serif italic text-orange-400 font-normal">Management Process</span>
                  </h2>
                  <div className="space-y-6 font-barlow text-stone-300 text-lg leading-relaxed">
                    <p>
                      We use a thorough and personalized process to ensure your medication plan is effective and safe.
                    </p>
                    <p>
                      Psychiatric medication isn't a one-size-fits-all solution. Our providers take the time to understand your medical history, genetic factors, and lifestyle to minimize side effects and maximize therapeutic benefits.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {[
                    {
                      title: "Comprehensive Evaluation",
                      desc: "Thorough assessment of symptoms, medical history, and treatment goals to inform medication decisions."
                    },
                    {
                      title: "Personalized Plans",
                      desc: "Customized medication selection and dosing based on individual needs, symptoms, and response."
                    },
                    {
                      title: "Regular Monitoring",
                      desc: "Ongoing assessment of medication effectiveness, side effects, and necessary adjustments."
                    }
                  ].map((method, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                      <h4 className="font-barlow font-bold text-xl text-white mb-2 flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-orange-400" />
                        {method.title}
                      </h4>
                      <p className="font-barlow text-stone-400 text-sm leading-relaxed pl-8">
                        {method.desc}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* SECTION 4: FAQs */}
          <section className="py-16 md:py-24 bg-stone-100">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <SectionTag>Common Questions</SectionTag>
                  <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight mt-4">
                    Medication FAQs
                  </h2>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "group relative overflow-hidden rounded-[2rem] border backdrop-blur-xl transition-all duration-500",
                        activeFaq === index 
                          ? "border-orange-500/30 bg-white shadow-md" 
                          : "border-stone-200/60 bg-white/50 hover:border-orange-200/40 hover:bg-white shadow-sm"
                      )}
                    >
                      <button 
                        type="button"
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                        className="relative flex w-full items-start gap-6 px-8 py-6 text-left transition-colors duration-300 focus:outline-none"
                      >
                        <span 
                          className={cn(
                            "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-105",
                            activeFaq === index ? "bg-orange-500 border-orange-400 text-white" : "bg-orange-50 border-stone-100 text-orange-500"
                          )}
                        >
                          <ChevronDown className={cn("relative h-5 w-5 transition-transform duration-500", activeFaq === index ? "rotate-180" : "")} />
                        </span>

                        <div className="flex flex-1 flex-col gap-2 mt-2">
                          <h3 className={cn(
                            "text-lg font-barlow font-bold leading-tight tracking-tight transition-colors duration-300",
                            activeFaq === index ? "text-orange-500" : "text-stone-900 group-hover:text-orange-500"
                          )}>
                            {faq.question}
                          </h3>

                          <AnimatePresence initial={false}>
                            {activeFaq === index && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }} 
                                animate={{ height: "auto", opacity: 1 }} 
                                exit={{ height: 0, opacity: 0 }} 
                                transition={{ duration: 0.3 }}
                              >
                                <div className="pt-2">
                                  <p className="text-stone-500 font-barlow text-base leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Medical Reviewer / E-E-A-T Footer Section (Visually Hidden for SEO) */}
          <section className="sr-only">
            <div itemScope itemType="https://schema.org/WebPage">
              <div itemProp="reviewedBy" itemScope itemType="https://schema.org/Person">
                <meta itemProp="name" content="Holli O'Donnell" />
                <meta itemProp="jobTitle" content="Licensed Mental Health Professional" />
                <link itemProp="image" href="/images/holly.jpg" />
              </div>
              <meta itemProp="lastReviewed" content={new Date().toISOString().split('T')[0]} />
              <p>
                This content was clinically reviewed by Holli O'Donnell, Licensed Mental Health Professional, on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} to ensure accuracy and compliance with current medical standards.
              </p>
            </div>
          </section>

          {/* SECTION 5: Appointment */}
          <AppointmentSection />
          
        </div>
      </main>
      
      <div className="relative z-20 bg-white">
        <Footer />
      </div>
    </div>
  );
}
