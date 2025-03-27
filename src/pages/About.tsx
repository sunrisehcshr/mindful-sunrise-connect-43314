
import React from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../components/AboutSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';
import PageHeader from '@/components/ui/page-header';
import { Users, Award, Heart } from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: <Heart className="h-6 w-6 text-rose-500" />,
      title: "Compassionate Care",
      description: "We treat each client with empathy, dignity, and respect, recognizing their unique experiences and needs."
    },
    {
      icon: <Award className="h-6 w-6 text-amber-500" />,
      title: "Clinical Excellence",
      description: "Our commitment to evidence-based practices ensures the highest standard of care for all our clients."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Community Focus",
      description: "We serve Havertown and surrounding communities with a deep understanding of local needs."
    }
  ];

  return (
    <>
      <SEOHead 
        title="About Us | Sunrise Human Care Services" 
        description="Learn about our compassionate mental health care team in Havertown, PA. Dedicated professionals helping children, teens, adults, and seniors." 
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 py-0">
          {/* Hero Section */}
          <section className="bg-white py-16 md:py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <PageHeader
                tag="About Us"
                title="Our Story & Mission"
                description="Learn about our commitment to providing compassionate, accessible mental health care in Havertown, PA."
                align="center"
              />
              
              {/* Core values section */}
              <motion.div 
                className="mt-16 grid md:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    className="feature-callout"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                  >
                    <div className="mb-4 p-3 bg-amber-50 inline-block rounded-full">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 font-playfair">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
          
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
