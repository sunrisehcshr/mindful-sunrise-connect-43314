import React from 'react';
import { Metadata } from 'next';
import ConditionsClient from './ConditionsClient';

export const metadata: Metadata = {
  title: "Mental Health Conditions We Treat in Darby | Sunrise", // 55 chars
  description: "Comprehensive treatment for anxiety, depression, bipolar disorder, PTSD, ADHD, and other complex mental health conditions in Darby, PA. Medicaid accepted.", // 156 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/conditions",
  },
  keywords: "mental health conditions Darby PA, depression treatment Delaware County, anxiety therapy PA, PTSD treatment near me, ADHD diagnosis Darby",
};

export default function ConditionsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": "Mental Health Conditions Treated in Darby, PA",
        "description": "Comprehensive diagnostic and treatment information for various mental health conditions including anxiety, depression, bipolar disorder, and PTSD.",
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
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Mental Health Conditions Treated",
        "description": "List of mental health conditions treated at Sunrise Human Care Services.",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Anxiety Disorders",
            "url": "https://sunrisehumancare.com/anxiety-therapy-darby-pa"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Depression",
            "url": "https://sunrisehumancare.com/depression-therapy-darby-pa"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Bipolar Disorder",
            "url": "https://sunrisehumancare.com/bipolar-disorder-therapy-darby-pa"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "PTSD",
            "url": "https://sunrisehumancare.com/ptsd-therapy-darby-pa"
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
      <ConditionsClient />
    </>
  );
}
