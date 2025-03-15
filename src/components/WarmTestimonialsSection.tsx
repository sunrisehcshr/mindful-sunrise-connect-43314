import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, MessageCircleHeart, Star } from 'lucide-react';
import { Separator } from './ui/separator';
import SectionTag from './ui/section-tag';
const testimonials = [{
  quote: "Sunrise Human Care Services has been a huge help for my teenage daughter. The therapist really connected with her, and we've seen such a positive change. So grateful for their support!",
  author: "Emily T., Havertown",
  rating: 5
}, {
  quote: "I was hesitant to start therapy, but from my first session, I felt truly heard and understood. The staff is kind, professional, and really invested in helping you heal.",
  author: "James W., Drexel Hill, PA",
  rating: 5
}, {
  quote: "My father has difficulty leaving the house, so finding a clinic that offers home sessions was a relief. The therapist visits us in Broomall, and it has made such a difference in his well-being!",
  author: "Sarah W., Broomall, PA",
  rating: 5
}];
const WarmTestimonialsSection = () => {
  return <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-amber-50/30 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-10 text-orange-400 -z-5 hidden lg:block">
        
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 text-orange-400 -z-5 hidden lg:block">
        <MessageCircleHeart size={80} />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }}>
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.4
        }}>
            <SectionTag>Testimonials</SectionTag>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 font-merriweather">What Our Clients Say</h2>
          
          <p className="text-amber-800 max-w-2xl mx-auto">
            Real stories from people whose lives have been transformed through compassionate care and therapy.
          </p>
          
          <div className="mx-auto mt-6 mb-10 w-24">
            <Separator className="bg-gradient-to-r from-transparent via-amber-300/50 to-transparent h-0.5" />
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <motion.div key={index} className="warm-card rounded-xl p-8 flex flex-col floating-card relative" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.2
        }} viewport={{
          once: true
        }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300 to-amber-300 rounded-t-xl"></div>
              
              
              
              <div className="flex-1">
                <p className="text-amber-800 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
              
              <div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="font-semibold text-amber-900 font-merriweather">{testimonial.author}</p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default WarmTestimonialsSection;