import React from 'react';
import { Metadata } from 'next';
import FamilyTherapyClient from './FamilyTherapyClient';

export const metadata: Metadata = {
  title: "Family Therapy in Darby, PA | Sunrise Human Care", // 50 chars
  description: "Expert family therapy in Darby, PA. Our licensed therapists help families improve communication, resolve conflicts, and strengthen connections. Accept Medicaid.", // 159 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/family-therapy-darby-pa",
  },
  keywords: "family therapy Darby PA, family counseling Delaware County, family therapist PA, strengthen family bonds Darby, family support services PA",
};

export default function FamilyTherapyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalService",
        "name": "Family Therapy in Darby, PA",
        "description": "Expert family therapy and counseling services in Darby, PA to help families improve communication, resolve conflicts, and strengthen connections.",
        "serviceType": "Family Counseling",
        "provider": {
          "@type": "MedicalBusiness",
          "name": "Sunrise Human Care Services",
          "address": "869 Main Street, Darby, PA 19023"
        },
        "areaServed": "Darby, PA",
        "availableService": "TherapyService",
        "medicalSpecialty": "Psychiatry",
        "uses": [
          "Structural Family Therapy",
          "Strategic Family Therapy",
          "Narrative Family Therapy",
          "Systemic Family Therapy",
          "Attachment-Based Family Therapy"
        ]
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Family Therapy",
            "item": "https://sunrisehumancare.com/family-therapy-darby-pa"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do all family members need to attend therapy sessions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ideally, all household members participate, as family therapy works best when everyone is involved. However, we can begin with available family members and incorporate others as therapy progresses. Our therapists are skilled at adapting the process to your family's specific situation."
            }
          },
          {
            "@type": "Question",
            "name": "Are children included in family therapy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, children are included in our family therapy sessions as they're important members of the family system. Our experienced therapists adapt their approach based on children's ages, using age-appropriate techniques to ensure everyone can meaningfully participate."
            }
          },
          {
            "@type": "Question",
            "name": "How long does family therapy typically last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Family therapy generally ranges from 8-20 sessions, depending on your family's specific needs and goals. Some families complete treatment in a few months, while others benefit from longer-term counseling. We'll discuss expected timeframes during your initial consultation."
            }
          },
          {
            "@type": "Question",
            "name": "Will the therapist take sides in family conflicts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, our therapists remain neutral and do not take sides. Their role is to help all family members communicate effectively, understand each other's perspectives, and work together toward positive change."
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
      <FamilyTherapyClient />
    </>
  );
}