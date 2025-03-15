
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

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
      heroImage="/images/psychiatric-evaluations-havertown.webp"
      benefits={benefits}
      approaches={approaches}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      {/* Service-specific content */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-caladea">
                Understanding Psychiatric Evaluations
              </h2>
              
              <div className="space-y-4">
                <p>
                  At Sunrise Human Care Services in Havertown, PA, our psychiatric evaluations provide a comprehensive assessment of your mental health. These evaluations are the foundation for effective treatment, offering clarity about your symptoms and guidance for your path forward.
                </p>
                
                <p>
                  Our evaluations are conducted by licensed psychiatric specialists who combine clinical expertise with compassionate care. We take time to listen to your concerns, gather relevant information, and understand the unique factors affecting your mental health.
                </p>
                
                <p>
                  Following your evaluation, we'll discuss our findings with you, including any diagnoses and recommended treatment options. We believe in collaborative care—working together to develop a treatment plan that aligns with your needs, preferences, and goals.
                </p>
                
                <p>
                  Whether you're seeking answers about longstanding symptoms, clarity about a specific condition, or guidance for your mental health journey, our comprehensive psychiatric evaluations provide the information and direction you need.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sunrise-100/30">
              <span className="section-tag font-semibold mb-3 inline-block">
                Diagnostic Services
              </span>
              <h3 className="text-xl font-semibold mb-4 font-caladea">
                Our Evaluations Assess:
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Mood disorders (depression, bipolar disorder)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Anxiety disorders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>ADHD in children and adults</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Trauma-related disorders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Obsessive-compulsive and related disorders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Thought disorders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Neurodevelopmental disorders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Medication effects and needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default PsychiatricEvaluations;
