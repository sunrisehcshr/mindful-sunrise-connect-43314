
import React from 'react';
import ConditionsSection from '../components/conditions/ConditionsSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';

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
          <ConditionsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Conditions;
