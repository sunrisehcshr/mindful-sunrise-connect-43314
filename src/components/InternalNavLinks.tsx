
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
  // Check if the current path includes therapy or treatment to identify condition pages
  const isConditionPage = window.location.pathname.includes('therapy') || 
                          window.location.pathname.includes('treatment') || 
                          window.location.pathname.includes('disorder') ||
                          window.location.pathname.includes('counseling');
  
  // Check if it's a service page but not a condition page
  const isServicePage = (window.location.pathname.includes('therapy') || 
                         window.location.pathname.includes('treatment') || 
                         window.location.pathname.includes('counseling') || 
                         window.location.pathname.includes('evaluations') || 
                         window.location.pathname.includes('management')) && 
                        !window.location.pathname.includes('disorder');
  
  // Check if we're on the services page
  const isServicesMainPage = window.location.pathname === '/services';
  
  // Determine if this nav link should be active
  const isActive = 
    (href === '#home' && !window.location.hash) || 
    window.location.hash === href || 
    (href === '#services' && (isServicePage || isServicesMainPage)) ||
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
