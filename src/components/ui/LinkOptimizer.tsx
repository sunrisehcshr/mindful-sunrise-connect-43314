
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface LinkOptimizerProps {
  to: string;
  children?: React.ReactNode;
  className?: string;
  descriptiveTitle: string; // Required descriptive title for SEO
  showArrow?: boolean;
  external?: boolean;
  onClick?: () => void;
  prefetch?: boolean; // Optional prefetching for internal links
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
  onClick,
  prefetch = false,
}) => {
  // Prefetch logic for internal links
  React.useEffect(() => {
    if (prefetch && !external && typeof window !== 'undefined') {
      // Create a link element for prefetching
      const linkElement = document.createElement('link');
      linkElement.rel = 'prefetch';
      linkElement.href = to;
      linkElement.as = 'document';
      
      document.head.appendChild(linkElement);
      
      return () => {
        document.head.removeChild(linkElement);
      };
    }
  }, [to, external, prefetch]);

  // Handle cases where children is just "Learn more" - replace with descriptiveTitle
  const displayText = (children === "Learn more") ? descriptiveTitle : children;

  const content = (
    <>
      <span>{displayText}</span>
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
        onClick={onClick}
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
      onClick={onClick}
    >
      {content}
    </Link>
  );
};

export default LinkOptimizer;
