import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageLoader from './ui/ImageLoader';
import SectionTag from './ui/section-tag';
import { useIsMobile } from '@/hooks/use-mobile';

const WarmHeroSection = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Mark the largest contentful paint for performance monitoring
    const lcpObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        // Log LCP timing for debugging
        console.log('LCP:', entry.startTime);
      }
    });
    
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    
    return () => {
      lcpObserver.disconnect();
    };
  }, []);
  
  return (
    <section className="relative pt-20 md:pt-28 pb-8 md:py-20 lg:py-24 xl:py-28 overflow-hidden bg-inherit">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-15 sunshine-pattern"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full max-w-lg mx-auto md:mx-0 text-center md:text-left px-2 md:px-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="mb-3"
              >
                <SectionTag className="inline-block" icon={null}>
                  Havertown, PA Mental Health Services
                </SectionTag>
              </motion.div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-4 md:mb-4">
                Compassionate Mental Health Care in <span className="text-orange-600">Havertown</span>
              </h1>
              
              <p className="text-amber-800 mb-5 text-sm md:text-base lg:text-lg">
                At Sunrise Human Care Services, we provide expert mental health therapy and psychiatry services for anxiety, depression, ADHD, trauma, and more. With both in-person and telehealth options, our licensed professionals help you rise above life's challenges.
              </p>
              
              <div className="flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start">
                <Link to="/appointment" className="btn-sunrise">
                  Book Appointment
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <Link to="/services" className="btn-outline-sunrise">
                  Our Services
                </Link>
              </div>
              
              {/* Status indicators - Stacked on mobile */}
              <div className="mt-5 md:mt-6 flex flex-col md:flex-row items-center flex-wrap gap-2 text-xs md:text-sm text-amber-800 justify-center md:justify-start">
                {/* In-person & virtual indicator - Now shown above "Now accepting" on mobile */}
                <span className="flex items-center gap-1.5 order-1 md:order-2">
                  <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-amber-500"></span>
                  </span>
                  In-person & virtual
                </span>
                
                {/* Hidden separator on mobile */}
                <span className="w-1.5 h-1.5 rounded-full bg-amber-300 hidden md:block order-2 md:order-3"></span>
                
                {/* Now accepting new patients */}
                <span className="flex items-center gap-1.5 order-2 md:order-1">
                  <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></span>
                  </span>
                  Now accepting new patients
                </span>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Image */}
          <motion.div 
            className="order-1 md:order-2 mx-auto md:mx-0 w-full mb-4 md:mb-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative h-[200px] sm:h-[250px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-xl shadow-lg w-full max-w-md mx-auto">
              {/* LCP Image - Optimized */}
              <ImageLoader
                src="/images/family-counseling-havertown.webp"
                alt="Expert family counseling services in Havertown, PA"
                width={600}
                height={400}
                className="w-full h-full"
                objectFit="cover"
                priority={true}
                isLCP={true}
                ref={imageRef}
              />
              
              {/* Decorative overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
              
              {/* Text box overlapping image - Updated for single-line text */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/70 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2 rounded-lg shadow-sm border border-amber-200/50 w-auto max-w-[90%]">
                <span className="text-amber-900 font-medium text-[10px] md:text-sm whitespace-nowrap overflow-hidden text-ellipsis block">
                  Step into brighter tomorrow with Sunrise
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WarmHeroSection;
