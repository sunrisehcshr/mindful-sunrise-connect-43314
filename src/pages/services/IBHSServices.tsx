import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Calendar, Shield, Users, Heart, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import SEOHead from '@/components/SEOHead';
import AppointmentSection from '@/components/Appointment/AppointmentSection';

const IBHSServices = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://sunrisehumancare.com", position: 1 },
    { name: "Services", url: "https://sunrisehumancare.com/services", position: 2 },
    { name: "IBHS Services", url: "https://sunrisehumancare.com/ibhs-havertown-pa", position: 3 }
  ];

  return (
    <>
      <SEOHead
        title="IBHS Services in Havertown, PA | Intensive Behavioral Health Services | Sunrise Human Care"
        description="Intensive Behavioral Health Services (IBHS) in Havertown, PA and Delaware County. Evidence-based behavioral therapy for children and adolescents with autism, ADHD, and behavioral challenges. Medicaid accepted."
        canonicalUrl="https://sunrisehumancare.com/ibhs-havertown-pa"
        keywords="IBHS Delaware County PA, intensive behavioral health services Havertown, IBHS near me, ABA therapy Havertown PA, behavioral health children PA, IBHS Medicaid Delaware County, autism services Havertown"
        breadcrumbs={breadcrumbs}
        serviceSchema={{
          name: "Intensive Behavioral Health Services (IBHS)",
          description: "Evidence-based behavioral health interventions for children and adolescents in Havertown, PA and Delaware County.",
          provider: "Sunrise Human Care Services",
          serviceType: "Intensive Behavioral Health Services",
          areaServed: "Havertown, PA and Delaware County"
        }}
      />

      <motion.div
        className="flex flex-col min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/30 to-accent/20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Behavioral Health Services
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Intensive Behavioral Health Services (IBHS) in Havertown, PA
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Comprehensive, evidence-based behavioral health interventions designed to help children and adolescents thrive. Serving families across Delaware County with Medicaid-covered services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a href="tel:+18146202162">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (814) 620-2162
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/appointment">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* What is IBHS */}
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  What Are Intensive Behavioral Health Services?
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Intensive Behavioral Health Services (IBHS) is a Pennsylvania-regulated program that provides individualized, evidence-based behavioral health treatment for children and adolescents under 21. IBHS replaced the former BHRS (Behavioral Health Rehabilitation Services) system to deliver more effective, outcome-driven care.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  At Sunrise Human Care Services in Havertown, PA, our IBHS program is designed to address a wide range of behavioral and emotional challenges, including autism spectrum disorder (ASD), ADHD, anxiety, oppositional defiant disorder, and other behavioral health conditions that impact daily functioning.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our licensed clinicians work closely with families, schools, and other care providers to create comprehensive treatment plans that are tailored to each child's unique needs. Services can be delivered in the home, school, or community settings — wherever the child needs the most support.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Users,
                      title: "Individual Services",
                      description: "One-on-one therapeutic interventions with a Behavior Consultant (BC) or Behavioral Health Technician (BHT) to address specific behavioral goals."
                    },
                    {
                      icon: BookOpen,
                      title: "Evidence-Based Approaches",
                      description: "Applied Behavior Analysis (ABA), Cognitive Behavioral Therapy (CBT), and other evidence-based methodologies tailored to each child."
                    },
                    {
                      icon: Heart,
                      title: "Family Involvement",
                      description: "Parent and caregiver training to reinforce therapeutic strategies at home and support long-term behavioral improvements."
                    },
                    {
                      icon: Shield,
                      title: "Medicaid Covered",
                      description: "IBHS is covered by Pennsylvania Medicaid, ensuring accessible behavioral health care for families across Delaware County."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-5 rounded-xl bg-card border border-border/50">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Who Can Benefit */}
          <section className="py-16 md:py-20 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Who Can Benefit from IBHS in Delaware County?
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  IBHS is designed for children and adolescents (under 21) who are experiencing significant behavioral, emotional, or social challenges that interfere with their daily life, school performance, or family relationships. Common conditions we treat through IBHS include:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Autism Spectrum Disorder (ASD)",
                    "Attention-Deficit/Hyperactivity Disorder (ADHD)",
                    "Oppositional Defiant Disorder (ODD)",
                    "Anxiety Disorders",
                    "Depression & Mood Disorders",
                    "Disruptive Behavior Disorders",
                    "Social Skills Difficulties",
                    "Emotional Regulation Challenges"
                  ].map((condition, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-card">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{condition}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">
                  How to Access IBHS Services
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  To begin IBHS services, a child must have a written order from a licensed prescriber (such as a psychiatrist, pediatrician, or licensed psychologist) and be enrolled in Pennsylvania Medicaid. Our team at Sunrise Human Care Services will guide you through the entire referral and assessment process.
                </p>
                <div className="bg-card p-6 rounded-xl border border-border/50">
                  <h4 className="font-semibold text-foreground mb-3">Getting Started Is Simple:</h4>
                  <ol className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex gap-2"><span className="font-semibold text-primary">1.</span> Contact our office at (814) 620-2162 or schedule online</li>
                    <li className="flex gap-2"><span className="font-semibold text-primary">2.</span> Our team verifies Medicaid eligibility and obtains necessary referrals</li>
                    <li className="flex gap-2"><span className="font-semibold text-primary">3.</span> A comprehensive behavioral assessment is conducted</li>
                    <li className="flex gap-2"><span className="font-semibold text-primary">4.</span> An individualized treatment plan is developed with family input</li>
                    <li className="flex gap-2"><span className="font-semibold text-primary">5.</span> Services begin in the most appropriate setting (home, school, or community)</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Why Choose Sunrise Human Care for IBHS in Havertown?
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  As a trusted behavioral health provider in Delaware County, Sunrise Human Care Services brings a unique combination of clinical expertise, cultural sensitivity, and family-centered care to our IBHS program. Our team includes licensed Behavior Consultants, Board Certified Behavior Analysts (BCBAs), and trained Behavioral Health Technicians who are dedicated to helping children reach their full potential.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Licensed and experienced IBHS clinical team serving Havertown and all of Delaware County",
                    "Culturally responsive care for diverse families in our community",
                    "Flexible service delivery in home, school, and community settings",
                    "Regular progress monitoring with data-driven treatment adjustments",
                    "Strong collaboration with schools, pediatricians, and other providers",
                    "Medicaid accepted — no out-of-pocket costs for eligible families"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-sm">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a href="tel:+18146202162">
                      <Phone className="mr-2 h-5 w-5" />
                      Call to Get Started
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/services">
                      View All Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <AppointmentSection />
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default IBHSServices;
