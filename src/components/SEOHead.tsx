
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
  title = "Sunrise Human Care Services | Mental Health Clinic in Havertown, PA",
  description = "Experience comprehensive mental health care in Havertown, PA at Sunrise Human Care Services. Our dedicated team provides counseling, therapy, psychiatry, and medication management for anxiety, depression, ADHD, trauma, and more.",
  canonicalUrl = "https://sunrisehumancare.com",
  ogImage = "/og-image.png",
  keywords = "mental health Havertown, therapy Havertown PA, counseling Delaware County, psychiatry Havertown, anxiety treatment Havertown, depression therapy Havertown, ADHD treatment Havertown, trauma therapy PA, PTSD counseling Havertown, OCD treatment Havertown, bipolar disorder Havertown, medication management Havertown, psychologist Havertown, therapist near me, Havertown mental health clinic",
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
      "@type": "MedicalOrganization",
      "name": serviceSchema.provider,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2050 West Chester Pike",
        "addressLocality": "Havertown",
        "addressRegion": "PA",
        "postalCode": "19083",
        "addressCountry": "US"
      },
      "telephone": "+18146202162",
      "url": "https://sunrisehumancare.com",
      "logo": "https://sunrisehumancare.com/logo.png",
      "sameAs": [
        "https://www.facebook.com/sunrisehumancare",
        "https://www.linkedin.com/company/sunrise-human-care-services"
      ]
    },
    "serviceType": serviceSchema.serviceType,
    "areaServed": {
      "@type": "GeoCircle",
      "name": serviceSchema.areaServed,
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "39.9707",
        "longitude": "-75.3151"
      },
      "geoRadius": "15000"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": canonicalUrl,
      "servicePhone": "+18146202162"
    }
  } : null;

  // Local business schema for the organization
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Sunrise Human Care Services",
    "image": "https://sunrisehumancare.com/logo.png",
    "url": "https://sunrisehumancare.com",
    "@id": "https://sunrisehumancare.com",
    "telephone": "+18146202162",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2050 West Chester Pike",
      "addressLocality": "Havertown",
      "addressRegion": "PA",
      "postalCode": "19083",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.9707",
      "longitude": "-75.3151"
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
    "areaServed": {
      "@type": "GeoCircle",
      "name": "Havertown, PA and Delaware County",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "39.9707",
        "longitude": "-75.3151"
      },
      "geoRadius": "15000"
    }
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

  // Local service areas schema
  const localServiceAreasSchema = {
    "@context": "https://schema.org",
    "@type": "ServiceAreas",
    "serviceArea": [
      {
        "@type": "City",
        "name": "Havertown",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Delaware County",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Pennsylvania",
            "containedInPlace": {
              "@type": "Country",
              "name": "United States"
            }
          }
        }
      },
      {
        "@type": "City",
        "name": "Broomall",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Delaware County"
        }
      },
      {
        "@type": "City",
        "name": "Ardmore",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Delaware County"
        }
      },
      {
        "@type": "City",
        "name": "Drexel Hill",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Delaware County"
        }
      },
      {
        "@type": "City",
        "name": "Springfield",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Delaware County"
        }
      }
    ]
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
      <meta name="geo.placename" content="Havertown" />
      <meta name="geo.position" content="39.9707;-75.3151" />
      <meta name="ICBM" content="39.9707, -75.3151" />
      <meta name="google" content="notranslate" />
      <meta name="language" content="English" />
      <meta name="content-language" content="en-US" />

      {/* Canonical URL (Fixing Duplicate Issue) */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* hreflang tags - FIX: Changed 'hreflang' to 'hrefLang' (with capital L) */}
      <link rel="alternate" hrefLang="en-us" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href="https://sunrisehumancare.com/" />

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

      {/* Breadcrumbs schema - Using structured BreadcrumbItem[] */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      {/* Local Service Areas schema */}
      <script type="application/ld+json">
        {JSON.stringify(localServiceAreasSchema)}
      </script>

      {/* Font display optimization - removed problematic preloads */}
      <style>
        {`
          /* Font display swap to prevent invisible text during font loading */
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

      {/* Performance Optimization - proper preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Pre-connect to analytics domains to speed up their loading */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Structured data for FAQ pages when applicable */}
      {canonicalUrl.includes("therapy") || canonicalUrl.includes("treatment") || canonicalUrl.includes("counseling") ? (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Does Sunrise Human Care accept insurance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We currently accept Medicaid for our mental health services. Our team specializes in serving the Medicaid community with quality mental health treatment. Please call our office to verify your Medicaid benefits."
                }
              },
              {
                "@type": "Question",
                "name": "How long are therapy sessions at Sunrise Human Care?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Initial evaluations are typically 60 minutes, while standard therapy sessions are 45-50 minutes. Specialized services may vary in length. We'll discuss the recommended session duration for your specific needs during your consultation."
                }
              },
              {
                "@type": "Question",
                "name": "What areas does Sunrise Human Care serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We proudly serve Havertown, PA and surrounding communities in Delaware County, including Drexel Hill, Broomall, Ardmore, Springfield, Upper Darby, and Newtown Square."
                }
              }
            ]
          })}
        </script>
      ) : null}
    </Helmet>
  );
};

// Helper function to generate breadcrumbs from URL
function generateBreadcrumbsFromUrl(url: string): BreadcrumbItem[] {
  // Always start with home
  const breadcrumbs: BreadcrumbItem[] = [
    {
      name: "Home",
      url: "https://sunrisehumancare.com",
      position: 1
    }
  ];

  // Remove protocol and domain if present
  let path = url.replace(/^(https?:\/\/)?(www\.)?sunrisehumancare\.com\/?/, '/');
  
  // If it's the homepage, just return the home breadcrumb
  if (path === '/' || path === '') {
    return breadcrumbs;
  }

  // Remove trailing slash if present
  path = path.replace(/\/$/, '');
  
  // Split the path into segments
  const segments = path.split('/').filter(segment => segment !== '');
  
  // Special handling for services and conditions
  if (segments[0] === 'services' || segments[0] === 'conditions') {
    breadcrumbs.push({
      name: segments[0].charAt(0).toUpperCase() + segments[0].slice(1),
      url: `https://sunrisehumancare.com/${segments[0]}`,
      position: 2
    });
    
    if (segments.length > 1) {
      // Format service/condition name from slug
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
    // Handle other pages
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
