
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
          "url": "https://sunrisehcsllc.com/logo.svg",
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
        "image": "https://sunrisehcsllc.com/therapy-in-havertown.jpg",
        "description": "A trusted mental health clinic in Havertown, PA, providing therapy and psychiatric services.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2050 West Chester Pike",
          "addressLocality": "Havertown",
          "addressRegion": "PA",
          "postalCode": "19083",
          "addressCountry": "US"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
          }
        ],
        "telephone": "+18146202162",
        "medicalSpecialty": ["Psychiatry", "Psychotherapy", "Mental Health"],
        "availableService": [
          {
            "@type": "TherapeuticProcedure",
            "name": "Individual Therapy",
            "url": "https://sunrisehcsllc.com/individual-therapy-havertown-pa",
            "description": "Personalized one-on-one therapy sessions tailored to your unique needs"
          },
          {
            "@type": "TherapeuticProcedure",
            "name": "Couples Counseling",
            "url": "https://sunrisehcsllc.com/couples-counseling-havertown-pa",
            "description": "Specialized therapy to help couples improve communication and resolve conflicts"
          },
          {
            "@type": "TherapeuticProcedure",
            "name": "Family Therapy",
            "url": "https://sunrisehcsllc.com/family-therapy-havertown-pa",
            "description": "Comprehensive family counseling to improve relationships among all family members"
          },
          {
            "@type": "TherapeuticProcedure",
            "name": "Child & Adolescent Therapy",
            "url": "https://sunrisehcsllc.com/child-therapy-havertown-pa",
            "description": "Specialized therapeutic approaches for children and teens"
          },
          {
            "@type": "TherapeuticProcedure",
            "name": "Anxiety Therapy",
            "url": "https://sunrisehcsllc.com/anxiety-therapy-havertown-pa",
            "description": "Evidence-based therapy for all types of anxiety disorders"
          },
          {
            "@type": "TherapeuticProcedure",
            "name": "Depression Therapy",
            "url": "https://sunrisehcsllc.com/depression-therapy-havertown-pa",
            "description": "Effective, compassionate treatment for depression"
          },
          {
            "@type": "TherapeuticProcedure",
            "name": "ADHD Treatment",
            "url": "https://sunrisehcsllc.com/adhd-treatment-havertown-pa",
            "description": "Comprehensive ADHD assessment and treatment for children, adolescents, and adults"
          },
          {
            "@type": "MedicalTest",
            "name": "Psychiatric Evaluations",
            "url": "https://sunrisehcsllc.com/psychiatric-evaluations-havertown-pa",
            "description": "Comprehensive mental health assessments for accurate diagnosis"
          },
          {
            "@type": "MedicalProcedure",
            "name": "Medication Management",
            "url": "https://sunrisehcsllc.com/medication-management-havertown-pa",
            "description": "Expert psychiatric medication services to manage mental health conditions"
          },
          {
            "@type": "TherapeuticProcedure",
            "name": "Trauma & PTSD Therapy",
            "url": "https://sunrisehcsllc.com/ptsd-therapy-havertown-pa",
            "description": "Specialized treatment for trauma and PTSD"
          }
        ],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "39.9707",
          "longitude": "-75.3151"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://sunrisehcsllc.com/mental-health-havertown-pa"
        },
        "parentOrganization": {
          "@type": "MedicalOrganization",
          "@id": "https://sunrisehcsllc.com/#MedicalOrganization"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://sunrisehcsllc.com/#LocalBusiness",
        "name": "Sunrise Human Care Services",
        "image": "https://sunrisehcsllc.com/og-image.png",
        "url": "https://sunrisehcsllc.com",
        "telephone": "+18146202162",
        "priceRange": "$$",
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
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sunrisehcsllc.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sunrisehcsllc.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://sunrisehcsllc.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "All Services",
            "item": "https://sunrisehcsllc.com/services"
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SchemaMarkup;
