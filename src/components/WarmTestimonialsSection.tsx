
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircleHeart } from 'lucide-react';
import { Separator } from './ui/separator';
import SectionTag from './ui/section-tag';
import TestimonialCard from './testimonials/TestimonialCard';

const testimonials = [
  {
    quote: "Sunrise Human Care Services has been a huge help for my teenage daughter. The therapist really connected with her, and we've seen such a positive change. So grateful for their support!",
    author: "Emily T.",
    location: "Havertown",
    rating: 5
  }, 
  {
    quote: "I was hesitant to start therapy, but from my first session, I felt truly heard and understood. The staff is kind, professional, and really invested in helping you heal.",
    author: "James W.",
    location: "Drexel Hill, PA",
    rating: 5
  }, 
  {
    quote: "My father has difficulty leaving the house, so finding a clinic that offers home sessions was a relief. The therapist visits us in Broomall, and it has made such a difference in his well-being!",
    author: "Sarah W.",
    location: "Broomall, PA",
    rating: 5
  }
];

const WarmTestimonialsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      {/* Enhanced vibrant yellow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200/80 via-white/40 to-amber-100/70"></div>
        <div className="absolute inset-0 opacity-15 sunshine-pattern"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <SectionTag>Testimonials</SectionTag>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 font-playfair">What Our Clients Say</h2>
          
          <p className="text-amber-800 max-w-2xl mx-auto">
            Real stories from people whose lives have been transformed through compassionate care and therapy.
          </p>
          
          <div className="mx-auto mt-6 mb-10 w-24">
            <Separator className="bg-gradient-to-r from-transparent via-amber-300/70 to-transparent h-0.5" />
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
              rating={testimonial.rating}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WarmTestimonialsSection;
