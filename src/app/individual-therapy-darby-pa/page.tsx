import React from 'react';
import { Metadata } from 'next';
import IndividualTherapyClient from './IndividualTherapyClient';

export const metadata: Metadata = {
  title: "Individual Therapy in Darby, PA | Sunrise Human Care", // 54 chars
  description: "Expert individual therapy in Darby, PA. Our licensed Delaware County therapists offer personalized counseling for anxiety, depression, and trauma. Accept Medicaid.", // 165 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/individual-therapy-darby-pa",
  },
  keywords: "individual therapy Darby PA, counseling Darby, therapist Delaware County, personal counseling PA, anxiety therapy Darby, depression treatment Darby",
};

export default function IndividualTherapyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalService",
        "name": "Individual Therapy in Darby, PA",
        "description": "Expert individual therapy and personalized counseling services in Darby, PA for anxiety, depression, trauma, and stress management.",
        "serviceType": "Mental Health Counseling",
        "provider": {
          "@type": "MedicalBusiness",
          "name": "Sunrise Human Care Services",
          "address": "869 Main Street, Darby, PA 19023"
        },
        "areaServed": "Darby, PA",
        "availableService": "TherapyService",
        "medicalSpecialty": "Psychiatry",
        "uses": [
          "Cognitive Behavioral Therapy",
          "Acceptance & Commitment Therapy",
          "Dialectical Behavior Therapy"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does individual therapy in Darby involve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Individual therapy in Darby offers a personalized process where licensed therapists support you in addressing challenges like anxiety, depression, or life transitions in a safe, confidential setting. Our Delaware County therapists use evidence-based methods tailored to your needs."
            }
          },
          {
            "@type": "Question",
            "name": "How often are individual counseling sessions recommended?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most clients begin with weekly counseling sessions to establish momentum and build progress. As you meet your therapeutic goals, we can adjust the frequency to bi-weekly or monthly based on your unique situation."
            }
          },
          {
            "@type": "Question",
            "name": "Is individual therapy covered by insurance in PA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Sunrise Human Care accepts Medicaid to ensure mental health care is accessible to the Darby and broader Delaware County community."
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
      <IndividualTherapyClient />
    </>
  );
}