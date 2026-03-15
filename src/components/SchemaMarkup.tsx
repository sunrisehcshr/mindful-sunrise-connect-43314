
import React from "react";
import { Helmet } from "react-helmet-async";

const SchemaMarkup: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://sunrisehumancare.com/#WebSite",
        "url": "https://sunrisehumancare.com/",
        "name": "Sunrise Human Care Services | Mental Health Services in Havertown, PA",
        "description": "Comprehensive mental health care in Havertown, PA, offering therapy and psychiatry services for anxiety, depression, ADHD, and more.",
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
        "url": "https://sunrisehumancare.com/",
        "foundingDate": "2020-01-01",
        "founder": "Michael Thevar",
        "identifier": {
          "@type": "PropertyValue",
          "name": "NPI",
          "value": "1528784568"
        },
        "logo": {
          "@type": "ImageObject",
          "@id": "https://sunrisehumancare.com/#logo",
          "url": "https://sunrisehumancare.com/logo.svg",
          "width": 512,
          "height": 512,
          "caption": "Sunrise Human Care Services Logo"
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
          "areaServed": [
            { 
              "@type": "City", 
              "name": "Havertown",
              "containedIn": {
                "@type": "AdministrativeArea",
                "name": "Delaware County"
              }
            },
            { "@type": "City", "name": "Drexel Hill" },
            { "@type": "City", "name": "Broomall" },
            { "@type": "City", "name": "Ardmore" }
          ]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2050 West Chester Pike",
          "addressLocality": "Havertown",
          "addressRegion": "PA",
          "postalCode": "19083",
          "addressCountry": "US"
        },
        "parentOrganization": {
          "@id": "https://sunrisehumancare.com/#MedicalBusiness"
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
                "url": "https://sunrisehumancare.com/individual-therapy-havertown-pa"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalService",
                "name": "IBHS Services",
                "url": "https://sunrisehumancare.com/ibhs-havertown-pa"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
