
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { Brain, Users, Heart, HeartHandshake, Stethoscope, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from '../ui/separator';

const ServicesSection: React.FC = () => {
  const services = [{
    icon: <Brain className="h-6 w-6" />,
    title: "Individual Therapy",
    description: "One-on-one therapy sessions tailored to your unique needs and challenges.",
    color: "bg-blue-50 text-blue-600",
    bgColor: "bg-gradient-to-r from-blue-400 to-blue-500"
  }, {
    icon: <Users className="h-6 w-6" />,
    title: "Group Therapy",
    description: "Supportive group environments to connect with others facing similar challenges.",
    color: "bg-green-50 text-green-600",
    bgColor: "bg-gradient-to-r from-green-400 to-green-500"
  }, {
    icon: <Heart className="h-6 w-6" />,
    title: "Family Counseling",
    description: "Therapy sessions focused on improving family relationships and communication.",
    color: "bg-purple-50 text-purple-600",
    bgColor: "bg-gradient-to-r from-purple-400 to-purple-500"
  }, {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: "Couples Counseling",
    description: "Specialized therapy to help couples improve communication, resolve conflicts, and strengthen relationships.",
    color: "bg-rose-50 text-rose-600",
    bgColor: "bg-gradient-to-r from-rose-400 to-rose-500"
  }, {
    icon: <Stethoscope className="h-6 w-6" />,
    title: "Psychiatry & Medication",
    description: "Professional psychiatric evaluation and medication management to support your mental health treatment.",
    color: "bg-cyan-50 text-cyan-600",
    bgColor: "bg-gradient-to-r from-cyan-400 to-cyan-500"
  }, {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Specialized Programs",
    description: "Targeted therapeutic approaches for specific mental health conditions.",
    color: "bg-amber-50 text-amber-600",
    bgColor: "bg-gradient-to-r from-amber-400 to-amber-500"
  }];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-secondary/50 to-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="section-tag inline-flex items-center gap-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles className="h-3 w-3" /> Our Services
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 font-playfair"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive Mental Health Services
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our team of experienced mental health professionals provides a range of services 
            designed to support your well-being and personal growth.
          </motion.p>
          
          <div className="mx-auto mt-6 mb-10 w-24">
            <Separator className="bg-gradient-to-r from-transparent via-orange-300/50 to-transparent h-0.5" />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/services" className="btn-sunrise inline-flex items-center">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
