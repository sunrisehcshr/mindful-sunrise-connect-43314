
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { 
    hover?: 'lift' | 'glow' | 'border' | 'none';
    variant?: 'default' | 'outline' | 'filled' | 'glass';
  }
>(({ className, hover = 'none', variant = 'default', ...props }, ref) => {
  // Generate hover effects
  const getHoverClasses = () => {
    switch(hover) {
      case 'lift':
        return "hover:-translate-y-1 hover:shadow-md";
      case 'glow':
        return "hover:shadow-md hover:shadow-amber-200/50";
      case 'border':
        return "hover:border-amber-400";
      default:
        return "";
    }
  };
  
  // Generate variant classes
  const getVariantClasses = () => {
    switch(variant) {
      case 'outline':
        return "bg-transparent border-amber-200";
      case 'filled':
        return "bg-gradient-to-br from-amber-50 to-white border-amber-100";
      case 'glass':
        return "bg-white/80 backdrop-blur-sm border-amber-100/60";
      default:
        return "bg-card border-border";
    }
  };
  
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200",
        getVariantClasses(),
        getHoverClasses(),
        className
      )}
      {...props}
    />
  );
})
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & { 
    decorative?: boolean
  }
>(({ className, decorative = false, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      decorative && "font-playfair text-amber-900 relative",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
