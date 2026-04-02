import React from 'react';
import { Metadata } from 'next';
import BPDClient from './BPDClient';

export const metadata: Metadata = {
  title: "Borderline Personality Disorder (BPD) Treatment in Darby | Sunrise", // 66 chars
  description: "Specialized Borderline Personality Disorder (BPD) treatment in Darby, PA. Expert therapy for emotional dysregulation and relationship instability. Medicaid accepted.", // 165 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/bpd-treatment-darby-pa",
  },
  keywords: "BPD treatment Darby PA, borderline personality disorder therapy Delaware County, DBT therapy near me, emotional dysregulation treatment, BPD specialist PA",
};

export default function BPDTreatmentPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": "Borderline Personality Disorder (BPD) Treatment in Darby, PA",
        "description": "Evidence-based therapy and psychiatric support for Borderline Personality Disorder (BPD) in Darby, PA.",
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
            "name": "BPD Treatment",
            "item": "https://sunrisehumancare.com/bpd-treatment-darby-pa"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Borderline Personality Disorder (BPD) treatable?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Historically, BPD was considered highly difficult to treat, but modern therapies—specifically Dialectical Behavior Therapy (DBT)—have proven to be incredibly effective. With committed treatment, many individuals with BPD experience a massive reduction in symptoms and are able to build stable, fulfilling relationships."
            }
          },
          {
            "@type": "Question",
            "name": "How is BPD different from Bipolar Disorder?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While both involve severe mood swings, they are fundamentally different. Bipolar mood swings last for days, weeks, or months and often happen independently of external events. BPD mood swings are highly reactive to environmental triggers (especially interpersonal conflict) and can shift multiple times within a single day."
            }
          },
          {
            "@type": "Question",
            "name": "What is 'splitting' in BPD?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Splitting is a common defense mechanism in BPD where an individual views people, situations, or themselves in extreme black-and-white terms. Someone may be seen as perfect and idealized one moment, and completely villainized the next. Therapy helps build 'gray area' thinking to stabilize relationships."
            }
          },
          {
            "@type": "Question",
            "name": "Is medication used to treat BPD?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "There is no specific medication approved to cure BPD itself. However, psychiatric medication is frequently used to manage the severe co-occurring symptoms, such as debilitating anxiety, depression, or severe mood instability. The core treatment for BPD, however, is always long-term psychotherapy."
            }
          },
          {
            "@type": "Question",
            "name": "Does BPD stem from childhood trauma?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In many cases, yes. A large percentage of individuals with BPD experienced severe childhood trauma, neglect, or invalidating environments where their emotional needs were chronically dismissed. However, genetics and brain structure (specifically an overactive amygdala) also play a significant role."
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
      <BPDClient />
    </>
  );
}