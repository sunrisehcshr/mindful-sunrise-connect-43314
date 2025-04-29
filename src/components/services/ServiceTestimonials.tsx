
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Testimonial, getIconBoxClass } from '@/lib/servicePageUtils';

interface ServiceTestimonialsProps {
  testimonials: Testimonial[];
  iconColor: string;
  autoplayInterval?: number;
}

const ServiceTestimonials: React.FC<ServiceTestimonialsProps> = ({ 
  testimonials, 
  iconColor,
  autoplayInterval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonials.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, autoplayInterval);
    
    return () => clearInterval(interval);
  }, [testimonials, autoplayInterval]);

  // Navigation functions
  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prev => 
      (prev + 1) % testimonials.length
    );
  };

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-amber-100">
      <div className="p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6">Client Testimonials</h2>
        
        <div className="relative">
          <div className="overflow-hidden relative min-h-[140px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`absolute w-full ${getIconBoxClass(iconColor)} rounded-lg p-6`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: currentIndex === index ? 1 : 0,
                  x: currentIndex === index ? 0 : 100,
                  pointerEvents: currentIndex === index ? 'auto' : 'none'
                }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg italic text-amber-800 mb-4">"{testimonial.quote}"</p>
                <p className="text-sm text-amber-600">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
          
          {testimonials.length > 1 && (
            <>
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={goToPrev}
                  className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-amber-700 hover:bg-amber-50"
                >
                  &larr;
                </button>
              </div>
              
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={goToNext}
                  className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-amber-700 hover:bg-amber-50"
                >
                  &rarr;
                </button>
              </div>
            </>
          )}
          
          {/* Dots navigation */}
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-amber-700' : 'bg-amber-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceTestimonials;
