import React from 'react';
import { Metadata } from 'next';
import PsychiatricEvaluationsClient from './PsychiatricEvaluationsClient';

export const metadata: Metadata = {
  title: "Psychiatric Evaluations in Darby, PA | Sunrise Human Care", // 58 chars
  description: "Comprehensive psychiatric evaluations in Darby, PA. Our experienced professionals provide accurate diagnosis and personalized treatment planning. Medicaid accepted.", // 163 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/psychiatric-evaluations-darby-pa",
  },
  keywords: "psychiatric evaluation Darby PA, mental health assessment Delaware County, psychiatric diagnosis PA, mental health screening Darby, psychiatrist evaluation near me",
};

export default function PsychiatricEvaluationsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalService",
        "name": "Psychiatric Evaluations in Darby, PA",
        "description": "Comprehensive psychiatric evaluations and mental health assessments in Darby, PA to provide accurate diagnosis and personalized treatment planning.",
        "serviceType": "Psychiatric Evaluation",
        "provider": {
          "@type": "MedicalBusiness",
          "name": "Sunrise Human Care Services",
          "address": "869 Main Street, Darby, PA 19023"
        },
        "areaServed": "Darby, PA",
        "availableService": "TherapyService",
        "medicalSpecialty": "Psychiatry",
        "uses": [
          "Clinical Interview & Assessment",
          "Diagnostic Evaluation",
          "Medical History Review",
          "Ongoing Assessment"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sunrisehumancare.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://sunrisehumancare.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Psychiatric Evaluations",
            "item": "https://sunrisehumancare.com/psychiatric-evaluations-darby-pa"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What happens during a psychiatric evaluation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A psychiatric evaluation typically begins with a comprehensive discussion about your symptoms, concerns, and goals. We'll explore your medical history, family history, lifestyle factors, and current life circumstances. You may complete some standardized assessments, and we'll discuss our findings and treatment recommendations."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a psychiatric evaluation take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Initial evaluations usually take 60-90 minutes to ensure we gather all necessary information. Follow-up appointments are typically 30-45 minutes. Complex cases may require additional sessions for a complete assessment."
            }
          },
          {
            "@type": "Question",
            "name": "What should I bring to my evaluation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Please bring a list of current medications, relevant medical records, previous psychiatric records if available, and notes about your symptoms or concerns. Having this information ready helps us provide the most accurate assessment."
            }
          },
          {
            "@type": "Question",
            "name": "Will I receive a diagnosis after my evaluation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If appropriate, we will provide diagnostic information during your evaluation. However, some conditions may require additional sessions or information for a definitive diagnosis. We'll always explain our findings and discuss treatment options with you."
            }
          },
          {
            "@type": "Question",
            "name": "Are psychiatric evaluations covered by insurance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Sunrise Human Care exclusively accepts Medicaid for psychiatric evaluations. Our team will verify your benefits and explain any coverage details before your appointment to ensure you receive the care you need."
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
      <PsychiatricEvaluationsClient />
    </>
  );
}
