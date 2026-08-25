import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import AnxietyClient from './AnxietyClient';

export const metadata: Metadata = createPageMetadata({
  title: "Anxiety Therapy & Treatment in Darby, PA | No Waitlist | Su…",
  description: "Expert anxiety treatment in Darby, PA. Specialized care for GAD, panic attacks, and social anxiety. 100% Medicaid accepted. No waitlist. Call (814) 620-21…",
  path: "/anxiety-therapy-darby-pa",
  keywords: ["anxiety therapy Darby PA", "anxiety treatment Delaware County", "panic attack help near me", "GAD treatment PA", "social anxiety therapy", "Medicaid anxiety therapy PA"],
});

export default function AnxietyTherapyPage() {
  const anxietyFAQs = [
    {
      question: "Is anxiety genetic?",
      answer: "Yes, there is a genetic component to anxiety disorders. Having a family member with an anxiety disorder can increase your risk, though environmental factors also play a significant role."
    },
    {
      question: "Can therapy help with anxiety disorders?",
      answer: "Absolutely. Therapy, particularly Cognitive Behavioral Therapy (CBT), is considered the gold standard for anxiety treatment. It helps you identify and change the thought patterns that fuel your anxiety."
    },
    {
      question: "Will I need medication for my anxiety?",
      answer: "Not necessarily. Many people effectively manage anxiety through therapy and lifestyle changes alone. However, for some, medication can provide the necessary stability to engage more effectively in therapy."
    },
    {
      question: "What is the difference between normal stress and an anxiety disorder?",
      answer: "Normal stress is a response to a specific threat or pressure. An anxiety disorder involves persistent, excessive worry that occurs even when there is no immediate threat, often interfering with daily life."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Conditions We Treat", url: "/conditions" },
    { name: "Anxiety Treatment", url: "/anxiety-therapy-darby-pa" }
  ];

  const serviceData = {
    name: "Anxiety Treatment in Darby, PA",
    description: "Expert treatment for GAD, panic disorder, and social anxiety in Darby, PA. Specialized psychiatric care with no waitlist and Medicaid acceptance.",
    serviceType: "Anxiety Treatment"
  };

return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={anxietyFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <AnxietyClient />
    </>
  );
}
