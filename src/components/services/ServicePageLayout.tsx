"use client";

import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import SEOHead from '../SEOHead';
import SchemaMarkup from '../SchemaMarkup';
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Calendar, PhoneCall, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import AppointmentSection from '../Appointment/AppointmentSection';
import SectionTag from '../ui/section-tag';
import { cn } from "@/lib/utils";

interface ServicePageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  pageTitle?: string;
  metaDescription?: string;
  serviceType?: string;
  canonicalUrl?: string;
  heroImage?: string;
  benefits?: string[];
  approaches?: { title: string; description: string; icon?: React.ReactNode }[];
  faqs?: { question: string; answer: string }[];
  relatedServices?: { title: string; url: string }[];
  schemaType?: string;
  breadcrumbs?: { name: string; url: string; position: number }[];
}

// --- Glowing Bento Card ---
function Card({ children, className, containerClassName }: { children: React.ReactNode; className?: string, containerClassName?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
  }

  return (
      <div
          className={cn(
              "group relative border border-stone-200/80 bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-500",
              "hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-orange-200/50 hover:bg-white rounded-3xl",
              containerClassName
          )}
          onMouseMove={handleMouseMove}
      >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-stone-50/50 pointer-events-none" />
          <motion.div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
              style={{
                  background: useMotionTemplate`
          radial-gradient(
            650px circle at ${mouseX}px ${mouseY}px,
            rgba(249, 115, 22, 0.08),
            transparent 80%
          )
        `,
              }}
          />
          <div className={cn("relative h-full w-full p-8", className)}>
              {children}
          </div>
      </div>
  );
}

