
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FAQ } from '@/lib/servicePageUtils';

interface ServiceFAQProps {
  title: string;
  faqs: FAQ[];
  iconColor?: string;
}

const ServiceFAQ: React.FC<ServiceFAQProps> = ({ 
  title, 
  faqs,
  iconColor = "text-amber-700" 
}) => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-amber-100">
      <div className="p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6">{title} FAQs</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-amber-100 pb-4"
            >
              <button
                onClick={() => toggleItem(index)}
                className={cn(
                  "w-full text-left flex justify-between items-center py-2",
                  "font-medium text-amber-900 hover:text-amber-700 transition-colors"
                )}
                aria-expanded={openItem === index}
              >
                <span>{faq.q}</span>
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 text-amber-500 transition-transform duration-200",
                    openItem === index && "rotate-180"
                  )} 
                />
              </button>
              
              {openItem === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-amber-700"
                >
                  {faq.a}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFAQ;
