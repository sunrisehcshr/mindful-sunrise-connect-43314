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
  return <section className={cn("py-16 lg:py-20 relative overflow-hidden", hasBgPattern ? "bg-gradient-to-br from-yellow-100/80 via-white/30 to-amber-50/90" : "", className)}>
      {hasBgPattern && <div className="absolute inset-0 z-0 opacity-20">
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
        </div>}
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="max-w-4xl mx-auto">
          
          {children}
        </motion.div>
      </div>
    </section>;
};
export default ServiceContentSection;