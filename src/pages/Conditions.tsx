
import React from 'react';
import ConditionsSection from '../components/conditions/ConditionsSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';
import PageHeader from '@/components/ui/page-header';
import { motion } from 'framer-motion';

const Conditions = () => {
  return (
    <>
      <SEOHead 
        title="Conditions We Treat | Sunrise Human Care Services" 
        description="Comprehensive treatment for anxiety, depression, ADHD, and other mental health conditions in Havertown, PA. Evidence-based care for all ages." 
        canonicalUrl="/conditions"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 py-0 bg-white">
          {/* Hero Section */}
          <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-500 to-amber-400"></div>
            
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
            
            {/* Animated particles effect */}
            <motion.div 
              className="absolute inset-0 z-0 opacity-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1.5 }}
            >
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-white"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <PageHeader
                title="Conditions We Treat"
                description="Our experienced team provides evidence-based treatment for a wide range of mental health conditions affecting children, adolescents, adults, and seniors."
                className="text-white"
              >
                <motion.div 
                  className="mt-8 flex flex-wrap gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {['Anxiety', 'Depression', 'ADHD', 'Trauma', 'OCD', 'Bipolar'].map((condition, i) => (
                    <motion.span 
                      key={i}
                      className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white border border-white/20"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                    >
                      {condition}
                    </motion.span>
                  ))}
                </motion.div>
              </PageHeader>
            </div>
          </section>
          
          <ConditionsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Conditions;
