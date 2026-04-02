"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Calendar, Clock3, Users } from "lucide-react";
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
          <article className="container mx-auto px-4 py-12 max-w-4xl pt-28">
            <nav className="text-sm mb-6 text-muted-foreground font-barlow">
              <Link href="/" className="hover:text-amber-600">Home</Link>
              {" / "}
              <Link href="/blog" className="hover:text-amber-600">Blog</Link>
              {" / "}
              <span className="text-foreground">Family Therapy</span>
            </nav>

            <header className="mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-stone-800 font-barlow tracking-tight">
                Family Therapy in Darby: Strengthening Relationships at Home
              </h1>
              <div className="flex items-center gap-4 text-stone-500 text-sm font-barlow">
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4 text-amber-500" /> February 1, 2025</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock3 className="h-4 w-4 text-amber-500" /> 9 min read</span>
              </div>
            </header>

            <div className="prose prose-stone max-w-none mb-12 font-barlow text-stone-600 leading-relaxed">
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

            {/* CTA */}
            <div className="mt-16 text-center bg-stone-900 text-white rounded-[40px] p-12">
              <h2 className="text-3xl font-bold mb-6 font-barlow">Strengthen Your Family Bonds</h2>
              <p className="text-stone-400 mb-8 font-barlow max-w-2xl mx-auto">Don&apos;t wait for conflicts to escalate. Invest in your family&apos;s future and emotional well-being today with expert family therapy in Darby.</p>
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
