
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const ADHDTreatment = () => {
  const benefits = [
    "Improved focus, attention, and concentration",
    "Better organization and time management skills",
    "Reduced impulsivity and improved self-regulation",
    "Effective strategies for completing tasks and meeting goals",
    "Enhanced academic or work performance",
    "Improved self-esteem and confidence"
  ];
  
  const approaches = [
    {
      title: "Cognitive Behavioral Therapy (CBT) for ADHD",
      description: "A specialized form of CBT that focuses on developing skills and strategies to manage ADHD symptoms and the emotional challenges that often accompany them."
    },
    {
      title: "Behavioral Management",
      description: "Practical strategies and systems to improve organization, time management, and task completion, tailored to your specific challenges."
    },
    {
      title: "Executive Functioning Skills Training",
      description: "Targeted skill development in planning, organization, time management, working memory, and self-monitoring."
    },
    {
      title: "Medication Management",
      description: "When appropriate, our psychiatric providers can evaluate and prescribe medication as part of an integrated treatment approach."
    }
  ];
  
  const faqs = [
    {
      question: "Is ADHD a real condition? Isn't it just a lack of discipline?",
      answer: "ADHD is a legitimate neurodevelopmental condition with substantial scientific evidence supporting its existence. Brain imaging studies have shown differences in brain structure and function in individuals with ADHD. It's not caused by laziness or lack of discipline, but by differences in how the brain processes information and regulates attention and behavior."
    },
    {
      question: "Do I need to take medication to treat my ADHD?",
      answer: "Not necessarily. While medication is often effective for managing ADHD symptoms, many individuals benefit from non-medication approaches or a combination of medication and therapy. We provide comprehensive evaluations and discuss all treatment options to find the approach that works best for your specific situation."
    },
    {
      question: "I was never diagnosed as a child. Can adults have ADHD?",
      answer: "Absolutely. Many adults with ADHD were never diagnosed in childhood, especially those who don't have the hyperactive presentation or who developed coping strategies that masked their symptoms. Adult ADHD can present differently than childhood ADHD, often with less obvious hyperactivity but significant challenges with organization, time management, and follow-through."
    },
    {
      question: "How long does ADHD treatment take?",
      answer: "ADHD is a chronic condition, but with proper treatment, symptoms can be effectively managed. Initial intensive treatment might involve weekly sessions for 3-6 months to develop core skills and strategies. Many clients then transition to less frequent maintenance sessions. The goal is to help you develop sustainable systems that work for your brain."
    }
  ];
  
  const relatedServices = [
    { title: "Child & Adolescent Therapy", url: "/child-therapy-havertown-pa" },
    { title: "Psychiatric Evaluations", url: "/psychiatric-evaluations-havertown-pa" },
    { title: "Medication Management", url: "/medication-management-havertown-pa" }
  ];
  
  return (
    <ServicePageLayout
      title="ADHD Treatment in Havertown, PA"
      description="Comprehensive ADHD assessment and treatment for children, adolescents, and adults, helping you manage symptoms and reach your full potential."
      pageTitle="Expert ADHD Treatment in Havertown, PA - Assessment & Management | Sunrise Human Care"
      metaDescription="Specialized ADHD treatment in Havertown, PA for children, teens, and adults. Comprehensive assessment, therapy, and medication management to improve focus, organization, and productivity."
      serviceType="ADHD Treatment"
      canonicalUrl="/adhd-treatment-havertown-pa"
      heroImage="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=1472&auto=format&fit=crop"
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
                Our Approach to ADHD Treatment
              </h2>
              
              <div className="space-y-4">
                <p>
                  At Sunrise Human Care Services in Havertown, PA, we take a comprehensive approach to ADHD treatment, beginning with a thorough evaluation to confirm diagnosis, identify specific challenges, and understand your unique strengths and weaknesses.
                </p>
                
                <p>
                  We recognize that ADHD affects different people in different ways. Our treatment plans are individualized, focusing on the specific areas where ADHD is impacting your life, whether it's academic performance, work productivity, relationships, or daily functioning.
                </p>
                
                <p>
                  Our approach combines evidence-based therapies with practical skill-building. We'll help you develop effective strategies for organization, time management, and planning while addressing any emotional challenges that often accompany ADHD, such as frustration, low self-esteem, or anxiety.
                </p>
                
                <p>
                  When appropriate, we work closely with our psychiatric providers to integrate medication into your treatment plan. This multimodal approach—combining behavioral strategies, skill development, and potentially medication—provides the most effective ADHD management.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sunrise-100/30">
              <h3 className="text-xl font-semibold mb-4 font-opensans">
                Our ADHD Treatment Services Include:
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Comprehensive ADHD assessments and diagnosis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Individual therapy for children, teens, and adults with ADHD</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Executive functioning skills training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Parent training for managing child ADHD</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Academic and workplace accommodations guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Organizational and time management coaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Medication evaluation and management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Treatment for co-occurring conditions (anxiety, depression)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* ADHD strategies visualization */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-6 text-center font-opensans">ADHD Management Strategies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1476&auto=format&fit=crop" 
                  alt="Person using organizational tools and planning systems" 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h4 className="text-lg font-medium text-amber-700">Tools for Success</h4>
                <p className="text-muted-foreground">
                  Our therapists will help you develop and implement personalized organizational systems and strategies that work with your brain, not against it.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">•</span>
                    <span>Digital and physical planning systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">•</span>
                    <span>Task prioritization methods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">•</span>
                    <span>Environmental modifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">•</span>
                    <span>Time management techniques</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default ADHDTreatment;
