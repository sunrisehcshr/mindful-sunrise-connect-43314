import React from 'react';
import { Metadata } from 'next';
import MedicationManagementClient from './MedicationManagementClient';

export const metadata: Metadata = {
  title: "Medication Management in Darby, PA | Sunrise Human Care", // 56 chars
  description: "Expert psychiatric medication management in Darby, PA. Our board-certified providers offer personalized plans and monitoring for optimal mental health. Accept Medicaid.", // 166 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/medication-management-darby-pa",
  },
  keywords: "medication management Darby PA, psychiatric medication Delaware County, psychiatrist near me PA, medication for anxiety Darby, depression medication PA, ADHD medication management",
};

export default function MedicationManagementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalService",
        "name": "Medication Management in Darby, PA",
        "description": "Expert psychiatric medication management services in Darby, PA to provide personalized medication plans and regular monitoring for optimal mental health.",
        "serviceType": "Psychiatric Medication Management",
        "provider": {
          "@type": "MedicalBusiness",
          "name": "Sunrise Human Care Services",
          "address": "869 Main Street, Darby, PA 19023"
        },
        "areaServed": "Darby, PA",
        "availableService": "TherapyService",
        "medicalSpecialty": "Psychiatry",
        "uses": [
          "Comprehensive Evaluation",
          "Personalized Plans",
          "Regular Monitoring"
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
            "name": "Medication Management",
            "item": "https://sunrisehumancare.com/medication-management-darby-pa"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long will I need to take psychiatric medication?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The duration of medication treatment varies depending on your condition, symptoms, and response. Some individuals may need short-term medication during specific episodes, while others benefit from longer-term treatment for chronic conditions. We regularly review the need for continued medication and adjust treatment plans accordingly, always prioritizing your well-being and quality of life."
            }
          },
          {
            "@type": "Question",
            "name": "What if I experience side effects from my medication?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Side effects are taken very seriously in our practice. While some side effects may be temporary as your body adjusts, we carefully monitor any reactions you experience. We can often adjust dosages or switch to alternative medications if needed. It's important to communicate any concerns about side effects promptly, and we provide detailed guidance on managing potential side effects."
            }
          },
          {
            "@type": "Question",
            "name": "How often will I need to come in for medication management appointments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Initially, appointments are typically more frequent (every 2-4 weeks) as we establish the right medication and dosage. Once your symptoms are stable, visits may be scheduled less frequently (every 1-3 months). The schedule is always personalized based on your specific needs, response to medication, and overall stability."
            }
          },
          {
            "@type": "Question",
            "name": "Can I combine medication with therapy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, and we often recommend this combined approach. Research shows that for many mental health conditions, the combination of medication and therapy provides better outcomes than either treatment alone. We collaborate closely with therapists to ensure coordinated care and optimal results."
            }
          },
          {
            "@type": "Question",
            "name": "Will my insurance cover psychiatric medication management?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We exclusively accept Medicaid for medication management services. Our staff will verify your coverage and discuss any potential costs before beginning treatment. We strive to make mental health care accessible and affordable for our community."
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
      <MedicationManagementClient />
    </>
  );
}
