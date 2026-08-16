import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import MentalHealthGeoClient, { GeoContentProps } from '../mental-health-yeadon-pa/MentalHealthGeoClient';

export const metadata: Metadata = createPageMetadata({
  title: "Best Mental Health Services in Collingdale, PA | Medicaid A…",
  description: "Find the best mental health services in Collingdale, PA. Top-rated therapy and psychiatric care for the Collingdale community. 100% Medicaid accepted. No…",
  path: "/mental-health-collingdale-pa",
  keywords: ["best mental health collingdale pa", "top therapy collingdale pa", "psychiatrist collingdale pa", "Delaware County mental health", "collingdale counseling services", "Medicaid mental health PA", "immediate therapy collingdale pa", "behavioral health collingdale pa"],
});

export default function MentalHealthCollingdalePage() {
  const location = "Collingdale";

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
      Reliable mental health support for Collingdale. <br />
      <span className="font-instrument-serif italic text-orange-500 font-normal">No waitlists. No runarounds.</span>
    </>,
    heroSubheadline: "Working families don't have time for clinics that don't answer the phone. Get immediate access to licensed therapists and psychiatrists right in your backyard. 100% Medicaid accepted.",
    problemHeadline: <>
      Why is finding good mental health care in Collingdale <span className="font-instrument-serif italic text-orange-500">so frustrating?</span>
    </>,
    problemText1: "Working families in Collingdale are constantly juggling jobs, schools, and the hustle of daily life along the MacDade Blvd corridor. When a mental health crisis hits your household, the last thing you need is a massive hospital network that treats you like a number.",
    problemText2: "You finally decide to seek help for your anxiety, depression, or your child's behavioral issues. You make the brave choice to reach out, only to be told the nearest clinic is out of network, or their next available appointment is four months away.",
    problemHighlight: "Mental health crises do not operate on a four-month delay. When you are struggling to keep your family together, you need reliable help immediately.",
    solutionHeadline: <>
      Sunrise Human Care Services was built to <span className="font-instrument-serif italic text-orange-500">fix this broken system.</span>
    </>,
    solutionText1: "We established our clinic at 869 Main Street in Darby, PA—literally just 1 mile from Collingdale—with one clear promise: to provide premium, evidence-based psychiatric care to the Medicaid community, without the wait.",
    solutionText2: "We are not a massive, faceless hospital network. We are a dedicated, local team of licensed therapists, psychiatrists, and behavioral health technicians treating Collingdale families with the dignity and clinical excellence they deserve.",
    expertCareHeadline: <>
      What does expert mental health care <span className="font-instrument-serif italic text-orange-500">look like?</span>
    </>,
    expertCareText1: "It looks like Individual Therapy that digs into the root causes of your trauma, rather than just putting a band-aid on the symptoms. It looks like Medication Management where your psychiatrist actually listens to your concerns about side effects and adjusts your dosage carefully.",
    expertCareText2: "For families in Collingdale, it looks like our Intensive Behavioral Health Services (IBHS). Instead of asking you to drag your struggling child to a sterile clinic, our behavioral technicians go directly to your home or their local school (like those in the Southeast Delco School District) to provide support right where the behaviors happen.",
    locationHeadline: <>
      Conveniently located just <span className="font-instrument-serif italic text-orange-500">4 minutes away.</span>
    </>,
    locationSubheadline: <>
      Serving Collingdale <br />
      <span className="font-instrument-serif italic text-orange-500">and Delaware County.</span>
    </>,
    localAdvantageText: <>
      Located at 869 Main Street in Darby, PA (19023), our clinic is a remarkably fast 4-minute drive from Collingdale. We provide a warm, modern environment for healing, practically right in your backyard.
    </>,
    servicesHeadline: <>
      Our Specialized Services near <span className="font-instrument-serif italic text-orange-500">Collingdale</span>
    </>,
    servicesSubheadline: "From individual counseling to comprehensive psychiatric evaluations, we provide a full spectrum of mental health support tailored for working families in Collingdale.",
    faqHeadline: <>
      Your questions about Collingdale care, <span className="font-instrument-serif italic text-orange-500">answered.</span>
    </>,
    servicesOverrides: {
      individual: "Private, 1-on-1 sessions with a licensed therapist. Deep emotional healing for Collingdale residents balancing work, family, and life stress.",
      couples: "Supportive therapy for partners looking to strengthen communication, rebuild trust, and navigate relationship challenges together.",
      family: "Guided sessions designed to improve family dynamics, resolve conflicts, and foster healthier connections among family members.",
      child: "Age-appropriate therapeutic support for Collingdale children and teens facing emotional, behavioral, or developmental concerns.",
      psychiatric: "Expert psychiatric evaluations without the standard months-long waitlist you find at larger county hospitals.",
      medication: "Careful oversight of psychiatric medications to ensure safe, effective treatment as part of a comprehensive care plan.",
      grief: "Compassionate support for individuals processing loss and navigating the emotional journey of grief in a safe space.",
      relationship: "Therapeutic guidance for individuals seeking to improve interpersonal skills and build healthier relationships."
    },
    faqOverrides: [
      {
        question: "Why choose Sunrise over a larger hospital network?",
        answer: "Larger hospitals often mean longer wait times, impersonal care, and navigating stressful city traffic. We are located just 4 minutes from Collingdale, offer zero waitlists, and provide a highly personalized, warm environment."
      },
      {
        question: "Do you accept Medicaid for Collingdale residents?",
        answer: "Yes, Sunrise Human Care Services is a Medicaid-only provider. We are dedicated to providing high-quality mental health care to Medicaid recipients in Collingdale and surrounding Delaware County areas."
      },
      {
        question: "Is there a waitlist for therapy near Collingdale?",
        answer: "No, we currently have no waitlist for new patients. We typically respond to all inquiries within 24 hours, ensuring you get the support you need quickly."
      },
      {
        question: "How far is the Darby clinic from Collingdale, PA?",
        answer: "Our Darby clinic is located just 1 mile from Collingdale, which is typically a quick 4-minute drive straight down MacDade Blvd. This makes it a very convenient option for Collingdale residents."
      }
    ]
  };

  <h1 className="sr-only">mental health collingdale pa</h1>
return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={pageContent.faqOverrides} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <MentalHealthGeoClient location={location} content={pageContent} />
    </>
  );
}
