
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const OCDTherapy = () => {
  return (
    <ServicePageLayout
      title="Specialized OCD Treatment in Havertown, PA"
      description="Evidence-based OCD therapy using Exposure and Response Prevention (ERP) and other proven approaches to reduce obsessions and compulsions."
      pageTitle="OCD Treatment | Sunrise Human Care Services | Havertown, PA"
      metaDescription="Effective OCD therapy in Havertown, PA. Our specialized approach using ERP and cognitive-behavioral therapy helps reduce obsessions and compulsions."
      serviceType="OCD Treatment"
      canonicalUrl="/ocd-therapy-havertown-pa"
      benefits={[
        "Reduced frequency and intensity of obsessions",
        "Decreased time spent on compulsions and rituals",
        "Improved ability to resist compulsive urges",
        "Decreased distress associated with intrusive thoughts",
        "Better understanding of OCD and its mechanisms",
        "Increased functioning in daily life, work, and relationships",
        "Development of long-term strategies to prevent relapse"
      ]}
      approaches={[
        {
          title: "Exposure and Response Prevention (ERP)",
          description: "The gold standard treatment for OCD, ERP involves gradually confronting feared situations while refraining from performing compulsions to neutralize anxiety."
        },
        {
          title: "Cognitive Behavioral Therapy (CBT)",
          description: "Focuses on identifying and challenging unhelpful beliefs about intrusive thoughts, perfectionism, and excessive responsibility."
        },
        {
          title: "Acceptance and Commitment Therapy (ACT)",
          description: "Teaches acceptance of uncomfortable thoughts and feelings while committing to actions that align with personal values."
        },
        {
          title: "Mindfulness-Based Approaches",
          description: "Cultivates present-moment awareness and non-judgmental observation of thoughts, reducing their power and the compulsion to respond to them."
        },
        {
          title: "Family-Based Treatment",
          description: "Involves family members in the treatment process, addressing accommodation behaviors and creating a supportive home environment."
        }
      ]}
      faqs={[
        {
          question: "How is OCD different from being a perfectionist or liking things organized?",
          answer: "While perfectionism involves high standards, OCD involves unwanted, intrusive thoughts (obsessions) that cause significant distress and compulsive behaviors performed to reduce anxiety. OCD symptoms typically interfere substantially with daily functioning in ways that perfectionism or organization preferences do not."
        },
        {
          question: "Is Exposure and Response Prevention (ERP) therapy difficult?",
          answer: "ERP can be challenging as it involves facing feared situations and tolerating anxiety without performing compulsions. However, exposure is done gradually, starting with less difficult situations and progressing at your pace. Most clients find that the discomfort is manageable and the benefits far outweigh the temporary distress."
        },
        {
          question: "How long does OCD treatment typically take?",
          answer: "The duration of treatment varies depending on OCD severity, types of symptoms, and individual factors. Many clients see significant improvement within 12-20 weeks of regular ERP sessions, but some may benefit from longer treatment. We'll provide a more personalized timeline after your initial assessment."
        },
        {
          question: "Can medication help with OCD?",
          answer: "Yes, certain medications (primarily selective serotonin reuptake inhibitors or SSRIs) can be effective for OCD, especially when combined with therapy. We can coordinate with psychiatric providers if medication evaluation seems appropriate as part of your treatment plan."
        },
        {
          question: "Can OCD be cured completely?",
          answer: "While OCD is considered a chronic condition, many people achieve significant symptom reduction and even remission with proper treatment. The goal of therapy is to help you manage symptoms effectively so that OCD no longer significantly impacts your quality of life."
        }
      ]}
      relatedServices={[
        { title: "Anxiety Therapy", url: "/anxiety-therapy-havertown-pa" },
        { title: "Depression Therapy", url: "/depression-therapy-havertown-pa" },
        { title: "Individual Therapy", url: "/individual-therapy-havertown-pa" },
        { title: "Medication Management", url: "/medication-management-havertown-pa" },
        { title: "Family Therapy", url: "/family-therapy-havertown-pa" },
        { title: "Psychiatric Evaluations", url: "/psychiatric-evaluations-havertown-pa" }
      ]}
    >
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-500/10 to-amber-400/10"></div>
        <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-playfair">
                Our Approach to OCD Treatment
              </h2>
              
              <div className="space-y-4">
                <p>
                  At Sunrise Human Care Services in Havertown, PA, we provide specialized, evidence-based treatment for Obsessive-Compulsive Disorder (OCD) and related conditions. Our therapists have extensive training in proven approaches that help reduce obsessions, compulsions, and the distress they cause.
                </p>
                
                <p>
                  OCD can manifest in many forms—from contamination fears and checking behaviors to intrusive thoughts and mental rituals. Regardless of how OCD appears in your life, our team understands the mechanics of this complex disorder and offers effective strategies to help you break free from its grip.
                </p>
                
                <p>
                  Our approach centers on Exposure and Response Prevention (ERP), the gold standard treatment for OCD, complemented by other evidence-based methods tailored to your specific needs. We focus not only on symptom reduction but also on rebuilding your quality of life and developing long-term resilience.
                </p>
                
                <p>
                  With compassionate guidance and proven techniques, you can learn to respond differently to obsessive thoughts and gradually reduce compulsive behaviors, reclaiming the parts of your life that OCD has affected.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sunrise-100/30">
              <h3 className="text-xl font-semibold mb-4 font-playfair">
                Our OCD Treatment Helps With:
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Contamination OCD</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Checking and reassurance-seeking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Harmful, violent, or taboo intrusive thoughts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Symmetry, ordering, and "just right" feelings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Scrupulosity (religious/moral obsessions)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Relationship OCD</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Mental rituals and pure obsessional OCD</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>OCD in children and adolescents</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default OCDTherapy;
