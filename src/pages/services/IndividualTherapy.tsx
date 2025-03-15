
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
      heroImage="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1480&auto=format&fit=crop"
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-opensans">
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
              <h3 className="text-xl font-semibold mb-4 font-opensans">
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
      
      {/* Therapeutic journey section with image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1531315630201-bb15abeb1653?q=80&w=1374&auto=format&fit=crop" 
                alt="Serene therapy office with comfortable seating" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-xl font-semibold font-opensans">Your Therapeutic Journey</h3>
              <p className="text-muted-foreground">
                In our comfortable, welcoming space, you'll find the support you need to address life's challenges and work toward your goals.
              </p>
              <div className="space-y-3 pt-2">
                <div className="bg-amber-50 p-3 rounded-md">
                  <h4 className="font-medium text-amber-800">Initial Consultation</h4>
                  <p className="text-sm text-muted-foreground">Get to know your therapist and discuss your concerns and treatment goals.</p>
                </div>
                <div className="bg-amber-50 p-3 rounded-md">
                  <h4 className="font-medium text-amber-800">Personalized Treatment Plan</h4>
                  <p className="text-sm text-muted-foreground">Develop a roadmap for your therapy journey based on your specific needs.</p>
                </div>
                <div className="bg-amber-50 p-3 rounded-md">
                  <h4 className="font-medium text-amber-800">Ongoing Support</h4>
                  <p className="text-sm text-muted-foreground">Regular sessions to build skills, gain insights, and work toward your goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default IndividualTherapy;
