import { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import InternalNavLinks from "@/components/InternalNavLinks";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/services/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
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
  <img
    src="/logo.svg"
    alt="Sunrise Human Care Logo"
    className="h-10 w-10 scale-200 transition-transform duration-500 group-hover:translate-y-[-5px] scale-200"
  />
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
          <SpecialtiesSection />
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
