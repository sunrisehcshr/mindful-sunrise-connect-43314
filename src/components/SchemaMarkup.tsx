import React from "react";
import { JsonLd } from "./JsonLd";

interface SchemaMarkupProps {
  type?: "MedicalClinic" | "Person" | "FAQPage" | "BreadcrumbList" | "Organization" | "MedicalService";
  data?: any;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data }) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@graph": [] as any[],
  };

  // 1. Organization Schema (Global)
  const organizationSchema = {
    "@type": "Organization",
    "@id": "https://sunrisehumancare.com/#organization",
    "name": "Sunrise Human Care Services",
    "url": "https://sunrisehumancare.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://sunrisehumancare.com/images/logo.png",
      "width": 512,
      "height": 512
    },
    "sameAs": [
      "https://www.facebook.com/sunrisehumancare",
      "https://www.linkedin.com/company/sunrise-human-care-services"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-814-620-2162",
      "contactType": "customer service",
      "areaServed": ["Darby", "Yeadon", "Lansdowne", "Upper Darby", "Collingdale", "Sharon Hill"],
      "availableLanguage": "English"
    },
    "foundingDate": "2018"
  };

  // 2. MedicalClinic & LocalBusiness (Global)
  const medicalClinicSchema = {
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": "https://sunrisehumancare.com/#medicalclinic",
    "name": "Sunrise Human Care Services",
    "url": "https://sunrisehumancare.com",
    "telephone": "+1-814-620-2162",
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
    "openingHours": "Mo-Fr 09:00-18:00",
    "medicalSpecialty": ["Psychiatry", "Psychology", "MentalHealth"],
    "insuranceAccepted": "Medicaid / Medical Assistance PA",
    "npi": "1528784568",
    "priceRange": "$",
    "hasMap": "https://maps.app.goo.gl/YourMapID",
    "image": "https://sunrisehumancare.com/images/logo.png"
  };

  // 3. MedicalService Schema (For Service/Condition pages)
  const createMedicalServiceSchema = (serviceData: any) => ({
    "@type": "MedicalService",
    "name": serviceData.name,
    "description": serviceData.description,
    "serviceType": serviceData.serviceType,
    "provider": { "@id": "https://sunrisehumancare.com/#medicalclinic" },
    "areaServed": ["Darby", "Yeadon", "Lansdowne", "Upper Darby", "Collingdale", "Sharon Hill"],
    "availableService": "Psychiatric Evaluation and Therapy",
    "medicalSpecialty": "Psychiatry",
    "isAcceptingNewPatients": true,
    "offers": {
      "@type": "Offer",
      "description": "Medicaid and Medical Assistance accepted. No waitlist.",
      "availability": "https://schema.org/InStock"
    }
  });

  if (!type) {
    // Default global schema for homepage or general use
    baseSchema["@graph"].push(organizationSchema, medicalClinicSchema);
  } else if (type === "MedicalService" && data) {
    // Add both MedicalService and global context
    baseSchema["@graph"].push(organizationSchema, medicalClinicSchema, createMedicalServiceSchema(data));
  } else if (type === "Person" && Array.isArray(data)) {
    // 4. Person Schema for Providers (/about)
    data.forEach((provider: any) => {
      baseSchema["@graph"].push({
        "@type": "Person",
        "name": provider.name,
        "jobTitle": provider.role,
        "worksFor": { "@id": "https://sunrisehumancare.com/#organization" },
        "description": provider.bio,
        "image": `https://sunrisehumancare.com${provider.image}`,
        "knowsAbout": provider.specialties
      });
    });
  } else if (type === "FAQPage" && Array.isArray(data)) {
    // 5. FAQPage Schema
    baseSchema["@graph"].push({
      "@type": "FAQPage",
      "mainEntity": data.map((faq: any) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  } else if (type === "BreadcrumbList" && Array.isArray(data)) {
    // 6. BreadcrumbList Schema
    baseSchema["@graph"].push({
      "@type": "BreadcrumbList",
      "itemListElement": data.map((item: any, index: number) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://sunrisehumancare.com${item.url.startsWith("/") ? item.url : "/" + item.url}`
      }))
    });
  }

  return (
    <JsonLd
      id={`schema-${type || "global"}`}
      data={baseSchema}
    />
  );
};

export default SchemaMarkup;
