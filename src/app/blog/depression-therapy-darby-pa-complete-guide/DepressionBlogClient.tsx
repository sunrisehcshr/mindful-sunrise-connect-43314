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
import { Phone, Calendar, Clock3, AlertTriangle , ArrowLeft, MapPin } from "lucide-react";
import Script from "next/script";

export default function DepressionTherapyDarbyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the warning signs of depression?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common signs include persistent sadness, loss of interest in activities, changes in sleep or appetite, fatigue, difficulty concentrating, feelings of worthlessness, and thoughts of death or suicide. If you experience these symptoms for two weeks or more, professional help is recommended."
        }
      },
      {
        "@type": "Question",
        "name": "Is depression treatment covered by insurance in Pennsylvania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most insurance plans in Pennsylvania cover depression treatment including therapy and medication management. Contact Sunrise Human Care Services at (814) 620-2162 to verify your coverage."
        }
      },
      {
        "@type": "Question",
        "name": "How effective is therapy for depression?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Therapy is highly effective for depression. Research shows that 60-80% of people experience significant improvement with evidence-based treatments like Cognitive Behavioral Therapy (CBT) and Interpersonal Therapy."
        }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Depression Therapy in Darby, PA | When to Seek Help"
        description="Recognize the signs of depression and learn about effective treatment options in Darby, PA. Sunrise Human Care offers compassionate, expert depression care."
        canonicalUrl="https://sunrisehumancare.com/blog/depression-therapy-darby-pa-complete-guide"
        keywords="depression therapy Darby, signs of depression, treating depression Delaware County, when to see a therapist for depression Darby PA, depression psychiatrist near me"
        ogImage="https://sunrisehumancare.com/images/Therapy-in-havertown.webp"
      />
      <Script
        id="faq-schema-depression"
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
                  Depression Therapy in Darby: <br className="hidden md:block" />
                  <span className="font-instrument-serif italic text-orange-500 font-normal text-5xl md:text-7xl">Signs You Should Seek Help</span>
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-stone-400 font-barlow text-sm border-t border-white/10 pt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span>January 25, 2025</span>
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
              <p className="text-lg">Depression affects more than 21 million adults in the United States each year, making it one of the most common mental health conditions. Yet many people in Darby and throughout Delaware County suffer in silence, unsure whether their feelings warrant professional help. Understanding the signs of depression and knowing when to seek treatment can be life-changing—and potentially life-saving. This guide will help you recognize depression symptoms and explore effective treatment options available right here in Darby, PA.</p>
              
              <Card className="p-6 mb-12 bg-rose-50 border-rose-200">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-rose-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2 text-stone-800">If You&apos;re in Crisis</h3>
                    <p className="text-sm text-stone-700 mb-3">If you&apos;re experiencing thoughts of suicide or self-harm, please reach out for immediate help:</p>
                    <ul className="text-sm space-y-1 text-stone-700">
                      <li>• Call or text 988 (National Suicide Prevention Lifeline)</li>
                      <li>• Text HOME to 741741 (Crisis Text Line)</li>
                      <li>• Go to your nearest emergency room</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <h2 className="text-2xl font-bold text-stone-800 mt-8 mb-4">Recognizing the Signs of Depression</h2>
              <p>Depression isn&apos;t just about feeling sad. It&apos;s a complex condition that can manifest in many different ways. If you&apos;ve been experiencing several of the following symptoms for at least two weeks, it may be time to seek professional support:</p>

              <ul className="space-y-2">
                <li>• Persistent feelings of sadness, hopelessness, or emptiness</li>
                <li>• Loss of interest or pleasure in activities you once enjoyed</li>
                <li>• Significant changes in appetite or weight (unrelated to dieting)</li>
                <li>• Sleep disturbances (insomnia or oversleeping)</li>
                <li>• Fatigue or loss of energy nearly every day</li>
                <li>• Feelings of worthlessness or excessive guilt</li>
                <li>• Difficulty thinking, concentrating, or making decisions</li>
              </ul>

              <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8 my-10">
                <h3 className="text-xl font-bold text-stone-800 mb-4">Support is Available in Darby</h3>
                <p className="mb-6">Our experienced therapists at Sunrise Human Care Services provide compassionate, evidence-based depression treatment tailored to your needs.</p>
                <Button asChild className="bg-[#222] hover:bg-stone-800 text-white rounded-full">
                  <Link href="/appointment">Schedule a Confidential Consultation</Link>
                </Button>
              </div>

              <h2 className="text-2xl font-bold text-stone-800 mt-8 mb-4">How Depression Therapy Can Help</h2>
              <p>Evidence-based therapies, such as Cognitive Behavioral Therapy (CBT) and Interpersonal Therapy, are highly effective for treating depression. These approaches help you identify and change negative thought patterns, improve your relationships, and develop healthier coping strategies.</p>
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
                      Rediscover Hope <span className="font-instrument-serif italic text-orange-500 font-normal">and Healing</span>
                    </h2>
                    <p className="text-stone-400 mb-10 font-barlow text-lg">
                      You don&apos;t have to face depression alone. Our compassionate team in Darby is ready to support you on your path to recovery and renewed well-being.
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
