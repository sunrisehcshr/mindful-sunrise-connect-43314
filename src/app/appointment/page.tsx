import React from 'react';
import { Metadata } from 'next';
import AppointmentSection from '@/components/Appointment/AppointmentSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import SEOHead from '@/components/SEOHead';

export const metadata: Metadata = {
  title: "Book a Therapy Appointment | Darby, PA | Sunrise",
  description: "Schedule your mental health appointment in Darby, PA. Medicaid only, no waitlist. Easy online booking for in-person or telehealth therapy. Call (814) 620-…",
  alternates: {
    canonical: "/appointment",
  },
};

export default function AppointmentPage() {
  <h1 className="sr-only">appointment</h1>
return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <AppointmentSection />
      </main>
      <Footer />
    </div>
  );
}
