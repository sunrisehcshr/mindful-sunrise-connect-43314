
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const DepressionTherapy = () => {
  const benefits = [
    "Reduce symptoms of depression and improve mood",
    "Regain interest and enjoyment in activities",
    "Develop healthy coping strategies for managing difficult emotions",
    "Break negative thought patterns that fuel depression",
    "Improve energy levels and daily functioning",
    "Build resilience to prevent future depressive episodes"
  ];
  
  const approaches = [
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      description: "Helps identify and change negative thought patterns and behaviors that contribute to and maintain depression."
    },
    {
      title: "Interpersonal Therapy (IPT)",
      description: "Focuses on improving relationships and communication patterns to alleviate depression and build support systems."
    },
    {
      title: "Behavioral Activation",
      description: "A structured approach that helps you gradually increase meaningful activities to improve mood and break the cycle of depression."
    },
    {
      title: "Mindfulness-Based Cognitive Therapy",
      description: "Combines CBT techniques with mindfulness practices to help prevent depression relapse and manage difficult emotions."
    }
  ];
  
  const faqs = [
    {
      question: "How is depression different from just feeling sad?",
      answer: "While sadness is a normal emotion that everyone experiences, depression is more persistent and severe, often interfering with daily functioning. Depression typically involves multiple symptoms beyond sadness, such as loss of interest, changes in sleep and appetite, fatigue, and feelings of worthlessness."
    },
    {
      question: "How long does depression treatment take?",
      answer: "Many people begin to experience improvement within 8-12 weeks of consistent therapy. However, treatment duration varies based on depression severity, history, and individual factors. Some clients benefit from shorter-term therapy, while others may need longer support."
    },
    {
      question: "Will I need medication for my depression?",
      answer: "Not necessarily. Many people effectively manage depression through therapy alone. After a thorough assessment, if medication might be beneficial, we can discuss a referral to our psychiatric providers. Often, a combination of therapy and medication provides the most effective treatment for moderate to severe depression."
    },
    {
      question: "What if I've tried therapy before and it didn't help my depression?",
      answer: "Different therapeutic approaches and therapist relationships can yield different results. We'll take time to understand your previous experiences and create a personalized approach that addresses the specific factors maintaining your depression. Many people find success after previous unsuccessful treatment attempts."
    }
  ];
  
  const relatedServices = [
    { title: "Anxiety Therapy", url: "/anxiety-therapy-havertown-pa" },
    { title: "Individual Therapy", url: "/individual-therapy-havertown-pa" },
    { title: "Medication Management", url: "/medication-management-havertown-pa" }
  ];
  
  return (
    <ServicePageLayout
      title="Depression Therapy in Havertown, PA"
      description="Effective, compassionate treatment for depression, helping you rediscover joy, purpose, and connection in your life."
      pageTitle="Expert Depression Therapy in Havertown, PA - Evidence-Based Treatment | Sunrise Human Care"
      metaDescription="Specialized depression treatment in Havertown, PA. Our experienced therapists provide evidence-based therapy to help you overcome depression and regain joy and purpose. Schedule today."
      serviceType="Depression Therapy"
      canonicalUrl="/depression-therapy-havertown-pa"
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
                Our Approach to Depression Treatment
              </h2>
              
              <div className="space-y-4">
                <p>
                  At Sunrise Human Care Services in Havertown, PA, we understand that depression affects each person differently. Our approach begins with a comprehensive assessment to understand your specific symptoms, history, and the unique factors contributing to your depression.
                </p>
                
                <p>
                  Using evidence-based therapies, we'll help you identify and change negative thought patterns, develop healthy coping strategies, and gradually increase meaningful activities that can improve your mood. We focus not only on symptom reduction but also on helping you build a more fulfilling life.
                </p>
                
                <p>
                  When appropriate, we collaborate with our psychiatric providers to offer integrated care that may include medication management alongside therapy. Throughout treatment, we'll regularly assess your progress and adjust our approach to ensure you're receiving the most effective care for your specific needs.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sunrise-100/30">
              <h3 className="text-xl font-semibold mb-4 font-playfair">
                Our Depression Treatment Helps With:
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Major Depressive Disorder</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Persistent Depressive Disorder (Dysthymia)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Seasonal Affective Disorder (SAD)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Postpartum Depression</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Bipolar Depression (in coordination with medication management)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Grief and bereavement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Depression with co-occurring anxiety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Treatment-resistant depression</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default DepressionTherapy;
