
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section id="specialties" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sunrise-400/20 text-sunrise-900 mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Specialties
          </h2>
          <p className="text-muted-foreground">
            We offer specialized treatment for a wide range of mental health conditions
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {specialties.map((specialty, index) => (
            <motion.div 
              key={index} 
              className="flex bg-secondary/30 hover:bg-secondary/50 p-4 rounded-lg transition-colors duration-300"
              variants={itemVariants}
            >
              <div className="mr-3 text-sunrise-500">
                <CircleCheck size={20} />
              </div>
              <p className="font-medium">{specialty}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
