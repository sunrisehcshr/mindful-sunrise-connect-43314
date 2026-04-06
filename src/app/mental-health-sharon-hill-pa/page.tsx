import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import MentalHealthGeoClient, { GeoContentProps } from '../mental-health-yeadon-pa/MentalHealthGeoClient';

export const metadata: Metadata = createPageMetadata({
  title: "Best Mental Health Services in Sharon Hill, PA | Medicaid Accepted | Sunrise",
  description: "Find the best mental health services in Sharon Hill, PA. Top-rated therapy and psychiatric care for the Sharon Hill community. 100% Medicaid accepted. No waitlists.",
  path: "/mental-health-sharon-hill-pa",
  keywords: ["best mental health sharon hill pa", "top therapy sharon hill pa", "psychiatrist sharon hill pa", "Delaware County mental health", "sharon hill counseling services", "Medicaid mental health PA", "immediate therapy sharon hill pa", "behavioral health sharon hill pa"],
});

export default function MentalHealthSharonHillPage() {
  const location = "Sharon Hill";
  
  const sharonHillFAQs = [
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
      answer: `Our Darby clinic is located just 1.2 miles from ${location}, which is typically a quick 5-minute drive. This makes it a very convenient option for ${location} residents seeking in-person therapy.`
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/contact" },
    { name: "Sharon Hill, PA", url: "/mental-health-sharon-hill-pa" }
  ];

  const serviceData = {
    name: `Mental Health Services for ${location}, PA`,
    description: `Compassionate mental health services for ${location} residents. Specialized therapy and psychiatry with no waitlist and Medicaid acceptance. Just 1.2 miles from ${location}.`,
    serviceType: "Mental Health Clinic"
  };

  const pageContent: GeoContentProps = {
    heroHeadline: <>
      Don't drive 45 minutes for therapy. <br />
      <span className="font-instrument-serif italic text-orange-500 font-normal">Premium mental health care is near Sharon Hill.</span>
    </>,
    heroSubheadline: "Small communities shouldn't have to settle for subpar care. Experience a modern, welcoming environment with expert psychiatric support just 5 minutes from your door.",
    problemHeadline: <>
      Why is finding accessible mental health care in Sharon Hill <span className="font-instrument-serif italic text-orange-500">so difficult?</span>
    </>,
    problemText1: "Small communities like Sharon Hill often get overlooked by the massive healthcare networks. When you need intensive behavioral support for your child or a psychiatric evaluation for yourself, you shouldn't have to drive 45 minutes into the city.",
    problemText2: "Yet, that's exactly what happens to most families in Sharon Hill. You're placed on waitlists that stretch for months. You're told they don't accept your Medicaid plan, or you're treated like an afterthought in an overwhelmed hospital system.",
    problemHighlight: "Mental health crises do not operate on a four-month delay. When you or your child are struggling, you need expert help right now, close to your neighborhood.",
    solutionHeadline: <>
      Sunrise Human Care Services was built to <span className="font-instrument-serif italic text-orange-500">fix this broken system.</span>
    </>,
    solutionText1: "We established our clinic at 869 Main Street in Darby, PA—just 1.2 miles from Sharon Hill—with one clear promise: to provide premium, evidence-based psychiatric care to the Medicaid community, without the wait.",
    solutionText2: "We prioritize immediate intake. If you need help, our dedicated team of local therapists and psychiatrists will get you on the schedule. We treat our patients with the dignity, privacy, and clinical excellence they deserve.",
    expertCareHeadline: <>
      What does expert mental health care <span className="font-instrument-serif italic text-orange-500">look like?</span>
    </>,
    expertCareText1: "It looks like Individual Therapy that digs into the root causes of your trauma, rather than just putting a band-aid on the symptoms. It looks like Medication Management where your psychiatrist actually listens to your concerns.",
    expertCareText2: "For families in Sharon Hill, it looks like our Intensive Behavioral Health Services (IBHS). Instead of asking you to drag your struggling child to a sterile clinic, our behavioral technicians go directly to your home or their school to provide support right where the behaviors happen.",
    localAdvantageText: <>
      Located at 869 Main Street in Darby, PA (19023), our clinic is an incredibly quick 5-minute drive from Sharon Hill. We provide a warm, modern environment for healing, directly accessible without the hassle of a long commute.
    </>
  };

  return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={sharonHillFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <MentalHealthGeoClient location={location} content={pageContent} />
    </>
  );
}
