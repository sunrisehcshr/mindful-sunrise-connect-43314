
import React from 'react';
import { motion } from 'framer-motion';
import WarmHeroSection from '../components/WarmHeroSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ServicesSection from '../components/services/ServicesSection';
import ConditionsSection from '../components/conditions/ConditionsSection';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/team/TeamSection';
import FAQSection from '../components/FAQSection';
import AppointmentSection from '../components/Appointment/AppointmentSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';
import SchemaMarkup from '../components/SchemaMarkup';
import { Helmet } from 'react-helmet-async';

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
        description="Expert mental health care in Havertown, PA for anxiety, depression, ADHD, and trauma. In-person and telehealth sessions available with licensed therapists and psychiatrists in Delaware County. Schedule your appointment today: (814) 620-2162." 
        canonicalUrl="https://sunrisehumancare.com/" 
        keywords="mental health care in Havertown, mental health Havertown, anxiety therapy Delaware County, depression counseling Havertown, ADHD treatment PA, psychiatrist near me, therapist Havertown PA, telehealth therapy, in-person counseling"
        breadcrumbs={homeBreadcrumbs}
      />
      <SchemaMarkup />
      
      {/* Add local business schema and geo-targeting tags */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sunrise Human Care Services - Mental Health Clinic",
            "description": "Mental health clinic in Havertown, PA providing therapy, counseling, and psychiatric services for Delaware County residents.",
            "url": "https://sunrisehumancare.com",
            "telephone": "+18146202162",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2050 West Chester Pike",
              "addressLocality": "Havertown",
              "addressRegion": "PA",
              "postalCode": "19083",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.9707",
              "longitude": "-75.3151"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Havertown",
                "containedInPlace": {
                  "@type": "AdministrativeArea",
                  "name": "Delaware County",
                  "containedInPlace": {
                    "@type": "AdministrativeArea",
                    "name": "Pennsylvania",
                    "containedInPlace": {
                      "@type": "Country",
                      "name": "United States"
                    }
                  }
                }
              },
              {
                "@type": "City",
                "name": "Broomall"
              },
              {
                "@type": "City",
                "name": "Ardmore"
              },
              {
                "@type": "City",
                "name": "Drexel Hill"
              },
              {
                "@type": "City",
                "name": "Springfield"
              }
            ],
            "hasMap": "https://www.google.com/maps?q=39.9707,-75.3151"
          })}
        </script>
      </Helmet>
      
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
          <TeamSection />
          <FAQSection />
          <AppointmentSection />
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
