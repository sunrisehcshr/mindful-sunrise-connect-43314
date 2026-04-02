"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, MapPin, Calendar } from "lucide-react";
import Script from "next/script";

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
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl pt-28">
            {/* Breadcrumb */}
            <nav className="text-sm mb-6 text-muted-foreground font-barlow">
              <Link href="/" className="hover:text-amber-600">Home</Link>
              {" / "}
              <Link href="/blog" className="hover:text-amber-600">Blog</Link>
              {" / "}
              <span className="text-foreground">Finding the Right Therapist</span>
            </nav>

            {/* Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-stone-800 font-barlow tracking-tight">
                Finding the Right Therapist in Darby, PA: A Complete Guide
              </h1>
              <div className="flex items-center gap-4 text-stone-500 text-sm font-barlow">
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4 text-amber-500" /> January 15, 2025</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-stone max-w-none mb-12 font-barlow text-stone-600 leading-relaxed">
              <p className="text-lg">Finding a therapist who understands your unique journey is the first and most important step toward healing. For residents of Darby, PA, and the wider Delaware County area, navigating the mental health landscape can feel overwhelming. This guide is designed to help you find the professional support you deserve.</p>
              
              <h2 className="text-2xl font-bold text-stone-800 mt-8 mb-4">Why Local Expertise Matters</h2>
              <p>Choosing a therapist in Darby, PA, means working with someone who understands the local community. Whether you&apos;re dealing with the stress of commuting to Philadelphia, navigating family dynamics in Delaware County, or seeking support for specific life transitions, a local provider like Sunrise Human Care Services offers accessible, community-focused care.</p>

              <h2 className="text-2xl font-bold text-stone-800 mt-8 mb-4">Steps to Finding Your Perfect Match</h2>
              <ol className="space-y-4">
                <li><strong>Identify Your Needs:</strong> Are you looking for help with anxiety, depression, trauma, or relationship issues? Knowing your primary concerns helps you narrow down specialists.</li>
                <li><strong>Check Credentials:</strong> Ensure your provider is a licensed professional (LCSW, LPC, PsyD, or Psychiatrist).</li>
                <li><strong>Consider Logistics:</strong> Do you prefer in-person sessions in Darby or the convenience of teletherapy? At Sunrise, we offer both to fit your busy schedule.</li>
                <li><strong>Verify Insurance:</strong> Mental health care should be accessible. We accept many major plans and Medicaid to ensure our community gets the care they need.</li>
              </ol>

              <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8 my-10">
                <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-600" /> 
                  Visit Us in Darby
                </h3>
                <p className="mb-4">Sunrise Human Care Services is located at 869 Main Street, Darby, PA 19023. We&apos;re proud to serve neighbors from Upper Darby, Yeadon, Collingdale, and across Delaware County.</p>
                <Button asChild className="bg-[#222] hover:bg-stone-800 text-white rounded-full">
                  <Link href="/appointment">Schedule a Consultation</Link>
                </Button>
              </div>

              <h2 className="text-2xl font-bold text-stone-800 mt-8 mb-4">What to Expect in Your First Session</h2>
              <p>Your first visit is about building a connection. You&apos;ll discuss your history, current challenges, and goals. It&apos;s also your chance to see if the therapist&apos;s style resonates with you. Remember, the therapeutic relationship is a partnership based on trust and mutual respect.</p>
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
              <h2 className="text-3xl font-bold mb-6 font-barlow">Start Your Healing Journey Today</h2>
              <p className="text-stone-400 mb-8 font-barlow max-w-2xl mx-auto">Don&apos;t wait to prioritize your mental health. Our compassionate team in Darby is ready to support you with expert care tailored to your needs.</p>
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
