import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WarmServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  url?: string;
  delay?: number;
}

const WarmServiceCard: React.FC<WarmServiceCardProps> = ({ 
  title, 
  description, 
  imageSrc,
  url = "/services",
  delay = 0 
}) => {
  return (
    <motion.div 
      className="warm-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-gray-100 border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-700/10 to-transparent z-10" />
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 font-opensans">{title}</h3>
        <p className="text-gray-700 mb-4 text-sm">{description}</p>
        <Link
          to={url}
          className="inline-flex items-center text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-900 hover:to-gray-700 text-white px-3 py-1.5 rounded-md transition-colors duration-200 group mt-2 shadow-sm"
        >
          Learn more 
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default WarmServiceCard;
