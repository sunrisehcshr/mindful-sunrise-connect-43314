import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import PremaritalCounselingClient from './PremaritalCounselingClient';

export const metadata: Metadata = createPageMetadata({
  title: "Premarital Counseling in Darby, PA | No Waitlist | Sunrise Human Care",
  description: "Start your marriage on solid ground. Expert premarital counseling in Darby, PA. Medicaid accepted, no waitlist. Call (814) 620-2162.",
  path: "/premarital-counseling-darby-pa",
  keywords: ["premarital counseling Darby PA", "premarital counseling Delaware County", "marriage prep therapy PA", "pre-marriage counseling Darby", "couples counseling near me", "Medicaid premarital therapy"],
});

export default function PremaritalCounselingPage() {
  const premaritalFAQs = [
    {
      question: "Is premarital counseling only for couples with problems?",
      answer: "Not at all. Premarital counseling is a proactive step for any couple wanting to build a strong foundation, improve communication, and align expectations before marriage."
    },
    {
      question: "How many sessions are recommended before marriage?",
      answer: "While every couple is different, we typically recommend starting 3 to 6 months before your wedding and planning for 6 to 8 sessions to cover key areas comprehensively."
    },
    {
      question: "Does Medicaid cover premarital counseling in Pennsylvania?",
      answer: "Yes, at Sunrise Human Care, we accept Medicaid and Medical Assistance for our therapy services, removing cost barriers so you can focus on building a healthy marriage."
    },
    {
      question: "Can we do premarital counseling via telehealth?",
      answer: "Yes! We offer flexible telehealth options so you and your partner can attend sessions from the comfort of your home, making it easier to fit into busy pre-wedding schedules."
    },
    {
      question: "What is the Gottman Method and how does it apply to premarital counseling?",
      answer: "The Gottman Method is an evidence-based approach that helps couples build friendship, manage conflict, and create shared meaning. We use these principles to give you practical tools for a lasting marriage."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Premarital Counseling", url: "/premarital-counseling-darby-pa" }
  ];

  const serviceData = {
    name: "Premarital Counseling in Darby, PA",
    description: "Start your marriage on solid ground. Expert premarital counseling in Darby, PA. Medicaid accepted, no waitlist. Call (814) 620-2162.",
    serviceType: "Premarital Counseling"
  };

  return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={premaritalFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <PremaritalCounselingClient />
    </>
  );
}
