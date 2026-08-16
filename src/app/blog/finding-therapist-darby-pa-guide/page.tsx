import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import FindingTherapistClient from './FindingTherapistClient';

export const metadata: Metadata = createPageMetadata({
  title: "Finding the Right Therapist in Darby, PA | Complete Guide",
  description: "A comprehensive guide to finding the right therapist in Darby, PA. Learn about therapy types, insurance options, and how to choose the best mental health…",
  path: "/blog/finding-therapist-darby-pa-guide",
  keywords: "find a therapist Darby PA, counseling in Darby, choosing a psychologist Delaware County, Medicaid therapists Darby, mental health guide",
  image: "/images/finding-therapist-havertown.webp"
});

export default function FindingTherapistGuidePage() {
  return <FindingTherapistClient />;
}
