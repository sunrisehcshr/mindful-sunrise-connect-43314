
import React, { useState } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import AppointmentDialog from './Appointment/AppointmentDialog';
import ImageOptimizer from './ui/ImageOptimizer';
import { Link } from 'react-router-dom';

const WarmHeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <section className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36 bg-[#faf8f4]" id="home">
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
              <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70">
                Mental Health Clinic in Darby
              </span>
            </motion.div>
            
            <motion.h1 
              className="font-barlow font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-stone-800 leading-tight tracking-tight" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Step into a brighter tomorrow
              <span className="block font-instrument-serif italic text-amber-700/70 font-normal">with Sunrise Human Care</span>
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg text-stone-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-barlow" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A brighter tomorrow starts with the right support today. Taking the first step toward better mental health is an act of courage - and we're here to support your journey with expert counseling, therapy, and psychiatric services tailored to your unique needs.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="tel:+18146202162" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-[#222] hover:bg-zinc-800 text-white font-barlow font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 group">
                  <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse" /> 
                  Speak with a Therapist
                </Button>
              </a>
              <AppointmentDialog>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-stone-200 text-stone-800 font-barlow font-semibold rounded-full hover:bg-amber-50 hover:border-amber-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <Calendar className="mr-2 h-4 w-4 group-hover:text-amber-600" />
                  Book Appointment
                </Button>
              </AppointmentDialog>
            </motion.div>
            
            <motion.p 
              className="text-sm text-stone-500 mt-4 text-center lg:text-left font-barlow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              We accept Medicaid insurance
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className={`rounded-2xl overflow-hidden shadow-lg h-64 md:h-[400px] relative ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} 
                whileHover={{ scale: 1.02 }} 
                transition={{ duration: 0.4 }} 
                initial={{ y: 20 }} 
                animate={{ y: 0 }}
              >
                <ImageOptimizer 
                  src="/images/family-counseling-havertown.webp" 
                  alt="Expert family counseling services in Darby, PA" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  priority={true} 
                  width={600} 
                  height={400} 
                  onLoad={() => setImageLoaded(true)} 
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WarmHeroSection;
