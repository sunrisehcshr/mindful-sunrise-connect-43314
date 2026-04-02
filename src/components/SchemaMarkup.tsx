
import React from "react";
import Script from "next/script";

const SchemaMarkup: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Sunrise Human Care Services",
        "description": "Mental health clinic offering therapy and psychiatry in Darby, PA",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "869 Main Street",
          "addressLocality": "Darby",
          "addressRegion": "PA",
          "postalCode": "19023",
          "addressCountry": "US"
        },
        "telephone": "+1-814-620-2162",
        "url": "https://sunrisehumancare.com",
        "image": "https://sunrisehumancare.com/images/logo.png",
        "priceRange": "$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "39.9184",
          "longitude": "-75.2590"
        },
        "acceptedPaymentMethod": ["Cash", "CreditCard", "Medicaid"],
        "areaServed": "Darby, PA"
      },
      {
        "@type": "WebSite",
        "@id": "https://sunrisehumancare.com/#WebSite",
        "url": "https://sunrisehumancare.com/",
        "name": "Sunrise Human Care Services | Mental Health Services in Darby, PA",
        "description": "Comprehensive mental health care in Darby, PA, offering therapy and psychiatry services for anxiety, depression, ADHD, and more.",
        "publisher": { "@id": "https://sunrisehumancare.com/#MedicalOrganization" },
        "inLanguage": "en-US",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://sunrisehumancare.com/"
        }
      },
      {
        "@type": "MedicalOrganization",
        "@id": "https://sunrisehumancare.com/#MedicalOrganization",
        "name": "Sunrise Human Care Services",
        "alternateName": "Sunrise Human Care",
        "url": "https://sunrisehumancare.com/",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://sunrisehumancare.com/#logo",
          "url": "https://sunrisehumancare.com/images/logo.png",
          "width": 512,
          "height": 512,
          "caption": "Sunrise Human Care Services Logo"
        },
        "image": "https://sunrisehumancare.com/images/logo.png",
        "description": "Sunrise Human Care Services provides expert mental health care, therapy, and psychiatry in Darby, PA. We specialize in treating anxiety, depression, ADHD, and trauma.",
        "foundingDate": "2020-01-01",
        "founder": {
          "@type": "Person",
          "name": "Michael Thevar"
        },
        "taxID": "1528784568",
        "iso6523Code": "1528784568",
        "identifier": {
          "@type": "PropertyValue",
          "name": "NPI",
          "value": "1528784568"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "869 Main Street",
          "addressLocality": "Darby",
          "addressRegion": "PA",
          "postalCode": "19023",
          "addressCountry": "US"
        },
        "telephone": "+1-814-620-2162",
        "email": "info@sunrisehumancare.com",
        "priceRange": "$$",
        "paymentAccepted": "Cash, Credit Card, Medicaid",
        "currenciesAccepted": "USD",
        "sameAs": [
          "https://www.facebook.com/sunrisehumancare",
          "https://www.linkedin.com/company/sunrise-human-care-services"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+18146202162",
          "contactType": "customer service",
          "availableLanguage": "English",
          "areaServed": [
            { 
              "@type": "City", 
              "name": "Darby",
              "containedIn": {
                "@type": "AdministrativeArea",
                "name": "Delaware County"
              }
            },
            { "@type": "City", "name": "Upper Darby" },
            { "@type": "City", "name": "Yeadon" },
            { "@type": "City", "name": "Lansdowne" },
            { "@type": "City", "name": "Philadelphia" }
          ]
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Mental Health Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalService",
                "name": "Individual Therapy",
                "url": "https://sunrisehumancare.com/individual-therapy-darby-pa"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalService",
                "name": "Couples Counseling",
                "url": "https://sunrisehumancare.com/couples-counseling-darby-pa"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalService",
                "name": "Family Therapy",
                "url": "https://sunrisehumancare.com/family-therapy-darby-pa"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalService",
                "name": "Child & Adolescent Therapy",
                "url": "https://sunrisehumancare.com/child-therapy-darby-pa"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalService",
                "name": "Psychiatric Evaluations",
                "url": "https://sunrisehumancare.com/psychiatric-evaluations-darby-pa"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalService",
                "name": "Medication Management",
                "url": "https://sunrisehumancare.com/medication-management-darby-pa"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SchemaMarkup;
