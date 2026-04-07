"use client";

import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, ArrowRight, Brain, Heart, Activity, Stethoscope, 
  Wind, CloudRain, Zap, Shield, Search, Focus,
  ShieldAlert, Moon, Apple, Layers, Calendar, Phone, Leaf, ShieldCheck
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import AppointmentSection from '@/components/Appointment/AppointmentSection';
import SectionTag from '@/components/ui/section-tag';
import { cn } from "@/lib/utils";
import CurveTransition from '@/components/ui/CurveTransition';
import dynamic from 'next/dynamic';

const MagnifiedBento = dynamic(() => import('@/components/ui/magnified-bento'), {
  ssr: true,
});

// --- Glowing Bento Card (Refined UX) ---
function Card({ children, className, containerClassName, onMouseEnter, onMouseLeave }: { children: React.ReactNode; className?: string, containerClassName?: string, onMouseEnter?: () => void, onMouseLeave?: () => void }) {
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
                "group relative border border-stone-200/60 bg-white/95 backdrop-blur-md overflow-hidden rounded-[2rem]",
                "transition-[transform,border-color,box-shadow] duration-500 ease-out",
                "hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] hover:-translate-y-1 hover:border-orange-200/80 hover:bg-white",
                containerClassName
            )}
            onMouseMove={handleMouseMove}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-stone-50/40 pointer-events-none" />
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(249, 115, 22, 0.06),
              transparent 80%
            )
          `,
                }}
            />
            <div className={cn("relative h-full w-full p-8 md:p-10", className)}>
                {children}
            </div>
        </div>
    );
}

const conditions = [
  {
    title: "Anxiety Disorders",
    short: "Managing generalized anxiety, panic attacks, and social phobia. We provide evidence-based strategies to calm your mind and regain control over daily life.",
    url: "/anxiety-therapy-darby-pa",
    icon: Wind
  },
  {
    title: "Depression",
    short: "Compassionate support for major, persistent, and seasonal depression. Our therapists help you rediscover hope and build a path toward emotional resilience.",
    url: "/depression-therapy-darby-pa",
    icon: CloudRain
  },
  {
    title: "Bipolar Disorder",
    short: "Specialized care for managing mood episodes and achieving stability. We focus on symptom tracking, medication management, and sustainable coping mechanisms.",
    url: "/bipolar-disorder-therapy-darby-pa",
    icon: Zap
  },
  {
    title: "PTSD & Trauma",
    short: "Trauma-informed recovery focusing on emotional safety and processing. Our clinicians are trained in helping you navigate past trauma in a safe, healing environment.",
    url: "/ptsd-therapy-darby-pa",
    icon: Shield
  },
  {
    title: "OCD",
    short: "Support for managing obsessive thoughts and compulsions through targeted therapy. We help you break cycles of ritualized behavior and reduce daily distress.",
    url: "/ocd-therapy-darby-pa",
    icon: Search
  },
  {
    title: "ADHD",
    short: "Focus, organization, and impulse control strategies for children and adults. Our approach combines executive function coaching with clinical support.",
    url: "/adhd-treatment-darby-pa",
    icon: Focus
  },
  {
    title: "Schizophrenia",
    short: "Long-term management of psychosis and daily functioning. We provide a supportive framework for individuals and families navigating complex symptoms.",
    url: "/schizophrenia-treatment-darby-pa",
    icon: Brain
  },
  {
    title: "Borderline Personality",
    short: "Dialectical approach to Borderline Personality Disorder support. We focus on emotional regulation, distress tolerance, and interpersonal effectiveness.",
    url: "/bpd-treatment-darby-pa",
    icon: ShieldAlert
  },
  {
    title: "Sleep Disorders",
    short: "Addressing insomnia and improving sleep hygiene through behavioral therapy. Better mental health starts with consistent, restorative rest.",
    url: "/sleep-disorders-treatment-darby-pa",
    icon: Moon
  },
  {
    title: "Eating Disorders",
    short: "Support for building a healthy relationship with food and body image. Our team provides compassionate, specialized care for sustainable recovery.",
    url: "/eating-disorders-treatment-darby-pa",
    icon: Apple
  },
  {
    title: "Substance Use",
    short: "Comprehensive addiction recovery and relapse prevention. We address the underlying causes of substance use to build a foundation for long-term sobriety.",
    url: "/substance-use-treatment-darby-pa",
    icon: Activity
  },
  {
    title: "Dissociative Disorders",
    short: "Specialized support for identity, memory, and consciousness integration. We help you navigate feelings of detachment and build a cohesive sense of self.",
    url: "/dissociative-disorders-treatment-darby-pa",
    icon: Layers
  }
];

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export default function ConditionsClient() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-950">
      <Navbar />
      
      <main className="flex-grow">
        {/* HERO SECTION - Editorial & Premium */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-stone-950">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_1600/v1774918057/cropped-view-of-psychotherapist-writing-on-clipboa-2026-03-11-19-39-36-utc_j17vdo.jpg" 
              alt="Mental Health Conditions Treated in Darby PA" 
              fill 
              sizes="100vw"
              className="object-cover opacity-25 object-top"
              priority
            />
            {/* Smooth gradient overlay for perfect text legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-stone-950/60 to-stone-50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block font-barlow font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-orange-400 mb-6 bg-orange-500/10 px-5 py-2.5 rounded-full border border-orange-500/20 backdrop-blur-md">
                Specialized Clinical Care
              </span>
              <h1 className="font-barlow font-normal text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-[1.05] mb-8 text-balance mx-auto">
                Targeted relief for <br className="hidden md:block" />
                <span className="font-instrument-serif italic text-orange-400 font-normal">your specific struggle.</span>
              </h1>
              <p className="text-stone-300 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
                Don't let a diagnosis define you. We provide evidence-based, compassionate psychiatric care and therapy for complex mental health conditions in Darby, PA.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#appointment" onClick={(e) => { e.preventDefault(); document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <motion.button 
                    whileTap={{ scale: 0.96 }}
                    className="bg-orange-500 hover:bg-orange-400 text-stone-50 font-barlow font-bold px-6 py-4 text-base rounded-full transition-colors duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-orange-500/20"
                  >
                    <Calendar className="w-5 h-5" />
                    Book an Evaluation
                  </motion.button>
                </Link>
                <a href="tel:+18146202162">
                  <motion.button 
                    whileTap={{ scale: 0.96 }}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-barlow font-bold px-6 py-4 text-base rounded-full transition-colors duration-300 flex items-center justify-center w-full sm:w-auto backdrop-blur-sm"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (814) 620-2162
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="bg-stone-50 relative z-10 -mt-12 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.15)]">
          
          {/* SECTION 1: Conditions Grid (Bento Style) */}
          <section className="pt-24 pb-32 relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-100/40 rounded-full blur-[120px] -mr-[400px] -mt-[400px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-stone-200/40 rounded-full blur-[100px] -ml-[300px] -mb-[300px] pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-3xl mx-auto text-center mb-16 flex flex-col items-center"
              >
                <SectionTag>Clinical Expertise</SectionTag>
                <h2 className="font-barlow font-normal text-4xl md:text-6xl text-stone-900 tracking-tighter mt-6 mb-6 text-balance mx-auto">
                  What we <span className="font-instrument-serif italic text-orange-500">treat.</span>
                </h2>
                <p className="text-stone-500 font-barlow text-lg md:text-xl leading-relaxed text-balance mx-auto">
                  Our licensed psychiatric providers and therapists utilize the latest clinical frameworks to diagnose and treat a comprehensive spectrum of mental health disorders.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
                {conditions.map((condition, index) => (
                  <motion.div key={index} variants={itemVariants} className="h-full">
                    <Link href={condition.url} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-[2rem]">
                      <motion.div whileTap={{ scale: 0.98 }} className="h-full group relative overflow-hidden rounded-[2rem] bg-white border border-stone-200 hover:border-orange-500/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1">
                        
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-orange-500/10 transition-colors duration-500" />
                        
                        <div className="p-8 flex flex-col h-full relative z-10">
                          <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 shadow-sm border border-orange-100/50 group-hover:bg-orange-100 transition-colors duration-500">
                            <condition.icon className="w-6 h-6 text-orange-500" />
                          </div>
                          
                          <h3 className="font-barlow font-bold text-2xl text-stone-900 mb-3 tracking-tight group-hover:text-orange-600 transition-colors">
                            {condition.title}
                          </h3>
                          
                          <p className="font-barlow text-stone-500 text-sm md:text-base leading-relaxed flex-grow mb-6">
                            {condition.short}
                          </p>
                          
                          <div className="flex items-center text-orange-600 font-barlow font-bold text-sm mt-auto group/link">
                            Explore treatment 
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Delaware County Container (Moved inside Section 1) */}
              <div className="bg-stone-900 text-white rounded-[3rem] relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="p-10 md:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <SectionTag className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-8">Delaware County</SectionTag>
                    <h2 className="font-barlow font-normal text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.05] mb-8 text-balance">
                      Accessible treatment in <br />
                      <span className="font-instrument-serif italic text-orange-400 font-normal">Darby, PA.</span>
                    </h2>
                    <div className="space-y-6 font-barlow text-stone-300 text-lg leading-relaxed">
                      <p>
                        At Sunrise Human Care Services, we are proud to serve the Darby community and surrounding areas in Delaware County. Our practice is conveniently located at 869 Main Street, making quality mental health treatment accessible to residents throughout the region.
                      </p>
                      <p>
                        We understand that seeking help for a mental health condition can be daunting. Our team is committed to reducing stigma and providing a culturally responsive, judgment-free environment for all our patients.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl">
                      <h3 className="font-barlow font-bold text-2xl text-white mb-8 flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-orange-400" />
                        Communities We Treat
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <Link href="/mental-health-darby-pa" className="px-4 py-4 bg-orange-500 hover:bg-orange-400 transition-colors rounded-2xl text-center font-barlow text-stone-50 shadow-lg shadow-orange-500/20 flex flex-col items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-white">
                          <span className="font-bold text-base">Darby</span>
                          <span className="text-xs opacity-80 mt-1">19023</span>
                        </Link>
                        {[
                          { name: "Yeadon", zip: "19008" },
                          { name: "Lansdowne", zip: "19003" },
                          { name: "Upper Darby", zip: "19026" },
                          { name: "Collingdale", zip: "19064" },
                          { name: "Sharon Hill", zip: "19073" }
                        ].map(city => (
                          <div key={city.name} className="px-4 py-4 bg-white/5 rounded-2xl text-center font-barlow text-stone-300 flex flex-col items-center justify-center border border-white/5">
                            <span className="font-bold text-sm">{city.name}</span>
                            <span className="text-xs opacity-60 mt-1">{city.zip}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start md:items-center gap-5 bg-orange-500/10 border border-orange-500/20 p-8 rounded-3xl w-full">
                      <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/20">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-barlow font-bold text-white text-xl mb-2">Medicaid & Affordable Self-Pay Accepted</h4>
                        <p className="font-barlow text-stone-300 text-sm md:text-base leading-relaxed">
                          Your finances shouldn't stand between you and your recovery. Whether you are covered by Medicaid or need accessible out-of-pocket options, we ensure you get the expert psychiatric care you deserve.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            <CurveTransition fillColor="#ffffff" inverted />
          </section>

          {/* SECTION 3: Why Choose Us (Refined E-E-A-T) */}
          <section className="pt-24 pb-12 md:pb-16 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <SectionTag>Our Philosophy</SectionTag>
                <h2 className="font-barlow font-normal text-4xl md:text-5xl text-stone-900 tracking-tighter mt-6 mb-6 text-balance">
                  Care that treats the cause, <span className="font-instrument-serif italic text-orange-500">not just the symptoms.</span>
                </h2>
                <p className="text-stone-500 font-barlow text-lg leading-relaxed text-balance">
                  At Sunrise Human Care, we combine proven psychiatric methods with genuine compassion. Our focus is on long-term recovery, equipping you with the tools to regain control of your life.
                </p>
              </div>

              {/* Bento Grid Layout (Matched to Home Page Our Story) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-6xl mx-auto">
                
                {/* Main Story Card */}
                <Card containerClassName="md:col-span-8 rounded-[2.5rem]" className="flex flex-col md:flex-row gap-8 items-center p-8 md:p-10">
                  <div className="w-full md:w-1/2 space-y-6">
                    <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-md shadow-stone-200/50 border border-stone-100 transition-transform group-hover:scale-110 duration-300">
                      <Stethoscope className="h-5 w-5 text-amber-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
                      Treating the Root Cause
                    </h3>
                    <div className="space-y-4">
                      <p className="text-stone-500 leading-relaxed font-medium italic">
                        &quot;A diagnosis like anxiety, depression, or trauma is just a starting point. True recovery requires understanding the specific biological, psychological, and social factors driving your condition.&quot;
                      </p>
                      <p className="text-stone-500 leading-relaxed font-medium">
                        Our clinical team utilizes peer-reviewed, evidence-based methods—including targeted psychiatric medication management and cognitive-behavioral therapies—to build a roadmap specifically for you.
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:h-full min-h-[300px] rounded-3xl overflow-hidden shadow-xl group/img">
                    <video 
                      src="https://res.cloudinary.com/dabsxebx8/video/upload/w_800,q_auto,f_auto/v1775521186/5697334-uhd_2160_3840_24fps_zh1enu.mp4" 
                      poster="https://res.cloudinary.com/dabsxebx8/video/upload/w_800,so_0,f_auto,q_auto/v1775521186/5697334-uhd_2160_3840_24fps_zh1enu.jpg"
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 px-3 py-2 bg-stone-900/40 backdrop-blur-md border border-white/10 rounded-xl shadow-xl">
                      <p className="text-white font-bold text-[10px] uppercase tracking-widest leading-none">Evidence-Based</p>
                      <p className="text-orange-400 font-bold text-[8px] uppercase tracking-[0.1em] mt-1 leading-none opacity-90">Clinical Excellence</p>
                    </div>
                  </div>
                </Card>

                {/* Experience Magnified Bento Card */}
                <MagnifiedBento 
                  className="md:col-span-4 rounded-[2.5rem]" 
                  title="Neuroplasticity & Growth"
                  description="We believe the brain is capable of profound change. Our therapies focus on rewiring thought patterns for lasting emotional resilience."
                  buttonText="Start Healing"
                />

                {/* Patient-Centered Feature */}
                <Card containerClassName="md:col-span-4 rounded-[2.5rem]" className="p-8">
                  <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-md shadow-stone-200/50 border border-stone-100 transition-transform group-hover:scale-110 duration-300 mb-6">
                    <Heart className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-orange-600 transition-colors">
                      Trauma-Informed Care
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed font-medium">
                    We ask &quot;what happened to you?&quot; instead of &quot;what's wrong with you?&quot; establishing a foundation of absolute safety before doing the deep work.
                  </p>
                </Card>

                {/* Accessible Care Feature */}
                <Card containerClassName="md:col-span-4 rounded-[2.5rem]" className="p-8">
                  <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-md shadow-stone-200/50 border border-stone-100 transition-transform group-hover:scale-110 duration-300 mb-6">
                    <ShieldCheck className="h-5 w-5 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-orange-600 transition-colors">
                      Radical Acceptance
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed font-medium">
                    Healing begins the moment judgment ends. We meet you exactly where you are, validating your experience while guiding you toward change.
                  </p>
                </Card>

                {/* Holistic Growth Stat Card */}
                <Card containerClassName="md:col-span-4 rounded-[2.5rem]" className="flex flex-col justify-center items-center text-center p-8">
                  <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-md shadow-stone-200/50 border border-stone-100 transition-transform group-hover:scale-110 duration-300 mb-6">
                    <Leaf className="h-5 w-5 text-orange-500" />
                  </div>
                  <div className="text-5xl font-black text-stone-900 tracking-tighter mb-2">Holistic</div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400">
                      Whole-Person Healing
                  </p>
                </Card>

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
              <meta itemProp="lastReviewed" content="2026-04-05" />
              <p>
                This content was clinically reviewed by Holli O'Donnell, Licensed Mental Health Professional, on April 5, 2026 to ensure accuracy and compliance with current medical standards regarding mental health condition diagnoses and treatments.
              </p>
            </div>
          </section>

          {/* SECTION 5: Appointment */}
          <div className="bg-white pb-12 md:pb-24">
            <AppointmentSection />
          </div>
          
        </div>
      </main>
      
      <div className="relative z-20 bg-white">
        <Footer />
      </div>
    </div>
  );
}
