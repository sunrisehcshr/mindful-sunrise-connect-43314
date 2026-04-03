"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Users, Heart, Shield, Calendar, MapPin, MessageCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
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

export default function MentalHealthDarbyClient() {
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
      answer: "If you're experiencing persistent feelings of sadness, anxiety, or stress that affect your daily life, relationships, or work, therapy can help. You don't need to be in crisis to benefit from professional support."
    },
    {
      question: "Do you offer services for children and families?",
      answer: "Yes, we provide therapy for children, adolescents, and families. Our licensed therapists are experienced in working with young people and understand the unique challenges they face."
    },
    {
      question: "What should I expect during my first visit?",
      answer: "Your first visit is an opportunity for you and your therapist to get to know each other. You'll discuss what brings you to therapy, your personal history, and your goals for treatment."
    },
    {
      question: "Is my information kept confidential?",
      answer: "Absolutely. We adhere to strict confidentiality standards and HIPAA regulations to protect your privacy. Your trust is essential to the therapeutic relationship."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster="/images/hero-poster.jpg"
            >
              <source src="/videos/hero-background.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-barlow leading-tight">
                Compassionate Mental Health Care in Darby, PA
              </h1>
              <p className="text-lg md:text-xl mb-8 font-barlow text-white/90 max-w-2xl mx-auto leading-relaxed">
                Expert therapy and psychiatric services tailored to your unique journey. 100% Medicaid accepted with no waitlist.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-stone-900 hover:bg-stone-100 rounded-full px-8 py-6 text-lg font-barlow">
                  <Link href="/appointment">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Evaluation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-barlow">
                  <a href="tel:+18146202162">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (814) 620-2162
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-stone-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center p-8 bg-white rounded-3xl shadow-sm border border-stone-100"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-barlow text-stone-800">Person-Centered</h3>
                <p className="text-stone-600 font-barlow leading-relaxed">
                  We treat you as a whole person, not just a set of symptoms. Your unique story and goals guide our care.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center p-8 bg-white rounded-3xl shadow-sm border border-stone-100"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-barlow text-stone-800">Expert Team</h3>
                <p className="text-stone-600 font-barlow leading-relaxed">
                  Our licensed therapists and psychiatric providers bring decades of clinical experience to every session.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center p-8 bg-white rounded-3xl shadow-sm border border-stone-100"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-barlow text-stone-800">Medicaid Focused</h3>
                <p className="text-stone-600 font-barlow leading-relaxed">
                  We believe expert care should be accessible. We exclusively accept Medicaid with no waitlists.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-barlow text-stone-800 tracking-tight">
                Specialized Mental Health Services
              </h2>
              <p className="text-lg text-stone-600 font-barlow leading-relaxed">
                From individual counseling to psychiatric evaluations, we provide a full spectrum of mental health support for the Darby community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 bg-stone-50 rounded-3xl border border-stone-100 hover:border-amber-200 hover:bg-white hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-500"
                >
                  <h3 className="text-xl font-bold mb-3 font-barlow text-stone-800 group-hover:text-amber-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 font-barlow leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-amber-600 font-semibold hover:gap-2 transition-all font-barlow"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-stone-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-12 font-barlow text-stone-800 text-center tracking-tight">
                Common Questions
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-white px-6 rounded-2xl border border-stone-100 shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-barlow text-lg font-bold text-stone-800 py-6 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-barlow text-stone-600 text-lg leading-relaxed pb-6">
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
