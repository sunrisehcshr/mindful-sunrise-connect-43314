
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import SEOHead from '../../components/SEOHead';

const SomaticDisordersTherapy = () => {
  const pageData = {
    title: "Somatic Symptom Disorders Treatment",
    description: "Specialized treatment for somatic symptom disorders and related conditions in Havertown, PA.",
    pageTitle: "Somatic Symptom Disorders Treatment | Sunrise Human Care Services",
    metaDescription: "Specialized treatment for somatic symptom disorders in Havertown, PA. Mind-body approaches to reduce symptom distress and improve functioning.",
    serviceType: "Somatic Symptom Disorders Treatment",
    canonicalUrl: "/conditions/somatic-disorders-therapy",
    heroImage: "/images/Therapy-in-havertown.webp",
    benefits: [
      "Comprehensive biopsychosocial assessment",
      "Cognitive-behavioral therapy for somatic symptoms",
      "Mind-body techniques and somatic awareness",
      "Stress reduction and relaxation training",
      "Coping skills for physical discomfort",
      "Communication strategies with healthcare providers",
      "Functional improvement focus"
    ],
    approaches: [
      {
        title: "Understanding Somatic Symptom Disorders",
        description: "Somatic symptom disorders involve physical symptoms that cause significant distress and disruption to daily functioning. These conditions are characterized by excessive thoughts, feelings, and behaviors related to physical symptoms, regardless of whether a medical cause can be identified. The physical symptoms are real and not intentionally produced, though psychological factors play an important role in how they're experienced and managed."
      },
      {
        title: "Our Approach to Somatic Symptom Disorders",
        description: "At Sunrise Human Care Services, we provide specialized treatment for somatic symptom disorders that addresses the complex interaction between physical experiences and psychological processes. Our approach validates the reality of physical symptoms while helping clients develop more adaptive ways of understanding and responding to bodily sensations. We work collaboratively with medical providers to ensure comprehensive care."
      },
      {
        title: "Evidence-Based Treatment Methods",
        description: "Our treatment utilizes cognitive-behavioral therapy specifically adapted for somatic symptoms, along with mindfulness-based interventions and acceptance-based approaches. These methods help reduce symptom-related distress, correct misinterpretations of bodily sensations, decrease hypervigilance to physical symptoms, and develop more effective coping strategies."
      },
      {
        title: "Mind-Body Connection",
        description: "Understanding the connection between mind and body is essential in treating somatic symptom disorders. We help clients recognize how thoughts, emotions, behaviors, and physical sensations interact and influence each other. Through various techniques, clients learn to regulate their nervous system, reduce physiological arousal, and process emotions in healthier ways."
      },
      {
        title: "Your Path to Improved Quality of Life",
        description: "Living with persistent physical symptoms can be challenging and isolating. Our goal is to help you reduce symptom-related distress, improve daily functioning, and enhance your quality of life. With appropriate treatment, individuals with somatic symptom disorders can experience meaningful improvements in both physical comfort and emotional well-being."
      }
    ],
    faqs: [
      {
        question: "Are somatic symptoms 'all in my head'?",
        answer: "No, somatic symptoms are real physical experiences, not imagined or fabricated. The pain, fatigue, or other physical sensations you feel are genuine. Somatic symptom disorders involve how the brain processes and responds to physical sensations, not whether the sensations exist. Our approach validates your physical experience while addressing psychological factors that may be intensifying symptoms."
      },
      {
        question: "How is psychological treatment helpful for physical symptoms?",
        answer: "Psychological treatment helps by addressing how you interpret, respond to, and cope with physical symptoms. It can reduce symptom-related anxiety, break cycles of symptom focusing and avoidance, develop skills for managing discomfort, address emotional factors that may exacerbate symptoms, and improve overall functioning despite persistent symptoms."
      },
      {
        question: "Will I still need medical care while in therapy for somatic symptoms?",
        answer: "Yes, continuing appropriate medical care is important. We work collaboratively with your healthcare providers to ensure comprehensive care. Psychological treatment for somatic symptoms complements rather than replaces medical care. We can help you communicate effectively with medical providers and make informed decisions about your health care."
      }
    ],
    relatedServices: [
      {
        title: "Anxiety Therapy",
        url: "/services/anxiety-therapy"
      },
      {
        title: "Depression Therapy",
        url: "/services/depression-therapy"
      },
      {
        title: "Trauma & PTSD Therapy",
        url: "/services/trauma-ptsd-therapy"
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
        {/* Content goes here if needed */}
      </ServicePageLayout>
    </>
  );
};

export default SomaticDisordersTherapy;
