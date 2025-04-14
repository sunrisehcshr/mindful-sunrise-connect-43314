
import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="rounded-xl p-6 border border-border/40 bg-white">
      <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 text-orange-600 mt-0.5" />
          <div>
            <p className="text-muted-foreground">
              2050 West Chester Pike<br />
              Havertown, PA 19083<br />
              United States
            </p>
            <p className="text-sm text-muted-foreground/80 mt-1">
              <span className="italic">Delaware County • Philadelphia Metropolitan Area</span>
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-orange-600" />
          <a href="tel:+18146202162" className="text-muted-foreground hover:text-sunrise-700 transition-colors" aria-label="Call our office at (814) 620-2162">
            (814) 620-2162
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5 text-orange-600" />
          <a href="mailto:info@sunrisehumancare.com" className="text-muted-foreground hover:text-sunrise-700 transition-colors" aria-label="Email us at info@sunrisehumancare.com">
            info@sunrisehumancare.com
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <Globe className="h-5 w-5 text-orange-600" />
          <a href="https://www.google.com/maps?q=39.9707,-75.3151" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-sunrise-700 transition-colors" aria-label="View our location on Google Maps">
            View on Google Maps
          </a>
        </div>
        
        <div className="text-sm text-gray-600 mt-2 border-t border-gray-100 pt-3">
          <p>Serving Havertown and surrounding communities in Delaware County, Pennsylvania:</p>
          <p className="mt-1">Broomall • Ardmore • Drexel Hill • Springfield • Newtown Square</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
