import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import BipolarClient from './BipolarClient';

export const metadata: Metadata = createPageMetadata({
  title: "Bipolar Disorder Treatment in Darby, PA | No Waitlist | Sun…",
  description: "Specialized bipolar disorder treatment in Darby, PA. Expert medication management and therapy for Bipolar I, Bipolar II, and Cyclothymia. Medicaid accepte…",
  path: "/bipolar-disorder-therapy-darby-pa",
  keywords: ["bipolar disorder treatment Darby PA", "bipolar therapy Delaware County", "manic depression help", "bipolar 1 treatment", "bipolar 2 therapy near me", "Medicaid bipolar therapy PA"],
});

export default function BipolarTreatmentPage() {
  const bipolarFAQs = [
    {
      question: "What is the difference between Bipolar I and Bipolar II?",
      answer: "Bipolar I Disorder involves severe manic episodes that last at least 7 days or require hospitalization. Bipolar II Disorder involves less severe manic periods (hypomania) alternating with deep depressive episodes."
    },
    {
      question: "Is medication always necessary to treat bipolar disorder?",
      answer: "For the vast majority of individuals, yes. Bipolar disorder is deeply rooted in brain chemistry. Mood stabilizers or antipsychotic medications are typically the cornerstone of treatment to prevent extreme highs and lows."
    },
    {
      question: "Can bipolar disorder be cured?",
      answer: "Bipolar disorder is a lifelong, chronic condition. While it cannot be permanently 'cured', it is highly treatable. With a consistent, customized treatment plan, most people achieve long-term mood stability."
    },
    {
      question: "What should family members know about supporting someone with bipolar disorder?",
      answer: "Family support is crucial. Family members should learn to recognize early warning signs of episodes, encourage treatment adherence, and help maintain a calm environment with regular sleep schedules."
    },
    {
      question: "Is bipolar disorder genetic?",
      answer: "Yes, bipolar disorder has one of the strongest genetic links of all psychiatric conditions. If you have a first-degree relative with bipolar disorder, your risk is significantly higher."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Conditions We Treat", url: "/conditions" },
    { name: "Bipolar Disorder Treatment", url: "/bipolar-disorder-therapy-darby-pa" }
  ];

  const serviceData = {
    name: "Bipolar Disorder Treatment in Darby, PA",
    description: "Evidence-based assessment, medication management, and therapy for Bipolar I, Bipolar II, and Cyclothymic Disorder in Darby, PA. Specialized care with no waitlist and Medicaid acceptance.",
    serviceType: "Bipolar Disorder Treatment"
  };

  <h1 className="sr-only">bipolar disorder therapy darby pa</h1>
return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={bipolarFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <BipolarClient />
    </>
  );
}
