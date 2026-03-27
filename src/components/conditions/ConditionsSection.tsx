
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

const ConditionsSection = () => {
  const [expandedCondition, setExpandedCondition] = useState<number | null>(null);
  
  const conditions = [{
    title: "Anxiety Disorders",
    short: "Including generalized anxiety, panic disorder, and social anxiety.",
    details: "We provide evidence-based treatment for various anxiety disorders, helping you manage symptoms and develop healthy coping strategies. Our therapists specialize in cognitive-behavioral therapy (CBT) and other approaches proven effective for anxiety management.",
    url: "/anxiety-therapy-darby-pa"
  }, {
    title: "Depression",
    short: "Major depressive disorder, persistent depressive disorder, and seasonal affective disorder.",
    details: "Our depression treatment programs are tailored to your specific needs, combining therapeutic approaches with lifestyle recommendations. We help you understand the root causes of your depression while developing practical strategies for recovery and resilience.",
    url: "/depression-therapy-darby-pa"
  }, {
    title: "Bipolar Disorder",
    short: "Managing mood episodes and maintaining stability.",
    details: "Our specialized approach to bipolar disorder focuses on mood stabilization, symptom management, and building a balanced lifestyle. We combine therapy with medication management coordination to help you maintain emotional stability and thrive.",
    url: "/bipolar-disorder-therapy-darby-pa"
  }, {
    title: "PTSD",
    short: "Post-traumatic stress disorder and recovery from traumatic experiences.",
    details: "Our trauma-informed therapists use specialized approaches including EMDR, trauma-focused CBT, and somatic experiencing to help you process traumatic experiences and rebuild a sense of safety and control.",
    url: "/ptsd-therapy-darby-pa"
  }, {
    title: "OCD",
    short: "Obsessive-Compulsive Disorder and related conditions.",
    details: "We provide specialized treatment for OCD using exposure and response prevention (ERP), cognitive-behavioral therapy, and other evidence-based approaches to help reduce obsessions and compulsions while improving quality of life.",
    url: "/ocd-therapy-darby-pa"
  }, {
    title: "ADHD",
    short: "Attention-deficit/hyperactivity disorder in children, teens, and adults.",
    details: "We offer comprehensive ADHD assessments and treatment plans, including behavioral strategies, educational interventions, and when appropriate, medication management coordination with psychiatric professionals.",
    url: "/adhd-treatment-darby-pa"
  }, {
    title: "Schizophrenia",
    short: "Schizophrenia and other psychotic disorders.",
    details: "Our comprehensive care for schizophrenia and related disorders includes therapy, skills training, family education, and coordination with psychiatric services for medication management to support stability and improved functioning.",
    url: "/schizophrenia-treatment-darby-pa"
  }, {
    title: "Eating Disorders",
    short: "Anorexia, bulimia, binge eating disorder, and other disordered eating patterns.",
    details: "Our specialized eating disorder treatment addresses the physical, emotional, and social aspects of recovery. We work collaboratively with nutritionists and medical providers to support comprehensive healing and a healthy relationship with food.",
    url: "/eating-disorders-treatment-darby-pa"
  }, {
    title: "Substance Use",
    short: "Alcohol and drug addiction, recovery, and relapse prevention.",
    details: "Our substance use treatment programs encompass assessment, individual and group therapy, family involvement, and ongoing support for recovery. We help you understand underlying causes while developing skills for sustainable sobriety.",
    url: "/substance-use-treatment-darby-pa"
  }, {
    title: "BPD",
    short: "Borderline Personality Disorder and emotional regulation.",
    details: "We offer specialized approaches for BPD including Dialectical Behavior Therapy (DBT) and Schema Therapy to help improve emotional regulation, interpersonal effectiveness, and identity development while reducing impulsive behaviors.",
    url: "/bpd-therapy-darby-pa"
  }, {
    title: "Sleep Disorders",
    short: "Insomnia, sleep anxiety, and sleep-related issues.",
    details: "Our sleep disorder treatment addresses both the physical and psychological aspects of sleep disturbances. We utilize cognitive-behavioral therapy for insomnia (CBT-I) and other proven approaches to restore healthy sleep patterns.",
    url: "/sleep-disorders-treatment-darby-pa"
  }, {
    title: "Dissociative Disorders",
    short: "Dissociative identity disorder and related conditions.",
    details: "Our specialized approach to dissociative disorders focuses on safety, stabilization, and integration. We provide trauma-informed care that respects your unique experiences while working toward increased connection and functioning.",
    url: "/dissociative-disorders-treatment-darby-pa"
  }, {
    title: "Somatic Disorders",
    short: "Somatic symptom disorders and related conditions.",
    details: "We provide specialized care for individuals experiencing physical symptoms related to psychological factors. Our approach integrates mind-body techniques with cognitive-behavioral strategies to reduce symptoms and improve quality of life.",
    url: "/somatic-disorders-treatment-darby-pa"
  }, {
    title: "Relationship Issues",
    short: "Communication problems, conflict resolution, and rebuilding trust.",
    details: "Whether dealing with marital conflicts, family dynamics, or other interpersonal challenges, our therapists provide a safe space to improve communication skills, resolve conflicts, and strengthen relationships.",
    url: "/relationship-therapy-darby-pa"
  }, {
    title: "Child & Teen Issues",
    short: "Behavioral, emotional, and developmental concerns in youth.",
    details: "Our child and adolescent specialists address a wide range of issues including behavioral problems, emotional difficulties, developmental concerns, and family dynamics using age-appropriate, evidence-based approaches.",
    url: "/child-therapy-darby-pa"
  }, {
    title: "Grief & Loss",
    short: "Bereavement, complicated grief, and adapting to significant losses.",
    details: "Our grief counseling provides compassionate support through the grieving process. We help you honor your loss, express emotions safely, and gradually adapt to life changes while finding meaning and moving forward at your own pace.",
    url: "/grief-therapy-darby-pa"
  }];

  const toggleCondition = (index: number) => {
    setExpandedCondition(expandedCondition === index ? null : index);
  };

  return (
    <section id="conditions" className="py-20 md:py-28 bg-[#f0ece4]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-14" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70 mb-4">Specialized Care</span>
          
          <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-5xl text-stone-800 tracking-tight leading-tight mb-4">
            Conditions we
            <span className="block font-instrument-serif italic text-amber-400 font-normal">treat</span>
          </h2>
          
          <p className="font-barlow text-stone-600">
            Our experienced team provides evidence-based treatment plans for a wide range of mental health conditions affecting children, adolescents, adults, and seniors.
          </p>
        </motion.div>
        
        <TooltipProvider>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12" 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
          >
            {conditions.map((condition, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.button 
                      onClick={() => toggleCondition(index)} 
                      className={`
                        rounded-2xl p-4 h-full transition-all duration-300
                        ${expandedCondition === index 
                          ? 'bg-white border-amber-200 shadow-lg ring-1 ring-amber-200/50' 
                          : 'bg-white border border-stone-200/80 hover:shadow-lg hover:border-amber-200'}
                      `} 
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }} 
                      aria-expanded={expandedCondition === index}
                    >
                      <div className="flex flex-col items-center justify-center text-center">
                        <h3 className="text-base font-barlow font-semibold mb-1 text-stone-800">{condition.title}</h3>
                        {expandedCondition === index 
                          ? <ChevronUp className="mt-2 h-4 w-4 text-amber-600" /> 
                          : <ChevronDown className="mt-2 h-4 w-4 text-stone-400" />
                        }
                      </div>
                    </motion.button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs bg-white border border-stone-200">
                    <p className="text-xs font-barlow">{condition.short}</p>
                  </TooltipContent>
                </Tooltip>
                
                {expandedCondition === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }} 
                    exit={{ opacity: 0, height: 0 }} 
                    transition={{ duration: 0.3 }} 
                    className="mt-2"
                  >
                    <div className="bg-white rounded-2xl border border-stone-200/80 p-4 shadow-sm">
                      <p className="text-sm text-stone-600 font-barlow">{condition.details}</p>
                      <Link to={`${condition.url}#home`}>
                        <Button variant="ghost" size="sm" className="mt-3 text-amber-700 hover:text-amber-800 hover:bg-amber-50 group flex items-center font-barlow">
                          Learn more 
                          <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default ConditionsSection;
