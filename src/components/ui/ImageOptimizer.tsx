
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
  isLCP?: boolean; // New prop to mark Largest Contentful Paint images
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  onLoad,
  isLCP = false,
}) => {
  // Default dimensions if not provided
  const defaultWidth = width || 800;
  const defaultHeight = height || 600;
  
  // Calculate aspect ratio for better layout stability
  const aspectRatio = defaultWidth && defaultHeight ? defaultWidth / defaultHeight : undefined;
  
  return (
    <img
      src={src}
      alt={alt}
      width={defaultWidth}
      height={defaultHeight}
      className={cn('transition-opacity', className)}
      loading={priority || isLCP ? 'eager' : 'lazy'} 
      decoding={priority || isLCP ? 'sync' : 'async'}
      onLoad={onLoad}
      fetchPriority={priority || isLCP ? 'high' : 'auto'}
      style={{
        aspectRatio: aspectRatio ? `${aspectRatio}` : 'auto',
      }}
    />
  );
};

export default ImageOptimizer;
