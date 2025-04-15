
import React from 'react';
import { motion } from 'framer-motion';
import WarmHeroSection from '../components/WarmHeroSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ServicesSection from '../components/services/ServicesSection';
import ConditionsSection from '../components/conditions/ConditionsSection';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import AppointmentSection from '../components/Appointment/AppointmentSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';
import SchemaMarkup from '../components/SchemaMarkup';

const Index = () => {
  // Home page breadcrumbs
  const homeBreadcrumbs = [
    {
      name: "Home",
      url: "https://sunrisehumancare.com",
      position: 1
    }
  ];
  
  return (
    <>
      <SEOHead 
        title="Mental Health Therapy & Psychiatry in Havertown, PA | Sunrise Human Care Services" 
        description="Expert mental health care in Havertown, PA for anxiety, depression, ADHD, and trauma. In-person and telehealth sessions available with licensed therapists and psychiatrists. Schedule your appointment today: (814) 620-2162." 
        canonicalUrl="https://sunrisehumancare.com/" 
        keywords="mental health care in Havertown, mental health Havertown, anxiety therapy Delaware County, depression counseling Havertown, ADHD treatment PA, psychiatrist near me, therapist Havertown PA, telehealth therapy, in-person counseling"
        breadcrumbs={homeBreadcrumbs}
      />
      <SchemaMarkup />
      <motion.div 
        className="flex flex-col min-h-screen relative overflow-hidden" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.6 }}
      >
        <Navbar />
        <main className="flex-grow">
          <WarmHeroSection />
          <WhyChooseUsSection />
          <ServicesSection />
          <ConditionsSection />
          <AboutSection />
          <FAQSection />
          <AppointmentSection />
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
