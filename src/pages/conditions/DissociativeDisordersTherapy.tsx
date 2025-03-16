
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import SEOHead from '../../components/SEOHead';

const DissociativeDisordersTherapy = () => {
  const pageData = {
    title: "Dissociative Disorders Treatment",
    description: "Specialized treatment for dissociative identity disorder and related conditions in Havertown, PA.",
    pageTitle: "Dissociative Disorders Treatment | Sunrise Human Care Services",
    metaDescription: "Specialized treatment for dissociative disorders in Havertown, PA. Trauma-informed therapy focusing on safety, stabilization, and integration.",
    serviceType: "Dissociative Disorders Treatment",
    canonicalUrl: "/conditions/dissociative-disorders-therapy",
    heroImage: "/images/Therapy-in-havertown.webp",
    benefits: [
      "Comprehensive psychological assessment",
      "Phase-oriented trauma treatment",
      "Safety and stabilization techniques",
      "Grounding and present-moment awareness skills",
      "Identity work and internal communication",
      "Processing of traumatic memories when appropriate",
      "Integration and coordination of daily functioning"
    ],
    approaches: [
      {
        title: "Understanding Dissociative Disorders",
        description: "Dissociative disorders are characterized by a disconnection between a person's thoughts, surroundings, actions, and identity. These conditions often develop as a response to trauma and help the person survive overwhelmingly painful experiences. Types include dissociative identity disorder, dissociative amnesia, depersonalization/derealization disorder, and other specified dissociative disorders."
      },
      {
        title: "Our Approach to Dissociative Disorders",
        description: "At Sunrise Human Care Services, we provide specialized, trauma-informed treatment for dissociative disorders. Our approach emphasizes safety, stabilization, and gradual processing of traumatic experiences at a pace that feels manageable. We recognize dissociation as an adaptive response to overwhelming circumstances and work collaboratively with all aspects of a client's internal system."
      },
      {
        title: "Phase-Oriented Treatment",
        description: "Our treatment follows a phase-oriented approach that begins with establishing safety and stability, developing skills for managing symptoms, and building resources. Later phases may include processing traumatic memories and working toward greater internal cooperation and integration. Treatment progresses at the client's pace, with ongoing attention to containment and functioning in daily life."
      },
      {
        title: "Grounding and Present-Focused Skills",
        description: "Dissociative symptoms can be distressing and disruptive. We teach practical grounding techniques that help clients stay connected to the present moment and manage dissociative episodes. These skills help reduce the frequency and intensity of dissociation while increasing a sense of control and predictability."
      },
      {
        title: "Your Path to Integration",
        description: "Recovery from dissociative disorders involves developing greater internal communication, cooperation, and eventually integration of dissociated aspects of self. Our therapists provide compassionate guidance through this process, respecting the unique journey of each client. With appropriate treatment, individuals with dissociative disorders can experience significant reduction in symptoms and improved quality of life."
      }
    ],
    faqs: [
      {
        question: "How are dissociative disorders diagnosed?",
        answer: "Dissociative disorders are diagnosed through comprehensive psychological assessment by qualified mental health professionals. The evaluation typically includes clinical interviews, standardized assessments, and consideration of symptoms and history. Since dissociative symptoms can overlap with other conditions, thorough assessment is important for accurate diagnosis."
      },
      {
        question: "Is dissociation the same as having multiple personalities?",
        answer: "Dissociation exists on a spectrum. While Dissociative Identity Disorder (formerly called multiple personality disorder) involves distinct identity states, many people experience milder forms of dissociation like depersonalization (feeling detached from oneself) or derealization (feeling the world is unreal). All forms of dissociation involve some degree of disconnection from full awareness of self, surroundings, or experiences."
      },
      {
        question: "How long does treatment for dissociative disorders take?",
        answer: "Treatment for dissociative disorders is typically longer-term, often lasting several years, especially for more complex presentations like Dissociative Identity Disorder. The pace of treatment is determined by the client's needs and readiness. Treatment focuses first on stabilization and symptom management before addressing traumatic material, with integration work coming later in the process."
      }
    ],
    relatedServices: [
      {
        title: "Trauma & PTSD Therapy",
        url: "/services/trauma-ptsd-therapy"
      },
      {
        title: "Anxiety Therapy",
        url: "/services/anxiety-therapy"
      },
      {
        title: "Depression Therapy",
        url: "/services/depression-therapy"
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

export default DissociativeDisordersTherapy;
