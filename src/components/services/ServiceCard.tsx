
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
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
        "rounded-xl p-7 shadow-md border border-amber-100/60 transition-all duration-300 flex flex-col h-full", 
        "bg-white/90 backdrop-blur-sm hover:bg-white", 
        "relative overflow-hidden"
      )}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/70 to-transparent opacity-80 pointer-events-none" />
      
      {/* Icon container with gradient background */}
      <div className="p-3 rounded-lg w-fit mb-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white relative shadow-sm">
        {service.icon}
      </div>

      {/* Title with better styling */}
      <h3 className="text-xl font-semibold mb-3 font-playfair relative text-amber-900">{service.title}</h3>
      
      {/* Description text with more descriptive learn more */}
      <p className="text-muted-foreground text-sm flex-grow mb-5 relative text-amber-700">
        {service.description}
      </p>
      
      {/* Button container */}
      <div className="flex flex-col gap-3 mt-auto">
        {/* Book Now button - now with gradient styling */}
        <a 
          href="#appointment" 
          className="inline-flex items-center justify-center text-sm font-medium text-white hover:text-white transition-all duration-300 group
                   bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 
                   rounded-md px-4 py-2 relative shadow-sm hover:shadow"
          aria-label={`Book an appointment for ${service.title}`}
        >
          <Calendar className="mr-1.5 h-4 w-4" />
          Book Appointment
        </a>
        
        {/* Learn More button - now with white styling */}
        <Link 
          to={linkUrl} 
          className="inline-flex items-center justify-center text-sm font-medium bg-white border border-amber-400 
                   text-amber-700 hover:bg-amber-50 transition-all duration-300 rounded-md px-4 py-2 
                   relative shadow-sm hover:shadow"
          aria-label={`Learn more about ${service.title}`}
        >
          Learn more
          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
