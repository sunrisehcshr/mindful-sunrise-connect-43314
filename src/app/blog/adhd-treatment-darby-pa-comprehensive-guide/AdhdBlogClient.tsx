"use client";

import CurveTransition from "@/components/ui/CurveTransition";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Calendar, Clock3, Brain , ArrowLeft, MapPin } from "lucide-react";
import Script from "next/script";

export default function ADHDTreatmentDarbyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the signs of ADHD in adults?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Adult ADHD signs include difficulty focusing, disorganization, forgetfulness, impulsivity, trouble completing tasks, time management problems, and relationship difficulties. Many adults aren't diagnosed until adulthood when work or relationship demands increase."
        }
      },
      {
        "@type": "Question",
        "name": "How is ADHD diagnosed in Darby?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ADHD diagnosis involves a comprehensive psychiatric evaluation including clinical interviews, symptom rating scales, review of developmental history, and sometimes psychological testing. Contact Sunrise Human Care Services at (814) 620-2162 for evaluation."
        }
      },
      {
        "@type": "Question",
        "name": "Is ADHD medication safe for children?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When prescribed and monitored by a qualified psychiatrist, ADHD medications are safe and effective for children. Stimulant medications have decades of research supporting their safety and effectiveness. Our psychiatrists closely monitor children on medication."
        }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="ADHD Treatment in Darby, PA | Children & Adults"
        description="Expert ADHD treatment in Darby for all ages. Therapy, psychiatric evaluations, and medication management at Sunrise Human Care Services in Delaware County."
        canonicalUrl="https://sunrisehumancare.com/blog/adhd-treatment-darby-pa-comprehensive-guide"
        keywords="ADHD treatment Darby PA, ADHD therapist Delaware County, adult ADHD treatment near me, child ADHD psychiatrist Darby, ADHD medication management Pennsylvania"
        ogImage="https://sunrisehumancare.com/images/Therapy-in-havertown.webp"
      />
      <Script
        id="faq-schema-adhd"
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
                  ADHD Treatment in Darby: <br className="hidden md:block" />
                  <span className="font-instrument-serif italic text-orange-500 font-normal text-5xl md:text-7xl">Comprehensive Care for Children and Adults</span>
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-stone-400 font-barlow text-sm border-t border-white/10 pt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span>February 5, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                      <Clock3 className="w-4 h-4" />
                    </div>
                    <span>11 min read</span>
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
              <p className="text-lg">Attention-Deficit/Hyperactivity Disorder (ADHD) affects approximately 10% of children and 4% of adults in the United States. For families and individuals in Darby, Upper Darby, Yeadon, and throughout Delaware County, untreated ADHD can create significant challenges at school, work, and home. The good news? ADHD is highly treatable. At Sunrise Human Care Services, our comprehensive ADHD treatment program combines expert diagnosis, evidence-based therapy, and careful medication management to help children and adults with ADHD thrive.</p>
              
              <h2 className="text-2xl font-bold text-stone-800 mt-8 mb-4">Recognizing ADHD Across Different Ages</h2>
              <p>ADHD presents differently at various life stages. Understanding these patterns helps families in Darby recognize when professional evaluation is needed.</p>

              <div className="space-y-6 my-10">
                <Card className="p-6 border-l-4 border-l-amber-500 bg-amber-50/30">
                  <h3 className="font-bold mb-2 text-stone-800">ADHD in Children and Teens</h3>
                  <p className="text-sm text-stone-600">Common signs include excessive fidgeting, difficulty waiting their turn, trouble following multi-step instructions, frequently losing school items, and impulsive decision-making.</p>
                </Card>
                <Card className="p-6 border-l-4 border-l-amber-500 bg-amber-50/30">
                  <h3 className="font-bold mb-2 text-stone-800">ADHD in Adults</h3>
                  <p className="text-sm text-stone-600">Adults often struggle with chronic disorganization, poor time management, difficulty focusing on complex tasks, impulsive spending or life choices, and relationship strain due to forgetfulness.</p>
                </Card>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8 my-10">
                <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                  <Brain className="h-5 w-5 text-amber-600" /> 
                  Expert ADHD Assessment
                </h3>
                <p className="mb-6">Our Darby clinic provides comprehensive psychiatric evaluations for ADHD in both children and adults.</p>
                <Button asChild className="bg-[#222] hover:bg-stone-800 text-white rounded-full">
                  <Link href="/appointment">Request an Evaluation</Link>
                </Button>
              </div>

              <h2 className="text-2xl font-bold text-stone-800 mt-8 mb-4">Our Multimodal Treatment Approach</h2>
              <p>We believe the most effective ADHD treatment in Darby involves a combination of strategies. This typically includes specialized therapy to build executive functioning skills, parent coaching for families, and, when appropriate, carefully monitored medication management to help regulate focus and impulsivity.</p>
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
                      Unlock Your <span className="font-instrument-serif italic text-orange-500 font-normal">Full Potential</span>
                    </h2>
                    <p className="text-stone-400 mb-10 font-barlow text-lg">
                      ADHD doesn&apos;t have to define your future. Our expert team in Darby is ready to provide the tools and support you need to manage symptoms and achieve your goals.
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
