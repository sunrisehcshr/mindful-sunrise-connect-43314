
import React from 'react';
import { Link } from 'react-router-dom';
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
  // Helper to check if current path is a condition page
  const isConditionPage = () => {
    return window.location.pathname.includes('disorder') || 
          window.location.pathname.includes('anxiety') ||
          window.location.pathname.includes('depression') ||
          window.location.pathname.includes('schizophrenia') || 
          window.location.pathname.includes('eating-disorders') || 
          window.location.pathname.includes('substance-use') || 
          window.location.pathname.includes('dissociative') || 
          window.location.pathname.includes('somatic') || 
          window.location.pathname.includes('relationship') || 
          window.location.pathname.includes('grief') || 
          window.location.pathname.includes('bpd') || 
          window.location.pathname.includes('sleep') ||
          window.location.pathname.includes('ptsd') ||
          window.location.pathname === '/conditions';
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
    
    return (serviceKeywords.some(keyword => window.location.pathname.includes(keyword)) || 
           window.location.pathname === '/services') && 
           !isConditionPage();
  };
  
  // Determine if this nav link should be active
  const isActive = 
    (href === '#home' && !window.location.hash) || 
    window.location.hash === href || 
    (href === '#services' && isServicePage()) ||
    (href === '#conditions' && isConditionPage()) ||
    (href === '#about' && window.location.pathname === '/about') ||
    (href === '#faq' && window.location.pathname === '/faq') ||
    (href === '#appointment' && (window.location.pathname === '/appointment' || window.location.pathname === '/contact'));
  
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
