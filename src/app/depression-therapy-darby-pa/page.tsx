import React from 'react';
import { Metadata } from 'next';
import DepressionClient from './DepressionClient';

export const metadata: Metadata = {
  title: "Depression Therapy & Treatment in Darby, PA | Sunrise", // 54 chars
  description: "Expert depression treatment in Darby, PA. We specialize in Major Depressive Disorder, PDD, and SAD. 100% Medicaid accepted. Book your evaluation today.", // 155 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/depression-therapy-darby-pa",
  },
  keywords: "depression therapy Darby PA, depression treatment Delaware County, major depressive disorder help, SAD treatment PA, persistent depressive disorder",
};

export default function DepressionTherapyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": "Depression Treatment in Darby, PA",
        "description": "Evidence-based depression treatment for Major Depressive Disorder, Persistent Depressive Disorder, and Seasonal Affective Disorder in Darby, PA. Medicaid accepted.",
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
            "name": "Depression Treatment",
            "item": "https://sunrisehumancare.com/depression-therapy-darby-pa"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How is depression different from just feeling sad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While sadness is a normal human emotion triggered by difficult events, clinical depression is a persistent mood disorder. Sadness usually comes in waves and allows for moments of joy, whereas depression is a constant heavy cloud that affects your sleep, appetite, energy, and self-worth for weeks or months at a time."
            }
          },
          {
            "@type": "Question",
            "name": "Can therapy alone cure my depression?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For mild to moderate depression, therapy (especially Cognitive Behavioral Therapy) is often highly effective on its own. It helps you build coping skills and rewire negative thought patterns. However, for severe depression, a combination of therapy and medication is usually the gold standard of treatment."
            }
          },
          {
            "@type": "Question",
            "name": "How long does depression treatment take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "There is no set timeline, as it depends on the severity and type of depression. Many patients start noticing improvements in their sleep and energy levels within 4 to 6 weeks of starting treatment. Deeper emotional shifts often occur over 3 to 6 months of consistent therapy."
            }
          },
          {
            "@type": "Question",
            "name": "What if I'm too exhausted to even attend therapy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Extreme fatigue is a core symptom of depression. We understand how hard it can be to take that first step. We offer telehealth appointments so you can begin treatment from the comfort of your home, removing the barrier of having to travel when you're feeling depleted."
            }
          },
          {
            "@type": "Question",
            "name": "Is depression genetic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Genetics do play a role; if you have a first-degree relative with depression, your risk is higher. However, it's usually a combination of genetic vulnerability, brain chemistry, and environmental stressors (like trauma, loss, or chronic stress) that trigger a depressive episode."
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
      <DepressionClient />
    </>
  );
}