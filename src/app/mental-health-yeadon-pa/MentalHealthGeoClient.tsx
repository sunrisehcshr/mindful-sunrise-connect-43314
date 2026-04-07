"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Users, Heart, Shield, Calendar, MapPin, MessageCircle, CheckCircle, Clock, ShieldCheck, HeartPulse, Activity } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import AppointmentSection from "@/components/Appointment/AppointmentSection";
import { Button } from "@/components/ui/button";
import SectionTag from "@/components/ui/section-tag";
import { cn } from "@/lib/utils";

import CurveTransition from "@/components/ui/CurveTransition";

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
        "hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-amber-200/50 hover:bg-white",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-stone-50/50 pointer-events-none" />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(245, 158, 11, 0.12),
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

export interface GeoContentProps {
  heroHeadline: React.ReactNode;
  heroSubheadline: string;
  problemHeadline: React.ReactNode;
  problemText1: string;
  problemText2: string;
  problemHighlight: string;
  solutionHeadline: React.ReactNode;
  solutionText1: React.ReactNode;
  solutionText2: React.ReactNode;
  expertCareHeadline: React.ReactNode;
  expertCareText1: React.ReactNode;
  expertCareText2: React.ReactNode;
  locationHeadline: React.ReactNode;
  locationSubheadline: React.ReactNode;
  localAdvantageText: React.ReactNode;
  servicesHeadline: React.ReactNode;
  servicesSubheadline: string;
  faqHeadline: React.ReactNode;
  servicesOverrides: Record<string, string>;
  faqOverrides: { question: string; answer: string }[];
}

