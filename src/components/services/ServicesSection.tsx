
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { Brain, Users, Heart, HeartHandshake, Stethoscope, Sparkles } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Individual Therapy",
      description: "One-on-one therapy sessions tailored to your unique needs and challenges.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Group Therapy",
      description: "Supportive group environments to connect with others facing similar challenges.",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Family Counseling",
      description: "Therapy sessions focused on improving family relationships and communication.",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Couples Counseling",
      description: "Specialized therapy to help couples improve communication, resolve conflicts, and strengthen relationships.",
      color: "bg-rose-50 text-rose-600",
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Psychiatry & Medication",
      description: "Professional psychiatric evaluation and medication management to support your mental health treatment.",
      color: "bg-cyan-50 text-cyan-600",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Specialized Programs",
      description: "Targeted therapeutic approaches for specific mental health conditions.",
      color: "bg-amber-50 text-amber-600",
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="section-tag">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Mental Health Services
          </h2>
          <p className="text-muted-foreground">
            Our team of experienced mental health professionals provides a range of services 
            designed to support your well-being and personal growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
