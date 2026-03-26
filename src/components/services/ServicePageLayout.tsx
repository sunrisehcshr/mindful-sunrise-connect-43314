import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import SEOHead from '../SEOHead';
import SchemaMarkup from '../SchemaMarkup';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, PhoneCall, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Helmet } from 'react-helmet-async';

interface ServicePageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  pageTitle: string;
  metaDescription: string;
  serviceType: string;
  canonicalUrl: string;
  heroImage?: string;
  benefits?: string[];
  approaches?: { title: string; description: string; icon?: React.ReactNode }[];
  faqs?: { question: string; answer: string }[];
  relatedServices: { title: string; url: string }[];
  schemaType?: string;
  breadcrumbs?: { name: string; url: string; position: number }[];
}

const ServicePageLayout = ({
  children,
  title,
  description,
  pageTitle,
  metaDescription,
  serviceType,
  canonicalUrl,
  heroImage = '/images/Therapy-in-havertown.webp',
  benefits,
  approaches,
  faqs,
  relatedServices,
  schemaType,
  breadcrumbs
}: ServicePageLayoutProps) => {
  const warmGradientBg = "relative overflow-hidden bg-gradient-to-br from-yellow-100/80 via-white/30 to-amber-50/90";
  const warmGradientOverlay = (
    <div className="absolute inset-0 -z-10">
      <svg className="h-full w-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="warm-pattern" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="scale(0.75) rotate(0)">
            <rect x="0" y="0" width="100%" height="100%" fill="none" />
            <path d="M100 0H0V100" stroke="rgba(252, 211, 77, 0.4)" fill="none" strokeWidth="1" />
            <path d="M0 50H100M50 0V100" stroke="rgba(252, 211, 77, 0.3)" fill="none" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#warm-pattern)" />
      </svg>
    </div>
  );
  const itemBgClass = "bg-white/80 backdrop-blur-sm border border-amber-200/30 shadow-sm hover:shadow-md transition-all duration-300";
  const serviceName = serviceType || title.split('in')[0].trim();
  const absoluteCanonicalUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `https://sunrisehumancare.com${canonicalUrl}`;

  // Generate page-specific FAQ schema
  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={metaDescription}
        canonicalUrl={absoluteCanonicalUrl}
        keywords={`${serviceName.toLowerCase()} darby pa, ${serviceName.toLowerCase()} delaware county, mental health darby, therapy darby pa`}
        breadcrumbs={breadcrumbs}
      />
      <SchemaMarkup />

      {/* Page-specific FAQ schema */}
      {faqSchema && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        </Helmet>
      )}

      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-24 bg-white">
          <section className="relative py-12 md:py-16 lg:py-24 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-500 to-amber-400"></div>
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white"
                >
                  {title}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-base md:text-xl text-white/90 mb-6 md:mb-8"
                >
                  {description}
                </motion.p>
                
                <div className="flex flex-row flex-wrap sm:flex-nowrap gap-3 sm:gap-4 mt-6 md:mt-8">
                  <Link to="/appointment" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto bg-white text-orange-600 hover:bg-orange-50">
                      <Calendar className="mr-2 h-5 w-5" /> Schedule a Consultation
                    </Button>
                  </Link>
                  
                  <a href="tel:+18146202162" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white/10">
                      <PhoneCall className="mr-2 h-5 w-5" /> Call (814) 620-2162
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {/* Render main content sections (e.g., Why Choose, Types) */}
          {children}

          {/* Benefits Section */}
          {benefits && benefits.length > 0 && (
            <section className={`py-12 md:py-16 ${warmGradientBg}`}>
              {warmGradientOverlay}
              <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-amber-950">
                    Benefits of {serviceType} in Darby
                  </h2>
                  <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-6" />
                  <p className="text-amber-900">
                    Our {serviceType.toLowerCase()} in Darby, PA is designed to help you achieve meaningful, lasting improvements in your mental health and daily life.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className={`flex items-start gap-3 rounded-lg p-5 ${itemBgClass}`}
                    >
                      <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-amber-900 text-sm leading-relaxed">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Treatment Approaches Section */}
          {approaches && approaches.length > 0 && (
            <section className="py-12 md:py-16 bg-white">
              <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-amber-950">
                    Our Treatment Approaches for {serviceType}
                  </h2>
                  <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-6" />
                  <p className="text-muted-foreground">
                    We use evidence-based therapeutic methods tailored to your unique needs at our Darby, PA clinic.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                  {approaches.map((approach, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-amber-50/60 border border-amber-100/50 rounded-xl p-6 md:p-7 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        {approach.icon && (
                          <div className="rounded-full bg-amber-100/80 p-3 flex-shrink-0">
                            {approach.icon}
                          </div>
                        )}
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold mb-2 text-amber-900">{approach.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{approach.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* FAQ Section */}
          {faqs && faqs.length > 0 && (
            <section className={`py-12 md:py-16 ${warmGradientBg}`}>
              {warmGradientOverlay}
              <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-amber-950">
                    Frequently Asked Questions About {serviceType}
                  </h2>
                  <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-6" />
                </div>
                <div className="max-w-3xl mx-auto">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem value={`faq-${index}`} key={index} className="border-amber-200/50">
                        <AccordionTrigger className="text-base md:text-lg font-medium text-amber-950 text-left hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </section>
          )}
          
          <section className="py-12 md:py-16 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to Take the First Step?</h2>
                <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
                  Our compassionate team is here to support you on your mental health journey in Darby, Yeadon, and Upper Darby.
                </p>
                
                <div className="flex flex-row flex-wrap sm:flex-nowrap justify-center gap-3 sm:gap-4">
                  <Link to="/appointment" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full bg-white text-orange-600 hover:bg-orange-50">
                      <Calendar className="mr-2 h-5 w-5" /> Book Mental Health Appointment in Darby
                    </Button>
                  </Link>
                  
                  <a href="tel:+18146202162" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full bg-transparent border-white text-white hover:bg-white/10">
                      <PhoneCall className="mr-2 h-5 w-5" /> Speak with a Therapist Today
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          <section className={`py-12 md:py-16 ${warmGradientBg}`}>
            {warmGradientOverlay}
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-amber-950">Related Services in Darby</h2>
                <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-6 md:mb-8" />
                <p className="text-amber-900 mb-6 md:mb-8">
                  Explore our other mental health services in Darby that complement {serviceType}.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
                {relatedServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={service.url} className={`block rounded-lg p-5 md:p-6 h-full ${itemBgClass}`}>
                      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-amber-900">{service.title}</h3>
                      <div className="flex items-center text-orange-500 mt-3 md:mt-4">
                        <span className="text-sm font-medium">Learn more</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
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
