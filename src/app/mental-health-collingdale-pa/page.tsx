import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import MentalHealthGeoClient from '../mental-health-yeadon-pa/MentalHealthGeoClient';

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

  return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={collingdaleFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <MentalHealthGeoClient location={location} />
    </>
  );
}
