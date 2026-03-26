import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Calendar, Users } from "lucide-react";

const FamilyTherapyDarby = () => {
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
        description="Discover how family therapy can improve communication and resolve conflicts. Serving Darby, Drexel Hill, and Broomall families at Sunrise Human Care Services."
        canonicalUrl="https://sunrisehumancare.com/blog/family-therapy-darby-pa-strengthening-relationships"
        keywords="family therapy Darby PA, family counseling Delaware County, couples therapy Darby, family therapist for teens Darby, blended family counseling near me"
        ogImage="https://sunrisehumancare.com/images/family-counseling-darby.webp"
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
              <span className="text-foreground">Family Therapy</span>
            </nav>

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Family Therapy in Darby: Strengthening Relationships at Home
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <time dateTime="2025-02-01">February 1, 2025</time>
                <span>•</span>
                <span>9 min read</span>
              </div>
            </header>

            <img 
              src="/images/family-therapy-darby-guide.webp" 
              alt="Family therapy session at Sunrise Human Care Services in Darby, PA"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg leading-relaxed text-foreground/90">
                Every family faces challenges—whether it's navigating a teenager's difficult behavior, coping with divorce, blending two families together, or simply feeling disconnected from one another. For families in Darby, Drexel Hill, Broomall, and throughout Delaware County, family therapy offers a path to healthier communication, stronger bonds, and lasting resolution of conflicts. At Sunrise Human Care Services, we understand that when one family member struggles, the entire family feels the impact. Our experienced family therapists are here to help your family thrive.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">When Families Benefit from Therapy</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Family therapy isn't just for families in crisis. Many Delaware County families seek counseling as a proactive way to improve relationships and build resilience. Here are common situations where family therapy in Darby can help:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-5 border-l-4 border-l-primary">
                  <h3 className="font-semibold mb-2 text-foreground">Divorce and Separation</h3>
                  <p className="text-sm text-foreground/80">
                    Navigate co-parenting challenges, help children adjust to changes, and establish healthy boundaries in your new family structure.
                  </p>
                </Card>

                <Card className="p-5 border-l-4 border-l-primary">
                  <h3 className="font-semibold mb-2 text-foreground">Blended Family Challenges</h3>
                  <p className="text-sm text-foreground/80">
                    Integrate two families successfully, address stepparent-stepchild relationships, and manage loyalty conflicts children may experience.
                  </p>
                </Card>

                <Card className="p-5 border-l-4 border-l-primary">
                  <h3 className="font-semibold mb-2 text-foreground">Teen Behavioral Issues</h3>
                  <p className="text-sm text-foreground/80">
                    Address defiance, school problems, substance use concerns, and improve parent-teen communication during these challenging years.
                  </p>
                </Card>

                <Card className="p-5 border-l-4 border-l-primary">
                  <h3 className="font-semibold mb-2 text-foreground">Communication Breakdown</h3>
                  <p className="text-sm text-foreground/80">
                    Learn to express needs effectively, practice active listening, and reduce destructive conflict patterns that damage relationships.
                  </p>
                </Card>

                <Card className="p-5 border-l-4 border-l-primary">
                  <h3 className="font-semibold mb-2 text-foreground">Major Life Transitions</h3>
                  <p className="text-sm text-foreground/80">
                    Navigate job loss, relocation, illness, or empty nest syndrome that creates stress and requires family adaptation.
                  </p>
                </Card>

                <Card className="p-5 border-l-4 border-l-primary">
                  <h3 className="font-semibold mb-2 text-foreground">Elder Care Stress</h3>
                  <p className="text-sm text-foreground/80">
                    Make difficult decisions about aging parents' care, manage sibling conflicts, and cope with caregiver burnout.
                  </p>
                </Card>

                <Card className="p-5 border-l-4 border-l-primary">
                  <h3 className="font-semibold mb-2 text-foreground">Grief and Loss</h3>
                  <p className="text-sm text-foreground/80">
                    Support each other through the death of a loved one, miscarriage, or other significant losses affecting the family unit.
                  </p>
                </Card>

                <Card className="p-5 border-l-4 border-l-primary">
                  <h3 className="font-semibold mb-2 text-foreground">Mental Health Impact</h3>
                  <p className="text-sm text-foreground/80">
                    When one family member has depression, anxiety, ADHD, or other mental health conditions affecting family dynamics.
                  </p>
                </Card>
              </div>

              <Card className="p-6 bg-primary/5 border-primary/30">
                <p className="text-foreground/90">
                  <strong className="text-foreground">Remember:</strong> Seeking family therapy doesn't mean your family is broken. It means you're committed to growth, healing, and creating the supportive home environment everyone deserves.
                </p>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">What Happens in Family Therapy Sessions</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Many Darby families wonder what to expect from family counseling. While each family's experience is unique, here's a general overview of the family therapy process at Sunrise Human Care Services:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-5 py-2">
                  <h3 className="font-semibold mb-2 text-foreground">Initial Assessment (First 1-2 Sessions)</h3>
                  <p className="text-foreground/80">
                    Your family therapist will meet with family members (sometimes individually, sometimes together) to understand family history, current challenges, relationship patterns, and each person's perspective. This helps create a comprehensive picture of family dynamics.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-5 py-2">
                  <h3 className="font-semibold mb-2 text-foreground">Goal Setting</h3>
                  <p className="text-foreground/80">
                    Together, you'll establish clear, achievable goals. These might include "improve communication during conflicts," "help our teenager feel heard," or "create better work-life balance as a family."
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-5 py-2">
                  <h3 className="font-semibold mb-2 text-foreground">Active Therapy Sessions</h3>
                  <p className="text-foreground/80">
                    Most sessions last 50-90 minutes and involve guided conversations where family members practice new communication skills, work through conflicts with therapist support, and complete exercises designed to shift unhealthy patterns.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-5 py-2">
                  <h3 className="font-semibold mb-2 text-foreground">Homework and Practice</h3>
                  <p className="text-foreground/80">
                    Between sessions, families often receive "homework"—practical exercises to practice new skills at home. This might include communication techniques, family meetings, or specific activities to strengthen bonds.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-5 py-2">
                  <h3 className="font-semibold mb-2 text-foreground">Progress Review and Completion</h3>
                  <p className="text-foreground/80">
                    As goals are met, sessions become less frequent. Many families continue with monthly "maintenance" sessions to sustain progress and address new challenges as they arise.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Approach to Family Counseling</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                At Sunrise Human Care Services, our family therapists draw from evidence-based therapeutic modalities proven effective for family systems. We tailor our approach to your family's unique needs, culture, and values.
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center text-foreground">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    Structural Family Therapy
                  </h3>
                  <p className="text-foreground/80">
                    This approach examines family organization, boundaries, and hierarchy. We help families establish appropriate boundaries (like parents presenting a united front), clarify roles, and create healthy subsystems within the family.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Strategic and Solution-Focused Therapy</h3>
                  <p className="text-foreground/80">
                    Rather than dwelling on problems, we focus on solutions and exceptions—times when the problem doesn't occur. This strengths-based approach helps families recognize their own resources and build on what's already working.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Emotionally Focused Family Therapy</h3>
                  <p className="text-foreground/80">
                    We help family members identify and express underlying emotions beneath surface conflicts. Often, anger masks hurt or fear. Understanding emotional needs transforms family interactions.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Narrative Therapy</h3>
                  <p className="text-foreground/80">
                    Families develop stories about themselves that can be limiting. We help families "reauthor" their narrative—seeing themselves not as "the dysfunctional family" but as "a family overcoming challenges together."
                  </p>
                </Card>
              </div>

              <div className="mt-6">
                <Link to="/family-therapy-darby-pa">
                  <Button>Explore Our Family Therapy Services</Button>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Specialized Support for Delaware County Families</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Our family therapists have specialized training to address the unique challenges facing modern families in the Darby area. We understand the specific pressures Delaware County families face, from school district concerns to suburban lifestyle stressors.
              </p>

              <div className="space-y-6">
                <Card className="p-6 bg-accent/20 border-accent">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Teen and Adolescent Issues</h3>
                  <p className="mb-3 text-foreground/90">
                    The teenage years bring unique challenges for Darby families. Our therapists help address:
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Academic pressure and school refusal (common in competitive Haverford Township schools)</li>
                    <li>• Social media conflicts and cyberbullying</li>
                    <li>• Experimentation with substances or risky behaviors</li>
                    <li>• Depression, anxiety, and identity development</li>
                    <li>• Parent-teen power struggles and boundary setting</li>
                  </ul>
                  <p className="mt-3 text-sm text-foreground/80">
                    We create a safe space where teenagers feel heard and parents learn effective strategies beyond punishment and control.
                  </p>
                </Card>

                <Card className="p-6 bg-accent/20 border-accent">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Parenting Support</h3>
                  <p className="mb-3 text-foreground/90">
                    Sometimes families benefit from parenting-focused sessions that strengthen parental skills and confidence:
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Positive discipline strategies that work</li>
                    <li>• Managing challenging behaviors in young children</li>
                    <li>• Co-parenting effectively after divorce or separation</li>
                    <li>• Parenting children with ADHD, autism, or other special needs</li>
                    <li>• Balancing work demands with family time (a major Darby challenge)</li>
                  </ul>
                </Card>

                <Card className="p-6 bg-accent/20 border-accent">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Couples Counseling</h3>
                  <p className="mb-3 text-foreground/90">
                    A strong parental partnership is the foundation of family wellness. We offer dedicated couples therapy to:
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Improve communication and emotional intimacy</li>
                    <li>• Resolve conflicts about parenting, finances, or in-laws</li>
                    <li>• Rebuild trust after infidelity or betrayal</li>
                    <li>• Navigate major decisions about careers or relocation</li>
                    <li>• Reignite connection in long-term relationships</li>
                  </ul>
                  <div className="mt-4">
                    <Link to="/couples-counseling-darby-pa">
                      <Button variant="outline">Learn About Couples Counseling</Button>
                    </Link>
                  </div>
                </Card>

                <Card className="p-6 bg-accent/20 border-accent">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Multigenerational Family Dynamics</h3>
                  <p className="text-foreground/90">
                    Many Delaware County families are dealing with aging parents while raising children—the "sandwich generation." We help families navigate difficult conversations about elder care, manage sibling conflicts over caregiving responsibilities, and cope with the emotional toll of watching parents decline.
                  </p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Success Indicators: How to Know It's Working</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Family therapy is working when you notice these positive changes:
              </p>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span><strong className="text-foreground">Improved Communication:</strong> Family members listen more, interrupt less, and express feelings constructively instead of attacking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span><strong className="text-foreground">Reduced Conflict Intensity:</strong> Disagreements still happen, but they're less volatile and resolved more quickly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span><strong className="text-foreground">Increased Empathy:</strong> Family members show more understanding of each other's perspectives and needs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span><strong className="text-foreground">Better Problem-Solving:</strong> The family works together to address challenges rather than blaming individuals.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span><strong className="text-foreground">More Quality Time:</strong> Family members choose to spend time together and enjoy each other's company.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span><strong className="text-foreground">Individual Improvement:</strong> Individual family members report feeling better about themselves and their role in the family.</span>
                  </li>
                </ul>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Family-Friendly Resources in Darby</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                In addition to family therapy, Delaware County offers wonderful resources to support family bonding and wellness:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">Delaware County Parks</h4>
                  <p className="text-sm text-foreground/80">Spend quality family time at Haverford Reserve, Smedley Park, or Ridley Creek State Park—free outdoor activities that strengthen family bonds.</p>
                </Card>
                <Card className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">Haverford Township Recreation</h4>
                  <p className="text-sm text-foreground/80">Family programs, youth sports, and community events that bring Darby families together.</p>
                </Card>
                <Card className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">Local Libraries</h4>
                  <p className="text-sm text-foreground/80">Haverford Township Free Library offers family programs, parenting workshops, and teen activities.</p>
                </Card>
                <Card className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">NAMI Family Support</h4>
                  <p className="text-sm text-foreground/80">Free family support groups for families coping with mental health conditions, offered throughout Delaware County.</p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">How does family therapy work?</AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    Family therapy brings family members together with a trained therapist to improve communication, resolve conflicts, and strengthen relationships. The therapist helps family members understand each other's perspectives and develop healthier interaction patterns.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">When should a family consider therapy?</AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    Consider family therapy when experiencing frequent conflicts, communication breakdowns, major life transitions (divorce, blended families), teen behavioral issues, grief, or when one family member's mental health affects the entire family.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Do all family members need to attend therapy sessions?</AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    Not necessarily. While involving all family members can be beneficial, therapy can still be effective with whoever is willing and able to participate. Your family therapist will work with you to determine the best approach.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section className="mb-12">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <h2 className="text-2xl font-bold mb-4 text-center text-foreground">Strengthen Your Family Today</h2>
                <p className="text-center mb-6 text-foreground/80">
                  Every family deserves support. Let's work together to build the strong, connected family you envision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link to="/appointment">
                    <Button size="lg" className="w-full sm:w-auto">
                      <Calendar className="mr-2 h-5 w-5" />
                      Start Family Therapy
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
                  Evening & weekend sessions available • Convenient Darby location
                </p>
              </Card>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/blog/finding-therapist-darby-pa-guide">
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold mb-2 text-foreground">Finding the Right Therapist in Darby</h4>
                    <p className="text-sm text-foreground/70">Guide to choosing a mental health provider for your family.</p>
                  </Card>
                </Link>
                <Link to="/blog/adhd-treatment-darby-pa-children-adults">
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold mb-2 text-foreground">ADHD Treatment for Children and Adults</h4>
                    <p className="text-sm text-foreground/70">Comprehensive ADHD care for all ages in Darby.</p>
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

export default FamilyTherapyDarby;