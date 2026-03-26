
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X } from 'lucide-react';
import WarmHeroSection from '../components/WarmHeroSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ServicesSection from '../components/services/ServicesSection';
import ConditionsSection from '../components/conditions/ConditionsSection';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/team/TeamSection';
import FAQSection from '../components/FAQSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AppointmentSection from '../components/Appointment/AppointmentSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';
import SchemaMarkup from '../components/SchemaMarkup';

const BANNER_KEY = 'nd-banner-new-location-2025';

const Index = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(BANNER_KEY) === 'true') return;
    const timer = setTimeout(() => setShowNotification(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const dismissNotification = () => {
    setShowNotification(false);
    localStorage.setItem(BANNER_KEY, 'true');
  };

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
        title="Mental Health Therapy & Psychiatry in Darby, PA | Sunrise Human Care Services" 
        description="Expert mental health care in Darby, PA for anxiety, depression, ADHD, and trauma. In-person and telehealth sessions available with licensed therapists and psychiatrists in Delaware County. Schedule your appointment today: (814) 620-2162." 
        canonicalUrl="https://sunrisehumancare.com/" 
        keywords="mental health care in Darby, mental health Darby, anxiety therapy Delaware County, depression counseling Darby, ADHD treatment PA, psychiatrist near me, therapist Darby PA, telehealth therapy, in-person counseling"
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
          <div className="pt-20" />
          <WarmHeroSection />
          <WhyChooseUsSection />
          <ServicesSection />
          <ConditionsSection />
          <AboutSection />
          <TestimonialsSection />
          <TeamSection />
          <FAQSection />
          <AppointmentSection />
        </main>
        <Footer />

        {/* Notification popup */}
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, y: -30, x: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="fixed top-24 right-4 z-50 max-w-sm w-full bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-border overflow-hidden"
            >
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-1" />
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-full bg-accent flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-orange-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground">We've moved!</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Visit us at our new location: <strong className="text-foreground">869 Main Street, Darby, PA 19023</strong>
                    </p>
                  </div>
                  <button
                    onClick={dismissNotification}
                    className="flex-shrink-0 rounded-full p-1 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                    aria-label="Dismiss notification"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Index;
