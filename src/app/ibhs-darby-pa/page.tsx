"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Calendar, Users, BookOpen, ArrowRight, Shield, Heart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import SEOHead from '@/components/SEOHead';
import AppointmentSection from '@/components/Appointment/AppointmentSection';

export default function IBHSServicesPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://sunrisehumancare.com", position: 1 },
    { name: "Services", url: "https://sunrisehumancare.com/services", position: 2 },
    { name: "IBHS Services", url: "https://sunrisehumancare.com/ibhs-darby-pa", position: 3 }
  ];

  return (
    <>
      <SEOHead
        title="IBHS Services in Darby, PA | Intensive Behavioral Health Services | Sunrise Human Care"
        description="Intensive Behavioral Health Services (IBHS) in Darby, PA and Delaware County. Evidence-based behavioral therapy for children and adolescents with autism, ADHD, and behavioral challenges. Medicaid accepted."
        canonicalUrl="https://sunrisehumancare.com/ibhs-darby-pa"
        keywords="IBHS Delaware County PA, intensive behavioral health services Darby, IBHS near me, ABA therapy Darby PA, behavioral health children PA, IBHS Medicaid Delaware County, autism services Darby"
        breadcrumbs={breadcrumbs}
        serviceSchema={{
          name: "Intensive Behavioral Health Services (IBHS)",
          description: "Evidence-based behavioral health interventions for children and adolescents in Darby, PA and Delaware County.",
          provider: "Sunrise Human Care Services",
          serviceType: "Intensive Behavioral Health Services",
          areaServed: "Darby, PA and Delaware County"
        }}
      />

      <motion.div
        className="flex flex-col min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <main className="flex-grow pt-24">
          {/* Hero Section */}
          <section className="relative py-16 md:py-24 bg-gradient-to-br from-amber-50 via-white to-amber-50/30 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4 border border-amber-200">
                  Behavioral Health Services
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-6 leading-tight font-barlow tracking-tight">
                  Intensive Behavioral Health Services (IBHS) in Darby, PA
                </h1>
                <p className="text-lg text-stone-600 mb-8 max-w-3xl mx-auto font-barlow leading-relaxed">
                  Comprehensive, evidence-based behavioral health interventions designed to help children and adolescents thrive. Serving families across Delaware County with Medicaid-covered services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-[#222] hover:bg-stone-800 text-white rounded-full font-barlow">
                    <a href="tel:+18146202162">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (814) 620-2162
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full border-stone-200 hover:bg-stone-50 font-barlow">
                    <Link href="/appointment">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* What is IBHS */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-stone-800 mb-8 font-barlow tracking-tight">
                  What Are Intensive Behavioral Health Services?
                </h2>
                <div className="space-y-6 text-stone-600 font-barlow leading-relaxed text-lg">
                  <p>
                    Intensive Behavioral Health Services (IBHS) is a Pennsylvania-regulated program that provides individualized, evidence-based behavioral health treatment for children and adolescents under 21. IBHS delivers effective, outcome-driven care tailored to each child&apos;s environment.
                  </p>
                  <p>
                    At Sunrise Human Care Services in Darby, PA, our IBHS program addresses a wide range of behavioral and emotional challenges, including autism spectrum disorder (ASD), ADHD, anxiety, oppositional defiant disorder, and other conditions that impact daily functioning.
                  </p>
                  <p>
                    Our licensed clinicians work closely with families, schools, and other care providers to create comprehensive treatment plans. Services can be delivered in the home, school, or community settings — wherever the child needs the most support.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                  {[
                    {
                      icon: Users,
                      title: "Individual Services",
                      description: "One-on-one therapeutic interventions with a Behavior Consultant (BC) or Behavioral Health Technician (BHT) to address specific behavioral goals."
                    },
                    {
                      icon: BookOpen,
                      title: "Evidence-Based Approaches",
                      description: "We utilize proven methodologies including Applied Behavior Analysis (ABA) and other outcome-driven interventions."
                    },
                    {
                      icon: Shield,
                      title: "Pennsylvania Regulated",
                      description: "Our program fully complies with PA Department of Human Services regulations for Intensive Behavioral Health Services."
                    },
                    {
                      icon: Heart,
                      title: "Family-Centered Care",
                      description: "We actively involve parents and caregivers in the treatment process to ensure sustainable progress and support."
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-amber-50/50 p-8 rounded-3xl border border-amber-100 hover:border-amber-200 transition-all">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                        <item.icon className="h-6 w-6 text-amber-600" />
                      </div>
                      <h3 className="text-xl font-bold text-stone-800 mb-3 font-barlow">{item.title}</h3>
                      <p className="text-stone-600 font-barlow leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 md:py-24 bg-stone-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-2xl md:text-4xl font-bold text-stone-800 mb-4 font-barlow tracking-tight">How IBHS Can Help Your Child</h2>
                  <p className="text-stone-600 font-barlow text-lg">Our program is designed to deliver measurable improvements in daily functioning and quality of life.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Improve social and communication skills",
                    "Reduce challenging behaviors at home and school",
                    "Develop emotional regulation strategies",
                    "Increase independence in daily activities",
                    "Support academic success and engagement",
                    "Enhance parent and caregiver coping skills",
                    "Provide crisis prevention and management",
                    "Coordinate care across all environments"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white p-5 rounded-2xl border border-stone-200 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-amber-600 shrink-0" />
                      <span className="text-stone-700 font-barlow font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <AppointmentSection />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
