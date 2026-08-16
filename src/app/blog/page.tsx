import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = createPageMetadata({
  title: "Mental Health Resources & Blog | Sunrise Human Care Service…",
  description: "Expert mental health insights for Darby residents. Read our professional articles on anxiety management, depression treatment, and family support.",
  path: "/blog",
  keywords: "mental health blog Darby, anxiety tips Pennsylvania, depression resources Delaware County, therapist advice",
});

export default function BlogPage() {
  return <BlogPageClient />;
}
