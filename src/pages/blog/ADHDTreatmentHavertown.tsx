import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Calendar, Brain, CheckCircle } from "lucide-react";

const ADHDTreatmentHavertown = () => {
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
        "name": "How is ADHD diagnosed in Havertown?",
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
        title="ADHD Treatment in Havertown, PA | Children & Adults"
        description="Expert ADHD treatment in Havertown for all ages. Therapy, psychiatric evaluations, and medication management at Sunrise Human Care Services in Delaware County."
        canonicalUrl="https://sunrisehumancare.com/blog/adhd-treatment-havertown-pa-children-adults"
        keywords="ADHD treatment Havertown PA, ADHD therapist Delaware County, adult ADHD treatment near me, child ADHD psychiatrist Havertown, ADHD medication management Pennsylvania"
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
              <span className="text-foreground">ADHD Treatment</span>
            </nav>

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                ADHD Treatment in Havertown: Comprehensive Care for Children and Adults
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground text-sm">
                <time dateTime="2025-02-05">February 5, 2025</time>
                <span>•</span>
                <span>11 min read</span>
              </div>
            </header>

            <img 
              src="/images/adhd-treatment-havertown.webp" 
              alt="ADHD treatment and evaluation services at Sunrise Human Care in Havertown, PA"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg leading-relaxed text-foreground/90">
                Attention-Deficit/Hyperactivity Disorder (ADHD) affects approximately 10% of children and 4% of adults in the United States. For families and individuals in Havertown, Drexel Hill, Broomall, and throughout Delaware County, untreated ADHD can create significant challenges at school, work, and home. The good news? ADHD is highly treatable. At Sunrise Human Care Services, our comprehensive ADHD treatment program combines expert diagnosis, evidence-based therapy, and careful medication management to help children and adults with ADHD thrive.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Recognizing ADHD Across Different Ages</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                ADHD presents differently at various life stages. Understanding these patterns helps families in Havertown recognize when professional evaluation is needed.
              </p>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="text-xl font-semibold mb-3 flex items-center text-foreground">
                    <Brain className="w-5 h-5 mr-2 text-primary" />
                    ADHD in Children (Ages 6-12)
                  </h3>
                  <p className="mb-3 text-foreground/90">
                    Elementary school is often when ADHD becomes most apparent, as academic demands increase. Common signs in children include:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-foreground">Inattention Symptoms:</h4>
                      <ul className="text-sm space-y-1 text-foreground/80">
                        <li>• Difficulty following instructions</li>
                        <li>• Frequent careless mistakes in schoolwork</li>
                        <li>• Trouble organizing tasks and materials</li>
                        <li>• Loses homework, permission slips, jackets</li>
                        <li>• Easily distracted during class</li>
                        <li>• Forgets daily activities</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-foreground">Hyperactivity/Impulsivity:</h4>
                      <ul className="text-sm space-y-1 text-foreground/80">
                        <li>• Can't sit still at desk</li>
                        <li>• Runs or climbs inappropriately</li>
                        <li>• Interrupts others constantly</li>
                        <li>• Blurts out answers in class</li>
                        <li>• Trouble waiting turns</li>
                        <li>• Talks excessively</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-foreground/70 italic">
                    Many Havertown parents first hear concerns from teachers at Haverford Township schools about their child's ability to focus or sit still.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">ADHD in Teens (Ages 13-17)</h3>
                  <p className="mb-3 text-foreground/90">
                    As middle and high school demands increase, ADHD symptoms often intensify. Executive function challenges become more apparent:
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Chronic procrastination and missing deadlines</li>
                    <li>• Poor time management (everything takes longer than expected)</li>
                    <li>• Difficulty with multi-step projects or long-term assignments</li>
                    <li>• Messy backpack, locker, bedroom</li>
                    <li>• Risky behaviors (speeding, substance experimentation)</li>
                    <li>• Emotional dysregulation and mood swings</li>
                    <li>• Low self-esteem from academic struggles</li>
                    <li>• Conflict with parents over responsibilities</li>
                  </ul>
                  <p className="mt-3 text-sm text-foreground/70 italic">
                    Teen ADHD often coexists with anxiety or depression, requiring integrated mental health treatment.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-primary">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">ADHD in Adults (18+)</h3>
                  <p className="mb-3 text-foreground/90">
                    Many adults in Havertown are surprised to learn they have ADHD—often diagnosed only after their child receives a diagnosis. Adult ADHD impacts workplace performance and relationships:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-foreground">Work-Related Challenges:</h4>
                      <ul className="text-sm space-y-1 text-foreground/80">
                        <li>• Missing deadlines or meetings</li>
                        <li>• Difficulty prioritizing tasks</li>
                        <li>• Starting many projects, finishing few</li>
                        <li>• Hyperfocus on interesting tasks while neglecting others</li>
                        <li>• Chronic lateness</li>
                        <li>• Job changes due to boredom</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-foreground">Personal Life Impact:</h4>
                      <ul className="text-sm space-y-1 text-foreground/80">
                        <li>• Relationship problems (seeming inattentive)</li>
                        <li>• Financial difficulties (impulsive spending)</li>
                        <li>• Chronic disorganization</li>
                        <li>• Forgetting important dates/events</li>
                        <li>• Difficulty managing household tasks</li>
                        <li>• Restlessness and constant need for stimulation</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 italic">
                    Adults often develop coping strategies that mask ADHD, but the internal struggle remains exhausting and affects quality of life.
                  </p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Getting an ADHD Diagnosis in Havertown</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Proper ADHD diagnosis is the foundation of effective treatment. At Sunrise Human Care Services, our board-certified psychiatrists conduct comprehensive evaluations to accurately diagnose ADHD and identify any co-existing conditions.
              </p>

              <Card className="p-6 bg-accent/20 border-accent mb-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">The ADHD Evaluation Process</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-foreground">Clinical Interview</h4>
                      <p className="text-sm text-foreground/80">Detailed discussion of symptoms, developmental history, academic/work performance, and how symptoms impact daily functioning.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-foreground">Standardized Rating Scales</h4>
                      <p className="text-sm text-foreground/80">Validated questionnaires completed by patient, parents (for children), and sometimes teachers or spouses to assess symptom severity.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-foreground">Developmental History Review</h4>
                      <p className="text-sm text-foreground/80">ADHD symptoms must be present before age 12. We review childhood report cards, parent recollections, and developmental milestones.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-foreground">Rule Out Other Conditions</h4>
                      <p className="text-sm text-foreground/80">Symptoms overlapping with anxiety, depression, learning disabilities, or sleep disorders must be differentiated from ADHD.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-foreground">Psychological Testing (When Needed)</h4>
                      <p className="text-sm text-foreground/80">Some cases benefit from neuropsychological testing to assess attention, executive function, and identify learning disabilities.</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5 border-primary/30">
                <h3 className="font-semibold mb-2 text-foreground">Insurance and Testing Information</h3>
                <p className="text-sm text-foreground/80 mb-3">
                  Most insurance plans cover psychiatric evaluations for ADHD in Pennsylvania. If psychological testing is recommended, coverage varies by plan. Our staff verifies benefits before testing to ensure no surprises.
                </p>
                <p className="text-sm text-foreground/80">
                  For school-age children, we can coordinate with Haverford Township schools to access free educational testing through IEP or 504 plan evaluations.
                </p>
              </Card>

              <div className="mt-6">
                <Link to="/psychiatric-evaluations-havertown-pa">
                  <Button>Schedule ADHD Evaluation</Button>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">ADHD Treatment Options at Sunrise Human Care Services</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Effective ADHD treatment typically involves a multimodal approach combining medication, therapy, and practical support strategies. Our team creates personalized treatment plans based on age, symptom severity, and individual circumstances.
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center text-foreground">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                    Behavioral Therapy and Coaching
                  </h3>
                  <p className="mb-4 text-foreground/90">
                    Therapy helps children and adults develop practical skills to manage ADHD symptoms. Our therapists specialize in:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-1 text-foreground">Behavioral Parent Training (for children)</h4>
                      <p className="text-sm text-foreground/80">Parents learn strategies to reinforce positive behaviors, set clear expectations, implement consistent consequences, and create structured routines that help children with ADHD succeed.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1 text-foreground">Cognitive Behavioral Therapy (for teens/adults)</h4>
                      <p className="text-sm text-foreground/80">CBT addresses negative thought patterns, procrastination, time management challenges, and emotional regulation problems common in ADHD.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1 text-foreground">Executive Function Coaching</h4>
                      <p className="text-sm text-foreground/80">Learn practical systems for organization, planning, prioritization, and follow-through. Topics include time management tools, breaking tasks into steps, and overcoming analysis paralysis.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1 text-foreground">Social Skills Training (for children)</h4>
                      <p className="text-sm text-foreground/80">Many children with ADHD struggle socially due to impulsivity. We teach turn-taking, reading social cues, managing frustration, and building friendships.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">ADHD Medication Management</h3>
                  <p className="mb-4 text-foreground/90">
                    Medication is often the most effective treatment for moderate to severe ADHD. Our psychiatrists at Sunrise Human Care Services have extensive experience with ADHD medications and stay current with the latest research.
                  </p>
                  
                  <div className="space-y-4 mb-4">
                    <div className="bg-accent/20 border border-accent rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-foreground">Stimulant Medications (First-Line Treatment)</h4>
                      <p className="text-sm text-foreground/80 mb-2">
                        Stimulants like methylphenidate (Ritalin, Concerta) and amphetamines (Adderall, Vyvanse) are 70-80% effective for ADHD. They work by increasing dopamine and norepinephrine in the brain, improving focus and impulse control.
                      </p>
                      <ul className="text-sm space-y-1 text-foreground/80">
                        <li>• <strong>Short-acting:</strong> Effects last 4-6 hours (Ritalin, Adderall IR)</li>
                        <li>• <strong>Long-acting:</strong> Effects last 8-12 hours (Concerta, Vyvanse, Adderall XR)</li>
                        <li>• Benefits often noticed within 30-60 minutes</li>
                        <li>• Side effects typically mild: decreased appetite, difficulty sleeping, headaches</li>
                      </ul>
                    </div>

                    <div className="bg-accent/20 border border-accent rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-foreground">Non-Stimulant Medications</h4>
                      <p className="text-sm text-foreground/80 mb-2">
                        For patients who don't respond to stimulants, have concerning side effects, or have co-existing conditions:
                      </p>
                      <ul className="text-sm space-y-1 text-foreground/80">
                        <li>• <strong>Atomoxetine (Strattera):</strong> Non-stimulant SNRI, takes 2-4 weeks to work</li>
                        <li>• <strong>Guanfacine (Intuniv):</strong> Helps with hyperactivity and emotional regulation</li>
                        <li>• <strong>Clonidine (Kapvay):</strong> Useful when sleep problems are prominent</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm text-foreground/70 italic mb-4">
                    Medication choice depends on symptom profile, co-existing conditions, side effect concerns, and insurance coverage. Our psychiatrists carefully titrate doses and schedule regular follow-ups to optimize treatment.
                  </p>

                  <Link to="/medication-management-havertown-pa">
                    <Button variant="outline">Learn About Medication Management</Button>
                  </Link>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">School and Workplace Accommodations Support</h3>
                  <p className="mb-3 text-foreground/90">
                    Legal accommodations can level the playing field for individuals with ADHD. We help families navigate:
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-1 text-foreground">504 Plans and IEPs</h4>
                      <p className="text-sm text-foreground/80">We provide documentation and recommendations for school accommodations like extended time on tests, preferential seating, frequent breaks, and modified homework assignments.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1 text-foreground">College Accommodations</h4>
                      <p className="text-sm text-foreground/80">Students transitioning to college need updated documentation for disability services offices. We help local students prepare for success at college.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1 text-foreground">Workplace Accommodations (ADA)</h4>
                      <p className="text-sm text-foreground/80">Adults with ADHD may qualify for workplace accommodations under the Americans with Disabilities Act, such as flexible schedules, written instructions, or modified work environments.</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-6">
                <Link to="/adhd-treatment-havertown-pa">
                  <Button>Explore Comprehensive ADHD Treatment</Button>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Supporting ADHD Students in Delaware County Schools</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Haverford Township School District and other Delaware County schools are required to provide accommodations for students with ADHD under federal law. Here's what parents need to know:
              </p>

              <Card className="p-6 bg-primary/5 border-primary/30">
                <h3 className="font-semibold mb-4 text-foreground">Understanding IEP vs. 504 Plans</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-foreground">504 Plan (More Common for ADHD)</h4>
                    <ul className="text-sm space-y-1 text-foreground/80">
                      <li>• Provides accommodations in regular classroom</li>
                      <li>• Examples: extended time, preferential seating, breaks</li>
                      <li>• Easier to qualify for than IEP</li>
                      <li>• Covers students who can access general curriculum</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-foreground">IEP (For More Severe Impact)</h4>
                    <ul className="text-sm space-y-1 text-foreground/80">
                      <li>• Includes specialized instruction and services</li>
                      <li>• For students whose ADHD significantly impacts learning</li>
                      <li>• May include resource room support</li>
                      <li>• Legally binding with specific goals</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 italic mt-3">
                  We provide the medical documentation schools require and can participate in team meetings to advocate for appropriate accommodations.
                </p>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Living Well with ADHD: Lifestyle Strategies</h2>
              <p className="mb-6 text-foreground/90 leading-relaxed">
                Medication and therapy work best when combined with ADHD-friendly lifestyle habits. Our team teaches Delaware County families these practical strategies:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">Structure and Routines</h4>
                  <p className="text-sm text-foreground/80">Consistent daily schedules reduce ADHD's impact. Use visual schedules for children, digital reminders for adults, and routines for morning and bedtime.</p>
                </Card>
                <Card className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">Organization Systems</h4>
                  <p className="text-sm text-foreground/80">Minimize visual clutter, use color-coding, keep one central calendar, and designate specific places for keys, phone, wallet, backpack.</p>
                </Card>
                <Card className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">Exercise and Movement</h4>
                  <p className="text-sm text-foreground/80">Physical activity improves focus and reduces hyperactivity. Delaware County parks and recreation programs offer great options for active families.</p>
                </Card>
                <Card className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">Sleep Hygiene</h4>
                  <p className="text-sm text-foreground/80">ADHD and sleep problems often coexist. Consistent bedtimes, screen-free wind-down, and sometimes melatonin can help.</p>
                </Card>
                <Card className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">Technology Tools</h4>
                  <p className="text-sm text-foreground/80">Apps for time management (Forest, Habitica), organization (Todoist, Google Keep), and focus (Freedom, Cold Turkey) leverage ADHD hyperfocus positively.</p>
                </Card>
                <Card className="p-5">
                  <h4 className="font-semibold mb-2 text-foreground">Nutrition</h4>
                  <p className="text-sm text-foreground/80">Protein-rich breakfast, regular meals/snacks, limiting sugar spikes, and omega-3 supplements may support ADHD management.</p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">What are the signs of ADHD in adults?</AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    Adult ADHD signs include difficulty focusing, disorganization, forgetfulness, impulsivity, trouble completing tasks, time management problems, and relationship difficulties. Many adults aren't diagnosed until adulthood when work or relationship demands increase.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">How is ADHD diagnosed in Havertown?</AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    ADHD diagnosis involves a comprehensive psychiatric evaluation including clinical interviews, symptom rating scales, review of developmental history, and sometimes psychological testing. Contact Sunrise Human Care Services at (814) 620-2162 for evaluation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Is ADHD medication safe for children?</AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    When prescribed and monitored by a qualified psychiatrist, ADHD medications are safe and effective for children. Stimulant medications have decades of research supporting their safety and effectiveness. Our psychiatrists closely monitor children on medication.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section className="mb-12">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <h2 className="text-2xl font-bold mb-4 text-center text-foreground">Get Expert ADHD Care in Havertown</h2>
                <p className="text-center mb-6 text-foreground/80">
                  Whether for yourself or your child, comprehensive ADHD treatment can be life-changing. We're accepting new patients.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link to="/appointment">
                    <Button size="lg" className="w-full sm:w-auto">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule ADHD Evaluation
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
                  Comprehensive evaluations • Evidence-based treatment • All ages welcome
                </p>
              </Card>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/blog/finding-therapist-havertown-pa-guide">
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold mb-2 text-foreground">Finding the Right Therapist in Havertown</h4>
                    <p className="text-sm text-foreground/70">Guide to choosing mental health care for you or your child.</p>
                  </Card>
                </Link>
                <Link to="/blog/family-therapy-havertown-pa-strengthening-relationships">
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold mb-2 text-foreground">Family Therapy: Strengthening Relationships</h4>
                    <p className="text-sm text-foreground/70">How family counseling supports children with ADHD.</p>
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

export default ADHDTreatmentHavertown;