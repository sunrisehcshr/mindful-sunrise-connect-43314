import React from 'react';
import { Metadata } from 'next';
import BipolarClient from './BipolarClient';

export const metadata: Metadata = {
  title: "Bipolar Disorder Treatment in Darby, PA | Sunrise", // 50 chars
  description: "Specialized bipolar disorder treatment in Darby, PA. Expert medication management and therapy for Bipolar I, Bipolar II, and Cyclothymia. Medicaid accepted.", // 156 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/bipolar-disorder-therapy-darby-pa",
  },
  keywords: "bipolar disorder treatment Darby PA, bipolar therapy Delaware County, manic depression help, bipolar 1 treatment, bipolar 2 therapy near me",
};

export default function BipolarTreatmentPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": "Bipolar Disorder Treatment in Darby, PA",
        "description": "Evidence-based assessment, medication management, and therapy for Bipolar I, Bipolar II, and Cyclothymic Disorder in Darby, PA.",
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
            "name": "Bipolar Disorder Treatment",
            "item": "https://sunrisehumancare.com/bipolar-disorder-therapy-darby-pa"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between Bipolar I and Bipolar II?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bipolar I Disorder involves severe manic episodes that last at least 7 days or require hospitalization, often accompanied by depressive episodes. Bipolar II Disorder involves less severe manic periods (called hypomania) alternating with deep depressive episodes. Both require professional treatment but may need different medication strategies."
            }
          },
          {
            "@type": "Question",
            "name": "Is medication always necessary to treat bipolar disorder?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For the vast majority of individuals, yes. Bipolar disorder is deeply rooted in brain chemistry. Mood stabilizers or antipsychotic medications are typically the cornerstone of treatment to prevent extreme highs and lows. Therapy is then used alongside medication to manage triggers, rebuild relationships, and develop coping skills."
            }
          },
          {
            "@type": "Question",
            "name": "Can bipolar disorder be cured?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bipolar disorder is a lifelong, chronic condition and cannot be permanently 'cured'. However, it is highly treatable. With a consistent, customized treatment plan involving medication management and psychotherapy, most people with bipolar disorder can achieve long-term mood stability and lead incredibly successful, fulfilling lives."
            }
          },
          {
            "@type": "Question",
            "name": "What should family members know about supporting someone with bipolar disorder?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Family support is crucial. Family members should learn to recognize the early warning signs of both manic and depressive episodes. It's important to encourage treatment adherence, help maintain a calm environment with regular sleep schedules, and participate in family therapy to improve communication and boundaries."
            }
          },
          {
            "@type": "Question",
            "name": "Is bipolar disorder genetic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, bipolar disorder has one of the strongest genetic links of all psychiatric conditions. If you have a first-degree relative (parent or sibling) with bipolar disorder, your risk of developing the condition is significantly higher, though environmental factors and severe stress also play a role in triggering the onset."
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
      <BipolarClient />
    </>
  );
}