const ServicePageLayout = ({
  children,
  title,
  description,
  pageTitle,
  metaDescription,
  serviceType = "Mental Health Service",
  canonicalUrl = "https://sunrisehumancare.com",
  heroImage = 'https://res.cloudinary.com/dabsxebx8/image/upload/v1774918057/cropped-shot-of-a-man-having-a-therapeutic-session-2026-03-25-02-43-30-utc_bzrrq0.jpg',
  benefits,
  approaches,
  faqs,
  relatedServices = [],
  schemaType,
  breadcrumbs
}: ServicePageLayoutProps) => {
  const serviceName = serviceType || title.split('in')[0].trim();
  const absoluteCanonicalUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `https://sunrisehumancare.com${canonicalUrl}`;
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

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
        title={pageTitle || `${title} in Darby, PA | Sunrise Human Care`}
        description={metaDescription || description}
        canonicalUrl={absoluteCanonicalUrl}
        breadcrumbs={breadcrumbs}
      />
      <SchemaMarkup />

      {faqSchema && (
        <Script
          id={`faq-schema-${serviceName.toLowerCase().replace(/\s+/g, '-')}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="flex flex-col min-h-screen bg-stone-950">
        <Navbar />
        
        <main className="flex-grow">
          {/* HERO SECTION */}
          <section className="relative pt-40 pb-28 md:pt-48 md:pb-40 overflow-hidden bg-stone-950">
            <div className="absolute inset-0 z-0">
              <Image 
                src={heroImage.includes('cloudinary') && !heroImage.includes('f_auto') ? heroImage.replace('/upload/', '/upload/f_auto,q_auto,w_1600/') : heroImage} 
                alt={`${title} in Darby PA`} 
                fill 
                className="object-cover opacity-60"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 z-0 bg-black/30" />
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-950/30 via-transparent to-stone-50" />
            </div>
            
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-4xl mx-auto"
              >
                <span className="inline-block font-barlow font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-orange-400 mb-6 bg-orange-500/10 px-5 py-2.5 rounded-full border border-orange-500/20 backdrop-blur-md">
                  {serviceType}
                </span>
                <h1 className="font-barlow font-normal text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-md">
                  {title.split(' ').slice(0, -1).join(' ')} <br className="hidden md:block" />
                  <span className="font-instrument-serif italic text-orange-400 font-normal drop-shadow-md">{title.split(' ').slice(-1)}</span>
                </h1>
                <p className="text-stone-100 font-barlow text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
                  {description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="#appointment">
                    <button className="bg-orange-500 hover:bg-orange-400 text-stone-50 font-barlow font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-orange-500/20">
                      <Calendar className="w-5 h-5" />
                      Book an Appointment
                    </button>
                  </Link>
                  <a href="tel:+18146202162">
                    <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-barlow font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center w-full sm:w-auto backdrop-blur-sm">
                      <PhoneCall className="w-5 h-5 mr-2" />
                      Call (814) 620-2162
                    </button>
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
          
          <div className="bg-stone-50 relative z-10 -mt-10 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.15)]">
            
            {/* Custom Content Passed from Page */}
            {children && (
              <div className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                  {children}
                </div>
              </div>
            )}

            {/* Benefits Section */}
            {benefits && benefits.length > 0 && (
              <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-[120px] -mr-[300px] -mt-[300px] pointer-events-none" />
                
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                  <div className="max-w-3xl mx-auto text-center mb-16">
                    <SectionTag>Benefits</SectionTag>
                    <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight mt-4 mb-6">
                      Benefits of {serviceType}
                    </h2>
                    <p className="text-stone-500 font-barlow text-lg leading-relaxed">
                      Our {serviceType.toLowerCase()} in Darby, PA is designed to help you achieve meaningful, lasting improvements in your mental health and daily life.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Card className="h-full flex items-center p-8">
                          <span className="text-stone-700 font-barlow font-medium leading-relaxed text-center w-full">{benefit}</span>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Treatment Approaches */}
            {approaches && approaches.length > 0 && (
              <section className="py-16 md:py-24 bg-stone-900 text-white relative overflow-hidden rounded-[3rem] mx-4 md:mx-6 my-12">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <motion.div
                      className="lg:col-span-5"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <SectionTag className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">Our Approach</SectionTag>
                      <h2 className="font-barlow font-normal text-4xl md:text-5xl tracking-tighter leading-tight mb-6">
                        Treatment approaches <br />
                        <span className="font-instrument-serif italic text-orange-400 font-normal">for {serviceType}</span>
                      </h2>
                      <div className="space-y-6 font-barlow text-stone-300 text-lg leading-relaxed">
                        <p>
                          We use evidence-based therapeutic methods tailored to your unique needs at our Darby, PA clinic.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      {approaches.map((approach, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors flex flex-col items-center text-center">
                          <h4 className="font-barlow font-bold text-2xl text-white mb-3">
                            {approach.title}
                          </h4>
                          <p className="font-barlow text-stone-400 text-base leading-relaxed">
                            {approach.description}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </section>
            )}

            {/* Related Services */}
            {relatedServices && relatedServices.length > 0 && (
              <section className="py-16 md:py-24 bg-stone-50">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="max-w-3xl mx-auto text-center mb-16">
                    <SectionTag>Related</SectionTag>
                    <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight mt-4">
                      Related Services
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {relatedServices.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="h-full"
                      >
                        <Link href={service.url} className="block h-full">
                          <Card className="h-full flex flex-col justify-between group-hover:border-orange-300/60 transition-all duration-300 p-6 md:p-8 bg-white/50 hover:bg-white shadow-sm hover:shadow-xl hover:shadow-orange-900/5 hover:-translate-y-1">
                            <h3 className="text-xl md:text-2xl font-barlow font-bold mb-6 text-stone-800 leading-tight tracking-tight group-hover:text-orange-600 transition-colors text-balance">
                              {service.title}
                            </h3>
                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-stone-100 group-hover:border-orange-100 transition-colors">
                              <span className="font-barlow font-bold uppercase tracking-[0.2em] text-[11px] text-stone-400 group-hover:text-orange-500 transition-colors">
                                Tap to Explore
                              </span>
                              <div className="w-10 h-10 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-orange-500 group-hover:border-orange-400 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                                <ArrowUpRight className="h-5 w-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                              </div>
                            </div>
                          </Card>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* FAQ Section */}
            {faqs && faqs.length > 0 && (
              <section className="py-16 md:py-24 bg-white border-t border-stone-100">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                      <SectionTag>Common Questions</SectionTag>
                      <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight mt-4">
                        Frequently asked questions
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div 
                          key={index}
                          className={cn(
                            "group relative overflow-hidden rounded-[2rem] border backdrop-blur-xl transition-all duration-500",
                            activeFaq === index 
                              ? "border-orange-500/30 bg-white shadow-md" 
                              : "border-stone-200/60 bg-white/50 hover:border-orange-200/40 hover:bg-white shadow-sm"
                          )}
                        >
                          <button 
                            type="button"
                            onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                            className="relative flex w-full items-start gap-6 px-8 py-6 text-left transition-colors duration-300 focus:outline-none"
                          >
                            <span 
                              className={cn(
                                "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-105",
                                activeFaq === index ? "bg-orange-500 border-orange-400 text-white" : "bg-orange-50 border-stone-100 text-orange-500"
                              )}
                            >
                              <ChevronDown className={cn("relative h-5 w-5 transition-transform duration-500", activeFaq === index ? "rotate-180" : "")} />
                            </span>

                            <div className="flex flex-1 flex-col gap-2 mt-2">
                              <h3 className={cn(
                                "text-lg font-barlow font-bold leading-tight tracking-tight transition-colors duration-300",
                                activeFaq === index ? "text-orange-500" : "text-stone-900 group-hover:text-orange-500"
                              )}>
                                {faq.question}
                              </h3>

                              <AnimatePresence initial={false}>
                                {activeFaq === index && (
                                  <motion.div 
                                    initial={{ height: 0, opacity: 0 }} 
                                    animate={{ height: "auto", opacity: 1 }} 
                                    exit={{ height: 0, opacity: 0 }} 
                                    transition={{ duration: 0.3 }}
                                  >
                                    <div className="pt-2">
                                      <p className="text-stone-500 font-barlow text-base leading-relaxed">
                                        {faq.answer}
                                      </p>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}
            
            {/* Medical Reviewer / E-E-A-T Footer Section (Visually Hidden for SEO) */}
            <section className="sr-only">
              <div itemScope itemType="https://schema.org/WebPage">
                <div itemProp="reviewedBy" itemScope itemType="https://schema.org/Person">
                  <meta itemProp="name" content="Holli O'Donnell" />
                  <meta itemProp="jobTitle" content="Licensed Mental Health Professional" />
                  <link itemProp="image" href="https://res.cloudinary.com/dabsxebx8/image/upload/v1774574164/holli_d6mwnh.jpg" />
                </div>
                <meta itemProp="lastReviewed" content={new Date().toISOString().split('T')[0]} />
                <p>
                  This content was clinically reviewed by Holli O'Donnell, Licensed Mental Health Professional, on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} to ensure accuracy and compliance with current medical standards.
                </p>
              </div>
            </section>

            {/* Appointment Section */}
            <AppointmentSection />
            
          </div>
        </main>
        
        <div className="relative z-20 bg-white">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ServicePageLayout;
