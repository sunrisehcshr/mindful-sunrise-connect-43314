import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import SchizophreniaClient from './SchizophreniaClient';

export const metadata: Metadata = createPageMetadata({
  title: "Schizophrenia Treatment in Darby, PA | No Waitlist | Sunrise",
  description: "Expert psychiatric care and schizophrenia treatment in Darby, PA. Specialized medication management for psychosis. 100% Medicaid accepted. No waitlist.",
  path: "/schizophrenia-treatment-darby-pa",
  keywords: ["schizophrenia treatment Darby PA", "psychosis therapy Delaware County", "psychiatric care near me", "hallucination treatment", "antipsychotic medication management", "Medicaid schizophrenia therapy PA"],
});

export default function SchizophreniaTreatmentPage() {
  const schizophreniaFAQs = [
    {
      question: "Is schizophrenia treatable?",
      answer: "Yes. While schizophrenia is a chronic condition, it is highly treatable. With the right combination of antipsychotic medication, therapy, and social support, many individuals lead independent, fulfilling lives."
    },
    {
      question: "Does schizophrenia mean having multiple personalities?",
      answer: "No. This is a common misconception. Schizophrenia refers to a split from reality (psychosis), not a split into multiple personalities. Dissociative Identity Disorder (DID) is a completely separate condition."
    },
    {
      question: "Will someone with schizophrenia need to take medication forever?",
      answer: "In most cases, long-term medication is necessary to prevent relapse and maintain neurochemical balance. Abruptly stopping medication often leads to a severe return of symptoms."
    },
    {
      question: "How can family members help someone with schizophrenia?",
      answer: "Family support is a strong predictor of recovery. Families should educate themselves, help with medication adherence, maintain a low-stress environment, and participate in family therapy."
    },
    {
      question: "What causes schizophrenia?",
      answer: "It is believed to be a combination of genetics, brain chemistry (dopamine dysregulation), and environmental factors. Severe stress or substance use can trigger onset in predisposed individuals."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Conditions We Treat", url: "/conditions" },
    { name: "Schizophrenia Treatment", url: "/schizophrenia-treatment-darby-pa" }
  ];

  const serviceData = {
    name: "Schizophrenia Treatment in Darby, PA",
    description: "Expert psychiatric evaluation and medication management for schizophrenia and psychotic disorders in Darby, PA. Specialized care with no waitlist and Medicaid acceptance.",
    serviceType: "Schizophrenia Treatment"
  };

  return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={schizophreniaFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <SchizophreniaClient />
    </>
  );
}
