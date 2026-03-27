import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import SEOHead from '../SEOHead';
import SchemaMarkup from '../SchemaMarkup';
import { motion } from 'framer-motion';
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
  const serviceName = serviceType || title.split('in')[0].trim();
  const absoluteCanonicalUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `https://sunrisehumancare.com${canonicalUrl}`;

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

      {faqSchema && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        </Helmet>
      )}

      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-28 bg-[#faf8f4]">
          {/* Hero */}
          <section className="py-16 md:py-20 lg:py-28 bg-[#f0ece4]">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70 mb-4">{serviceType}</span>
                  <h1 className="font-barlow font-bold text-2xl sm:text-3xl md:text-5xl text-stone-800 tracking-tight leading-tight mb-6">
                    {title}
                  </h1>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-base md:text-lg text-stone-600 font-barlow mb-8 leading-relaxed"
                >
                  {description}
                </motion.p>
                
                <div className="flex flex-row flex-wrap sm:flex-nowrap gap-3 sm:gap-4 mt-6 md:mt-8">
                  <Link to="/appointment" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto bg-[#222] hover:bg-zinc-800 text-white font-barlow font-semibold rounded-full">
                      <Calendar className="mr-2 h-5 w-5" /> Schedule a Consultation
                    </Button>
                  </Link>
                  
                  <a href="tel:+18146202162" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-stone-200 text-stone-800 font-barlow font-medium rounded-full hover:border-amber-200 hover:bg-amber-50">
                      <PhoneCall className="mr-2 h-5 w-5" /> Call (814) 620-2162
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {children}

          {/* Benefits Section */}
          {benefits && benefits.length > 0 && (
            <section className="py-16 md:py-20 bg-[#faf8f4]">
              <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70 mb-4">Benefits</span>
                  <h2 className="font-barlow font-bold text-2xl md:text-3xl lg:text-4xl text-stone-800 tracking-tight leading-tight mb-4">
                    Benefits of {serviceType}
                    <span className="block font-instrument-serif italic text-amber-400 font-normal">in Darby</span>
                  </h2>
                  <p className="text-stone-600 font-barlow">
                    Our {serviceType.toLowerCase()} in Darby, PA is designed to help you achieve meaningful, lasting improvements in your mental health and daily life.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-stone-200/80 hover:border-amber-200 hover:shadow-sm transition-all duration-300"
                    >
                      <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-stone-600 text-sm font-barlow leading-relaxed">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Treatment Approaches */}
          {approaches && approaches.length > 0 && (
            <section className="py-16 md:py-20 bg-[#f0ece4]">
              <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70 mb-4">Our Approach</span>
                  <h2 className="font-barlow font-bold text-2xl md:text-3xl lg:text-4xl text-stone-800 tracking-tight leading-tight mb-4">
                    Treatment approaches
                    <span className="block font-instrument-serif italic text-amber-400 font-normal">for {serviceType}</span>
                  </h2>
                  <p className="text-stone-600 font-barlow">
                    We use evidence-based therapeutic methods tailored to your unique needs at our Darby, PA clinic.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
                  {approaches.map((approach, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white border border-stone-200/80 rounded-2xl p-7 hover:border-amber-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        {approach.icon && (
                          <div className="rounded-full bg-amber-100 p-3 flex-shrink-0 text-amber-700">
                            {approach.icon}
                          </div>
                        )}
                        <div>
                          <h3 className="text-lg font-barlow font-semibold mb-2 text-stone-800">{approach.title}</h3>
                          <p className="text-stone-500 text-sm font-barlow leading-relaxed">{approach.description}</p>
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
            <section className="py-16 md:py-20 bg-[#faf8f4]">
              <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70 mb-4">FAQ</span>
                  <h2 className="font-barlow font-bold text-2xl md:text-3xl lg:text-4xl text-stone-800 tracking-tight leading-tight">
                    Frequently asked questions
                    <span className="block font-instrument-serif italic text-amber-400 font-normal">about {serviceType}</span>
                  </h2>
                </div>
                <div className="max-w-3xl mx-auto">
                  <Accordion type="single" collapsible className="w-full space-y-3">
                    {faqs.map((faq, index) => (
                      <AccordionItem 
                        value={`faq-${index}`} 
                        key={index} 
                        className="bg-white border border-stone-200/80 rounded-2xl px-5 data-[state=open]:border-amber-200 data-[state=open]:shadow-md transition-all"
                      >
                        <AccordionTrigger className="text-base font-barlow font-medium text-stone-800 text-left hover:no-underline py-5">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-stone-500 font-barlow leading-relaxed pb-2">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </section>
          )}
          
          {/* CTA Section */}
          <section className="py-16 md:py-20 bg-[#222]">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-barlow font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-4 tracking-tight">Ready to Take the First Step?</h2>
                <p className="text-base md:text-lg text-white/70 mb-8 font-barlow">
                  Our compassionate team is here to support you on your mental health journey in Darby, Yeadon, and Upper Darby.
                </p>
                
                <div className="flex flex-row flex-wrap sm:flex-nowrap justify-center gap-3 sm:gap-4">
                  <Link to="/appointment" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full bg-white text-stone-800 hover:bg-amber-50 font-barlow font-semibold rounded-full">
                      <Calendar className="mr-2 h-5 w-5" /> Book Appointment
                    </Button>
                  </Link>
                  
                  <a href="tel:+18146202162" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full bg-transparent border-white/30 text-white hover:bg-white/10 font-barlow rounded-full">
                      <PhoneCall className="mr-2 h-5 w-5" /> Speak with a Therapist
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {/* Related Services */}
          <section className="py-16 md:py-20 bg-[#f0ece4]">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70 mb-4">Related</span>
                <h2 className="font-barlow font-bold text-2xl md:text-3xl lg:text-4xl text-stone-800 tracking-tight leading-tight">
                  Related services
                  <span className="block font-instrument-serif italic text-amber-400 font-normal">in Darby</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {relatedServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={service.url} className="block bg-white rounded-2xl p-6 border border-stone-200/80 hover:border-amber-200 hover:shadow-lg transition-all duration-300 h-full">
                      <h3 className="text-lg font-barlow font-semibold mb-3 text-stone-800">{service.title}</h3>
                      <div className="flex items-center text-amber-700 mt-4">
                        <span className="text-sm font-barlow font-medium">Learn more</span>
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
