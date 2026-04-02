import React from 'react';
import { Metadata } from 'next';
import CouplesCounselingClient from './CouplesCounselingClient';

export const metadata: Metadata = {
  title: "Couples Counseling in Darby, PA | Relationship Therapy | Sunrise Human Care", // 75 chars
  description: "Expert couples counseling in Darby, PA. Our licensed therapists help partners improve communication, resolve conflicts, and rebuild trust. Accept Medicaid.", // 156 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/couples-counseling-darby-pa",
  },
  keywords: "couples counseling Darby PA, marriage therapy Delaware County, relationship counseling PA, marriage counselor Darby, couples therapy near me, premarital counseling Darby",
};

export default function CouplesCounselingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalService",
        "name": "Couples Counseling in Darby, PA",
        "description": "Expert couples counseling and relationship therapy in Darby, PA. Our licensed therapists help partners improve communication, resolve conflicts, and rebuild trust.",
        "serviceType": "Couples Counseling",
        "provider": {
          "@type": "MedicalBusiness",
          "name": "Sunrise Human Care Services",
          "address": "869 Main Street, Darby, PA 19023"
        },
        "areaServed": "Darby, PA",
        "availableService": "TherapyService",
        "medicalSpecialty": "Psychiatry",
        "uses": [
          "Emotionally Focused Therapy (EFT)",
          "The Gottman Method",
          "Imago Relationship Therapy",
          "Solution-Focused Couples Therapy"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What can we expect from couples counseling in Darby?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Couples counseling in Darby at Sunrise Human Care offers a tailored approach where licensed therapists guide partners to improve communication, resolve conflicts, and build a stronger bond in a confidential, supportive environment."
            }
          },
          {
            "@type": "Question",
            "name": "Is couples counseling effective for long-term relationships?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, couples counseling in Darby helps long-term partners address entrenched patterns, rebuild trust, and rediscover connection, using proven methods like The Gottman Method."
            }
          },
          {
            "@type": "Question",
            "name": "Can unmarried couples benefit from relationship therapy in Delaware County?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely, relationship therapy in Delaware County supports all committed relationships, helping unmarried couples strengthen their partnership and navigate challenges."
            }
          },
          {
            "@type": "Question",
            "name": "How many sessions are needed for couples therapy near me?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The duration of couples therapy near me depends on your goals—some couples see progress in 8-12 sessions, while others engage longer for deeper transformation."
            }
          },
          {
            "@type": "Question",
            "name": "Does marriage counseling PA accept insurance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our marriage counseling PA services accept Medicaid. We verify coverage before starting to ensure accessibility."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CouplesCounselingClient />
    </>
  );
}