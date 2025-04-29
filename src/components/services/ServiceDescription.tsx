
import React from 'react';
import { motion } from 'framer-motion';
import { getIconBoxClass } from '@/lib/servicePageUtils';

interface ServiceDescriptionProps {
  title: string;
  description: string;
  benefits?: string[];
  process?: string[];
  iconColor: string;
}

const ServiceDescription: React.FC<ServiceDescriptionProps> = ({
  title,
  description,
  benefits,
  process,
  iconColor
}) => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const iconBoxClass = getIconBoxClass(iconColor);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-amber-100">
      <div className="p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6">About {title}</h2>
        
        <div className="prose prose-amber max-w-none text-amber-800">
          <p>{description}</p>
          
          {benefits && benefits.length > 0 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8"
            >
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <span className="text-amber-500 mr-2">&bull;</span>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
          
          {process && process.length > 0 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8"
            >
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Our Process</h3>
              <ol className="space-y-4">
                {process.map((step, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full ${iconBoxClass} ${iconColor} flex items-center justify-center font-semibold mr-3`}>
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;
