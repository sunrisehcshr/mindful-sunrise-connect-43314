"use client";

import React from 'react';
import { motion } from 'framer-motion';
import WarmHeroSection from '@/components/WarmHeroSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ServicesSection from '@/components/services/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ConditionsSection from '@/components/conditions/ConditionsSection';
import AboutUsSection from '@/components/ui/AboutUsSection';
import TeamSection from '@/components/team/TeamSection';
import FAQSection from '@/components/FAQSection';

import AppointmentSection from '@/components/Appointment/AppointmentSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import SEOHead from '@/components/SEOHead';
import SchemaMarkup from '@/components/SchemaMarkup';

export default function Home() {
  const homeBreadcrumbs = [
    {
      name: "Home",
      url: "https://sunrisehumancare.com",
      position: 1
    }
  ];
  
  const homeFaqs = [{
    question: "What mental health services do you offer at your Darby, PA clinic?",
    answer: "We provide comprehensive mental health care in Darby, including individual therapy, couples counseling, group therapy, family counseling, psychiatric evaluations, and medication management."
  }, {
    question: "Which insurance plans are currently accepted at your Darby clinic?",
    answer: "We currently accept Medicaid for our mental health services in Darby. We understand the importance of accessible care and are committed to serving the Medicaid community with quality mental health treatment."
  }, {
    question: "How do I schedule an appointment at your Darby clinic?",
    answer: "To schedule an appointment for mental health care in Darby, please contact our office directly at (814) 620-2162 or use our website's appointment request form. Our friendly staff will guide you through the process."
  }, {
    question: "Do you offer virtual therapy sessions?",
    answer: "Yes, we offer virtual therapy sessions for individuals who prefer remote care. Our telehealth services provide a secure and convenient way to access therapy from the comfort of your home."
  }];

  return (
    <>
      <SEOHead 
        title="Mental Health Therapy & Psychiatry in Darby, PA | Sunrise Human Care Services" 
        description="Expert mental health care in Darby, PA. Licensed therapists & psychiatrists for anxiety, depression, ADHD & trauma. Medicaid only, no waitlist. Call (814) 620-2162." 
        canonicalUrl="https://sunrisehumancare.com/" 
        keywords="mental health care in Darby, mental health Darby, anxiety therapy Delaware County, depression counseling Darby, ADHD treatment PA, psychiatrist near me, therapist Darby PA, telehealth therapy, in-person counseling"
      />
      <SchemaMarkup />
      <SchemaMarkup type="FAQPage" data={homeFaqs} />
      
      <motion.div 
        className="flex flex-col min-h-screen relative bg-white" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.6 }}
      >
        <Navbar />
        <main className="flex-grow">
          <div className="relative">
            <WarmHeroSection />
            <div className="relative z-10 bg-white overflow-hidden">
              <WhyChooseUsSection />
              <ServicesSection />
              <HowItWorksSection />
              <ConditionsSection />
              <AboutUsSection />
              <TeamSection />
              <FAQSection />
              <AppointmentSection />
            </div>
          </div>
        </main>
        <div className="relative z-20 bg-white">
          <Footer />
        </div>
      </motion.div>
    </>
  );
}
