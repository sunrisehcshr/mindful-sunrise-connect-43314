import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { Brain, Users, Heart, HeartHandshake, Stethoscope, Pill } from 'lucide-react';
import { Separator } from '../ui/separator';
import SectionTag from '../ui/section-tag';
const ServicesSection: React.FC = () => {
  const services = [{
    icon: <Brain className="h-6 w-6" />,
    title: "Individual Therapy",
    description: "One-on-one therapy sessions tailored to your unique needs and challenges.",
    color: "bg-sunrise-50 text-sunrise-700",
    bgColor: "bg-gradient-to-r from-orange-400 to-amber-400",
    url: "/individual-therapy-havertown-pa"
  }, {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: "Couples Counseling",
    description: "Specialized therapy to help couples improve communication, resolve conflicts, and strengthen relationships.",
    color: "bg-sunrise-50 text-sunrise-700",
    bgColor: "bg-gradient-to-r from-orange-400 to-amber-400",
    url: "/couples-counseling-havertown-pa"
  }, {
    icon: <Users className="h-6 w-6" />,
    title: "Family Therapy",
    description: "Therapy sessions focused on improving family relationships and communication.",
    color: "bg-sunrise-50 text-sunrise-700",
    bgColor: "bg-gradient-to-r from-orange-400 to-amber-400",
    url: "/family-therapy-havertown-pa"
  }, {
    icon: <Heart className="h-6 w-6" />,
    title: "Child & Adolescent Therapy",
    description: "Specialized therapy for children and teens facing behavioral or emotional challenges.",
    color: "bg-sunrise-50 text-sunrise-700",
    bgColor: "bg-gradient-to-r from-orange-400 to-amber-400",
    url: "/child-therapy-havertown-pa"
  }, {
    icon: <Stethoscope className="h-6 w-6" />,
    title: "Psychiatric Evaluations",
    description: "Comprehensive mental health assessments and diagnostic services.",
    color: "bg-sunrise-50 text-sunrise-700",
    bgColor: "bg-gradient-to-r from-orange-400 to-amber-400",
    url: "/psychiatric-evaluations-havertown-pa"
  }, {
    icon: <Pill className="h-6 w-6" />,
    title: "Medication Management",
    description: "Professional psychiatric medication reviews and management for mental health conditions.",
    color: "bg-sunrise-50 text-sunrise-700",
    bgColor: "bg-gradient-to-r from-orange-400 to-amber-400",
    url: "/medication-management-havertown-pa"
  }];
  return <section id="services" className="py-24 bg-gradient-to-b from-white to-amber-500">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="max-w-3xl mx-auto text-center mb-12" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.4
        }}>
            <SectionTag>Our Services</SectionTag>
          </motion.div>
          
          <motion.h2 initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="text-3xl font-bold mb-4 font-opensans md:text-5xl">
            Comprehensive Mental Health Services
          </motion.h2>
          
          <motion.p className="text-muted-foreground" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            Our team of experienced mental health professionals provides a range of services 
            designed to support your well-being and personal growth.
          </motion.p>
          
          <div className="mx-auto mt-6 mb-10 w-24">
            <Separator className="bg-gradient-to-r from-transparent via-orange-300/50 to-transparent h-0.5" />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => <ServiceCard key={index} service={service} index={index} />)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;