import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import TermsClient from './TermsClient';

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service | Sunrise Human Care Services",
  description: "Read our terms of service to understand the guidelines, patient responsibilities, and clinic policies at Sunrise Human Care Services in Darby, PA.",
  path: "/terms-of-service",
  noIndex: true
});

export default function TermsOfServicePage() {
  return <TermsClient />;
}
