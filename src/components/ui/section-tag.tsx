
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
        "inline-flex items-center gap-2 bg-amber-50 text-amber-600 font-barlow font-bold text-[10px] tracking-[0.3em] uppercase px-4 py-2 rounded-full border border-amber-100 mb-6",
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
};

export default SectionTag;
