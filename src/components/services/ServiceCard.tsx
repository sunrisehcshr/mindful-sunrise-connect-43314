
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
    color?: string;
    bgColor?: string;
    url?: string;
  };
  index: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ service, index }) => {
  const linkUrl = service.url ? `${service.url}#home` : "/services";
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.5, delay: index * 0.08 }} 
      className="group bg-white border border-stone-200/80 rounded-2xl p-7 hover:shadow-lg hover:border-amber-200 transition-all duration-300 flex flex-col h-full"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 rounded-xl mb-5 bg-slate-800 text-yellow-300">
        {service.icon}
      </div>

      <h3 className="text-lg font-barlow font-semibold text-stone-800 mb-3">{service.title}</h3>
      
      <p className="text-stone-500 text-sm font-barlow flex-grow mb-5 leading-relaxed">
        {service.description}
      </p>
      
      <div className="flex flex-col gap-3 mt-auto">
        <Link 
          to={linkUrl} 
          className="inline-flex items-center justify-center text-sm font-barlow font-medium bg-white border border-stone-200 
                   text-stone-700 hover:border-amber-200 hover:bg-amber-50 transition-all duration-300 rounded-full px-4 py-2"
          aria-label={`Learn more about ${service.title}`}
        >
          Learn more
          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        
        <a 
          href="#appointment" 
          className="inline-flex items-center justify-center text-sm font-barlow font-medium text-white transition-all duration-300
                   bg-[#222] hover:bg-zinc-800 rounded-full px-4 py-2"
          aria-label={`Book an appointment for ${service.title}`}
        >
          <Calendar className="mr-1.5 h-4 w-4" />
          Book Appointment
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
