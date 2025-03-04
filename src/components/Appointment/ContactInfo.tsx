
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-secondary/50 rounded-xl p-6 border border-border/40">
      <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <MapPin className="h-5 w-5 text-sunrise-700 mt-0.5" />
          <p className="text-muted-foreground">
            2050 West Chester Pike<br />
            Havertown, PA 19083<br />
            United States
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-sunrise-700" />
          <a href="tel:+18146202162" className="text-muted-foreground hover:text-sunrise-700 transition-colors">
            (814) 620-2162
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5 text-sunrise-700" />
          <a href="mailto:info@sunrisehcs.com" className="text-muted-foreground hover:text-sunrise-700 transition-colors">
            info@sunrisehcs.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
