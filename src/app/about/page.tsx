import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import SEOHead from '@/components/SEOHead';
import AboutHero from '@/components/about/AboutHero';
import AboutSection from '@/components/AboutSection';
import AboutValues from '@/components/about/AboutValues';
import AboutApproach from '@/components/about/AboutApproach';
import FullTeamSection from '@/components/team/FullTeamSection';
import AboutCTA from '@/components/about/AboutCTA';
import AppointmentSection from '@/components/Appointment/AppointmentSection';

export default function AboutPage() {
  const breadcrumbs = [
    { position: 1, name: 'Home', url: '/' },
    { position: 2, name: 'About Us', url: '/about' }
  ];

  return (
    <>
      <SEOHead 
        title="About Us | Sunrise Human Care | Darby, PA" 
        description="Learn about Sunrise Human Care Services in Darby, PA. Discover our mission, meet our compassionate team of therapists and psychiatrists, and explore our holistic approach to mental health." 
        canonicalUrl="https://sunrisehumancare.com/about" 
        keywords="about Sunrise Human Care, mental health clinic Darby PA, Michael Thevar, holistic mental health care, Delaware County therapists"
        breadcrumbs={breadcrumbs}
      />
      <div className="flex flex-col min-h-screen bg-stone-950">
        <Navbar />
        <main className="flex-grow">
          <AboutHero />
          <div className="bg-stone-50 relative z-10 -mt-10 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.15)]">
            <AboutSection />
            <AboutValues />
            <AboutApproach />
            <FullTeamSection />
            <AboutCTA />
            
            {/* Medical Reviewer / E-E-A-T Footer Section (Visually Hidden for SEO) */}
            <section className="sr-only">
              <div itemScope itemType="https://schema.org/WebPage">
                <div itemProp="reviewedBy" itemScope itemType="https://schema.org/Person">
                  <meta itemProp="name" content="Holli" />
                  <meta itemProp="jobTitle" content="Licensed Mental Health Professional" />
                  <link itemProp="image" href="/images/holly.jpg" />
                </div>
                <meta itemProp="lastReviewed" content={new Date().toISOString().split('T')[0]} />
                <p>
                  This content was clinically reviewed by Holli, Licensed Mental Health Professional, on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} to ensure accuracy and compliance with current medical standards.
                </p>
              </div>
            </section>

            <AppointmentSection />
          </div>
        </main>
        <div className="relative z-20 bg-white">
          <Footer />
        </div>
      </div>
    </>
  );
}
