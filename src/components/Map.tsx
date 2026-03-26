
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MapProps {
  className?: string;
}

const Map: React.FC<MapProps> = ({ className }) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  // Lazy load the map when it's close to being in viewport
  useEffect(() => {
    const handleScroll = () => {
      const mapContainer = document.getElementById('map-container');
      if (mapContainer) {
        const rect = mapContainer.getBoundingClientRect();
        // Load the map when it's 500px away from entering the viewport
        if (rect.top - window.innerHeight < 500) {
          setShouldLoadMap(true);
          // Remove the scroll listener once the map is set to load
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to check if the map is already in view when the component mounts
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      id="map-container"
      className={cn("rounded-lg overflow-hidden shadow-md border border-amber-200 h-96 bg-amber-50/40 relative", className)}
    >
      {shouldLoadMap ? (
        <>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.42270663133!2d-75.3343826!3d39.97665800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c19c8aaf0c5f%3A0xda74d062dc04cad0!2sSunrise%20Human%20Care%20Services!5e0!3m2!1sen!2sus!4v1743301383826!5m2!1sen!2sus" 
            className={cn("w-full h-full border-0", mapLoaded ? "opacity-100" : "opacity-0")}
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setMapLoaded(true)}
            title="Sunrise Human Care Services Location in Darby, PA"
          />
          {!mapLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-amber-50">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
              <p className="mt-4 text-amber-700 font-medium">Loading map...</p>
            </div>
          )}
        </>
      ) : (
        <motion.div 
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-amber-50/60"
        >
          <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-amber-900 mb-2">Sunrise Human Care Services</h3>
          <p className="text-amber-800 mb-1">869 Main Street</p>
          <p className="text-amber-800">Darby, PA 19023</p>
          <button 
            onClick={() => setShouldLoadMap(true)}
            className="mt-4 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-md hover:from-amber-600 hover:to-orange-600 transition-colors shadow-sm"
          >
            Load Map
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Map;
