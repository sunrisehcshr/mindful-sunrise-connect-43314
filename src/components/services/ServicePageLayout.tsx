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
  // Updated background class to match hero section gradient
  const sectionBgClass = "bg-gradient-to-br from-white to-amber-50/50 backdrop-blur-sm";
  return <>
      <SEOHead title={pageTitle} description={metaDescription} canonicalUrl={canonicalUrl} />
      <SchemaMarkup />

      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-24 bg-white">
          {/* Hero Section - Updated with gradient background, grid removed */}
          <section className="relative py-12 md:py-16 lg:py-24 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-500 to-amber-400"></div>
            
            {/* Subtle texture overlay instead of grid */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="max-w-3xl">                
                <motion.h1 initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5
              }} className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
                  {title}
                </motion.h1>
                
                <motion.p initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.1
              }} className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
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
          
          {/* Custom Content Section */}
          {children}
          
          {/* Benefits Section - Updated background to gradient */}
          <section className="py-12 md:py-16 relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-500/10 to-amber-400/10"></div>
            
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 z-0 opacity-100 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Benefits of {serviceType}</h2>
                <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-6 md:mb-8" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {benefits.map((benefit, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} className="flex items-start space-x-4">
                    <div className="mt-1 bg-orange-100 text-orange-600 rounded-full p-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground">{benefit}</p>
                  </motion.div>)}
              </div>
            </div>
          </section>
          
          {/* Approaches Section */}
          <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our {serviceType} Approach</h2>
                <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-6 md:mb-8" />
                <p className="text-muted-foreground mb-6 md:mb-8">
                  We utilize various evidence-based therapies tailored to your specific needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {approaches.map((approach, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} className="relative overflow-hidden rounded-lg p-5 md:p-6 border border-orange-100/50">
                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-500/10 to-amber-400/10"></div>
                    <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
                    <div className="relative z-10">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{approach.title}</h3>
                      <p className="text-muted-foreground text-sm md:text-base">{approach.description}</p>
                    </div>
                  </motion.div>)}
              </div>
            </div>
          </section>
          
          {/* CTA Section - Fixed button alignment */}
          <section className="py-12 md:py-16 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to Take the First Step?</h2>
                <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
                  Our compassionate team is here to support you on your mental health journey.
                </p>
                
                <div className="flex flex-row flex-wrap sm:flex-nowrap justify-center gap-3 sm:gap-4">
                  <Link to="/appointment" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full bg-white text-orange-600 hover:bg-orange-50">
                      <Calendar className="mr-2 h-5 w-5" /> Schedule an Appointment
                    </Button>
                  </Link>
                  
                  <a href="tel:+18146202162" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full bg-transparent border-white text-white hover:bg-white/10">
                      <PhoneCall className="mr-2 h-5 w-5" /> Call Us Today
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {/* FAQs Section - Updated background to gradient */}
          <section className="py-12 md:py-16 relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-500/10 to-amber-400/10"></div>
            
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Frequently Asked Questions</h2>
                <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-6 md:mb-8" />
              </div>
              
              <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} className="mb-5 md:mb-6 bg-white rounded-lg p-5 md:p-6 border border-orange-100/50 shadow-sm">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm md:text-base">{faq.answer}</p>
                  </motion.div>)}
              </div>
            </div>
          </section>
          
          {/* Related Services Section - Updated background to gradient */}
          <section className="py-12 md:py-16 relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-500/10 to-amber-400/10"></div>
            
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Related Services</h2>
                <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-6 md:mb-8" />
                <p className="text-muted-foreground mb-6 md:mb-8">
                  Explore our other mental health services that complement {serviceType}.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
                {relatedServices.map((service, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }}>
                    <Link to={service.url} className="block bg-white rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-orange-100/50 h-full">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{service.title}</h3>
                      <div className="flex items-center text-orange-500 mt-3 md:mt-4">
                        <span className="text-sm font-medium">Learn more</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </Link>
                  </motion.div>)}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>;
};
export default ServicePageLayout;