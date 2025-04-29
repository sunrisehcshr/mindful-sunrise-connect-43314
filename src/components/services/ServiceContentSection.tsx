
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
interface ServiceContentSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  hasBgPattern?: boolean;
  tagText?: string;
  tagIcon?: React.ReactNode;
  variant?: 'default' | 'alternate' | 'highlight';
  divider?: boolean;
}
const ServiceContentSection: React.FC<ServiceContentSectionProps> = ({
  title,
  children,
  className,
  hasBgPattern = false,
  tagText,
  tagIcon,
  variant = 'default',
  divider = true
}) => {
  // Determine background classes based on variant
  const getBgClasses = () => {
    switch(variant) {
      case 'alternate':
        return "bg-amber-50/80";
      case 'highlight':
        return "bg-gradient-to-br from-orange-50 to-amber-100/50";
      case 'default':
      default:
        return hasBgPattern ? 
          "bg-gradient-to-br from-yellow-100/80 via-white/30 to-amber-50/90" : 
          "bg-white";
    }
  };

  return (
    <section className={cn(
      "py-16 lg:py-20 relative overflow-hidden", 
      getBgClasses(),
      className
    )}>
      {hasBgPattern && (
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
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
      )}
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div 
          initial={{
            opacity: 0,
            y: 20
          }} 
          whileInView={{
            opacity: 1,
            y: 0
          }} 
          viewport={{
            once: true
          }} 
          transition={{
            duration: 0.5
          }} 
          className="max-w-7xl mx-auto"
        >
          {tagText && (
            <div className="flex justify-center mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-800">
                {tagIcon} {tagText}
              </span>
            </div>
          )}
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-10 text-amber-950 font-playfair text-center">{title}</h2>
          
          {divider && (
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto mb-8"></div>
          )}
          
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceContentSection;
