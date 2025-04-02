
import React from 'react';
import AboutSection from '../components/AboutSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';

const About = () => {
  return (
    <>
      <SEOHead 
        title="About Our Mental Health Clinic | Sunrise Human Care Services Havertown" 
        description="Meet our compassionate mental health professionals in Havertown, PA. Licensed therapists and psychiatrists providing personalized care for children, teens, adults, and seniors. Trusted local therapy since 2018." 
        canonicalUrl="https://sunrisehumancare.com/about"
        keywords="Havertown therapists, mental health professionals PA, licensed psychiatrists Delaware County, child therapy Havertown, adult counseling Pennsylvania, senior mental health services" 
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
