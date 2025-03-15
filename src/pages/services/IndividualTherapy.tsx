
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const IndividualTherapy = () => {
  const benefits = [
    "Personalized one-on-one attention from a dedicated therapist",
    "Safe, confidential space to explore your thoughts and feelings",
    "Customized treatment approaches tailored to your specific needs",
    "Flexibility in addressing multiple concerns in a single session",
    "Develop coping strategies specific to your life circumstances",
    "Build self-awareness and personal growth at your own pace"
  ];
  
  const approaches = [
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      description: "Work with your therapist to identify negative thought patterns and develop healthier ways of thinking that positively impact your emotions and behaviors."
    },
    {
      title: "Psychodynamic Therapy",
      description: "Explore how past experiences and unconscious patterns may be influencing your current behaviors and relationships."
    },
    {
      title: "Mindfulness-Based Therapy",
      description: "Learn to stay present, reduce rumination, and develop greater awareness of your thoughts and feelings without judgment."
    },
    {
      title: "Solution-Focused Brief Therapy",
      description: "Concentrate on solutions rather than problems, setting achievable goals and building on your existing strengths."
    }
  ];
  
  const faqs = [
    {
      question: "How long does individual therapy typically last?",
      answer: "The duration varies based on your needs and goals. Some clients benefit from short-term therapy (8-12 sessions), while others prefer longer-term support. We'll discuss timeframes during your initial consultation and adjust as needed."
    },
    {
      question: "How often will I meet with my therapist?",
      answer: "Most clients begin with weekly sessions. As you progress, we may adjust to biweekly or monthly meetings. The frequency is tailored to your needs and can be modified throughout your treatment."
    },
    {
      question: "Is individual therapy covered by insurance?",
      answer: "Many insurance plans cover individual therapy. We accept most major insurance providers and can verify your benefits before your first session. We also offer affordable self-pay options."
    },
    {
      question: "Can I switch therapists if I don't feel it's a good match?",
      answer: "Absolutely. The therapeutic relationship is crucial for successful treatment. If you feel you'd benefit from working with a different therapist, we'll gladly help you find a better match within our practice."
    }
  ];
  
  const relatedServices = [
    { title: "Anxiety Therapy", url: "/anxiety-therapy-havertown-pa" },
    { title: "Depression Therapy", url: "/depression-therapy-havertown-pa" },
    { title: "ADHD Treatment", url: "/adhd-treatment-havertown-pa" }
  ];
  
  return (
    <ServicePageLayout
      title="Individual Therapy in Havertown, PA"
      description="Personalized one-on-one therapy sessions tailored to your unique needs, helping you navigate life's challenges with professional guidance and support."
      pageTitle="Expert Individual Therapy in Havertown, PA - Personalized Mental Health Support | Sunrise Human Care Services"
      metaDescription="Compassionate individual therapy in Havertown, PA for anxiety, depression, trauma, and personal growth. Private, confidential sessions with experienced therapists. Schedule today."
      serviceType="Individual Therapy"
      canonicalUrl="/individual-therapy-havertown-pa"
      heroImage="/images/individual-therapy-havertown.webp"
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
                What to Expect in Individual Therapy
              </h2>
              
              <div className="space-y-4">
                <p>
                  At Sunrise Human Care Services in Havertown, PA, individual therapy begins with a comprehensive assessment to understand your unique concerns, history, and goals. This helps us develop a personalized treatment plan tailored specifically to you.
                </p>
                
                <p>
                  During your ongoing sessions, you'll work one-on-one with your therapist in a safe, confidential environment where you can freely express yourself. Your therapist will guide you through evidence-based therapeutic techniques designed to address your specific challenges.
                </p>
                
                <p>
                  As therapy progresses, you'll develop new insights, coping strategies, and practical skills that you can apply to your daily life. We emphasize measurable progress toward your goals, with regular check-ins to ensure your treatment remains effective and aligned with your evolving needs.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sunrise-100/30">
              <span className="section-tag font-semibold mb-3 inline-block">
                Comprehensive Support
              </span>
              <h3 className="text-xl font-semibold mb-4 font-caladea">
                Our Individual Therapy Services Help With:
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Anxiety, worry and panic attacks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Depression and mood disorders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Trauma recovery and PTSD</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Grief and loss</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Life transitions and adjustments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Self-esteem and personal growth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Stress management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Relationship issues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default IndividualTherapy;
