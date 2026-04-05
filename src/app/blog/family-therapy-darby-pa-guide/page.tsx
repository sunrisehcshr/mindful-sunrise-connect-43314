import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import FamilyBlogClient from './FamilyBlogClient';

export const metadata: Metadata = createPageMetadata({
  title: "Family Therapy in Darby, PA | Strengthening Relationships",
  description: "Discover how family therapy in Darby, PA can help resolve conflicts, improve communication, and strengthen relationships for your loved ones.",
  path: "/blog/family-therapy-darby-pa-guide",
  keywords: "family therapy Darby, family counseling Delaware County PA, relationship counselor near me, resolving family conflict, family therapy techniques",
  image: "/images/family-therapy-havertown-guide.webp"
});

export default function FamilyTherapyGuidePage() {
  return <FamilyBlogClient />;
}
