
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
        {/* Subtle star decorations throughout the page */}
        <StarDecoration className="top-[10%] right-[5%]" size={12} opacity={0.15} animationDuration={25} />
        <StarDecoration className="top-[30%] left-[8%]" size={14} opacity={0.1} animationDuration={30} />
        <StarDecoration className="bottom-[35%] right-[12%]" size={10} opacity={0.2} animationDuration={20} />
        <StarDecoration className="bottom-[15%] left-[15%]" size={16} opacity={0.15} animationDuration={35} />
        <StarDecoration className="top-[60%] right-[20%]" size={8} opacity={0.2} animationDuration={15} />
        
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
