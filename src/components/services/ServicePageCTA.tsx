
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from 'lucide-react';
import { getGradientClass, getHoverClass } from '@/lib/servicePageUtils';

interface ServicePageCTAProps {
  title: string;
  iconColor: string;
  onBookingClick: () => void;
}

const ServicePageCTA: React.FC<ServicePageCTAProps> = ({
  title,
  iconColor,
  onBookingClick
}) => {
  return (
    <section className={`py-12 bg-gradient-to-r ${getGradientClass(iconColor)} relative overflow-hidden`}>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Start Your Journey Today
        </h2>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          Take the first step toward positive change with our professional {title.toLowerCase()} services in Havertown, PA. Our compassionate team is ready to support you.
        </p>
        <Button 
          size="lg"
          onClick={onBookingClick}
          className={`bg-white hover:bg-white/90 text-amber-900 px-6`}
        >
          <Calendar className="mr-2 h-5 w-5" />
          Book Your Consultation
        </Button>
      </div>
    </section>
  );
};

export default ServicePageCTA;
