
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface LinkOptimizerProps {
  to: string;
  children?: React.ReactNode;
  className?: string;
  descriptiveTitle: string; // Always require descriptive title for SEO
  showArrow?: boolean;
  external?: boolean;
}

/**
 * SEO-optimized Link component that ensures every link has descriptive text
 */
const LinkOptimizer: React.FC<LinkOptimizerProps> = ({
  to,
  children,
  className,
  descriptiveTitle,
  showArrow = false,
  external = false,
}) => {
  const content = (
    <>
      <span className="sr-only">{descriptiveTitle}</span>
      <span aria-hidden="true">{children}</span>
      {showArrow && <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
    </>
  );

  if (external) {
    return (
      <a 
        href={to} 
        className={cn("group", className)} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label={descriptiveTitle}
      >
        {content}
      </a>
    );
  }
  
  return (
    <Link 
      to={to} 
      className={cn("group", className)} 
      aria-label={descriptiveTitle}
    >
      {content}
    </Link>
  );
};

export default LinkOptimizer;
