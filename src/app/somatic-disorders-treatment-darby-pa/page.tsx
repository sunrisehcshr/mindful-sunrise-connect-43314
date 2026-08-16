import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import SomaticClient from './SomaticClient';

export const metadata: Metadata = createPageMetadata({
  title: "Somatic Symptom Disorders Treatment | Sunrise Human Care Se…",
  description: "Specialized treatment for somatic symptom disorders in Darby, PA. Mind-body approaches to reduce symptom distress and improve functioning.",
  path: "/somatic-disorders-treatment-darby-pa",
  keywords: "somatic symptom disorder treatment, illness anxiety therapy Darby, conversion disorder treatment PA, mind body therapy Delaware County, medically unexplained symptoms therapy",
});

export default function SomaticDisordersTherapyPage() {
  return <SomaticClient />;
}
