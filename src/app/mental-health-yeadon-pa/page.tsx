import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import MentalHealthGeoClient from './MentalHealthGeoClient';

export const metadata: Metadata = createPageMetadata({
  title: "Mental Health Services for Yeadon, PA | Therapy & Psychiatry | Sunrise",
  description: "Expert mental health care for Yeadon, PA residents. Therapy and psychiatry just 1.5 miles away in Darby. 100% Medicaid accepted. No waitlist.",
  path: "/mental-health-yeadon-pa",
  keywords: ["mental health yeadon pa", "therapy yeadon", "psychiatrist yeadon", "medicaid therapy Delaware County", "counseling yeadon", "mental health clinic near Yeadon"],
});

export default function MentalHealthYeadonPage() {
  const location = "Yeadon";
  
  const yeadonFAQs = [
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
      answer: `Our Darby clinic is located just 1.5 miles from ${location}, which is typically a quick 5-minute drive. This makes it a very convenient option for ${location} residents seeking in-person therapy.`
    }
  ];

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

  return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={yeadonFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <MentalHealthGeoClient location={location} />
    </>
  );
}
