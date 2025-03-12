
import React from 'react';
import AppointmentSection from '../components/Appointment/AppointmentSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';

const Appointment = () => {
  return (
    <>
      <SEOHead
        title="Book an Appointment | Sunrise Human Care Services"
        description="Schedule a therapy session with our mental health professionals in Havertown, PA. Easy online booking for all your counseling needs."
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          <AppointmentSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Appointment;
