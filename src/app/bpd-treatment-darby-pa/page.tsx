import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import BPDClient from './BPDClient';

export const metadata: Metadata = createPageMetadata({
  title: "BPD Treatment in Darby, PA | No Waitlist | Sunrise",
  description: "Specialized Borderline Personality Disorder (BPD) treatment in Darby, PA. Expert therapy for emotional dysregulation. 100% Medicaid accepted. No waitlist.",
  path: "/bpd-treatment-darby-pa",
  keywords: ["BPD treatment Darby PA", "borderline personality disorder therapy Delaware County", "DBT therapy near me", "emotional dysregulation treatment", "BPD specialist PA", "Medicaid BPD therapy PA"],
});

export default function BPDTreatmentPage() {
  const bpdFAQs = [
    {
      question: "Is Borderline Personality Disorder (BPD) treatable?",
      answer: "Yes. Modern therapies—specifically Dialectical Behavior Therapy (DBT)—have proven to be incredibly effective. With committed treatment, many individuals experience a significant reduction in symptoms and build stable relationships."
    },
    {
      question: "How is BPD different from Bipolar Disorder?",
      answer: "Bipolar mood swings last for days or weeks and often happen independently of external events. BPD mood swings are highly reactive to environmental triggers and can shift multiple times within a single day."
    },
    {
      question: "What is 'splitting' in BPD?",
      answer: "Splitting is a common defense mechanism where an individual views people or situations in extreme black-and-white terms. Therapy helps build 'gray area' thinking to stabilize relationships and self-image."
    },
    {
      question: "Is medication used to treat BPD?",
      answer: "While there's no medication for BPD itself, psychiatric medication is frequently used to manage co-occurring symptoms like severe anxiety or depression. The core treatment is always long-term psychotherapy."
    },
    {
      question: "Does BPD stem from childhood trauma?",
      answer: "In many cases, yes. Many individuals with BPD experienced childhood trauma or invalidating environments. However, genetics and brain structure also play a significant role in the development of the condition."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Conditions We Treat", url: "/conditions" },
    { name: "BPD Treatment", url: "/bpd-treatment-darby-pa" }
  ];

  const serviceData = {
    name: "BPD Treatment in Darby, PA",
    description: "Specialized therapy and psychiatric support for Borderline Personality Disorder in Darby, PA. Expert care with no waitlist and Medicaid acceptance.",
    serviceType: "BPD Treatment"
  };

  <h1 className="sr-only">bpd treatment darby pa</h1>
return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={bpdFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <BPDClient />
    </>
  );
}
