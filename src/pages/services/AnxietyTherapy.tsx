
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import { motion } from 'framer-motion';

const AnxietyTherapy = () => {
  const benefits = [
    "Reduce excessive worry, fear, and panic symptoms",
    "Develop effective strategies to manage anxiety in daily life",
    "Identify and change anxious thought patterns",
    "Learn physical relaxation techniques",
    "Build confidence in facing anxiety-provoking situations",
    "Improve quality of life and functioning"
  ];
  
  const approaches = [
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      description: "The gold standard for anxiety treatment, CBT helps you identify and challenge anxious thoughts while developing healthier behavioral responses."
    },
    {
      title: "Exposure Therapy",
      description: "A specialized form of CBT that involves gradually and safely facing feared situations to reduce anxiety over time."
    },
    {
      title: "Acceptance and Commitment Therapy (ACT)",
      description: "Focuses on accepting anxious feelings rather than fighting them, while committing to actions that enrich your life despite anxiety."
    },
    {
      title: "Mindfulness-Based Approaches",
      description: "Teaches present-moment awareness and non-judgmental acceptance to reduce rumination and worry."
    }
  ];
  
  const faqs = [
    {
      question: "How long does anxiety treatment typically take?",
      answer: "Many clients experience significant improvement within 8-16 sessions of anxiety-focused treatment. However, the timeline varies based on anxiety severity, type, and individual factors. We'll discuss expected timeframes during your initial consultation."
    },
    {
      question: "Will I need medication for my anxiety?",
      answer: "Not necessarily. Many people effectively manage anxiety through therapy alone. After assessment, if medication might be beneficial, we can discuss a referral to our psychiatric providers. We support both medication and non-medication approaches based on your needs and preferences."
    },
    {
      question: "Will I have to talk about things that make me anxious?",
      answer: "Gradually addressing anxiety triggers is often part of effective treatment. However, we move at your pace and use techniques to make this process manageable. We'll never force you to discuss something you're not ready to explore."
    },
    {
      question: "Is my anxiety just something I have to live with?",
      answer: "No. Anxiety disorders are highly treatable, and most people experience significant reduction in symptoms with proper treatment. While occasional anxiety is part of life, debilitating anxiety is not something you simply have to endure."
    }
  ];
  
  const relatedServices = [
    { title: "Depression Therapy", url: "/depression-therapy-havertown-pa" },
    { title: "Individual Therapy", url: "/individual-therapy-havertown-pa" },
    { title: "ADHD Treatment", url: "/adhd-treatment-havertown-pa" }
  ];
  
  return (
    <ServicePageLayout
      title="Anxiety Therapy in Havertown, PA"
      description="Evidence-based therapy for all types of anxiety disorders, including generalized anxiety, social anxiety, panic disorder, and phobias."
      pageTitle="Expert Anxiety Therapy in Havertown, PA - Effective Treatment | Sunrise Human Care Services"
      metaDescription="Specialized anxiety treatment in Havertown, PA. Evidence-based therapy for panic attacks, generalized anxiety, social anxiety, and phobias. Find relief with our experienced therapists."
      serviceType="Anxiety Therapy"
      canonicalUrl="/anxiety-therapy-havertown-pa"
      heroImage="https://images.unsplash.com/photo-1521310192545-4ac7b234d1a8?q=80&w=1287&auto=format&fit=crop"
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
                Understanding Anxiety Treatment
              </h2>
              
              <div className="space-y-4">
                <p>
                  At Sunrise Human Care Services in Havertown, PA, we provide specialized, evidence-based treatment for all types of anxiety disorders. Our approach begins with a thorough assessment to understand your specific anxiety symptoms, triggers, and how anxiety is impacting your life.
                </p>
                
                <p>
                  Our therapists are trained in proven anxiety treatment methods that help you address both the psychological and physical symptoms of anxiety. You'll learn to recognize and challenge anxious thinking patterns while developing practical coping strategies to manage anxiety in your daily life.
                </p>
                
                <p>
                  Treatment is collaborative and personalized—we'll work together to develop an approach that fits your unique needs and circumstances. Many clients begin experiencing relief within a few sessions as they gain understanding of their anxiety and start implementing effective management techniques.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sunrise-100/30">
              <h3 className="text-xl font-semibold mb-4 font-opensans">
                We Treat All Types of Anxiety:
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Generalized Anxiety Disorder (GAD)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Panic Disorder and panic attacks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Social Anxiety Disorder</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Specific Phobias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Obsessive-Compulsive Disorder (OCD)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Health Anxiety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Performance Anxiety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>General stress and worry</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional image section with anxiety management visualization */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl w-full">
              <div>
                <h3 className="text-xl font-semibold mb-4 font-opensans">Anxiety Management Techniques</h3>
                <p className="text-muted-foreground mb-4">
                  Our therapists will work with you to develop a personalized toolkit of anxiety management strategies that work for your specific needs and lifestyle.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">•</span>
                    <span>Breathing and relaxation techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">•</span>
                    <span>Cognitive restructuring for anxious thoughts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">•</span>
                    <span>Mindfulness and grounding practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">•</span>
                    <span>Gradual exposure to anxiety triggers</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1399&auto=format&fit=crop" 
                  alt="Person practicing mindfulness in a peaceful setting" 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default AnxietyTherapy;
