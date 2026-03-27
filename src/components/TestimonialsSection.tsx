import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Sunrise Human Care has been a lifeline for our family. The therapists are compassionate, professional, and truly care about their patients. I've seen incredible progress in just a few months.",
    service: "Family Therapy",
    date: "2025-11-15"
  },
  {
    name: "James R.",
    rating: 5,
    text: "After struggling with anxiety for years, I finally found the right support at Sunrise. The team took the time to understand my needs and created a personalized treatment plan that actually works.",
    service: "Anxiety Treatment",
    date: "2025-12-03"
  },
  {
    name: "Maria L.",
    rating: 5,
    text: "The medication management services here are excellent. Dr. Khan is thorough and always explains everything clearly. I feel heard and respected at every visit.",
    service: "Medication Management",
    date: "2026-01-10"
  },
  {
    name: "David K.",
    rating: 5,
    text: "Finding a mental health provider that accepts Medicaid was challenging until I found Sunrise. They provide the same quality of care regardless of insurance type. Highly recommend!",
    service: "Individual Therapy",
    date: "2026-02-05"
  }
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://sunrisehumancare.com/#MedicalBusiness",
  "name": "Sunrise Human Care Services",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "4",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": testimonials.map(t => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": t.name },
    "datePublished": t.date,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": t.rating.toString(),
      "bestRating": "5"
    },
    "reviewBody": t.text
  }))
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#f0ece4]">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      </Helmet>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70 mb-4">
            Patient Testimonials
          </span>
          <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-5xl text-stone-800 tracking-tight leading-tight mb-4">
            What our patients
            <span className="block font-instrument-serif italic text-amber-400 font-normal">say about us</span>
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto font-barlow">
            Real experiences from individuals and families who have found healing and support at Sunrise Human Care Services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white border border-stone-200/80 rounded-2xl p-6 hover:shadow-lg hover:border-amber-200 transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-amber-200/50" />
              
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-stone-600 text-sm leading-relaxed mb-4 font-barlow">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-barlow font-semibold text-stone-800 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-stone-400 font-barlow">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
