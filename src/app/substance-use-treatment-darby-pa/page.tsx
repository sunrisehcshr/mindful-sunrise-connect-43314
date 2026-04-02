import React from 'react';
import { Metadata } from 'next';
import SubstanceUseClient from './SubstanceUseClient';

export const metadata: Metadata = {
  title: "Substance Use Treatment in Darby, PA | Addiction Therapy", // 58 chars
  description: "Evidence-based substance use treatment in Darby, PA. Compassionate therapy for addiction and dual diagnosis. Medicaid accepted in Delaware County.", // 149 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/substance-use-treatment-darby-pa",
  },
  keywords: "substance use treatment Darby PA, addiction therapy Delaware County, dual diagnosis PA, alcohol counseling near me, drug recovery support",
  openGraph: {
    title: "Substance Use Treatment in Darby, PA | Addiction Therapy",
    description: "Evidence-based substance use treatment in Darby, PA. Compassionate therapy for addiction and dual diagnosis. Medicaid accepted in Delaware County.",
    url: "https://sunrisehumancare.com/substance-use-treatment-darby-pa",
    siteName: "Sunrise Human Care Services",
    images: [
      {
        url: "https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918057/cropped-view-of-psychotherapist-writing-on-clipboa-2026-03-11-19-39-36-utc_j17vdo.jpg",
        width: 1200,
        height: 630,
        alt: "Therapist helping patient with substance use recovery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Substance Use Treatment in Darby, PA | Addiction Therapy",
    description: "Evidence-based substance use treatment in Darby, PA. Compassionate therapy for addiction and dual diagnosis. Medicaid accepted in Delaware County.",
    images: ["https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918057/cropped-view-of-psychotherapist-writing-on-clipboa-2026-03-11-19-39-36-utc_j17vdo.jpg"],
  },
};

export default function SubstanceUseTreatmentPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": "Substance Use Treatment in Darby, PA",
        "description": "Evidence-based therapy and psychiatric support for Substance Use Disorders, Addiction Recovery, and Dual Diagnosis in Darby, PA.",
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
            "name": "Substance Use Treatment",
            "item": "https://sunrisehumancare.com/substance-use-treatment-darby-pa"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a Dual Diagnosis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A dual diagnosis (or co-occurring disorder) occurs when a person has both a substance use disorder and a mental health condition (like Depression, Anxiety, or PTSD) simultaneously. Effective treatment must address both conditions at the same time, as they often fuel each other."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need residential rehab or can I do outpatient therapy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on the severity of the addiction and your physical health. Outpatient therapy is highly effective for many individuals, allowing them to maintain work and family life while receiving treatment. However, if medical detox is required, we will help coordinate a referral to an inpatient facility first."
            }
          },
          {
            "@type": "Question",
            "name": "Can psychiatric medication help with substance use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Medication-Assisted Treatment (MAT) can be a crucial component of recovery for certain substance use disorders (like alcohol or opioid use). Additionally, properly medicating underlying psychiatric conditions (like severe anxiety or ADHD) often drastically reduces the urge to self-medicate with drugs or alcohol."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if I relapse?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We view relapse as a symptom of a chronic condition, not a moral failure. If a relapse occurs, we do not judge or shame you. Instead, we use it as an opportunity to understand the trigger, adjust your treatment plan, and strengthen your coping skills to prevent future occurrences."
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
      <SubstanceUseClient />
    </>
  );
}
