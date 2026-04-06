import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import MentalHealthGeoClient, { GeoContentProps } from '../mental-health-yeadon-pa/MentalHealthGeoClient';

export const metadata: Metadata = createPageMetadata({
  title: "Best Mental Health Services in Lansdowne, PA | Medicaid Accepted | Sunrise",
  description: "Find the best mental health services in Lansdowne, PA. Top-rated therapy and psychiatric care for the Lansdowne community. 100% Medicaid accepted. No waitlists.",
  path: "/mental-health-lansdowne-pa",
  keywords: ["best mental health lansdowne pa", "top therapy lansdowne pa", "psychiatrist lansdowne pa", "Delaware County mental health", "lansdowne counseling services", "Medicaid mental health PA", "immediate therapy lansdowne pa", "behavioral health lansdowne pa"],
});

export default function MentalHealthLansdownePage() {
  const location = "Lansdowne";
  
  const lansdowneFAQs = [
    {
      question: `Do you accept Medicaid for ${location} residents?`,
      answer: `Yes, Sunrise Human Care Services is a Medicaid-only provider. We are dedicated to providing high-quality mental health care to Medicaid recipients in ${location} and surrounding Delaware County areas.`
    },
    {
      question: `Is there a waitlist for therapy near ${location}?`,
      answer: "No, we currently have no waitlist for new patients. We typically respond to all inquiries within 24 hours, ensuring you get the support you need quickly."
    },
    {
      question: `How far is the Darby clinic from ${location}, PA?`,
      answer: `Our Darby clinic is located just 2 miles from ${location}, which is typically a quick 7-minute drive. This makes it a very convenient option for ${location} residents seeking in-person therapy.`
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/contact" },
    { name: "Lansdowne, PA", url: "/mental-health-lansdowne-pa" }
  ];

  const serviceData = {
    name: `Mental Health Services for ${location}, PA`,
    description: `Compassionate mental health services for ${location} residents. Specialized therapy and psychiatry with no waitlist and Medicaid acceptance. Just 2 miles from ${location}.`,
    serviceType: "Mental Health Clinic"
  };

  const pageContent: GeoContentProps = {
    heroHeadline: <>
      Finally, expert therapy in Lansdowne <br />
      <span className="font-instrument-serif italic text-orange-500 font-normal">that actually accepts your insurance.</span>
    </>,
    heroSubheadline: "Stop paying out of pocket or compromising on quality. We offer premium mental health and behavioral support tailored for your family, fully covered by Medicaid.",
    problemHeadline: <>
      Why is finding accessible mental health care in Lansdowne <span className="font-instrument-serif italic text-orange-500">so difficult?</span>
    </>,
    problemText1: "Lansdowne is a historic, tight-knit borough with a strong sense of community. But when it comes to specialized psychiatric care or intensive behavioral health that accepts Medicaid, options within the borough limits are extremely limited.",
    problemText2: "You make the brave choice to pick up the phone, only to find out the nearest clinic has a waitlist stretching for months, or they refuse to accept your insurance. You are forced to look outward, often sacrificing quality for affordability.",
    problemHighlight: "Mental health crises do not operate on a four-month delay. You shouldn't have to choose between waiting for care and paying out of pocket.",
    solutionHeadline: <>
      Sunrise Human Care Services was built to <span className="font-instrument-serif italic text-orange-500">fix this broken system.</span>
    </>,
    solutionText1: "We established our clinic at 869 Main Street in Darby, PA—just 2 miles from Lansdowne—with one clear promise: to provide premium, evidence-based psychiatric care to the Medicaid community, without the wait.",
    solutionText2: "We are not a massive, faceless hospital network. We are a dedicated team of local, licensed therapists and psychiatrists who treat our patients with the dignity, privacy, and clinical excellence they deserve.",
    expertCareHeadline: <>
      What does expert mental health care <span className="font-instrument-serif italic text-orange-500">look like?</span>
    </>,
    expertCareText1: "It looks like Individual Therapy that digs into the root causes of your trauma, rather than just putting a band-aid on the symptoms. It looks like Medication Management where your psychiatrist actually listens to your concerns and tracks your progress.",
    expertCareText2: "For families in Lansdowne, it looks like our Intensive Behavioral Health Services (IBHS). Instead of asking you to drag your struggling child to a sterile clinic, our behavioral technicians go directly to your home or school in the William Penn School District to provide support right where the behaviors happen.",
    localAdvantageText: <>
      Located at 869 Main Street in Darby, PA (19023), our clinic is a quick 7-minute drive from Lansdowne. We provide a warm, modern environment for healing, reachable via a straight shot down Lansdowne Ave.
    </>
  };

  return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={lansdowneFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <MentalHealthGeoClient location={location} content={pageContent} />
    </>
  );
}
