
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const SectionTag = ({ 
  children, 
  className,
  icon,
}: SectionTagProps) => {
  return (
    <span 
      className={cn(
        "inline-flex items-center gap-2 bg-orange-50 text-orange-700 font-barlow font-bold text-sm md:text-base tracking-[0.22em] uppercase px-7 py-3 rounded-full border border-orange-200 mb-6 shadow-sm",
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
};

export default SectionTag;
