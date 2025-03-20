
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import SEOHead from '../../components/SEOHead';

const SchizophreniaTherapy = () => {
  const pageData = {
    title: "Schizophrenia Treatment",
    description: "Specialized treatment for schizophrenia and other psychotic disorders in Havertown, PA.",
    pageTitle: "Schizophrenia Treatment | Sunrise Human Care Services",
    metaDescription: "Comprehensive treatment for schizophrenia and psychotic disorders in Havertown, PA. Evidence-based therapy approaches, medication management, and family support.",
    serviceType: "Schizophrenia Treatment",
    canonicalUrl: "/schizophrenia-treatment-havertown-pa",
    heroImage: "/images/Therapy-in-havertown.webp",
    benefits: [
      "Comprehensive assessment and diagnosis",
      "Medication management coordination",
      "Individual therapy using evidence-based approaches",
      "Family education and support",
      "Skills training for daily functioning",
      "Crisis intervention planning",
      "Ongoing symptom monitoring and management"
    ],
    approaches: [
      {
        title: "Understanding Schizophrenia",
        description: "Schizophrenia is a complex mental health condition characterized by distortions in thinking, perception, emotions, language, sense of self, and behavior. Common symptoms include hallucinations, delusions, disorganized thinking, and reduced emotional expression. Though it affects about 1% of the population, proper treatment can help manage symptoms and improve quality of life."
      },
      {
        title: "Our Approach to Schizophrenia Treatment",
        description: "At Sunrise Human Care Services, we offer a comprehensive approach to schizophrenia treatment that combines psychotherapy with psychiatric care. Our treatment approach is tailored to each individual's unique needs, focusing on symptom management, reality testing, social skills development, and integration into community life. We work closely with individuals and their families to develop coping strategies and improve overall functioning."
      },
      {
        title: "Components of Effective Treatment",
        description: "Effective schizophrenia treatment typically includes medication management, cognitive behavioral therapy for psychosis (CBTp), family interventions, social skills training, and community support. Our team coordinates all aspects of care to provide consistency and comprehensive support. We emphasize a recovery-oriented approach that focuses on personal goals, strengths, and possibilities despite persistent symptoms."
      },
      {
        title: "Supporting Families",
        description: "We recognize the important role families play in supporting loved ones with schizophrenia. Our services include family education sessions, communication skills training, and guidance on supporting recovery while maintaining healthy boundaries. Family involvement often improves treatment outcomes and reduces relapse rates."
      },
      {
        title: "Your Path to Stability",
        description: "Living with schizophrenia presents challenges, but with proper treatment and support, individuals can lead fulfilling lives. Our treatment team is committed to providing compassionate, evidence-based care that helps reduce psychotic symptoms, prevent relapse, improve social functioning, and enhance quality of life. We work with you to develop a treatment plan that addresses your unique needs and goals."
      }
    ],
    faqs: [
      {
        question: "Can people with schizophrenia lead normal lives?",
        answer: "Yes, with proper treatment and support, many people with schizophrenia lead fulfilling, productive lives. Treatment often allows individuals to manage symptoms effectively, maintain relationships, pursue education or employment, and engage in meaningful activities. Recovery looks different for each person and is focused on achieving personal goals despite ongoing symptoms."
      },
      {
        question: "Is medication always necessary for schizophrenia treatment?",
        answer: "For most people with schizophrenia, medication is a key component of effective treatment, especially for managing positive symptoms like hallucinations and delusions. However, medication works best as part of a comprehensive treatment plan that also includes therapy, skills training, and social support. The specific medication regimen is tailored to each individual's needs and response."
      },
      {
        question: "How can family members best support someone with schizophrenia?",
        answer: "Family support is crucial in schizophrenia recovery. Key ways to help include educating yourself about the condition, participating in family therapy, maintaining clear communication, helping with treatment adherence, reducing stress in the home environment, setting realistic expectations, recognizing warning signs of relapse, and taking care of your own well-being as a caregiver."
      }
    ],
    relatedServices: [
      {
        title: "Depression Therapy",
        url: "/depression-therapy-havertown-pa"
      },
      {
        title: "Anxiety Therapy",
        url: "/anxiety-therapy-havertown-pa"
      },
      {
        title: "Medication Management",
        url: "/medication-management-havertown-pa"
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title={pageData.pageTitle}
        description={pageData.metaDescription}
        canonicalUrl={pageData.canonicalUrl}
      />
      <ServicePageLayout 
        title={pageData.title}
        description={pageData.description}
        pageTitle={pageData.pageTitle}
        metaDescription={pageData.metaDescription}
        serviceType={pageData.serviceType}
        canonicalUrl={pageData.canonicalUrl}
        heroImage={pageData.heroImage}
        benefits={pageData.benefits}
        approaches={pageData.approaches}
        faqs={pageData.faqs}
        relatedServices={pageData.relatedServices}
      >
        {/* Service-specific content */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 font-playfair">
                  Our Approach to Schizophrenia Treatment
                </h2>
                
                <div className="space-y-4">
                  <p>
                    At Sunrise Human Care Services in Havertown, PA, we offer comprehensive treatment for schizophrenia and other psychotic disorders. Our approach integrates evidence-based psychological therapies with coordination of psychiatric care for a well-rounded treatment experience.
                  </p>
                  
                  <p>
                    We emphasize a recovery-oriented model that focuses not just on symptom reduction but on helping individuals achieve meaningful goals and improved quality of life. Treatment begins with a thorough assessment to understand your unique symptoms, history, strengths, and challenges.
                  </p>
                  
                  <p>
                    Our therapeutic approaches include Cognitive Behavioral Therapy for psychosis (CBTp), which helps individuals understand and manage positive symptoms such as hallucinations and delusions, while developing coping strategies for persistent symptoms. We also provide skills training to improve social functioning, problem-solving, and daily living skills.
                  </p>
                  
                  <p>
                    Family involvement is a crucial component of effective treatment. We offer education about schizophrenia, communication skills training, and guidance on how to create a supportive home environment that promotes recovery while reducing stress and preventing relapse.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-sunrise-100/30">
                <h3 className="text-xl font-semibold mb-4 font-playfair">
                  Our Schizophrenia Treatment Helps With:
                </h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Hallucinations (auditory, visual, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Delusions and paranoid thinking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Disorganized thinking and speech</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Negative symptoms (reduced expression, motivation)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Cognitive difficulties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Social skills development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Medication management coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Relapse prevention planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ServicePageLayout>
    </>
  );
};

export default SchizophreniaTherapy;
