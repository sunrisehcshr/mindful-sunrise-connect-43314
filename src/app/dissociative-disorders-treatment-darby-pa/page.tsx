import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import DissociativeDisordersClient from './DissociativeDisordersClient';

export const metadata: Metadata = createPageMetadata({
  title: "Dissociative Disorders Treatment in Darby, PA | No Waitlist",
  description: "Specialized psychiatric treatment for dissociative disorders, DID, depersonalization, and derealization in Darby, PA. 100% Medicaid accepted. No waitlist.",
  path: "/dissociative-disorders-treatment-darby-pa",
  keywords: ["dissociative disorders treatment Darby PA", "DID therapy Delaware County", "depersonalization help PA", "trauma dissociation counseling", "derealization treatment", "Medicaid dissociative therapy PA"],
});

export default function DissociativeDisordersTreatmentPage() {
  const dissociativeFAQs = [
    {
      question: "Is dissociation the same as having multiple personalities?",
      answer: "Dissociation exists on a spectrum. While Dissociative Identity Disorder involves distinct identity states, many experience milder forms like depersonalization (feeling detached from oneself) or derealization (feeling the world is unreal)."
    },
    {
      question: "How long does treatment for dissociative disorders take?",
      answer: "Treatment is typically longer-term, often lasting several years for complex cases like DID. We focus first on stabilization and safety before addressing deeper traumatic material at your own pace."
    },
    {
      question: "Can medication cure dissociative disorders?",
      answer: "There's no specific medication to cure dissociation. However, psychiatric medications are highly effective in treating the severe anxiety, depression, or sleep disturbances that often accompany these disorders."
    },
    {
      question: "What causes dissociative disorders?",
      answer: "These disorders usually develop as a psychological response to severe, chronic childhood trauma. Dissociation serves as a survival mechanism, allowing the mind to detach from an overwhelmingly painful reality."
    },
    {
      question: "Do you accept Medicaid for dissociative disorders?",
      answer: "Yes, we exclusively accept Medicaid and Medical Assistance. We provide specialized trauma-informed care with no waitlist to ensure you get the support you need."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Conditions We Treat", url: "/conditions" },
    { name: "Dissociative Disorders Treatment", url: "/dissociative-disorders-treatment-darby-pa" }
  ];

  const serviceData = {
    name: "Dissociative Disorders Treatment in Darby, PA",
    description: "Evidence-based, trauma-informed therapy and psychiatric support for Dissociative Disorders in Darby, PA. Specialized care with no waitlist and Medicaid acceptance.",
    serviceType: "Dissociative Disorder Treatment"
  };

  <h1 className="sr-only">dissociative disorders treatment darby pa</h1>
return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={dissociativeFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <DissociativeDisordersClient />
    </>
  );
}
