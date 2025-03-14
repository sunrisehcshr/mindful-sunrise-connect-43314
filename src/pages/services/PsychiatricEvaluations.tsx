
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const PsychiatricEvaluations = () => {
  const benefits = [
    "Accurate diagnosis to guide effective treatment",
    "Comprehensive understanding of your mental health condition",
    "Evidence-based treatment recommendations",
    "Clarification of complex or overlapping symptoms",
    "Documentation for accommodations or disability support when needed",
    "Personalized care planning based on clinical findings"
  ];
  
  const approaches = [
    {
      title: "Clinical Interview",
      description: "An in-depth conversation about your symptoms, history, and concerns, providing essential information for accurate diagnosis."
    },
    {
      title: "Standardized Assessments",
      description: "Evidence-based questionnaires and rating scales that help measure symptom severity and track treatment progress."
    },
    {
      title: "Medical History Review",
      description: "Examination of your physical health history to understand any medical factors that may be contributing to mental health symptoms."
    },
    {
      title: "Collateral Information",
      description: "With your permission, input from family members or other providers to gain additional perspective on symptoms and functioning."
    }
  ];
  
  const faqs = [
    {
      question: "What happens during a psychiatric evaluation?",
      answer: "A psychiatric evaluation typically involves an in-depth interview about your current symptoms, mental health history, medical history, family history, and social/environmental factors. Your provider may use standardized questionnaires or rating scales to gather additional information. The evaluation concludes with a discussion of findings, diagnosis (if applicable), and treatment recommendations."
    },
    {
      question: "How long does a psychiatric evaluation take?",
      answer: "Initial evaluations typically take 60-90 minutes to ensure we gather comprehensive information. Follow-up appointments are usually shorter, lasting 30-45 minutes, and focus on treatment progress and medication management if applicable."
    },
    {
      question: "Will I receive medication during my first evaluation?",
      answer: "It depends on your specific situation. Some conditions clearly benefit from medication, and prescriptions may be provided at the first visit. In other cases, your provider may want additional information or to try non-medication approaches first. If medication is recommended, your provider will discuss the benefits, risks, and alternatives."
    },
    {
      question: "Do I need a referral for a psychiatric evaluation?",
      answer: "In most cases, no referral is needed. You can schedule directly with our office. However, some insurance plans may require a referral from your primary care physician for coverage. Our staff can help you determine if a referral is needed based on your specific insurance."
    }
  ];
  
  const relatedServices = [
    { title: "Medication Management", url: "/medication-management-havertown-pa" },
    { title: "ADHD Treatment", url: "/adhd-treatment-havertown-pa" },
    { title: "Individual Therapy", url: "/individual-therapy-havertown-pa" }
  ];
  
  return (
    <ServicePageLayout
      title="Psychiatric Evaluations in Havertown, PA"
      description="Comprehensive mental health assessments to provide accurate diagnosis and guide effective treatment planning for optimal outcomes."
      pageTitle="Expert Psychiatric Evaluations in Havertown, PA - Accurate Mental Health Assessment | Sunrise Human Care"
      metaDescription="Professional psychiatric evaluations in Havertown, PA. Comprehensive mental health assessments for accurate diagnosis and personalized treatment planning. Schedule your evaluation today."
      serviceType="Psychiatric Evaluations"
      canonicalUrl="/psychiatric-evaluations-havertown-pa"
      schemaType="MedicalTest"
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-playfair">
                The Importance of Comprehensive Psychiatric Evaluation
              </h2>
              
              <div className="space-y-4">
                <p>
                  At Sunrise Human Care Services in Havertown, PA, our psychiatric evaluations provide a thorough assessment of your mental health to establish an accurate diagnosis and create an effective treatment plan. These evaluations are the foundation for successful mental health care.
                </p>
                
                <p>
                  Our psychiatric providers take the time to listen to your concerns and gather comprehensive information about your symptoms, medical history, family history, and life circumstances. This holistic approach ensures we understand not just your symptoms, but you as a whole person.
                </p>
                
                <p>
                  Following your evaluation, we'll discuss our findings, explain any diagnoses in clear, understandable terms, and collaborate with you to develop a personalized treatment plan. This may include medication recommendations, therapy referrals, lifestyle modifications, or a combination of approaches.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sunrise-100/30">
              <h3 className="text-xl font-semibold mb-4 font-playfair">
                Our Psychiatric Evaluations Can Assess:
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
                  <span>Obsessive-compulsive disorder (OCD)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Thought disorders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Neurocognitive disorders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Personality disorders</span>
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
