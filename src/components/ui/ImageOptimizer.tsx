
import React from 'react';
import { cn } from '@/lib/utils';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  onLoad,
}) => {
  // Default dimensions if not provided
  const defaultWidth = width || 800;
  const defaultHeight = height || 600;
  
  return (
    <img
      src={src}
      alt={alt}
      width={defaultWidth}
      height={defaultHeight}
      className={cn('transition-opacity', className)}
      loading={priority ? 'eager' : 'lazy'} 
      decoding={priority ? 'sync' : 'async'}
      onLoad={onLoad}
      fetchPriority={priority ? 'high' : 'auto'}
    />
  );
};

export default ImageOptimizer;
