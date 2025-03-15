
import React from 'react';
import { CircleCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const SpecialtiesSection: React.FC = () => {
  const specialties = [
    "Anxiety & Depression", 
    "ADHD Treatment", 
    "Stress Management", 
    "Trauma & PTSD", 
    "Grief Counseling", 
    "OCD Treatment", 
    "Eating Disorders", 
    "Bipolar Disorder", 
    "Schizophrenia", 
    "Addiction Recovery", 
    "Substance Abuse", 
    "Family Conflict Resolution"
  ];
  
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section className="py-12 md:py-16 bg-white/60 backdrop-blur-sm border-y border-amber-100/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex mb-3 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-medium">
            Conditions We Treat
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Our Clinical Specialties</h2>
          <p className="text-amber-700 max-w-2xl mx-auto">Our experienced team provides effective treatment for a wide range of mental health conditions.</p>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {specialties.map((specialty, index) => (
            <motion.div 
              key={index}
              className="flex items-start gap-2 p-4 rounded-lg bg-white/90 shadow-sm border border-amber-100"
              variants={itemVariants}
            >
              <CircleCheck className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <span className="text-amber-900 font-medium text-sm">{specialty}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
