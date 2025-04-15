
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, Brain, ClipboardCheck, MessageCircle, Activity } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

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
    }
  ];
  
  const relatedServices = [
    { title: "Medication Management", url: "/medication-management-havertown-pa" },
    { title: "Individual Therapy", url: "/individual-therapy-havertown-pa" },
    { title: "Child Therapy", url: "/child-therapy-havertown-pa" }
  ];

  return (
    <>
      <SEOHead 
        title="Expert Psychiatric Evaluations in Havertown, PA | Mental Health Assessment"
        description="Comprehensive psychiatric evaluations in Havertown, PA. Professional mental health assessments for accurate diagnosis and personalized treatment planning. Schedule today."
        canonicalUrl="https://sunrisehumancare.com/psychiatric-evaluations-havertown-pa"
        keywords="psychiatric evaluations Havertown, mental health assessment Pennsylvania, psychiatric diagnosis Delaware County, psychiatrist Havertown PA, mental health evaluation near me"
        serviceSchema={{
          name: "Psychiatric Evaluations",
          description: "Professional psychiatric evaluation and mental health assessment services in Havertown, PA",
          provider: "Sunrise Human Care Services",
          serviceType: "Mental Health Assessment",
          areaServed: "Havertown, PA and Delaware County"
        }}
      />
      
      <ServicePageLayout
        title="Psychiatric Evaluations in Havertown, PA"
        description="Comprehensive psychiatric evaluations and mental health assessments to provide accurate diagnosis and guide effective treatment planning."
        pageTitle="Expert Psychiatric Evaluations in Havertown, PA - Mental Health Assessment | Sunrise Human Care"
        metaDescription="Professional psychiatric evaluations in Havertown, PA. Comprehensive mental health assessments for accurate diagnosis and personalized treatment planning. Schedule today."
        serviceType="Psychiatric Evaluations"
        canonicalUrl="/psychiatric-evaluations-havertown-pa"
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
                  At Sunrise Human Care Services in Havertown, PA, our psychiatric evaluations provide a comprehensive assessment of your mental health needs. Our experienced psychiatrists and mental health professionals use evidence-based approaches to understand your symptoms and develop personalized treatment plans.
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
      </ServicePageLayout>
    </>
  );
};

export default PsychiatricEvaluations;

