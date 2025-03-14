
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

const Index = () => {
  return (
    <>
      <SEOHead
        title="Mental Health Therapy & Psychiatry in Havertown, PA | Sunrise Human Care Services"
        description="Leading mental health clinic in Havertown, PA. Specialized therapy for anxiety, depression, ADHD, and trauma. In-person and telehealth services available. Call (814) 620-2162 to schedule today."
        canonicalUrl="https://sunrisehcsllc.com/"
      />
      <div className="flex flex-col min-h-screen relative overflow-hidden">
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
