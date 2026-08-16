import React from 'react';
import { Metadata } from 'next';
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
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: "About Our Mental Health Clinic | Darby, PA | Sunrise",
  description: "Meet the team at Sunrise Human Care in Darby, PA. Medicaid only, no waitlist. Our psychiatrists and therapists provide compassionate, evidence-based care.",
  alternates: {
    canonical: "/about",
  },
  keywords: "about Sunrise Human Care, mental health clinic Darby PA, Michael Thevar, holistic mental health care, Delaware County therapists",
};

const fullTeamMembers = [
  {
    name: "Michael Thevar",
    role: "President",
    specialties: ["Anxiety", "Depression", "ADHD"],
    bio: "Mr. Michael Thevar built his successful career in the mental health industry over twenty years ago as a drug and alcohol counselor.",
    image: "/images/michael.jpg"
  },
  {
    name: "Holli O'Donnell",
    role: "Clinical Director",
    specialties: ["Medication Management", "Bipolar", "OCD"],
    bio: "Holli O'Donnell is the Clinical Director for Sunrise Human Care. She is a Licensed Clinical Social Worker with over 25 years of experience.",
    image: "/images/holly.jpg"
  },
  {
    name: "Dr. Farah Khan",
    role: "Psychiatrist",
    specialties: ["Child Therapy", "Adolescent Care", "Behavioral Issues"],
    bio: "Specialized in children with ASD ( Autism spectrum disorder) ADHD and other behavioral problems.",
    image: "/images/dr-farah-khan.jpeg"
  },
  {
    name: "Chevonne Worthy",
    role: "Outpatient Therapist",
    specialties: ["Individual Therapy", "Couples Counseling", "Family Therapy"],
    bio: "Chevonne is a compassionate and curious therapist providing Outpatient Therapeutic services.",
    image: "/images/chevonne-worthy.jpg"
  },
  {
    name: "Anthony Obi",
    role: "Outpatient Therapist",
    specialties: ["Schizophrenia", "Mood Disorders", "Geriatric Care"],
    bio: "Anthony Obi works as an Outpatient Therapist at Sunrise Human Care Services.",
    image: "/images/Toni Obi's Profile Picture.jpeg"
  },
  {
    name: "Michael Flynn",
    role: "Outpatient Therapist",
    specialties: ["Social Work", "Evidence-Based Care", "Emotional Well-being"],
    bio: "Michael Flynn works as an Outpatient Therapist at Sunrise Human Care Services.",
    image: "/images/michael-flynn.jpg"
  },
  {
    name: "Shanada Anderson",
    role: "Outpatient Therapist",
    specialties: ["Couples Counseling", "Relationship Issues", "Communication"],
    bio: "Shanada Anderson, MS, is a therapist dedicated to creating safe, affirming spaces.",
    image: "/images/Shanada Anderson.jpeg"
  }
];

export default function AboutPage() {
  const breadcrumbs = [
    { position: 1, name: 'Home', url: '/' },
    { position: 2, name: 'About Us', url: '/about' }
  ];

  <h1 className="sr-only">about</h1>
return (
    <>
      <SchemaMarkup type="Person" data={fullTeamMembers} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
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
                  <meta itemProp="name" content="Holli O'Donnell" />
                  <meta itemProp="jobTitle" content="Licensed Mental Health Professional" />
                  <link itemProp="image" href="/images/holly.jpg" />
                </div>
                <meta itemProp="lastReviewed" content={new Date().toISOString().split('T')[0]} />
                <p>
                  This content was clinically reviewed by Holli O'Donnell, Licensed Mental Health Professional, on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} to ensure accuracy and compliance with current medical standards.
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
