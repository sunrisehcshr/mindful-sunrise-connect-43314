
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from '@/components/ui/tooltip';

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
      title: "Bipolar Disorder",
      short: "Managing mood episodes and maintaining stability.",
      details: "Our specialized approach to bipolar disorder focuses on mood stabilization, symptom management, and building a balanced lifestyle. We combine therapy with medication management coordination to help you maintain emotional stability and thrive."
    },
    {
      title: "PTSD",
      short: "Post-traumatic stress disorder and recovery from traumatic experiences.",
      details: "Our trauma-informed therapists use specialized approaches including EMDR, trauma-focused CBT, and somatic experiencing to help you process traumatic experiences and rebuild a sense of safety and control."
    },
    {
      title: "OCD",
      short: "Obsessive-Compulsive Disorder and related conditions.",
      details: "We provide specialized treatment for OCD using exposure and response prevention (ERP), cognitive-behavioral therapy, and other evidence-based approaches to help reduce obsessions and compulsions while improving quality of life."
    },
    {
      title: "ADHD",
      short: "Attention-deficit/hyperactivity disorder in children, teens, and adults.",
      details: "We offer comprehensive ADHD assessments and treatment plans, including behavioral strategies, educational interventions, and when appropriate, medication management coordination with psychiatric professionals."
    },
    {
      title: "Schizophrenia",
      short: "Schizophrenia and other psychotic disorders.",
      details: "Our comprehensive care for schizophrenia and related disorders includes therapy, skills training, family education, and coordination with psychiatric services for medication management to support stability and improved functioning."
    },
    {
      title: "Eating Disorders",
      short: "Anorexia, bulimia, binge eating disorder, and other disordered eating patterns.",
      details: "Our specialized eating disorder treatment addresses the physical, emotional, and social aspects of recovery. We work collaboratively with nutritionists and medical providers to support comprehensive healing and a healthy relationship with food."
    },
    {
      title: "Substance Use",
      short: "Alcohol and drug addiction, recovery, and relapse prevention.",
      details: "Our substance use treatment programs encompass assessment, individual and group therapy, family involvement, and ongoing support for recovery. We help you understand underlying causes while developing skills for sustainable sobriety."
    },
    {
      title: "BPD",
      short: "Borderline Personality Disorder and emotional regulation.",
      details: "We offer specialized approaches for BPD including Dialectical Behavior Therapy (DBT) and Schema Therapy to help improve emotional regulation, interpersonal effectiveness, and identity development while reducing impulsive behaviors."
    },
    {
      title: "Sleep Disorders",
      short: "Insomnia, sleep anxiety, and sleep-related issues.",
      details: "Our sleep disorder treatment addresses both the physical and psychological aspects of sleep disturbances. We utilize cognitive-behavioral therapy for insomnia (CBT-I) and other proven approaches to restore healthy sleep patterns."
    },
    {
      title: "Dissociative Disorders",
      short: "Dissociative identity disorder and related conditions.",
      details: "Our specialized approach to dissociative disorders focuses on safety, stabilization, and integration. We provide trauma-informed care that respects your unique experiences while working toward increased connection and functioning."
    },
    {
      title: "Somatic Disorders",
      short: "Somatic symptom disorders and related conditions.",
      details: "We provide specialized care for individuals experiencing physical symptoms related to psychological factors. Our approach integrates mind-body techniques with cognitive-behavioral strategies to reduce symptoms and improve quality of life."
    },
    {
      title: "Relationship Issues",
      short: "Communication problems, conflict resolution, and rebuilding trust.",
      details: "Whether dealing with marital conflicts, family dynamics, or other interpersonal challenges, our therapists provide a safe space to improve communication skills, resolve conflicts, and strengthen relationships."
    },
    {
      title: "Child & Teen Issues",
      short: "Behavioral, emotional, and developmental concerns in youth.",
      details: "Our child and adolescent specialists address a wide range of issues including behavioral problems, emotional difficulties, developmental concerns, and family dynamics using age-appropriate, evidence-based approaches."
    },
    {
      title: "Grief & Loss",
      short: "Bereavement, complicated grief, and adapting to significant losses.",
      details: "Our grief counseling provides compassionate support through the grieving process. We help you honor your loss, express emotions safely, and gradually adapt to life changes while finding meaning and moving forward at your own pace."
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
    <section className="py-16 bg-gradient-to-b from-secondary to-amber-50/50" id="conditions-we-treat" aria-labelledby="conditions-heading">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="section-tag">
            Conditions We Treat
          </span>
          <h2 id="conditions-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Specialized Mental Health Support
          </h2>
          <p className="text-muted-foreground">
            Our team provides expert care for a wide range of mental health conditions, 
            with treatment plans tailored to your unique needs.
          </p>
        </div>
        
        <TooltipProvider>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {conditions.map((condition, index) => (
              <div key={index} className="flex flex-col">
                <Tooltip>
                  <TooltipTrigger asChild>
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
                      aria-expanded={expandedCondition === index}
                    >
                      <h3 className="text-lg font-semibold mb-1 text-foreground">{condition.title}</h3>
                      {expandedCondition === index ? 
                        <ChevronUp className="mt-2 h-4 w-4 text-primary" /> : 
                        <ChevronDown className="mt-2 h-4 w-4 text-muted-foreground" />}
                    </motion.button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs">
                    <p className="text-xs">{condition.short}</p>
                  </TooltipContent>
                </Tooltip>
                
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
        </TooltipProvider>
      </div>
    </section>
  );
};

export default ConditionsSection;
