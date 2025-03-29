
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
          {/* Hero Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-r from-orange-500 to-amber-400 py-16 md:py-24 overflow-hidden"
          >
            <div className="absolute inset-0 z-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
                >
                  Comprehensive Mental Health Services
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-lg md:text-xl text-white/90 mb-8"
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
