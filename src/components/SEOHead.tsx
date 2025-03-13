
import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Sunrise Human Care Services | Mental Health Clinic in Havertown, PA",
  description = "Experience comprehensive mental health care in Havertown, PA at Sunrise Human Care Services. Our dedicated team provides counseling, therapy, psychiatry, and medication management for anxiety, depression, ADHD, trauma, and more.",
  canonicalUrl = "https://sunrisehcsllc.com",
  ogImage = "/og-image.png"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="mental health, therapy, counseling, psychiatry, Havertown, PA, anxiety, depression, ADHD, trauma, PTSD, OCD, bipolar disorder, medication management, psychologist, therapist" />

      {/* Canonical URL (Fixing Duplicate Issue) */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Comprehensive Favicon Support */}
      {/* Standard */}
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
      <link rel="icon" href="/favicon-16.png" sizes="16x16" type="image/png" />
      
      {/* iOS / Apple */}
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/favicon.svg" color="#F7913E" />
      
      {/* Android / PWA */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#F7913E" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Sunrise HCS" />
      
      {/* Microsoft */}
      <meta name="msapplication-TileColor" content="#F7913E" />
      <meta name="msapplication-TileImage" content="/favicon-144.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Performance Optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEOHead;
