import React from 'react';
import { Metadata } from 'next';
import SleepDisordersClient from './SleepDisordersClient';

export const metadata: Metadata = {
  title: "Sleep Disorders Treatment in Darby, PA | Insomnia Therapy", // 58 chars
  description: "Effective sleep disorder treatment in Darby, PA. Specialized psychiatric care for insomnia, hypersomnia, and circadian rhythm disorders. Medicaid accepted.", // 155 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/sleep-disorders-treatment-darby-pa",
  },
  keywords: "sleep disorders treatment Darby PA, insomnia therapy Delaware County, sleep anxiety help, CBT-I near me, hypersomnia treatment PA, circadian rhythm sleep disorder",
  openGraph: {
    title: "Sleep Disorders Treatment in Darby, PA | Insomnia Therapy",
    description: "Effective sleep disorder treatment in Darby, PA. Specialized psychiatric care for insomnia, hypersomnia, and circadian rhythm disorders. Medicaid accepted.",
    url: "https://sunrisehumancare.com/sleep-disorders-treatment-darby-pa",
    siteName: "Sunrise Human Care Services",
    images: [
      {
        url: "https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918057/cropped-view-of-psychotherapist-writing-on-clipboa-2026-03-11-19-39-36-utc_j17vdo.jpg",
        width: 1200,
        height: 630,
        alt: "Psychotherapist reviewing sleep disorder treatment plan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sleep Disorders Treatment in Darby, PA | Insomnia Therapy",
    description: "Effective sleep disorder treatment in Darby, PA. Specialized psychiatric care for insomnia, hypersomnia, and circadian rhythm disorders. Medicaid accepted.",
    images: ["https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918057/cropped-view-of-psychotherapist-writing-on-clipboa-2026-03-11-19-39-36-utc_j17vdo.jpg"],
  },
};

export default function SleepDisordersTreatmentPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": "Sleep Disorders Treatment in Darby, PA",
        "description": "Evidence-based psychiatric treatment for Insomnia, Hypersomnia, and Circadian Rhythm Disorders in Darby, PA. Includes CBT-I and medication management.",
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
            "name": "Sleep Disorders Treatment",
            "item": "https://sunrisehumancare.com/sleep-disorders-treatment-darby-pa"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I know if I have a sleep disorder?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Occasional restless nights are normal. However, if you consistently have trouble falling asleep, staying asleep, or if you wake up feeling unrefreshed and exhausted for more than a month, it is likely a clinical sleep disorder. If your sleep issues are affecting your mood, focus, or ability to work, it is time to seek professional evaluation."
            }
          },
          {
            "@type": "Question",
            "name": "What is CBT-I and how does it work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cognitive Behavioral Therapy for Insomnia (CBT-I) is the gold standard, first-line treatment for chronic insomnia. Unlike sleeping pills, which only provide a temporary fix, CBT-I addresses the underlying thoughts and behaviors that ruin sleep. It involves sleep restriction, stimulus control, and cognitive restructuring to literally retrain your brain to sleep."
            }
          },
          {
            "@type": "Question",
            "name": "Do I have to take sleeping pills?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not necessarily. While psychiatric medication can be a helpful short-term tool to break a severe cycle of insomnia, our goal is long-term, sustainable sleep without reliance on heavy sedatives. We strongly prioritize behavioral interventions (like CBT-I) and, when necessary, utilize non-habit-forming medications to support your sleep architecture."
            }
          },
          {
            "@type": "Question",
            "name": "Can mental health issues cause sleep disorders?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. The relationship is highly bidirectional. Conditions like Anxiety, Depression, and PTSD frequently cause severe insomnia or hypersomnia (oversleeping). Conversely, chronic sleep deprivation can trigger or drastically worsen mental health conditions. We treat both the sleep disorder and the underlying mental health condition simultaneously."
            }
          },
          {
            "@type": "Question",
            "name": "What is Sleep Apnea and do you treat it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sleep Apnea is a physical medical condition where breathing repeatedly stops and starts during sleep. While our psychiatric team does not prescribe CPAP machines, we frequently screen for Sleep Apnea during our psychiatric evaluations. If we suspect Sleep Apnea is the root cause of your mental health symptoms, we will coordinate a referral to a specialized sleep medicine clinic while continuing to support your mental health."
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
      <SleepDisordersClient />
    </>
  );
}