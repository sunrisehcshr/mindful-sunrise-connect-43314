
import React from 'react';
import WarmHeroSection from '../components/WarmHeroSection';
import ServicesSection from '../components/services/ServicesSection';
import ConditionsSection from '../components/conditions/ConditionsSection';
import WarmTestimonialsSection from '../components/WarmTestimonialsSection';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import AppointmentForm from '../components/AppointmentForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';
import SchemaMarkup from '../components/SchemaMarkup';

const Index = () => {
  return (
    <>
      <SEOHead
        title="Sunrise Human Care Services | Mental Health Services in Havertown, PA"
        description="Dedicated mental health professionals offering therapy services in Havertown, PA. Counseling for anxiety, depression, and family issues in a warm, supportive environment."
      />
      <SchemaMarkup />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <WarmHeroSection />
          <ServicesSection />
          <ConditionsSection />
          <AboutSection />
          <WarmTestimonialsSection />
          <FAQSection />
          <AppointmentForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
