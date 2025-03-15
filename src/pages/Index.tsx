
import React from 'react';
import { motion } from 'framer-motion';
import WarmHeroSection from '../components/WarmHeroSection';
import ServicesSection from '../components/services/ServicesSection';
import ConditionsSection from '../components/conditions/ConditionsSection';
import WarmTestimonialsSection from '../components/WarmTestimonialsSection';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import AppointmentSection from '../components/Appointment/AppointmentSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <>
      <SEOHead
        title="Mental Health Therapy & Psychiatry in Havertown, PA | Sunrise Human Care Services"
        description="Leading mental health clinic in Havertown, PA. Specialized therapy for anxiety, depression, ADHD, and trauma. In-person and telehealth services available. Call (814) 620-2162 to schedule today."
        canonicalUrl="https://sunrisehcsllc.com/"
      />
      <motion.div 
        className="flex flex-col min-h-screen relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Navbar />
        <main className="flex-grow">
          <WarmHeroSection />
          
          <div className="container mx-auto px-4 py-8">
            <Separator className="bg-gradient-to-r from-transparent via-amber-200 to-transparent h-0.5" />
          </div>
          
          <ServicesSection />
          
          <div className="container mx-auto px-4 py-8">
            <Separator className="bg-gradient-to-r from-transparent via-amber-200 to-transparent h-0.5" />
          </div>
          
          <ConditionsSection />
          
          <div className="container mx-auto px-4 py-8">
            <Separator className="bg-gradient-to-r from-transparent via-amber-200 to-transparent h-0.5" />
          </div>
          
          <AboutSection />
          
          <WarmTestimonialsSection />
          
          <div className="container mx-auto px-4 py-8">
            <Separator className="bg-gradient-to-r from-transparent via-amber-200 to-transparent h-0.5" />
          </div>
          
          <FAQSection />
          
          <AppointmentSection />
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
