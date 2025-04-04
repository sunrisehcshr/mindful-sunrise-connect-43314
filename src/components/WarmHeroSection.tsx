
import React, { useState } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Phone, Sparkles, Calendar, Clock, MessageCircle, Heart, Headphones } from 'lucide-react';
import AppointmentDialog from './Appointment/AppointmentDialog';
import SectionTag from './ui/section-tag';
import ImageOptimizer from './ui/ImageOptimizer';
import AnimatedGradientBackground from './ui/animated-gradient-background';
import { Badge } from './ui/badge';

const WarmHeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Yellow shades for gradient
  const yellowGradientColors = [
    "#ffffff",                // White
    "rgba(255, 249, 219, 0.7)", // Very light yellow (transparent)
    "rgba(254, 240, 138, 0.6)", // Light yellow (transparent)
    "rgba(253, 224, 71, 0.5)",  // Medium yellow (transparent)
    "rgba(251, 191, 36, 0.3)",  // Amber yellow (transparent)
    "rgba(245, 158, 11, 0.1)",  // Dark yellow (transparent)
    "rgba(255, 255, 255, 0)"    // Transparent
  ];
  
  const gradientStops = [0, 30, 50, 65, 80, 90, 100];

  return (
    <section className="relative overflow-hidden pb-20 pt-24 sm:pb-28 sm:pt-32" id="home">
      {/* Animated Gradient Background */}
      <AnimatedGradientBackground 
        gradientColors={yellowGradientColors}
        gradientStops={gradientStops}
        startingGap={130}
        Breathing={true}
        breathingRange={8}
        animationSpeed={0.015}
        topOffset={-10}
        containerClassName="opacity-80 z-0"
      />
      
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
              <SectionTag>Mental Health Clinic</SectionTag>
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
          }}>
              Step into a brighter tomorrow with Sunrise Human Care—offering expert mental health services with licensed therapists, psychologists, counselors, and psychiatrists.
            </motion.p>
            
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
                  Call Now
                </Button>
              </a>
              <AppointmentDialog>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-orange-300 text-orange-600 font-semibold hover:bg-orange-50 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <Calendar className="mr-2 h-4 w-4 group-hover:text-orange-500" />
                  Schedule Appointment
                </Button>
              </AppointmentDialog>
            </motion.div>
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
              {/* Badge 1 - Top right */}
              <motion.div 
                className="absolute top-0 right-0 z-20 -mt-5 mr-4 md:mr-0 transform translate-x-0 md:translate-x-1/4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="bg-white rounded-full py-2 px-4 shadow-lg flex items-center gap-2">
                  <div className="bg-amber-100 rounded-full p-1">
                    <Headphones className="h-4 w-4 text-amber-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-amber-900">Anxiety Management</span>
                    <span className="text-xs text-amber-700">15 mins</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Badge 2 - Left side */}
              <motion.div 
                className="absolute top-1/3 -left-6 md:-left-16 z-20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <div className="bg-white rounded-lg p-3 shadow-lg">
                  <div className="flex gap-2 items-center">
                    <div className="bg-orange-500 text-white rounded-lg p-2">
                      <span className="text-xl font-bold">Sept</span>
                      <div className="text-3xl font-bold">15</div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-800">Therapy Session</span>
                      <span className="text-xs text-gray-600">2-3pm</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Badge 3 - Bottom right */}
              <motion.div 
                className="absolute bottom-0 right-0 z-20 mb-4 mr-4 md:mr-0 md:mb-0 transform translate-y-0 md:translate-y-1/4 md:translate-x-1/3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="bg-white rounded-lg p-4 shadow-lg max-w-[200px]">
                  <h4 className="text-base font-semibold mb-2 text-gray-800">Your Wellbeing</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4 text-orange-600" />
                        <span className="text-sm">Mental Health</span>
                      </div>
                      <div className="flex">
                        <div className="w-4 h-1.5 bg-green-500 rounded-full mx-0.5"></div>
                        <div className="w-4 h-1.5 bg-green-500 rounded-full mx-0.5"></div>
                        <div className="w-4 h-1.5 bg-green-500 rounded-full mx-0.5"></div>
                        <div className="w-4 h-1.5 bg-green-500 rounded-full mx-0.5"></div>
                        <div className="w-4 h-1.5 bg-green-200 rounded-full mx-0.5"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4 text-orange-600" />
                        <span className="text-sm">Support</span>
                      </div>
                      <div className="flex">
                        <div className="w-4 h-1.5 bg-amber-500 rounded-full mx-0.5"></div>
                        <div className="w-4 h-1.5 bg-amber-500 rounded-full mx-0.5"></div>
                        <div className="w-4 h-1.5 bg-amber-200 rounded-full mx-0.5"></div>
                        <div className="w-4 h-1.5 bg-amber-200 rounded-full mx-0.5"></div>
                        <div className="w-4 h-1.5 bg-amber-200 rounded-full mx-0.5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            
              <motion.div 
                className={`rounded-2xl overflow-hidden shadow-lg h-64 md:h-[400px] relative warm-glow ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} 
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }} 
                transition={{
                  duration: 0.4
                }} 
                initial={{
                  y: 20
                }} 
                animate={{
                  y: 0
                }}
              >
                <div className=""></div>
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
    </section>
  );
};

export default WarmHeroSection;
