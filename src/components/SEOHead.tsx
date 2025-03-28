
import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string;
  article?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Sunrise Human Care Services | Mental Health Clinic in Havertown, PA",
  description = "Experience comprehensive mental health care in Havertown, PA at Sunrise Human Care Services. Our dedicated team provides counseling, therapy, psychiatry, and medication management for anxiety, depression, ADHD, trauma, and more.",
  canonicalUrl = "https://sunrisehumancare.com",
  ogImage = "/og-image.png",
  keywords = "mental health Havertown, therapy Havertown PA, counseling Delaware County, psychiatry Havertown, anxiety treatment Havertown, depression therapy Havertown, ADHD treatment Havertown, trauma therapy PA, PTSD counseling Havertown, OCD treatment Havertown, bipolar disorder Havertown, medication management Havertown, psychologist Havertown, therapist near me, Havertown mental health clinic",
  article = false,
  publishedTime,
  modifiedTime,
  author = "Sunrise Human Care Services",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="geo.region" content="US-PA" />
      <meta name="geo.placename" content="Havertown" />
      <meta name="geo.position" content="39.9707;-75.3151" />
      <meta name="ICBM" content="39.9707, -75.3151" />
      <meta name="google" content="notranslate" />

      {/* Canonical URL (Fixing Duplicate Issue) */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Sunrise Human Care Services" />
      
      {/* Business Location Information */}
      <meta property="business:contact_data:street_address" content="2050 West Chester Pike" />
      <meta property="business:contact_data:locality" content="Havertown" />
      <meta property="business:contact_data:region" content="PA" />
      <meta property="business:contact_data:postal_code" content="19083" />
      <meta property="business:contact_data:country_name" content="USA" />
      <meta property="place:location:latitude" content="39.9707" />
      <meta property="place:location:longitude" content="-75.3151" />

      {/* Article specific tags */}
      {article && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {article && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {article && author && <meta property="article:author" content={author} />}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Comprehensive Favicon Support */}
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/lovable-uploads/5de7ce79-1094-4c76-bc02-377afb48eb0a.png" sizes="32x32" type="image/png" />
      <link rel="icon" href="/lovable-uploads/3558a012-a648-4c7b-bce2-31f787f6a654.png" sizes="16x16" type="image/png" />
      
      {/* iOS / Apple */}
      <link rel="apple-touch-icon" href="/lovable-uploads/947ba080-a4e6-428b-a1cd-41a174bfe001.png" />
      <link rel="mask-icon" href="/favicon.svg" color="#F7913E" />
      
      {/* Android / PWA */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#F7913E" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Sunrise HCS" />
      
      {/* Microsoft */}
      <meta name="msapplication-TileColor" content="#F7913E" />
      <meta name="msapplication-TileImage" content="/lovable-uploads/947ba080-a4e6-428b-a1cd-41a174bfe001.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Performance Optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEOHead;
