
import React from 'react';
import WarmHeroSection from '../components/WarmHeroSection';
import ServicesSection from '../components/services/ServicesSection';
import WarmTestimonialsSection from '../components/WarmTestimonialsSection';
import FAQSection from '../components/FAQ/FAQSection';
import AppointmentSection from '../components/Appointment/AppointmentSection';
import SEOHead from '../components/SEOHead';
import SchemaMarkup from '../components/SchemaMarkup';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';

export default function Index() {
  return (
    <>
      <SEOHead
        title="Mental Health Clinic in Havertown, PA | Sunrise Human Care Services"
        description="Find compassionate mental health care for children, teens, adults, and seniors in Havertown, PA. Expert therapy for anxiety, depression, and well-being."
      />
      <SchemaMarkup />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <WarmHeroSection />
          <AboutSection />
          <ServicesSection />
          <WarmTestimonialsSection />
          <FAQSection />
          <AppointmentSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
