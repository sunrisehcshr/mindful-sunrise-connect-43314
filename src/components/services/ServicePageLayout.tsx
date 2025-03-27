
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import SEOHead from '../SEOHead';
import SchemaMarkup from '../SchemaMarkup';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  approaches: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: {
    title: string;
    url: string;
  }[];
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
  heroImage = '/therapy-in-havertown.jpg',
  benefits,
  approaches,
  faqs,
  relatedServices,
  schemaType
}: ServicePageLayoutProps) => {
  
  return (
    <>
      <SEOHead title={pageTitle} description={metaDescription} canonicalUrl={canonicalUrl} />
      <SchemaMarkup />

      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-24 bg-white">
          {/* Hero Section - Enhanced with better spacing and visual elements */}
          <section className="relative py-16 md:py-20 lg:py-28 overflow-hidden" id="home">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-500 to-amber-400"></div>
            
            {/* Enhanced texture overlay with subtle pattern */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
            
            {/* Subtle floating circles for visual interest */}
            <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-white opacity-5 animate-float"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-white opacity-5 animate-float" style={{animationDelay: '2s'}}></div>
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                {/* Service tag */}
                <motion.span 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full mb-4 border border-white/30"
                >
                  {serviceType}
                </motion.span>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight"
                >
                  {title}
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-base md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed"
                >
                  {description}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-row flex-wrap sm:flex-nowrap gap-4 mt-8"
                >
                  <Link to="/appointment" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto bg-white text-orange-600 hover:bg-orange-50 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                      <Calendar className="mr-2 h-5 w-5" /> Schedule a Consultation
                    </Button>
                  </Link>
                  
                  <a href="tel:+18146202162" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white/10 font-medium">
                      <PhoneCall className="mr-2 h-5 w-5" /> Call (814) 620-2162
                    </Button>
                  </a>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Custom Content Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {children}
          </motion.div>
          
          {/* Benefits Section - Updated with card design */}
          <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-white to-amber-50/30">
            <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')] opacity-5"></div>
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="inline-block px-3 py-1 text-xs font-medium bg-orange-100 text-orange-600 rounded-full mb-3"
                >
                  Benefits
                </motion.span>
                
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-2xl md:text-3xl font-bold mb-4 md:mb-6"
                >
                  Benefits of {serviceType}
                </motion.h2>
                
                <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-8 md:mb-10" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-orange-100/50 h-full"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-gradient-to-r from-orange-400 to-amber-500 text-white rounded-full p-1.5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-base text-gray-700">{benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Approaches Section - Enhanced card design */}
          <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="inline-block px-3 py-1 text-xs font-medium bg-orange-100 text-orange-600 rounded-full mb-3"
                >
                  Our Approach
                </motion.span>
                
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-2xl md:text-3xl font-bold mb-4 md:mb-6"
                >
                  Our {serviceType} Approach
                </motion.h2>
                
                <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-8 md:mb-10" />
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-muted-foreground mb-8 md:mb-10"
                >
                  We utilize various evidence-based therapies tailored to your specific needs.
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {approaches.map((approach, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-white to-amber-50/30 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-orange-100/50"
                  >
                    <div className="flex flex-col h-full">
                      <div className="bg-orange-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                        <span className="text-orange-600 font-bold">{index + 1}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 md:mb-4 text-gray-800">{approach.title}</h3>
                      
                      <p className="text-muted-foreground text-base flex-grow">{approach.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA Section - Enhanced with gradient background */}
          <section className="py-16 md:py-20 bg-gradient-to-r from-orange-500 to-amber-500 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/10 to-transparent"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">Ready to Take the First Step?</h2>
                
                <p className="text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto">
                  Our compassionate team is here to support you on your mental health journey.
                </p>
                
                <div className="flex flex-row flex-wrap sm:flex-nowrap justify-center gap-4">
                  <Link to="/appointment" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full bg-white text-orange-600 hover:bg-orange-50 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                      <Calendar className="mr-2 h-5 w-5" /> Schedule an Appointment
                    </Button>
                  </Link>
                  
                  <a href="tel:+18146202162" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full bg-transparent border-white text-white hover:bg-white/10 font-medium">
                      <PhoneCall className="mr-2 h-5 w-5" /> Call Us Today
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* FAQs Section - Improved accordion-style */}
          <section className="py-16 md:py-20 bg-gradient-to-b from-white to-amber-50/30 relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')] opacity-5"></div>
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="inline-block px-3 py-1 text-xs font-medium bg-orange-100 text-orange-600 rounded-full mb-3"
                >
                  FAQ
                </motion.span>
                
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-2xl md:text-3xl font-bold mb-4 md:mb-6"
                >
                  Frequently Asked Questions
                </motion.h2>
                
                <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-8 md:mb-10" />
              </div>
              
              <div className="max-w-3xl mx-auto">
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-orange-100/50"
                    >
                      <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">{faq.question}</h3>
                      <p className="text-gray-600 text-base">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {/* Related Services Section - Enhanced card design */}
          <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="inline-block px-3 py-1 text-xs font-medium bg-orange-100 text-orange-600 rounded-full mb-3"
                >
                  Explore More
                </motion.span>
                
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-2xl md:text-3xl font-bold mb-4 md:mb-6"
                >
                  Related Services
                </motion.h2>
                
                <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-8 md:mb-10" />
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-muted-foreground mb-8 md:mb-10"
                >
                  Explore our other mental health services that complement {serviceType}.
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {relatedServices.map((service, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="h-full"
                  >
                    <Link 
                      to={service.url} 
                      className="block bg-gradient-to-br from-white to-amber-50/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-orange-100/50 h-full flex flex-col"
                    >
                      <div className="bg-orange-100/50 w-10 h-10 flex items-center justify-center rounded-full mb-4">
                        <ArrowRight className="h-5 w-5 text-orange-500" />
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                      
                      <div className="mt-auto pt-4">
                        <span className="inline-flex items-center text-orange-500 font-medium text-sm">
                          Learn more
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
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
