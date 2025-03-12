
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const ConditionsSection: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  
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

  return (
    <section className="py-16 bg-gradient-to-b from-secondary to-amber-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-400/20 text-purple-900 mb-4">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {conditions.map((condition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-purple-100 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-900">{condition.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{condition.short}</p>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setShowDetails(true)}
                    className="border-purple-200 hover:bg-purple-50 text-purple-700"
                  >
                    <Info className="mr-1 h-4 w-4" />
                    More Details
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Click for detailed information</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          ))}
        </div>
        
        {/* Popup for more details */}
        {showDetails && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-purple-900">Conditions We Treat</h3>
                <Button variant="ghost" size="icon" onClick={() => setShowDetails(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="space-y-6">
                {conditions.map((condition, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <h4 className="text-lg font-semibold mb-2 text-purple-800">{condition.title}</h4>
                    <p className="text-gray-700">{condition.details}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button onClick={() => setShowDetails(false)}>Close</Button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ConditionsSection;
