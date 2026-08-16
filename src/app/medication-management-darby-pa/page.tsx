import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import MedicationManagementClient from './MedicationManagementClient';

export const metadata: Metadata = createPageMetadata({
  title: "Psychiatric Medication Management in Darby, PA | No Waitlist",
  description: "Expert psychiatric medication management in Darby, PA. Board-certified providers offering personalized plans and monitoring. 100% Medicaid accepted. No wa…",
  path: "/medication-management-darby-pa",
  keywords: ["medication management Darby PA", "psychiatric medication Delaware County", "psychiatrist near me PA", "medication for anxiety Darby", "depression medication PA", "ADHD medication management", "Medicaid psychiatrist PA"],
});

export default function MedicationManagementPage() {
  const medFAQs = [
    {
      question: "How long will I need to take psychiatric medication?",
      answer: "The duration varies depending on your condition and response. Some individuals need short-term support, while others benefit from longer-term treatment. We regularly review your progress to ensure optimal well-being."
    },
    {
      question: "What if I experience side effects from my medication?",
      answer: "Side effects are taken very seriously. We carefully monitor your reactions and can adjust dosages or switch medications if needed. Always communicate any concerns promptly for guidance."
    },
    {
      question: "How often are medication management appointments?",
      answer: "Initially, appointments are every 2-4 weeks. Once stable, visits are typically every 1-3 months. Your schedule is personalized based on your specific needs and response to treatment."
    },
    {
      question: "Can I combine medication with therapy?",
      answer: "Yes, and we often recommend it. Research shows that for many conditions, the combination of medication and therapy provides better outcomes than either treatment alone."
    },
    {
      question: "Do you accept Medicaid for medication management?",
      answer: "Yes, we exclusively accept Medicaid and Medical Assistance. We are committed to making expert psychiatric care accessible to our community with no waitlists."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Medication Management", url: "/medication-management-darby-pa" }
  ];

  const serviceData = {
    name: "Psychiatric Medication Management in Darby, PA",
    description: "Expert psychiatric medication management services in Darby, PA. Personalized plans and regular monitoring with no waitlist and Medicaid acceptance.",
    serviceType: "Psychiatric Medication Management"
  };

  <h1 className="sr-only">medication management darby pa</h1>
return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={medFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <MedicationManagementClient />
    </>
  );
}
