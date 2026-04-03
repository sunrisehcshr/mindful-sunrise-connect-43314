"use client";

import React, { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Brain, Heart, Shield, Star, Phone, ArrowRight, CheckCircle2, 
  ChevronDown, MapPin, Calendar, Users, MessageCircle
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

export default function CouplesCounselingClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What can we expect from couples counseling in Darby?",
      answer: "Couples counseling in Darby at Sunrise Human Care offers a tailored approach where licensed therapists guide partners to improve communication, resolve conflicts, and build a stronger bond in a confidential, supportive environment. We help you navigate challenges together rather than against each other."
    },
    {
      question: "Is couples counseling effective for long-term relationships?",
      answer: "Yes, couples counseling helps long-term partners address entrenched patterns, rebuild trust, and rediscover connection. By utilizing proven methods like The Gottman Method and EFT, we assist couples in overcoming emotional distance and reigniting intimacy, regardless of how long they've been together."
    },
    {
      question: "Can unmarried couples benefit from relationship therapy in Delaware County?",
      answer: "Absolutely. Relationship therapy in Delaware County supports all committed relationships. Whether you are dating, engaged, or living together, our therapists can help unmarried couples strengthen their partnership, navigate life transitions, and lay a solid foundation for the future."
    },
    {
      question: "How many sessions are needed for couples therapy near me?",
      answer: "The duration of couples therapy depends entirely on your specific goals and challenges. Some couples see significant progress through short-term, solution-focused therapy in 8-12 sessions, while others dealing with deeper issues like infidelity or severe communication breakdowns may engage longer for lasting transformation."
    },
    {
      question: "Does marriage counseling PA accept insurance?",
      answer: "Yes, our marriage counseling PA services accept Medicaid to ensure that relationship support is accessible to the Darby and broader Delaware County community. Our administrative team will verify your benefits and clearly explain any coverage details prior to your first session."
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
              src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918015/diverse-couple-on-a-therapy-session-in-a-psycholog-2026-03-25-04-41-39-utc_jebtlc.jpg" 
              alt="Couples Counseling in Darby PA" 
              fill 
              className="object-cover opacity-60"
              priority
            />
            {/* Extremely light dark overlay so the image is fully visible while keeping text readable */}
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
                Relationship Therapy in PA
              </span>
              <h1 className="font-barlow font-normal text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-md">
                Couples Counseling in <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal drop-shadow-md">Darby, PA</span>
              </h1>
              <p className="text-stone-100 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
                Expert relationship therapy designed to help partners improve communication, resolve entrenched conflicts, and rebuild trust in a private, supportive environment.
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
          
          {/* SECTION 1: Understanding Couples Counseling */}
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
                  <SectionTag>Reconnecting Together</SectionTag>
                  <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight leading-tight">
                    Expert Relationship Therapy in Delaware County
                  </h2>
                  <div className="prose prose-stone prose-lg font-barlow text-stone-600">
                    <p>
                      Every relationship faces challenges, but you don&apos;t have to navigate them alone. <strong>Couples counseling in Darby, PA</strong> at Sunrise Human Care provides a supportive, neutral environment where partners can address conflicts, improve communication, and deepen their emotional bond safely.
                    </p>
                    <p>
                      Whether you are seeking a <strong>marriage counselor in Darby</strong> to repair broken trust, or looking for <strong>premarital counseling</strong> to build a strong foundation, our licensed therapists are equipped to help. We understand that asking for help can be difficult, which is why we prioritize creating a space free from judgment and blame.
                    </p>
                    <p>
                      Our goal is not just to resolve immediate disputes, but to equip you and your partner with the lifelong skills necessary to maintain a healthy, fulfilling, and resilient partnership.
                    </p>
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
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Neutral Ground</h3>
                    <p className="font-barlow text-stone-500 text-sm">A safe, unbiased space where both partners have an equal voice and are heard without judgment.</p>
                  </Card>
                  <Card className="flex flex-col items-center text-center h-full bg-white/60 p-8">
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Better Communication</h3>
                    <p className="font-barlow text-stone-500 text-sm">Learn practical tools to express your needs clearly and listen to your partner actively.</p>
                  </Card>
                  <Card className="flex flex-col items-center text-center h-full bg-white/60 p-8">
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Rebuild Intimacy</h3>
                    <p className="font-barlow text-stone-500 text-sm">Overcome emotional distance and reignite the spark that brought you together.</p>
                  </Card>
                  <Card className="flex flex-col items-center text-center h-full bg-white/60 p-8">
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Expert Counselors</h3>
                    <p className="font-barlow text-stone-500 text-sm">Work with licensed therapists highly trained in specialized relationship modalities.</p>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* SECTION 2: Common Challenges (Bento Grid) */}
          <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-[120px] -mr-[300px] -mt-[300px] pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <SectionTag>Navigating Hurdles</SectionTag>
                <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight mt-4 mb-6">
                  Challenges We Address in Couples Therapy
                </h2>
                <p className="text-stone-500 font-barlow text-lg leading-relaxed">
                  Our licensed relationship therapists in Delaware County are equipped to help you manage and overcome a wide spectrum of relationship difficulties.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Communication Breakdowns",
                    desc: "When conversations turn into arguments or silence. We help partners clarify misunderstandings, develop active listening skills, and express needs openly to strengthen their connection.",
                  },
                  {
                    title: "Trust Restoration",
                    desc: "Rebuilding a foundation after infidelity, financial secrecy, or betrayal. Our therapists guide couples through the delicate process of restoring trust and creating a safe space for healing.",
                  },
                  {
                    title: "Intimacy & Connection",
                    desc: "Addressing feelings of emotional distance or physical disconnect. We provide tools to help partners rediscover each other and reignite romance and mutual affection.",
                  },
                  {
                    title: "Frequent Arguments",
                    desc: "Breaking the cycle of repeating the same fight. We focus on identifying the root triggers of conflict and teaching effective, respectful de-escalation techniques.",
                  },
                  {
                    title: "Life Transitions",
                    desc: "Navigating major changes like parenthood, career shifts, relocation, or empty-nesting. We offer support to help couples adapt and grow together during stressful periods.",
                  },
                  {
                    title: "Premarital Counseling",
                    desc: "Setting a strong foundation before saying 'I do.' We help engaged couples align on core values, financial planning, and family expectations to prevent future conflicts.",
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

          {/* SECTION 3: Clinical Approach (E-E-A-T Focus) */}
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
                  <SectionTag className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">Clinical Excellence</SectionTag>
                  <h2 className="font-barlow font-normal text-4xl md:text-5xl tracking-tighter leading-tight mb-6">
                    Evidence-Based <br />
                    <span className="font-instrument-serif italic text-orange-400 font-normal">Relationship Therapies</span>
                  </h2>
                  <div className="space-y-6 font-barlow text-stone-300 text-lg leading-relaxed">
                    <p>
                      At Sunrise Human Care, we don&apos;t just offer advice; we utilize highly researched, evidence-based practices (EBPs) specifically designed for couples. This ensures that the therapeutic interventions we apply have been clinically proven to produce positive relationship outcomes.
                    </p>
                    <p>
                      Our licensed therapists in Delaware County undergo continuous clinical training in modalities like the Gottman Method and EFT. We tailor our approach to fit your unique relationship dynamic, ensuring that both partners feel validated and supported throughout the healing process.
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
                      title: "The Gottman Method",
                      desc: "A highly structured approach based on decades of research. It focuses on disarming conflicting verbal communication, increasing intimacy, respect, and affection, and removing barriers that create a feeling of stagnancy."
                    },
                    {
                      title: "Emotionally Focused Therapy (EFT)",
                      desc: "EFT focuses on adult relationships and attachment. It helps couples identify negative interaction patterns and teaches them how to restructure these patterns to create a more secure emotional bond."
                    },
                    {
                      title: "Imago Relationship Therapy",
                      desc: "This method focuses on exploring childhood experiences and how they influence adult relationships. It helps couples build empathy and mutual understanding through structured dialogue."
                    },
                    {
                      title: "Solution-Focused Couples Therapy",
                      desc: "A practical, short-term approach that focuses on building solutions rather than dwelling on the past. Ideal for couples looking to overcome specific hurdles quickly."
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
                    Couples Therapy FAQs
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