import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import HomeClient from './HomeClient';

export const metadata: Metadata = createPageMetadata({
  title: "Mental Health Therapy & Psychiatry in Darby, PA | Sunrise Human Care",
  description: "Expert mental health care in Darby, PA. Licensed therapists & psychiatrists for anxiety, depression, ADHD & trauma. Medicaid only, no waitlist. Call (814) 620-2162.",
  path: "/",
  keywords: "mental health care in Darby, mental health Darby, anxiety therapy Delaware County, depression counseling Darby, ADHD treatment PA, psychiatrist near me, therapist Darby PA, telehealth therapy, in-person counseling",
  image: "/og-image.png"
});

export default function Home() {
  return <HomeClient />;
}