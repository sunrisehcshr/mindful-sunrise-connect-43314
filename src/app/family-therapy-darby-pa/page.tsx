import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import FamilyTherapyClient from './FamilyTherapyClient';

export const metadata: Metadata = createPageMetadata({
  title: "Family Therapy in Darby, PA | No Waitlist | Sunrise",
  description: "Expert family therapy in Darby, PA. Improve communication and resolve conflicts with our licensed therapists. 100% Medicaid accepted. No waitlist. Call (814) 620-2162.",
  path: "/family-therapy-darby-pa",
  keywords: ["family therapy Darby PA", "family counseling Delaware County", "family therapist PA", "strengthen family bonds Darby", "family support services PA", "Medicaid family therapy PA"],
});

export default function FamilyTherapyPage() {
  const familyFAQs = [
    {
      question: "Do all family members need to attend therapy sessions?",
      answer: "Ideally, all household members participate for the best results. However, we can begin with available family members and incorporate others as therapy progresses, adapting to your family's specific situation."
    },
    {
      question: "Are children included in family therapy?",
      answer: "Yes, children are important members of the family system. Our experienced therapists use age-appropriate techniques to ensure everyone can meaningfully participate in the healing process."
    },
    {
      question: "How long does family therapy typically last?",
      answer: "Family therapy generally ranges from 8-20 sessions depending on your specific goals. Some families complete treatment in a few months, while others benefit from longer-term support."
    },
    {
      question: "Will the therapist take sides in family conflicts?",
      answer: "No, our therapists remain neutral. Their role is to facilitate healthy communication, help everyone understand each other's perspectives, and work together toward positive change."
    },
    {
      question: "Do you accept Medicaid for family therapy?",
      answer: "Yes, we exclusively accept Medicaid and Medical Assistance. We provide professional family counseling with no waitlist to help your family start healing today."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Family Therapy", url: "/family-therapy-darby-pa" }
  ];

  const serviceData = {
    name: "Family Therapy in Darby, PA",
    description: "Expert family therapy and counseling services in Darby, PA. Specialized care to improve communication and resolve conflicts with no waitlist and Medicaid acceptance.",
    serviceType: "Family Therapy"
  };

  return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={familyFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <FamilyTherapyClient />
    </>
  );
}
