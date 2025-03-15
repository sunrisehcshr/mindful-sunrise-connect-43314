
import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Phone, Star, Sparkles, Calendar } from 'lucide-react';
import AppointmentDialog from './Appointment/AppointmentDialog';

const WarmHeroSection = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-24 sm:pb-28 sm:pt-32 bg-white">
      <div className="absolute inset-0 -z-10 opacity-20">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="warm-pattern" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="scale(0.75) rotate(0)">
              <rect x="0" y="0" width="100%" height="100%" fill="none" />
              <path d="M100 0H0V100" stroke="rgba(251, 191, 36, 0.15)" fill="none" strokeWidth="1" />
              <path d="M0 50H100M50 0V100" stroke="rgba(251, 191, 36, 0.1)" fill="none" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#warm-pattern)" />
        </svg>
      </div>
      
      {/* Floating stars */}
      <motion.div 
        className="absolute top-40 left-20 text-amber-300 opacity-20 z-0 hidden md:block"
        animate={{ y: [0, -10, 0], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Star size={24} fill="currentColor" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-32 right-40 text-orange-300 opacity-20 z-0 hidden md:block"
        animate={{ y: [0, 10, 0], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Star size={18} fill="currentColor" />
      </motion.div>
      
      <motion.div 
        className="absolute top-60 right-80 text-amber-200 opacity-10 z-0 hidden lg:block"
        animate={{ y: [0, -15, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Star size={28} fill="currentColor" />
      </motion.div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
          >
            <motion.span 
              className="inline-block px-3 py-1 bg-gradient-to-r from-orange-400/10 to-amber-400/10 rounded-full text-orange-700 text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 inline-block mr-2 text-orange-400" /> 
              Trusted Mental Health Care
            </motion.span>
            
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-amber-900 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Expert Mental Health Care in Havertown, PA
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-amber-800 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Step into a brighter tomorrow with Sunrise Human Care—offering expert mental health services with licensed therapists, psychologists, counselors, and psychiatrists.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="tel:+18146202162" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 group">
                  <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse" /> 
                  Call Now
                </Button>
              </a>
              <AppointmentDialog>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-orange-200 text-orange-600 font-semibold hover:bg-orange-50 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <Calendar className="mr-2 h-4 w-4 group-hover:text-orange-500" />
                  Schedule Appointment
                </Button>
              </AppointmentDialog>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-[400px] relative warm-glow"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ duration: 0.4 }}
                initial={{ y: 20 }}
                animate={{ y: 0 }}
              >
                <div className="absolute inset-0 bg-gradient-to-bl from-amber-400/10 to-transparent z-10"></div>
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  src="/images/family-counseling-havertown.webp" 
                  alt="Expert family counseling services in Havertown, PA" 
                />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-8 right-6 text-orange-300 opacity-40 z-10"
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Star size={28} fill="currentColor" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-12 -right-6 text-amber-300 opacity-40 z-10"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Star size={32} fill="currentColor" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 right-14 text-orange-300 opacity-40 z-10"
                animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <Star size={20} fill="currentColor" />
              </motion.div>
              
              <div className="absolute -z-10 rounded-full w-40 h-40 bg-orange-100/40 blur-3xl -top-10 -right-10"></div>
              <div className="absolute -z-10 rounded-full w-60 h-60 bg-amber-200/20 blur-3xl -bottom-16 -left-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WarmHeroSection;
