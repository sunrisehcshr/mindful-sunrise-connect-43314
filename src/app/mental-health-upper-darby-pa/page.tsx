import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import MentalHealthGeoClient from '../mental-health-yeadon-pa/MentalHealthGeoClient';

export const metadata: Metadata = createPageMetadata({
  title: "Mental Health Services for Upper Darby, PA | Therapy & Psychiatry",
  description: "Expert mental health care for Upper Darby, PA residents. Therapy and psychiatry just 3 miles away in Darby. 100% Medicaid accepted. No waitlist.",
  path: "/mental-health-upper-darby-pa",
  keywords: ["mental health upper darby pa", "therapy upper darby", "psychiatrist upper darby", "medicaid therapy Delaware County", "counseling upper darby", "mental health clinic near Upper Darby"],
});

export default function MentalHealthUpperDarbyPage() {
  const location = "Upper Darby";
  
  const upperDarbyFAQs = [
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
      answer: `Our Darby clinic is located just 3 miles from ${location}, which is typically a quick 10-minute drive. This makes it a very convenient option for ${location} residents seeking in-person therapy.`
    }
  ];

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

  return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={upperDarbyFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <MentalHealthGeoClient location={location} />
    </>
  );
}
