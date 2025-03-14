import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SchemaMarkup = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://sunrisehcsllc.com/#WebSite",
        "url": "https://sunrisehcsllc.com/",
        "name": "Sunrise Human Care Services | Mental Health Services in Havertown, PA",
        "description": "Comprehensive mental health care in Havertown, PA, offering therapy and psychiatry services for anxiety, depression, ADHD, and more.",
        "publisher": { "@id": "https://sunrisehcsllc.com/#MedicalOrganization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://sunrisehcsllc.com/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "en-US",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://sunrisehcsllc.com/"
        }
      },
      {
        "@type": "MedicalOrganization",
        "@id": "https://sunrisehcsllc.com/#MedicalOrganization",
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
        "@id": "https://sunrisehcsllc.com/#MedicalClinic",
        "name": "Sunrise Human Care Services - Mental Health Clinic",
        "url": "https://sunrisehcsllc.com/mental-health-havertown-pa",
        "image": "https://sunrisehcsllc.com/clinic-image.jpg",
        "description": "A trusted mental health clinic in Havertown, PA, providing therapy and psychiatric services.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2050 West Chester Pike",
          "addressLocality": "Havertown",
          "addressRegion": "PA",
          "postalCode": "19083",
          "addressCountry": "US"
        },
        "openingHours": "Mo-Fr 09:00-17:00",
        "telephone": "+18146202162",
        "medicalSpecialty": ["Psychiatry", "Psychotherapy", "Mental Health"],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://sunrisehcsllc.com/mental-health-havertown-pa"
        },
        "parentOrganization": {
          "@type": "MedicalOrganization",
          "@id": "https://sunrisehcsllc.com/#MedicalOrganization"
        }
      }
    ]
  };

  useEffect(() => {
    console.log("Injecting Schema Markup");
  }, []);

  return (
    <Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </Helmet>
  );
};

export default SchemaMarkup;
