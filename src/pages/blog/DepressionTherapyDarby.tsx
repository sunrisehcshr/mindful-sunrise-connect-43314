import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Calendar, Heart, AlertTriangle } from "lucide-react";

const DepressionTherapyDarby = () => {
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
        canonicalUrl="https://sunrisehumancare.com/blog/depression-therapy-darby-signs-to-seek-help"
        keywords="depression therapy Darby, signs of depression, treating depression Delaware County, when to see a therapist for depression Darby PA, depression psychiatrist near me"
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
              <span className="text-foreground">Depression Therapy</span>
            </nav>

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Depression Therapy in Darby: Signs You Should Seek Help
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <time dateTime="2025-01-25">January 25, 2025</time>
                <span>•</span>
                <span>9 min read</span>
              </div>
            </header>

            <img 
              src="/images/depression-therapy-havertown.webp" 
              alt="Compassionate depression therapy session at Sunrise Human Care in Darby, PA"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg leading-relaxed text-foreground/90">
                Depression affects more than 21 million adults in the United States each year, making it one of the most common mental health conditions. Yet many people in Darby and throughout Delaware County suffer in silence, unsure whether their feelings warrant professional help. Understanding the signs of depression and knowing when to seek treatment can be life-changing—and potentially life-saving. This guide will help you recognize depression symptoms and explore effective treatment options available right here in Darby, PA.
              </p>
            </div>

            <Card className="p-6 mb-12 bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-rose-600 dark:text-rose-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">If You're in Crisis</h3>
                  <p className="text-sm text-foreground/80 mb-3">
                    If you're experiencing thoughts of suicide or self-harm, please reach out for immediate help:
                  </p>
                  <ul className="text-sm space-y-1 text-foreground/80">
                    <li>• <strong>National Suicide Prevention Lifeline:</strong> 988</li>
                    <li>• <strong>Crisis Text Line:</strong> Text HOME to 741741</li>
                    <li>• <strong>Delaware County Crisis Services:</strong> 1-855-889-7827</li>
                  </ul>
                </div>
              </div>
            </Card>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Common Signs and Symptoms of Depression</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Depression is more than feeling sad or having a bad day. It's a persistent mood disorder that affects how you think, feel, and function in daily life. While everyone's experience is unique, certain signs indicate it may be time to seek professional depression therapy in Darby.
              </p>

              <div className="space-y-4 mb-6">
                <Card className="p-5 border-l-4 border-l-primary">
                  <h3 className="font-semibold mb-3 text-foreground">Emotional and Cognitive Symptoms</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Persistent sad, empty, or hopeless feelings lasting most of the day, nearly every day</li>
                    <li>• Loss of interest or pleasure in activities you once enjoyed (anhedonia)</li>
                    <li>• Feelings of worthlessness, excessive guilt, or self-blame</li>
                    <li>• Difficulty concentrating, making decisions, or remembering things</li>
                    <li>• Recurrent thoughts of death or suicide</li>
                    <li>• Irritability, frustration, or restlessness (common in men)</li>
                  </ul>
                </Card>

                <Card className="p-5 border-l-4 border-l-primary">
                  <h3 className="font-semibold mb-3 text-foreground">Physical and Behavioral Symptoms</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Significant changes in sleep patterns (insomnia or sleeping too much)</li>
                    <li>• Changes in appetite or weight (increase or decrease)</li>
                    <li>• Persistent fatigue or loss of energy</li>
                    <li>• Physical aches and pains without clear cause</li>
                    <li>• Slowed movement, speech, or thinking</li>
                    <li>• Withdrawal from friends, family, and social activities</li>
                  </ul>
                </Card>
              </div>

              <Card className="p-6 bg-accent/30 border-accent">
                <h3 className="font-semibold mb-3 flex items-center text-foreground">
                  <Heart className="w-5 h-5 mr-2 text-primary" />
                  When to Seek Help
                </h3>
                <p className="text-foreground/80 mb-2">
                  Consider reaching out to a depression therapist in Darby if:
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li>✓ Symptoms persist for two weeks or longer</li>
                  <li>✓ Your symptoms interfere with work, relationships, or daily responsibilities</li>
                  <li>✓ You've lost interest in things that normally bring you joy</li>
                  <li>✓ You're experiencing thoughts of self-harm or suicide</li>
                  <li>✓ You're turning to alcohol or substances to cope</li>
                  <li>✓ Friends or family have expressed concern about changes in your behavior</li>
                </ul>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Why Early Treatment Matters</h2>
              <p className="mb-4 text-foreground/90 leading-relaxed">
                Depression rarely improves on its own without treatment. In fact, untreated depression often worsens over time and can lead to serious complications including relationship problems, job loss, substance abuse, and physical health issues like heart disease and chronic pain.
              </p>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                The good news is that depression is one of the most treatable mental health conditions. With proper care from experienced depression therapists in Darby, most people experience significant improvement within weeks to months. Early intervention leads to:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-5 bg-primary/5">
                  <h4 className="font-semibold mb-2 text-foreground">Faster Recovery</h4>
                  <p className="text-sm text-foreground/80">Addressing depression early prevents symptoms from becoming deeply entrenched, leading to quicker relief.</p>
                </Card>
                <Card className="p-5 bg-primary/5">
                  <h4 className="font-semibold mb-2 text-foreground">Better Outcomes</h4>
                  <p className="text-sm text-foreground/80">Early treatment is associated with more complete recovery and lower relapse rates.</p>
                </Card>
                <Card className="p-5 bg-primary/5">
                  <h4 className="font-semibold mb-2 text-foreground">Prevention of Complications</h4>
                  <p className="text-sm text-foreground/80">Treatment helps prevent the cascade of problems that untreated depression causes in relationships, work, and health.</p>
                </Card>
                <Card className="p-5 bg-primary/5">
                  <h4 className="font-semibold mb-2 text-foreground">Improved Quality of Life</h4>
                  <p className="text-sm text-foreground/80">Effective treatment restores your ability to experience joy, connect with others, and engage fully in life.</p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Depression Treatment Approaches in Darby</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Sunrise Human Care Services offers comprehensive, evidence-based depression treatment tailored to your unique situation. Our integrated approach combines therapy, medication management when appropriate, and supportive care to address depression from multiple angles.
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Psychotherapy Options</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Cognitive Behavioral Therapy (CBT)</h4>
                      <p className="text-sm text-foreground/80">
                        CBT is the most extensively researched and proven-effective therapy for depression. It helps you identify and change negative thought patterns and behaviors that contribute to depressive symptoms. You'll learn practical skills to challenge distorted thinking, problem-solve effectively, and engage in activities that improve mood.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Interpersonal Therapy (IPT)</h4>
                      <p className="text-sm text-foreground/80">
                        IPT focuses on improving relationship patterns and communication skills. This approach is particularly effective when depression stems from grief, role transitions, relationship conflicts, or social isolation—common issues for Delaware County residents navigating life changes.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Behavioral Activation</h4>
                      <p className="text-sm text-foreground/80">
                        This therapy helps you break the cycle of withdrawal and inactivity that maintains depression. Your therapist will work with you to schedule rewarding activities and gradually increase engagement with life, even when motivation is low.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link to="/depression-therapy-darby-pa">
                      <Button variant="outline">Learn More About Depression Therapy</Button>
                    </Link>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Psychiatric Evaluation and Medication</h3>
                  <p className="mb-4 text-foreground/90">
                    For moderate to severe depression, medication can be an essential component of treatment. Our board-certified psychiatrists conduct thorough evaluations to determine if antidepressant medication is appropriate for your situation.
                  </p>
                  <p className="mb-4 text-foreground/90">
                    Modern antidepressants like SSRIs (selective serotonin reuptake inhibitors) and SNRIs (serotonin-norepinephrine reuptake inhibitors) are generally well-tolerated and can significantly improve symptoms within 4-8 weeks. Common medications include sertraline (Zoloft), escitalopram (Lexapro), fluoxetine (Prozac), and bupropion (Wellbutrin).
                  </p>
                  <p className="text-sm text-foreground/70 italic">
                    Research shows that combining therapy with medication produces better outcomes than either treatment alone for moderate to severe depression.
                  </p>
                  <div className="mt-4">
                    <Link to="/psychiatric-evaluations-darby-pa">
                      <Button variant="outline">Schedule Psychiatric Evaluation</Button>
                    </Link>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Holistic and Integrative Approaches</h3>
                  <p className="mb-3 text-foreground/90">
                    While therapy and medication are cornerstones of depression treatment, we also support complementary strategies that enhance overall wellness:
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Exercise and physical activity (as effective as antidepressants for mild depression)</li>
                    <li>• Sleep hygiene improvements</li>
                    <li>• Nutritional counseling and dietary changes</li>
                    <li>• Mindfulness and meditation practices</li>
                    <li>• Light therapy for seasonal depression</li>
                    <li>• Social connection and support groups</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">What to Expect at Your First Appointment</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Taking the first step toward depression treatment takes courage. At Sunrise Human Care Services, we've designed our intake process to be welcoming, confidential, and thorough. Here's what you can expect when you visit our Darby office:
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Initial Assessment</h4>
                    <p className="text-sm text-foreground/80">Your therapist or psychiatrist will ask about your symptoms, medical history, family history of mental health conditions, current stressors, and treatment goals. This comprehensive assessment typically takes 60-90 minutes.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Diagnosis and Education</h4>
                    <p className="text-sm text-foreground/80">You'll receive a clear explanation of your diagnosis and learn about how depression affects the brain and body. Understanding your condition is the first step toward healing.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Treatment Planning</h4>
                    <p className="text-sm text-foreground/80">Together, you'll develop a personalized treatment plan that may include therapy frequency, medication options, lifestyle modifications, and measurable goals. Your input and preferences guide this collaborative process.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Ongoing Support</h4>
                    <p className="text-sm text-foreground/80">We'll schedule follow-up appointments and ensure you have resources for support between sessions. Our team is here for you throughout your recovery journey.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Supporting a Loved One with Depression</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                If someone you care about in Delaware County is struggling with depression, your support can make a significant difference. Here's how you can help:
              </p>

              <Card className="p-6 bg-accent/20 border-accent">
                <h3 className="font-semibold mb-4 text-foreground">Ways to Support Someone with Depression</h3>
                <div className="space-y-3 text-sm text-foreground/80">
                  <div>
                    <strong className="text-foreground">Listen without judgment:</strong> Create a safe space for them to express feelings without offering unsolicited advice or minimizing their experience.
                  </div>
                  <div>
                    <strong className="text-foreground">Encourage professional help:</strong> Gently suggest they contact a depression therapist in Darby. Offer to help them find a provider or accompany them to appointments.
                  </div>
                  <div>
                    <strong className="text-foreground">Provide practical support:</strong> Help with daily tasks like meals, errands, or childcare. Depression can make even simple activities feel overwhelming.
                  </div>
                  <div>
                    <strong className="text-foreground">Stay connected:</strong> Maintain regular contact even if they withdraw. Send texts, make calls, or simply sit with them in silence.
                  </div>
                  <div>
                    <strong className="text-foreground">Take care of yourself:</strong> Supporting someone with depression can be emotionally draining. Seek your own support through therapy or caregiver support groups.
                  </div>
                  <div>
                    <strong className="text-foreground">Watch for warning signs:</strong> If they express suicidal thoughts, don't leave them alone. Contact crisis services immediately or take them to the nearest emergency room.
                  </div>
                </div>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">What are the warning signs of depression?</AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    Common signs include persistent sadness, loss of interest in activities, changes in sleep or appetite, fatigue, difficulty concentrating, feelings of worthlessness, and thoughts of death or suicide. If you experience these symptoms for two weeks or more, professional help is recommended.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">Is depression treatment covered by insurance in Pennsylvania?</AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    Yes, most insurance plans in Pennsylvania cover depression treatment including therapy and medication management. Contact Sunrise Human Care Services at (814) 620-2162 to verify your coverage.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">How effective is therapy for depression?</AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    Therapy is highly effective for depression. Research shows that 60-80% of people experience significant improvement with evidence-based treatments like Cognitive Behavioral Therapy (CBT) and Interpersonal Therapy.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section className="mb-12">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <h2 className="text-2xl font-bold mb-4 text-center text-foreground">Take the First Step Toward Recovery</h2>
                <p className="text-center mb-6 text-foreground/80">
                  Depression is treatable, and you don't have to face it alone. Compassionate, expert care is available at Sunrise Human Care Services in Darby.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link to="/appointment">
                    <Button size="lg" className="w-full sm:w-auto">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Depression Screening
                    </Button>
                  </Link>
                  <a href="tel:8146202162">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Confidentially
                    </Button>
                  </a>
                </div>
                <p className="text-center text-sm text-foreground/60 mt-4">
                  Confidential appointments • Evening hours available • We're here to help
                </p>
              </Card>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/blog/anxiety-treatment-options-delaware-county-pa">
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold mb-2 text-foreground">Anxiety Treatment Options in Delaware County</h4>
                    <p className="text-sm text-foreground/70">Explore evidence-based anxiety therapy approaches.</p>
                  </Card>
                </Link>
                <Link to="/blog/finding-therapist-darby-pa-guide">
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold mb-2 text-foreground">Finding the Right Therapist in Darby</h4>
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

export default DepressionTherapyDarby;