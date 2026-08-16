import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import GriefTherapyClient from './GriefTherapyClient';

export const metadata: Metadata = createPageMetadata({
  title: "Grief & Loss Therapy in Darby, PA | No Waitlist | Sunrise",
  description: "Compassionate grief counseling and bereavement support in Darby, PA. Professional therapy for coping with loss and complicated grief. 100% Medicaid accept…",
  path: "/grief-therapy-darby-pa",
  keywords: ["grief therapy Darby PA", "bereavement counseling Delaware County", "loss support group PA", "complicated grief treatment", "coping with loss Darby", "Medicaid grief therapy PA"],
});

export default function GriefTherapyPage() {
  const griefFAQs = [
    {
      question: "Is there a 'normal' way to grieve?",
      answer: "There is no single 'normal' way to grieve. Grief is highly individual and influenced by many factors. What's important is finding healthy ways to express and process your emotions that work for you."
    },
    {
      question: "How do I know if I need grief therapy?",
      answer: "Consider seeking therapy if your grief feels unbearable, if you're having trouble functioning in daily life, if you feel stuck, or if you're experiencing intense yearning that doesn't ease over time."
    },
    {
      question: "How long does grief therapy typically last?",
      answer: "Duration varies based on individual needs. Some benefit from short-term therapy (8-12 sessions), while others need longer-term support, especially for complicated grief. We work at your pace."
    },
    {
      question: "Do you accept Medicaid for grief counseling?",
      answer: "Yes, we exclusively accept Medicaid and Medical Assistance. We provide compassionate grief support with no waitlist to ensure you have the help you need during difficult times."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Grief & Loss Therapy", url: "/grief-therapy-darby-pa" }
  ];

  const serviceData = {
    name: "Grief & Loss Therapy in Darby, PA",
    description: "Compassionate grief counseling and bereavement support in Darby, PA. Specialized care for coping with loss with no waitlist and Medicaid acceptance.",
    serviceType: "Grief Therapy"
  };

  <h1 className="sr-only">grief therapy darby pa</h1>
return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={griefFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <GriefTherapyClient />
    </>
  );
}
