import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import MentalHealthGeoClient, { GeoContentProps } from './MentalHealthGeoClient';

export const metadata: Metadata = createPageMetadata({
  title: "Best Mental Health Services in Yeadon, PA | Medicaid Accepted | Sunrise",
  description: "Find the best mental health services in Yeadon, PA. Top-rated therapy and psychiatric care for the Yeadon community. 100% Medicaid accepted. No waitlists.",
  path: "/mental-health-yeadon-pa",
  keywords: ["best mental health yeadon pa", "top therapy yeadon pa", "psychiatrist yeadon pa", "Delaware County mental health", "yeadon counseling services", "Medicaid mental health PA", "immediate therapy yeadon pa", "behavioral health yeadon pa"],
});

export default function MentalHealthYeadonPage() {
  const location = "Yeadon";

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/contact" },
    { name: "Yeadon, PA", url: "/mental-health-yeadon-pa" }
  ];

  const serviceData = {
    name: `Mental Health Services for ${location}, PA`,
    description: `Compassionate mental health services for ${location} residents. Specialized therapy and psychiatry with no waitlist and Medicaid acceptance. Just 1.5 miles from ${location}.`,
    serviceType: "Mental Health Clinic"
  };

  const pageContent: GeoContentProps = {
    heroHeadline: <>
      Tired of generic Philadelphia clinics? <br />
      <span className="font-instrument-serif italic text-orange-500 font-normal">Discover specialized care near Yeadon.</span>
    </>,
    heroSubheadline: "Escape the massive hospital networks. Get personalized, evidence-based therapy and psychiatric care just 5 minutes away. 100% Medicaid accepted with zero waitlists.",
    problemHeadline: <>
      Why is finding accessible mental health care in Yeadon <span className="font-instrument-serif italic text-orange-500">so difficult?</span>
    </>,
    problemText1: "Yeadon is a proud, historic borough. But when it comes to specialized psychiatric care that accepts Medicaid, options within the borough limits are surprisingly sparse. You make the brave choice to pick up the phone, only to be told you have to travel deep into Philadelphia or wait months for an appointment.",
    problemText2: "Families shouldn't be forced to navigate massive, impersonal hospital systems just to get basic therapy or behavioral support for their children.",
    problemHighlight: "Mental health crises do not operate on a four-month delay. When you are struggling, you need expert help right now, close to home.",
    solutionHeadline: <>
      Sunrise Human Care Services was built to <span className="font-instrument-serif italic text-orange-500">fix this broken system.</span>
    </>,
    solutionText1: "We established our clinic at 869 Main Street in Darby, PA—just 1.5 miles down the road from Yeadon—with one clear promise: to provide premium, evidence-based psychiatric care to the Medicaid community, without the wait.",
    solutionText2: "We are not a faceless network. We are a dedicated team of licensed therapists and psychiatrists who treat our patients with the dignity, privacy, and clinical excellence they deserve.",
    expertCareHeadline: <>
      What does expert mental health care <span className="font-instrument-serif italic text-orange-500">look like?</span>
    </>,
    expertCareText1: "It looks like Individual Therapy that digs into the root causes of your trauma, rather than just putting a band-aid on the symptoms. It looks like Medication Management where your psychiatrist actually listens to your concerns.",
    expertCareText2: "For families in Yeadon, it looks like our Intensive Behavioral Health Services (IBHS). Instead of asking you to drag your struggling child to a sterile clinic, our behavioral technicians go directly to your home or school to provide support right where the behaviors happen.",
    locationHeadline: <>
      Conveniently located just <span className="font-instrument-serif italic text-orange-500">5 minutes away.</span>
    </>,
    locationSubheadline: <>
      Serving Yeadon <br />
      <span className="font-instrument-serif italic text-orange-500">and Delaware County.</span>
    </>,
    localAdvantageText: <>
      Located at 869 Main Street in Darby, PA (19023), our clinic is literally just a 5-minute drive from Yeadon. We provide a warm, modern environment for healing without the stress of navigating city traffic.
    </>,
    servicesHeadline: <>
      Our Specialized Services near <span className="font-instrument-serif italic text-orange-500">Yeadon</span>
    </>,
    servicesSubheadline: "From individual counseling to comprehensive psychiatric evaluations, we provide a full spectrum of mental health support tailored for the Yeadon community.",
    faqHeadline: <>
      Your questions about Yeadon care, <span className="font-instrument-serif italic text-orange-500">answered.</span>
    </>,
    servicesOverrides: {
      individual: "Private, 1-on-1 sessions with a licensed therapist designed for Yeadon residents seeking deep emotional healing, not just surface-level chats.",
      couples: "Supportive therapy for partners looking to strengthen communication, rebuild trust, and navigate relationship challenges together.",
      family: "Guided sessions designed to improve family dynamics, resolve conflicts, and foster healthier connections among family members.",
      child: "Age-appropriate therapeutic support for Yeadon children and teens facing emotional, behavioral, or developmental concerns.",
      psychiatric: "Skip the massive hospital waitlists. Get comprehensive psychiatric evaluations conducted by qualified professionals quickly.",
      medication: "Careful oversight of psychiatric medications to ensure safe, effective treatment as part of a comprehensive care plan.",
      grief: "Compassionate support for individuals processing loss and navigating the emotional journey of grief in a safe space.",
      relationship: "Therapeutic guidance for individuals seeking to improve interpersonal skills and build healthier relationships."
    },
    faqOverrides: [
      {
        question: "Why choose Sunrise over a larger Philadelphia hospital?",
        answer: "Larger hospitals often mean longer wait times, impersonal care, and navigating stressful city traffic. We are located just 5 minutes from Yeadon, offer zero waitlists, and provide a highly personalized, warm environment where you aren't just a number."
      },
      {
        question: "Do you accept Medicaid for Yeadon residents?",
        answer: "Yes, Sunrise Human Care Services is a Medicaid-only provider. We are dedicated to providing high-quality mental health care to Medicaid recipients in Yeadon and surrounding Delaware County areas."
      },
      {
        question: "Is there a waitlist for therapy near Yeadon?",
        answer: "No, we currently have no waitlist for new patients. We typically respond to all inquiries within 24 hours, ensuring you get the support you need quickly."
      },
      {
        question: "How far is the Darby clinic from Yeadon, PA?",
        answer: "Our Darby clinic is located just 1.5 miles from Yeadon, which is typically a quick 5-minute drive. This makes it a very convenient option for Yeadon residents seeking in-person therapy."
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
