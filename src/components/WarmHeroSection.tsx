
import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import AppointmentDialog from './Appointment/AppointmentDialog';

const WarmHeroSection = () => {
  return (
    <section className="relative overflow-hidden h-screen flex items-center justify-center bg-[hsl(var(--cream))]" id="home">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none"
        style={{ WebkitMediaControlsPanel: 'none' } as React.CSSProperties}
      >
        <source src="https://res.cloudinary.com/dabsxebx8/video/upload/v1774583868/sunrise_mi0tyu.mp4" type="video/mp4" />
      </video>

      {/* Soft glow overlay */}
      <div className="absolute inset-0 z-[1]" style={{
        background: 'linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(251,191,36,0.04) 40%, rgba(0,0,0,0.03) 70%, rgba(245,158,11,0.02) 100%)',
      }} />

      <div className="container mx-auto px-4 z-10 relative text-center pt-28 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
...
      </div>

      {/* Bottom fade matching next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[2] bg-gradient-to-t from-[hsl(var(--cream))] via-[hsl(var(--cream))]/80 to-transparent" />

      {/* Hide native video controls on all browsers */}
      <style>{`
        video::-webkit-media-controls,
        video::-webkit-media-controls-panel,
        video::-webkit-media-controls-play-button,
        video::-webkit-media-controls-start-playback-button,
        video::-webkit-media-controls-overlay-play-button {
          display: none !important;
          -webkit-appearance: none !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        video::-moz-media-controls {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default WarmHeroSection;
