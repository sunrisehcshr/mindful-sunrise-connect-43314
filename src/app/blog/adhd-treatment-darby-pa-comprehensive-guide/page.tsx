import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import AdhdBlogClient from './AdhdBlogClient';

export const metadata: Metadata = createPageMetadata({
  title: "ADHD Treatment in Darby, PA | Comprehensive Guide for Famil…",
  description: "Explore effective ADHD treatment options for children and adults in Darby, PA. Learn about therapy, medication management, and support resources.",
  path: "/blog/adhd-treatment-darby-pa-comprehensive-guide",
  keywords: "ADHD treatment Darby, adult ADHD therapy Delaware County, child ADHD psychiatrist Darby, managing ADHD symptoms, ADHD testing near me",
  image: "/images/adhd-treatment-havertown.webp"
});

export default function AdhdTreatmentGuidePage() {
  return <AdhdBlogClient />;
}
