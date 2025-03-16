
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import SEOHead from '../../components/SEOHead';

const DissociativeDisordersTherapy = () => {
  const serviceInfo = {
    title: "Dissociative Disorders Treatment",
    heroImage: "/images/Therapy-in-havertown.webp",
    description: "Specialized treatment for dissociative identity disorder and related conditions in Havertown, PA.",
    details: [
      "Comprehensive psychological assessment",
      "Phase-oriented trauma treatment",
      "Safety and stabilization techniques",
      "Grounding and present-moment awareness skills",
      "Identity work and internal communication",
      "Processing of traumatic memories when appropriate",
      "Integration and coordination of daily functioning"
    ],
    content: [
      {
        heading: "Understanding Dissociative Disorders",
        text: "Dissociative disorders are characterized by a disconnection between a person's thoughts, surroundings, actions, and identity. These conditions often develop as a response to trauma and help the person survive overwhelmingly painful experiences. Types include dissociative identity disorder, dissociative amnesia, depersonalization/derealization disorder, and other specified dissociative disorders."
      },
      {
        heading: "Our Approach to Dissociative Disorders",
        text: "At Sunrise Human Care Services, we provide specialized, trauma-informed treatment for dissociative disorders. Our approach emphasizes safety, stabilization, and gradual processing of traumatic experiences at a pace that feels manageable. We recognize dissociation as an adaptive response to overwhelming circumstances and work collaboratively with all aspects of a client's internal system."
      },
      {
        heading: "Phase-Oriented Treatment",
        text: "Our treatment follows a phase-oriented approach that begins with establishing safety and stability, developing skills for managing symptoms, and building resources. Later phases may include processing traumatic memories and working toward greater internal cooperation and integration. Treatment progresses at the client's pace, with ongoing attention to containment and functioning in daily life."
      },
      {
        heading: "Grounding and Present-Focused Skills",
        text: "Dissociative symptoms can be distressing and disruptive. We teach practical grounding techniques that help clients stay connected to the present moment and manage dissociative episodes. These skills help reduce the frequency and intensity of dissociation while increasing a sense of control and predictability."
      },
      {
        heading: "Your Path to Integration",
        text: "Recovery from dissociative disorders involves developing greater internal communication, cooperation, and eventually integration of dissociated aspects of self. Our therapists provide compassionate guidance through this process, respecting the unique journey of each client. With appropriate treatment, individuals with dissociative disorders can experience significant reduction in symptoms and improved quality of life."
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="Dissociative Disorders Treatment | Sunrise Human Care Services" 
        description="Specialized treatment for dissociative disorders in Havertown, PA. Trauma-informed therapy focusing on safety, stabilization, and integration." 
      />
      <Navbar />
      <ServicePageLayout serviceInfo={serviceInfo} />
      <Footer />
    </>
  );
};

export default DissociativeDisordersTherapy;
