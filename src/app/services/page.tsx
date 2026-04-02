import React from 'react';
import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: "Mental Health Services in Darby, PA | Therapy & Psychiatry | Sunrise Human Care", // 80 chars (slightly long but highly relevant)
  description: "Comprehensive mental health services in Darby, PA. We offer therapy for anxiety, depression, ADHD, trauma, and psychiatric evaluations. Accept Medicaid.", // 156 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/services",
  },
  keywords: "mental health services Darby, therapy Delaware County PA, counseling services Pennsylvania, psychiatry Darby, anxiety therapy PA, depression treatment Darby",
};

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalService",
        "name": "Mental Health Services in Darby, PA",
        "description": "Comprehensive mental health services including therapy, counseling, and psychiatric care for individuals, families, and couples in Darby and Delaware County.",
        "serviceType": "MedicalService",
        "provider": {
          "@type": "MedicalBusiness",
          "name": "Sunrise Human Care Services",
          "address": "869 Main Street, Darby, PA 19023"
        },
        "areaServed": "Darby, PA and Delaware County",
        "availableService": "TherapyService",
        "medicalSpecialty": "Psychiatry",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Mental Health Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalService",
                "name": "Individual Therapy"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalService",
                "name": "Couples Counseling"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalService",
                "name": "Family Therapy"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalService",
                "name": "Child & Adolescent Therapy"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalService",
                "name": "Psychiatric Evaluations"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalService",
                "name": "Medication Management"
              }
            }
          ]
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
            "name": "Services",
            "item": "https://sunrisehumancare.com/services"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you accept Medicaid for therapy and psychiatry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Sunrise Human Care Services exclusively accepts Medicaid. We believe high-quality mental health care should be accessible to everyone in Delaware County, without financial barriers."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between therapy and a psychiatric evaluation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Therapy (or counseling) involves regular sessions to discuss feelings, behaviors, and coping strategies. A psychiatric evaluation is a diagnostic assessment performed by a medical professional who can prescribe medications to help manage your symptoms."
            }
          },
          {
            "@type": "Question",
            "name": "Can I receive both therapy and medication management at your clinic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. In fact, we encourage it. Research shows that combining talk therapy with appropriate medication management often yields the best outcomes for conditions like depression, anxiety, and ADHD."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer services for children and teenagers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we have specialized child and adolescent therapists on staff. We offer play therapy for younger children and cognitive behavioral approaches tailored specifically for teens navigating school, peer, and family challenges."
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
      <ServicesClient />
    </>
  );
}