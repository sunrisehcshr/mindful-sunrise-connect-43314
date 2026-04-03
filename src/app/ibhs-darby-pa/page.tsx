import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import IBHSClient from './IBHSClient';

export const metadata: Metadata = createPageMetadata({
  title: "IBHS Services in Darby, PA | Intensive Behavioral Health | Sunrise",
  description: "Intensive Behavioral Health Services (IBHS) in Darby, PA and Delaware County. Behavioral therapy for autism and ADHD. 100% Medicaid accepted. No waitlist.",
  path: "/ibhs-darby-pa",
  keywords: ["IBHS Delaware County PA", "intensive behavioral health services Darby", "IBHS near me", "ABA therapy Darby PA", "behavioral health children PA", "IBHS Medicaid Delaware County", "autism services Darby", "Medicaid IBHS therapy PA"],
});

export default function IBHSServicesPage() {
  const ibhsFAQs = [
    {
      question: "What exactly is IBHS?",
      answer: "Intensive Behavioral Health Services (IBHS) is a Pennsylvania-regulated program providing evidence-based behavioral treatment for children and adolescents under 21 in their home, school, or community."
    },
    {
      question: "Who is eligible for IBHS?",
      answer: "Children and adolescents under age 21 with a mental health diagnosis or autism spectrum disorder who require behavioral support are typically eligible for IBHS."
    },
    {
      question: "Where are IBHS services provided?",
      answer: "Services are provided wherever the child needs support, including the family home, school settings, and other community locations throughout Darby and Delaware County."
    },
    {
      question: "What is the role of a Behavioral Health Technician (BHT)?",
      answer: "A BHT works one-on-one with your child to implement the treatment plan designed by the Behavior Consultant (BC), focusing on specific behavioral and social goals."
    },
    {
      question: "Do you accept Medicaid for IBHS?",
      answer: "Yes, we exclusively accept Medicaid and Medical Assistance for our IBHS program. We provide these intensive services with no waitlist to ensure children get support quickly."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "IBHS Services", url: "/ibhs-darby-pa" }
  ];

  const serviceData = {
    name: "Intensive Behavioral Health Services (IBHS) in Darby, PA",
    description: "Evidence-based behavioral health interventions for children and adolescents in Darby, PA and Delaware County. Specialized care with no waitlist and Medicaid acceptance.",
    serviceType: "Intensive Behavioral Health Services"
  };

  return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={ibhsFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <IBHSClient />
    </>
  );
}
