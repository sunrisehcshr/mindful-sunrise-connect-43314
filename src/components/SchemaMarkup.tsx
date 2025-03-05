import React from 'react';
import { Helmet } from 'react-helmet';

// Local Business (MedicalClinic) Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://sunrisehcsllc.com/#clinic",
  "name": "Sunrise Human Care Services",
  "image": {
    "@type": "ImageObject",
    "url": "https://sunrisehcsllc.com/photos/sunrise-hcs.jpg",
    "width": 1200,
    "height": 630
  },
  "url": "https://sunrisehcsllc.com",
  "telephone": "+18146202162",
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
  "sameAs": [
    "https://www.facebook.com/sunrisehcs",
    "https://twitter.com/sunrisehcs",
    "https://instagram.com/sunrisehcs"
  ],
  "priceRange": "$100-$500",
  "medicalSpecialty": ["Psychiatry", "Psychology", "Counseling"],
  "description": "Comprehensive mental health care in Havertown, PA at Sunrise Human Care Services.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": 50
  }
};

// Healthcare Service Schema
const healthcareServiceSchema = {
  "@context": "https://schema.org",
  "@type": "HealthCareService",
  "@id": "https://sunrisehcsllc.com/#mental-health-service",
  "name": "Mental Health Therapy and Psychiatry Services",
  "description": "Specializing in anxiety, depression, ADHD, PTSD, OCD, bipolar disorder, addiction, and more. Offering individual, couples, and family therapy for all ages in Havertown, PA and via telehealth.",
  "provider": {
    "@id": "https://sunrisehcsllc.com/#clinic"
  },
  "serviceType": ["Psychiatric", "Therapeutic Procedure", "Mental Health Care"],
  "specialty": ["Psychiatry", "Psychology", "Counseling"],
  "availableChannel": [
    {
      "@type": "ServiceChannel",
      "serviceUrl": "https://sunrisehcsllc.com/book-appointment",
      "availableLanguage": [
        {
          "@type": "Language",
          "name": "English"
        }
      ]
    },
    {
      "@type": "ServiceChannel",
      "serviceUrl": "https://sunrisehcsllc.com/telehealth",
      "serviceType": "Telemedicine",
      "availableLanguage": [
        {
          "@type": "Language",
          "name": "English"
        }
      ]
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
      "minPrice": "100",
      "maxPrice": "500"
    }
  }
};

const SchemaMarkup = () => {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(healthcareServiceSchema)}</script>
    </Helmet>
  );
};

export default SchemaMarkup;
