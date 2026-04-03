
"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Phone, Calendar } from 'lucide-react';
import AppointmentDialog from './Appointment/AppointmentDialog';
import Image from 'next/image';
import CurveTransition from './ui/CurveTransition';

const WarmHeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [showFallback, setShowFallback] = useState(false);
  const [loopCount, setLoopCount] = useState(0);
  const MAX_LOOPS = 10;

  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  
  const { scrollY } = useScroll();
  
  // Pause video when user scrolls past the second section
  // We'll estimate the second section ends around 1500px down
  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (videoRef.current) {
        if (latest > 1800) { // Threshold for stopping video
          if (!videoRef.current.paused) {
            videoRef.current.pause();
          }
        } else if (latest < 1800 && shouldLoadVideo) {
          if (videoRef.current.paused) {
            videoRef.current.play().catch(() => {});
          }
        }
      }
    });
  }, [scrollY, shouldLoadVideo]);

  useEffect(() => {
    // Lazy load video after mount to prioritize LCP
    const timer = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!shouldLoadVideo) return;
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const handleVideoEnded = () => {
      setLoopCount((prev) => {
        const newCount = prev + 1;
        if (newCount >= MAX_LOOPS) {
          setShowFallback(true);
        } else {
          video.play().catch(() => {});
        }
        return newCount;
      });
    };

    video.addEventListener('ended', handleVideoEnded);

    const handleScroll = () => {
      if (showFallback || loopCount >= MAX_LOOPS) return;
      
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Hero is in view if its bottom is above 0 and its top is below viewportHeight
      const inView = rect.bottom > 0 && rect.top < viewportHeight;
      
      // We want to pause when the user scrolls beyond 30% of the NEXT section's height.
      // Since the hero is 100vh, rect.bottom is where the second section starts.
      // If rect.bottom < -0.3 * viewportHeight, it means we've scrolled 30% into the next section.
      const pastThirtyPercentOfNext = rect.bottom < -0.3 * viewportHeight;

      if (inView && !pastThirtyPercentOfNext) {
        if (video.paused) {
          video.play().catch(() => {});
          setIsPlaying(true);
        }
      } else {
        if (!video.paused) {
          video.pause();
          setIsPlaying(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const tryPlay = () => {
      if (loopCount >= MAX_LOOPS) return;
      video.play().catch(() => setShowFallback(true));
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener('loadeddata', tryPlay, { once: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      video.removeEventListener('loadeddata', tryPlay);
      video.removeEventListener('ended', handleVideoEnded);
    };
  }, [loopCount, showFallback]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900"
      id="home"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none" /> {/* Spacer for position warning */}
      {/* Background Media - Isolating the rendering to its own layer */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ 
          opacity: isPlaying && !showFallback ? 1 : 0.8, 
          scale: isPlaying ? 1 : 1.05 
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
        style={{ willChange: "transform, opacity", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload={shouldLoadVideo ? "auto" : "none"}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          poster="https://res.cloudinary.com/dabsxebx8/image/upload/v1774918015/diverse-couple-on-a-therapy-session-in-a-psycholog-2026-03-25-04-41-39-utc_jebtlc.jpg"
          className="absolute inset-0 w-full h-full object-cover object-[60%_center] md:object-center pointer-events-none transition-opacity duration-1000"
          style={{ opacity: 1 }}
          title="Happy family at the beach - Sunrise Human Care Services"
        >
          {shouldLoadVideo && (
            <source src="https://res.cloudinary.com/dabsxebx8/video/upload/q_80,f_auto/v1774833967/happy-funny-and-sunset-with-big-family-at-beach-f-2025-12-17-13-03-02-utc_i9s1nu.mov" type="video/mp4" />
          )}
        </video>

        <AnimatePresence>
          {showFallback && (
            <motion.div
              key="hero-fallback-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full z-10"
            >
              {/* Fallback Image */}
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-[60%_center] md:bg-center"
                style={{ 
                  backgroundImage: "url('https://res.cloudinary.com/dabsxebx8/image/upload/v1774918015/diverse-couple-on-a-therapy-session-in-a-psycholog-2026-03-25-04-41-39-utc_jebtlc.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Soft glow overlay */}
      {/* Semi-transparent black overlay for text readability - Desktop only to keep video clear on mobile */}
      <div className="absolute inset-0 z-0 hidden md:block bg-black/25" />

      <div className="container mx-auto px-4 z-10 relative text-center pt-40 md:pt-48 -mt-16">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto py-12 px-6 md:py-16 md:px-12 rounded-[3rem] bg-black/25 md:bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 }
            }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9, filter: "blur(4px)", y: 12 },
              visible: { 
                opacity: 1, 
                scale: 1, 
                filter: "blur(0px)", 
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
              }
            }}
            className="flex flex-col items-center gap-1 sm:gap-2 mb-6 sm:mb-8"
          >
            <div className="inline-block bg-black/20 backdrop-blur-md border border-white/10 text-white font-barlow font-semibold text-[9px] xs:text-[10px] sm:text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full whitespace-nowrap overflow-hidden max-w-[280px] xs:max-w-none shadow-sm">
              <div className="overflow-hidden relative w-full h-full flex items-center">
                <motion.div
                  initial={{ x: "0%" }}
                  animate={{ x: "-100%" }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 25, 
                    ease: "linear" 
                  }}
                  className="whitespace-nowrap flex"
                >
                  <span className="pr-8">Now accepting new Medicaid patients in Darby, PA — Response within 24 hours — No Waitlist</span>
                  <span className="pr-8">Now accepting new Medicaid patients in Darby, PA — Response within 24 hours — No Waitlist</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="font-barlow text-balance font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 text-white leading-[1.2] tracking-tight drop-shadow-sm"
            variants={{
              hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
              visible: { 
                opacity: 1, 
                y: 0, 
                filter: "blur(0px)",
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any }
              }
            }}
          >
            Expert mental health care in Darby <br className="sm:hidden" />
            <span className="inline md:block font-instrument-serif italic text-white font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 leading-tight drop-shadow-md">to help you reclaim your peace of mind</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-white mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed font-barlow drop-shadow-md"
            variants={{
              hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
              visible: { 
                opacity: 1, 
                y: 0, 
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
              }
            }}
          >
            Stop struggling alone. Within 24 hours, our licensed Darby team will help you start a personalized, evidence-based plan to manage anxiety, depression, or trauma. You don’t have to wait months for the support you need today.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center"
            variants={{
              hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
              }
            }}
          >
            <motion.div whileTap={{ scale: 0.96 }}>
              <Button asChild size="lg" className="w-full sm:w-auto bg-white text-stone-900 hover:bg-amber-50 h-12 px-7 text-sm font-barlow font-bold rounded-full shadow-lg transition-all duration-300 group active:scale-[0.96]">
                <a href="tel:+18146202162">
                  <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                  Talk to a Specialist Now
                </a>
              </Button>
            </motion.div>
            <motion.div whileTap={{ scale: 0.96 }}>
              <Button asChild size="lg" className="w-full sm:w-auto border border-white/30 text-white bg-white/10 backdrop-blur-md h-12 px-7 text-sm font-barlow font-bold rounded-full hover:bg-white/20 transition-all duration-300 group active:scale-[0.96]">
                <a href="#appointment" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <Calendar className="mr-2 h-4 w-4 group-hover:text-amber-300" />
                  Schedule Your Visit
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Curved Transition to the next section */}
      <CurveTransition fillColor="#ffffff" inverted className="z-20" targetRef={sectionRef as any} />

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
