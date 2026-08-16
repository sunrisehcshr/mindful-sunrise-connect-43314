import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import SleepDisordersClient from './SleepDisordersClient';

export const metadata: Metadata = createPageMetadata({
  title: "Sleep Disorders Treatment in Darby, PA | No Waitlist | Sunr…",
  description: "Effective sleep disorder treatment in Darby, PA. Specialized care for insomnia and circadian rhythm disorders. 100% Medicaid accepted. No waitlist.",
  path: "/sleep-disorders-treatment-darby-pa",
  keywords: ["sleep disorders treatment Darby PA", "insomnia therapy Delaware County", "sleep anxiety help", "CBT-I near me", "hypersomnia treatment PA", "circadian rhythm sleep disorder", "Medicaid sleep therapy PA"],
});

export default function SleepDisordersTreatmentPage() {
  const sleepFAQs = [
    {
      question: "How do I know if I have a sleep disorder?",
      answer: "Occasional restless nights are normal. However, if you consistently have trouble falling or staying asleep for more than a month, or if sleep issues affect your mood and focus, it is time for a professional evaluation."
    },
    {
      question: "What is CBT-I and how does it work?",
      answer: "Cognitive Behavioral Therapy for Insomnia (CBT-I) is the gold standard treatment. It addresses the underlying thoughts and behaviors that ruin sleep, retraining your brain to sleep without relying on temporary fixes."
    },
    {
      question: "Do I have to take sleeping pills?",
      answer: "Not necessarily. While medication can be a helpful short-term tool, we prioritize long-term, sustainable sleep through behavioral interventions like CBT-I and non-habit-forming medications when necessary."
    },
    {
      question: "Can mental health issues cause sleep disorders?",
      answer: "Absolutely. Conditions like Anxiety, Depression, and PTSD frequently cause insomnia or hypersomnia. Conversely, chronic sleep deprivation can worsen mental health. We treat both simultaneously for the best results."
    },
    {
      question: "Do you accept Medicaid for sleep disorder treatment?",
      answer: "Yes, we exclusively accept Medicaid and Medical Assistance. We provide expert psychiatric care for sleep disorders with no waitlist to help you get the rest you need."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Conditions We Treat", url: "/conditions" },
    { name: "Sleep Disorders Treatment", url: "/sleep-disorders-treatment-darby-pa" }
  ];

  const serviceData = {
    name: "Sleep Disorders Treatment in Darby, PA",
    description: "Evidence-based psychiatric treatment for Insomnia, Hypersomnia, and Circadian Rhythm Disorders in Darby, PA. Specialized care with no waitlist and Medicaid acceptance.",
    serviceType: "Sleep Disorder Treatment"
  };

  <h1 className="sr-only">sleep disorders treatment darby pa</h1>
return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={sleepFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <SleepDisordersClient />
    </>
  );
}
