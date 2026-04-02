import React from 'react';
import { Metadata } from 'next';
import BetterhelpAlternativesClient from './BetterhelpAlternativesClient';

export const metadata: Metadata = {
  title: "BetterHelp Alternatives in PA | Sunrise Human Care", // 53 chars
  description: "Looking for BetterHelp alternatives in PA? Compare online therapy apps with local, Medicaid-accepting care at Sunrise Human Care in Darby. In-person & virtual.", // 160 chars
  alternates: {
    canonical: "https://sunrisehumancare.com/betterhelp-alternatives-pa",
  },
  keywords: "BetterHelp alternatives PA, Talkspace vs local therapist, Medicaid therapy Delaware County, in person therapy Darby, betterhelp alternative accept medicaid",
};

export default function BetterhelpAlternativesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "BetterHelp Alternatives in Pennsylvania",
        "description": "A comprehensive comparison between BetterHelp, Talkspace, and local mental health care at Sunrise Human Care in Darby, PA."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sunrisehumancare.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "BetterHelp Alternatives in PA",
            "item": "https://sunrisehumancare.com/betterhelp-alternatives-pa"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does BetterHelp accept Medicaid in Pennsylvania?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, BetterHelp does not accept Medicaid or Medicare. Sunrise Human Care, located in Darby, PA, exclusively accepts Medicaid, ensuring that high-quality mental health care is accessible and affordable for our community."
            }
          },
          {
            "@type": "Question",
            "name": "Is in-person therapy better than virtual apps like Talkspace?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While virtual therapy is convenient for some, in-person therapy offers a deeper level of connection, allowing therapists to observe body language and build stronger therapeutic alliances. For complex issues, children, or severe mental health conditions, in-person care is often clinically recommended."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get psychiatric medication through BetterHelp?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "BetterHelp primarily focuses on talk therapy. While they have sister platforms for psychiatry, it is often a separate, additional cost. At Sunrise Human Care, we offer integrated therapy, psychiatric evaluations, and medication management all under one roof."
            }
          },
          {
            "@type": "Question",
            "name": "Will I always see the same therapist at Sunrise Human Care?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Unlike some large apps where you might be reassigned or have high therapist turnover, Sunrise Human Care guarantees continuity of care. You will build a long-term relationship with your dedicated therapist."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BetterhelpAlternativesClient />
    </>
  );
}
