import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import DepressionClient from './DepressionClient';

export const metadata: Metadata = createPageMetadata({
  title: "Depression Therapy & Treatment in Darby, PA | No Waitlist |…",
  description: "Expert depression treatment in Darby, PA. Specialized care for Major Depressive Disorder, PDD, and SAD. 100% Medicaid accepted. No waitlist. Book your eva…",
  path: "/depression-therapy-darby-pa",
  keywords: ["depression therapy Darby PA", "depression treatment Delaware County", "major depressive disorder help", "SAD treatment PA", "persistent depressive disorder", "Medicaid depression therapy PA"],
});

export default function DepressionTherapyPage() {
  const depressionFAQs = [
    {
      question: "How is depression different from just feeling sad?",
      answer: "While sadness is a normal human emotion, clinical depression is a persistent mood disorder. Sadness usually comes in waves, whereas depression is a constant heavy cloud that affects your sleep, appetite, energy, and self-worth for weeks or months at a time."
    },
    {
      question: "Can therapy alone cure my depression?",
      answer: "For mild to moderate depression, therapy (especially Cognitive Behavioral Therapy) is often highly effective on its own. However, for severe depression, a combination of therapy and medication is usually the gold standard of treatment."
    },
    {
      question: "How long does depression treatment take?",
      answer: "There is no set timeline. Many patients start noticing improvements in their sleep and energy levels within 4 to 6 weeks of starting treatment. Deeper emotional shifts often occur over 3 to 6 months of consistent therapy."
    },
    {
      question: "What if I'm too exhausted to even attend therapy?",
      answer: "Extreme fatigue is a core symptom of depression. We understand how hard it can be to take that first step. We offer telehealth appointments so you can begin treatment from the comfort of your home."
    },
    {
      question: "Is depression genetic?",
      answer: "Genetics do play a role. However, it's usually a combination of genetic vulnerability, brain chemistry, and environmental stressors (like trauma, loss, or chronic stress) that trigger a depressive episode."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Conditions We Treat", url: "/conditions" },
    { name: "Depression Treatment", url: "/depression-therapy-darby-pa" }
  ];

  const serviceData = {
    name: "Depression Treatment in Darby, PA",
    description: "Evidence-based depression treatment for MDD, PDD, and SAD in Darby, PA. Specialized psychiatric care with no waitlist and Medicaid acceptance.",
    serviceType: "Depression Treatment"
  };

  <h1 className="sr-only">depression therapy darby pa</h1>
return (
    <>
      <SchemaMarkup type="MedicalService" data={serviceData} />
      <SchemaMarkup type="FAQPage" data={depressionFAQs} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      <DepressionClient />
    </>
  );
}
