import React from "react";
import { Helmet } from "react-helmet";

const SchemaMarkup = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://sunrisehcsllc.com/#website",
        "url": "https://sunrisehcsllc.com/",
        "name": "Sunrise Human Care Services",
        "description": "Comprehensive mental health care in Havertown, PA, offering therapy and psychiatry services.",
        "publisher": {
          "@id": "https://sunrisehcsllc.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://sunrisehcsllc.com/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://sunrisehcsllc.com/#organization",
        "name": "Sunrise Human Care Services",
        "url": "https://sunrisehcsllc.com/",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://sunrisehcsllc.com/#logo",
          "url": "https://sunrisehcsllc.com/logo.svg",
          "width": 500,
          "height": 171
        },
        "sameAs": [
          "https://www.facebook.com/sunrisehcs",
          "https://twitter.com/sunrisehcs",
          "https://instagram.com/sunrisehcs",
          "https://www.youtube.com/channel/YOUR_YOUTUBE_LINK",
          "https://www.linkedin.com/company/sunrisehcs"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+18146202162",
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      },
      {
        "@type": "MedicalClinic",
        "@id": "https://sunrisehcsllc.com/#clinic",
        "name": "Sunrise Human Care Services",
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
        "medicalSpecialty": ["Psychiatry", "Psychology", "Counseling"],
        "priceRange": "$100 - $500",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "reviewCount": 50
        }
      },
      {
        "@type": "Service",
        "@id": "https://sunrisehcsllc.com/#mental-health-service",
        "name": "Mental Health Therapy and Psychiatry Services",
        "description": "Specializing in anxiety, depression, ADHD, PTSD, OCD, bipolar disorder, addiction, and more. Offering individual, couples, and family therapy for all ages in Havertown, PA and via telehealth.",
        "provider": {
          "@id": "https://sunrisehcsllc.com/#clinic"
        },
        "availableChannel": [
          {
            "@type": "ServiceChannel",
            "serviceUrl": "https://sunrisehcsllc.com/book-appointment",
            "availableLanguage": {
              "@type": "Language",
              "name": "English"
            },
            "providesService": {
              "@type": "MedicalProcedure",
              "name": "In-Person Therapy & Psychiatry"
            }
          },
          {
            "@type": "ServiceChannel",
            "serviceUrl": "https://sunrisehcsllc.com/telehealth",
            "availableLanguage": {
              "@type": "Language",
              "name": "English"
            },
            "providesService": {
              "@type": "MedicalProcedure",
              "name": "Telehealth Therapy & Psychiatry"
            }
          }
        ],
        "areaServed": [
          {
            "@type": "Place",
            "name": "Havertown, PA"
          },
          {
            "@type": "Place",
            "name": "Online"
          }
        ],
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "minPrice": 100,
            "maxPrice": 500
          }
        }
      },
      {
        "@type": "Action",
        "target": "https://sunrisehcsllc.com/contact",
        "name": "Contact Us"
      }
    ]
  };

  return (
    <Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Helmet>
  );
};

export default SchemaMarkup;
