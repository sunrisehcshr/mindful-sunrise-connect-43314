
import React from 'react';
import { CircleCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Separator } from './ui/separator';

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="section-tag inline-flex items-center gap-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles className="h-3 w-3" /> Conditions We Treat
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-stylish">Our Specialties</h2>
          
          <p className="text-muted-foreground">
            We offer therapy for a wide range of mental health conditions and life challenges
          </p>
          
          <div className="mx-auto mt-6 mb-10 w-24">
            <Separator className="bg-gradient-to-r from-transparent via-amber-300/50 to-transparent h-0.5" />
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {specialties.map((specialty, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex items-start p-4 bg-secondary/30 rounded-md hover:bg-secondary/50 transition-colors duration-300"
            >
              <CircleCheck className="text-orange-500 mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
              <span className="font-medium">{specialty}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
