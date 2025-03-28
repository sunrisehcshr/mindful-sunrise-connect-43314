
import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Phone, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import AppointmentDialog from './Appointment/AppointmentDialog';
import SectionTag from './ui/section-tag';

const WarmHeroSection = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-24 sm:pb-28 sm:pt-32">
      {/* Enhanced background with more vibrant yellow gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/80 via-white/30 to-amber-50/90"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/10 to-transparent"></div>
        <svg className="h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="warm-pattern" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="scale(0.75) rotate(0)">
              <rect x="0" y="0" width="100%" height="100%" fill="none" />
              <path d="M100 0H0V100" stroke="rgba(252, 211, 77, 0.4)" fill="none" strokeWidth="1" />
              <path d="M0 50H100M50 0V100" stroke="rgba(252, 211, 77, 0.3)" fill="none" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#warm-pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left" 
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
              <SectionTag animate={false}>Mental Health Clinic</SectionTag>
            </motion.div>
            
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-amber-950 leading-tight font-playfair"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Expert Mental Health Care in Havertown, PA
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-amber-900 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
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
                <Button size="lg" className="w-full sm:w-auto">
                  <Phone className="mr-2 h-4 w-4" /> 
                  Call Now
                </Button>
              </a>
              <AppointmentDialog>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Appointment
                </Button>
              </AppointmentDialog>
            </motion.div>
            
            <motion.div
              className="mt-8 text-amber-700 flex items-center justify-center lg:justify-start gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Sparkles className="h-4 w-4 text-amber-500" />
              <span className="text-sm font-medium">Same-day appointments available</span>
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
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.4 }}
                initial={{ y: 20 }}
                animate={{ y: 0 }}
              >
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  src="/images/family-counseling-havertown.webp" 
                  alt="Expert family counseling services in Havertown, PA" 
                />
                
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm md:text-base font-medium">Compassionate care for the whole family</p>
                </div>
              </motion.div>
              
              {/* Enhanced decorative elements with vibrant yellow */}
              <div className="absolute -z-10 rounded-full w-40 h-40 bg-yellow-200/90 blur-3xl -top-10 -right-10"></div>
              <div className="absolute -z-10 rounded-full w-60 h-60 bg-amber-200/70 blur-3xl -bottom-16 -left-10"></div>
              
              {/* Floating accent element */}
              <motion.div 
                className="absolute -right-6 -bottom-6 bg-white/90 p-3 rounded-xl shadow-md border border-amber-200/50"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs font-medium text-amber-900">Available Now</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Trust indicators */}
        <motion.div
          className="mt-16 pt-8 border-t border-amber-200/30 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-xs uppercase tracking-wider text-amber-700 mb-4 font-medium">Trusted by patients throughout Delaware County</div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="opacity-70 hover:opacity-100 transition-opacity">
              <img src="/logo.svg" alt="Sunrise Logo" className="h-8" />
            </div>
            {/* Add more trust indicators/partners here if needed */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WarmHeroSection;
