
import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

// In a real implementation, you would use a proper map library like Google Maps or Mapbox
// For this example, we'll create a simple component that displays an image of a map
const Map = () => {
  return (
    <div className="space-y-8">
      <div className="relative h-[350px] rounded-xl overflow-hidden shadow-md border border-border">
        {/* This would be replaced with an actual map in a real implementation */}
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="flex justify-center mb-4">
              <MapPin className="h-10 w-10 text-sunrise-500" />
            </div>
            <h3 className="text-lg font-medium">Sunrise Human Care Services</h3>
            <p className="text-muted-foreground">123 Main Street, Havertown, PA 19083</p>
            <p className="text-xs text-muted-foreground mt-1">Map loading...</p>
          </div>
        </div>
        
        {/* Overlay with contact info */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 border-t border-border">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-sunrise-500" />
              <span className="text-sm font-medium">123 Main Street, Havertown, PA 19083</span>
            </div>
            <a 
              href="https://maps.google.com/?q=Havertown,PA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-sunrise-700 hover:text-sunrise-800 font-medium"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border flex flex-col items-center text-center shadow-sm">
          <MapPin className="h-6 w-6 text-sunrise-400 mb-2" />
          <h3 className="font-medium">Our Location</h3>
          <p className="text-sm text-muted-foreground mt-1">123 Main Street, Havertown, PA 19083</p>
          <a 
            href="https://maps.google.com/?q=Havertown,PA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 text-xs text-sunrise-700 hover:text-sunrise-800 font-medium"
          >
            View on Google Maps
          </a>
        </div>
        
        <div className="bg-card rounded-lg p-4 border border-border flex flex-col items-center text-center shadow-sm">
          <Clock className="h-6 w-6 text-sunrise-400 mb-2" />
          <h3 className="font-medium">Office Hours</h3>
          <div className="text-sm text-muted-foreground mt-1">
            <p>Monday - Friday: 8am - 7pm</p>
            <p>Saturday: 9am - 5pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        
        <div className="bg-card rounded-lg p-4 border border-border flex flex-col items-center text-center shadow-sm">
          <Phone className="h-6 w-6 text-sunrise-400 mb-2" />
          <h3 className="font-medium">Contact Us</h3>
          <p className="text-sm text-muted-foreground mt-1">Phone: (215) 555-1234</p>
          <p className="text-sm text-muted-foreground">Email: info@sunrisehcs.com</p>
          <a 
            href="tel:+12155551234" 
            className="mt-2 text-xs text-sunrise-700 hover:text-sunrise-800 font-medium"
          >
            Call Now
          </a>
        </div>
      </div>
      
      <div className="bg-sunrise-50 rounded-lg p-6 border border-sunrise-100">
        <h3 className="text-lg font-medium mb-3">How to Find Us</h3>
        <div className="space-y-3 text-sm">
          <p>
            <strong>By Car:</strong> Plenty of free parking is available in our dedicated lot. 
            We're located just off Township Line Road, 5 minutes from the Havertown Shopping Center.
          </p>
          <p>
            <strong>Public Transportation:</strong> We're accessible via SEPTA bus routes 44 and 65, 
            with stops within a 2-minute walk of our facility.
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
