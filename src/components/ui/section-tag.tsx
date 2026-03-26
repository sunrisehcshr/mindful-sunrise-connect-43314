
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
  icon
}: SectionTagProps) => {
  return (
    <span 
      className={cn(
        "inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70 mb-4",
        className
      )}
    >
      {icon && <span className="mr-1.5">{icon}</span>}
      {children}
    </span>
  );
};

export default SectionTag;
