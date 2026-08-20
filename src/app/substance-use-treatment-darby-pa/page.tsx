import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import SubstanceUseClient from './SubstanceUseClient';

export const metadata: Metadata = createPageMetadata({
  title: "Substance Use Treatment in Darby, PA | Addiction Therapy |…",
  description: "Evidence-based substance use treatment in Darby, PA. Compassionate therapy for addiction and dual diagnosis. 100% Medicaid accepted. No waitlist.",
  path: "/substance-use-treatment-darby-pa",
  keywords: ["substance use treatment Darby PA", "addiction therapy Delaware County", "dual diagnosis PA", "alcohol counseling near me", "drug recovery support", "Medicaid addiction therapy PA"],
});

export default function SubstanceUseTreatmentPage() {
  const substanceFAQs = [
    {
      question: "What is a Dual Diagnosis?",
      answer: "A dual diagnosis (or co-occurring disorder) occurs when a person has both a substance use disorder and a mental health condition (like Depression, Anxiety, or PTSD) simultaneously. Effective treatment must address both conditions together."
    },
    {
      question: "Do I need residential rehab or can I do outpatient therapy?",
      answer: "It depends on the severity. Outpatient therapy is highly effective for many, allowing them to maintain work and family life. If medical detox is required, we coordinate referrals to appropriate inpatient facilities first."
    },
    {
      question: "Can psychiatric medication help with substance use?",
      answer: "Yes. Medication-Assisted Treatment (MAT) can be crucial for certain disorders. Additionally, treating underlying psychiatric conditions often reduces the urge to self-medicate with drugs or alcohol."
    },
    {
      question: "What happens if I relapse?",
      answer: "We view relapse as a symptom of a chronic condition, not a failure. If it occurs, we provide non-judgmental support to understand the trigger, adjust your treatment plan, and strengthen your coping skills."
    },
    {
      question: "Do you accept Medicaid for addiction therapy?",
      answer: "Yes, we exclusively accept Medicaid and Medical Assistance. We provide professional substance use treatment with no waitlist to help you start your recovery journey today."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Conditions We Treat", url: "/conditions" },
    { name: "Substance Use Treatment", url: "/substance-use-treatment-darby-pa" }
  ];

  const serviceData = {
    name: "Substance Use Treatment in Darby, PA",
    description: "Evidence-based therapy and psychiatric support for Substance Use Disorders, Addiction Recovery, and Dual Diagnosis in Darby, PA. Specialized care with no waitlist and Medicaid acceptance.",
    serviceType: "Substance Use Treatment"
  };

  return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={substanceFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <SubstanceUseClient />
    </>
  );
}
