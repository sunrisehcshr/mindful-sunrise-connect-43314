
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceProps {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
  };
  index: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card rounded-xl p-6 shadow-sm border border-border/40 hover:shadow-md transition-shadow duration-300 flex flex-col"
    >
      <div className={`p-3 rounded-lg w-fit mb-4 ${service.color}`}>
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-muted-foreground text-sm flex-grow">
        {service.description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
