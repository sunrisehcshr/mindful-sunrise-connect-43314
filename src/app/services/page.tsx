import React from 'react';
import { Metadata } from 'next';
import ServicesClient from './ServicesClient';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: "Therapy & Psychiatry Services in Darby, PA | Sunrise Human…",
  description: "Comprehensive mental health services in Darby, PA. Medicaid only, no waitlist. Expert therapy for anxiety, depression, ADHD & trauma. Call (814) 620-2162.",
  alternates: {
    canonical: "https://sunrisehumancare.com/services",
  },
  keywords: "mental health services Darby, therapy Delaware County PA, counseling services Pennsylvania, psychiatry Darby, anxiety therapy PA, depression treatment Darby",
};

export default function ServicesPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" }
  ];

  const faqs = [
    {
      question: "What mental health services do you offer in Darby, PA?",
      answer: "We provide individual therapy, couples counseling, family therapy, child therapy, psychiatric evaluations, and medication management at our Darby clinic."
    },
    {
      question: "Do you accept Medicaid for therapy services?",
      answer: "Yes, Sunrise Human Care Services is a Medicaid-only provider, ensuring accessible care for our community."
    },
    {
      question: "How long is the waitlist for new patients?",
      answer: "We currently have no waitlist and typically respond to all inquiries within 24 hours."
    }
  ];

  return (
    <>
      <SchemaMarkup type="FAQPage" data={faqs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <ServicesClient />
    </>
  );
}