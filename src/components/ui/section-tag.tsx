
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
        "inline-flex items-center gap-2 bg-stone-100 text-stone-600 font-barlow font-bold text-[10px] tracking-[0.3em] uppercase px-4 py-2 rounded-full border border-stone-200 mb-6 shadow-sm",
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
};

export default SectionTag;
