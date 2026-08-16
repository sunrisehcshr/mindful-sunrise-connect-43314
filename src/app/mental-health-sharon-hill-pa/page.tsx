import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import MentalHealthGeoClient, { GeoContentProps } from '../mental-health-yeadon-pa/MentalHealthGeoClient';

export const metadata: Metadata = createPageMetadata({
  title: "Best Mental Health Services in Sharon Hill, PA | Medicaid A…",
  description: "Find the best mental health services in Sharon Hill, PA. Top-rated therapy and psychiatric care for the Sharon Hill community. 100% Medicaid accepted. No…",
  path: "/mental-health-sharon-hill-pa",
  keywords: ["best mental health sharon hill pa", "top therapy sharon hill pa", "psychiatrist sharon hill pa", "Delaware County mental health", "sharon hill counseling services", "Medicaid mental health PA", "immediate therapy sharon hill pa", "behavioral health sharon hill pa"],
});

export default function MentalHealthSharonHillPage() {
  const location = "Sharon Hill";

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
    heroSubheadline: "Small communities shouldn't have to settle for subpar care or massive waitlists. Experience a modern, welcoming environment with expert psychiatric support just 5 minutes from your door. 100% Medicaid accepted.",
    problemHeadline: <>
      Why is finding accessible mental health care in Sharon Hill <span className="font-instrument-serif italic text-orange-500">so difficult?</span>
    </>,
    problemText1: "Small communities like Sharon Hill often get overlooked by massive healthcare networks. When you need intensive behavioral support for your child or a psychiatric evaluation for yourself, you shouldn't have to drive deep into Philadelphia.",
    problemText2: "Yet, that's exactly what happens to most families in Sharon Hill. You are placed on waitlists that stretch for months. You are told they don't accept your Medicaid plan, or you are treated like an afterthought in an overwhelmed, understaffed clinic.",
    problemHighlight: "Mental health crises do not operate on a four-month delay. When you or your child are struggling, you need expert help right now, close to your neighborhood.",
    solutionHeadline: <>
      Sunrise Human Care Services was built to <span className="font-instrument-serif italic text-orange-500">fix this broken system.</span>
    </>,
    solutionText1: "We established our clinic at 869 Main Street in Darby, PA—just 1.2 miles from Sharon Hill—with one clear promise: to provide premium, evidence-based psychiatric care to the Medicaid community, without the wait.",
    solutionText2: "We prioritize immediate intake. If you need help, our dedicated team of local therapists and psychiatrists will get you on the schedule. We treat our patients with the dignity, privacy, and clinical excellence they deserve, without the long commute.",
    expertCareHeadline: <>
      What does expert mental health care <span className="font-instrument-serif italic text-orange-500">look like?</span>
    </>,
    expertCareText1: "It looks like Individual Therapy that digs into the root causes of your trauma, rather than just putting a band-aid on your symptoms. It looks like Medication Management where your psychiatrist actually listens to your concerns and doesn't rush you out the door.",
    expertCareText2: "For families in Sharon Hill, it looks like our Intensive Behavioral Health Services (IBHS). Instead of asking you to drag your struggling child to a sterile clinic, our behavioral technicians go directly to your home or their school in the Southeast Delco School District to provide support right where the behaviors happen.",
    locationHeadline: <>
      Conveniently located just <span className="font-instrument-serif italic text-orange-500">5 minutes away.</span>
    </>,
    locationSubheadline: <>
      Serving Sharon Hill <br />
      <span className="font-instrument-serif italic text-orange-500">and Delaware County.</span>
    </>,
    localAdvantageText: <>
      Located at 869 Main Street in Darby, PA (19023), our clinic is an incredibly quick 5-minute drive from Sharon Hill. We provide a warm, modern environment for healing, directly accessible without the hassle of city traffic.
    </>,
    servicesHeadline: <>
      Our Specialized Services near <span className="font-instrument-serif italic text-orange-500">Sharon Hill</span>
    </>,
    servicesSubheadline: "From individual counseling to comprehensive psychiatric evaluations, we provide a full spectrum of mental health support tailored for the Sharon Hill community.",
    faqHeadline: <>
      Your questions about Sharon Hill care, <span className="font-instrument-serif italic text-orange-500">answered.</span>
    </>,
    servicesOverrides: {
      individual: "Private, 1-on-1 sessions with a licensed therapist. Deep emotional healing for Sharon Hill residents who want high-quality care close to home.",
      couples: "Supportive therapy for partners looking to strengthen communication, rebuild trust, and navigate relationship challenges together.",
      family: "Guided sessions designed to improve family dynamics, resolve conflicts, and foster healthier connections among family members.",
      child: "Age-appropriate therapeutic support for Sharon Hill children and teens facing emotional, behavioral, or developmental concerns.",
      psychiatric: "Expert psychiatric evaluations without the standard months-long waitlist you find at large city hospitals.",
      medication: "Careful oversight of psychiatric medications to ensure safe, effective treatment as part of a comprehensive care plan.",
      grief: "Compassionate support for individuals processing loss and navigating the emotional journey of grief in a safe space.",
      relationship: "Therapeutic guidance for individuals seeking to improve interpersonal skills and build healthier relationships."
    },
    faqOverrides: [
      {
        question: "Why choose Sunrise over a larger Philadelphia clinic?",
        answer: "Larger clinics often mean longer wait times, impersonal care, and navigating stressful city traffic. We are located just 5 minutes from Sharon Hill, offer zero waitlists, and provide a highly personalized, warm environment."
      },
      {
        question: "Do you accept Medicaid for Sharon Hill residents?",
        answer: "Yes, Sunrise Human Care Services is a Medicaid-only provider. We are dedicated to providing high-quality mental health care to Medicaid recipients in Sharon Hill and surrounding Delaware County areas."
      },
      {
        question: "Is there a waitlist for therapy near Sharon Hill?",
        answer: "No, we currently have no waitlist for new patients. We typically respond to all inquiries within 24 hours, ensuring you get the support you need quickly."
      },
      {
        question: "How far is the Darby clinic from Sharon Hill, PA?",
        answer: "Our Darby clinic is located just 1.2 miles from Sharon Hill, which is typically a quick 5-minute drive. This makes it a very convenient option for Sharon Hill residents."
      }
    ]
  };

  <h1 className="sr-only">mental health sharon hill pa</h1>
return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={pageContent.faqOverrides} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <MentalHealthGeoClient location={location} content={pageContent} />
    </>
  );
}
