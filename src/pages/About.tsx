import React from 'react';
import AboutSection from '../components/AboutSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';
const About = () => {
  return <>
      <SEOHead title="About Us | Sunrise Human Care Services" description="Learn about our compassionate mental health care team in Havertown, PA. Dedicated professionals helping children, teens, adults, and seniors." />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 py-0">
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>;
};
export default About;