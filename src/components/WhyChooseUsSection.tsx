
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Video, HeartPulse } from 'lucide-react';

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-14" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70 mb-4">Why Choose Us</span>
          
          <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-5xl text-stone-800 tracking-tight leading-tight mb-4">
            Why Choose {' '}
            <span className="font-instrument-serif italic text-amber-400 font-normal">Sunrise?</span>
          </h2>
          
          <p className="text-stone-600 max-w-2xl mx-auto font-barlow">
            We're more than a clinic — we're a compassionate care team dedicated to helping you rise above life's challenges.
          </p>
        </motion.div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto auto-rows-[180px] md:auto-rows-[200px]">
          
          {/* Card 1 - Locally Rooted (tall, spans 2 rows) */}
          <motion.div 
            className="relative md:row-span-2 rounded-3xl bg-slate-800 p-7 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-amber-100/60 font-barlow text-sm mb-3">Serving our community with deep local understanding</p>
              <h3 className="text-white font-barlow font-bold text-xl leading-snug">
                Locally rooted in Darby, PA
              </h3>
            </div>
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-400/20 text-amber-300 mt-4">
              <MapPin className="h-7 w-7" />
            </div>
            {/* Decorative gradient */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-amber-500/10 blur-2xl" />
          </motion.div>

          {/* Card 2 - Licensed Team (wide, spans 2 cols) */}
          <motion.div 
            className="md:col-span-2 rounded-3xl bg-amber-400 p-7 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between">
              <span className="text-6xl md:text-7xl font-barlow font-black text-white/90 leading-none">15+</span>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 text-white">
                <HeartPulse className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h3 className="text-stone-900 font-barlow font-bold text-lg">Licensed professionals</h3>
              <p className="text-stone-800/70 font-barlow text-sm">Therapists, psychologists & psychiatrists</p>
            </div>
          </motion.div>

          {/* Card 3 - Virtual Sessions */}
          <motion.div 
            className="rounded-3xl bg-white border border-stone-200/80 p-7 flex flex-col justify-between group hover:shadow-xl hover:border-amber-200 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 text-yellow-300">
              <Video className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-stone-800 font-barlow font-bold text-base">In-person & virtual</h3>
              <p className="text-stone-500 font-barlow text-sm">Flexible sessions</p>
            </div>
          </motion.div>

          {/* Card 4 - Serving All Ages (wide, spans 2 cols) */}
          <motion.div 
            className="md:col-span-2 rounded-3xl bg-[hsl(var(--linen))] p-7 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 text-orange-300">
                <Users className="h-5 w-5" />
              </div>
              <span className="font-barlow text-xs tracking-[0.15em] uppercase text-stone-500 font-semibold border border-stone-300 rounded-full px-3 py-1">All Ages</span>
            </div>
            <div>
              <h3 className="text-stone-800 font-barlow font-bold text-lg">Individuals, couples, children, teens & families</h3>
              <p className="text-stone-500 font-barlow text-sm">Comprehensive care across all ages and dynamics</p>
            </div>
          </motion.div>

          {/* Card 5 - Accent card */}
          <motion.div 
            className="rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 p-7 flex flex-col justify-center items-center text-center group hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-white/80 font-barlow text-xs tracking-[0.2em] uppercase font-semibold mb-1">Compassionate</span>
            <span className="text-white font-instrument-serif italic text-3xl">Care</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
