import React from 'react';
import { Metadata } from 'next';
import SchizophreniaClient from './SchizophreniaClient';

export const metadata: Metadata = {
  title: "Schizophrenia Treatment in Darby, PA | Sunrise", // 46 chars
  description: "Expert psychiatric care and schizophrenia treatment in Darby, PA. Specialized medication management for psychosis and hallucinations. Medicaid accepted.", // 152 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/schizophrenia-treatment-darby-pa",
  },
  keywords: "schizophrenia treatment Darby PA, psychosis therapy Delaware County, psychiatric care near me, hallucination treatment, antipsychotic medication management",
};

export default function SchizophreniaTreatmentPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": "Schizophrenia Treatment in Darby, PA",
        "description": "Evidence-based psychiatric evaluation, medication management, and therapy for Schizophrenia and psychotic disorders in Darby, PA.",
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
            "name": "Schizophrenia Treatment",
            "item": "https://sunrisehumancare.com/schizophrenia-treatment-darby-pa"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is schizophrenia treatable?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. While schizophrenia is a chronic condition without a permanent cure, it is highly treatable. With the right combination of antipsychotic medication, therapy, and social support, many individuals experience a significant reduction in symptoms and are able to lead independent, fulfilling lives."
            }
          },
          {
            "@type": "Question",
            "name": "Does schizophrenia mean having multiple personalities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. This is a common misconception. Schizophrenia literally translates to 'split mind,' but it refers to a split from reality, not a split into multiple personalities. Dissociative Identity Disorder (DID) is a completely separate condition."
            }
          },
          {
            "@type": "Question",
            "name": "Will someone with schizophrenia need to take medication forever?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In most cases, long-term or lifelong medication is necessary to prevent relapse, similar to how someone with diabetes needs daily insulin. Antipsychotic medications are crucial for keeping the neurochemical balance in the brain stable. Abruptly stopping medication often leads to a severe return of symptoms."
            }
          },
          {
            "@type": "Question",
            "name": "How can family members help someone with schizophrenia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Family support is one of the strongest predictors of successful recovery. Families should educate themselves on the illness, help ensure the individual adheres to their medication schedule, maintain a low-stress home environment, and participate in family therapy to learn how to communicate effectively during a crisis."
            }
          },
          {
            "@type": "Question",
            "name": "What causes schizophrenia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The exact cause is unknown, but it is believed to be a combination of genetics, brain chemistry (specifically dysregulation of the neurotransmitter dopamine), and environmental factors. Severe stress, trauma, or substance use (especially high-THC cannabis) during teen years can trigger the onset in individuals who are genetically predisposed."
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
      <SchizophreniaClient />
    </>
  );
}