
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, Brain, ClipboardCheck, MessageCircle, Activity, FileCheck, Stethoscope, ScrollText, Clock3, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import SEOHead from '../../components/SEOHead';
import WarmServiceCard from '../../components/services/WarmServiceCard';
import { Link } from 'react-router-dom';

const PsychiatricEvaluations = () => {
  const benefits = [
    "Accurate diagnosis and personalized treatment planning",
    "Understanding root causes of symptoms and behaviors",
    "Evidence-based assessment tools and methods",
    "Comprehensive mental health screening",
    "Clear treatment recommendations and next steps",
    "Documentation for medical records, insurance, or accommodations",
    "Integration with other healthcare providers",
    "Regular progress monitoring and treatment adjustments"
  ];
  
  const approaches = [
    {
      title: "Clinical Interview & Assessment",
      description: "In-depth conversations about symptoms, history, and concerns, combined with standardized assessment tools to gather comprehensive information about your mental health.",
      icon: <MessageCircle className="h-5 w-5" />
    },
    {
      title: "Diagnostic Evaluation",
      description: "Careful analysis of symptoms, behavioral patterns, and life experiences to determine accurate diagnoses and develop targeted treatment plans.",
      icon: <Brain className="h-5 w-5" />
    },
    {
      title: "Medical History Review",
      description: "Thorough review of medical history, current medications, and previous treatments to ensure comprehensive understanding and appropriate care recommendations.",
      icon: <ClipboardCheck className="h-5 w-5" />
    },
    {
      title: "Ongoing Assessment",
      description: "Regular monitoring of treatment progress and symptom changes to adjust and optimize your care plan as needed.",
      icon: <Activity className="h-5 w-5" />
    }
  ];
  
  const faqs = [
    {
      question: "What happens during a psychiatric evaluation?",
      answer: "A psychiatric evaluation typically begins with a comprehensive discussion about your symptoms, concerns, and goals. We'll explore your medical history, family history, lifestyle factors, and current life circumstances. You may complete some standardized assessments, and we'll discuss our findings and treatment recommendations."
    },
    {
      question: "How long does a psychiatric evaluation take?",
      answer: "Initial evaluations usually take 60-90 minutes to ensure we gather all necessary information. Follow-up appointments are typically 30-45 minutes. Complex cases may require additional sessions for a complete assessment."
    },
    {
      question: "What should I bring to my evaluation?",
      answer: "Please bring a list of current medications, relevant medical records, previous psychiatric records if available, and notes about your symptoms or concerns. Having this information ready helps us provide the most accurate assessment."
    },
    {
      question: "Will I receive a diagnosis after my evaluation?",
      answer: "If appropriate, we will provide diagnostic information during your evaluation. However, some conditions may require additional sessions or information for a definitive diagnosis. We'll always explain our findings and discuss treatment options with you."
    },
    {
      question: "Are psychiatric evaluations covered by insurance?",
      answer: "Many insurance plans cover psychiatric evaluations. We work with several major insurance providers and can verify your coverage before your appointment. We also offer self-pay options and can provide documentation for reimbursement."
    },
    {
      question: "How often will I need to return for follow-up appointments?",
      answer: "The frequency of follow-up appointments depends on your specific situation, diagnosis, and treatment plan. Initially, we might recommend more frequent visits, which may decrease as your symptoms improve or stabilize. We'll create a personalized follow-up schedule together."
    },
    {
      question: "Can I request specific testing during my evaluation?",
      answer: "Yes, you can discuss specific testing concerns with your provider. We'll consider your requests along with clinical recommendations to determine which assessments would be most beneficial for your situation."
    }
  ];
  
  const relatedServices = [
    { title: "Medication Management", url: "/medication-management-darby-pa" },
    { title: "Individual Therapy", url: "/individual-therapy-darby-pa" },
    { title: "Child Therapy", url: "/child-therapy-darby-pa" }
  ];
  
  const conditions = [
    {
      title: "Anxiety Disorders",
      description: "Comprehensive evaluation for generalized anxiety, social anxiety, panic disorder, and phobias.",
      url: "/anxiety-therapy-darby-pa",
      imageSrc: "/therapy-in-darby.jpg"
    },
    {
      title: "Mood Disorders",
      description: "Expert assessment for depression, bipolar disorder, and other mood-related conditions.",
      url: "/depression-therapy-darby-pa",
      imageSrc: "/therapy-in-darby.jpg"
    },
    {
      title: "ADHD",
      description: "Thorough evaluation for attention deficit hyperactivity disorder in children and adults.",
      url: "/adhd-treatment-darby-pa",
      imageSrc: "/therapy-in-darby.jpg"
    }
  ];
  
  const evaluationTypes = [
    {
      title: "Initial Psychiatric Assessment",
      description: "A comprehensive first-time evaluation to establish diagnoses and develop treatment recommendations.",
      icon: <FileCheck className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Medication Evaluation",
      description: "Assessment focused on determining if medication would be beneficial and which options might be most appropriate.",
      icon: <Stethoscope className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Psychological Testing",
      description: "Specialized assessments to evaluate specific conditions, cognitive functioning, or personality factors.",
      icon: <ScrollText className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Follow-Up Evaluations",
      description: "Ongoing assessments to monitor treatment effectiveness and make necessary adjustments.",
      icon: <Clock3 className="h-6 w-6 text-orange-500" />
    }
  ];

  return (
    <>
      <SEOHead 
        title="Expert Psychiatric Evaluations in Darby, PA | Mental Health Assessment"
        description="Comprehensive psychiatric evaluations in Darby, PA. Professional mental health assessments for accurate diagnosis and personalized treatment planning. Schedule today."
        canonicalUrl="https://sunrisehumancare.com/psychiatric-evaluations-darby-pa"
        keywords="psychiatric evaluations Darby, mental health assessment Pennsylvania, psychiatric diagnosis Delaware County, psychiatrist Darby PA, mental health evaluation near me"
        serviceSchema={{
          name: "Psychiatric Evaluations",
          description: "Professional psychiatric evaluation and mental health assessment services in Darby, PA",
          provider: "Sunrise Human Care Services",
          serviceType: "Mental Health Assessment",
          areaServed: "Darby, PA and Delaware County"
        }}
      />
      
      <ServicePageLayout
        title="Psychiatric Evaluations in Darby, PA"
        description="Comprehensive psychiatric evaluations and mental health assessments to provide accurate diagnosis and guide effective treatment planning."
        pageTitle="Expert Psychiatric Evaluations in Darby, PA - Mental Health Assessment | Sunrise Human Care"
        metaDescription="Professional psychiatric evaluations in Darby, PA. Comprehensive mental health assessments for accurate diagnosis and personalized treatment planning. Schedule today."
        serviceType="Psychiatric Evaluations"
        canonicalUrl="/psychiatric-evaluations-darby-pa"
        schemaType="MedicalService"
        benefits={benefits}
        approaches={approaches}
        faqs={faqs}
        relatedServices={relatedServices}
      >
        <ServiceContentSection
          title="Understanding Our Psychiatric Evaluation Process"
          hasBgPattern={true}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-5 text-muted-foreground">
                <p className="leading-relaxed">
                  At Sunrise Human Care Services in Darby, PA, our psychiatric evaluations provide a comprehensive assessment of your mental health needs. Our experienced psychiatrists and mental health professionals use evidence-based approaches to understand your symptoms and develop personalized treatment plans.
                </p>
                
                <p className="leading-relaxed">
                  We recognize that seeking a psychiatric evaluation can feel daunting. Our compassionate team creates a welcoming, non-judgmental environment where you can feel comfortable sharing your concerns and experiences. We take time to listen, understand your unique situation, and address any questions you may have about the evaluation process.
                </p>
                
                <p className="leading-relaxed">
                  Our evaluations incorporate multiple assessment methods to ensure a thorough understanding of your mental health needs. This may include clinical interviews, standardized assessments, review of medical history, and consultation with other healthcare providers when appropriate.
                </p>
                
                <p className="leading-relaxed">
                  Following your evaluation, we'll provide clear explanations of our findings and collaborate with you to develop a treatment plan that aligns with your goals and preferences. Our team stays connected with you throughout your treatment journey, regularly assessing progress and adjusting recommendations as needed.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    title: "Comprehensive Assessment Areas",
                    items: [
                      "Current symptoms and concerns",
                      "Medical and psychiatric history",
                      "Family history and background",
                      "Current life stressors and supports",
                      "Previous treatments and responses",
                      "Current medications and side effects",
                      "Substance use history",
                      "Risk assessment and safety planning"
                    ]
                  },
                  {
                    title: "Types of Evaluations",
                    items: [
                      "Initial psychiatric assessments",
                      "Diagnostic clarification",
                      "Medication evaluations",
                      "Crisis assessments",
                      "Pre-treatment evaluations",
                      "Disability assessments",
                      "School/work accommodation evaluations",
                      "Treatment progress evaluations"
                    ]
                  },
                  {
                    title: "What to Expect",
                    items: [
                      "Welcoming, comfortable environment",
                      "Thorough, unhurried appointments",
                      "Clear communication throughout",
                      "Collaborative treatment planning",
                      "Written documentation as needed",
                      "Coordination with other providers",
                      "Regular progress reviews",
                      "Ongoing support and guidance"
                    ]
                  }
                ].map((section, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold text-amber-950">
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 pt-2">
                        {section.items.map((item, idx) => (
                          <motion.li 
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </ServiceContentSection>
        
        <ServiceContentSection
          title="Types of Psychiatric Evaluations We Offer"
          className="bg-white"
        >
          <div className="mb-10 max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              Our practice provides a range of specialized psychiatric evaluation services to meet diverse needs. Each evaluation type is tailored to address specific concerns and provide actionable insights for treatment planning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {evaluationTypes.map((type, index) => (
              <motion.div 
                key={index} 
                className="bg-amber-50/50 border border-amber-100 rounded-lg p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-amber-100/80 p-3 flex-shrink-0">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ServiceContentSection>
        
        <ServiceContentSection
          title="Common Conditions We Evaluate"
          hasBgPattern={true}
        >
          <div className="mb-8 max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              Our psychiatric evaluations can help assess and diagnose a wide range of mental health conditions. Our experienced team uses evidence-based methods to provide accurate diagnosis and treatment recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <WarmServiceCard
                key={index}
                title={condition.title}
                description={condition.description}
                imageSrc={condition.imageSrc}
                url={condition.url}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/conditions" className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
              View all conditions we treat
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ServiceContentSection>
        
        <ServiceContentSection
          title="The Importance of Comprehensive Psychiatric Evaluation"
          className="bg-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-5"
              >
                <p className="text-muted-foreground">
                  A thorough psychiatric evaluation is the foundation of effective mental health treatment. At Sunrise Human Care Services, we believe in the importance of accurate diagnosis and personalized care planning to address your unique needs.
                </p>
                
                <p className="text-muted-foreground">
                  Many mental health conditions share similar symptoms, making careful assessment critical for proper diagnosis. Our evaluation process helps distinguish between conditions that may present in similar ways, ensuring you receive the most appropriate and effective treatment.
                </p>
                
                <p className="text-muted-foreground">
                  Beyond diagnosis, our evaluations provide valuable insights into your overall mental health, identifying strengths and resources that can support your recovery. We consider biological factors, psychological aspects, and social influences to create a holistic understanding of your well-being.
                </p>
                
                <p className="text-muted-foreground">
                  For individuals who have struggled with persistent symptoms or have tried multiple treatments without success, a comprehensive psychiatric evaluation can offer new perspectives and treatment approaches. Our team stays current with the latest research and diagnostic methods to provide the most up-to-date care.
                </p>
              </motion.div>
            </div>
            
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-amber-50 border border-amber-100 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Benefits of Early Evaluation</h3>
                <Separator className="bg-amber-200 mb-4" />
                
                <ul className="space-y-4">
                  {[
                    "Early intervention often leads to better treatment outcomes",
                    "Prevents symptoms from becoming more severe or chronic",
                    "Reduces the impact of mental health conditions on daily functioning",
                    "Helps identify co-occurring conditions that may affect treatment",
                    "Provides clarity and understanding about symptoms and experiences",
                    "Creates a foundation for a personalized treatment approach"
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-amber-800 text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </ServiceContentSection>
      </ServicePageLayout>
    </>
  );
};

export default PsychiatricEvaluations;
