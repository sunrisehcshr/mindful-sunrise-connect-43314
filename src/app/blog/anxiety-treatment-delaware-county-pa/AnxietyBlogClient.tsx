"use client";

import CurveTransition from "@/components/ui/CurveTransition";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Calendar, Clock3 , ArrowLeft, MapPin } from "lucide-react";
import Script from "next/script";

export default function AnxietyTreatmentDelawareCountyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the most effective treatments for anxiety?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cognitive Behavioral Therapy (CBT), Exposure Therapy, and medication management are evidence-based treatments proven effective for anxiety disorders. Many people benefit from a combination of therapy and medication."
        }
      },
      {
        "@type": "Question",
        "name": "How much does anxiety treatment cost in Darby?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cost varies based on insurance coverage. Most major insurance plans cover mental health services. Contact Sunrise Human Care Services at (814) 620-2162 to discuss pricing and insurance options."
        }
      },
      {
        "@type": "Question",
        "name": "Can anxiety be cured permanently?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While anxiety may not be permanently cured, it can be effectively managed with proper treatment. Most people experience significant symptom reduction and improved quality of life with therapy and/or medication."
        }
      },
      {
        "@type": "Question",
        "name": "How long does anxiety therapy take to work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many people notice improvement within 8-12 weeks of consistent therapy. CBT typically involves 12-20 sessions, though duration varies based on severity and individual response to treatment."
        }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Anxiety Treatment in Delaware County, PA | Effective Care"
        description="Explore proven anxiety treatment options in Darby and Delaware County. Learn about therapy approaches, medication management, and local support resources."
        canonicalUrl="https://sunrisehumancare.com/blog/anxiety-treatment-delaware-county-pa"
        keywords="anxiety treatment Darby, anxiety therapy Delaware County PA, treating anxiety near me, best anxiety therapist in Darby, medication management for anxiety Darby"
        ogImage="https://sunrisehumancare.com/images/Therapy-in-havertown.webp"
      />
      <Script
        id="faq-schema-anxiety"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SchemaMarkup />
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        
        <main className="flex-grow">
          {/* Article Hero */}
          <section className="relative pt-48 pb-20 md:pt-60 md:pb-32 bg-stone-900">
            <div className="absolute inset-0 z-0 overflow-hidden">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
               <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -ml-48 -mb-48" />
            </div>

            <div className="container mx-auto px-4 relative z-30 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-[0.2em] mb-8 hover:text-orange-400 transition-colors group">
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  Back to Resources
                </Link>

                <h1 className="font-barlow font-bold text-4xl md:text-6xl text-white tracking-tighter leading-none mb-8">
                  Anxiety Treatment Options in Delaware County: <br className="hidden md:block" />
                  <span className="font-instrument-serif italic text-orange-500 font-normal text-5xl md:text-7xl">What Works?</span>
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-stone-400 font-barlow text-sm border-t border-white/10 pt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span>January 20, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                      <Clock3 className="w-4 h-4" />
                    </div>
                    <span>10 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>Darby, PA</span>
                  </div>
                </div>
            </div>
            <CurveTransition fillColor="#ffffff" inverted className="z-20" />
          </section>

          {/* Article Content */}
          <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-stone prose-lg max-w-none prose-headings:font-barlow prose-headings:font-bold prose-headings:tracking-tight prose-p:font-barlow prose-p:text-stone-600 prose-p:leading-relaxed prose-strong:text-stone-800 prose-blockquote:border-orange-500 prose-blockquote:bg-orange-50/30 prose-blockquote:rounded-2xl prose-blockquote:p-8 prose-blockquote:not-italic prose-blockquote:font-medium">
              <p className="text-lg">Anxiety disorders affect over 40 million adults in the United States, and residents of Delaware County, PA are no exception. If you&apos;re experiencing persistent worry, panic attacks, or overwhelming fear that interferes with daily life, you&apos;re not alone—and effective treatment is available right here in Darby. This comprehensive guide explores evidence-based anxiety treatment options that can help you regain control and find peace of mind.</p>
              
              <h2 className="text-2xl font-bold text-stone-800 mt-8 mb-4">Understanding Evidence-Based Treatments</h2>
              <p>When seeking anxiety treatment in Darby, it&apos;s essential to look for evidence-based approaches. These are therapies that have been scientifically studied and proven to be effective for reducing anxiety symptoms.</p>

              <h3 className="text-xl font-bold text-stone-800 mt-6 mb-3">1. Cognitive Behavioral Therapy (CBT)</h3>
              <p>CBT is widely considered the gold standard for anxiety treatment. It helps you identify and challenge negative thought patterns and behaviors that fuel anxiety, teaching you practical skills to manage stress and face your fears.</p>

              <h3 className="text-xl font-bold text-stone-800 mt-6 mb-3">2. Exposure Therapy</h3>
              <p>Often used for phobias and social anxiety, exposure therapy involves gradually and safely confronting the situations you&apos;ve been avoiding. This helps reduce the power those triggers have over you.</p>

              <h3 className="text-xl font-bold text-stone-800 mt-6 mb-3">3. Medication Management</h3>
              <p>For many, combining therapy with medication management provides the best results. Our board-certified psychiatric providers in Darby can evaluate whether medication like SSRIs or SNRIs might be a helpful addition to your treatment plan.</p>

              <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8 my-10">
                <h3 className="text-xl font-bold text-stone-800 mb-4">Need Anxiety Support?</h3>
                <p className="mb-6">Our Darby clinic specializes in treating all types of anxiety disorders with personalized, compassionate care.</p>
                <Button asChild className="bg-[#222] hover:bg-stone-800 text-white rounded-full">
                  <Link href="/appointment">Book an Appointment</Link>
                </Button>
              </div>

              <h2 className="text-2xl font-bold text-stone-800 mt-8 mb-4">Local Resources in Delaware County</h2>
              <p>Beyond professional therapy, Delaware County offer several resources to support your mental health journey. From support groups to community wellness programs, there are many ways to connect with others and find additional support in the Darby area.</p>
            </div>

            {/* FAQ Section */}
            <section className="mt-16">
              <h2 className="text-3xl font-bold text-stone-800 mb-8 font-barlow">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqSchema.mainEntity.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border-stone-200">
                    <AccordionTrigger className="text-left font-semibold text-stone-800 hover:text-amber-600 font-barlow">
                      {faq.name}
                    </AccordionTrigger>
                    <AccordionContent className="text-stone-600 font-barlow leading-relaxed">
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
                      Take the First <span className="font-instrument-serif italic text-orange-500 font-normal">Step Today</span>
                    </h2>
                    <p className="text-stone-400 mb-10 font-barlow text-lg">
                      Don&apos;t let anxiety hold you back any longer. Our expert team in Darby is here to help you find relief and live your life to the fullest.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-stone-50 rounded-full px-10 h-14 font-bold text-base shadow-xl shadow-orange-900/20 w-full sm:w-auto">
                        <Link href="/appointment">Book Your Session</Link>
                      </Button>
                      <Button asChild size="lg" className="bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-full px-10 h-14 font-bold text-base w-full sm:w-auto">
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
