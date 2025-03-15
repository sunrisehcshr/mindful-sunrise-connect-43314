
import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTag = ({ children, className }: SectionTagProps) => {
  return (
    <span 
      className={cn(
        "section-tag inline-flex items-center gap-1 font-semibold text-sm",
        className
      )}
    >
      <Sparkles className="h-3 w-3" /> {children}
    </span>
  );
};

export default SectionTag;
