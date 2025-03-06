import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Phone } from 'lucide-react';

const HeroSection: React.FC = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-6">
      <div className="absolute inset-0 bg-gradient-to-b from-sunrise-50/40 to-white/50 z-0"></div>
      
      <div className="absolute inset-0 z-0 opacity-5">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-5" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }}>
            <div>
              <motion.span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sunrise-400/20 text-sunrise-900" initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.3,
              duration: 0.5
            }}>Mental Health Clinic</motion.span>
            </div>
            <motion.h1 initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.5,
            duration: 0.8
          }} className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900">
              Compassionate Mental Health Care in{" "}
              <span className="relative">
                <span className="relative z-10 text-gray-900">Havertown, PA</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-sunrise-400/30 -z-10"></span>
              </span>
            </motion.h1>
            <motion.p className="text-lg text-muted-foreground max-w-2xl" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.7,
            duration: 0.8
          }}>We provide compassionate, personalized mental health services to help you navigate life's challenges. Our team of licensed therapists, psychologists, counselors, and psychiatrists is committed to guiding you toward a healthier, happier life.</motion.p>
            <motion.div className="flex flex-wrap gap-4 pt-1" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.9,
            duration: 0.8
          }}>
              <a href="#appointment" className="btn-sunrise flex items-center gap-2">
                <CalendarCheck className="h-5 w-5" />
                Book Appointment
              </a>
              <a href="tel:+18146202162" className="btn-sunrise-outline flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Us Now
              </a>
            </motion.div>
          </motion.div>

          <motion.div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.5,
          duration: 1,
          ease: "easeOut"
        }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-sunrise-400/80 to-sunrise-500/20 mix-blend-multiply z-10"></div>
            <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Therapy session in a comfortable environment" className="h-full w-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent z-20">
              <p className="text-white text-lg font-medium">Creating a safe space for healing</p>
              <p className="text-white/80 text-sm">Personalized therapy and psychiatry services in Havertown, PA for your unique needs.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default HeroSection;
