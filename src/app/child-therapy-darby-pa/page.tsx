import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import ChildTherapyClient from './ChildTherapyClient';

export const metadata: Metadata = createPageMetadata({
  title: "Child & Adolescent Therapy in Darby, PA | No Waitlist | Sunrise",
  description: "Specialized child and adolescent therapy in Darby, PA. Helping youth manage anxiety, depression, and behavior. 100% Medicaid accepted. No waitlist.",
  path: "/child-therapy-darby-pa",
  keywords: ["child therapy Darby PA", "teen counseling Delaware County", "youth mental health PA", "adolescent therapist Darby", "play therapy Darby", "Medicaid child therapy PA"],
});

export default function ChildTherapyPage() {
  const childFAQs = [
    {
      question: "How do I explain therapy to my child?",
      answer: "For younger children, we describe therapy as a special place where they can play, talk, and learn about feelings. For teens, we explain that a therapist is someone who helps handle stress, emotions, and challenges."
    },
    {
      question: "Will I be involved in my child's therapy?",
      answer: "Yes, parent involvement is crucial. While some sessions are one-on-one, we regularly include parents for updates, education, and family sessions based on your child's needs."
    },
    {
      question: "How long does child therapy typically last?",
      answer: "Duration varies. Some children benefit from short-term therapy (8-12 sessions), while others need ongoing support. We discuss timeframes during the initial consultation."
    },
    {
      question: "How do you handle confidentiality with children and teens?",
      answer: "We balance a child's need for privacy with parents' right to information. We maintain confidentiality except in cases of safety concerns, while facilitating healthy family communication."
    },
    {
      question: "Do you accept Medicaid for child therapy?",
      answer: "Yes, we exclusively accept Medicaid and Medical Assistance. We provide specialized youth mental health services with no waitlist to ensure timely support."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Child Therapy", url: "/child-therapy-darby-pa" }
  ];

  const serviceData = {
    name: "Child and Adolescent Therapy in Darby, PA",
    description: "Specialized child and adolescent therapy in Darby, PA. Safe environment for youth to manage behavioral and emotional challenges with no waitlist and Medicaid acceptance.",
    serviceType: "Child Therapy"
  };

  return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={childFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <ChildTherapyClient />
    </>
  );
}
