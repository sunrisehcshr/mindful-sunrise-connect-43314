import React from 'react';
import { Metadata } from 'next';
import BetterhelpAlternativesClient from './BetterhelpAlternativesClient';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: "BetterHelp Alternatives in PA | Local Medicaid Therapy | Su…",
  description: "Looking for BetterHelp alternatives in PA? Compare online therapy with local, Medicaid-accepting care at Sunrise Human Care in Darby. No waitlist. Call to…",
  alternates: {
    canonical: "/betterhelp-alternatives-pa",
  },
  keywords: "BetterHelp alternatives PA, Talkspace vs local therapist, Medicaid therapy Delaware County, in person therapy Darby, betterhelp alternative accept medicaid",
};

export default function BetterhelpAlternativesPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "BetterHelp Alternatives", url: "/betterhelp-alternatives-pa" }
  ];

  const faqs = [
    {
      question: "Does BetterHelp accept Medicaid in Pennsylvania?",
      answer: "No, BetterHelp does not accept Medicaid or Medicare. Sunrise Human Care, located in Darby, PA, exclusively accepts Medicaid, ensuring that high-quality mental health care is accessible and affordable for our community."
    },
    {
      question: "Is in-person therapy better than virtual apps like Talkspace?",
      answer: "While virtual therapy is convenient for some, in-person therapy offers a deeper level of connection. At Sunrise Human Care, we offer both in-person and telehealth options covered by Medicaid."
    },
    {
      question: "Can I get psychiatric medication through BetterHelp?",
      answer: "BetterHelp primarily focuses on talk therapy. At Sunrise Human Care, we offer integrated therapy, psychiatric evaluations, and medication management all under one roof."
    }
  ];

  <h1 className="sr-only">betterhelp alternatives pa</h1>
return (
    <>
      <SchemaMarkup type="FAQPage" data={faqs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <BetterhelpAlternativesClient />
    </>
  );
}
