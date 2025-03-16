
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import SEOHead from '../../components/SEOHead';

const SchizophreniaTherapy = () => {
  const serviceInfo = {
    title: "Schizophrenia Treatment",
    heroImage: "/images/Therapy-in-havertown.webp",
    description: "Specialized treatment for schizophrenia and other psychotic disorders in Havertown, PA.",
    details: [
      "Comprehensive assessment and diagnosis",
      "Medication management coordination",
      "Individual therapy using evidence-based approaches",
      "Family education and support",
      "Skills training for daily functioning",
      "Crisis intervention planning",
      "Ongoing symptom monitoring and management"
    ],
    content: [
      {
        heading: "Understanding Schizophrenia",
        text: "Schizophrenia is a complex mental health condition characterized by distortions in thinking, perception, emotions, language, sense of self, and behavior. Common symptoms include hallucinations, delusions, disorganized thinking, and reduced emotional expression. Though it affects about 1% of the population, proper treatment can help manage symptoms and improve quality of life."
      },
      {
        heading: "Our Approach to Schizophrenia Treatment",
        text: "At Sunrise Human Care Services, we offer a comprehensive approach to schizophrenia treatment that combines psychotherapy with psychiatric care. Our treatment approach is tailored to each individual's unique needs, focusing on symptom management, reality testing, social skills development, and integration into community life. We work closely with individuals and their families to develop coping strategies and improve overall functioning."
      },
      {
        heading: "Components of Effective Treatment",
        text: "Effective schizophrenia treatment typically includes medication management, cognitive behavioral therapy for psychosis (CBTp), family interventions, social skills training, and community support. Our team coordinates all aspects of care to provide consistency and comprehensive support. We emphasize a recovery-oriented approach that focuses on personal goals, strengths, and possibilities despite persistent symptoms."
      },
      {
        heading: "Supporting Families",
        text: "We recognize the important role families play in supporting loved ones with schizophrenia. Our services include family education sessions, communication skills training, and guidance on supporting recovery while maintaining healthy boundaries. Family involvement often improves treatment outcomes and reduces relapse rates."
      },
      {
        heading: "Your Path to Stability",
        text: "Living with schizophrenia presents challenges, but with proper treatment and support, individuals can lead fulfilling lives. Our treatment team is committed to providing compassionate, evidence-based care that helps reduce psychotic symptoms, prevent relapse, improve social functioning, and enhance quality of life. We work with you to develop a treatment plan that addresses your unique needs and goals."
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="Schizophrenia Treatment | Sunrise Human Care Services" 
        description="Comprehensive treatment for schizophrenia and psychotic disorders in Havertown, PA. Evidence-based therapy approaches, medication management, and family support." 
      />
      <Navbar />
      <ServicePageLayout serviceInfo={serviceInfo} />
      <Footer />
    </>
  );
};

export default SchizophreniaTherapy;
