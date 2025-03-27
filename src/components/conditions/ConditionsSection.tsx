
import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { ArrowRight } from 'lucide-react';

const ConditionsSection = () => {
  const conditionGroups = [
    {
      title: "Mood Disorders",
      conditions: [
        {
          name: "Depression",
          description: "Persistent feelings of sadness, loss of interest, and decreased energy affecting daily functioning.",
          url: "/depression-therapy-havertown-pa"
        },
        {
          name: "Bipolar Disorder",
          description: "Episodes of mood swings ranging from depressive lows to manic highs.",
          url: "/bipolar-disorder-therapy-havertown-pa"
        },
        {
          name: "Seasonal Affective Disorder",
          description: "Depression that occurs at specific times of the year, typically during winter months.",
          url: "/depression-therapy-havertown-pa"
        }
      ]
    },
    {
      title: "Anxiety Disorders",
      conditions: [
        {
          name: "Generalized Anxiety Disorder",
          description: "Excessive, uncontrollable worry about everyday matters.",
          url: "/anxiety-therapy-havertown-pa"
        },
        {
          name: "Social Anxiety",
          description: "Intense fear of social situations and being judged by others.",
          url: "/anxiety-therapy-havertown-pa"
        },
        {
          name: "Panic Disorder",
          description: "Recurring panic attacks and fear of having panic attacks.",
          url: "/anxiety-therapy-havertown-pa"
        },
        {
          name: "Phobias",
          description: "Intense, irrational fears of specific objects or situations.",
          url: "/anxiety-therapy-havertown-pa"
        }
      ]
    },
    {
      title: "Neurodevelopmental Disorders",
      conditions: [
        {
          name: "ADHD",
          description: "Difficulty maintaining attention, hyperactivity, and impulsive behavior.",
          url: "/adhd-treatment-havertown-pa"
        },
        {
          name: "Autism Spectrum Disorder",
          description: "Challenges with social skills, repetitive behaviors, speech, and nonverbal communication.",
          url: "/services"
        },
        {
          name: "Learning Disorders",
          description: "Difficulties in acquiring and using language, reading, writing, or mathematical skills.",
          url: "/services"
        }
      ]
    },
    {
      title: "Trauma-Related Disorders",
      conditions: [
        {
          name: "PTSD",
          description: "Persistent mental and emotional stress occurring after experiencing or witnessing a traumatic event.",
          url: "/services"
        },
        {
          name: "Acute Stress Disorder",
          description: "Similar to PTSD but occurs immediately after trauma and lasts between 3 days and 1 month.",
          url: "/services"
        },
        {
          name: "Adjustment Disorders",
          description: "Emotional or behavioral symptoms in response to an identifiable stressor.",
          url: "/services"
        }
      ]
    }
  ];

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
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-3 py-1 text-xs font-medium bg-orange-100 text-orange-600 rounded-full mb-3"
          >
            Conditions
          </motion.span>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Mental Health Conditions We Treat</h2>
          
          <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-6" />
          
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            At Sunrise Human Care Services, we provide evidence-based treatment for a wide range of mental health conditions. 
            Our experienced team offers personalized care tailored to your unique needs.
          </p>
        </motion.div>

        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {conditionGroups.map((group, groupIndex) => (
            <motion.div key={groupIndex} variants={itemVariants}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 relative inline-block">
                  {group.title}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-300 rounded"></span>
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.conditions.map((condition, condIndex) => (
                  <motion.div 
                    key={condIndex}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="h-full"
                  >
                    <a 
                      href={condition.url} 
                      className="block bg-gradient-to-br from-white to-amber-50/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-orange-100/50 h-full flex flex-col"
                    >
                      <h4 className="text-xl font-semibold mb-3 text-gray-800">{condition.name}</h4>
                      
                      <p className="text-gray-600 text-sm mb-4 flex-grow">{condition.description}</p>
                      
                      <div className="mt-auto pt-2">
                        <span className="inline-flex items-center text-orange-500 font-medium text-sm">
                          Learn more
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Don't see your specific condition listed? We treat many other mental health concerns.
          </p>
          
          <a 
            href="/appointment" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-md hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contact Us for a Consultation
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ConditionsSection;
