"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Users, Heart, Shield, Calendar, MapPin, MessageCircle, CheckCircle, ArrowUpRight, Clock, ShieldCheck, HeartPulse } from "lucide-react";
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

export default function MentalHealthGeoClient({ location }: { location: string }) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    { title: "Individual Therapy", link: "/individual-therapy-darby-pa", icon: Users },
    { title: "Anxiety Treatment", link: "/anxiety-therapy-darby-pa", icon: HeartPulse },
    { title: "Depression Therapy", link: "/depression-therapy-darby-pa", icon: Heart },
    { title: "Psychiatric Evaluations", link: "/psychiatric-evaluations-darby-pa", icon: ShieldCheck }
  ];

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

  const faqs = [
    {
      question: `Do you accept Medicaid for ${location} residents?`,
      answer: `Yes, Sunrise Human Care Services is a Medicaid-only provider. We are dedicated to providing high-quality mental health care to Medicaid recipients in ${location} and surrounding Delaware County areas.`
    },
    {
      question: `Is there a waitlist for therapy near ${location}?`,
      answer: "No, we currently have no waitlist for new patients. We typically respond to all inquiries within 24 hours, ensuring you get the support you need quickly."
    },
    {
      question: `How far is the Darby clinic from ${location}, PA?`,
      answer: `Our Darby clinic is located just ${getDistance(location)} from ${location}. This makes it a very convenient option for ${location} residents seeking in-person therapy.`
    }
  ];

  const iconContainerStyles = "w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center border border-stone-100 transition-transform group-hover:scale-110 duration-300 shrink-0";

  return (
    <div className="flex flex-col min-h-screen bg-white font-barlow">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col items-center gap-6 mb-8">
                <SectionTag>Mental Health Support</SectionTag>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal text-stone-900 tracking-tighter leading-[1.1] md:leading-tight">
                  Expert psychiatric care for <br />
                  <span className="font-instrument-serif italic text-orange-500">{location}, Pennsylvania.</span>
                </h1>
              </div>
              
              <p className="text-lg md:text-xl mb-10 text-stone-500 max-w-2xl mx-auto leading-relaxed font-medium">
                High-quality therapy and medication management just {getDistance(location)} from {location}. 100% Medicaid accepted with zero waitlist.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#222] hover:bg-stone-800 text-white rounded-full px-10 py-7 text-lg font-bold transition-all shadow-xl shadow-stone-200">
                  <Link href="/appointment">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Evaluation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-stone-600 border-stone-200 hover:bg-stone-50 rounded-full px-10 py-7 text-lg font-bold transition-all">
                  <a href="tel:+18146202162">
                    <Phone className="mr-2 h-5 w-5" />
                    (814) 620-2162
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 opacity-[0.03] rounded-full blur-[100px] -mr-64 -mt-64" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-50 opacity-[0.03] rounded-full blur-[100px] -ml-64 -mb-64" />
        </section>

        {/* Bento Grid: Local Advantage */}
        <section className="py-24 bg-stone-50/50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full">
              {/* Main Content Card */}
              <Card containerClassName="md:col-span-8 rounded-[2.5rem] min-h-[400px]" className="flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className={iconContainerStyles}>
                      <MapPin className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-stone-50 border border-stone-100 text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                      Location Advantage
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-normal leading-tight tracking-tighter text-stone-900 mb-6">
                    Professional support, <br />
                    <span className="font-instrument-serif italic text-orange-500">closer than you think.</span>
                  </h2>
                  <p className="text-stone-500 text-lg leading-relaxed font-medium max-w-xl">
                    Located at 869 Main Street in Darby, we are strategically positioned to serve {location} residents. Our clinic provides a warm, modern environment for healing, reachable in under {getDistance(location).split('(')[1].replace(')', '')} by car.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-8 border-t border-stone-100 mt-8">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-700 text-sm font-bold border border-orange-100">
                    <Clock className="w-4 h-4" /> 24h Response
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold border border-emerald-100">
                    <ShieldCheck className="w-4 h-4" /> Medicaid Only
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold border border-blue-100">
                    <Users className="w-4 h-4" /> No Waitlist
                  </div>
                </div>
              </Card>

              {/* Map Card */}
              <Card containerClassName="md:col-span-4 rounded-[2.5rem] min-h-[400px] p-0" className="p-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.123!2d-75.2612!3d39.9184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c39e8d!2s869+Main+St%2C+Darby%2C+PA+19023!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
              </Card>

              {/* Differentiators Grid */}
              <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "Medicaid-Only Focus", text: "We exclusively serve the Medicaid community, ensuring high-quality care is accessible to those who need it most.", icon: Shield },
                  { title: "Zero Waitlist", text: "Mental health care can't wait. We eliminate the 3-month delay typical of other clinics.", icon: Clock },
                  { title: "Community Driven", text: `We are part of the Delaware County fabric, dedicated to the wellness of ${location} families.`, icon: Heart }
                ].map((item, i) => (
                  <Card key={i} containerClassName="rounded-3xl" className="flex flex-col gap-4">
                    <div className={iconContainerStyles}>
                      <item.icon className="h-5 w-5 text-orange-500" />
                    </div>
                    <h4 className="font-bold text-stone-800 text-xl tracking-tight">{item.title}</h4>
                    <p className="text-stone-500 leading-relaxed text-sm font-medium">{item.text}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section: Stylized List */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center gap-4 mb-16 text-center">
              <SectionTag>Clinical Excellence</SectionTag>
              <h2 className="text-3xl md:text-5xl font-normal text-stone-900 tracking-tighter leading-tight">
                Specialized care for <span className="font-instrument-serif italic text-orange-500">every need.</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service, i) => (
                <Link key={i} href={service.link}>
                  <Card containerClassName="rounded-[2rem] group/service cursor-pointer h-full" className="flex flex-col items-center text-center">
                    <div className={cn(iconContainerStyles, "mb-6 bg-orange-50 border-orange-100")}>
                      <service.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 group-hover/service:text-orange-600 transition-colors mb-2">
                      {service.title}
                    </h3>
                    <div className="mt-auto pt-4 flex items-center gap-2 text-stone-400 font-bold text-[10px] uppercase tracking-widest">
                      Learn More <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-stone-50/50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-4 mb-16 text-center">
                <SectionTag>Information</SectionTag>
                <h2 className="text-3xl md:text-5xl font-normal text-stone-900 tracking-tighter leading-tight">
                  Your questions, <span className="font-instrument-serif italic text-orange-500">answered.</span>
                </h2>
              </div>
              
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((faq, index) => (
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
