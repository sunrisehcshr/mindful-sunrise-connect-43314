"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Calendar, Clock3 } from "lucide-react";
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
          <article className="container mx-auto px-4 py-12 max-w-4xl pt-28">
            <nav className="text-sm mb-6 text-muted-foreground font-barlow">
              <Link href="/" className="hover:text-amber-600">Home</Link>
              {" / "}
              <Link href="/blog" className="hover:text-amber-600">Blog</Link>
              {" / "}
              <span className="text-foreground">Anxiety Treatment Options</span>
            </nav>

            <header className="mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-stone-800 font-barlow tracking-tight">
                Anxiety Treatment Options in Delaware County: What Works?
              </h1>
              <div className="flex items-center gap-4 text-stone-500 text-sm font-barlow">
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4 text-amber-500" /> January 20, 2025</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock3 className="h-4 w-4 text-amber-500" /> 10 min read</span>
              </div>
            </header>

            <div className="prose prose-stone max-w-none mb-12 font-barlow text-stone-600 leading-relaxed">
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

            {/* CTA */}
            <div className="mt-16 text-center bg-stone-900 text-white rounded-[40px] p-12">
              <h2 className="text-3xl font-bold mb-6 font-barlow">Take the First Step Today</h2>
              <p className="text-stone-400 mb-8 font-barlow max-w-2xl mx-auto">Don&apos;t let anxiety hold you back any longer. Our expert team in Darby is here to help you find relief and live your life to the fullest.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8">
                  <Link href="/appointment">Book Appointment</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-full px-8">
                  <a href="tel:+18146202162" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> (814) 620-2162
                  </a>
                </Button>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
