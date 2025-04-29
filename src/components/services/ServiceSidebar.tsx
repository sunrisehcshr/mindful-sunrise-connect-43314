
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Phone, Mail } from 'lucide-react';
import { getGradientClass, getHoverClass } from '@/lib/servicePageUtils';

interface ServiceSidebarProps {
  title: string;
  pricing: string;
  iconColor: string;
  onBookingClick: () => void;
}

const ServiceSidebar: React.FC<ServiceSidebarProps> = ({
  title,
  pricing,
  iconColor,
  onBookingClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white rounded-xl shadow-sm border border-amber-100 sticky top-24"
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${getGradientClass(iconColor)} rounded-t-xl p-6 text-white`}>
        <h3 className="text-xl font-bold mb-2">Book {title}</h3>
        <p className="text-sm opacity-90">Take the first step toward positive change</p>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Pricing Section */}
        <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
          <h4 className="font-semibold text-amber-900 mb-2">Pricing</h4>
          <p className="text-amber-800">{pricing}</p>
          <p className="text-xs text-amber-600 mt-2">*Insurance accepted. Contact us to verify your coverage.</p>
        </div>
        
        {/* Contact Information */}
        <div className="space-y-3 text-amber-800">
          <h4 className="font-semibold text-amber-900">Contact Us</h4>
          
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-amber-600" />
            <a href="tel:+18146202162" className="hover:text-amber-600 transition-colors">
              (814) 620-2162
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-amber-600" />
            <a href="mailto:info@sunrisehumancare.com" className="hover:text-amber-600 transition-colors">
              info@sunrisehumancare.com
            </a>
          </div>
          
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-1 text-amber-600" />
            <address className="not-italic">
              2050 West Chester Pike<br/>
              Havertown, PA 19083
            </address>
          </div>
        </div>
        
        {/* Book Now Button */}
        <Button
          onClick={onBookingClick}
          className={`w-full bg-gradient-to-r ${getGradientClass(iconColor)} ${getHoverClass(iconColor)} text-white`}
        >
          <Calendar className="mr-2 h-4 w-4" />
          Book Now
        </Button>
        
        {/* Additional Info */}
        <div className="text-center text-xs text-amber-600">
          <p>Same or next day appointments often available</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceSidebar;
