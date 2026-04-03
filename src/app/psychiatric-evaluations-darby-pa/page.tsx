import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import PsychiatricEvaluationsClient from './PsychiatricEvaluationsClient';

export const metadata: Metadata = createPageMetadata({
  title: "Psychiatric Evaluations in Darby, PA | No Waitlist | Sunrise",
  description: "Comprehensive psychiatric evaluations in Darby, PA. Accurate diagnosis and personalized treatment planning. 100% Medicaid accepted. No waitlist.",
  path: "/psychiatric-evaluations-darby-pa",
  keywords: ["psychiatric evaluation Darby PA", "mental health assessment Delaware County", "psychiatric diagnosis PA", "mental health screening Darby", "psychiatrist evaluation near me", "Medicaid psychiatric evaluation PA"],
});

export default function PsychiatricEvaluationsPage() {
  const evalFAQs = [
    {
      question: "What happens during a psychiatric evaluation?",
      answer: "An evaluation involves a comprehensive discussion about your symptoms, medical history, and goals. We may use standardized assessments to provide an accurate diagnosis and personalized treatment recommendations."
    },
    {
      question: "How long does a psychiatric evaluation take?",
      answer: "Initial evaluations usually take 60-90 minutes to ensure a thorough assessment. Follow-up appointments are typically 30-45 minutes depending on your specific needs."
    },
    {
      question: "What should I bring to my evaluation?",
      answer: "Please bring a list of current medications, relevant medical records, and any notes about your symptoms. This helps us provide the most accurate and efficient assessment."
    },
    {
      question: "Will I receive a diagnosis after my evaluation?",
      answer: "Yes, in most cases we provide diagnostic information during your initial evaluation. Some complex cases may require additional information or sessions for a definitive diagnosis."
    },
    {
      question: "Do you accept Medicaid for psychiatric evaluations?",
      answer: "Yes, we exclusively accept Medicaid and Medical Assistance. We provide expert psychiatric assessments with no waitlist to ensure you get the care you need promptly."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Psychiatric Evaluations", url: "/psychiatric-evaluations-darby-pa" }
  ];

  const serviceData = {
    name: "Psychiatric Evaluations in Darby, PA",
    description: "Comprehensive psychiatric evaluations and mental health assessments in Darby, PA. Specialized diagnostic care with no waitlist and Medicaid acceptance.",
    serviceType: "Psychiatric Evaluation"
  };

  return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={evalFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <PsychiatricEvaluationsClient />
    </>
  );
}
