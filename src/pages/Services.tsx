
import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/services/ServicesSection';
import ConditionsSection from '../components/conditions/ConditionsSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';
import { Separator } from '@/components/ui/separator';
import { Sparkles } from 'lucide-react';
import SpecialtiesSection from '../components/SpecialtiesSection';
import AppointmentSection from '../components/Appointment/AppointmentSection';

const Services = () => {
  return (
    <>
      <SEOHead 
        title="Our Services | Sunrise Human Care Services" 
        description="Comprehensive mental health services in Havertown, PA. Therapy for anxiety, depression, family counseling, and specialized care for all ages." 
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container mx-auto px-4 md:px-6 pt-8 pb-12">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="section-tag inline-flex items-center gap-1.5 font-semibold text-sm"
              >
                <Sparkles className="h-3.5 w-3.5" /> Mental Health Services
              </motion.span>
              
              <h1 className="text-4xl md:text-5xl font-bold mt-4 font-playfair">
                Comprehensive Mental Health Care
              </h1>
              
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Our expert team provides evidence-based treatments for a wide range of mental health 
                conditions, helping individuals, couples, and families lead healthier, more fulfilling lives.
              </p>
            </motion.div>
          </div>
          
          <ServicesSection />
          
          <div className="container mx-auto px-4 py-8">
            <Separator className="bg-gradient-to-r from-transparent via-amber-200 to-transparent h-0.5" />
          </div>
          
          <SpecialtiesSection />
          
          <div className="container mx-auto px-4 py-8">
            <Separator className="bg-gradient-to-r from-transparent via-amber-200 to-transparent h-0.5" />
          </div>
          
          <ConditionsSection />
          
          <AppointmentSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;
