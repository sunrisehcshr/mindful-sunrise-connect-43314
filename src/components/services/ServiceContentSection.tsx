
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import SectionTag from '../ui/section-tag';

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
  divider = false
}) => {
  // Determine background classes based on variant using the new palette
  const getBgClasses = () => {
    switch(variant) {
      case 'alternate':
        return "bg-stone-50";
      case 'highlight':
        return "bg-white border-y border-stone-100";
      case 'default':
      default:
        return "bg-transparent";
    }
  };

  return (
    <section className={cn(
      "py-16 md:py-24 relative overflow-hidden", 
      getBgClasses(),
      className
    )}>
      {hasBgPattern && (
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] -mr-[200px] -mt-[200px] pointer-events-none" />
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
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }} 
          className="max-w-7xl mx-auto"
        >
          {tagText && (
            <div className="flex justify-center mb-6">
              <SectionTag>
                {tagIcon && <span className="mr-2 inline-flex items-center">{tagIcon}</span>}
                {tagText}
              </SectionTag>
            </div>
          )}
          
          <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight text-center mb-12">
            {title}
          </h2>
          
          {divider && (
            <div className="w-24 h-0.5 bg-stone-200 mx-auto mb-12"></div>
          )}
          
          <div className="prose prose-stone max-w-none font-barlow text-lg leading-relaxed text-stone-600">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceContentSection;
