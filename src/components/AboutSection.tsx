
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const AboutSection: React.FC = () => {
  return <section id="about" className="py-12 pb-4 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs bg-orange-500 mb-4 text-white font-semibold">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dedicated to Your Mental Health Journey
            </h2>
            <p className="text-muted-foreground mb-6">Sunrise Human Care Services, founded by Michael Thevar, whose dedication to mental health spans over 30 years. Built on a foundation of experience, trust, and community care, we are committed to helping individuals navigate their challenges and realize their full potential.</p>
            <p className="text-muted-foreground mb-6">With a deep understanding of mental well-being, our mission is to provide compassionate support and meaningful solutions for children, teens, adults, and seniors to lead healthier, more fulfilling lives.</p>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div 
                className="rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/images/therapy-for-older-adults.webp" 
                  alt="Compassionate therapy for older adults in Havertown, PA" 
                  className="w-full h-auto rounded-2xl shadow-md" 
                />
              </motion.div>
              
              <motion.div 
                className="absolute -top-4 -right-4 text-orange-300 opacity-30"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <Star size={16} fill="currentColor" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 text-orange-300 opacity-30"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <Star size={16} fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default AboutSection;
