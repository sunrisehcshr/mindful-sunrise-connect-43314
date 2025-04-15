
import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const SectionTag = ({ 
  children, 
  className, 
  icon = <Sparkles className="h-3 w-3" /> 
}: SectionTagProps) => {
  return (
    <span 
      className={cn(
        "section-tag inline-flex items-center gap-1.5 font-semibold text-sm px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white border border-purple-400 shadow-sm hover:from-purple-600 hover:to-purple-700 transition-colors",
        className
      )}
    >
      {icon} {children}
    </span>
  );
};

export default SectionTag;
