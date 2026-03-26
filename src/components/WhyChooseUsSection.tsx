
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Video, Home, HeartPulse } from 'lucide-react';
import { Separator } from './ui/separator';
import SectionTag from './ui/section-tag';
import { Card, CardContent } from './ui/card';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <MapPin className="h-6 w-6 text-orange-500" />,
      title: "Locally rooted in Darby, PA",
      description: "Serving our community with deep local understanding and connections."
    },
    {
      icon: <HeartPulse className="h-6 w-6 text-orange-500" />,
      title: "Licensed therapists, psychologists, and psychiatrists",
      description: "Expert professionals committed to your mental health journey."
    },
    {
      icon: <Video className="h-6 w-6 text-orange-500" />,
      title: "In-person & virtual sessions for your convenience",
      description: "Flexible care options that fit your lifestyle and needs."
    },
    {
      icon: <Users className="h-6 w-6 text-orange-500" />,
      title: "Serving individuals, couples, children, teens, families, and older adults",
      description: "Comprehensive care across all ages and relationship dynamics."
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-white">
      {/* Background patterns - similar to other sections */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200/60 via-white/70 to-amber-100/50"></div>
        <div className="absolute inset-0 opacity-15 sunshine-pattern"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.4 }}
          >
            <SectionTag>Why Choose Us</SectionTag>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Why Choose Sunrise?</h2>
          
          <p className="text-amber-800 max-w-2xl mx-auto">
            We're more than a clinic — we're a compassionate care team dedicated to helping you rise above life's challenges.
          </p>
          
          <div className="mx-auto mt-6 mb-10 w-24">
            <Separator className="bg-gradient-to-r from-transparent via-amber-300/70 to-transparent h-0.5" />
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="warm-card rounded-xl overflow-hidden floating-card"
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none bg-transparent shadow-none">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="h-14 w-14 rounded-full bg-amber-100/80 flex items-center justify-center mb-4 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-amber-800">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
