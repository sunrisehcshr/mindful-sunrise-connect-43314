import React from 'react';
import { Metadata } from 'next';
import DissociativeDisordersClient from './DissociativeDisordersClient';

export const metadata: Metadata = {
  title: "Dissociative Disorders Treatment in Darby, PA | Sunrise Human Care", // 66 chars
  description: "Specialized psychiatric treatment for dissociative disorders, DID, depersonalization, and derealization in Darby, PA. Trauma-informed Medicaid care.", // 150 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/dissociative-disorders-treatment-darby-pa",
  },
  keywords: "dissociative disorders treatment Darby PA, DID therapy Delaware County, depersonalization help PA, trauma dissociation counseling, derealization treatment",
  openGraph: {
    title: "Dissociative Disorders Treatment in Darby, PA | Sunrise Human Care",
    description: "Specialized psychiatric treatment for dissociative disorders, DID, depersonalization, and derealization in Darby, PA. Trauma-informed Medicaid care.",
    url: "https://sunrisehumancare.com/dissociative-disorders-treatment-darby-pa",
    siteName: "Sunrise Human Care Services",
    images: [
      {
        url: "https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918057/cropped-view-of-psychotherapist-writing-on-clipboa-2026-03-11-19-39-36-utc_j17vdo.jpg",
        width: 1200,
        height: 630,
        alt: "Psychotherapist providing trauma-informed care for dissociative disorders",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dissociative Disorders Treatment in Darby, PA | Sunrise Human Care",
    description: "Specialized psychiatric treatment for dissociative disorders, DID, depersonalization, and derealization in Darby, PA. Trauma-informed Medicaid care.",
    images: ["https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918057/cropped-view-of-psychotherapist-writing-on-clipboa-2026-03-11-19-39-36-utc_j17vdo.jpg"],
  },
};

export default function DissociativeDisordersTreatmentPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": "Dissociative Disorders Treatment in Darby, PA",
        "description": "Evidence-based, trauma-informed therapy and psychiatric support for Dissociative Disorders, including DID and Depersonalization, in Darby, PA.",
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
            "name": "Dissociative Disorders Treatment",
            "item": "https://sunrisehumancare.com/dissociative-disorders-treatment-darby-pa"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is dissociation the same as having multiple personalities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dissociation exists on a spectrum. While Dissociative Identity Disorder (formerly called multiple personality disorder) involves distinct identity states, many people experience milder forms of dissociation like depersonalization (feeling detached from oneself) or derealization (feeling the world is unreal). All forms of dissociation involve some degree of disconnection from full awareness."
            }
          },
          {
            "@type": "Question",
            "name": "How long does treatment for dissociative disorders take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Treatment for dissociative disorders is typically longer-term, often lasting several years, especially for more complex presentations like Dissociative Identity Disorder. The pace of treatment is determined by the client's needs and readiness, focusing first on stabilization before addressing traumatic material."
            }
          },
          {
            "@type": "Question",
            "name": "Can medication cure dissociative disorders?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "There are no medications that specifically cure dissociation. However, psychiatric medications are highly effective in treating the severe anxiety, depression, or sleep disturbances that almost always accompany dissociative disorders. Therapy (such as EMDR or CBT) remains the primary treatment for the dissociation itself."
            }
          },
          {
            "@type": "Question",
            "name": "What causes dissociative disorders?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dissociative disorders usually develop as a psychological response to severe trauma, particularly chronic physical, sexual, or emotional abuse during childhood. The dissociation serves as a survival mechanism, allowing the mind to detach from an overwhelmingly painful reality."
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
      <DissociativeDisordersClient />
    </>
  );
}
