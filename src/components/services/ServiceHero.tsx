
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { getGradientClass, getIconBoxClass } from '@/lib/servicePageUtils';
import { ServiceData } from '@/lib/servicePageUtils';

interface ServiceHeroProps {
  service: ServiceData;
  customH1?: string;
  onBookingClick: () => void;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ 
  service, 
  customH1,
  onBookingClick 
}) => {
  return (
    <section className={`relative bg-gradient-to-br ${getGradientClass(service.iconColor)} py-16 overflow-hidden`}>
      {/* Background pattern for visual interest */}
      <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${getIconBoxClass(service.iconColor)} shadow-md mb-6`}>
              <span className={`${service.iconColor}`}>{service.icon}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {customH1 || service.title}
            </h1>
            <p className="text-lg opacity-90 mb-8">
              {service.description}
            </p>
            
            <Button 
              onClick={onBookingClick}
              size="lg" 
              className="bg-white text-amber-900 hover:bg-amber-50 flex items-center gap-2 shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book a Consultation
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src={service.imageUrl || "/images/therapy-in-havertown.jpg"}
              alt={`${service.title} in Havertown, PA`}
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none rounded-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
