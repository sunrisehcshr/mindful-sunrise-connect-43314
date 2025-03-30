
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Map = () => {
  return (
    <div className="space-y-8">
      <div className="relative h-[400px] rounded-xl overflow-hidden shadow-md border border-amber-200">
        {/* Embedded Google Maps iframe */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.42270663133!2d-75.3343826!3d39.97665800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c19c8aaf0c5f%3A0xda74d062dc04cad0!2sSunrise%20Human%20Care%20Services!5e0!3m2!1sen!2sus!4v1743301383826!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Sunrise Human Care Services Google Maps"
          className="absolute inset-0"
        ></iframe>
        
        {/* Overlay with contact info */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 border-t border-amber-200">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
              <span className="text-sm font-medium">2050 West Chester Pike, Havertown, PA 19083, United States</span>
            </div>
            <a 
              href="https://maps.app.goo.gl/5Bop8fKVPk1i61Ss6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-amber-600 hover:text-amber-800 font-medium"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/90 rounded-lg p-4 border border-amber-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
          <MapPin className="h-6 w-6 text-orange-500 mb-2" />
          <h3 className="font-medium">Our Location</h3>
          <p className="text-sm text-amber-700 mt-1">2050 West Chester Pike, Havertown, PA 19083, United States</p>
          <a 
            href="https://maps.app.goo.gl/5Bop8fKVPk1i61Ss6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 text-xs text-amber-600 hover:text-amber-800 font-medium"
          >
            View on Google Maps
          </a>
        </div>
        
        <div className="bg-white/90 rounded-lg p-4 border border-amber-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
          <Clock className="h-6 w-6 text-orange-500 mb-2" />
          <h3 className="font-medium">Office Hours</h3>
          <div className="text-sm text-amber-700 mt-1">
            <p>Monday - Friday: 8am - 7pm</p>
            <p>Saturday: 9am - 5pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        
        <div className="bg-white/90 rounded-lg p-4 border border-amber-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
          <Phone className="h-6 w-6 text-orange-500 mb-2" />
          <h3 className="font-medium">Contact Us</h3>
          <p className="text-sm text-amber-700 mt-1">Phone: (814) 620-2162</p>
          <p className="text-sm text-amber-700">Email: info@sunrisehcsllc.com</p>
          <a 
            href="tel:+18146202162" 
            className="mt-2 text-xs text-amber-600 hover:text-amber-800 font-medium"
          >
            Call Now
          </a>
        </div>
      </div>
      
      <div className="bg-amber-50 rounded-lg p-6 border border-amber-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        <h3 className="text-lg font-medium mb-3 text-amber-900">How to Find Us</h3>
        <div className="space-y-3 text-sm text-amber-800">
          <p>
            <strong>By Car:</strong> Plenty of free parking is available in our dedicated lot. We're located just off West Chester Pike, 5 minutes from the Manoa Shopping Center.
          </p>
          <p>
            <strong>Public Transportation:</strong> We're accessible via SEPTA bus routes 104 and 112, with stops within a 2-minute walk of our facility.
          </p>
          <p>
            <strong>Accessibility:</strong> Our facility is fully accessible with ramp access and 
            designated parking spaces near the entrance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
