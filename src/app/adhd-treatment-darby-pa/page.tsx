import React from 'react';
import { Metadata } from 'next';
import ADHDClient from './ADHDClient';

export const metadata: Metadata = {
  title: "ADHD Testing & Treatment in Darby, PA | Sunrise", // 49 chars
  description: "Comprehensive ADHD assessment and treatment in Darby, PA. Specialized care for Inattentive, Hyperactive, and Combined types. Medicaid accepted.", // 145 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/adhd-treatment-darby-pa",
  },
  keywords: "ADHD treatment Darby PA, ADHD testing Delaware County, adult ADHD diagnosis near me, ADD treatment PA, child ADHD therapy",
};

export default function ADHDTreatmentPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": "ADHD Treatment in Darby, PA",
        "description": "Evidence-based assessment and treatment for Attention-Deficit/Hyperactivity Disorder (ADHD) in children and adults in Darby, PA.",
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
            "name": "ADHD Treatment",
            "item": "https://sunrisehumancare.com/adhd-treatment-darby-pa"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is ADHD a real condition or just a lack of discipline?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ADHD is a legitimate, highly researched neurodevelopmental condition. Brain imaging studies show distinct differences in the structure and function of brains in individuals with ADHD, particularly in areas controlling executive function. It is not caused by laziness, poor parenting, or a lack of discipline."
            }
          },
          {
            "@type": "Question",
            "name": "Do I have to take stimulant medication to treat ADHD?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not necessarily. While stimulant medications (like Adderall or Ritalin) are often the most effective first-line treatment for managing symptoms, non-stimulant medications and behavioral therapies are also highly effective. We provide comprehensive evaluations to find the safest and best approach for your specific needs and medical history."
            }
          },
          {
            "@type": "Question",
            "name": "I was never diagnosed as a child. Can adults have ADHD?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Many adults with ADHD were never diagnosed in childhood, especially those who did not exhibit disruptive hyperactive behaviors. Adult ADHD often presents as chronic disorganization, missed deadlines, relationship issues, and persistent feelings of underachievement despite high intelligence."
            }
          },
          {
            "@type": "Question",
            "name": "How does therapy help with ADHD?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Therapy, particularly Cognitive Behavioral Therapy (CBT) adapted for ADHD, helps you develop practical executive functioning skills. We focus on building systems for time management, organization, and emotional regulation, while also addressing the anxiety and low self-esteem that often accompany living with unmanaged ADHD."
            }
          },
          {
            "@type": "Question",
            "name": "Is ADHD genetic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, ADHD has a very strong genetic component. Research indicates that if a parent has ADHD, their child has a significantly higher chance of also having the condition. It is one of the most highly heritable psychiatric disorders."
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
      <ADHDClient />
    </>
  );
}