"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className = "",
  activeClassName = "bg-sunrise-400/20",
  onClick
}) => {
  const pathname = usePathname();
  
  // Helper to check if current path is a condition page
  const isConditionPage = () => {
    return pathname.includes('disorder') || 
          pathname.includes('anxiety') ||
          pathname.includes('depression') ||
          pathname.includes('schizophrenia') || 
          pathname.includes('eating-disorders') || 
          pathname.includes('substance-use') || 
          pathname.includes('dissociative') || 
          pathname.includes('somatic') || 
          pathname.includes('relationship') || 
          pathname.includes('grief') || 
          pathname.includes('bpd') || 
          pathname.includes('sleep') ||
          pathname.includes('ptsd') ||
          pathname === '/conditions';
  };
  
  // Helper to check if current path is a service page
  const isServicePage = () => {
    const serviceKeywords = [
      'individual-therapy',
      'couples-counseling',
      'family-therapy',
      'child-therapy',
      'psychiatric-evaluations',
      'medication-management',
      'adhd-treatment'
    ];
    
    return (serviceKeywords.some(keyword => pathname.includes(keyword)) || 
           pathname === '/services') && 
           !isConditionPage();
  };
  
  // Determine if this nav link should be active
  // Since these are hash links, we check the pathname for external pages
  const isActive = 
    (href === '#home' && pathname === '/') || 
    (href === '#services' && isServicePage()) ||
    (href === '#conditions' && isConditionPage()) ||
    (href === '#about' && pathname === '/about') ||
    (href === '#faq' && pathname === '/faq') ||
    (href === '#appointment' && (pathname === '/appointment' || pathname === '/contact'));
  
  return (
    <a
      href={href}
      className={cn(
        "px-4 py-2 rounded-md text-sm font-medium transition-colors",
        isActive ? `text-foreground ${activeClassName}` : "text-muted-foreground hover:text-foreground hover:bg-sunrise-400/10",
        className
      )}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </a>
  );
};

interface NavLinksProps {
  className?: string;
  onLinkClick?: () => void;
}

const InternalNavLinks: React.FC<NavLinksProps> = ({ className, onLinkClick }) => {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'conditions', label: 'Conditions' },
    { id: 'about', label: 'About' },
    { id: 'faq', label: 'FAQ' },
    { id: 'appointment', label: 'Contact' },
  ];

  return (
    <nav className={cn("flex items-center space-x-1", className)}>
      {sections.map((section) => (
        <NavLink 
          key={section.id} 
          href={`#${section.id}`}
          onClick={onLinkClick}
        >
          {section.label}
        </NavLink>
      ))}
      <a 
        href="#appointment" 
        className="ml-2 btn-sunrise"
        onClick={onLinkClick}
      >
        Book Now
      </a>
    </nav>
  );
};

export default InternalNavLinks;
