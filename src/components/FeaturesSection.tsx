
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Globe, Shield } from 'lucide-react';
import SectionTag from './ui/section-tag';
import { Button } from './ui/button';

// Animation variants
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
    transition: { duration: 0.5 }
  }
};

const features = [
  {
    title: "Professional Care",
    description: "Our licensed therapists provide evidence-based treatment approaches tailored to your needs.",
    icon: <Shield className="h-8 w-8 text-orange-500" />
  },
  {
    title: "Flexible Scheduling",
    description: "Convenient appointment times including evenings and weekends to fit your busy schedule.",
    icon: <Clock className="h-8 w-8 text-orange-500" />
  },
  {
    title: "Virtual Sessions",
    description: "Secure telehealth options available for those who prefer remote therapy sessions.",
    icon: <Globe className="h-8 w-8 text-orange-500" />
  },
  {
    title: "Insurance Accepted",
    description: "We work with most major insurance providers to make mental health care accessible.",
    icon: <CheckCircle className="h-8 w-8 text-orange-500" />
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl -ml-48 -mb-48"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <SectionTag>Why Choose Us</SectionTag>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-amber-950 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Comprehensive Mental Health Services
          </motion.h2>
          <motion.p 
            className="text-amber-900 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At Sunrise Human Care, we're committed to providing compassionate, personalized mental health treatment.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-white border border-amber-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="mb-3">{feature.icon}</div>
                  <CardTitle className="text-xl text-amber-950">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-amber-800">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300">
            Learn More About Our Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
