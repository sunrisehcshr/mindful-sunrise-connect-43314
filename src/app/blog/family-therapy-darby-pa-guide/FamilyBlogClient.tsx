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
import { Phone, Calendar, Clock3, Users , ArrowLeft, MapPin } from "lucide-react";
import Script from "next/script";

export default function FamilyTherapyDarbyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does family therapy work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Family therapy brings family members together with a trained therapist to improve communication, resolve conflicts, and strengthen relationships. The therapist helps family members understand each other's perspectives and develop healthier interaction patterns."
        }
      },
      {
        "@type": "Question",
        "name": "When should a family consider therapy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Consider family therapy when experiencing frequent conflicts, communication breakdowns, major life transitions (divorce, blended families), teen behavioral issues, grief, or when one family member's mental health affects the entire family."
        }
      },
      {
        "@type": "Question",
        "name": "Do all family members need to attend therapy sessions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. While involving all family members can be beneficial, therapy can still be effective with whoever is willing and able to participate. Your family therapist will work with you to determine the best approach."
        }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Family Therapy in Darby, PA | Strengthen Your Family"
        description="Discover how family therapy can improve communication and resolve conflicts. Serving Darby, Upper Darby, and Yeadon families at Sunrise Human Care Services."
        canonicalUrl="https://sunrisehumancare.com/blog/family-therapy-darby-pa-guide"
        keywords="family therapy Darby PA, family counseling Delaware County, couples therapy Darby, family therapist for teens Darby, blended family counseling near me"
        ogImage="https://sunrisehumancare.com/images/family-counseling-havertown.webp"
      />
      <Script
        id="faq-schema-family"
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
                  Family Therapy in Darby: <br className="hidden md:block" />
                  <span className="font-instrument-serif italic text-orange-500 font-normal text-5xl md:text-7xl">Strengthening Relationships at Home</span>
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-stone-400 font-barlow text-sm border-t border-white/10 pt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span>February 1, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                      <Clock3 className="w-4 h-4" />
                    </div>
                    <span>9 min read</span>
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
              <p className="text-lg">Every family faces challenges—whether it&apos;s navigating a teenager&apos;s difficult behavior, coping with divorce, blending two families together, or simply feeling disconnected from one another. For families in Darby, Upper Darby, Yeadon, and throughout Delaware County, family therapy offers a path to healthier communication, stronger bonds, and lasting resolution of conflicts. At Sunrise Human Care Services, we understand that when one family member struggles, the entire family feels the impact. Our experienced family therapists are here to help your family thrive.</p>
              
              <h2 className="text-2xl font-bold text-stone-800 mt-8 mb-4">When Families Benefit from Therapy</h2>
              <p>Family therapy isn&apos;t just for families in crisis. Many Delaware County families seek counseling as a proactive way to improve relationships and build resilience. Common situations where family therapy in Darby can help include:</p>

              <div className="grid md:grid-cols-2 gap-6 my-10">
                <Card className="p-6 border-l-4 border-l-amber-500 bg-amber-50/30">
                  <h3 className="font-bold mb-2 text-stone-800">Communication Breakdowns</h3>
                  <p className="text-sm text-stone-600">Learning to express needs and feelings without conflict, and developing active listening skills within the family.</p>
                </Card>
                <Card className="p-6 border-l-4 border-l-amber-500 bg-amber-50/30">
                  <h3 className="font-bold mb-2 text-stone-800">Life Transitions</h3>
                  <p className="text-sm text-stone-600">Navigating divorce, blending families, moving, or adjusting to life with a new baby or an empty nest.</p>
                </Card>
                <Card className="p-6 border-l-4 border-l-amber-500 bg-amber-50/30">
                  <h3 className="font-bold mb-2 text-stone-800">Behavioral Challenges</h3>
                  <p className="text-sm text-stone-600">Supporting children and teens with academic, social, or behavioral issues while strengthening parent-child bonds.</p>
                </Card>
                <Card className="p-6 border-l-4 border-l-amber-500 bg-amber-50/30">
                  <h3 className="font-bold mb-2 text-stone-800">Grief and Loss</h3>
                  <p className="text-sm text-stone-600">Helping family members support one another through the shared experience of loss or major life changes.</p>
                </Card>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8 my-10">
                <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-amber-600" /> 
                  Support Your Family Today
                </h3>
                <p className="mb-6">Our Darby family therapists provide a safe, neutral space where every family member can be heard and valued.</p>
                <Button asChild className="bg-[#222] hover:bg-stone-800 text-white rounded-full">
                  <Link href="/appointment">Schedule a Family Session</Link>
                </Button>
              </div>

              <h2 className="text-2xl font-bold text-stone-800 mt-8 mb-4">Our Approach to Family Counseling</h2>
              <p>We use evidence-based approaches, such as Structural Family Therapy and Strategic Family Therapy, to help your family identify unhelpful patterns and replace them with healthier ones. Our goal is to empower your family with the tools needed to navigate future challenges independently and with greater connection.</p>
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
                      Strengthen Your <span className="font-instrument-serif italic text-orange-500 font-normal">Family Bonds</span>
                    </h2>
                    <p className="text-stone-400 mb-10 font-barlow text-lg">
                      Don&apos;t wait for conflicts to escalate. Invest in your family&apos;s future and emotional well-being today with expert family therapy in Darby.
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
