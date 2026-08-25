import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import MentalHealthGeoClient, { GeoContentProps } from '../mental-health-yeadon-pa/MentalHealthGeoClient';

export const metadata: Metadata = createPageMetadata({
  title: "Best Mental Health Services in Upper Darby, PA | Medicaid A…",
  description: "Find the best mental health services in Upper Darby, PA. Top-rated therapy and psychiatric care for the Upper Darby community. 100% Medicaid accepted. No…",
  path: "/mental-health-upper-darby-pa",
  keywords: ["best mental health upper darby pa", "top therapy upper darby pa", "psychiatrist upper darby pa", "Delaware County mental health", "upper darby counseling services", "Medicaid mental health PA", "immediate therapy upper darby pa", "behavioral health upper darby pa"],
});

export default function MentalHealthUpperDarbyPage() {
  const location = "Upper Darby";

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/contact" },
    { name: "Upper Darby, PA", url: "/mental-health-upper-darby-pa" }
  ];

  const serviceData = {
    name: `Mental Health Services for ${location}, PA`,
    description: `Compassionate mental health services for ${location} residents. Specialized therapy and psychiatry with no waitlist and Medicaid acceptance. Just 3 miles from ${location}.`,
    serviceType: "Mental Health Clinic"
  };

  const pageContent: GeoContentProps = {
    heroHeadline: <>
      Skip the 69th Street waitlists. <br />
      <span className="font-instrument-serif italic text-orange-500 font-normal">Get immediate psychiatric care near Upper Darby.</span>
    </>,
    heroSubheadline: "When you're struggling, four months is too long to wait. Our dedicated team provides expert therapy and medication management with zero waitlists. 100% Medicaid accepted.",
    problemHeadline: <>
      Why is finding good mental health care in Upper Darby <span className="font-instrument-serif italic text-orange-500">so difficult?</span>
    </>,
    problemText1: "Upper Darby is one of the most populated townships in Pennsylvania. But despite the density, the clinics near 69th Street Terminal are often completely overwhelmed. When you make the brave choice to seek help for anxiety, depression, or your child's behavioral issues, what happens?",
    problemText2: "You are placed on a waitlist that stretches for three to four months. You're told they don't accept your Medicaid plan, or you're treated like just another number in a crowded waiting room.",
    problemHighlight: "Mental health crises do not operate on a four-month delay. When you are struggling to get out of bed or your child is facing suspension, you need help right now.",
    solutionHeadline: <>
      Sunrise Human Care Services was built to <span className="font-instrument-serif italic text-orange-500">fix this broken system.</span>
    </>,
    solutionText1: "We established our clinic at 869 Main Street in Darby, PA—just a quick 10-minute drive from Upper Darby—with one clear promise: to provide premium, evidence-based psychiatric care to the Medicaid community, without the wait.",
    solutionText2: "We prioritize immediate intake. If you need help, our dedicated team of licensed therapists and psychiatrists will get you on the schedule. We treat our patients with the dignity, privacy, and clinical excellence they deserve.",
    expertCareHeadline: <>
      What does expert mental health care <span className="font-instrument-serif italic text-orange-500">look like?</span>
    </>,
    expertCareText1: "It looks like Individual Therapy that digs into the root causes of your trauma, rather than just putting a band-aid on the symptoms. It looks like Medication Management where your psychiatrist actually listens to your concerns.",
    expertCareText2: "For families in Upper Darby, it looks like our Intensive Behavioral Health Services (IBHS). Instead of asking you to drag your struggling child to a sterile clinic, our behavioral technicians go directly to your home or their school in the Upper Darby School District to provide support right where the behaviors happen.",
    locationHeadline: <>
      Conveniently located just <span className="font-instrument-serif italic text-orange-500">10 minutes away.</span>
    </>,
    locationSubheadline: <>
      Serving Upper Darby <br />
      <span className="font-instrument-serif italic text-orange-500">and Delaware County.</span>
    </>,
    localAdvantageText: <>
      Located at 869 Main Street in Darby, PA (19023), our clinic is easily accessible from Upper Darby via a short drive down Lansdowne Ave. Escape the crowded clinics and experience a calm, modern environment designed for healing.
    </>,
    servicesHeadline: <>
      Our Specialized Services near <span className="font-instrument-serif italic text-orange-500">Upper Darby</span>
    </>,
    servicesSubheadline: "From individual counseling to comprehensive psychiatric evaluations, we provide a full spectrum of mental health support tailored for Upper Darby residents.",
    faqHeadline: <>
      Your questions about Upper Darby care, <span className="font-instrument-serif italic text-orange-500">answered.</span>
    </>,
    servicesOverrides: {
      individual: "Private, 1-on-1 sessions with a licensed therapist. Avoid crowded waiting rooms and get the personalized attention you deserve.",
      couples: "Supportive therapy for partners looking to strengthen communication, rebuild trust, and navigate relationship challenges together.",
      family: "Guided sessions designed to improve family dynamics, resolve conflicts, and foster healthier connections among family members.",
      child: "Age-appropriate therapeutic support for Upper Darby children and teens facing emotional, behavioral, or developmental concerns.",
      psychiatric: "Skip the 4-month waitlist. Get comprehensive psychiatric evaluations conducted by qualified professionals immediately.",
      medication: "Careful oversight of psychiatric medications to ensure safe, effective treatment as part of a comprehensive care plan.",
      grief: "Compassionate support for individuals processing loss and navigating the emotional journey of grief in a safe space.",
      relationship: "Therapeutic guidance for individuals seeking to improve interpersonal skills and build healthier relationships."
    },
    faqOverrides: [
      {
        question: "Why should I choose Sunrise over clinics closer to 69th Street?",
        answer: "Clinics in densely populated areas of Upper Darby are often overwhelmed, leading to rushed sessions and months-long waitlists. By driving just 10 minutes down Lansdowne Ave to our Darby location, you get immediate access to premium care without the wait."
      },
      {
        question: "Do you accept Medicaid for Upper Darby residents?",
        answer: "Yes, Sunrise Human Care Services is a Medicaid-only provider. We are dedicated to providing high-quality mental health care to Medicaid recipients in Upper Darby and surrounding Delaware County areas."
      },
      {
        question: "Is there a waitlist for therapy near Upper Darby?",
        answer: "No, we currently have no waitlist for new patients. We typically respond to all inquiries within 24 hours, ensuring you get the support you need quickly."
      },
      {
        question: "How far is the Darby clinic from Upper Darby, PA?",
        answer: "Our Darby clinic is located just 3 miles from Upper Darby, which is typically a quick 10-minute drive. This makes it a very convenient option for Upper Darby residents seeking in-person therapy."
      }
    ]
  };

  return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={pageContent.faqOverrides} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <MentalHealthGeoClient location={location} content={pageContent} />
    </>
  );
}
