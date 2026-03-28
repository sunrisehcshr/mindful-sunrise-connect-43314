
import React from 'react';
import { Helmet } from 'react-helmet-async';
import FAQSection from '../components/FAQ/FAQSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What mental health services do you offer at your Darby, PA clinic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide comprehensive mental health services, including individual therapy, couple Counseling, group therapy, family counseling, psychiatric evaluations, and medication management. Our team addresses various conditions such as anxiety, depression, PTSD, and substance use disorders."
      }
    },
    {
      "@type": "Question",
      "name": "Which insurance plans are currently accepted at your Darby clinic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We currently accept Medicaid for our mental health services. We understand the importance of accessible care and are committed to serving the Medicaid community with quality mental health treatment."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if I need to seek help from a mental health professional?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you're experiencing persistent feelings of sadness, anxiety, anger, or if these emotions interfere with daily activities and relationships, it may be beneficial to consult a mental health professional."
      }
    },
    {
      "@type": "Question",
      "name": "What should I expect during my first visit to your clinic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "During your initial visit, our clinicians will conduct a comprehensive assessment to understand your mental health needs. This evaluation helps us create a personalized treatment plan tailored to your specific goals and concerns."
      }
    },
    {
      "@type": "Question",
      "name": "How do I schedule an appointment at your Darby clinic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To schedule an appointment, please contact our office directly via phone or through our website's appointment request form. Our team will guide you through the process and address any questions you may have."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer virtual therapy sessions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer virtual therapy sessions for individuals who prefer remote care. Our telehealth services provide a secure and convenient way to access therapy from the comfort of your home. Contact us to learn more about availability and scheduling."
      }
    },
    {
      "@type": "Question",
      "name": "What steps should I take if I or someone I know is in crisis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you or someone you know is struggling or in crisis, help is available. Call or text 988 to speak with a trained crisis counselor any time of day or night."
      }
    }
  ]
};

const FAQ = () => {
  return (
    <>
      <SEOHead
        title="Frequently Asked Questions | Sunrise Human Care Services"
        description="Answers to common questions about our mental health services in Darby, PA. Learn about therapy options, insurance, and appointment information."
        canonicalUrl="https://sunrisehumancare.com/faq"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchemaData)}
        </script>
      </Helmet>
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
