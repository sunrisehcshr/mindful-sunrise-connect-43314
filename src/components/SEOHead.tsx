import React from "react";
import { JsonLd } from "./JsonLd";

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

/**
 * SEOHead component for Next.js App Router.
 * In Next.js, standard meta tags should be handled via the metadata object in layout.tsx or page.tsx.
 * This component handles JSON-LD structured data and other script-based SEO elements.
 */
const SEOHead: React.FC<SEOHeadProps> = ({
  canonicalUrl = "https://sunrisehumancare.com",
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
    "hasMap": "https://maps.app.goo.gl/x9UrhQE4cwZd9Ee47"
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
    <>
      {/* Service schema markup if provided */}
      {serviceSchema && (
        <JsonLd
          id="service-schema"
          data={serviceSchemaScript!}
        />
      )}

      {/* Local business schema */}
      <JsonLd
        id="local-business-schema"
        data={localBusinessSchema}
      />

      {/* Breadcrumbs schema */}
      <JsonLd
        id="breadcrumb-schema"
        data={breadcrumbSchema}
      />
    </>
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
