"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import { ArrowRight, Phone, Users, Heart, Shield, Calendar, MapPin, MessageCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MentalHealthDarbyPage() {
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

  const services = [
    {
      title: "Individual Therapy",
      description: "Private, one-on-one sessions with a licensed therapist to address personal challenges and promote emotional well-being.",
      link: "/individual-therapy-darby-pa"
    },
    {
      title: "Couples Counseling",
      description: "Supportive therapy for partners looking to strengthen communication, rebuild trust, and navigate relationship challenges together.",
      link: "/couples-counseling-darby-pa"
    },
    {
      title: "Family Therapy",
      description: "Guided sessions designed to improve family dynamics, resolve conflicts, and foster healthier connections among family members.",
      link: "/family-therapy-darby-pa"
    },
    {
      title: "Child & Adolescent Therapy",
      description: "Age-appropriate therapeutic support for children and teens facing emotional, behavioral, or developmental concerns.",
      link: "/child-therapy-darby-pa"
    },
    {
      title: "Psychiatric Evaluations",
      description: "Comprehensive assessments conducted by qualified professionals to understand mental health needs and guide treatment planning.",
      link: "/psychiatric-evaluations-darby-pa"
    },
    {
      title: "Medication Management",
      description: "Careful oversight of psychiatric medications to ensure safe, effective treatment as part of a comprehensive care plan.",
      link: "/medication-management-darby-pa"
    },
    {
      title: "Grief Therapy",
      description: "Compassionate support for individuals processing loss and navigating the emotional journey of grief.",
      link: "/grief-therapy-darby-pa"
    },
    {
      title: "Relationship Therapy",
      description: "Therapeutic guidance for individuals seeking to improve interpersonal skills and build healthier relationships.",
      link: "/relationship-therapy-darby-pa"
    }
  ];

  const faqs = [
    {
      question: "How do I know if I should seek therapy?",
      answer: "If you're experiencing persistent feelings of sadness, anxiety, or stress that affect your daily life, relationships, or work, therapy can help. You don't need to be in crisis to benefit from professional support. Many people seek therapy to better understand themselves, develop coping strategies, or simply have a safe space to process life's challenges. If you're unsure, we encourage you to reach out—our team can help you determine if our services are right for you."
    },
    {
      question: "Do you offer services for children and families?",
      answer: "Yes, we provide therapy for children, adolescents, and families. Our licensed therapists are experienced in working with young people and understand the unique challenges they face. Family therapy sessions are also available to help improve communication, resolve conflicts, and strengthen family bonds. We create a supportive environment where every family member feels heard and respected."
    },
    {
      question: "What should I expect during my first visit?",
      answer: "Your first visit is an opportunity for you and your therapist to get to know each other. You'll discuss what brings you to therapy, your personal history, and your goals for treatment. This initial session helps us understand your needs and develop a personalized care plan. There's no pressure to share more than you're comfortable with—the pace is always guided by you."
    },
    {
      question: "Is my information kept confidential?",
      answer: "Absolutely. We adhere to strict confidentiality standards and HIPAA regulations to protect your privacy. Your information is only shared with your consent, or as required by law. We understand the importance of trust in the therapeutic relationship and take every precaution to ensure your information remains secure."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Mental Health Therapy & Psychiatry in Darby, PA | Sunrise Human Care" 
        description="Expert mental health care in Darby, PA for anxiety, depression, ADHD, and trauma. In-person and telehealth sessions available with licensed therapists and psychiatrists in Delaware County. Schedule your appointment today: (814) 620-2162." 
        canonicalUrl="https://sunrisehumancare.com/mental-health-darby-pa" 
        keywords="mental health care in Darby, mental health Darby, anxiety therapy Delaware County, depression counseling Darby, ADHD treatment PA, psychiatrist near me, therapist Darby PA, telehealth therapy, in-person counseling"
      />
      <SchemaMarkup />
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          {/* Hero Section */}
          <section className="py-20 md:py-32 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70 mb-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-amber-100 shadow-sm"
                >
                  Mental Health Care in Darby, PA
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-barlow font-bold text-4xl md:text-6xl lg:text-7xl text-stone-800 tracking-tight leading-tight mb-8"
                >
                  Your Path to Mental Well-being
                  <span className="block font-instrument-serif italic text-amber-700/70 font-normal">Starts Here in Darby</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-stone-600 font-barlow mb-12 leading-relaxed max-w-2xl mx-auto"
                >
                  Compassionate, expert mental health care for children, teens, and adults in Delaware County. In-person and telehealth appointments available.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Link href="/appointment" className="w-full sm:w-auto bg-[#222] hover:bg-stone-800 text-white font-barlow font-medium py-4 px-8 rounded-full transition-all text-base inline-flex items-center justify-center gap-2">
                    Book an Appointment
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="tel:+18146202162" className="w-full sm:w-auto bg-white border border-stone-200 hover:border-amber-200 hover:bg-amber-50 text-stone-800 font-barlow font-medium py-4 px-8 rounded-full transition-all text-base inline-flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    (814) 620-2162
                  </a>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-800 tracking-tight mb-6">Our Mental Health Services</h2>
                <p className="text-stone-600 font-barlow text-lg">We provide a full range of behavioral health services tailored to your unique needs.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="bg-amber-50/50 rounded-3xl p-8 border border-amber-100 hover:border-amber-200 hover:bg-amber-50 transition-all group"
                  >
                    <h3 className="font-barlow font-bold text-xl text-stone-800 mb-4">{service.title}</h3>
                    <p className="text-stone-600 font-barlow mb-8 leading-relaxed">{service.description}</p>
                    <Link href={service.link} className="inline-flex items-center gap-2 text-amber-700 font-barlow font-semibold hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="py-20 md:py-32 bg-stone-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl text-stone-800 tracking-tight mb-6">Frequently Asked Questions</h2>
                  <p className="text-stone-600 font-barlow text-lg">Answers to common questions about mental health therapy in Darby, PA.</p>
                </div>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-2xl border border-stone-200 px-6 py-2 overflow-hidden shadow-sm">
                      <AccordionTrigger className="font-barlow font-bold text-lg text-stone-800 hover:no-underline text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="font-barlow text-stone-600 text-base leading-relaxed pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
