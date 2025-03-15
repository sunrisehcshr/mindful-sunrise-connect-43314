
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, Phone, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import SEOHead from '../SEOHead';
import { Button } from '../ui/button';
import AppointmentDialog from '../Appointment/AppointmentDialog';

interface ServicePageProps {
  title: string;
  description: string;
  pageTitle: string;
  metaDescription: string;
  serviceType: string;
  canonicalUrl: string;
  heroImage?: string;
  benefits: string[];
  approaches: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: { title: string; url: string }[];
  schemaType?: string;
  children?: React.ReactNode;
  keywords?: string;
}

const ServicePageLayout: React.FC<ServicePageProps> = ({
  title,
  description,
  pageTitle,
  metaDescription,
  serviceType,
  canonicalUrl,
  heroImage = "/images/Therapy-in-havertown.webp",
  benefits,
  approaches,
  faqs,
  relatedServices,
  schemaType = "MedicalTherapy",
  children,
  keywords
}) => {
  
  // Schema markup for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": title,
    "description": metaDescription,
    "url": `https://sunrisehcsllc.com${canonicalUrl}`,
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Sunrise Human Care Services",
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
      "containedIn": {
        "@type": "State",
        "name": "Pennsylvania"
      }
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Patients seeking mental health care"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://sunrisehcsllc.com${canonicalUrl}`
    }
  };

  // Generate service-specific keywords
  const defaultKeywords = `${serviceType} Havertown, ${serviceType} Delaware County, mental health services PA, ${serviceType} near me`;
  const serviceKeywords = keywords || defaultKeywords;
  
  return (
    <>
      <SEOHead
        title={pageTitle}
        description={metaDescription}
        canonicalUrl={`https://sunrisehcsllc.com${canonicalUrl}`}
        ogImage={heroImage}
        keywords={serviceKeywords}
      />
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="relative py-20 md:py-28 bg-gradient-to-b from-secondary/80 to-secondary">
            <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5 z-0"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sunrise-500/20 text-sunrise-900 mb-4">
                    {serviceType}
                  </span>
                  
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-caladea">
                    {title}
                  </h1>
                  
                  <p className="text-muted-foreground text-lg mb-8">
                    {description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <AppointmentDialog>
                      <Button size="lg" className="bg-sunrise-600 hover:bg-sunrise-700 text-white flex items-center gap-2">
                        <CalendarCheck className="h-5 w-5" />
                        Book a Free Consultation
                      </Button>
                    </AppointmentDialog>
                    
                    <Button variant="outline" size="lg" className="border-sunrise-600 text-sunrise-600 hover:bg-sunrise-50" asChild>
                      <Link to="tel:+18146202162" className="flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        Call (814) 620-2162
                      </Link>
                    </Button>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-xl overflow-hidden shadow-xl"
                >
                  <img 
                    src={heroImage} 
                    alt={`${title} in Havertown, PA at Sunrise Human Care Services`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Benefits Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-caladea">
                  Benefits of {serviceType}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-secondary/30 p-6 rounded-lg flex items-start"
                  >
                    <CheckCircle2 className="text-sunrise-500 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <p className="font-medium">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Additional content specific to this service */}
          {children}
          
          {/* Our Approaches */}
          <section className="py-16 bg-gradient-to-b from-white to-secondary/20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sunrise-500/20 text-sunrise-900 mb-4">
                  Methodology
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-caladea">
                  Our Approach to {serviceType}
                </h2>
                <p className="text-muted-foreground">
                  We use evidence-based methods tailored to your specific needs
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {approaches.map((approach, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-sm border border-border/40 hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-3 font-caladea">{approach.title}</h3>
                    <p className="text-muted-foreground">{approach.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* FAQs */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sunrise-500/20 text-sunrise-900 mb-4">
                  Common Questions
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-caladea">
                  Frequently Asked Questions
                </h2>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-secondary/20 p-6 rounded-lg hover:bg-secondary/30 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-semibold mb-3 font-caladea">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Related Services */}
          <section className="py-16 bg-gradient-to-b from-secondary/20 to-secondary/40">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sunrise-500/20 text-sunrise-900 mb-4">
                  Explore More
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-caladea">
                  Related Services
                </h2>
                <p className="text-muted-foreground">
                  Explore other mental health services offered by Sunrise Human Care Services
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-sm border border-border/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold mb-3 font-caladea">{service.title}</h3>
                    <Link
                      to={service.url}
                      className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors duration-200 group"
                    >
                      Learn more
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <AppointmentDialog>
                  <Button size="lg" className="bg-sunrise-600 hover:bg-sunrise-700 text-white">
                    Schedule Your Consultation Today
                  </Button>
                </AppointmentDialog>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ServicePageLayout;
