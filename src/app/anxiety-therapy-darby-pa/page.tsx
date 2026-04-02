import React from 'react';
import { Metadata } from 'next';
import AnxietyClient from './AnxietyClient';

export const metadata: Metadata = {
  title: "Anxiety Therapy & Treatment in Darby, PA | Sunrise", // 50 chars
  description: "Expert anxiety treatment in Darby, PA. We specialize in Generalized Anxiety (GAD), panic attacks, and social anxiety. 100% Medicaid accepted. Book today.", // 154 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/anxiety-therapy-darby-pa",
  },
  keywords: "anxiety therapy Darby PA, anxiety treatment Delaware County, panic attack help near me, GAD treatment PA, social anxiety therapy",
};

export default function AnxietyTherapyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": "Anxiety Treatment in Darby, PA",
        "description": "Evidence-based anxiety treatment for Generalized Anxiety Disorder, Panic Disorder, and Social Anxiety in Darby, PA. Medicaid accepted.",
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
            "name": "Anxiety Treatment",
            "item": "https://sunrisehumancare.com/anxiety-therapy-darby-pa"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is anxiety genetic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, there is a genetic component to anxiety disorders. Having a family member with an anxiety disorder can increase your risk. However, genetics are only one factor; environmental stressors, trauma, and brain chemistry also play significant roles."
            }
          },
          {
            "@type": "Question",
            "name": "Can therapy help with anxiety disorders?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Therapy, particularly Cognitive Behavioral Therapy (CBT), is considered the gold standard for anxiety treatment. It helps individuals identify and challenge anxious thoughts, develop coping strategies, and gradually face feared situations in a safe environment."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between a panic attack and an anxiety attack?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A panic attack is sudden, intense, and often occurs without an obvious trigger, accompanied by severe physical symptoms like a racing heart and shortness of breath. An 'anxiety attack' is not a clinical term, but people usually use it to describe a period of intense worry and distress that builds gradually, often in response to a specific stressor."
            }
          },
          {
            "@type": "Question",
            "name": "How do I know if my anxiety is a disorder?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Occasional anxiety is a normal part of life. However, if your anxiety is persistent, difficult to control, out of proportion to the actual danger, and interferes with your daily activities, relationships, or work, it may be an anxiety disorder that requires professional treatment."
            }
          },
          {
            "@type": "Question",
            "name": "Will I need medication for my anxiety?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not necessarily. Many people effectively manage anxiety through therapy and lifestyle changes alone. However, for moderate to severe anxiety, a combination of therapy and psychiatric medication (such as SSRIs or SNRIs) is often the most effective approach. Our providers will evaluate your specific needs."
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
      <AnxietyClient />
    </>
  );
}