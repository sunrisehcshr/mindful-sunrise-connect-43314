
import React from 'react';
import AppointmentSection from '../components/Appointment/AppointmentSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';

const Appointment = () => {
  return (
    <>
      <SEOHead
        title="Book a Therapy Appointment | Sunrise Human Care Services Darby"
        description="Schedule your mental health appointment in Darby, PA. Easy online booking for in-person or telehealth therapy sessions. New patients welcome. Medicaid accepted. Call (814) 620-2162 today."
        canonicalUrl="https://sunrisehumancare.com/appointment"
        keywords="therapy appointment Darby, book counseling session PA, schedule psychiatrist Delaware County, telehealth appointment, in-person therapy booking, same-week mental health appointments"
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