export default function MentalHealthGeoClient({ location, content }: { location: string, content: GeoContentProps }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay blocked — silent fallback
      });
    }
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const getDistance = (loc: string) => {
    switch(loc.toLowerCase()) {
      case 'yeadon': return '1.5 miles (5 mins)';
      case 'lansdowne': return '2 miles (7 mins)';
      case 'upper darby': return '3 miles (10 mins)';
      case 'collingdale': return '1 mile (4 mins)';
      case 'sharon hill': return '1.2 miles (5 mins)';
      default: return 'minutes away';
    }
  };

  const baseServices = [
    {
      id: "individual",
      title: "Individual Therapy",
      link: "/individual-therapy-darby-pa",
      icon: Users
    },
    {
      id: "couples",
      title: "Couples Counseling",
      link: "/couples-counseling-darby-pa",
      icon: Heart
    },
    {
      id: "family",
      title: "Family Therapy",
      link: "/family-therapy-darby-pa",
      icon: Users
    },
    {
      id: "child",
      title: "Child & Adolescent Therapy",
      link: "/child-therapy-darby-pa",
      icon: Shield
    },
    {
      id: "psychiatric",
      title: "Psychiatric Evaluations",
      link: "/psychiatric-evaluations-darby-pa",
      icon: ShieldCheck
    },
    {
      id: "medication",
      title: "Medication Management",
      link: "/medication-management-darby-pa",
      icon: Activity
    },
    {
      id: "grief",
      title: "Grief Therapy",
      link: "/grief-therapy-darby-pa",
      icon: HeartPulse
    },
    {
      id: "relationship",
      title: "Relationship Therapy",
      link: "/relationship-therapy-darby-pa",
      icon: MessageCircle
    }
  ];

  const iconContainerStyles = "w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center border border-stone-100 transition-transform group-hover:scale-110 duration-300 shrink-0";

  return (
    <div className="flex flex-col min-h-screen bg-white font-barlow">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-48 pb-20 md:pt-60 md:pb-32 bg-stone-900">
          <div className="absolute inset-0 z-0 overflow-hidden">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -ml-48 -mb-48" />
          </div>
          
          <div className="container mx-auto px-4 md:px-8 relative z-30 text-center text-white">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mb-6 flex justify-center"
              >
                <SectionTag className="border-white/20 text-white bg-white/10">Mental Health Support</SectionTag>
              </motion.div>

              <h1 className="font-barlow font-bold text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-[1.1] md:leading-tight mb-6">
                {content.heroHeadline}
              </h1>
              
              <p className="text-lg md:text-xl mb-10 text-stone-300 max-w-3xl mx-auto leading-relaxed font-medium font-barlow">
                {content.heroSubheadline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-400 text-stone-50 rounded-full px-10 py-7 text-lg font-bold transition shadow-xl shadow-orange-500/20 font-barlow z-50 relative pointer-events-auto">
                  <Link href="/appointment">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your First Session
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10 rounded-full px-10 py-7 text-lg font-bold transition backdrop-blur-sm font-barlow z-50 relative pointer-events-auto bg-transparent">
                  <a href="tel:+18146202162">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (814) 620-2162
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
          
          <CurveTransition fillColor="#ffffff" inverted className="z-20" />
        </section>

        {/* Ogilvy Long Copy Section */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-[100px] pointer-events-none -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-stone-50/80 rounded-full blur-[100px] pointer-events-none -ml-48 -mb-48" />

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 md:mb-24"
              >
                <SectionTag>The Problem</SectionTag>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-balance font-normal text-stone-900 tracking-tighter leading-[1.1] mt-6">
                  {content.problemHeadline}
                </h2>
              </motion.div>

              <div className="space-y-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="prose prose-xl prose-stone prose-p:font-barlow prose-p:leading-relaxed max-w-none text-stone-600 font-medium"
                >
                  <p>{content.problemText1}</p>
                  <p>{content.problemText2}</p>
                  
                  <p className="text-2xl text-stone-900 border-l-4 border-orange-500 pl-6 py-2 my-12 bg-orange-50/30 rounded-r-2xl">
                    {content.problemHighlight}
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl md:text-4xl font-normal tracking-tighter text-stone-900 mb-8">
                    {content.solutionHeadline}
                  </h3>
                  
                  <div className="prose prose-xl prose-stone prose-p:font-barlow prose-p:leading-relaxed max-w-none text-stone-600 font-medium">
                    <p>{content.solutionText1}</p>
                    <p>{content.solutionText2}</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16"
                >
                  {[
                    {
                      title: "Zero Waitlists",
                      desc: "We prioritize immediate intake. If you need help, we will get you on the schedule.",
                      icon: Clock
                    },
                    {
                      title: "100% Medicaid",
                      desc: "We proudly serve the Medicaid community. No surprise out-of-pocket bills.",
                      icon: ShieldCheck
                    },
                    {
                      title: "All Under One Roof",
                      desc: "Talk therapy, psychiatric evaluations, and medication management in one place.",
                      icon: Users
                    }
                  ].map((feature, i) => (
                    <div key={i} className="flex flex-col gap-4 p-8 rounded-[2rem] bg-stone-50 border border-stone-100 hover:border-orange-200 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-stone-100 flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="font-bold text-xl text-stone-900 tracking-tight">{feature.title}</h4>
                      <p className="text-stone-500 leading-relaxed font-medium">{feature.desc}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl md:text-4xl font-normal tracking-tighter text-stone-900 mb-8">
                    {content.expertCareHeadline}
                  </h3>
                  
                  <div className="prose prose-xl prose-stone prose-p:font-barlow prose-p:leading-relaxed max-w-none text-stone-600 font-medium">
                    <p>{content.expertCareText1}</p>
                    <p>{content.expertCareText2}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid: Local Advantage */}
        <section className="py-24 bg-stone-50/50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center gap-4 mb-16 text-center">
              <SectionTag>Our Location</SectionTag>
              <h2 className="text-3xl md:text-5xl font-normal text-stone-900 tracking-tighter leading-tight">
                {content.locationHeadline}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full max-w-6xl mx-auto">
              {/* Main Content Card */}
              <Card containerClassName="md:col-span-8 rounded-[2.5rem] min-h-[400px]" className="flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className={iconContainerStyles}>
                      <MapPin className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-stone-50 border border-stone-100 text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                      Headquarters
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-normal leading-tight tracking-tighter text-stone-900 mb-6">
                    {content.locationSubheadline}
                  </h3>
                  <p className="text-stone-500 text-lg leading-relaxed font-medium max-w-xl">
                    {content.localAdvantageText}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-8 border-t border-stone-100 mt-8">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-700 text-sm font-bold border border-orange-100">
                    <Clock className="w-4 h-4" /> Open Mon-Fri
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold border border-emerald-100">
                    <ShieldCheck className="w-4 h-4" /> Fully Licensed
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold border border-blue-100">
                    <Users className="w-4 h-4" /> Accepting Patients
                  </div>
                </div>
              </Card>

              {/* Map Card */}
              <Card containerClassName="md:col-span-4 rounded-[2.5rem] min-h-[400px] p-0" className="p-0">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.7251810565893!2d-75.26385702341498!3d39.91854498410065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c19c8aaf0c5f%3A0xda74d062dc04cad0!2sSunrise%20Human%20Care%20Services!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus"
                    width="100%" 
                    height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition duration-700"
                />
              </Card>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <SectionTag>Clinical Excellence</SectionTag>
              <h2 className="text-3xl md:text-5xl font-normal mt-6 mb-6 font-barlow text-stone-800 tracking-tighter leading-tight">
                {content.servicesHeadline}
              </h2>
              <p className="text-lg text-stone-600 font-barlow leading-relaxed">
                {content.servicesSubheadline}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {baseServices.map((service, index) => (
                <Link key={index} href={service.link}>
                  <Card containerClassName="rounded-[2rem] group/service cursor-pointer h-full" className="flex flex-col items-start text-left p-6">
                    <div className={cn(iconContainerStyles, "mb-6 bg-orange-50 border-orange-100")}>
                      <service.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 group-hover/service:text-orange-600 transition-colors mb-3">
                      {service.title}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed mb-6 font-medium">
                      {content.servicesOverrides[service.id] || "Specialized mental health care designed to support your journey to wellness."}
                    </p>
                    <div className="mt-auto pt-4 flex items-center gap-2 text-orange-500 font-bold text-[11px] uppercase tracking-widest group-hover/service:gap-3 transition-all">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-stone-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-4 mb-16 text-center">
                <SectionTag>Information</SectionTag>
                <h2 className="text-3xl md:text-5xl font-normal text-stone-900 tracking-tighter leading-tight">
                  {content.faqHeadline}
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {content.faqOverrides.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-white px-8 rounded-3xl border border-stone-100 shadow-sm overflow-hidden"
                  >
                    <AccordionTrigger className="text-left font-bold text-stone-800 py-6 hover:no-underline text-lg tracking-tight">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-stone-500 text-lg leading-relaxed pb-6 font-medium">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <AppointmentSection />
      </main>

      <Footer />
    </div>
  );
}
