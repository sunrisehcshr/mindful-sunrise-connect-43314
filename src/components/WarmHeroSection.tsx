
import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import AppointmentDialog from './Appointment/AppointmentDialog';

const WarmHeroSection = () => {
  return (
    <section className="relative overflow-hidden h-[110vh] flex items-center justify-center bg-[hsl(var(--cream))]" id="home">
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
        style={{
          WebkitMediaControlsPanel: 'none',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 98%, transparent 99%)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 98%, transparent 99%)',
        } as React.CSSProperties}
      >
        <source src="https://res.cloudinary.com/dabsxebx8/video/upload/v1774583868/sunrise_mi0tyu.mp4" type="video/mp4" />
      </video>

      {/* Soft glow overlay */}
      <div className="absolute inset-0 z-[1]" style={{
        background: 'linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(251,191,36,0.04) 40%, rgba(0,0,0,0.03) 70%, rgba(245,158,11,0.02) 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 98%, transparent 99%)',
        maskImage: 'linear-gradient(to bottom, black 0%, black 98%, transparent 99%)',
      } as React.CSSProperties} />

      <div className="container mx-auto px-4 z-10 relative text-center pt-28 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-3 md:mb-4"
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white font-barlow font-semibold text-[10px] sm:text-xs tracking-[0.2em] uppercase px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              Mental Health Clinic in Darby
            </span>
          </motion.div>

          <motion.h1
            className="font-barlow font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-white leading-tight tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Step into a brighter tomorrow{' '}
            <span className="inline md:block font-instrument-serif italic text-amber-300 font-normal">with Sunrise Human Care</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed font-barlow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A brighter tomorrow starts with the right support today. Taking the first step toward better mental health is an act of courage - and we're here to support your journey with expert counseling, therapy, and psychiatric services tailored to your unique needs.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="tel:+18146202162" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-stone-900 hover:bg-white/90 font-barlow font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 group">
                <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Speak with a Therapist
              </Button>
            </a>
            <AppointmentDialog>
              <Button size="lg" className="w-full sm:w-auto border-0 text-white bg-white/20 backdrop-blur-sm font-barlow font-semibold rounded-full hover:bg-white/30 shadow-sm hover:shadow-md transition-all duration-300 group">
                <Calendar className="mr-2 h-4 w-4 group-hover:text-amber-300" />
                Book Appointment
              </Button>
            </AppointmentDialog>
          </motion.div>

          <motion.p
            className="text-sm text-amber-300 font-bold mt-4 font-barlow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            We accept Medicaid insurance
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom fade matching next section */}
      <div className="absolute bottom-0 left-0 right-0 h-8 z-[2] bg-gradient-to-t from-[hsl(var(--cream))] to-transparent" />

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
