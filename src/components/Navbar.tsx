
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, CircleDot } from "lucide-react"; // Added CircleDot icon

import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/appointment", label: "Appointments" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 bg-orange-500 text-white",
        isScrolled ? "shadow-sm" : ""
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/logo.svg"
              alt="Sunrise Logo"
              className="h-8 w-8 object-contain transition-transform duration-300 group-hover:-translate-y-1"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-lg leading-tight">Sunrise</span>
              <span className="text-xs text-white/80 leading-tight">Human Care Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-1.5",
                  isActive(link.path)
                    ? "bg-white text-orange-500 font-semibold"
                    : "text-white hover:bg-white/10"
                )}
              >
                {isActive(link.path) && <CircleDot className="h-3.5 w-3.5 text-orange-500" />}
                {link.label}
              </Link>
            ))}
            <Link
              to="/appointment"
              className="ml-2 px-4 py-2 bg-white text-orange-500 font-medium rounded-md hover:bg-white/90 transition-colors"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-x-0 top-[72px] bg-orange-500 transition-all duration-300 ease-in-out border-t border-white/20",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2",
                  isActive(link.path)
                    ? "bg-white text-orange-500 font-semibold"
                    : "text-white hover:bg-white/10"
                )}
              >
                {isActive(link.path) && <CircleDot className="h-3.5 w-3.5 text-orange-500" />}
                {link.label}
              </Link>
            ))}
            <Link
              to="/appointment"
              className="px-4 py-3 bg-white text-orange-500 font-medium rounded-md hover:bg-white/90 transition-colors text-center mt-2"
            >
              Book Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
