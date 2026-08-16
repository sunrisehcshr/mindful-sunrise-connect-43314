import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import IndividualTherapyClient from './IndividualTherapyClient';

export const metadata: Metadata = createPageMetadata({
  title: "Individual Therapy in Darby, PA | No Waitlist | Sunrise",
  description: "Expert individual therapy in Darby, PA. Personalized counseling for anxiety, depression, and trauma. 100% Medicaid accepted. No waitlist. Call (814) 620-2…",
  path: "/individual-therapy-darby-pa",
  keywords: ["individual therapy Darby PA", "counseling Darby", "therapist Delaware County", "personal counseling PA", "anxiety therapy Darby", "depression treatment Darby", "Medicaid individual therapy PA"],
});

export default function IndividualTherapyPage() {
  const individualFAQs = [
    {
      question: "What does individual therapy in Darby involve?",
      answer: "Individual therapy is a personalized process where licensed therapists support you in addressing challenges like anxiety, depression, or life transitions in a safe, confidential setting."
    },
    {
      question: "Is individual therapy covered by insurance in PA?",
      answer: "Yes, Sunrise Human Care exclusively accepts Medicaid and Medical Assistance to ensure expert mental health care is accessible to the Darby and Delaware County community."
    },
    {
      question: "How long is the waitlist for individual therapy?",
      answer: "We have no waitlist. We understand the importance of timely care and typically respond to all inquiries within 24 hours to schedule your first appointment."
    },
    {
      question: "What can I expect in my first session?",
      answer: "Your first session is an opportunity for us to get to know you, discuss your goals, and begin building a personalized treatment plan that fits your unique needs and lifestyle."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Individual Therapy", url: "/individual-therapy-darby-pa" }
  ];

  const serviceData = {
    name: "Individual Therapy in Darby, PA",
    description: "Expert individual counseling and psychiatric care in Darby, PA. Personalized support for various mental health challenges with no waitlist and Medicaid acceptance.",
    serviceType: "Individual Therapy"
  };

  <h1 className="sr-only">individual therapy darby pa</h1>
return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={individualFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <IndividualTherapyClient />
    </>
  );
}
