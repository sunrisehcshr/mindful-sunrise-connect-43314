
import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaMarkup: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Sunrise Human Care Services",
    "image": "https://example.com/photos/sunrise-hcs.jpg",
    "url": "https://sunrisehcs.com",
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
    "priceRange": "$$",
    "medicalSpecialty": [
      "Psychiatry",
      "Psychology",
      "Counseling"
    ],
    "description": "Experience comprehensive mental health care in Havertown, PA at Sunrise Human Care Services. Our dedicated team of licensed therapists, psychologists, counselors, and psychiatrists provides online and in-person counseling, therapy, psychiatry, and medication management."
  };

  const healthcareServiceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Mental Health Therapy",
    "description": "We specialize in treating anxiety, depression, ADHD, stress, trauma, grief, PTSD, OCD, eating disorders, bipolar disorder, schizophrenia, addiction, substance abuse, and more. We offer individual, couples and family therapy for children, teens, adults, and seniors.",
    "medicineSystem": "Conventional Medicine",
    "relevantSpecialty": [
      "Psychiatry",
      "Psychology",
      "Counseling"
    ],
    "recognizingAuthority": "American Psychological Association",
    "study": {
      "@type": "MedicalObservationalStudy",
      "studySubject": {
        "@type": "MedicalEntity",
        "name": "Mental Health and Wellness"
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(healthcareServiceSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
