
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  location?: string;
  service?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, location, service }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-md border border-orange-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Quote className="h-8 w-8 text-orange-300 mb-4" />
      <p className="text-muted-foreground italic mb-4">{quote}</p>
      <div className="flex flex-col">
        <span className="font-semibold text-orange-600">{author}</span>
        {(location || service) && (
          <span className="text-sm text-muted-foreground">
            {location && service ? `${location} • ${service}` : location || service}
          </span>
        )}
      </div>
    </motion.div>
  );
};

const WarmTestimonialsSection = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "The therapists at Sunrise Human Care have helped me through the most difficult time in my life. Their compassionate approach and expertise made all the difference in my recovery journey.",
      author: "Sarah M.",
      location: "Havertown, PA",
      service: "Depression Therapy"
    },
    {
      quote: "Our family therapy sessions at Sunrise completely transformed our home environment. We now have better communication and understanding among all family members.",
      author: "The Johnson Family",
      location: "Delaware County",
      service: "Family Therapy"
    },
    {
      quote: "I've been to several therapists over the years, but none have been as effective as my therapist at Sunrise. They truly listened and provided practical strategies that work for my anxiety.",
      author: "Michael T.",
      location: "Broomall, PA",
      service: "Anxiety Treatment"
    }
  ];

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-gray-900 font-playfair mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Client Stories
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Read what our clients have to say about their experiences with Sunrise Human Care
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index} 
              quote={testimonial.quote} 
              author={testimonial.author} 
              location={testimonial.location}
              service={testimonial.service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WarmTestimonialsSection;
