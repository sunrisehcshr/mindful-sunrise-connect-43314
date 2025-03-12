
import React from 'react';
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
        <main className="flex-grow pt-24">
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;
