"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Calendar, Clock3, Brain } from "lucide-react";
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
          <article className="container mx-auto px-4 py-12 max-w-4xl pt-28">
            <nav className="text-sm mb-6 text-muted-foreground font-barlow">
              <Link href="/" className="hover:text-amber-600">Home</Link>
              {" / "}
              <Link href="/blog" className="hover:text-amber-600">Blog</Link>
              {" / "}
              <span className="text-foreground">ADHD Treatment</span>
            </nav>

            <header className="mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-stone-800 font-barlow tracking-tight">
                ADHD Treatment in Darby: Comprehensive Care for Children and Adults
              </h1>
              <div className="flex items-center gap-4 text-stone-500 text-sm font-barlow">
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4 text-amber-500" /> February 5, 2025</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock3 className="h-4 w-4 text-amber-500" /> 11 min read</span>
              </div>
            </header>

            <div className="prose prose-stone max-w-none mb-12 font-barlow text-stone-600 leading-relaxed">
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

            {/* CTA */}
            <div className="mt-16 text-center bg-stone-900 text-white rounded-[40px] p-12">
              <h2 className="text-3xl font-bold mb-6 font-barlow">Unlock Your Full Potential</h2>
              <p className="text-stone-400 mb-8 font-barlow max-w-2xl mx-auto">ADHD doesn&apos;t have to define your future. Our expert team in Darby is ready to provide the tools and support you need to manage symptoms and achieve your goals.</p>
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
