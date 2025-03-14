import { Helmet } from "react-helmet-async";

const SchemaMarkup = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://sunrisehcsllc.com/#website",
        "url": "https://sunrisehcsllc.com/",
        "name": "Sunrise Human Care Services | Mental Health Services in Havertown, PA",
        "description": "Comprehensive mental health care in Havertown, PA, offering therapy and psychiatry services for anxiety, depression, ADHD, and more.",
        "publisher": { "@id": "https://sunrisehcsllc.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": { "@type": "EntryPoint", "urlTemplate": "https://sunrisehcsllc.com/?s={search_term_string}" },
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "MedicalOrganization",
        "@id": "https://sunrisehcsllc.com/#organization",
        "name": "Sunrise Human Care Services",
        "url": "https://sunrisehcsllc.com/",
        "foundingDate": "2020-01-01",
        "founder": "Michael Thevar",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://sunrisehcsllc.com/#logo",
          "url": "https://sunrisehcsllc.com/favicon.svg",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://www.facebook.com/sunrisehcs",
          "https://twitter.com/sunrisehcs",
          "https://instagram.com/sunrisehcs",
          "https://www.linkedin.com/company/sunrisehcs"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+18146202162",
          "contactType": "customer service",
          "availableLanguage": "English",
          "areaServed": [{ "@type": "Place", "name": "Havertown, PA" }]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2050 West Chester Pike",
          "addressLocality": "Havertown",
          "addressRegion": "PA",
          "postalCode": "19083",
          "addressCountry": "US"
        }
      },
      {
        "@type": "MedicalClinic",
        "@id": "https://sunrisehcsllc.com/#clinic",
        "name": "Sunrise Human Care Services - Havertown Mental Health Clinic",
        "url": "https://sunrisehcsllc.com/",
        "image": {
          "@type": "ImageObject",
          "url": "https://sunrisehcsllc.com/photos/sunrise-hcs.jpg",
          "width": 1200,
          "height": 630
        },
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
          "latitude": 39.9707,
          "longitude": -75.3151
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "17:00"
          }
        ],
        "medicalSpecialty": ["Psychiatry", "Psychology", "Counseling", "Mental Health"],
        "priceRange": "$100 - $500",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "reviewCount": 50
        },
        "areaServed": [
          { "@type": "Place", "name": "Havertown, PA" },
          { "@type": "Place", "name": "Delaware County, PA" },
          { "@type": "Place", "name": "Philadelphia Metro Area" }
        ]
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </Helmet>
  );
};

export default SchemaMarkup;
