import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import MentalHealthGeoClient, { GeoContentProps } from '../mental-health-yeadon-pa/MentalHealthGeoClient';

export const metadata: Metadata = createPageMetadata({
  title: "Best Mental Health Services in Collingdale, PA | Medicaid Accepted | Sunrise",
  description: "Find the best mental health services in Collingdale, PA. Top-rated therapy and psychiatric care for the Collingdale community. 100% Medicaid accepted. No waitlists.",
  path: "/mental-health-collingdale-pa",
  keywords: ["best mental health collingdale pa", "top therapy collingdale pa", "psychiatrist collingdale pa", "Delaware County mental health", "collingdale counseling services", "Medicaid mental health PA", "immediate therapy collingdale pa", "behavioral health collingdale pa"],
});

export default function MentalHealthCollingdalePage() {
  const location = "Collingdale";
  
  const collingdaleFAQs = [
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
      answer: `Our Darby clinic is located just 1 mile from ${location}, which is typically a quick 4-minute drive. This makes it a very convenient option for ${location} residents seeking in-person therapy.`
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/contact" },
    { name: "Collingdale, PA", url: "/mental-health-collingdale-pa" }
  ];

  const serviceData = {
    name: `Mental Health Services for ${location}, PA`,
    description: `Compassionate mental health services for ${location} residents. Specialized therapy and psychiatry with no waitlist and Medicaid acceptance. Just 1 mile from ${location}.`,
    serviceType: "Mental Health Clinic"
  };

  const pageContent: GeoContentProps = {
    heroHeadline: <>
      Stop suffering in silence. <br />
      <span className="font-instrument-serif italic text-orange-500 font-normal">Find real help near Collingdale, PA.</span>
    </>,
    heroSubheadline: "Waitlists and out-of-pocket costs shouldn't keep you from healing. We provide high-quality therapy and psychiatric care just 4 minutes away. 100% Medicaid accepted.",
    problemHeadline: <>
      Why is finding good mental health care in Collingdale <span className="font-instrument-serif italic text-orange-500">so difficult?</span>
    </>,
    problemText1: "Working families in Collingdale are constantly juggling jobs, schools, and the hustle of daily life along the MacDade Blvd corridor. When a mental health crisis hits your household, the last thing you need is a clinic that doesn't answer the phone.",
    problemText2: "You finally decide to seek help for your anxiety, depression, or your child's behavioral issues. You make the brave choice to reach out, only to be told the nearest clinic is out of network, or their next available appointment is four months away.",
    problemHighlight: "Mental health crises do not operate on a four-month delay. When you are struggling to keep your family together, you need reliable help immediately.",
    solutionHeadline: <>
      Sunrise Human Care Services was built to <span className="font-instrument-serif italic text-orange-500">fix this broken system.</span>
    </>,
    solutionText1: "We established our clinic at 869 Main Street in Darby, PA—literally just 1 mile from Collingdale—with one clear promise: to provide premium, evidence-based psychiatric care to the Medicaid community, without the wait.",
    solutionText2: "We are not a massive, faceless hospital network where you are just a number. We are a dedicated, local team of licensed therapists, psychiatrists, and behavioral health technicians treating working families with the dignity and clinical excellence they deserve.",
    expertCareHeadline: <>
      What does expert mental health care <span className="font-instrument-serif italic text-orange-500">look like?</span>
    </>,
    expertCareText1: "It looks like Individual Therapy that digs into the root causes of your trauma, rather than just putting a band-aid on the symptoms. It looks like Medication Management where your psychiatrist actually listens to your concerns about side effects and adjusts your dosage carefully.",
    expertCareText2: "For families in Collingdale, it looks like our Intensive Behavioral Health Services (IBHS). Instead of asking you to drag your struggling child to a sterile clinic, our behavioral technicians go directly to your home or their local school to provide support right where the behaviors happen.",
    localAdvantageText: <>
      Located at 869 Main Street in Darby, PA (19023), our clinic is a remarkably fast 4-minute drive from Collingdale. We provide a warm, modern environment for healing, practically right in your backyard.
    </>
  };

  return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={collingdaleFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <MentalHealthGeoClient location={location} content={pageContent} />
    </>
  );
}
