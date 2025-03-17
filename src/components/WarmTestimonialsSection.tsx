
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircleHeart, Star } from 'lucide-react';
import { Separator } from './ui/separator';
import SectionTag from './ui/section-tag';

const testimonials = [
  {
    quote: "Sunrise Human Care Services has been a huge help for my teenage daughter. The therapist really connected with her, and we've seen such a positive change. So grateful for their support!",
    author: "Emily T., Havertown",
    rating: 5
  }, 
  {
    quote: "I was hesitant to start therapy, but from my first session, I felt truly heard and understood. The staff is kind, professional, and really invested in helping you heal.",
    author: "James W., Drexel Hill, PA",
    rating: 5
  }, 
  {
    quote: "My father has difficulty leaving the house, so finding a clinic that offers home sessions was a relief. The therapist visits us in Broomall, and it has made such a difference in his well-being!",
    author: "Sarah W., Broomall, PA",
    rating: 5
  }
];

const WarmTestimonialsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Enhanced vibrant background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-50/90 via-white to-amber-50/80"></div>
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="testimonial-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1.5" fill="rgba(251, 191, 36, 0.4)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#testimonial-dots)" />
          </svg>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-10 text-orange-400 -z-5 hidden lg:block">
        <MessageCircleHeart size={80} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 text-orange-400 -z-5 hidden lg:block">
        <MessageCircleHeart size={80} />
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
          
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 font-merriweather">What Our Clients Say</h2>
          
          <p className="text-amber-800 max-w-2xl mx-auto">
            Real stories from people whose lives have been transformed through compassionate care and therapy.
          </p>
          
          <div className="mx-auto mt-6 mb-10 w-24">
            <Separator className="bg-gradient-to-r from-transparent via-amber-300/70 to-transparent h-0.5" />
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm border border-amber-100/60 rounded-xl p-8 flex flex-col floating-card relative shadow-md" 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.2 }} 
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-t-xl"></div>
              
              <div className="flex-1">
                <p className="text-amber-800 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
              
              <div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="font-semibold text-amber-900 font-merriweather">{testimonial.author}</p>
              </div>
              
              {/* Add subtle decorative elements */}
              <div className="absolute -bottom-3 -right-3 opacity-5 text-amber-500 rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WarmTestimonialsSection;
