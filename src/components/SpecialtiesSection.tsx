import React from 'react';
import { CircleCheck } from 'lucide-react';
import { motion } from 'framer-motion';
const SpecialtiesSection: React.FC = () => {
  const specialties = ["Anxiety & Depression", "ADHD Treatment", "Stress Management", "Trauma & PTSD", "Grief Counseling", "OCD Treatment", "Eating Disorders", "Bipolar Disorder", "Schizophrenia", "Addiction Recovery", "Substance Abuse", "Family Conflict Resolution"];
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
  return;
};
export default SpecialtiesSection;