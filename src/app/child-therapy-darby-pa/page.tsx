import React from 'react';
import { Metadata } from 'next';
import ChildTherapyClient from './ChildTherapyClient';

export const metadata: Metadata = {
  title: "Child & Adolescent Therapy in Darby, PA | Sunrise Human Care", // 60 chars
  description: "Specialized child and adolescent therapy in Darby, PA. Our experienced therapists help youth manage anxiety, depression, and behavioral challenges. Accept Medicaid.", // 160 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/child-therapy-darby-pa",
  },
  keywords: "child therapy Darby PA, teen counseling Delaware County, youth mental health PA, adolescent therapist Darby, play therapy Darby",
};

export default function ChildTherapyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalService",
        "name": "Child and Adolescent Therapy in Darby, PA",
        "description": "Specialized child and adolescent therapy in Darby, PA to help youth manage anxiety, depression, and behavioral challenges in a safe environment.",
        "serviceType": "Child Therapy",
        "provider": {
          "@type": "MedicalBusiness",
          "name": "Sunrise Human Care Services",
          "address": "869 Main Street, Darby, PA 19023"
        },
        "areaServed": "Darby, PA",
        "availableService": "TherapyService",
        "medicalSpecialty": "Psychiatry",
        "uses": [
          "Play Therapy",
          "Cognitive Behavioral Therapy (CBT)",
          "Family Systems Approach",
          "Art & Creative Expression"
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
            "name": "Child Therapy",
            "item": "https://sunrisehumancare.com/child-therapy-darby-pa"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I explain therapy to my child?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For younger children, we describe child therapy as a special place where they can play, talk, and learn about feelings. For teens, we explain that a therapist is someone who helps young people handle stress, emotions, and challenges. Our child therapists provide age-appropriate resources to help with this conversation."
            }
          },
          {
            "@type": "Question",
            "name": "Will I be involved in my child's therapy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, parent involvement is crucial to successful child therapy. While some sessions may be one-on-one with your child, our therapists regularly include parents for updates, education, and family sessions. The level of involvement varies based on your child's age and specific needs."
            }
          },
          {
            "@type": "Question",
            "name": "How long does child therapy typically last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Treatment duration varies depending on your child's specific needs and goals. Some children benefit from short-term therapy (8-12 sessions), while others may need ongoing support. We'll discuss timeframes during the initial consultation and provide regular updates on progress."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle confidentiality with children and teens?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We balance a child's need for privacy with parents' right to information. We maintain confidentiality except in cases of safety concerns, but also work to facilitate healthy communication between children and parents about the therapeutic process."
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
      <ChildTherapyClient />
    </>
  );
}
