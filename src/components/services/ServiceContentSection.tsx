
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ServiceContentSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  hasBgPattern?: boolean;
}

const ServiceContentSection: React.FC<ServiceContentSectionProps> = ({
  title,
  children,
  className,
  hasBgPattern = false
}) => {
  return (
    <section className={cn(
      "py-16 lg:py-24 relative overflow-hidden",
      hasBgPattern ? "bg-gradient-to-br from-amber-50 via-white/95 to-orange-50/90" : "",
      className
    )}>
      {hasBgPattern && (
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern 
                id="warm-pattern" 
                patternUnits="userSpaceOnUse" 
                width="100" 
                height="100" 
                patternTransform="scale(0.75) rotate(0)"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path 
                  d="M100 0H0V100" 
                  stroke="rgba(251, 146, 60, 0.3)" 
                  fill="none" 
                  strokeWidth="1" 
                />
                <path 
                  d="M0 50H100M50 0V100" 
                  stroke="rgba(251, 146, 60, 0.2)" 
                  fill="none" 
                  strokeWidth="0.5" 
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#warm-pattern)" />
          </svg>
        </div>
      )}
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-950 font-playfair">{title}</h2>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto rounded-full" />
          </div>
          <div className="relative">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceContentSection;
