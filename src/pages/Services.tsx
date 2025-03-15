
import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/services/ServicesSection';
import ConditionsSection from '../components/conditions/ConditionsSection';
import SpecialtiesSection from '../components/SpecialtiesSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';
import { Separator } from '@/components/ui/separator';

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
          <ServicesSection />
          
          <div className="container mx-auto px-4 py-8">
            <Separator className="bg-gradient-to-r from-transparent via-amber-200 to-transparent h-0.5" />
          </div>
          
          <SpecialtiesSection />
          
          <div className="container mx-auto px-4 py-8">
            <Separator className="bg-gradient-to-r from-transparent via-amber-200 to-transparent h-0.5" />
          </div>
          
          <ConditionsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;
