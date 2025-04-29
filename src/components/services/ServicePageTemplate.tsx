
import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import ServiceHero from "./ServiceHero";
import ServiceDescription from "./ServiceDescription";
import ServiceTestimonials from "./ServiceTestimonials";
import ServiceFAQ from "./ServiceFAQ";
import ServiceSidebar from "./ServiceSidebar";
import ServicePageCTA from "./ServicePageCTA";
import Map from "@/components/Map";
import { 
  ServiceData, 
  normalizeServiceType, 
  testimonials, 
  faqs, 
  pricingInfo 
} from "@/lib/servicePageUtils";

// Appointment booking components
// Note: Assuming you have or will create these components
import AppointmentDialog from "@/components/Appointment/AppointmentDialog";

interface ServicePageTemplateProps {
  service: ServiceData;
  customH1?: string;
  customTestimonials?: Array<{ quote: string; author: string; }>;
  customFAQs?: Array<{ q: string; a: string; }>;
  customPricing?: string;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  service,
  customH1,
  customTestimonials,
  customFAQs,
  customPricing
}) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Normalize the service type for testimonials and FAQs
  const serviceType = normalizeServiceType(service.title);
  
  // Get service-specific content or use defaults
  const serviceTestimonials = customTestimonials || testimonials[serviceType] || [];
  const serviceFAQs = customFAQs || faqs[serviceType] || [];
  const servicePricing = customPricing || pricingInfo[serviceType] || "Contact us for pricing";
  
  // Use the SEO-friendly URL for canonical path
  const canonicalPath = service.seoSlug || `/services/${service.slug}`;
  const canonicalUrl = `https://sunrisehumancare.com${canonicalPath}`;
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* SEO */}
      <Helmet>
        <title>{`${service.title} | Sunrise Human Care Services in Havertown, PA`}</title>
        <meta name="description" content={service.metaDescription || service.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content={`${service.title.toLowerCase()}, mental health, therapy, counseling, havertown, pa, delaware county`} />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalService",
            "name": service.title,
            "url": canonicalUrl,
            "description": service.metaDescription || service.description,
            "provider": {
              "@type": "MedicalOrganization",
              "name": "Sunrise Human Care Services",
              "telephone": "+18146202162",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2050 West Chester Pike",
                "addressLocality": "Havertown",
                "addressRegion": "PA",
                "postalCode": "19083",
                "addressCountry": "US"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Havertown",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Delaware County"
              }
            },
            "serviceType": serviceType
          })}
        </script>
        
        {/* FAQ Schema if we have FAQs */}
        {serviceFAQs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": serviceFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            })}
          </script>
        )}
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <ServiceHero 
          service={service} 
          customH1={customH1} 
          onBookingClick={() => setIsBookingOpen(true)} 
        />
        
        {/* Main Content Section */}
        <section className="py-16 bg-amber-50/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content - 2/3 width */}
              <div className="col-span-2 space-y-8">
                {/* Service Description */}
                <ServiceDescription 
                  title={service.title}
                  description={service.detailedDescription}
                  benefits={service.benefits}
                  process={service.process}
                  iconColor={service.iconColor}
                />
                
                {/* Testimonials Section if we have testimonials */}
                {serviceTestimonials.length > 0 && (
                  <ServiceTestimonials 
                    testimonials={serviceTestimonials} 
                    iconColor={service.iconColor} 
                  />
                )}
                
                {/* FAQs Section if we have FAQs */}
                {serviceFAQs.length > 0 && (
                  <ServiceFAQ 
                    title={service.title} 
                    faqs={serviceFAQs} 
                    iconColor={service.iconColor} 
                  />
                )}
              </div>
              
              {/* Sidebar - 1/3 width */}
              <div>
                <ServiceSidebar 
                  title={service.title} 
                  pricing={servicePricing}
                  iconColor={service.iconColor}
                  onBookingClick={() => setIsBookingOpen(true)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Banner */}
        <ServicePageCTA 
          title={service.title}
          iconColor={service.iconColor} 
          onBookingClick={() => setIsBookingOpen(true)}
        />
        
        {/* Location Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-amber-900 mb-4"
              >
                Visit Our Havertown Office
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-amber-800 max-w-2xl mx-auto"
              >
                Sunrise Human Care Services is conveniently located in Havertown, PA, serving Delaware County and surrounding areas.
              </motion.p>
            </div>
            
            {/* Map Component */}
            <div className="bg-white rounded-xl shadow-sm border border-amber-100 overflow-hidden">
              <Map />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Booking Dialog */}
      <AppointmentDialog 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        initialServiceName={service.title}
      />
    </div>
  );
};

export default ServicePageTemplate;
