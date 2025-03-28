
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
          
          {/* Decorative separator */}
          <div className="container mx-auto px-4">
            <Separator className="bg-gradient-to-r from-transparent via-amber-300/30 to-transparent h-0.5 my-12" />
          </div>
          
          <ServicesSection />
          
          {/* Wave separator */}
          <div className="relative h-24 mt-12 overflow-hidden">
            <div className="absolute w-full h-24 bg-white" style={{ clipPath: 'polygon(0 0, 100% 50%, 100% 100%, 0% 100%)' }}></div>
          </div>
          
          <ConditionsSection />
          
          {/* Curved separator */}
          <div className="relative h-16 overflow-hidden">
            <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0 100H1440V0C1440 0 1082.89 100 720 100C357.11 100 0 0 0 0V100Z" fill="white" fillOpacity="0.3"></path>
            </svg>
          </div>
          
          <AboutSection />
          
          <WarmTestimonialsSection />
          
          {/* Simple separator */}
          <div className="container mx-auto px-4">
            <Separator className="bg-gradient-to-r from-transparent via-amber-300/30 to-transparent h-0.5 my-12" />
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
