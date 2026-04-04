"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Heart, Phone, ArrowRight, CheckCircle2, 
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

export default function FamilyTherapyClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do all family members need to attend therapy sessions?",
      answer: "Ideally, all household members participate, as family therapy works best when everyone is involved. However, we can begin with available family members and incorporate others as therapy progresses. Our therapists are skilled at adapting the process to your family's specific situation."
    },
    {
      question: "Are children included in family therapy?",
      answer: "Yes, children are included in our family therapy sessions as they're important members of the family system. Our experienced therapists adapt their approach based on children's ages, using age-appropriate techniques to ensure everyone can meaningfully participate."
    },
    {
      question: "How long does family therapy typically last?",
      answer: "Family therapy generally ranges from 8-20 sessions, depending on your family's specific needs and goals. Some families complete treatment in a few months, while others benefit from longer-term counseling. We'll discuss expected timeframes during your initial consultation."
    },
    {
      question: "Will the therapist take sides in family conflicts?",
      answer: "No, our therapists remain neutral and do not take sides. Their role is to help all family members communicate effectively, understand each other's perspectives, and work together toward positive change."
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
              src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918387/family-counseling-talk-from-home-parents-listen-t-2026-03-25-02-29-59-utc_a9m3eu.jpg" 
              alt="Family Therapy in Darby PA" 
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
                Family Counseling in PA
              </span>
              <h1 className="font-barlow font-normal text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-md">
                Family Therapy in <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal drop-shadow-md">Darby, PA</span>
              </h1>
              <p className="text-stone-100 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
                Expert family counseling designed to help your household improve communication, resolve deep-rooted conflicts, and strengthen emotional connections in a safe environment. We proudly accept Medicaid insurance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#appointment">
                  <button className="bg-orange-500 hover:bg-orange-400 text-stone-950 font-barlow font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-orange-500/20">
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
          
          {/* SECTION 1: Understanding Family Therapy */}
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
                  <SectionTag>Healing the Household</SectionTag>
                  <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight leading-tight">
                    Building Stronger Families Together
                  </h2>
                  <div className="prose prose-stone prose-lg font-barlow text-stone-600">
                    <p>
                      Family dynamics can be complex, and when conflict arises, it affects everyone in the home. <strong>Family therapy in Darby, PA</strong> at Sunrise Human Care provides a structured, supportive space where all members can voice their concerns, feel heard, and work collaboratively toward healing.
                    </p>
                    <p>
                      Whether you are dealing with a specific crisis, navigating a difficult transition, or simply wanting to improve your family&apos;s overall communication, our licensed <strong>family counselors in Delaware County</strong> are here to guide you. We view the family as an interconnected system—when one part shifts, the whole system can heal.
                    </p>
                    <p>
                      Our sessions are entirely non-judgmental. We don&apos;t look for who is to blame; instead, we focus on identifying unhealthy patterns and equipping your family with the tools to build a resilient, loving household. We are proud to exclusively accept <strong>Medicaid insurance</strong>, ensuring that high-quality family counseling is accessible and affordable for our community.
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
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Neutral & Safe</h3>
                    <p className="font-barlow text-stone-500 text-sm">Our therapists never take sides, ensuring every family member feels validated and secure.</p>
                  </Card>
                  <Card className="flex flex-col items-center text-center h-full bg-white/60 p-8">
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Open Dialogue</h3>
                    <p className="font-barlow text-stone-500 text-sm">Learn to communicate effectively without escalating into anger or shutting down.</p>
                  </Card>
                  <Card className="flex flex-col items-center text-center h-full bg-white/60 p-8">
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Systemic Healing</h3>
                    <p className="font-barlow text-stone-500 text-sm">We address the root causes of dysfunction to heal the entire family unit, not just the symptoms.</p>
                  </Card>
                  <Card className="flex flex-col items-center text-center h-full bg-white/60 p-8">
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">All Ages Welcome</h3>
                    <p className="font-barlow text-stone-500 text-sm">We adapt our therapeutic approach to accommodate children, teens, and adults in the same room.</p>
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
                <SectionTag>Navigating Family Hurdles</SectionTag>
                <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight mt-4 mb-6">
                  What We Treat in Family Therapy
                </h2>
                <p className="text-stone-500 font-barlow text-lg leading-relaxed">
                  Our licensed professionals in Darby, PA are equipped to help your family manage and overcome a wide spectrum of relational and behavioral challenges.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Parent-Child Conflict",
                    desc: "Bridging the gap between generations. We help parents and children (or teens) understand each other's perspectives and establish respectful boundaries.",
                  },
                  {
                    title: "Blended Family Issues",
                    desc: "Navigating the complexities of step-parenting and step-siblings. We provide strategies to foster unity and ease the transition into a new family structure.",
                  },
                  {
                    title: "Grief and Loss",
                    desc: "Supporting the family through the devastating loss of a loved one. We create a space for collective mourning while honoring individual grieving processes.",
                  },
                  {
                    title: "Behavioral Problems",
                    desc: "Addressing acting out, school issues, or defiance in children. We explore the systemic root causes and develop consistent parenting strategies.",
                  },
                  {
                    title: "Major Life Transitions",
                    desc: "Helping families adapt to divorce, relocation, chronic illness, or financial stress without the household falling apart.",
                  },
                  {
                    title: "Communication Breakdown",
                    desc: "Breaking cycles of yelling, silent treatment, or misunderstanding. We teach active listening and emotional regulation for the whole family.",
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
                    <span className="font-instrument-serif italic text-orange-400 font-normal">Family Therapies</span>
                  </h2>
                  <div className="space-y-6 font-barlow text-stone-300 text-lg leading-relaxed">
                    <p>
                      At Sunrise Human Care, we rely on evidence-based practices (EBPs) to ensure your family receives the highest standard of care. Our approaches are clinically proven to restructure family dynamics and promote long-term psychological health.
                    </p>
                    <p>
                      Our licensed therapists in Delaware County hold advanced training in systemic interventions. We tailor our methods to fit your family&apos;s unique cultural background, size, and specific challenges.
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
                      title: "Structural Family Therapy (SFT)",
                      desc: "Focuses on the rules and boundaries within the family system. SFT helps reorganize the family structure to ensure parents maintain healthy authority while children feel safe and supported."
                    },
                    {
                      title: "Systemic Family Therapy",
                      desc: "Examines the family as an interconnected unit. Rather than isolating one person as 'the problem,' this approach looks at how unconscious family patterns contribute to the current conflict."
                    },
                    {
                      title: "Narrative Family Therapy",
                      desc: "Helps families separate themselves from their problems. By reframing their shared story, families can externalize blame and work together to overcome challenges as a united front."
                    },
                    {
                      title: "Attachment-Based Family Therapy",
                      desc: "Primarily used for families dealing with depressed or anxious adolescents. It focuses on repairing ruptured relationships and rebuilding trust to create a secure emotional base."
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
                    Family Therapy FAQs
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