import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import CouplesCounselingClient from './CouplesCounselingClient';

export const metadata: Metadata = createPageMetadata({
  title: "Couples Counseling & Relationship Therapy in Darby, PA | No…",
  description: "Expert couples counseling in Darby, PA. Improve communication and rebuild trust with licensed therapists. 100% Medicaid accepted. No waitlist. Call (814)…",
  path: "/couples-counseling-darby-pa",
  keywords: ["couples counseling Darby PA", "marriage therapy Delaware County", "relationship counseling PA", "marriage counselor Darby", "couples therapy near me", "premarital counseling Darby", "Medicaid couples therapy PA"],
});

export default function CouplesCounselingPage() {
  const couplesFAQs = [
    {
      question: "What can we expect from couples counseling in Darby?",
      answer: "Couples counseling at Sunrise Human Care offers a tailored approach where licensed therapists guide partners to improve communication, resolve conflicts, and build a stronger bond in a supportive environment."
    },
    {
      question: "Is couples counseling effective for long-term relationships?",
      answer: "Yes, couples counseling helps long-term partners address entrenched patterns, rebuild trust, and rediscover connection using proven methods like The Gottman Method and Emotionally Focused Therapy."
    },
    {
      question: "What if my partner is reluctant to attend therapy?",
      answer: "It's common for one partner to be hesitant. We create a non-judgmental space where both perspectives are heard equally. Often, a single initial session can help ease concerns about the process."
    },
    {
      question: "Do you accept Medicaid for couples counseling?",
      answer: "Yes, we exclusively accept Medicaid and Medical Assistance. We provide expert relationship therapy with no waitlist to help you and your partner start your journey today."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Couples Counseling", url: "/couples-counseling-darby-pa" }
  ];

  const serviceData = {
    name: "Couples Counseling in Darby, PA",
    description: "Expert relationship therapy and marriage counseling in Darby, PA. Specialized care for communication and conflict resolution with no waitlist and Medicaid acceptance.",
    serviceType: "Couples Counseling"
  };

  <h1 className="sr-only">couples counseling darby pa</h1>
return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={couplesFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <CouplesCounselingClient />
    </>
  );
}
