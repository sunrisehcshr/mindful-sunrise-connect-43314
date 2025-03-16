
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import SEOHead from '../../components/SEOHead';

const BPDTherapy = () => {
  const serviceInfo = {
    title: "Borderline Personality Disorder Treatment",
    heroImage: "/images/Therapy-in-havertown.webp",
    description: "Specialized therapy for Borderline Personality Disorder (BPD) and emotional regulation in Havertown, PA.",
    details: [
      "Comprehensive psychiatric assessment",
      "Dialectical Behavior Therapy (DBT)",
      "Schema Therapy when appropriate",
      "Emotional regulation skills training",
      "Interpersonal effectiveness development",
      "Mindfulness and distress tolerance techniques",
      "Crisis management strategies"
    ],
    content: [
      {
        heading: "Understanding Borderline Personality Disorder",
        text: "Borderline Personality Disorder (BPD) is a mental health condition characterized by difficulties with emotion regulation, impulse control, interpersonal relationships, and self-image. Individuals with BPD often experience intense emotions, fear of abandonment, unstable relationships, and identity disturbances. While challenging, BPD is treatable with specialized therapeutic approaches."
      },
      {
        heading: "Our Approach to BPD Treatment",
        text: "At Sunrise Human Care Services, we provide evidence-based treatment for Borderline Personality Disorder using approaches specifically developed to address its complex symptoms. Our therapists are specially trained in Dialectical Behavior Therapy (DBT) and Schema Therapy, which have shown effectiveness in treating BPD. We create a validating, supportive environment where clients can develop new skills and insights."
      },
      {
        heading: "Dialectical Behavior Therapy",
        text: "DBT is a comprehensive treatment that combines individual therapy, skills training, and coaching to help individuals manage intense emotions, reduce self-destructive behaviors, and improve relationships. Core skills include mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness. This approach helps clients build a life worth living by balancing acceptance and change strategies."
      },
      {
        heading: "Building Relationship Skills",
        text: "Relationship difficulties are central to BPD. Our therapists help clients understand their relationship patterns, develop healthier communication styles, set appropriate boundaries, and build more stable, satisfying connections with others. We address fears of abandonment and rejection while fostering greater interpersonal security and trust."
      },
      {
        heading: "Your Path to Stability",
        text: "Recovery from BPD involves gradual progress toward better emotional regulation, more stable relationships, and a stronger sense of self. Our compassionate team is committed to supporting your journey toward greater stability and fulfillment. With consistent treatment, individuals with BPD can experience significant improvement in symptoms and quality of life."
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="Borderline Personality Disorder Treatment | Sunrise Human Care Services" 
        description="Specialized treatment for Borderline Personality Disorder in Havertown, PA. Dialectical Behavior Therapy (DBT) and evidence-based approaches for emotional regulation." 
      />
      <Navbar />
      <ServicePageLayout serviceInfo={serviceInfo} />
      <Footer />
    </>
  );
};

export default BPDTherapy;
