import React from 'react';
import { Metadata } from 'next';
import OCDClient from './OCDClient';

export const metadata: Metadata = {
  title: "OCD Treatment in Darby, PA | ERP Therapy | Sunrise", // 53 chars
  description: "Specialized OCD therapy in Darby, PA. Evidence-based treatment using ERP (Exposure and Response Prevention) and medication management. Medicaid accepted.", // 155 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/ocd-therapy-darby-pa",
  },
  keywords: "OCD treatment Darby PA, ERP therapy Delaware County, intrusive thoughts help, compulsion reduction therapy, OCD specialist near me, contamination OCD treatment",
};

export default function OCDTreatmentPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": "OCD Treatment in Darby, PA",
        "description": "Evidence-based therapy and psychiatric medication management for Obsessive-Compulsive Disorder (OCD) using Exposure and Response Prevention (ERP) in Darby, PA.",
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
            "name": "OCD Treatment",
            "item": "https://sunrisehumancare.com/ocd-therapy-darby-pa"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How is OCD different from being a perfectionist or liking things organized?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While perfectionism involves high standards, OCD involves unwanted, intrusive thoughts (obsessions) that cause significant distress. Compulsive behaviors are performed not out of preference, but out of a desperate need to reduce anxiety or prevent a feared outcome. OCD symptoms typically interfere substantially with daily functioning."
            }
          },
          {
            "@type": "Question",
            "name": "Is Exposure and Response Prevention (ERP) therapy difficult?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ERP is challenging because it involves intentionally facing feared situations and tolerating anxiety without performing compulsions. However, it is done gradually. We start with less difficult situations and progress at your pace. Most clients find that the temporary discomfort of ERP is well worth the long-term freedom it provides."
            }
          },
          {
            "@type": "Question",
            "name": "How long does OCD treatment typically take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The duration of treatment varies depending on OCD severity and individual factors. Many clients see significant improvement within 12 to 20 weeks of regular ERP sessions and medication management. We provide a personalized timeline after your comprehensive initial psychiatric assessment."
            }
          },
          {
            "@type": "Question",
            "name": "Can medication help with OCD?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. Certain medications, primarily specific SSRIs (Selective Serotonin Reuptake Inhibitors) given at higher doses than typically used for depression, are highly effective for OCD. Our psychiatric providers specialize in finding the right medication balance to complement your therapy."
            }
          },
          {
            "@type": "Question",
            "name": "Can OCD be cured completely?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "OCD is considered a chronic neurobiological condition, meaning there is no permanent 'cure'. However, with proper evidence-based treatment (ERP and medication), many people achieve significant symptom reduction and even full remission. The goal is to help you manage symptoms so effectively that OCD no longer dictates your life choices."
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
      <OCDClient />
    </>
  );
}