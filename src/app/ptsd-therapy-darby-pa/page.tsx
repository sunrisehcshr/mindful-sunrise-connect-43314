import React from 'react';
import { Metadata } from 'next';
import PTSDClient from './PTSDClient';

export const metadata: Metadata = {
  title: "Trauma & PTSD Treatment in Darby, PA | Sunrise Human Care", // 60 chars
  description: "Expert trauma and PTSD treatment in Darby, PA. Specialized care including EMDR and TF-CBT for acute PTSD and Complex PTSD (C-PTSD). Medicaid accepted.", // 153 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/ptsd-therapy-darby-pa",
  },
  keywords: "PTSD treatment Darby PA, trauma therapy Delaware County, EMDR therapist near me, complex PTSD treatment, CPTSD therapy PA, trauma recovery",
};

export default function PTSDTreatmentPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": "Trauma and PTSD Treatment in Darby, PA",
        "description": "Evidence-based, trauma-informed therapy and psychiatric care for Post-Traumatic Stress Disorder (PTSD) and Complex PTSD (C-PTSD) in Darby, PA.",
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
            "name": "PTSD & Trauma Treatment",
            "item": "https://sunrisehumancare.com/ptsd-therapy-darby-pa"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do I have to talk about my trauma in detail?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not necessarily. While traditional talk therapy involves discussing the event, specialized trauma therapies like EMDR (Eye Movement Desensitization and Reprocessing) often require very little verbal description of the traumatic event. Our priority is your safety and emotional regulation; we will never force you to recount details before you are ready."
            }
          },
          {
            "@type": "Question",
            "name": "Can you get PTSD from something that isn't military combat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. While PTSD was initially recognized in veterans, it can develop after any event where you felt your life or safety (or the life/safety of others) was in danger. Common causes include car accidents, domestic abuse, sexual assault, medical trauma, childhood neglect, or sudden loss."
            }
          },
          {
            "@type": "Question",
            "name": "What is Complex PTSD (C-PTSD)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Traditional PTSD is often linked to a single traumatic event (like an accident). Complex PTSD (C-PTSD) develops from chronic, prolonged, or repeated trauma from which escape was difficult or impossible—such as childhood abuse, domestic violence, or human trafficking. It includes PTSD symptoms plus severe difficulties with emotional regulation and self-worth."
            }
          },
          {
            "@type": "Question",
            "name": "Will trauma therapy make my symptoms worse?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is common to experience a temporary increase in distress when you first begin processing trauma—similar to cleaning out a wound. However, our highly trained therapists focus heavily on 'resourcing' (teaching you grounding and coping skills) before any trauma processing begins, ensuring you have the tools to manage distress safely."
            }
          },
          {
            "@type": "Question",
            "name": "Can PTSD ever go away completely?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. With evidence-based treatment like EMDR or Trauma-Focused CBT, many individuals experience a complete remission of their PTSD symptoms. While the memory of the event remains, it loses its emotional charge and stops triggering the intense physical 'fight or flight' response, allowing you to reclaim your life."
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
      <PTSDClient />
    </>
  );
}