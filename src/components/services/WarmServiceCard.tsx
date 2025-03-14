
import React from 'react';
import { motion } from 'framer-motion';

interface WarmServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  delay?: number;
}

const WarmServiceCard: React.FC<WarmServiceCardProps> = ({ 
  title, 
  description, 
  imageSrc,
  delay = 0 
}) => {
  return (
    <motion.div 
      className="warm-card rounded-xl overflow-hidden warm-glow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-amber-900 mb-2 font-caladea">{title}</h3>
        <p className="text-amber-800">{description}</p>
      </div>
    </motion.div>
  );
};

export default WarmServiceCard;
