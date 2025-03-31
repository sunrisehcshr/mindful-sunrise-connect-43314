
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Clock, Globe, Wallet, LayoutGrid } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  delay: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="w-full"
    >
      <Card className="p-6 h-full bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
              <Icon className="h-5 w-5" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Check,
      title: "Fast Process",
      description: "Quick, efficient therapy sessions designed to maximize your time and progress."
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "We provide the most secure and confidential space for your therapeutic journey."
    },
    {
      icon: Clock,
      title: "Time Saving",
      description: "Optimize your mental health care with streamlined appointments and processes."
    },
    {
      icon: Globe,
      title: "Accessible Care",
      description: "Telehealth options available so location never limits your access to quality care."
    },
    {
      icon: Wallet,
      title: "Payment Options",
      description: "Multiple payment methods and insurance options to make therapy accessible."
    },
    {
      icon: LayoutGrid,
      title: "Various Specialties",
      description: "Expertise across multiple mental health conditions and therapeutic approaches."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>

        <motion.div 
          className="text-center max-w-3xl mx-auto mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Get started with therapy in under 10 minutes online - no paperwork or waiting
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300">
              Get Started
            </Button>
            <span className="text-sm text-gray-500">*Terms & Conditions apply</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
