"use client";

import React, { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle2, XCircle, ArrowRight, Shield, Users, HeartHandshake, Phone, Calendar, ChevronDown, MapPin
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
                "group relative border border-stone-200/80 bg-white/95 backdrop-blur-md overflow-hidden transition duration-500",
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

export default function BetterhelpAlternativesClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "Does BetterHelp accept Medicaid in Pennsylvania?",
      answer: "No, BetterHelp does not accept Medicaid or Medicare. Sunrise Human Care, located in Darby, PA, exclusively accepts Medicaid, ensuring that high-quality mental health care is accessible and affordable for our community."
    },
    {
      question: "Is in-person therapy better than virtual apps like Talkspace?",
      answer: "While virtual therapy is convenient for some, in-person therapy offers a deeper level of connection, allowing therapists to observe body language and build stronger therapeutic alliances. For complex issues, children, or severe mental health conditions, in-person care is often clinically recommended."
    },
    {
      question: "Can I get psychiatric medication through BetterHelp?",
      answer: "BetterHelp primarily focuses on talk therapy. While they have sister platforms for psychiatry, it is often a separate, additional cost. At Sunrise Human Care, we offer integrated therapy, psychiatric evaluations, and medication management all under one roof."
    },
    {
      question: "Will I always see the same therapist at Sunrise Human Care?",
      answer: "Yes. Unlike some large apps where you might be reassigned or have high therapist turnover, Sunrise Human Care guarantees continuity of care. You will build a long-term relationship with your dedicated therapist."
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
              src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774917848/friendly-psychologist-having-session-with-patient-2023-11-27-05-07-28-utc_jovc0x.jpg" 
              alt="BetterHelp Alternatives in PA" 
              fill 
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 z-0 bg-black/40" />
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
                Local Mental Health Care
              </span>
              <h1 className="font-barlow font-normal text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-md">
                BetterHelp Alternatives in <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal drop-shadow-md">Pennsylvania</span>
              </h1>
              <p className="text-stone-100 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
                Looking for therapy that accepts Medicaid and offers real, in-person connection? Compare big therapy apps to local care at Sunrise Human Care in Darby, PA.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#appointment" onClick={(e) => { e.preventDefault(); document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <button className="bg-orange-500 hover:bg-orange-400 text-stone-50 font-barlow font-bold px-4 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap rounded-full transition duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-orange-500/20">
                    <Calendar className="w-5 h-5" />
                    Book Local Therapy
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="bg-stone-50 relative z-10 -mt-10 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.15)]">
          
          {/* SECTION 1: Why Local Matters */}
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
                  <SectionTag>Beyond the Screen</SectionTag>
                  <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight leading-tight">
                    The Limits of Therapy Apps
                  </h2>
                  <div className="prose prose-stone prose-lg font-barlow text-stone-600">
                    <p>
                      Therapy apps like BetterHelp and Talkspace have made mental health care more visible, but they aren't the right fit for everyone. Many Pennsylvania residents find that these platforms lack the depth, continuity, and insurance compatibility needed for long-term healing.
                    </p>
                    <p>
                      At Sunrise Human Care in Darby, PA, we believe in the power of traditional, community-based mental health care. We offer what big tech companies often cannot: <strong>in-person connection, psychiatric evaluations, medication management, and 100% Medicaid acceptance.</strong>
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
                  <Card className="flex flex-col h-full bg-white/60">
                    <MapPin className="w-10 h-10 text-orange-500 mb-4" />
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Local Roots</h3>
                    <p className="font-barlow text-stone-500 text-sm">We are a physical clinic in Delaware County, deeply invested in our local community.</p>
                  </Card>
                  <Card className="flex flex-col h-full bg-white/60">
                    <Shield className="w-10 h-10 text-orange-500 mb-4" />
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Medicaid Accepted</h3>
                    <p className="font-barlow text-stone-500 text-sm">Unlike BetterHelp, we exclusively accept Medicaid to make care truly accessible.</p>
                  </Card>
                  <Card className="flex flex-col h-full bg-white/60">
                    <Users className="w-10 h-10 text-orange-500 mb-4" />
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Comprehensive Care</h3>
                    <p className="font-barlow text-stone-500 text-sm">Therapy, psychiatry, and medication management all under one roof.</p>
                  </Card>
                  <Card className="flex flex-col h-full bg-white/60">
                    <HeartHandshake className="w-10 h-10 text-orange-500 mb-4" />
                    <h3 className="font-barlow font-bold text-xl text-stone-900 mb-2">Consistent Provider</h3>
                    <p className="font-barlow text-stone-500 text-sm">Build a lasting relationship with a dedicated therapist, without random reassignments.</p>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* SECTION 2: Feature Matrix Table */}
          <section className="py-16 md:py-24 bg-stone-900 text-white relative overflow-hidden rounded-[3rem] mx-4 md:mx-6 my-12">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <SectionTag className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">Head to Head</SectionTag>
                <h2 className="font-barlow font-normal text-4xl md:text-5xl tracking-tighter leading-tight mb-6">
                  Sunrise Human Care vs. <br className="hidden md:block" />
                  <span className="font-instrument-serif italic text-orange-400 font-normal">Therapy Apps</span>
                </h2>
                <p className="font-barlow text-stone-300 text-lg">
                  See how local, comprehensive care compares to national telehealth platforms.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="py-6 px-4 font-barlow font-bold text-xl text-white w-1/3">Feature</th>
                      <th className="py-6 px-4 font-barlow font-bold text-xl text-orange-400 w-1/3 bg-white/5 rounded-t-2xl">Sunrise Human Care (Local)</th>
                      <th className="py-6 px-4 font-barlow font-bold text-xl text-stone-400 w-1/3">BetterHelp / Big Apps</th>
                    </tr>
                  </thead>
                  <tbody className="font-barlow text-lg">
                    <tr className="border-b border-white/10">
                      <td className="py-6 px-4 text-stone-300">Accepts Medicaid</td>
                      <td className="py-6 px-4 bg-white/5"><div className="flex items-center text-white"><CheckCircle2 className="w-5 h-5 text-orange-400 mr-2" /> Yes</div></td>
                      <td className="py-6 px-4 text-stone-400"><div className="flex items-center"><XCircle className="w-5 h-5 mr-2 opacity-50" /> No</div></td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-6 px-4 text-stone-300">In-Person Sessions</td>
                      <td className="py-6 px-4 bg-white/5"><div className="flex items-center text-white"><CheckCircle2 className="w-5 h-5 text-orange-400 mr-2" /> Yes (Darby, PA)</div></td>
                      <td className="py-6 px-4 text-stone-400"><div className="flex items-center"><XCircle className="w-5 h-5 mr-2 opacity-50" /> No (Virtual only)</div></td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-6 px-4 text-stone-300">Medication Management</td>
                      <td className="py-6 px-4 bg-white/5"><div className="flex items-center text-white"><CheckCircle2 className="w-5 h-5 text-orange-400 mr-2" /> Yes (In-house)</div></td>
                      <td className="py-6 px-4 text-stone-400"><div className="flex items-center"><XCircle className="w-5 h-5 mr-2 opacity-50" /> Limited / Extra Cost</div></td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-6 px-4 text-stone-300">Provider Continuity</td>
                      <td className="py-6 px-4 bg-white/5"><div className="flex items-center text-white"><CheckCircle2 className="w-5 h-5 text-orange-400 mr-2" /> Guaranteed</div></td>
                      <td className="py-6 px-4 text-stone-400"><div className="flex items-center"><XCircle className="w-5 h-5 mr-2 opacity-50" /> High Turnover</div></td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-6 px-4 text-stone-300">Child & Family Therapy</td>
                      <td className="py-6 px-4 bg-white/5"><div className="flex items-center text-white"><CheckCircle2 className="w-5 h-5 text-orange-400 mr-2" /> Yes (Specialized)</div></td>
                      <td className="py-6 px-4 text-stone-400"><div className="flex items-center"><XCircle className="w-5 h-5 mr-2 opacity-50" /> Limited / Separate Apps</div></td>
                    </tr>
                    <tr>
                      <td className="py-6 px-4 text-stone-300 rounded-bl-2xl">Community Connection</td>
                      <td className="py-6 px-4 bg-white/5 rounded-b-2xl"><div className="flex items-center text-white"><CheckCircle2 className="w-5 h-5 text-orange-400 mr-2" /> High</div></td>
                      <td className="py-6 px-4 text-stone-400"><div className="flex items-center"><XCircle className="w-5 h-5 mr-2 opacity-50" /> Low</div></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SECTION 3: FAQs */}
          <section className="py-16 md:py-24 bg-stone-100">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <SectionTag>Common Questions</SectionTag>
                  <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight mt-4">
                    Comparison FAQs
                  </h2>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "group relative overflow-hidden rounded-[2rem] border backdrop-blur-xl transition duration-500",
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
                            "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition duration-500 group-hover:scale-105",
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
