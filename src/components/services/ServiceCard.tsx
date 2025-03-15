
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ServiceProps {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
    bgColor: string;
    url?: string;
  };
  index: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      className={cn(
        "rounded-xl p-6 shadow-md border border-sunrise-100/40 transition-all duration-300 flex flex-col h-full",
        "bg-white/80 backdrop-blur-sm hover:bg-white",
        "relative overflow-hidden"
      )}
    >
      <div 
        className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-t-xl"
      ></div>

      <div className="p-3 rounded-lg w-fit mb-4 bg-sunrise-50 text-sunrise-700">
        {service.icon}
      </div>

      <h3 className="text-xl font-semibold mb-3 font-opensans">{service.title}</h3>
      
      <p className="text-muted-foreground text-sm flex-grow mb-4">
        {service.description}
      </p>
      
      <Link 
        to={service.url || "/services"} 
        className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors duration-200 group mt-auto bg-orange-50 rounded-md px-3 py-1.5"
      >
        Learn more 
        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
