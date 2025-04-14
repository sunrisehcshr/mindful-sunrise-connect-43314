
import React, { useEffect, useState, memo, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ImageLoaderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
  isLCP?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  placeholderColor?: string;
  lazyBoundary?: string;
}

const ImageLoader = forwardRef<HTMLImageElement, ImageLoaderProps>(({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  onLoad,
  isLCP = false,
  objectFit = 'cover',
  placeholderColor = '#f3f4f6',
  lazyBoundary = '200px',
}, ref) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Calculate aspect ratio for layout stability
  const aspectRatio = width && height ? `${width / height}` : undefined;
  
  // Create lightweight placeholder
  const placeholder = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width || 640} ${height || 400}'%3E%3Crect width='100%25' height='100%25' fill='${placeholderColor.replace('#', '%23')}'/%3E%3C/svg%3E`;
  
  // Handle image load/error events
  const handleLoad = () => {
    setLoaded(true);
    if (onLoad) onLoad();
    
    // Report LCP if this is the largest contentful element
    if (isLCP && window.performance) {
      // Use performance mark to help with debugging
      performance.mark('lcp-image-loaded');
    }
  };
  
  const handleError = () => setError(true);
  
  // Preload highest priority images
  useEffect(() => {
    if (priority || isLCP) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = src;
      preloadLink.crossOrigin = 'anonymous';
      document.head.appendChild(preloadLink);
      
      return () => {
        document.head.removeChild(preloadLink);
      };
    }
  }, [src, priority, isLCP]);
  
  return (
    <div 
      className={cn("relative overflow-hidden", className)}
      style={{ aspectRatio }}
    >
      {/* Low-quality placeholder */}
      {!loaded && !error && (
        <div 
          aria-hidden="true"
          className="absolute inset-0 bg-gray-200"
          style={{ backgroundColor: placeholderColor }}
        />
      )}
      
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority || isLCP ? 'eager' : 'lazy'}
        decoding={priority || isLCP ? 'sync' : 'async'}
        fetchPriority={priority || isLCP ? 'high' : 'auto'}
        className={cn(
          "transition-opacity duration-300",
          objectFit === 'cover' && "object-cover",
          objectFit === 'contain' && "object-contain",
          objectFit === 'fill' && "object-fill",
          objectFit === 'none' && "object-none",
          objectFit === 'scale-down' && "object-scale-down",
          !loaded && "opacity-0",
          loaded && "opacity-100"
        )}
        style={{
          width: '100%',
          height: '100%',
        }}
        ref={ref}
      />
      
      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
          Unable to load image
        </div>
      )}
    </div>
  );
});

ImageLoader.displayName = 'ImageLoader';

export default ImageLoader;
