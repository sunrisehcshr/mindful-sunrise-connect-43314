
import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import AppointmentDialog from './Appointment/AppointmentDialog';

const WarmHeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center" id="home">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      <div className="container mx-auto px-4 z-10 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-400/90">
              Mental Health Clinic in Darby
            </span>
          </motion.div>

          <motion.h1
            className="font-barlow font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-white leading-tight tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Step into a brighter tomorrow
            <span className="block font-instrument-serif italic text-amber-300/80 font-normal">with Sunrise Human Care</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed font-barlow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A brighter tomorrow starts with the right support today. Taking the first step toward better mental health is an act of courage - and we're here to support your journey with expert counseling, therapy, and psychiatric services tailored to your unique needs.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="tel:+18146202162" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-stone-900 hover:bg-white/90 font-barlow font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 group">
                <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Speak with a Therapist
              </Button>
            </a>
            <AppointmentDialog>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white font-barlow font-semibold rounded-full hover:bg-white/10 hover:border-white/50 shadow-sm hover:shadow-md transition-all duration-300 group">
                <Calendar className="mr-2 h-4 w-4 group-hover:text-amber-300" />
                Book Appointment
              </Button>
            </AppointmentDialog>
          </motion.div>

          <motion.p
            className="text-sm text-white/60 mt-4 font-barlow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            We accept Medicaid insurance
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WarmHeroSection;
