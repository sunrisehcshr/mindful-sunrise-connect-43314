
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import SectionTag from './section-tag';

interface PageHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  tag,
  title,
  description,
  align = 'left',
  className,
  children
}) => {
  return (
    <motion.div 
      className={cn(
        "max-w-3xl",
        align === 'center' ? 'mx-auto text-center' : '',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {tag && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-4"
        >
          <SectionTag>{tag}</SectionTag>
        </motion.div>
      )}
      
      <motion.h1 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-playfair"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.h1>
      
      {description && (
        <motion.p 
          className="text-muted-foreground text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
      
      {children}
    </motion.div>
  );
};

export default PageHeader;
