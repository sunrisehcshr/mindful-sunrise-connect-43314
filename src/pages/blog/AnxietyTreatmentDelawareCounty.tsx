import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Calendar, AlertCircle } from "lucide-react";

const AnxietyTreatmentDelawareCounty = () => {
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
        "name": "How much does anxiety treatment cost in Havertown?",
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
        description="Explore proven anxiety treatment options in Havertown and Delaware County. Learn about therapy approaches, medication management, and local support resources."
        canonicalUrl="https://sunrisehumancare.com/blog/anxiety-treatment-options-delaware-county-pa"
        keywords="anxiety treatment Havertown, anxiety therapy Delaware County PA, treating anxiety near me, best anxiety therapist in Havertown, medication management for anxiety Havertown"
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
            <nav className="text-sm mb-6 text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              {" / "}
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              {" / "}
              <span className="text-foreground">Anxiety Treatment Options</span>
            </nav>

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Anxiety Treatment Options in Delaware County: What Works?
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <time dateTime="2025-01-20">January 20, 2025</time>
                <span>•</span>
                <span>10 min read</span>
              </div>
            </header>

            <img 
              src="/images/Therapy-in-havertown.webp" 
              alt="Anxiety therapy session in Havertown, PA mental health clinic"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg leading-relaxed text-foreground/90">
                Anxiety disorders affect over 40 million adults in the United States, and residents of Delaware County, PA are no exception. If you're experiencing persistent worry, panic attacks, or overwhelming fear that interferes with daily life, you're not alone—and effective treatment is available right here in Havertown. This comprehensive guide explores evidence-based anxiety treatment options that can help you regain control and find peace of mind.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Understanding Anxiety Disorders</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                Anxiety is more than occasional stress or worry. Clinical anxiety disorders involve persistent, excessive fear or worry that significantly impacts your ability to function at work, school, or in relationships.
              </p>
              
              <Card className="p-6 mb-6 bg-accent/30 border-accent">
                <h3 className="font-semibold mb-3 flex items-center text-foreground">
                  <AlertCircle className="w-5 h-5 mr-2 text-primary" />
                  Common Types of Anxiety Disorders
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  <li><strong>Generalized Anxiety Disorder (GAD):</strong> Persistent worry about various aspects of life</li>
                  <li><strong>Panic Disorder:</strong> Recurring panic attacks and fear of future attacks</li>
                  <li><strong>Social Anxiety Disorder:</strong> Intense fear of social situations and judgment</li>
                  <li><strong>Specific Phobias:</strong> Extreme fear of particular objects or situations</li>
                  <li><strong>Agoraphobia:</strong> Fear of places or situations that might cause panic</li>
                </ul>
              </Card>

              <p className="text-foreground/90 leading-relaxed">
                Physical symptoms often accompany anxiety, including rapid heartbeat, sweating, trembling, shortness of breath, dizziness, and gastrointestinal issues. If you're experiencing these symptoms regularly, seeking professional anxiety treatment in Havertown can provide significant relief.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Evidence-Based Therapy Approaches</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Psychotherapy is highly effective for treating anxiety disorders. At Sunrise Human Care Services, our experienced therapists utilize proven therapeutic modalities tailored to your specific needs.
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Cognitive Behavioral Therapy (CBT)</h3>
                  <p className="mb-3 text-foreground/90">
                    CBT is the gold standard for anxiety treatment, backed by decades of research. This structured approach helps you identify and challenge distorted thought patterns that fuel anxiety. Through CBT, you'll learn practical skills to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-3 text-foreground/80">
                    <li>Recognize anxious thought patterns and cognitive distortions</li>
                    <li>Challenge irrational beliefs with evidence-based reasoning</li>
                    <li>Develop healthier thinking habits and coping strategies</li>
                    <li>Practice behavioral experiments to test anxious predictions</li>
                  </ul>
                  <p className="text-sm text-foreground/70 italic">
                    Research shows that 60-80% of people experience significant anxiety reduction with CBT within 12-16 sessions.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Exposure Therapy</h3>
                  <p className="mb-3 text-foreground/90">
                    Particularly effective for phobias, panic disorder, and social anxiety, exposure therapy gradually exposes you to feared situations in a safe, controlled environment. This process, called habituation, helps your brain learn that the feared outcome is unlikely and that you can tolerate discomfort.
                  </p>
                  <p className="text-foreground/90">
                    Our therapists create personalized exposure hierarchies, starting with less distressing situations and progressively working toward more challenging scenarios. This methodical approach ensures you build confidence at your own pace while achieving lasting results.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Mindfulness-Based Approaches</h3>
                  <p className="mb-3 text-foreground/90">
                    Mindfulness-Based Stress Reduction (MBSR) and Acceptance and Commitment Therapy (ACT) teach you to observe anxious thoughts and feelings without judgment, reducing their power over you. These approaches emphasize:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80">
                    <li>Present-moment awareness and grounding techniques</li>
                    <li>Acceptance of uncomfortable emotions rather than avoidance</li>
                    <li>Values-based living aligned with what matters most to you</li>
                    <li>Meditation and breathing exercises for immediate relief</li>
                  </ul>
                </Card>
              </div>

              <div className="mt-6">
                <Link to="/anxiety-therapy-havertown-pa">
                  <Button className="w-full sm:w-auto">
                    Learn More About Our Anxiety Therapy Services
                  </Button>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Medication Management for Anxiety</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                For many people, medication is an important component of comprehensive anxiety treatment. At Sunrise Human Care Services, our board-certified psychiatrists provide expert medication management as part of an integrated care approach.
              </p>

              <div className="bg-accent/20 border border-accent rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Common Anxiety Medications</h3>
                <div className="space-y-3 text-sm text-foreground/80">
                  <div>
                    <strong className="text-foreground">SSRIs and SNRIs:</strong> First-line medications like sertraline (Zoloft), escitalopram (Lexapro), and venlafaxine (Effexor) are effective for long-term anxiety management with minimal side effects.
                  </div>
                  <div>
                    <strong className="text-foreground">Buspirone:</strong> Non-addictive anti-anxiety medication useful for generalized anxiety disorder.
                  </div>
                  <div>
                    <strong className="text-foreground">Benzodiazepines:</strong> Fast-acting medications for acute anxiety or panic attacks, prescribed carefully due to dependency risks.
                  </div>
                  <div>
                    <strong className="text-foreground">Beta-Blockers:</strong> Help manage physical symptoms like rapid heartbeat and trembling, particularly useful for performance anxiety.
                  </div>
                </div>
              </div>

              <p className="mb-4 text-foreground/90 leading-relaxed">
                Our psychiatrists conduct thorough evaluations to determine if medication is appropriate for your situation. We consider factors including symptom severity, previous treatment responses, medical history, and personal preferences. Regular follow-up appointments ensure optimal dosing and monitor for side effects.
              </p>

              <Link to="/medication-management-havertown-pa">
                <Button variant="outline">Explore Medication Management Services</Button>
              </Link>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Combining Therapy and Psychiatry: The Integrated Care Advantage</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Research consistently shows that combining psychotherapy with medication produces superior outcomes compared to either treatment alone for moderate to severe anxiety. At Sunrise Human Care Services, our collaborative model ensures seamless coordination between your therapist and psychiatrist.
              </p>

              <Card className="p-6 bg-primary/5 border-primary/30">
                <h3 className="font-semibold mb-3 text-foreground">Benefits of Integrated Anxiety Treatment</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>✓ Faster symptom relief through combined approaches</li>
                  <li>✓ More comprehensive treatment addressing biological and psychological factors</li>
                  <li>✓ Better medication adherence with therapeutic support</li>
                  <li>✓ Coordinated care team sharing insights about your progress</li>
                  <li>✓ Gradual medication reduction as therapy skills strengthen</li>
                </ul>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Local Support Resources in Delaware County</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Professional treatment is most effective when combined with community support. Delaware County offers valuable resources to supplement your anxiety therapy:
              </p>

              <div className="space-y-4">
                <Card className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">NAMI Delaware County</h4>
                  <p className="text-sm text-foreground/80 mb-2">National Alliance on Mental Illness local chapter offering support groups, education programs, and community resources for individuals with anxiety and their families.</p>
                  <p className="text-xs text-muted-foreground">Phone: (610) 622-2650</p>
                </Card>

                <Card className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">Delaware County Crisis Services</h4>
                  <p className="text-sm text-foreground/80 mb-2">24/7 crisis intervention and mental health emergency support for Delaware County residents experiencing severe anxiety or panic.</p>
                  <p className="text-xs text-muted-foreground">Crisis Line: 1-855-889-7827</p>
                </Card>

                <Card className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">Wellness Programs at Local Libraries</h4>
                  <p className="text-sm text-foreground/80">Haverford Township Free Library and Marple Public Library host mindfulness workshops, stress management classes, and mental health awareness events throughout the year.</p>
                </Card>

                <Card className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">Anxiety Support Groups</h4>
                  <p className="text-sm text-foreground/80">Connect with others managing anxiety in peer-led support groups meeting monthly at various locations in Havertown, Broomall, and surrounding areas.</p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">What are the most effective treatments for anxiety?</AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    Cognitive Behavioral Therapy (CBT), Exposure Therapy, and medication management are evidence-based treatments proven effective for anxiety disorders. Many people benefit from a combination of therapy and medication.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">How much does anxiety treatment cost in Havertown?</AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    Cost varies based on insurance coverage. Most major insurance plans cover mental health services. Contact Sunrise Human Care Services at (814) 620-2162 to discuss pricing and insurance options.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Can anxiety be cured permanently?</AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    While anxiety may not be permanently cured, it can be effectively managed with proper treatment. Most people experience significant symptom reduction and improved quality of life with therapy and/or medication.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">How long does anxiety therapy take to work?</AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    Many people notice improvement within 8-12 weeks of consistent therapy. CBT typically involves 12-20 sessions, though duration varies based on severity and individual response to treatment.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section className="mb-12">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <h2 className="text-2xl font-bold mb-4 text-center text-foreground">Start Your Anxiety Treatment Journey Today</h2>
                <p className="text-center mb-6 text-foreground/80">
                  Don't let anxiety control your life. Expert, compassionate care is available at Sunrise Human Care Services in Havertown.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link to="/appointment">
                    <Button size="lg" className="w-full sm:w-auto">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Your Consultation
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
                  Same-week appointments often available • Teletherapy options • Insurance accepted
                </p>
              </Card>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/blog/depression-therapy-havertown-signs-to-seek-help">
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold mb-2 text-foreground">Depression Therapy: When to Seek Help</h4>
                    <p className="text-sm text-foreground/70">Learn about depression signs and treatment options.</p>
                  </Card>
                </Link>
                <Link to="/blog/finding-therapist-havertown-pa-guide">
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold mb-2 text-foreground">Finding the Right Therapist in Havertown</h4>
                    <p className="text-sm text-foreground/70">Complete guide to choosing a mental health provider.</p>
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

export default AnxietyTreatmentDelawareCounty;