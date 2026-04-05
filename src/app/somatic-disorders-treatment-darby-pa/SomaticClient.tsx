"use client";

import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SEOHead from '@/components/SEOHead';

export default function SomaticDisordersTherapyPage() {
  const pageData = {
    title: "Somatic Symptom Disorders Treatment in Darby, PA",
    description: "Specialized treatment for somatic symptom disorders and related conditions in Darby, PA.",
    pageTitle: "Somatic Symptom Disorders Treatment | Sunrise Human Care Services",
    metaDescription: "Specialized treatment for somatic symptom disorders in Darby, PA. Mind-body approaches to reduce symptom distress and improve functioning.",
    serviceType: "Somatic Symptom Disorders Treatment",
    canonicalUrl: "/somatic-disorders-treatment-darby-pa",
    benefits: ["Comprehensive biopsychosocial assessment", "Cognitive-behavioral therapy for somatic symptoms", "Mind-body techniques and somatic awareness", "Stress reduction and relaxation training", "Coping skills for physical discomfort", "Communication strategies with healthcare providers", "Functional improvement focus"],
    approaches: [{
      title: "Understanding Somatic Symptom Disorders",
      description: "Somatic symptom disorders involve physical symptoms that cause significant distress and disruption to daily functioning. These conditions are characterized by excessive thoughts, feelings, and behaviors related to physical symptoms, regardless of whether a medical cause can be identified. The physical symptoms are real and not intentionally produced, though psychological factors play an important role in how they're experienced and managed."
    }, {
      title: "Our Approach to Somatic Symptom Disorders",
      description: "At Sunrise Human Care Services, we provide specialized treatment for somatic symptom disorders that addresses the complex interaction between physical experiences and psychological processes. Our approach validates the reality of physical symptoms while helping clients develop more adaptive ways of understanding and responding to bodily sensations. We work collaboratively with medical providers to ensure comprehensive care."
    }, {
      title: "Evidence-Based Treatment Methods",
      description: "Our treatment utilizes cognitive-behavioral therapy specifically adapted for somatic symptoms, along with mindfulness-based interventions and acceptance-based approaches. These methods help reduce symptom-related distress, correct misinterpretations of bodily sensations, decrease hypervigilance to physical symptoms, and develop more effective coping strategies."
    }, {
      title: "Mind-Body Connection",
      description: "Understanding the connection between mind and body is essential in treating somatic symptom disorders. We help clients recognize how thoughts, emotions, behaviors, and physical sensations interact and influence each other. Through various techniques, clients learn to regulate their nervous system, reduce physiological arousal, and process emotions in healthier ways."
    }, {
      title: "Your Path to Improved Quality of Life",
      description: "Living with persistent physical symptoms can be challenging and isolating. Our goal is to help you reduce symptom-related distress, improve daily functioning, and enhance your quality of life. With appropriate treatment, individuals with somatic symptom disorders can experience meaningful improvements in both physical comfort and emotional well-being."
    }],
    faqs: [{
      question: "Are somatic symptoms 'all in my head'?",
      answer: "No, somatic symptoms are real physical experiences, not imagined or fabricated. The pain, fatigue, or other physical sensations you feel are genuine. Somatic symptom disorders involve how the brain processes and responds to physical sensations, not whether the sensations exist. Our approach validates your physical experience while addressing psychological factors that may be intensifying symptoms."
    }, {
      question: "How is psychological treatment helpful for physical symptoms?",
      answer: "Psychological treatment helps by addressing how you interpret, respond to, and cope with physical symptoms. It can reduce symptom-related anxiety, break cycles of symptom focusing and avoidance, develop skills for managing discomfort, address emotional factors that may exacerbate symptoms, and improve overall functioning despite persistent symptoms."
    }, {
      question: "Will I still need medical care while in therapy for somatic symptoms?",
      answer: "Yes, continuing appropriate medical care is important. We work collaboratively with your healthcare providers to ensure comprehensive care. Psychological treatment for somatic symptoms complements rather than replaces medical care. We can help you communicate effectively with medical providers and make informed decisions about your health care."
    }],
    relatedServices: [{
      title: "Anxiety Therapy",
      url: "/anxiety-therapy-darby-pa"
    }, {
      title: "Depression Therapy",
      url: "/depression-therapy-darby-pa"
    }, {
      title: "Trauma & PTSD Therapy",
      url: "/ptsd-therapy-darby-pa"
    }]
  };

  return (
    <>
      <SEOHead 
        title={pageData.pageTitle} 
        description={pageData.metaDescription} 
        canonicalUrl={`https://sunrisehumancare.com${pageData.canonicalUrl}`} 
      />
      <ServicePageLayout 
        title={pageData.title} 
        description={pageData.description} 
        serviceType={pageData.serviceType} 
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
                  Our Approach to Somatic Symptom Disorders
                </h2>
                
                <div className="space-y-4 text-stone-600 font-barlow text-lg leading-relaxed">
                  <p>
                    At Sunrise Human Care Services in Darby, PA, we provide specialized treatment for individuals experiencing persistent physical symptoms that cause significant distress and impairment. Our approach begins with a comprehensive biopsychosocial assessment to understand your specific symptoms, health history, and the impact of symptoms on your daily life.
                  </p>
                  
                  <p>
                    We recognize that your physical symptoms are real, regardless of whether a clear medical explanation has been found. Our treatment validates your experience while helping you develop more effective ways to understand and respond to bodily sensations.
                  </p>
                  
                  <p>
                    Using cognitive-behavioral therapy adapted specifically for somatic symptoms (CBT-SS), we help you identify and modify thought patterns and behaviors that may be intensifying your symptoms or contributing to functional impairment. This includes addressing catastrophic interpretations of bodily sensations, reducing hypervigilance to physical symptoms, and decreasing avoidance behaviors.
                  </p>
                  
                  <p>
                    Our mind-body approach also incorporates relaxation training, mindfulness practices, and emotional awareness techniques that help regulate the nervous system and process emotions that may be expressed through physical symptoms.
                  </p>
                </div>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:border-amber-200 transition duration-300">
                <h3 className="text-xl font-bold mb-6 text-stone-800 font-barlow">
                  Our Somatic Disorders Treatment Helps With:
                </h3>
                
                <ul className="space-y-4">
                  {[
                    "Somatic symptom disorder",
                    "Illness anxiety disorder (health anxiety)",
                    "Conversion disorder (functional neurological symptom disorder)",
                    "Psychological factors affecting medical conditions",
                    "Chronic pain management support",
                    "Persistent fatigue and physical distress",
                    "Medically unexplained physical symptoms",
                    "Coping with chronic illness"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-stone-700 font-barlow font-medium">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-stone-100">
                  <Link href="/appointment" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-barlow font-bold py-3 px-6 rounded-full transition w-full justify-center">
                    Request a Specialized Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ServicePageLayout>
    </>
  );
}
