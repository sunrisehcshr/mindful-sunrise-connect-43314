
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const PsychiatricEvaluations = () => {
  const benefits = [
    "Accurate diagnosis of mental health conditions",
    "Comprehensive understanding of your symptoms and challenges",
    "Personalized treatment recommendations",
    "Baseline assessment for measuring treatment progress",
    "Documentation for insurance, accommodations, or legal purposes",
    "Clarity and direction for your mental health journey"
  ];
  
  const approaches = [
    {
      title: "Clinical Interview",
      description: "In-depth conversation to understand your symptoms, history, concerns, and goals for treatment."
    },
    {
      title: "Standardized Assessments",
      description: "Evidence-based questionnaires and rating scales to objectively measure symptoms and functioning."
    },
    {
      title: "Collateral Information",
      description: "With your permission, gathering relevant information from family members, previous providers, or medical records."
    },
    {
      title: "Medical Considerations",
      description: "Evaluation of physical health factors, medication effects, and other medical conditions that may impact mental health."
    }
  ];
  
  const faqs = [
    {
      question: "What happens during a psychiatric evaluation?",
      answer: "A psychiatric evaluation typically includes a comprehensive interview about your symptoms, concerns, medical history, family history, and life circumstances. You may complete standardized assessments to measure specific symptoms. The provider will discuss their findings, provide diagnostic information, and recommend treatment options."
    },
    {
      question: "How long does a psychiatric evaluation take?",
      answer: "Initial evaluations typically take 45-60 minutes. Complex cases may require multiple sessions to complete a thorough assessment. We'll provide information about the expected timeframe when you schedule your appointment."
    },
    {
      question: "Do I need to prepare anything for my evaluation?",
      answer: "It's helpful to bring a list of current medications, names of previous providers, relevant medical records, and notes about your symptoms. Consider writing down questions you have for the provider. Coming prepared helps maximize the effectiveness of your evaluation."
    },
    {
      question: "Will I receive medication after my evaluation?",
      answer: "Not necessarily. Medication is one potential treatment option, but not the only one. Based on your evaluation, we'll discuss whether medication might be beneficial for your specific situation, along with other treatment approaches like therapy. If medication is recommended, we'll explain the options, potential benefits, and possible side effects."
    }
  ];
  
  const relatedServices = [
    { title: "Medication Management", url: "/medication-management-havertown-pa" },
    { title: "ADHD Treatment", url: "/adhd-treatment-havertown-pa" },
    { title: "Depression Therapy", url: "/depression-therapy-havertown-pa" }
  ];
  
  return (
    <ServicePageLayout
      title="Psychiatric Evaluations in Havertown, PA"
      description="Comprehensive mental health assessments to provide accurate diagnosis and guide effective treatment planning."
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
      {/* Enhanced service-specific content */}
      <ServiceContentSection
        title="Understanding Psychiatric Evaluations"
        hasBgPattern={true}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-5 text-muted-foreground">
              <p className="leading-relaxed">
                At Sunrise Human Care Services in Havertown, PA, our psychiatric evaluations provide a comprehensive assessment of your mental health. These evaluations are the foundation for effective treatment, offering clarity about your symptoms and guidance for your path forward.
              </p>
              
              <p className="leading-relaxed">
                Our evaluations are conducted by licensed psychiatric specialists who combine clinical expertise with compassionate care. We take time to listen to your concerns, gather relevant information, and understand the unique factors affecting your mental health.
              </p>
              
              <p className="leading-relaxed">
                Following your evaluation, we'll discuss our findings with you, including any diagnoses and recommended treatment options. We believe in collaborative care—working together to develop a treatment plan that aligns with your needs, preferences, and goals.
              </p>
              
              <p className="leading-relaxed">
                Whether you're seeking answers about longstanding symptoms, clarity about a specific condition, or guidance for your mental health journey, our comprehensive psychiatric evaluations provide the information and direction you need.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-7 rounded-xl shadow-md border border-sunrise-100/50 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-5 text-orange-600 font-playfair">
              Our Evaluations Assess:
            </h3>
            
            <ul className="space-y-3.5">
              {[
                "Mood disorders (depression, bipolar disorder)",
                "Anxiety disorders",
                "ADHD in children and adults",
                "Trauma-related disorders",
                "Obsessive-compulsive and related disorders",
                "Thought disorders",
                "Neurodevelopmental disorders",
                "Medication effects and needs"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </ServiceContentSection>
    </ServicePageLayout>
  );
};

export default PsychiatricEvaluations;
