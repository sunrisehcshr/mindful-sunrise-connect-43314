import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import DepressionBlogClient from './DepressionBlogClient';

export const metadata: Metadata = createPageMetadata({
  title: "Depression Therapy in Darby, PA | Guide to Recovery",
  description: "Learn about effective depression treatment options in Darby, PA. Explore evidence-based therapies, medication management, and support strategies.",
  path: "/blog/depression-therapy-darby-pa-complete-guide",
  keywords: "depression therapy Darby, treating depression Delaware County PA, depression counselor near me, medication for depression Darby, CBT for depression",
  image: "/images/depression-therapy-havertown.webp"
});

export default function DepressionTherapyGuidePage() {
  return <DepressionBlogClient />;
}
