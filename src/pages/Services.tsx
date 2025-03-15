
import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/services/ServicesSection';
import ConditionsSection from '../components/conditions/ConditionsSection';
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
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto"
              >
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full text-orange-800 text-sm font-medium mb-4">
                  Our Services
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-amber-950 font-caladea leading-tight">
                  Comprehensive Mental Health Services
                </h1>
                <p className="text-lg text-amber-900 mb-8">
                  At Sunrise Human Care Services, we offer a wide range of mental health services tailored to your individual needs. Our experienced team provides compassionate care for clients of all ages.
                </p>
              </motion.div>
            </div>
          </section>
          
          <div className="container mx-auto px-4 py-8">
            <Separator className="bg-gradient-to-r from-transparent via-amber-200 to-transparent h-0.5" />
          </div>
          
          <ServicesSection />
          
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
