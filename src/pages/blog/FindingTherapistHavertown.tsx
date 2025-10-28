import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, MapPin, Calendar } from "lucide-react";

const FindingTherapistHavertown = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I find a good therapist in Havertown, PA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for licensed therapists with experience in your specific concerns, check their credentials, read reviews, and schedule a consultation to ensure they're a good fit. Sunrise Human Care Services offers experienced therapists specializing in anxiety, depression, trauma, and family therapy."
        }
      },
      {
        "@type": "Question",
        "name": "Does insurance cover therapy in Havertown?",
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
        "name": "Is online therapy available in Havertown?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Sunrise Human Care Services offers both in-person and teletherapy options for residents of Havertown, Drexel Hill, Broomall, and surrounding Delaware County areas."
        }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Finding the Right Therapist in Havertown, PA | Complete Guide"
        description="Discover how to find the perfect therapist in Havertown, PA. Learn about therapy types, insurance options, and what to expect at Sunrise Human Care Services."
        canonicalUrl="https://sunrisehumancare.com/blog/finding-therapist-havertown-pa-guide"
        keywords="therapist in Havertown PA, mental health services Havertown, therapy Delaware County, how to find a good therapist in Havertown, best therapy practice Havertown PA"
        ogImage="https://sunrisehumancare.com/images/Therapy-in-havertown.webp"
      />
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <SchemaMarkup />
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        
        <main className="flex-grow">
          <article className="container mx-auto px-4 py-12 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="text-sm mb-6 text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              {" / "}
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              {" / "}
              <span className="text-foreground">Finding the Right Therapist</span>
            </nav>

            {/* Header */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Finding the Right Therapist in Havertown, PA: A Complete Guide
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <time dateTime="2025-01-15">January 15, 2025</time>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </header>

            {/* Featured Image */}
            <img 
              src="/images/finding-therapist-havertown.webp" 
              alt="Professional therapy office in Havertown, PA showing comfortable counseling environment"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg leading-relaxed text-foreground/90">
                Finding the right therapist in Havertown, PA can feel overwhelming, especially when you're already dealing with mental health challenges. Whether you're seeking help for anxiety, depression, relationship issues, or family concerns, choosing a mental health professional who understands your needs is crucial to your healing journey. This comprehensive guide will walk you through everything you need to know about finding quality therapy services right here in Delaware County.
              </p>
            </div>

            {/* Why Location Matters */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Why Location Matters in Therapy</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                Choosing a therapist in Havertown offers significant advantages over traveling to Center City Philadelphia or other distant locations. When your therapy office is conveniently located on West Chester Pike, you're more likely to maintain consistent appointments—a critical factor in treatment success.
              </p>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                Local therapists understand the unique challenges facing Delaware County residents, from the stresses of suburban family life to the specific community resources available in Havertown, Drexel Hill, Broomall, and Ardmore. At Sunrise Human Care Services, we're embedded in the community we serve, making us more than just healthcare providers—we're your neighbors.
              </p>
              <Card className="p-6 bg-accent/50 border-accent">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Conveniently Located</h3>
                    <p className="text-sm text-foreground/80">2050 West Chester Pike, Havertown, PA 19083 - Easy access from Route 476 and I-76, with ample parking available.</p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Types of Therapy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Types of Therapy Available in Delaware County</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Understanding the different therapy modalities helps you make an informed decision about your mental health care. At Sunrise Human Care Services, we offer comprehensive treatment options tailored to your specific needs.
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Individual Therapy</h3>
                  <p className="text-foreground/90 mb-3">
                    One-on-one counseling sessions focused on your personal mental health goals. Our experienced therapists use evidence-based approaches like Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and psychodynamic therapy to address anxiety, depression, trauma, and more.
                  </p>
                  <Link to="/individual-therapy-havertown-pa">
                    <Button variant="link" className="p-0 h-auto">Learn more about individual therapy →</Button>
                  </Link>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Couples Counseling</h3>
                  <p className="text-foreground/90 mb-3">
                    Strengthen your relationship through improved communication, conflict resolution, and emotional intimacy. Our couples therapists help partners navigate challenges including infidelity, financial stress, parenting disagreements, and life transitions.
                  </p>
                  <Link to="/couples-counseling-havertown-pa">
                    <Button variant="link" className="p-0 h-auto">Explore couples counseling services →</Button>
                  </Link>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Family Therapy</h3>
                  <p className="text-foreground/90 mb-3">
                    Address family dynamics, improve communication between family members, and resolve conflicts. We work with families dealing with teen behavioral issues, blended family challenges, elder care stress, and intergenerational trauma.
                  </p>
                  <Link to="/family-therapy-havertown-pa">
                    <Button variant="link" className="p-0 h-auto">Discover family therapy options →</Button>
                  </Link>
                </Card>
              </div>
            </section>

            {/* What to Look For */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">What to Look for in a Havertown Therapist</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Not all therapists are the same, and finding the right match is essential for successful treatment. Here are key factors to consider:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2 text-foreground">Credentials and Licensing</h3>
                  <p className="text-foreground/80">Verify your therapist holds proper Pennsylvania state licenses (LPC, LCSW, LMFT, PhD, PsyD, or MD for psychiatrists). All Sunrise therapists maintain active licenses and continuing education.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2 text-foreground">Specializations</h3>
                  <p className="text-foreground/80">Look for therapists with specific training in your areas of concern. Our team specializes in anxiety disorders, depression, PTSD, ADHD, bipolar disorder, and relationship issues.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2 text-foreground">Therapeutic Approach</h3>
                  <p className="text-foreground/80">Different modalities work for different people. Ask about their treatment philosophy and whether they use evidence-based practices proven effective for your concerns.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2 text-foreground">Cultural Competency</h3>
                  <p className="text-foreground/80">Choose a therapist who respects your background, values, and identity. We provide culturally sensitive care to our diverse Delaware County community.</p>
                </div>
              </div>
            </section>

            {/* Insurance */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Understanding Insurance Coverage in PA</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                Mental health parity laws in Pennsylvania require most insurance plans to cover therapy services similarly to physical health care. However, coverage details vary by plan.
              </p>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Sunrise Human Care Services accepts most major insurance plans including UPMC, Independence Blue Cross, Aetna, Cigna, and United Healthcare. We recommend calling our office at <a href="tel:8146202162" className="text-primary hover:underline">(814) 620-2162</a> to verify your specific coverage, copay amounts, and deductible information before your first visit.
              </p>
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="font-semibold mb-3 text-foreground">What to Ask Your Insurance</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>Does my plan cover outpatient mental health services?</li>
                  <li>How many therapy sessions are covered per year?</li>
                  <li>What is my copay or coinsurance for therapy?</li>
                  <li>Do I need a referral from my primary care doctor?</li>
                  <li>Is Sunrise Human Care Services in-network with my plan?</li>
                </ul>
              </Card>
            </section>

            {/* First Visit */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Your First Visit at Sunrise Human Care Services</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                We understand that starting therapy can feel intimidating. Here's what to expect during your first appointment at our Havertown office:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">Before Your Visit</h4>
                  <p className="text-sm text-foreground/80">Complete intake forms online or arrive 15 minutes early. Bring your insurance card, ID, and list of current medications.</p>
                </Card>
                <Card className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">During the Session</h4>
                  <p className="text-sm text-foreground/80">Your therapist will ask about your history, current concerns, and treatment goals. This is a collaborative conversation—there are no wrong answers.</p>
                </Card>
                <Card className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">Creating a Treatment Plan</h4>
                  <p className="text-sm text-foreground/80">Together, you'll develop goals and determine session frequency. Most clients start with weekly sessions, transitioning to bi-weekly as progress is made.</p>
                </Card>
                <Card className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">Scheduling Follow-Up</h4>
                  <p className="text-sm text-foreground/80">We offer flexible scheduling including evening and weekend appointments to accommodate busy Delaware County residents.</p>
                </Card>
              </div>

              <p className="text-foreground/90 leading-relaxed">
                Remember, the therapeutic relationship is built on trust and rapport. If you don't feel connected with your first therapist, that's okay—we can help match you with another team member who may be a better fit.
              </p>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">How do I find a good therapist in Havertown, PA?</AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    Look for licensed therapists with experience in your specific concerns, check their credentials, read reviews, and schedule a consultation to ensure they're a good fit. Sunrise Human Care Services offers experienced therapists specializing in anxiety, depression, trauma, and family therapy.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">Does insurance cover therapy in Havertown?</AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    Most major insurance plans cover mental health services in Pennsylvania. Contact Sunrise Human Care Services at (814) 620-2162 to verify your specific insurance coverage.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">What types of therapy are available in Delaware County?</AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    Delaware County offers individual therapy, couples counseling, family therapy, child therapy, psychiatric evaluations, and medication management. Sunrise Human Care Services provides comprehensive mental health care for all ages.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">How long does therapy take to work?</AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    Many people notice improvement within 4-6 sessions, though duration varies by individual and concern. Your therapist will work with you to set goals and track progress throughout treatment.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">Is online therapy available in Havertown?</AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    Yes, Sunrise Human Care Services offers both in-person and teletherapy options for residents of Havertown, Drexel Hill, Broomall, and surrounding Delaware County areas.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* CTA Section */}
            <section className="mb-12">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <h2 className="text-2xl font-bold mb-4 text-center text-foreground">Ready to Start Your Therapy Journey?</h2>
                <p className="text-center mb-6 text-foreground/80">
                  Sunrise Human Care Services is accepting new patients in Havertown, PA. Our experienced team is here to support your mental health and wellness goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link to="/appointment">
                    <Button size="lg" className="w-full sm:w-auto">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Your First Appointment
                    </Button>
                  </Link>
                  <a href="tel:8146202162">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (814) 620-2162
                    </Button>
                  </a>
                </div>
                <p className="text-center text-sm text-foreground/60 mt-4">
                  Evening and weekend appointments available • Most insurance plans accepted
                </p>
              </Card>
            </section>

            {/* Related Articles */}
            <section>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/blog/anxiety-treatment-options-delaware-county-pa">
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold mb-2 text-foreground">Anxiety Treatment Options in Delaware County</h4>
                    <p className="text-sm text-foreground/70">Explore proven treatment approaches for anxiety disorders.</p>
                  </Card>
                </Link>
                <Link to="/blog/family-therapy-havertown-pa-strengthening-relationships">
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold mb-2 text-foreground">Family Therapy: Strengthening Relationships</h4>
                    <p className="text-sm text-foreground/70">Learn how family counseling can improve communication.</p>
                  </Card>
                </Link>
              </div>
            </section>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FindingTherapistHavertown;