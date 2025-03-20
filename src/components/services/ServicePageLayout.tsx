
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTag from '../ui/section-tag';
import SEOHead from '../SEOHead';
import SchemaMarkup from '../SchemaMarkup';

interface Approach {
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface RelatedService {
  title: string;
  url: string;
}

interface ServicePageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  pageTitle: string;
  metaDescription: string;
  serviceType: string;
  canonicalUrl: string;
  heroImage?: string;
  benefits: string[];
  approaches: Approach[];
  faqs: FAQ[];
  relatedServices: RelatedService[];
  schemaType?: string;
}

const ServicePageLayout = ({
  children,
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
  schemaType = "TherapeuticService"
}: ServicePageLayoutProps) => {
  return (
    <>
      <SEOHead 
        title={pageTitle}
        description={metaDescription}
        canonicalUrl={canonicalUrl}
      />
      
      <SchemaMarkup 
        name={serviceType}
        description={description}
        schemaType={schemaType}
      />
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-24 bg-white">
          {/* Hero Section */}
          <section className="relative py-12 md:py-16 lg:py-24 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-500 to-amber-400"></div>
            
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-2xl">                
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
                    {title}
                  </h1>
                  
                  <p className="text-base md:text-lg text-white/90 mb-6">
                    {description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:+18146202162">
                      <Button variant="default" className="bg-white hover:bg-white/90 text-orange-600 border border-white/80 sm:w-auto w-full">
                        <Phone className="mr-2 h-4 w-4" /> Call Now
                      </Button>
                    </a>
                    <a href="#appointment-form">
                      <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20 sm:w-auto w-full">
                        Schedule Consultation
                      </Button>
                    </a>
                  </div>
                </div>
                
                <div className="hidden lg:block">
                  <img 
                    src={heroImage} 
                    alt={title}
                    className="rounded-lg shadow-xl border-2 border-white/20 object-cover w-full h-[350px]"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Service-specific content */}
          {children}
          
          {/* Benefits Section */}
          <section className="relative py-16 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-yellow-100/80 via-white/30 to-amber-50/90"></div>
            <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <SectionTag>Benefits</SectionTag>
                </motion.div>
                
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  How {serviceType} Can Help You
                </motion.h2>
                
                <div className="mx-auto mt-6 w-24">
                  <Separator className="bg-gradient-to-r from-transparent via-orange-300/50 to-transparent h-0.5" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-yellow-200/50 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Treatment Approaches */}
          <section className="relative py-16 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-yellow-100/80 via-white/30 to-amber-50/90"></div>
            <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <SectionTag>Treatment Approaches</SectionTag>
                </motion.div>
                
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Our {serviceType} Methods
                </motion.h2>
                
                <div className="mx-auto mt-6 w-24">
                  <Separator className="bg-gradient-to-r from-transparent via-orange-300/50 to-transparent h-0.5" />
                </div>
              </div>
              
              <div className="space-y-6">
                {approaches.map((approach, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-yellow-200/50 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-amber-800">{approach.title}</h3>
                    <p className="text-gray-700">{approach.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* FAQs */}
          <section className="relative py-16 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-yellow-100/80 via-white/30 to-amber-50/90"></div>
            <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <SectionTag>FAQs</SectionTag>
                </motion.div>
                
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Frequently Asked Questions
                </motion.h2>
                
                <div className="mx-auto mt-6 w-24">
                  <Separator className="bg-gradient-to-r from-transparent via-orange-300/50 to-transparent h-0.5" />
                </div>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-yellow-200/50 shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <h3 className="text-lg font-semibold mb-2 text-amber-800">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {/* Related Services */}
          <section className="relative py-16 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-yellow-100/80 via-white/30 to-amber-50/90"></div>
            <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <SectionTag>Related Services</SectionTag>
                </motion.div>
                
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Explore Related Services
                </motion.h2>
                
                <div className="mx-auto mt-6 w-24">
                  <Separator className="bg-gradient-to-r from-transparent via-orange-300/50 to-transparent h-0.5" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <a 
                      href={service.url}
                      className="block bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-yellow-200/50 shadow-sm hover:shadow-md transition-all duration-300 h-full"
                    >
                      <h3 className="text-lg font-semibold mb-2 text-amber-800">{service.title}</h3>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-orange-500 text-sm">Learn more</span>
                        <ExternalLink className="h-4 w-4 text-orange-500" />
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Call to Action - Appointment */}
          <section id="appointment-form" className="relative py-16 bg-gradient-to-br from-orange-500 to-amber-500 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Ready to Begin Your Journey?
                </h2>
                
                <p className="text-white/90 mb-8">
                  Take the first step toward positive change with {serviceType} at Sunrise Human Care Services. Our compassionate team is ready to support you.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+18146202162">
                    <Button size="lg" className="bg-white hover:bg-white/90 text-orange-600 sm:w-auto w-full">
                      <Phone className="mr-2 h-4 w-4" /> Call (814) 620-2162
                    </Button>
                  </a>
                  <a href="/appointment">
                    <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/20 sm:w-auto w-full">
                      Schedule Online
                    </Button>
                  </a>
                </div>
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
