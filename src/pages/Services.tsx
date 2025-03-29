
import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/services/ServicesSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';

const Services = () => {
  return (
    <>
      <SEOHead 
        title="Our Services | Sunrise Human Care Services" 
        description="Comprehensive mental health services in Havertown, PA. Therapy for anxiety, depression, family counseling, and specialized care for all ages." 
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 py-0 bg-white">
          {/* Hero Section - Updated to match home hero section */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden pb-20 pt-16 sm:pb-24 sm:pt-20"
          >
            {/* Enhanced background with more vibrant yellow gradient */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/80 via-white/30 to-amber-50/90"></div>
              <svg className="h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="warm-pattern" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="scale(0.75) rotate(0)">
                    <rect x="0" y="0" width="100%" height="100%" fill="none" />
                    <path d="M100 0H0V100" stroke="rgba(252, 211, 77, 0.4)" fill="none" strokeWidth="1" />
                    <path d="M0 50H100M50 0V100" stroke="rgba(252, 211, 77, 0.3)" fill="none" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#warm-pattern)" />
              </svg>
            </div>
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-950 mb-6"
                >
                  Comprehensive Mental Health Services
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-lg md:text-xl text-amber-900 mb-8"
                >
                  Our wide range of therapeutic services are designed to support individuals, couples, and families through life's challenges.
                </motion.p>
              </div>
            </div>
          </motion.section>
          
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;
