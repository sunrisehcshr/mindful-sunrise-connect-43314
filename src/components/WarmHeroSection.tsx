
import React, { useState } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Phone, Sparkles, Calendar } from 'lucide-react';
import AppointmentDialog from './Appointment/AppointmentDialog';
import SectionTag from './ui/section-tag';
import ImageOptimizer from './ui/ImageOptimizer';
import AnimatedGradientBackground from './ui/animated-gradient-background';

const WarmHeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Yellow shades for gradient
  const yellowGradientColors = ["#ffffff",
  // White
  "rgba(255, 249, 219, 0.7)",
  // Very light yellow (transparent)
  "rgba(254, 240, 138, 0.6)",
  // Light yellow (transparent)
  "rgba(253, 224, 71, 0.5)",
  // Medium yellow (transparent)
  "rgba(251, 191, 36, 0.3)",
  // Amber yellow (transparent)
  "rgba(245, 158, 11, 0.1)",
  // Dark yellow (transparent)
  "rgba(255, 255, 255, 0)" // Transparent
  ];
  const gradientStops = [0, 30, 50, 65, 80, 90, 100];
  
  return <section className="relative overflow-hidden pb-20 pt-24 sm:pb-28 sm:pt-32" id="home">
      {/* Animated Gradient Background */}
      <AnimatedGradientBackground gradientColors={yellowGradientColors} gradientStops={gradientStops} startingGap={130} Breathing={true} breathingRange={8} animationSpeed={0.015} topOffset={-10} containerClassName="opacity-80 z-0" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 -z-10">
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
          <motion.div className="w-full lg:w-1/2 text-center lg:text-left" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7
        }}>
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="mb-4">
              <SectionTag>Mental Health Clinic in Havertown</SectionTag>
            </motion.div>
            
            <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-amber-950 leading-tight" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }}>
              Expert Mental Health Care in Havertown, PA
            </motion.h1>
            
            <motion.p className="text-lg md:text-xl text-amber-900 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }}>Step into a brighter tomorrow with Sunrise Human Care—offering comprehensive mental health care in Havertown with licensed therapists, psychologists, counselors, and psychiatrists for residents of Havertown, Broomall, and Drexel Hill.</motion.p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.5
          }}>
              <a href="tel:+18146202162" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 group">
                  <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse" /> 
                  Speak with a Therapist Today
                </Button>
              </a>
              <AppointmentDialog>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-orange-300 text-orange-600 font-semibold hover:bg-orange-50 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <Calendar className="mr-2 h-4 w-4 group-hover:text-orange-500" />
                  Book Mental Health Appointment
                </Button>
              </AppointmentDialog>
            </motion.div>
            
            <motion.p 
              className="text-sm text-amber-700/80 mt-4 text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              We accept Medicaid insurance
            </motion.p>
          </motion.div>
          
          <motion.div className="w-full lg:w-1/2" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }}>
            <div className="relative">
              <motion.div className={`rounded-2xl overflow-hidden shadow-lg h-64 md:h-[400px] relative warm-glow ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }} transition={{
              duration: 0.4
            }} initial={{
              y: 20
            }} animate={{
              y: 0
            }}>
                <ImageOptimizer 
                  src="/images/family-counseling-havertown.webp" 
                  alt="Expert family counseling services in Havertown, PA" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  priority={true} 
                  width={600} 
                  height={400} 
                  onLoad={() => setImageLoaded(true)} 
                />
              </motion.div>
              
              {/* Enhanced decorative elements with vibrant yellow */}
              <div className="absolute -z-10 rounded-full w-40 h-40 bg-yellow-200/90 blur-3xl -top-10 -right-10"></div>
              <div className="absolute -z-10 rounded-full w-60 h-60 bg-amber-200/70 blur-3xl -bottom-16 -left-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default WarmHeroSection;
