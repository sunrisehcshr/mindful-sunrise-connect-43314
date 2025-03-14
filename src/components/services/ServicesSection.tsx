
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { Brain, Users, Heart, HeartHandshake, Stethoscope, Sparkles, ArrowRight, Activity, PenTool, Pills, Laugh } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from '../ui/separator';

const ServicesSection: React.FC = () => {
  const services = [{
    icon: <Brain className="h-6 w-6" />,
    title: "Individual Therapy",
    description: "One-on-one therapy sessions tailored to your unique needs and challenges.",
    color: "bg-blue-50 text-blue-600",
    bgColor: "bg-gradient-to-r from-blue-400 to-blue-500",
    url: "/individual-therapy-havertown-pa"
  }, {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: "Couples Counseling",
    description: "Specialized therapy to help couples improve communication, resolve conflicts, and strengthen relationships.",
    color: "bg-rose-50 text-rose-600",
    bgColor: "bg-gradient-to-r from-rose-400 to-rose-500",
    url: "/couples-counseling-havertown-pa"
  }, {
    icon: <Users className="h-6 w-6" />,
    title: "Family Therapy",
    description: "Therapy sessions focused on improving family relationships and communication.",
    color: "bg-green-50 text-green-600",
    bgColor: "bg-gradient-to-r from-green-400 to-green-500",
    url: "/family-therapy-havertown-pa"
  }, {
    icon: <Laugh className="h-6 w-6" />,
    title: "Child & Adolescent Therapy",
    description: "Specialized therapy for children and teens facing behavioral or emotional challenges.",
    color: "bg-amber-50 text-amber-600",
    bgColor: "bg-gradient-to-r from-amber-400 to-amber-500",
    url: "/child-therapy-havertown-pa"
  }, {
    icon: <Activity className="h-6 w-6" />,
    title: "Anxiety Therapy",
    description: "Evidence-based approaches for managing anxiety and stress-related disorders.",
    color: "bg-purple-50 text-purple-600",
    bgColor: "bg-gradient-to-r from-purple-400 to-purple-500",
    url: "/anxiety-therapy-havertown-pa"
  }, {
    icon: <Heart className="h-6 w-6" />,
    title: "Depression Therapy",
    description: "Comprehensive treatment approaches for managing depression and mood disorders.",
    color: "bg-blue-50 text-blue-600",
    bgColor: "bg-gradient-to-r from-blue-400 to-blue-500",
    url: "/depression-therapy-havertown-pa"
  }, {
    icon: <Sparkles className="h-6 w-6" />,
    title: "ADHD Treatment",
    description: "Specialized strategies and support for managing attention deficit hyperactivity disorder.",
    color: "bg-orange-50 text-orange-600",
    bgColor: "bg-gradient-to-r from-orange-400 to-orange-500",
    url: "/adhd-treatment-havertown-pa"
  }, {
    icon: <PenTool className="h-6 w-6" />,
    title: "Psychiatric Evaluations",
    description: "Comprehensive mental health assessments and diagnostic services.",
    color: "bg-cyan-50 text-cyan-600",
    bgColor: "bg-gradient-to-r from-cyan-400 to-cyan-500",
    url: "/psychiatric-evaluations-havertown-pa"
  }, {
    icon: <Pills className="h-6 w-6" />,
    title: "Medication Management",
    description: "Professional psychiatric medication reviews and management for mental health conditions.",
    color: "bg-emerald-50 text-emerald-600",
    bgColor: "bg-gradient-to-r from-emerald-400 to-emerald-500",
    url: "/medication-management-havertown-pa"
  }, {
    icon: <Stethoscope className="h-6 w-6" />,
    title: "Trauma & PTSD Therapy",
    description: "Specialized treatment for trauma survivors using evidence-based approaches like EMDR.",
    color: "bg-violet-50 text-violet-600",
    bgColor: "bg-gradient-to-r from-violet-400 to-violet-500",
    url: "/ptsd-therapy-havertown-pa"
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
