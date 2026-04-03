import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import MentalHealthDarbyClient from './MentalHealthDarbyClient';

export const metadata: Metadata = createPageMetadata({
  title: "Mental Health Services in Darby, PA | No Waitlist | Sunrise",
  description: "Comprehensive mental health services in Darby, PA. Expert therapy and psychiatric care for the Darby community. 100% Medicaid accepted. No waitlist.",
  path: "/mental-health-darby-pa",
  keywords: ["mental health Darby PA", "therapy Darby PA", "psychiatrist Darby PA", "Delaware County mental health", "Darby counseling services", "Medicaid mental health PA"],
});

export default function MentalHealthDarbyPage() {
  const darbyFAQs = [
    {
      question: "How do I know if I should seek therapy?",
      answer: "If you're experiencing persistent feelings of sadness, anxiety, or stress that affect your daily life, relationships, or work, therapy can help. You don't need to be in crisis to benefit from professional support."
    },
    {
      question: "Do you offer services for children and families?",
      answer: "Yes, we provide therapy for children, adolescents, and families. Our licensed therapists are experienced in working with young people and understand the unique challenges they face."
    },
    {
      question: "What should I expect during my first visit?",
      answer: "Your first visit is an opportunity for you and your therapist to get to know each other. You'll discuss what brings you to therapy, your personal history, and your goals for treatment."
    },
    {
      question: "Is my information kept confidential?",
      answer: "Absolutely. We adhere to strict confidentiality standards and HIPAA regulations to protect your privacy. Your trust is essential to the therapeutic relationship."
    },
    {
      question: "Do you accept Medicaid in Darby, PA?",
      answer: "Yes, we exclusively accept Medicaid and Medical Assistance for all our services in Darby. We provide expert care with no waitlist to ensure the community has timely access to mental health support."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/contact" },
    { name: "Darby, PA", url: "/mental-health-darby-pa" }
  ];

  const serviceData = {
    name: "Mental Health Services in Darby, PA",
    description: "Expert mental health clinic in Darby, PA providing therapy and psychiatric evaluations. Specialized community care with no waitlist and Medicaid acceptance.",
    serviceType: "Mental Health Clinic"
  };

  return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={darbyFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <MentalHealthDarbyClient />
    </>
  );
}
