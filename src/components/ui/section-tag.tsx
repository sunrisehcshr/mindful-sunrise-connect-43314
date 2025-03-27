
import React from 'react'
import { cn } from '@/lib/utils'

interface SectionTagProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline'
  children: React.ReactNode
}

const SectionTag = ({
  className,
  variant = 'default',
  children,
  ...props
}: SectionTagProps) => {
  return (
    <div
      className={cn(
        "inline-block px-3 py-1 rounded-full text-xs font-medium",
        variant === 'default' 
          ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white border border-orange-400" 
          : "bg-orange-100 text-orange-600 border border-orange-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default SectionTag
