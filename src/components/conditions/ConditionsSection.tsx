
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ConditionsSection: React.FC = () => {
  const [expandedCondition, setExpandedCondition] = useState<number | null>(null);
  
  const conditions = [
    {
      title: "Anxiety Disorders",
      short: "Including generalized anxiety, panic disorder, and social anxiety.",
      details: "We provide evidence-based treatment for various anxiety disorders, helping you manage symptoms and develop healthy coping strategies. Our therapists specialize in cognitive-behavioral therapy (CBT) and other approaches proven effective for anxiety management."
    },
    {
      title: "Depression",
      short: "Major depressive disorder, persistent depressive disorder, and seasonal affective disorder.",
      details: "Our depression treatment programs are tailored to your specific needs, combining therapeutic approaches with lifestyle recommendations. We help you understand the root causes of your depression while developing practical strategies for recovery and resilience."
    },
    {
      title: "ADHD",
      short: "Attention-deficit/hyperactivity disorder in children, teens, and adults.",
      details: "We offer comprehensive ADHD assessments and treatment plans, including behavioral strategies, educational interventions, and when appropriate, medication management coordination with psychiatric professionals."
    },
    {
      title: "Trauma & PTSD",
      short: "Post-traumatic stress disorder and recovery from traumatic experiences.",
      details: "Our trauma-informed therapists use specialized approaches including EMDR, trauma-focused CBT, and somatic experiencing to help you process traumatic experiences and rebuild a sense of safety and control."
    },
    {
      title: "Relationship Issues",
      short: "Communication problems, conflict resolution, and rebuilding trust.",
      details: "Whether dealing with marital conflicts, family dynamics, or other interpersonal challenges, our therapists provide a safe space to improve communication skills, resolve conflicts, and strengthen relationships."
    }
  ];

  const toggleCondition = (index: number) => {
    if (expandedCondition === index) {
      setExpandedCondition(null);
    } else {
      setExpandedCondition(index);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-secondary to-amber-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary-foreground mb-4">
            Conditions We Treat
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Specialized Mental Health Support
          </h2>
          <p className="text-muted-foreground">
            Our team provides expert care for a wide range of mental health conditions, 
            with treatment plans tailored to your unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
          {conditions.map((condition, index) => (
            <div key={index} className="flex flex-col">
              <motion.button
                onClick={() => toggleCondition(index)}
                className={`
                  bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm 
                  border border-amber-100 hover:shadow-md transition-shadow duration-300 
                  flex flex-col items-center justify-center text-center h-full
                  ${expandedCondition === index ? 'border-primary ring-1 ring-primary/20' : ''}
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold mb-1 text-foreground">{condition.title}</h3>
                <p className="text-muted-foreground text-xs hidden md:block">{condition.short}</p>
                {expandedCondition === index ? 
                  <ChevronUp className="mt-2 h-4 w-4 text-primary" /> : 
                  <ChevronDown className="mt-2 h-4 w-4 text-muted-foreground" />}
              </motion.button>
              
              {expandedCondition === index && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-amber-100"
                >
                  <p className="text-sm text-foreground">{condition.details}</p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setExpandedCondition(null)}
                    className="mt-2 text-primary hover:text-primary-foreground hover:bg-primary/90"
                  >
                    Close
                  </Button>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
