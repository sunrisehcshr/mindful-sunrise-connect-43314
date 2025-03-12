
import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Phone, Star } from 'lucide-react';
import AppointmentDialog from './Appointment/AppointmentDialog';

const WarmHeroSection = () => {
  return (
    <section className="relative overflow-hidden pb-16 pt-20 sm:pb-24 sm:pt-28">
      <div className="absolute inset-0 -z-10 opacity-30">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="warm-pattern" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="scale(0.75) rotate(0)">
              <rect x="0" y="0" width="100%" height="100%" fill="none" />
              <path d="M100 0H0V100" stroke="rgba(251, 191, 36, 0.2)" fill="none" strokeWidth="1" />
              <path d="M0 50H100M50 0V100" stroke="rgba(251, 191, 36, 0.1)" fill="none" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#warm-pattern)" />
        </svg>
      </div>
      
      {/* Decorative stars in background */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <motion.div className="absolute top-20 left-10 text-orange-200 opacity-40"
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <Star size={16} fill="currentColor" />
        </motion.div>
        <motion.div className="absolute bottom-40 left-1/4 text-amber-300 opacity-30"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <Star size={12} fill="currentColor" />
        </motion.div>
        <motion.div className="absolute top-1/3 right-1/4 text-orange-300 opacity-20"
          initial={{ y: 0 }}
          animate={{ y: 10 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <Star size={20} fill="currentColor" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <motion.div className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-amber-950">
              Sunrise Human Care Services
            </h1>
            <p className="text-lg md:text-xl text-amber-900 mb-8 max-w-2xl mx-auto lg:mx-0">
              Compassionate mental health care for children, teens, adults, and seniors in Havertown, PA. 
              Start your journey to emotional well-being today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="tel:+18146202162">
                <Button size="lg" className="text-white bg-orange-500 hover:bg-orange-400 font-semibold w-full sm:w-auto">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </Button>
              </a>
              <AppointmentDialog>
                <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 font-semibold">
                  Schedule Appointment
                </Button>
              </AppointmentDialog>
            </div>
            
            {/* Small decorative star */}
            <div className="hidden lg:block">
              <motion.div className="relative mt-10 ml-4 text-orange-400 opacity-70"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <Star size={16} fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div className="w-full lg:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative stars */}
              <motion.div className="absolute -top-6 -left-4 text-orange-300 opacity-70 z-10"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Star size={24} fill="currentColor" />
              </motion.div>
              
              <motion.div className="absolute -bottom-3 right-12 text-amber-400 opacity-60 z-10"
                initial={{ y: 0 }}
                animate={{ y: -8 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <Star size={32} fill="currentColor" />
              </motion.div>
              
              <motion.div className="absolute right-0 top-1/3 text-orange-500 opacity-50 z-10"
                initial={{ scale: 1 }}
                animate={{ scale: 1.2 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <Star size={20} fill="currentColor" />
              </motion.div>

              {/* Main grid with modern layout and fixed image cropping */}
              <div className="grid grid-cols-2 gap-4 relative z-0">
                <div className="col-span-1">
                  <motion.div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-[340px] relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent z-10"></div>
                    <img 
                      className="w-full h-full object-cover" 
                      src="/images/therapy-for-older-adults.webp" 
                      alt="Compassionate therapy for older adults in Havertown, PA" 
                    />
                  </motion.div>
                </div>
                
                <div className="col-span-1">
                  <motion.div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-[340px] relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-bl from-amber-400/20 to-transparent z-10"></div>
                    <img 
                      className="w-full h-full object-cover" 
                      src="/images/family-counseling-havertown.webp" 
                      alt="Expert family counseling services in Havertown, PA" 
                    />
                  </motion.div>
                </div>
              </div>
              
              {/* Background element with stars instead of just gradients */}
              <div className="absolute -z-10 rounded-full w-32 h-32 bg-orange-100/60 blur-3xl -top-10 -right-10 flex items-center justify-center">
                <Star className="text-orange-200 opacity-40" size={24} />
              </div>
              <div className="absolute -z-10 rounded-full w-48 h-48 bg-amber-200/40 blur-3xl -bottom-16 -left-10 flex items-center justify-center">
                <Star className="text-amber-300 opacity-30" size={32} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WarmHeroSection;
