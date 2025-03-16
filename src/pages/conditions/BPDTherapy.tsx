
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import SEOHead from '../../components/SEOHead';
import { Heart } from 'lucide-react';

const BPDTherapy = () => {
  const pageData = {
    title: "Borderline Personality Disorder Treatment",
    description: "Specialized therapy for Borderline Personality Disorder (BPD) and emotional regulation in Havertown, PA.",
    pageTitle: "Borderline Personality Disorder Treatment | Sunrise Human Care Services",
    metaDescription: "Specialized treatment for Borderline Personality Disorder in Havertown, PA. Dialectical Behavior Therapy (DBT) and evidence-based approaches for emotional regulation.",
    serviceType: "Borderline Personality Disorder Treatment",
    canonicalUrl: "/conditions/bpd-therapy",
    heroImage: "/images/Therapy-in-havertown.webp",
    icon: <Heart className="h-12 w-12" />,
    benefits: [
      "Comprehensive psychiatric assessment",
      "Dialectical Behavior Therapy (DBT)",
      "Schema Therapy when appropriate",
      "Emotional regulation skills training",
      "Interpersonal effectiveness development",
      "Mindfulness and distress tolerance techniques",
      "Crisis management strategies"
    ],
    approaches: [
      {
        title: "Understanding Borderline Personality Disorder",
        description: "Borderline Personality Disorder (BPD) is a mental health condition characterized by difficulties with emotion regulation, impulse control, interpersonal relationships, and self-image. Individuals with BPD often experience intense emotions, fear of abandonment, unstable relationships, and identity disturbances. While challenging, BPD is treatable with specialized therapeutic approaches."
      },
      {
        title: "Our Approach to BPD Treatment",
        description: "At Sunrise Human Care Services, we provide evidence-based treatment for Borderline Personality Disorder using approaches specifically developed to address its complex symptoms. Our therapists are specially trained in Dialectical Behavior Therapy (DBT) and Schema Therapy, which have shown effectiveness in treating BPD. We create a validating, supportive environment where clients can develop new skills and insights."
      },
      {
        title: "Dialectical Behavior Therapy",
        description: "DBT is a comprehensive treatment that combines individual therapy, skills training, and coaching to help individuals manage intense emotions, reduce self-destructive behaviors, and improve relationships. Core skills include mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness. This approach helps clients build a life worth living by balancing acceptance and change strategies."
      },
      {
        title: "Building Relationship Skills",
        description: "Relationship difficulties are central to BPD. Our therapists help clients understand their relationship patterns, develop healthier communication styles, set appropriate boundaries, and build more stable, satisfying connections with others. We address fears of abandonment and rejection while fostering greater interpersonal security and trust."
      },
      {
        title: "Your Path to Stability",
        description: "Recovery from BPD involves gradual progress toward better emotional regulation, more stable relationships, and a stronger sense of self. Our compassionate team is committed to supporting your journey toward greater stability and fulfillment. With consistent treatment, individuals with BPD can experience significant improvement in symptoms and quality of life."
      }
    ],
    faqs: [
      {
        question: "How is Borderline Personality Disorder diagnosed?",
        answer: "BPD is diagnosed through a comprehensive psychological assessment conducted by a qualified mental health professional. The assessment includes evaluating symptoms, personal history, and the impact of symptoms on daily functioning. BPD diagnosis is based on specific criteria outlined in diagnostic manuals like the DSM-5."
      },
      {
        question: "Is recovery from BPD possible?",
        answer: "Yes, recovery from BPD is definitely possible. With appropriate treatment, particularly Dialectical Behavior Therapy (DBT) or Schema Therapy, many individuals experience significant reduction in symptoms and improved quality of life. The recovery process typically involves learning new skills for emotional regulation, interpersonal effectiveness, and distress tolerance."
      },
      {
        question: "How long does treatment for BPD usually take?",
        answer: "Treatment for BPD is typically longer-term, often lasting a year or more. Standard DBT programs usually run for at least six months to a year, with many individuals benefiting from continued therapy afterward. The timeline varies based on individual needs, symptom severity, and progress in treatment."
      }
    ],
    relatedServices: [
      {
        title: "Depression Therapy",
        url: "/services/depression-therapy"
      },
      {
        title: "Anxiety Therapy",
        url: "/services/anxiety-therapy"
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
        icon={pageData.icon}
      >
        {/* Content goes here if needed */}
      </ServicePageLayout>
    </>
  );
};

export default BPDTherapy;
