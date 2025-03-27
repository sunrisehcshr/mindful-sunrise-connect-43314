
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionTagProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline'
  children: React.ReactNode
  animate?: boolean
}

const SectionTag = ({
  className,
  variant = 'default',
  children,
  animate = true,
  ...props
}: SectionTagProps) => {
  const content = (
    <div
      className={cn(
        "inline-block px-3 py-1 rounded-full text-xs font-medium",
        variant === 'default' 
          ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white border border-orange-400 shadow-sm" 
          : "bg-orange-100 text-orange-600 border border-orange-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}

export default SectionTag;
