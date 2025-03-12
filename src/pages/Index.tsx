
import React from 'react';
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
import SchemaMarkup from '../components/SchemaMarkup';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const StarDecoration = ({ className = "", size = 16, opacity = 0.2, animationDuration = 20 }) => (
  <motion.div 
    className={`absolute ${className}`}
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration: animationDuration, repeat: Infinity, ease: "linear" }}
  >
    <Star size={size} className={`text-amber-300 opacity-${opacity * 100}`} fill="currentColor" />
  </motion.div>
);

const Index = () => {
  return (
    <>
      <SEOHead
        title="Sunrise Human Care Services | Mental Health Services in Havertown, PA"
        description="Dedicated mental health professionals offering therapy services in Havertown, PA. Counseling for anxiety, depression, and family issues in a warm, supportive environment."
      />
      <SchemaMarkup />
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        {/* More subtle star decorations throughout the page */}
        <StarDecoration className="top-[15%] right-[8%] z-0" size={10} opacity={0.1} animationDuration={28} />
        <StarDecoration className="top-[40%] left-[5%] z-0" size={12} opacity={0.08} animationDuration={32} />
        <StarDecoration className="bottom-[40%] right-[7%] z-0" size={8} opacity={0.12} animationDuration={24} />
        <StarDecoration className="bottom-[20%] left-[10%] z-0" size={14} opacity={0.1} animationDuration={36} />
        <StarDecoration className="top-[70%] right-[15%] z-0" size={6} opacity={0.1} animationDuration={20} />
        
        <Navbar />
        <main className="flex-grow">
          <WarmHeroSection />
          <ServicesSection />
          <ConditionsSection />
          <AboutSection />
          <WarmTestimonialsSection />
          <FAQSection />
          <AppointmentSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

