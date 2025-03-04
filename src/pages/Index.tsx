
import { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import InternalNavLinks from "@/components/InternalNavLinks";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/services/ServicesSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQ/FAQSection";
import AppointmentSection from "@/components/Appointment/AppointmentSection";
import Footer from "@/components/Footer/Footer";

// Lazy load components to improve initial load time
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Add smooth scrolling for better UX
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Handle initial hash on page load
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Clean up
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <SEOHead />
      <SchemaMarkup />

      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm py-4">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sunrise-400 transition-transform duration-500 group-hover:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-semibold text-lg leading-tight">Sunrise</span>
                  <span className="text-xs text-muted-foreground leading-tight">Human Care Services</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <InternalNavLinks />
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 py-2 bg-white border-t">
                <nav className="flex flex-col space-y-2">
                  <InternalNavLinks className="flex-col" onLinkClick={closeMobileMenu} />
                </nav>
              </div>
            )}
          </div>
        </header>
        
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <FAQSection />
          <AppointmentSection />
          
          {/* Testimonials Section */}
          <Suspense fallback={<div className="py-20 text-center">Loading testimonials...</div>}>
            <TestimonialsSection />
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
