
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location?: string;
  rating: number;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  location,
  rating,
  delay = 0
}) => {
  const fullName = location ? `${author}, ${location}` : author;
  
  return (
    <motion.div
      className="bg-white/90 backdrop-blur-sm border border-yellow-200/60 rounded-xl p-8 flex flex-col floating-card relative shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-t-xl"></div>
      
      {/* Quote icon */}
      <div className="mb-6 text-amber-300">
        <Quote className="h-8 w-8 opacity-50" />
      </div>
      
      <div className="flex-1">
        <p className="text-amber-800 mb-6 italic leading-relaxed">"{quote}"</p>
      </div>
      
      <div>
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
          ))}
        </div>
        <p className="font-semibold text-amber-900 font-playfair">{fullName}</p>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -bottom-3 -right-3 opacity-5 text-amber-500 rotate-12">
        <Quote className="h-12 w-12" />
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
