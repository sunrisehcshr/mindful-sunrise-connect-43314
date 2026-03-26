
import React from 'react';
import FAQSection from '../components/FAQ/FAQSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';

const FAQ = () => {
  return (
    <>
      <SEOHead
        title="Frequently Asked Questions | Sunrise Human Care Services"
        description="Answers to common questions about our mental health services in Darby, PA. Learn about therapy options, insurance, and appointment information."
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FAQ;
