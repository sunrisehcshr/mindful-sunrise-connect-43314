
import React from 'react';
import { motion } from 'framer-motion';
import AppointmentForm from './AppointmentForm';
import ContactInfo from './ContactInfo';
import OpeningHours from './OpeningHours';

const AppointmentSection = () => {
  return (
    <section id="appointment" className="py-20 md:py-28 bg-[#faf8f4]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-14" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70 mb-4">Book Now</span>
          
          <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-5xl text-stone-800 tracking-tight leading-tight mb-4">
            Schedule an
            <span className="block font-instrument-serif italic text-amber-400 font-normal">appointment</span>
          </h2>
          
          <p className="text-stone-600 font-barlow">
            Ready to start your journey toward better mental health? Get in touch with us today.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <AppointmentForm />
          </div>
          
          <div className="space-y-6">
            <div className="h-64 md:h-80 rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow duration-300">
              <iframe 
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=869+Main+Street,+Darby,+PA+19023&zoom=15" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sunrise Human Care Services location map"
              ></iframe>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 hover:border-amber-200 hover:shadow-sm transition-all duration-300">
              <ContactInfo />
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 hover:border-amber-200 hover:shadow-sm transition-all duration-300">
              <OpeningHours />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
