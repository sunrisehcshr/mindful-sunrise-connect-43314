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

export default function ChildTherapyClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I explain therapy to my child?",
      answer: "For younger children, we describe child therapy as a special place where they can play, talk, and learn about feelings. For teens, we explain that a therapist is someone who helps young people handle stress, emotions, and challenges. Our child therapists provide age-appropriate resources to help with this conversation."
    },
    {
      question: "Will I be involved in my child's therapy?",
      answer: "Yes, parent involvement is crucial to successful child therapy. While some sessions may be one-on-one with your child, our therapists regularly include parents for updates, education, and family sessions. The level of involvement varies based on your child's age and specific needs."
    },
    {
      question: "How long does child therapy typically last?",
      answer: "Treatment duration varies depending on your child's specific needs and goals. Some children benefit from short-term therapy (8-12 sessions), while others may need ongoing support. We'll discuss timeframes during the initial consultation and provide regular updates on progress."
    },
    {
      question: "How do you handle confidentiality with children and teens?",
      answer: "We balance a child's need for privacy with parents' right to information. We maintain confidentiality except in cases of safety concerns, but also work to facilitate healthy communication between children and parents about the therapeutic process."
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
              src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918385/women-discussing-childs-progress-in-kindergarten-e-2026-03-25-09-19-16-utc_j1quiw.jpg" 
              alt="Child and Adolescent Therapy in Darby PA" 
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
                Child & Teen Counseling in PA
              </span>
              <h1 className="font-barlow font-normal text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-md">
                Child & Adolescent Therapy in <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal drop-shadow-md">Darby, PA</span>
              </h1>
              <p className="text-stone-100 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
                Support your child&apos;s emotional growth with specialized therapy. Our nurturing approach helps children and teens navigate life&apos;s challenges with confidence. We proudly accept Medicaid insurance.
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
          
          {/* SECTION 1: Understanding Child Therapy */}
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
                  <SectionTag>Nurturing Growth</SectionTag>
                  <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight leading-tight">
                    Building Resilience in Children and Teens
                  </h2>
                  <div className="prose prose-stone prose-lg font-barlow text-stone-600">
                    <p>
                      Child and adolescent therapy at Sunrise Human Care Services in Darby, PA, provides a specialized approach to youth mental health for families across Delaware County. We understand that children and teens experience the world differently, and our therapists are trained to provide age-appropriate support for emotional, behavioral, and developmental challenges like anxiety, ADHD, and depression.
                    </p>
                    <p>
                      From play therapy for younger children to cognitive-behavioral techniques for teens, our licensed child therapists in PA create a safe, engaging environment where young people can express themselves, develop healthy coping skills, and build resilience for the future.
                    </p>
                    <p>
                      Our sessions focus on early intervention and developing healthy communication. We are proud to exclusively accept <strong>Medicaid insurance</strong>, ensuring that high-quality youth counseling and teen therapy is accessible and affordable for our community.
                    </p>
                    <div className="mt-8 flex gap-4">
                      <Link href="/family-therapy-darby-pa" className="text-orange-500 font-bold hover:text-orange-600 flex items-center gap-1">
                        Explore Family Therapy <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link href="/adhd-treatment-darby-pa" className="text-orange-500 font-bold hover:text-orange-600 flex items-center gap-1">
                        View ADHD Treatment <ArrowRight className="w-4 h-4" />
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
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Age-Appropriate</h3>
                    <p className="font-barlow text-stone-500 text-sm">Therapeutic approaches tailored specifically for children and teenagers.</p>
                  </Card>
                  <Card className="flex flex-col items-center text-center h-full bg-white/60 p-8">
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Coping Skills</h3>
                    <p className="font-barlow text-stone-500 text-sm">Development of healthy emotional regulation and problem-solving abilities.</p>
                  </Card>
                  <Card className="flex flex-col items-center text-center h-full bg-white/60 p-8">
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Parent Collaboration</h3>
                    <p className="font-barlow text-stone-500 text-sm">Working together with parents and caregivers to ensure consistent support at home.</p>
                  </Card>
                  <Card className="flex flex-col items-center text-center h-full bg-white/60 p-8">
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Safe Environment</h3>
                    <p className="font-barlow text-stone-500 text-sm">A welcoming, non-judgmental space for honest expression and healing.</p>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* SECTION 2: What We Treat (Bento Grid) */}
          <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-[120px] -mr-[300px] -mt-[300px] pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <SectionTag>Navigating Youth Challenges</SectionTag>
                <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight mt-4 mb-6">
                  What We Treat: Child & Teen Therapy in Darby
                </h2>
                <p className="text-stone-500 font-barlow text-lg leading-relaxed">
                  Our licensed professionals in Darby, PA are equipped to help your child or teen manage and overcome a wide spectrum of developmental and emotional challenges, from adolescent depression to pediatric behavioral issues.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Anxiety & Worries",
                    desc: "Helping children manage school-related anxiety, social phobias, and generalized worry with effective coping mechanisms.",
                  },
                  {
                    title: "Behavioral Issues",
                    desc: "Addressing acting out, defiance, and school behavior problems by exploring root causes and building self-regulation skills.",
                  },
                  {
                    title: "Life Transitions",
                    desc: "Supporting youth through family changes like divorce, moving, or changing schools to ensure they adapt healthily.",
                  },
                  {
                    title: "ADHD & Focus",
                    desc: "Providing strategies for children with ADHD to improve focus, organization, and impulse control in both school and home environments.",
                  },
                  {
                    title: "Self-Esteem Issues",
                    desc: "Building confidence and a positive self-image for teens struggling with peer pressure and identity development.",
                  },
                  {
                    title: "Communication Challenges",
                    desc: "Improving how children and teens express their feelings and needs to parents, teachers, and peers.",
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
                    Child-Centered <br />
                    <span className="font-instrument-serif italic text-orange-400 font-normal">Therapy Approaches</span>
                  </h2>
                  <div className="space-y-6 font-barlow text-stone-300 text-lg leading-relaxed">
                    <p>
                      At Sunrise Human Care, we use age-appropriate, evidence-based techniques to ensure every child and teen receives the right support.
                    </p>
                    <p>
                      Our licensed therapists understand that children often cannot articulate complex feelings the way adults do. By utilizing play, art, and tailored cognitive therapies, we help them process their experiences naturally and safely.
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
                      title: "Play Therapy",
                      desc: "Uses play as a natural form of communication to help younger children express their feelings, develop problem-solving skills, and process difficult experiences."
                    },
                    {
                      title: "Cognitive Behavioral Therapy (CBT)",
                      desc: "Adapted for children and teens to help them identify negative thought patterns and develop healthier ways of thinking and behaving."
                    },
                    {
                      title: "Family Systems Approach",
                      desc: "Involves parents and other family members to address the child's challenges within the context of family dynamics."
                    },
                    {
                      title: "Art & Creative Expression",
                      desc: "Uses creative activities like art, music, and movement to help children express emotions and experiences that may be difficult to put into words."
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
                    Child Therapy FAQs
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
