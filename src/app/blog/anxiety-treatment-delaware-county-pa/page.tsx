import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import AnxietyBlogClient from './AnxietyBlogClient';

export const metadata: Metadata = createPageMetadata({
  title: "Anxiety Treatment in Delaware County, PA | Effective Care",
  description: "Explore proven anxiety treatment options in Darby and Delaware County. Learn about therapy approaches, medication management, and local support resources.",
  path: "/blog/anxiety-treatment-delaware-county-pa",
  keywords: "anxiety treatment Darby, anxiety therapy Delaware County PA, treating anxiety near me, best anxiety therapist in Darby, medication management for anxiety Darby",
  image: "/images/Therapy-in-havertown.webp"
});

export default function AnxietyTreatmentDelawareCountyPage() {
  return <AnxietyBlogClient />;
}
