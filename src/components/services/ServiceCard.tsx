
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

const ServiceCard: React.FC<ServiceProps> = ({
  service,
  index
}) => {
  // Ensure we're linking to the hero section by appending #home to the URL
  const linkUrl = service.url ? `${service.url}#home` : "/services";
  
  return (
    <motion.div 
      initial={{
        opacity: 0,
        y: 20
      }} 
      whileInView={{
        opacity: 1,
        y: 0
      }} 
      viewport={{
        once: true
      }} 
      transition={{
        duration: 0.6,
        delay: index * 0.1
      }} 
      whileHover={{
        y: -10,
        boxShadow: "0 25px 30px -12px rgba(0, 0, 0, 0.12)"
      }} 
      className={cn(
        "rounded-xl p-7 shadow-md border border-sunrise-100/40 transition-all duration-300 flex flex-col h-full",
        "bg-white/90 backdrop-blur-sm hover:bg-white", 
        "relative overflow-hidden"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent opacity-80 pointer-events-none" />
      
      <div className="p-3 rounded-lg w-fit mb-5 bg-sunrise-50 text-sunrise-700 relative">
        {service.icon}
      </div>

      <h3 className="text-xl font-semibold mb-3 font-playfair relative">{service.title}</h3>
      
      <p className="text-muted-foreground text-sm flex-grow mb-5 relative">
        {service.description}
      </p>
      
      <Link 
        to={linkUrl} 
        className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors duration-200 group mt-auto bg-orange-50 hover:bg-orange-100 rounded-md px-4 py-2 relative"
      >
        Learn more 
        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
