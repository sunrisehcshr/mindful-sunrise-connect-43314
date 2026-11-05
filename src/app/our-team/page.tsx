import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import FullTeamSection from '@/components/team/FullTeamSection';
import AppointmentSection from '@/components/Appointment/AppointmentSection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: "Our Team | Mental Health Professionals in Darby, PA | Sunrise",
  description: "Meet the professionals at Sunrise Human Care Services in Darby, PA. Our team provides compassionate, person-centered mental health care.",
  alternates: {
    canonical: "/our-team",
  },
  keywords: "Sunrise Human Care team, mental health professionals Darby PA, therapists Darby PA",
};

export default function OurTeamPage() {
  const breadcrumbs = [
    { position: 1, name: 'Home', url: '/' },
    { position: 2, name: 'Our Team', url: '/our-team' }
  ];

  return (
    <>
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <div className="flex flex-col min-h-screen bg-stone-50">
        <Navbar />
        <main className="flex-grow pt-20">
          <FullTeamSection />
          <AppointmentSection />
        </main>
        <div className="relative z-20 bg-white">
          <Footer />
        </div>
      </div>
    </>
  );
}
