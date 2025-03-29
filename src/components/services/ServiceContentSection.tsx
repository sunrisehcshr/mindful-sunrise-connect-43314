
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
      "py-16 lg:py-20 relative overflow-hidden",
      hasBgPattern && "bg-gradient-to-r from-orange-500/10 to-amber-400/10",
      className
    )}>
      {hasBgPattern && (
        <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
      )}
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center font-playfair">{title}</h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceContentSection;
