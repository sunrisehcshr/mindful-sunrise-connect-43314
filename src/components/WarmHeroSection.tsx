
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageLoader from './ui/ImageLoader';

const WarmHeroSection = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  
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
    <section className="relative py-12 md:py-20 lg:py-24 xl:py-28 overflow-hidden bg-gradient-to-tr from-orange-50 via-white/70 to-amber-100/70">
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
            <div className="max-w-lg">
              <motion.span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-orange-700 to-amber-600 text-white border border-orange-500 mb-3 md:mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                Havertown, PA Mental Health Services
              </motion.span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-4">
                Compassionate Mental Health Care in <span className="text-orange-600">Havertown</span>
              </h1>
              
              <p className="text-amber-800 mb-6 text-base md:text-lg">
                At Sunrise Human Care Services, we provide expert mental health therapy and psychiatry services for anxiety, depression, ADHD, trauma, and more. With both in-person and telehealth options, our licensed professionals help you rise above life's challenges.
              </p>
              
              <div className="flex flex-wrap gap-3 md:gap-4">
                <Link to="/appointment" className="btn-sunrise">
                  Book Appointment
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <Link to="/services" className="btn-outline-sunrise">
                  Our Services
                </Link>
              </div>
              
              <div className="mt-6 flex items-center gap-2 text-sm text-amber-800">
                <span className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </span>
                  Now accepting new patients
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-300"></span>
                <span>In-person & virtual</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Image */}
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative h-[350px] md:h-[400px] overflow-hidden rounded-xl shadow-lg">
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
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-amber-200/50">
                <span className="text-amber-900 font-medium text-sm">Family therapy that strengthens bonds</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WarmHeroSection;
