import React from 'react';
import { Metadata } from 'next';
import EatingDisordersClient from './EatingDisordersClient';

export const metadata: Metadata = {
  title: "Eating Disorders Treatment in Darby, PA | Sunrise Human Care", // 60 chars
  description: "Specialized psychiatric treatment for anorexia, bulimia, binge eating disorder, and disordered eating in Darby, PA. Compassionate Medicaid-accepted care.", // 156 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/eating-disorders-treatment-darby-pa",
  },
  keywords: "eating disorders treatment Darby PA, anorexia therapy Delaware County, bulimia treatment near me, binge eating help PA, disordered eating recovery",
  openGraph: {
    title: "Eating Disorders Treatment in Darby, PA | Sunrise Human Care",
    description: "Specialized psychiatric treatment for anorexia, bulimia, binge eating disorder, and disordered eating in Darby, PA. Compassionate Medicaid-accepted care.",
    url: "https://sunrisehumancare.com/eating-disorders-treatment-darby-pa",
    siteName: "Sunrise Human Care Services",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Supportive eating disorders treatment and therapy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eating Disorders Treatment in Darby, PA | Sunrise Human Care",
    description: "Specialized psychiatric treatment for anorexia, bulimia, binge eating disorder, and disordered eating in Darby, PA. Compassionate Medicaid-accepted care.",
    images: ["https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"],
  },
};

export default function EatingDisordersTreatmentPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": "Eating Disorders Treatment in Darby, PA",
        "description": "Specialized psychiatric treatment for Anorexia, Bulimia, Binge Eating Disorder, and Disordered Eating in Darby, PA.",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Psychiatry"
        },
        "provider": {
          "@type": "MedicalBusiness",
          "name": "Sunrise Human Care Services",
          "address": "869 Main Street, Darby, PA 19023"
        }
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
            "name": "Conditions We Treat",
            "item": "https://sunrisehumancare.com/conditions"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Eating Disorders Treatment",
            "item": "https://sunrisehumancare.com/eating-disorders-treatment-darby-pa"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I know if I or my loved one has an eating disorder?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Warning signs include a severe preoccupation with weight, food, calories, and body image; restrictive eating or skipping meals; frequent episodes of binge eating; purging behaviors (like vomiting or excessive exercise); and intense body dissatisfaction. If these thoughts and behaviors interfere with daily life, it is time for a professional assessment."
            }
          },
          {
            "@type": "Question",
            "name": "Do you treat severe Anorexia Nervosa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide outpatient psychiatric care and therapy for eating disorders. However, severe Anorexia Nervosa often requires intensive medical stabilization or inpatient care if a patient is medically compromised. We conduct thorough assessments to determine the appropriate level of care and will coordinate with specialized inpatient facilities if necessary."
            }
          },
          {
            "@type": "Question",
            "name": "Can medication help with eating disorders?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, psychiatric medication can be an important component of treatment, particularly for Binge Eating Disorder or Bulimia Nervosa, and to treat co-occurring conditions like Depression, Anxiety, or OCD that frequently accompany eating disorders. Our psychiatric team carefully manages medications to support your overall recovery."
            }
          },
          {
            "@type": "Question",
            "name": "How long does eating disorder treatment take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Recovery from an eating disorder is typically a gradual, long-term process that varies based on the severity of the condition and individual needs. It requires consistency, patience, and a comprehensive approach. Many people require months to years of support to achieve full, sustainable recovery and a healthy relationship with food."
            }
          },
          {
            "@type": "Question",
            "name": "Is full recovery from an eating disorder possible?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. While it is a challenging journey, many people achieve full recovery with the right professional support. Recovery involves normalizing eating behaviors, addressing the underlying emotional pain or trauma, and fundamentally changing how you view and value your body."
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
      <EatingDisordersClient />
    </>
  );
}
