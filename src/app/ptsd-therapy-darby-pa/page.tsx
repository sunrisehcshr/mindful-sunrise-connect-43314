import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import PTSDClient from './PTSDClient';

export const metadata: Metadata = createPageMetadata({
  title: "Trauma & PTSD Treatment in Darby, PA | No Waitlist | Sunrise",
  description: "Expert trauma and PTSD treatment in Darby, PA. Specialized care including EMDR and TF-CBT for C-PTSD. Medicaid accepted. No waitlist. Call (814) 620-2162.",
  path: "/ptsd-therapy-darby-pa",
  keywords: ["PTSD treatment Darby PA", "trauma therapy Delaware County", "EMDR therapist near me", "complex PTSD treatment", "CPTSD therapy PA", "trauma recovery", "Medicaid PTSD therapy PA"],
});

export default function PTSDTreatmentPage() {
  const ptsdFAQs = [
    {
      question: "Do I have to talk about my trauma in detail?",
      answer: "Not necessarily. While traditional talk therapy involves discussing the event, specialized trauma therapies like EMDR often require very little verbal description of the traumatic event. We prioritize your safety and pace."
    },
    {
      question: "Can you get PTSD from something that isn't military combat?",
      answer: "Absolutely. PTSD can develop after any event where you felt your life or safety was in danger, including car accidents, domestic abuse, medical trauma, or the sudden loss of a loved one."
    },
    {
      question: "What is the difference between PTSD and C-PTSD?",
      answer: "PTSD typically stems from a single traumatic event, while Complex PTSD (C-PTSD) results from repeated or prolonged trauma, often in childhood or long-term relationships. Both are highly treatable with our specialized trauma-informed care."
    },
    {
      question: "How long does trauma therapy take?",
      answer: "The timeline for trauma recovery is unique to each individual. Some clients see significant symptom reduction in 8-12 sessions of targeted therapy like EMDR, while others benefit from longer-term support for complex trauma."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Conditions We Treat", url: "/conditions" },
    { name: "PTSD & Trauma Treatment", url: "/ptsd-therapy-darby-pa" }
  ];

  const serviceData = {
    name: "Trauma & PTSD Treatment in Darby, PA",
    description: "Specialized trauma-informed care for PTSD and Complex PTSD in Darby, PA. Evidence-based treatments with no waitlist and Medicaid acceptance.",
    serviceType: "PTSD Treatment"
  };

return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={ptsdFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <PTSDClient />
    </>
  );
}
