
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const MedicationManagement = () => {
  const benefits = [
    "Expert guidance on psychiatric medications and their effects",
    "Regular monitoring to minimize side effects and maximize benefits",
    "Medication adjustments based on your response and needs",
    "Integration with therapy for comprehensive treatment",
    "Education about your condition and treatment options",
    "Ongoing support throughout your medication journey"
  ];
  
  const approaches = [
    {
      title: "Personalized Medication Selection",
      description: "Careful consideration of your specific symptoms, medical history, and individual factors to select the most appropriate medication options."
    },
    {
      title: "Shared Decision Making",
      description: "Collaborative discussions about medication options, including benefits, risks, and alternatives, to ensure treatments align with your preferences and goals."
    },
    {
      title: "Regular Monitoring and Adjustment",
      description: "Consistent follow-up appointments to assess medication effectiveness, manage side effects, and make necessary adjustments."
    },
    {
      title: "Integrated Care Approach",
      description: "Coordination with your therapist and other healthcare providers to ensure all aspects of your treatment work together effectively."
    }
  ];
  
  const faqs = [
    {
      question: "Will I become dependent on psychiatric medication?",
      answer: "Most psychiatric medications are not habit-forming or addictive. Some medications do require gradual tapering when discontinuing to prevent withdrawal symptoms, but this is different from addiction. Your provider will discuss the specific properties of any medication recommended and support you through any changes in your medication regimen."
    },
    {
      question: "How long will I need to take psychiatric medication?",
      answer: "Treatment duration varies widely depending on your condition, symptoms, and treatment response. Some people may need medication for a limited time during a specific episode, while others with chronic conditions may benefit from longer-term treatment. We regularly review the continued need for medication and adjust treatment plans accordingly."
    },
    {
      question: "How often will I need to come in for medication management appointments?",
      answer: "Initially, appointments may be more frequent (every 2-4 weeks) as we find the right medication and dosage. Once your symptoms are stable, appointments typically become less frequent (every 1-3 months). The schedule is always personalized based on your specific needs and treatment response."
    },
    {
      question: "What if I experience side effects from my medication?",
      answer: "Many side effects are temporary and resolve as your body adjusts to the medication. However, we take all side effects seriously. Contact us promptly about any concerning side effects, and we'll determine whether dosage adjustments, medication changes, or other interventions are needed. Never discontinue medication abruptly without consulting your provider."
    }
  ];
  
  const relatedServices = [
    { title: "Psychiatric Evaluations", url: "/psychiatric-evaluations-havertown-pa" },
    { title: "Depression Therapy", url: "/depression-therapy-havertown-pa" },
    { title: "ADHD Treatment", url: "/adhd-treatment-havertown-pa" }
  ];
  
  return (
    <ServicePageLayout
      title="Medication Management in Havertown, PA"
      description="Expert psychiatric medication services to help manage mental health conditions effectively, with personalized care and ongoing support."
      pageTitle="Expert Medication Management in Havertown, PA - Psychiatric Services | Sunrise Human Care"
      metaDescription="Professional psychiatric medication management in Havertown, PA. Personalized medication services for depression, anxiety, ADHD, and other mental health conditions. Schedule today."
      serviceType="Medication Management"
      canonicalUrl="/medication-management-havertown-pa"
      schemaType="MedicalService"
      heroImage="/images/medication-management-havertown.webp"
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
                Our Approach to Medication Management
              </h2>
              
              <div className="space-y-4">
                <p>
                  At Sunrise Human Care Services in Havertown, PA, our psychiatric medication management services are provided by licensed psychiatric specialists who combine medical expertise with compassionate care. We believe in evidence-based medication practices tailored to your individual needs.
                </p>
                
                <p>
                  We begin with a comprehensive evaluation to understand your symptoms, medical history, and treatment goals. If medication is appropriate, we'll explain your options in clear, understandable terms, discussing potential benefits and risks so you can make informed decisions about your care.
                </p>
                
                <p>
                  Our approach emphasizes finding the right medication and dosage with minimal side effects. We start with the lowest effective dose and adjust based on your response. Throughout treatment, we provide ongoing monitoring, education, and support to help you achieve optimal results.
                </p>
                
                <p>
                  We value coordinated care and work closely with your therapist or other healthcare providers to ensure your treatment plan is comprehensive and effective. This integrated approach helps address all aspects of your mental health condition.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sunrise-100/30">
              <span className="section-tag font-semibold mb-3 inline-block">
                Medication Services
              </span>
              <h3 className="text-xl font-semibold mb-4 font-caladea">
                We Provide Medication Management For:
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Depression and mood disorders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Anxiety disorders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Bipolar disorder</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>ADHD in children and adults</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>PTSD and trauma-related disorders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Obsessive-compulsive disorder (OCD)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Sleep disorders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Complex or treatment-resistant conditions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default MedicationManagement;
