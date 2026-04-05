"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, MapPin, Calendar, Clock3, ArrowLeft, Share2, Bookmark } from "lucide-react";
import Script from "next/script";
import { motion } from "framer-motion";
import SectionTag from "@/components/ui/section-tag";
import CurveTransition from "@/components/ui/CurveTransition";

export default function FindingTherapistDarbyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I find a good therapist in Darby, PA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for licensed therapists with experience in your specific concerns, check their credentials, read reviews, and schedule a consultation to ensure they're a good fit. Sunrise Human Care Services offers experienced therapists specializing in anxiety, depression, trauma, and family therapy."
        }
      },
      {
        "@type": "Question",
        "name": "Does insurance cover therapy in Darby?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most major insurance plans cover mental health services in Pennsylvania. Contact Sunrise Human Care Services at (814) 620-2162 to verify your specific insurance coverage."
        }
      },
      {
        "@type": "Question",
        "name": "What types of therapy are available in Delaware County?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Delaware County offers individual therapy, couples counseling, family therapy, child therapy, psychiatric evaluations, and medication management. Sunrise Human Care Services provides comprehensive mental health care for all ages."
        }
      },
      {
        "@type": "Question",
        "name": "How long does therapy take to work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many people notice improvement within 4-6 sessions, though duration varies by individual and concern. Your therapist will work with you to set goals and track progress throughout treatment."
        }
      },
      {
        "@type": "Question",
        "name": "Is online therapy available in Darby?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Sunrise Human Care Services offers both in-person and teletherapy options for residents of Darby, Upper Darby, Yeadon, and surrounding Delaware County areas."
        }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Finding the Right Therapist in Darby, PA | Complete Guide"
        description="Discover how to find the perfect therapist in Darby, PA. Learn about therapy types, insurance options, and what to expect at Sunrise Human Care Services."
        canonicalUrl="https://sunrisehumancare.com/blog/finding-therapist-darby-pa-guide"
        keywords="therapist in Darby PA, mental health services Darby, therapy Delaware County, how to find a good therapist in Darby, best therapy practice Darby PA"
        ogImage="https://sunrisehumancare.com/images/Therapy-in-havertown.webp"
      />
      <Script
        id="faq-schema-finding"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SchemaMarkup />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        
        <main className="flex-grow pt-28">
          {/* Article Hero */}
          <section className="relative py-20 md:py-28 bg-stone-900 overflow-hidden">
            <div className="absolute inset-0 z-0">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] -mr-48 -mt-48" />
               <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] -ml-48 -mb-48" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                <Link href="/blog" className="inline-flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-[0.2em] mb-8 hover:text-orange-400 transition-colors group">
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  Back to Resources
                </Link>
                
                <h1 className="font-barlow font-bold text-4xl md:text-6xl text-white tracking-tighter leading-none mb-8">
                  Finding the Right <br className="hidden md:block" />
                  <span className="font-instrument-serif italic text-orange-500 font-normal text-5xl md:text-7xl">Therapist in Darby.</span>
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-stone-400 font-barlow text-sm border-t border-white/10 pt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span>Oct 28, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                      <Clock3 className="w-4 h-4" />
                    </div>
                    <span>12 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>Darby, PA</span>
                  </div>
                </div>
              </div>
            </div>
            <CurveTransition fillColor="#ffffff" inverted className="z-20" />
          </section>

          {/* Article Content */}
          <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-stone prose-lg max-w-none prose-headings:font-barlow prose-headings:font-bold prose-headings:tracking-tight prose-p:font-barlow prose-p:text-stone-600 prose-p:leading-relaxed prose-strong:text-stone-50 prose-blockquote:border-orange-500 prose-blockquote:bg-orange-50/30 prose-blockquote:rounded-2xl prose-blockquote:p-8 prose-blockquote:not-italic prose-blockquote:font-medium">
                  <p className="text-xl text-stone-900 font-medium leading-relaxed mb-12">
                    Finding a therapist who understands your unique journey is the first and most important step toward healing. For residents of Darby, PA, and the wider Delaware County area, navigating the mental health landscape can feel overwhelming. This guide is designed to help you find the professional support you deserve.
                  </p>
                  
                  <h2 className="text-3xl text-stone-900">Why Local Expertise Matters</h2>
                  <p>Choosing a therapist in Darby, PA, means working with someone who understands the local community. Whether you&apos;re dealing with the stress of commuting to Philadelphia, navigating family dynamics in Delaware County, or seeking support for specific life transitions, a local provider like Sunrise Human Care Services offers accessible, community-focused care.</p>

                  <blockquote>
                    &quot;The relationship between a therapist and their client is the single greatest predictor of success in therapy. Finding someone local who understands your environment is key.&quot;
                  </blockquote>

                  <h2 className="text-3xl text-stone-900">Steps to Finding Your Perfect Match</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose">
                    {[
                      { title: "Identify Your Needs", desc: "Are you looking for help with anxiety, depression, trauma, or relationship issues?" },
                      { title: "Check Credentials", desc: "Ensure your provider is a licensed professional (LCSW, LPC, PsyD, or Psychiatrist)." },
                      { title: "Consider Logistics", desc: "Do you prefer in-person sessions in Darby or the convenience of teletherapy?" },
                      { title: "Verify Insurance", desc: "Mental health care should be accessible. We accept many major plans and Medicaid." }
                    ].map((step, i) => (
                      <div key={i} className="p-8 rounded-[2rem] bg-stone-50 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-orange-600 font-bold text-xs uppercase tracking-widest mb-2 block">Step 0{i+1}</span>
                        <h3 className="text-xl font-bold text-stone-900 mb-3 font-barlow">{step.title}</h3>
                        <p className="text-stone-500 font-barlow text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-3xl text-stone-900">What to Expect in Your First Session</h2>
                  <p>Your first visit is about building a connection. You&apos;ll discuss your history, current challenges, and goals. It&apos;s also your chance to see if the therapist&apos;s style resonates with you. Remember, the therapeutic relationship is a partnership based on trust and mutual respect.</p>
                </div>

                {/* FAQ Section */}
                <section className="mt-24 pt-24 border-t border-stone-100">
                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <h2 className="text-3xl font-bold text-stone-900 font-barlow tracking-tight">Questions & Answers</h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqSchema.mainEntity.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`} className="border border-stone-100 rounded-[2rem] px-8 bg-white overflow-hidden shadow-sm hover:border-orange-200 transition-colors">
                        <AccordionTrigger className="text-left font-bold text-stone-800 hover:text-orange-600 font-barlow text-lg py-6 no-underline">
                          {faq.name}
                        </AccordionTrigger>
                        <AccordionContent className="text-stone-500 font-barlow leading-relaxed text-base pb-6">
                          {faq.acceptedAnswer.text}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>

                {/* Final CTA */}
                <div className="mt-24 bg-stone-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden text-center">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />
                  <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-barlow tracking-tight leading-none">
                      Ready to take the <span className="font-instrument-serif italic text-orange-500 font-normal">first step?</span>
                    </h2>
                    <p className="text-stone-400 mb-10 font-barlow text-lg">
                      Our compassionate team in Darby is ready to support you with expert care tailored to your specific needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-stone-50 rounded-full px-10 h-14 font-bold text-base shadow-xl shadow-orange-900/20 w-full sm:w-auto">
                        <Link href="/appointment">Book Your Session</Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-full px-10 h-14 font-bold text-base w-full sm:w-auto">
                        <a href="tel:+18146202162" className="flex items-center gap-3">
                          <Phone className="h-4 w-4" /> (814) 620-2162
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

// Add HelpCircle icon
const HelpCircle = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
);
