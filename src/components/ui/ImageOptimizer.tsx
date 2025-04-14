
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
  isLCP?: boolean; // Mark Largest Contentful Paint images
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  blur?: boolean; // Whether to show blur placeholder
}

/**
 * Enhanced image component with performance optimizations
 */
const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  onLoad,
  isLCP = false,
  objectFit = 'cover',
  blur = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  
  // Calculate aspect ratio for layout stability
  const defaultWidth = width || 800;
  const defaultHeight = height || 600;
  const aspectRatio = defaultWidth && defaultHeight ? defaultWidth / defaultHeight : undefined;
  
  // Handle image load event
  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };
  
  // Handle image error
  const handleError = () => {
    setIsError(true);
  };
  
  // Mark image loaded for SSR
  useEffect(() => {
    // If the image is already cached, it might not trigger onLoad
    if (priority || isLCP) {
      const img = new Image();
      img.src = src;
      if (img.complete) {
        setIsLoaded(true);
      }
    }
  }, [src, priority, isLCP]);
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden", 
        className
      )}
      style={{
        aspectRatio: aspectRatio ? `${aspectRatio}` : 'auto',
      }}
    >
      {/* Blur placeholder */}
      {blur && !isLoaded && !isError && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse" 
          style={{
            aspectRatio: aspectRatio ? `${aspectRatio}` : 'auto',
          }}
        />
      )}
      
      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        width={defaultWidth}
        height={defaultHeight}
        className={cn(
          "transition-opacity duration-500",
          objectFit === 'cover' && "object-cover",
          objectFit === 'contain' && "object-contain",
          objectFit === 'fill' && "object-fill",
          objectFit === 'none' && "object-none",
          objectFit === 'scale-down' && "object-scale-down",
          !isLoaded && blur && "opacity-0",
          isLoaded && "opacity-100",
          isError && "hidden"
        )}
        loading={priority || isLCP ? 'eager' : 'lazy'} 
        decoding={priority || isLCP ? 'sync' : 'async'}
        onLoad={handleLoad}
        onError={handleError}
        fetchPriority={priority || isLCP ? 'high' : 'auto'}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      
      {/* Fallback for error */}
      {isError && (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
          <span>Image not available</span>
        </div>
      )}
    </div>
  );
};

export default ImageOptimizer;
