"use client";

import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function RelationshipTherapyPage() {
  const pageData = {
    title: "Relationship Therapy in Darby, PA",
    description: "Effective therapy for communication problems, conflict resolution, and rebuilding trust in Darby, PA.",
    pageTitle: "Relationship Therapy | Sunrise Human Care Services",
    metaDescription: "Effective therapy for relationship issues, communication problems, and conflict resolution in Darby, PA.",
    serviceType: "Relationship Therapy",
    canonicalUrl: "/relationship-therapy-darby-pa",
    benefits: ["Assessment of relationship patterns and dynamics", "Communication skills development", "Conflict resolution techniques", "Emotional intimacy building", "Trust repair and reconciliation work", "Boundaries exploration and establishment", "Tools for maintaining relationship health"],
    approaches: [{
      title: "Understanding Relationship Challenges",
      description: "Relationship difficulties are a normal part of human connection, whether in romantic partnerships, friendships, or family relationships. Common challenges include communication breakdowns, recurring conflicts, trust issues, intimacy problems, and difficulty navigating major life transitions together. These issues can cause significant distress but can be effectively addressed through professional relationship therapy."
    }, {
      title: "Our Approach to Relationship Therapy",
      description: "At Sunrise Human Care Services, we provide relationship therapy that helps identify and transform problematic patterns while strengthening positive aspects of your connection. Our approach draws from evidence-based methods including Emotionally Focused Therapy (EFT), the Gottman Method, and narrative therapy. We create a balanced, supportive environment where all parties feel heard and respected."
    }, {
      title: "Communication and Conflict Resolution",
      description: "Effective communication is the foundation of healthy relationships. We help couples and families develop skills for expressing needs and feelings clearly, listening actively, and navigating disagreements constructively. You'll learn to recognize destructive communication patterns and replace them with interactions that build understanding and connection, even during difficult conversations."
    }, {
      title: "Rebuilding Trust and Intimacy",
      description: "When trust has been damaged, relationships require intentional repair work. Our therapists guide couples through the process of rebuilding trust, processing hurt, and moving toward forgiveness at an appropriate pace. We help couples reconnect emotionally and physically, addressing barriers to intimacy while fostering deeper understanding and compassion."
    }, {
      title: "Your Path to a Healthier Relationship",
      description: "Whether you're working to enhance a generally good relationship or heal from significant relationship trauma, our therapists provide the tools, insights, and support needed for positive change. With commitment to the therapeutic process, relationships can become more secure, satisfying, and resilient. We believe in the power of healthy relationships to enhance overall well-being and quality of life."
    }],
    faqs: [{
      question: "How do I know if my relationship would benefit from therapy?",
      answer: "Consider relationship therapy if you're experiencing recurring conflicts that don't get resolved, communication problems, emotional disconnection, trust issues, intimacy concerns, or if you're navigating major life transitions that are straining your relationship. It's best to seek help early rather than waiting until problems become severe."
    }, {
      question: "Does relationship therapy only work for couples on the brink of separation?",
      answer: "No, relationship therapy can benefit relationships at any stage. While it can help relationships in crisis, it's also valuable for relatively healthy relationships that want to enhance communication, deepen connection, or navigate transitions proactively. Many couples use therapy as a relationship wellness tool rather than only as crisis intervention."
    }, {
      question: "How long does relationship therapy typically take?",
      answer: "The duration varies depending on the issues being addressed, the goals for therapy, and how actively partners engage in the process. Some couples attend 10-12 sessions and achieve their goals, while others may benefit from longer-term therapy, especially when addressing complex issues or recovering from significant relationship trauma."
    }],
    relatedServices: [{
      title: "Couples Counseling",
      url: "/couples-counseling-darby-pa"
    }, {
      title: "Family Therapy",
      url: "/family-therapy-darby-pa"
    }, {
      title: "Individual Therapy",
      url: "/individual-therapy-darby-pa"
    }]
  };

  return (
    <ServicePageLayout 
      title={pageData.title} 
      description={pageData.description} 
      pageTitle={pageData.pageTitle} 
      metaDescription={pageData.metaDescription} 
      serviceType={pageData.serviceType} 
      canonicalUrl={pageData.canonicalUrl} 
      benefits={pageData.benefits} 
      approaches={pageData.approaches} 
      faqs={pageData.faqs} 
      relatedServices={pageData.relatedServices}
    >
      <section className="py-16 bg-amber-50/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-barlow text-stone-800 tracking-tight">
                Our Approach to Relationship Therapy
              </h2>
              
              <div className="space-y-4 text-stone-600 font-barlow text-lg leading-relaxed">
                <p>
                  At Sunrise Human Care Services in Darby, PA, we believe that healthy relationships are fundamental to our wellbeing and quality of life. Our approach to relationship therapy draws from evidence-based methods that have been proven effective in helping couples and families create more satisfying connections.
                </p>
                
                <p>
                  We begin with a comprehensive assessment to understand your relationship&apos;s unique dynamics, strengths, challenges, and history. This assessment informs a tailored treatment plan that addresses your specific goals and concerns.
                </p>
                
                <p>
                  Using approaches such as Emotionally Focused Therapy (EFT) and the Gottman Method, we help you identify and transform negative interaction patterns, develop stronger communication skills, resolve conflicts constructively, and deepen emotional intimacy.
                </p>
                
                <p>
                  Our therapists create a balanced environment where all parties feel heard, respected, and supported. We don&apos;t take sides but rather help everyone understand each other&apos;s perspectives and emotional needs, fostering greater empathy and connection.
                </p>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:border-amber-200 transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-stone-800 font-barlow">
                Our Relationship Therapy Helps With:
              </h3>
              
              <ul className="space-y-4">
                {[
                  "Communication breakdowns",
                  "Recurring conflicts and arguments",
                  "Trust issues and rebuilding after betrayal",
                  "Emotional disconnection",
                  "Intimacy concerns",
                  "Navigating major life transitions",
                  "Parenting disagreements",
                  "Extended family conflict"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-stone-700 font-barlow font-medium">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-stone-100">
                <Link href="/appointment" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-barlow font-bold py-3 px-6 rounded-full transition-all w-full justify-center">
                  Request Relationship Support
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
