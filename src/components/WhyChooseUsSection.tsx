
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Video, HeartPulse } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Locally rooted in Darby, PA",
      description: "Serving our community with deep local understanding and connections."
    },
    {
      icon: <HeartPulse className="h-5 w-5" />,
      title: "Licensed therapists, psychologists, and psychiatrists",
      description: "Expert professionals committed to your mental health journey."
    },
    {
      icon: <Video className="h-5 w-5" />,
      title: "In-person & virtual sessions for your convenience",
      description: "Flexible care options that fit your lifestyle and needs."
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Serving individuals, couples, children, teens, families, and older adults",
      description: "Comprehensive care across all ages and relationship dynamics."
    }
  ];

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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="group relative flex flex-col overflow-hidden rounded-lg border border-stone-200/80 bg-white text-stone-800 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:border-amber-200 p-6"
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2, ease: 'easeInOut' } }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-slate-800 text-yellow-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-barlow font-semibold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors duration-200">{feature.title}</h3>
              <p className="text-sm text-stone-500 font-barlow leading-relaxed">{feature.description}</p>
              <div className="mt-4 flex items-center text-sm font-barlow font-medium text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
