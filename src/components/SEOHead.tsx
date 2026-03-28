
import React from "react";
import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

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
  serviceSchema?: {
    name: string;
    description: string;
    provider: string;
    serviceType: string;
    areaServed: string;
  };
  breadcrumbs?: BreadcrumbItem[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Sunrise Human Care Services | Mental Health Clinic in Darby, PA",
  description = "Experience comprehensive mental health care in Darby, PA at Sunrise Human Care Services. Our dedicated team provides counseling, therapy, psychiatry, and medication management for anxiety, depression, ADHD, trauma, and more.",
  canonicalUrl = "https://sunrisehumancare.com",
  ogImage = "https://sunrisehumancare.com/og-image.png",
  keywords = "mental health Darby, therapy Darby PA, counseling Delaware County, psychiatry Darby, anxiety treatment Darby, depression therapy Darby, ADHD treatment Darby, trauma therapy PA, PTSD counseling Darby, OCD treatment Darby, bipolar disorder Darby, medication management Darby, psychologist Darby, therapist near me, Darby mental health clinic",
  article = false,
  publishedTime,
  modifiedTime,
  author = "Sunrise Human Care Services",
  type = "website",
  serviceSchema,
  breadcrumbs
}) => {
  // Generate service-specific schema if provided
  const serviceSchemaScript = serviceSchema ? {
    "@context": "https://schema.org/",
    "@type": "MedicalService",
    "name": serviceSchema.name,
    "description": serviceSchema.description,
    "provider": {
      "@id": "https://sunrisehumancare.com/#MedicalOrganization"
    },
    "serviceType": serviceSchema.serviceType,
    "areaServed": {
      "@type": "GeoCircle",
      "name": serviceSchema.areaServed,
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "39.9184",
        "longitude": "-75.2590"
      },
      "geoRadius": "15000"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": canonicalUrl,
      "servicePhone": "+18146202162"
    }
  } : null;

  // Local business schema — consolidated with @id reference
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://sunrisehumancare.com/#MedicalBusiness",
    "name": "Sunrise Human Care Services",
    "image": "https://sunrisehumancare.com/images/logo.png",
    "url": "https://sunrisehumancare.com",
    "telephone": "+18146202162",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "869 Main Street",
      "addressLocality": "Darby",
      "addressRegion": "PA",
      "postalCode": "19023",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.9184",
      "longitude": "-75.2590"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "15:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/sunrisehumancare",
      "https://www.linkedin.com/company/sunrise-human-care-services"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Darby",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Delaware County",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Pennsylvania"
          }
        }
      },
      { "@type": "City", "name": "Yeadon" },
      { "@type": "City", "name": "Lansdowne" },
      { "@type": "City", "name": "Upper Darby" },
      { "@type": "City", "name": "Collingdale" }
    ],
    "hasMap": "https://www.google.com/maps?q=39.9184,-75.2590"
  };

  // Generate breadcrumb items or use provided ones
  const breadcrumbItems = breadcrumbs || generateBreadcrumbsFromUrl(canonicalUrl);
  
  // Breadcrumbs schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map(item => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "item": item.url
    }))
  };

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
      <meta name="geo.placename" content="Darby" />
      <meta name="geo.position" content="39.9184;-75.2590" />
      <meta name="ICBM" content="39.9184, -75.2590" />
      <meta name="google" content="notranslate" />
      <meta name="language" content="English" />
      <meta name="content-language" content="en-US" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      <link rel="alternate" hrefLang="en-us" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href="https://sunrisehumancare.com/" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Sunrise Human Care Services" />
      
      {/* Business Location Information */}
      <meta property="business:contact_data:street_address" content="869 Main Street" />
      <meta property="business:contact_data:locality" content="Darby" />
      <meta property="business:contact_data:region" content="PA" />
      <meta property="business:contact_data:postal_code" content="19023" />
      <meta property="business:contact_data:country_name" content="USA" />
      <meta property="place:location:latitude" content="39.9184" />
      <meta property="place:location:longitude" content="-75.2590" />

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

      {/* Service schema markup if provided */}
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchemaScript)}
        </script>
      )}

      {/* Local business schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {/* Breadcrumbs schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Font display optimization */}
      <style>
        {`
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400 700;
            font-display: swap;
            src: local('Inter'), url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');
          }
          
          @font-face {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400 700;
            font-display: swap;
            src: local('Open Sans'), url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-mu0SC55I.woff2) format('woff2');
          }
        `}
      </style>

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
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* FAQ schema removed - now handled per-page in ServicePageLayout */}
    </Helmet>
  );
};

// Helper function to generate breadcrumbs from URL
function generateBreadcrumbsFromUrl(url: string): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      name: "Home",
      url: "https://sunrisehumancare.com",
      position: 1
    }
  ];

  let path = url.replace(/^(https?:\/\/)?(www\.)?sunrisehumancare\.com\/?/, '/');
  
  if (path === '/' || path === '') {
    return breadcrumbs;
  }

  path = path.replace(/\/$/, '');
  const segments = path.split('/').filter(segment => segment !== '');
  
  if (segments[0] === 'services' || segments[0] === 'conditions') {
    breadcrumbs.push({
      name: segments[0].charAt(0).toUpperCase() + segments[0].slice(1),
      url: `https://sunrisehumancare.com/${segments[0]}`,
      position: 2
    });
    
    if (segments.length > 1) {
      const name = segments[1]
        .replace(/-/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase())
        .replace(/\bPa\b/g, 'PA')
        .replace(/\bPtsd\b/gi, 'PTSD')
        .replace(/\bOcd\b/gi, 'OCD')
        .replace(/\bAdhd\b/gi, 'ADHD')
        .replace(/\bBpd\b/gi, 'BPD');
        
      breadcrumbs.push({
        name: name,
        url: `https://sunrisehumancare.com/${segments[0]}/${segments[1]}`,
        position: 3
      });
    }
  } else if (segments.length > 0) {
    const finalSegment = segments[segments.length - 1];
    const name = finalSegment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase());
      
    breadcrumbs.push({
      name: name,
      url: url,
      position: 2
    });
  }
  
  return breadcrumbs;
}

export default SEOHead;
