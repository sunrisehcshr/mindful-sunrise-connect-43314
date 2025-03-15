import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { Separator } from '../ui/separator';
import SectionTag from '../ui/section-tag';
import { Link } from 'react-router-dom';
import SEOHead from '../SEOHead';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';

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
  approaches: { title: string; description: string; }[];
  faqs: { question: string; answer: string; }[];
  relatedServices: { title: string; url: string; }[];
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
      <SEOHead
        title={pageTitle}
        description={metaDescription}
        canonicalUrl={`https://sunrisehcsllc.com${canonicalUrl}`}
      />
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-secondary/10 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-amber-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {title}
                </motion.h1>
                
                <motion.p 
                  className="text-muted-foreground mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {description}
                </motion.p>
                
                <motion.div 
                  className="space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Link to="/contact" className="btn-sunrise">
                    Book Consultation
                  </Link>
                  <a href="tel:814-620-2162" className="btn-outline-sunrise inline-flex items-center">
                    <Phone className="mr-2 h-4 w-4" /> Call Us
                  </a>
                </motion.div>
              </div>
              
              <motion.div 
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <img src={heroImage} alt={title} className="rounded-2xl shadow-lg" />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-white/60">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <SectionTag>Benefits</SectionTag>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                {serviceType} Benefits
              </h2>
              
              <div className="mx-auto mt-6 mb-10 w-24">
                <Separator className="bg-gradient-to-r from-transparent via-orange-300/50 to-transparent h-0.5" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 bg-secondary/20 rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Check className="text-green-500 h-5 w-5" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Custom Content */}
        {children}
        
        {/* Approaches Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <SectionTag>Our Approaches</SectionTag>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Treatment Approaches
              </h2>
              
              <div className="mx-auto mt-6 mb-10 w-24">
                <Separator className="bg-gradient-to-r from-transparent via-orange-300/50 to-transparent h-0.5" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {approaches.map((approach, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 border border-secondary/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-2 font-playfair">{approach.title}</h3>
                  <p className="text-muted-foreground">{approach.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white/60">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <SectionTag>FAQ</SectionTag>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Frequently Asked Questions
              </h2>
              
              <div className="mx-auto mt-6 mb-10 w-24">
                <Separator className="bg-gradient-to-r from-transparent via-orange-300/50 to-transparent h-0.5" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-secondary/20 rounded-lg shadow-sm p-6 border border-secondary/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold mb-2 font-playfair">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <SectionTag>Get Started</SectionTag>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-playfair">
                Ready to Begin Your Healing Journey?
              </h2>
              
              <p className="text-muted-foreground mb-8">
                Contact us today to schedule your initial consultation and take the first step toward a happier, healthier you.
              </p>
              
              <div className="space-x-4">
                <Link to="/contact" className="btn-sunrise">
                  Book Consultation
                </Link>
                <a href="tel:814-620-2162" className="btn-outline-sunrise inline-flex items-center">
                  <Phone className="mr-2 h-4 w-4" /> Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <SectionTag>Explore More</SectionTag>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Related Services
              </h2>
              
              <div className="mx-auto mt-6 mb-10 w-24">
                <Separator className="bg-gradient-to-r from-transparent via-orange-300/50 to-transparent h-0.5" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-4 border border-secondary/30 hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={service.url} className="block">
                    <h3 className="text-lg font-semibold mb-2 font-playfair">{service.title}</h3>
                    <ArrowRight className="h-4 w-4 text-gray-500 inline-block ml-2 align-middle" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ServicePageLayout;
