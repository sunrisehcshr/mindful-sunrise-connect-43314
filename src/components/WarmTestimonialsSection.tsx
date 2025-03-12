
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "The therapists at Sunrise Human Care Services helped me find hope again when I thought all was lost. Their compassionate approach made all the difference.",
    author: "Maria L.",
    role: "Client"
  },
  {
    quote: "As a senior dealing with life transitions, I found the perfect support system here. The staff truly understands the unique needs of older adults.",
    author: "Robert T.",
    role: "Client"
  },
  {
    quote: "Our family counseling sessions transformed how we communicate. We're now able to support each other through difficult times.",
    author: "The Johnson Family",
    role: "Clients"
  }
];

const WarmTestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">What Our Clients Say</h2>
          <p className="text-amber-800 max-w-2xl mx-auto">
            Real stories from people whose lives have been transformed through compassionate care and therapy.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="warm-card rounded-xl p-6 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-1">
                <div className="text-amber-500 mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-amber-800 mb-4 italic">{testimonial.quote}</p>
              </div>
              <div>
                <p className="font-semibold text-amber-900">{testimonial.author}</p>
                <p className="text-amber-700 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WarmTestimonialsSection;
