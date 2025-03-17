
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { Brain, Users, Heart, HeartHandshake, Stethoscope, Pill } from 'lucide-react';
import { Separator } from '../ui/separator';
import SectionTag from '../ui/section-tag';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Individual Therapy",
      description: "One-on-one therapy sessions tailored to your unique needs and challenges.",
      color: "bg-sunrise-50 text-sunrise-700",
      bgColor: "bg-gradient-to-r from-orange-400 to-amber-400",
      url: "/individual-therapy-havertown-pa"
    }, 
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Couples Counseling",
      description: "Specialized therapy to help couples improve communication, resolve conflicts, and strengthen relationships.",
      color: "bg-sunrise-50 text-sunrise-700",
      bgColor: "bg-gradient-to-r from-orange-400 to-amber-400",
      url: "/couples-counseling-havertown-pa"
    }, 
    {
      icon: <Users className="h-6 w-6" />,
      title: "Family Therapy",
      description: "Therapy sessions focused on improving family relationships and communication.",
      color: "bg-sunrise-50 text-sunrise-700",
      bgColor: "bg-gradient-to-r from-orange-400 to-amber-400",
      url: "/family-therapy-havertown-pa"
    }, 
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Child & Adolescent Therapy",
      description: "Specialized therapy for children and teens facing behavioral or emotional challenges.",
      color: "bg-sunrise-50 text-sunrise-700",
      bgColor: "bg-gradient-to-r from-orange-400 to-amber-400",
      url: "/child-therapy-havertown-pa"
    }, 
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Psychiatric Evaluations",
      description: "Comprehensive mental health assessments and diagnostic services.",
      color: "bg-sunrise-50 text-sunrise-700",
      bgColor: "bg-gradient-to-r from-orange-400 to-amber-400",
      url: "/psychiatric-evaluations-havertown-pa"
    }, 
    {
      icon: <Pill className="h-6 w-6" />,
      title: "Medication Management",
      description: "Professional psychiatric medication reviews and management for mental health conditions.",
      color: "bg-sunrise-50 text-sunrise-700",
      bgColor: "bg-gradient-to-r from-orange-400 to-amber-400",
      url: "/medication-management-havertown-pa"
    }
  ];
  
  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Top wave divider with improved transition from hero section */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/70 to-white"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
          <path fill="#ffffff" fillOpacity="1" d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,149.3C672,149,768,171,864,176C960,181,1056,171,1152,165.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.4 }} 
          >
            <SectionTag>Our Services</SectionTag>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.1 }} 
            className="text-3xl font-bold mb-4 font-opensans md:text-5xl"
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
      </div>
      
      {/* Bottom wave divider with improved transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-100/30 to-white/5"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 transform rotate-180">
          <path fill="#ffffff" fillOpacity="1" d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,149.3C672,149,768,171,864,176C960,181,1056,171,1152,165.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default ServicesSection;
