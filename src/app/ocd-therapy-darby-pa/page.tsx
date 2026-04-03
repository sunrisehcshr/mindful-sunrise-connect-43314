import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import OCDClient from './OCDClient';

export const metadata: Metadata = createPageMetadata({
  title: "OCD Treatment in Darby, PA | ERP Therapy | No Waitlist",
  description: "Specialized OCD therapy in Darby, PA. Evidence-based ERP (Exposure and Response Prevention) and psychiatric medication management. Medicaid accepted. No waitlist.",
  path: "/ocd-therapy-darby-pa",
  keywords: ["OCD treatment Darby PA", "ERP therapy Delaware County", "intrusive thoughts help", "compulsion reduction therapy", "OCD specialist near me", "contamination OCD treatment", "Medicaid OCD therapy"],
});

export default function OCDTreatmentPage() {
  const ocdFAQs = [
    {
      question: "How is OCD different from being a perfectionist or liking things organized?",
      answer: "While perfectionism involves high standards, OCD involves unwanted, intrusive thoughts (obsessions) that cause significant distress. Compulsive behaviors are performed not out of preference, but out of a desperate need to reduce anxiety or prevent a feared outcome."
    },
    {
      question: "Is Exposure and Response Prevention (ERP) therapy difficult?",
      answer: "ERP is challenging because it involves intentionally facing feared situations and tolerating anxiety without performing compulsions. However, it is done gradually. We start with less difficult situations and progress at your pace."
    },
    {
      question: "How long does OCD treatment typically take?",
      answer: "The duration of treatment varies. Many clients see significant improvement within 12 to 20 weeks of regular ERP sessions and medication management. We provide a personalized timeline after your comprehensive initial psychiatric assessment."
    },
    {
      question: "Can medication help with OCD?",
      answer: "Yes, absolutely. Certain medications, primarily specific SSRIs given at higher doses than typically used for depression, are highly effective for OCD. Our psychiatric providers specialize in finding the right medication balance to complement your therapy."
    },
    {
      question: "Can OCD be cured completely?",
      answer: "OCD is considered a chronic neurobiological condition. While there is no permanent 'cure', many people achieve significant symptom reduction and even full remission with ERP and medication management."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Conditions We Treat", url: "/conditions" },
    { name: "OCD Treatment", url: "/ocd-therapy-darby-pa" }
  ];

  const serviceData = {
    name: "OCD Treatment in Darby, PA",
    description: "Evidence-based therapy and psychiatric medication management for OCD using ERP in Darby, PA. Specialized care with Medicaid acceptance.",
    serviceType: "OCD Treatment"
  };

  return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={ocdFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <OCDClient />
    </>
  );
}
