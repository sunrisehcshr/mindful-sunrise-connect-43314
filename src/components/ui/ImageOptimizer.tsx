
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
  fill?: boolean;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  onLoad,
  fill = false,
}) => {
  if (fill) {
    return (
      <div className={cn('relative', className)}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-opacity"
          priority={priority}
          onLoad={onLoad}
        />
      </div>
    );
  }

  // Default dimensions if not provided
  const defaultWidth = width || 800;
  const defaultHeight = height || 600;
  
  return (
    <Image
      src={src}
      alt={alt}
      width={defaultWidth}
      height={defaultHeight}
      className={cn('transition-opacity', className)}
      priority={priority}
      onLoad={onLoad}
    />
  );
};

export default ImageOptimizer;
