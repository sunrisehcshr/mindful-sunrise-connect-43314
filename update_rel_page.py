import re

content = """import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import RelationshipTherapyClient from './RelationshipTherapyClient';

export const metadata: Metadata = createPageMetadata({
  title: "Relationship Therapy in Darby, PA | No Waitlist | Sunrise",
  description: "Effective therapy for communication problems, conflict resolution, and rebuilding trust in Darby, PA. 100% Medicaid accepted. No waitlist. Call (814) 620-2162.",
  path: "/relationship-therapy-darby-pa",
  keywords: ["relationship therapy Darby PA", "communication counseling", "trust rebuilding therapy", "conflict resolution Darby", "relationship counseling PA", "Medicaid relationship therapy"],
});

export default function RelationshipTherapyPage() {
  const relFAQs = [
    {
      question: "How do I know if my relationship would benefit from therapy?",
      answer: "Consider therapy if you're experiencing recurring conflicts that don't get resolved, communication problems, emotional disconnection, trust issues, or if you're navigating major life transitions that are straining your relationship."
    },
    {
      question: "Does relationship therapy only work for couples on the brink of separation?",
      answer: "No, relationship therapy can benefit relationships at any stage. While it can help those in crisis, it's also highly valuable for healthy relationships that want to enhance communication, deepen connection, or navigate transitions proactively."
    },
    {
      question: "Can I attend relationship therapy alone?",
      answer: "Yes! Individual relationship therapy is highly effective. You can learn to set better boundaries, understand your own attachment style, and change how you react to toxic people in your life, even if the other person refuses to attend."
    },
    {
      question: "How long does relationship therapy typically take?",
      answer: "The duration varies depending on the issues being addressed. Some individuals or couples attend 10-12 sessions and achieve their goals, while others benefit from longer-term therapy to recover from significant relationship trauma."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Relationship Therapy", url: "/relationship-therapy-darby-pa" }
  ];

  const serviceData = {
    name: "Relationship Therapy in Darby, PA",
    description: "Expert relationship counseling in Darby, PA. Professional support for communication, trust, and conflict resolution with no waitlist and Medicaid acceptance.",
    serviceType: "Relationship Therapy"
  };

  return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={relFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <RelationshipTherapyClient />
    </>
  );
}
"""

with open('/workspace/src/app/relationship-therapy-darby-pa/page.tsx', 'w') as f:
    f.write(content)

print("Rel page updated")
