"use client";

import React, { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Calendar, Phone, MapPin, ShieldCheck, Users, Stethoscope, Navigation, HeartPulse, UserPlus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import AppointmentSection from '@/components/Appointment/AppointmentSection';
import SectionTag from '@/components/ui/section-tag';
import ClinicStatus from '@/components/ui/ClinicStatus';
import { cn } from "@/lib/utils";

// --- Opening Hours Component ---
function OpeningHours() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="font-barlow text-sm font-semibold tracking-tight text-stone-400 uppercase">Mon - Fri</div>
            <div className="font-barlow text-xl font-bold text-stone-900">9:00 AM - 5:00 PM</div>
        </div>
    );
}

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

export default function ServicesClient() {
  const servicesList = [
    {
      title: "Individual Therapy",
      link: "/individual-therapy-darby-pa",
      desc: "One-on-one sessions tailored to help you navigate anxiety, depression, trauma, and personal growth in a safe environment.",
      image: "https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918057/cropped-shot-of-a-man-having-a-therapeutic-session-2026-03-25-02-43-30-utc_bzrrq0.jpg"
    },
    {
      title: "Couples Counseling",
      link: "/couples-counseling-darby-pa",
      desc: "Expert guidance to help partners improve communication, resolve conflicts, and rebuild emotional and physical intimacy.",
      image: "https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918015/diverse-couple-on-a-therapy-session-in-a-psycholog-2026-03-25-04-41-39-utc_jebtlc.jpg"
    },
    {
      title: "Family Therapy",
      link: "/family-therapy-darby-pa",
      desc: "Collaborative sessions designed to strengthen family bonds, improve household dynamics, and support collective healing.",
      image: "https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918387/family-counseling-talk-from-home-parents-listen-t-2026-03-25-02-29-59-utc_a9m3eu.jpg"
    },
    {
      title: "Child & Teen Therapy",
      link: "/child-therapy-darby-pa",
      desc: "Age-appropriate therapeutic approaches including play therapy and CBT to help youth manage behavioral and emotional challenges.",
      image: "https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918385/women-discussing-childs-progress-in-kindergarten-e-2026-03-25-09-19-16-utc_j1quiw.jpg"
    },
    {
      title: "Psychiatric Evaluations",
      link: "/psychiatric-evaluations-darby-pa",
      desc: "Comprehensive diagnostic assessments by our clinical team to provide clarity and establish an effective treatment roadmap.",
      image: "https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918057/cropped-view-of-psychotherapist-writing-on-clipboa-2026-03-11-19-39-36-utc_j17vdo.jpg"
    },
    {
      title: "Medication Management",
      link: "/medication-management-darby-pa",
      desc: "Ongoing psychiatric care and prescription monitoring to ensure your medications are safe, effective, and properly balanced.",
      image: "https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918385/doctor-give-advice-about-medicine-or-vitamin-to-el-2026-01-08-05-55-04-utc_fvofy1.jpg"
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
              src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918057/cropped-view-of-psychotherapist-writing-on-clipboa-2026-03-11-19-39-36-utc_j17vdo.jpg" 
              alt="Mental Health Services in Darby PA" 
              fill 
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-stone-50" />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto"
            >
              <span className="inline-block font-barlow font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-orange-400 mb-6 bg-orange-500/10 px-5 py-2.5 rounded-full border border-orange-500/20 backdrop-blur-md">
                Comprehensive Care
              </span>
              <h1 className="font-barlow font-normal text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-md">
                Mental Health Services in <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal drop-shadow-md">Darby, PA</span>
              </h1>
              <p className="text-stone-100 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
                Expert therapy, counseling, and psychiatric care for children, teens, adults, and families in Delaware County. We proudly and exclusively accept Medicaid.
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
          
          {/* SECTION 1: Services Grid */}
          <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-[120px] -ml-[300px] -mt-[300px] pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <SectionTag>Our Specialties</SectionTag>
                <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight mt-4 mb-6">
                  Care Tailored to You
                </h2>
                <p className="text-stone-500 font-barlow text-lg leading-relaxed">
                  From traditional talk therapy to comprehensive psychiatric evaluations, our Darby clinic offers a full spectrum of mental health services under one roof.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {servicesList.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={service.link} className="block h-full">
                      <Card className="h-full flex flex-col p-4 overflow-hidden group">
                        <div className="relative h-64 w-full overflow-hidden rounded-2xl mb-6 shadow-sm border border-stone-100">
                          <Image 
                            src={service.image} 
                            alt={service.title} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                        <div className="px-4 pb-4 flex flex-col flex-grow">
                          <h3 className="font-barlow font-bold text-2xl text-stone-900 mb-3 group-hover:text-orange-500 transition-colors">
                            {service.title}
                          </h3>
                          <p className="font-barlow text-stone-600 text-base leading-relaxed flex-grow mb-6">
                            {service.desc}
                          </p>
                          <div className="flex items-center text-orange-500 font-barlow font-bold text-sm mt-auto">
                            Learn more <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 2: Why Choose Us (Optimized layout) */}
          <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              {/* Section Header */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center mb-16"
              >
                <div className="flex flex-col items-center gap-4">
                  <SectionTag>Why Choose Us</SectionTag>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tighter leading-tight">
                    Expert therapy & psychiatric care <br />
                    <span className="font-instrument-serif italic text-orange-500">without the barriers.</span>
                  </h2>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}
                className="relative z-10 mx-auto max-w-7xl h-full flex flex-col gap-4 bg-stone-50/30 p-6 md:p-12 rounded-[2.5rem] border border-stone-100"
              >
                {/* ROW 1: Status + Hours */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
                    }
                  }} 
                  className="grid grid-cols-1 gap-4 md:grid-cols-4 relative z-10"
                >
                  <Card containerClassName="md:col-span-2 rounded-3xl bg-white group/brand" className="flex items-center justify-between gap-6">
                    <div className="flex flex-col justify-center">
                      <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-transparent bg-clip-text tracking-tight">
                        Sunrise
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm md:text-base font-instrument-serif italic text-stone-400">Human Care Services</span>
                        <div className="h-px w-8 bg-stone-200" />
                      </div>
                      <div className="mt-2">
                        <ClinicStatus showBadge={true} />
                      </div>
                    </div>
                    <div className="relative shrink-0 pr-4">
                      <Image src="/images/logo.png" alt="Logo" width={80} height={70} className="object-contain" />
                    </div>
                  </Card>

                  <Card containerClassName="md:col-span-1 rounded-3xl bg-blue-50/80 border-blue-200/50" className="flex flex-col justify-center items-center text-center">
                    <OpeningHours />
                    <span className="text-[10px] text-blue-700/60 uppercase mt-1 font-bold tracking-wider">Business Hours</span>
                  </Card>

                  <Card containerClassName="md:col-span-1 rounded-3xl bg-emerald-50/40 border-emerald-100/50" className="flex flex-col justify-center items-start">
                    <div className="flex items-center justify-between w-full mb-3">
                      <span className="font-bold tracking-tight text-emerald-900">Accepting Patients</span>
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-stone-100">
                        <UserPlus className="h-5 w-5 text-emerald-600" />
                      </div>
                    </div>
                    <div className="text-[11px] text-emerald-800/70 leading-tight font-medium">
                      Immediate Openings for <br /> Therapy & Psychiatry.
                    </div>
                  </Card>
                </motion.div>

                {/* ROW 2: Main Value Prop + Detail Cards */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
                    }
                  }} 
                  className="grid grid-cols-1 gap-4 md:grid-cols-3 relative z-10"
                >
                  <Card containerClassName="md:col-span-2 rounded-3xl bg-white" className="flex flex-col justify-between py-10">
                    <div className="flex justify-between items-start mb-12">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center border border-orange-100">
                        <HeartPulse className="h-6 w-6 text-orange-500" />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-stone-50 border border-stone-100 text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                        The Sunrise Difference
                      </div>
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-4xl md:text-5xl font-normal leading-[0.95] tracking-tighter text-stone-900">
                        Integrated healing <br />
                        <span className="font-instrument-serif italic text-orange-500">for mind and body.</span>
                      </h3>
                      <p className="max-w-md text-stone-500 text-sm leading-relaxed font-medium">
                        Whether you need compassionate talk therapy or precise medication management, our Darby clinic provides a unified approach. We eliminate the gap between diagnosis and recovery.
                      </p>
                    </div>
                  </Card>

                  <div className="flex flex-col gap-4">
                    <Card containerClassName="rounded-3xl bg-stone-900 text-white border-none" className="flex flex-col justify-between h-full">
                      <ShieldCheck className="h-8 w-8 text-orange-400 mb-4" />
                      <div>
                        <h4 className="font-bold text-lg mb-1">100% Medicaid</h4>
                        <p className="text-stone-400 text-xs leading-relaxed">Exclusively accepting Medicaid for all psychiatric and therapy services in Delaware County.</p>
                      </div>
                    </Card>
                    <Card containerClassName="rounded-3xl bg-orange-500 text-stone-900 border-none" className="flex flex-col justify-between h-full">
                      <Users className="h-8 w-8 text-white mb-4" />
                      <div>
                        <h4 className="font-bold text-lg mb-1">Local Continuity</h4>
                        <p className="text-stone-900/70 text-xs leading-relaxed font-medium">Work with the same psychiatrist and therapist every session for deep, meaningful healing.</p>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* SECTION 3: Local Context & Service Areas */}
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
                  <SectionTag className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">Community First</SectionTag>
                  <h2 className="font-barlow font-normal text-4xl md:text-5xl tracking-tighter leading-tight mb-6">
                    Accessible Therapy in <br />
                    <span className="font-instrument-serif italic text-orange-400 font-normal">Delaware County, PA</span>
                  </h2>
                  <div className="space-y-6 font-barlow text-stone-300 text-lg leading-relaxed">
                    <p>
                      Finding reliable mental health services near you shouldn't be difficult. Sunrise Human Care Services, located at 869 Main Street in Darby, PA, serves as a central hub for healing and psychiatric support in Delaware County.
                    </p>
                    <p>
                      Our clinical team is dedicated to treating a wide variety of conditions, including generalized anxiety disorder, major depressive disorder, PTSD, ADHD, and behavioral challenges in children. We offer culturally competent care that respects your background and personal journey.
                    </p>
                    <p>
                      Whether you need individual counseling, family therapy, or a full psychiatric evaluation, our doors are open to help you achieve long-term mental wellness.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
                    <h3 className="font-barlow font-bold text-2xl text-white mb-6 flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-orange-400" />
                      Areas We Serve
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <Link href="/mental-health-darby-pa" className="px-4 py-3 bg-orange-500 hover:bg-orange-400 transition-colors rounded-xl text-center font-barlow font-bold text-stone-900 shadow-lg shadow-orange-500/20">
                        Darby (19023)
                      </Link>
                      {[
                        { name: "Yeadon", zip: "19008" },
                        { name: "Lansdowne", zip: "19003" },
                        { name: "Upper Darby", zip: "19026" },
                        { name: "Collingdale", zip: "19064" },
                        { name: "Sharon Hill", zip: "19073" }
                      ].map(city => (
                        <div key={city.name} className="px-4 py-3 bg-white/10 rounded-xl text-center font-barlow text-stone-300 text-sm flex flex-col items-center justify-center border border-white/5">
                          <span className="font-bold">{city.name}</span>
                          <span className="text-xs opacity-70">{city.zip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
                    Mental Health Services FAQs
                  </h2>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      question: "Do you accept Medicaid for therapy and psychiatry?",
                      answer: "Yes, Sunrise Human Care Services exclusively accepts Medicaid. We believe high-quality mental health care should be accessible to everyone in Delaware County, without financial barriers."
                    },
                    {
                      question: "What is the difference between therapy and a psychiatric evaluation?",
                      answer: "Therapy (or counseling) involves regular sessions to discuss feelings, behaviors, and coping strategies. A psychiatric evaluation is a diagnostic assessment performed by a medical professional who can prescribe medications to help manage your symptoms."
                    },
                    {
                      question: "Can I receive both therapy and medication management at your clinic?",
                      answer: "Absolutely. In fact, we encourage it. Research shows that combining talk therapy with appropriate medication management often yields the best outcomes for conditions like depression, anxiety, and ADHD."
                    },
                    {
                      question: "Do you offer services for children and teenagers?",
                      answer: "Yes, we have specialized child and adolescent therapists on staff. We offer play therapy for younger children and cognitive behavioral approaches tailored specifically for teens navigating school, peer, and family challenges."
                    }
                  ].map((faq, index) => (
                    <div 
                      key={index}
                      className="group relative overflow-hidden rounded-[2rem] border border-stone-200/60 bg-white/50 hover:border-orange-200/40 hover:bg-white shadow-sm transition-all duration-500"
                    >
                      <button 
                        type="button"
                        className="relative flex w-full items-start gap-6 px-8 py-6 text-left transition-colors duration-300 focus:outline-none"
                      >
                        <div className="flex flex-1 flex-col gap-2">
                          <h3 className="text-lg font-barlow font-bold leading-tight tracking-tight text-stone-900 group-hover:text-orange-500 transition-colors duration-300">
                            {faq.question}
                          </h3>
                          <p className="text-stone-500 font-barlow text-base leading-relaxed pt-2">
                            {faq.answer}
                          </p>
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

          {/* SECTION 3: Appointment */}
          <AppointmentSection />
          
        </div>
      </main>
      
      <div className="relative z-20 bg-white">
        <Footer />
      </div>
    </div>
  );
}