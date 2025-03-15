
import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const SectionTag = ({ children, className, icon = <Sparkles className="h-3 w-3" /> }: SectionTagProps) => {
  return (
    <span 
      className={cn(
        "section-tag inline-flex items-center gap-1.5 font-semibold text-sm px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white border border-orange-400 shadow-sm",
        className
      )}
    >
      {icon} {children}
    </span>
  );
};

export default SectionTag;
