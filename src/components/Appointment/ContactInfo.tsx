
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

import ClinicStatus from '../ui/ClinicStatus';

const ContactInfo: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-barlow font-bold text-stone-900 mb-6 flex items-center gap-3">
            Contact Info
            <div className="h-px flex-grow bg-stone-100" />
          </h3>
          
          <div className="space-y-5">
            {/* Location */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                <MapPin className="h-5 w-5 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-barlow font-bold text-stone-900 text-base">Location</p>
                <p className="text-stone-500 font-barlow text-sm leading-relaxed">
                  869 Main Street, Darby, PA 19023
                </p>
              </div>
            </div>
            
            {/* Phone - Stacked */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                <Phone className="h-5 w-5 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-barlow font-bold text-stone-900 text-base">Phone</p>
                <a href="tel:+18146202162" className="text-stone-500 font-barlow text-sm hover:text-orange-500 transition-colors">
                  (814) 620-2162
                </a>
              </div>
            </div>

            {/* Email - Below Phone */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                <Mail className="h-5 w-5 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-barlow font-bold text-stone-900 text-base">Email</p>
                <a href="mailto:info@sunrisehumancare.com" className="text-stone-500 font-barlow text-sm hover:text-orange-500 transition-colors">
                  info@sunrisehumancare.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Integrated Map */}
      <div className="mt-8 w-full h-36 rounded-2xl overflow-hidden border border-stone-100 relative group/map isolate shadow-sm">
        <iframe 
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Sunrise+Human+Care+Services,+Darby,+PA&zoom=15" 
            width="100%" 
            height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Sunrise Human Care Services location map"
          className="grayscale-[0.6] group-hover/map:grayscale-0 transition-all duration-700 opacity-80 group-hover/map:opacity-100"
        ></iframe>
      </div>

      {/* Opening Hours - Moved Down & Simplified further */}
      <div className="mt-6 pt-6 border-t border-stone-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Clock className="h-4 w-4 text-orange-500" />
            <p className="font-barlow font-bold text-stone-900 text-sm">Hours:</p>
            <p className="text-stone-500 font-barlow text-sm">Mon - Fri, 9 AM - 5 PM</p>
          </div>
          <div className="mt-2">
            <ClinicStatus showBadge={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
