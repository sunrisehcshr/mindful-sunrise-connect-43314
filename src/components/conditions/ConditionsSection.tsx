import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Separator } from '../ui/separator';
import SectionTag from '../ui/section-tag';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

const ConditionsSection = () => {
  const [expandedCondition, setExpandedCondition] = useState<number | null>(null);

  const conditions = [
    {
      title: "Anxiety Disorders",
      short: "Including generalized anxiety, panic disorder, and social anxiety.",
      details: "We provide evidence-based treatment for various anxiety disorders, helping you manage symptoms and develop healthy coping strategies. Our therapists specialize in cognitive-behavioral therapy (CBT) and other approaches proven effective for anxiety management.",
      url: "/anxiety-therapy-havertown-pa"
    },
    {
      title: "Depression",
      short: "Major depressive disorder, persistent depressive disorder, and seasonal affective disorder.",
      details: "Our depression treatment programs are tailored to your specific needs, combining therapeutic approaches with lifestyle recommendations. We help you understand the root causes of your depression while developing practical strategies for recovery and resilience.",
      url: "/depression-therapy-havertown-pa"
    }
  ];

  const toggleCondition = (index: number) => {
    setExpandedCondition(expandedCondition === index ? null : index);
  };

  return (
    <section id="conditions" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <SectionTag>Specialized Care</SectionTag>
          </motion.div>
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 font-opensans"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Conditions We Treat
          </motion.h2>
          <motion.p className="font-medium text-zinc-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our experienced team provides evidence-based treatment plans for a wide range of mental health conditions affecting children, adolescents, adults, and seniors.
          </motion.p>
          <div className="mx-auto mt-6 mb-10 w-24">
            <Separator className="bg-gradient-to-r from-transparent via-orange-300/50 to-transparent h-0.5" />
          </div>
        </motion.div>

        <TooltipProvider>
          <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
          >
            {conditions.map((condition, index) => (
              <motion.div key={index} className="flex flex-col"
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
                        relative overflow-hidden rounded-lg p-4 h-full transition-all duration-300
                        ${
                          expandedCondition === index
                            ? 'bg-gradient-to-br from-orange-50 to-amber-100 border-primary shadow-lg ring-1 ring-primary/20'
                            : 'bg-white/90 backdrop-blur-sm border border-amber-100/40 shadow-md hover:shadow-lg hover:border-amber-200/60'
                        }
                      `}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 4px 20px rgba(234, 179, 8, 0.1)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      aria-expanded={expandedCondition === index}
                    >
                      <div className="flex flex-col items-center justify-center text-center">
                        <h3 className="text-lg font-semibold mb-1 text-foreground">
                          {condition.title}
                        </h3>
                        {expandedCondition === index ? (
                          <ChevronRight className="mt-2 h-4 w-4 text-amber-600 rotate-90" />
                        ) : (
                          <ChevronDown className="mt-2 h-4 w-4 text-amber-500/70" />
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-amber-50/20 via-transparent to-orange-50/10 pointer-events-none rounded-md"></div>
                    </motion.button>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="max-w-xs bg-amber-50/90 backdrop-blur-sm border border-amber-200/40"
                  >
                    <p className="text-xs">{condition.short}</p>
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
                    <Card className="overflow-hidden border-amber-100/50 bg-gradient-to-br from-white to-amber-50/50 backdrop-blur-sm shadow-md">
                      <CardContent className="p-4">
                        <p className="text-sm text-foreground">{condition.details}</p>
                        <Link to={condition.url}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="mt-3 text-amber-600 hover:text-amber-700 hover:bg-amber-100/50 group flex items-center"
                          >
                            Learn more
                            <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
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
