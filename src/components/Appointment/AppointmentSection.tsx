
import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '../ui/separator';
import SectionTag from '../ui/section-tag';
import AppointmentForm from './AppointmentForm';
import ContactInfo from './ContactInfo';
import OpeningHours from './OpeningHours';

const AppointmentSection = () => {
  return <section id="appointment" className="py-24 bg-inherit">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="max-w-3xl mx-auto text-center mb-12" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }}>
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.4
        }}>
            <SectionTag>Book Now</SectionTag>
          </motion.div>
          
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            Schedule an Appointment
          </motion.h2>
          
          <motion.p className="text-muted-foreground" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            Ready to start your journey toward better mental health? Get in touch with us today.
          </motion.p>
          
          <div className="mx-auto mt-6 mb-10 w-24">
            <Separator className="bg-gradient-to-r from-transparent via-orange-300/50 to-transparent h-0.5" />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <AppointmentForm />
          </div>
          
          <div className="space-y-8">
            <div className="h-64 md:h-80 rounded-xl overflow-hidden border border-amber-200 shadow-sm hover:shadow-md transition-shadow duration-300">
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
            
            <div className="bg-white/80 p-6 rounded-lg border border-amber-200 shadow-sm hover:shadow-md transition-shadow duration-300 warm-glow">
              <ContactInfo />
            </div>
            
            <div className="bg-white/80 p-6 rounded-lg border border-amber-200 shadow-sm hover:shadow-md transition-shadow duration-300 warm-glow">
              <OpeningHours />
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default AppointmentSection;
