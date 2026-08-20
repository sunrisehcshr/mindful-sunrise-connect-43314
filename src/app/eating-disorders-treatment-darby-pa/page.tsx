import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import EatingDisordersClient from './EatingDisordersClient';

export const metadata: Metadata = createPageMetadata({
  title: "Eating Disorder Treatment in Darby, PA | No Waitlist | Sunr…",
  description: "Specialized psychiatric treatment for anorexia, bulimia, and binge eating in Darby, PA. Compassionate care with 100% Medicaid acceptance. No waitlist.",
  path: "/eating-disorders-treatment-darby-pa",
  keywords: ["eating disorders treatment Darby PA", "anorexia therapy Delaware County", "bulimia treatment near me", "binge eating help PA", "disordered eating recovery", "Medicaid eating disorder therapy PA"],
});

export default function EatingDisordersTreatmentPage() {
  const eatingFAQs = [
    {
      question: "How do I know if I or my loved one has an eating disorder?",
      answer: "Warning signs include a severe preoccupation with weight, food, and body image; restrictive eating; binge eating episodes; purging behaviors; and intense body dissatisfaction that interferes with daily life."
    },
    {
      question: "Do you treat severe Anorexia Nervosa?",
      answer: "We provide outpatient psychiatric care and therapy. Severe cases may require medical stabilization or inpatient care. We conduct thorough assessments to determine the appropriate level of care for each individual."
    },
    {
      question: "Can medication help with eating disorders?",
      answer: "Yes, medication can be an important component, particularly for Binge Eating Disorder or Bulimia, and to treat co-occurring conditions like Depression, Anxiety, or OCD that frequently accompany eating disorders."
    },
    {
      question: "How long does eating disorder treatment take?",
      answer: "Recovery is typically a gradual, long-term process. It requires consistency and patience. Many people require several months to years of support to achieve full, sustainable recovery and a healthy relationship with food."
    },
    {
      question: "Is full recovery from an eating disorder possible?",
      answer: "Absolutely. Many people achieve full recovery with the right professional support. Recovery involves normalizing eating behaviors, addressing underlying emotional pain, and changing how you value your body."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Conditions We Treat", url: "/conditions" },
    { name: "Eating Disorders Treatment", url: "/eating-disorders-treatment-darby-pa" }
  ];

  const serviceData = {
    name: "Eating Disorder Treatment in Darby, PA",
    description: "Specialized psychiatric treatment for Anorexia, Bulimia, Binge Eating Disorder, and Disordered Eating in Darby, PA. Expert care with no waitlist and Medicaid acceptance.",
    serviceType: "Eating Disorder Treatment"
  };

  return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={eatingFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <EatingDisordersClient />
    </>
  );
}
