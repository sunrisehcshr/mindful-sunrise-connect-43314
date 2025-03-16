
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import SEOHead from '../../components/SEOHead';

const SleepDisordersTherapy = () => {
  const serviceInfo = {
    title: "Sleep Disorders Treatment",
    heroImage: "/images/Therapy-in-havertown.webp",
    description: "Effective treatment for insomnia, sleep anxiety, and other sleep-related issues in Havertown, PA.",
    details: [
      "Comprehensive sleep assessment",
      "Cognitive-Behavioral Therapy for Insomnia (CBT-I)",
      "Sleep hygiene education",
      "Relaxation and mindfulness techniques",
      "Anxiety management for sleep-related worry",
      "Behavioral interventions for sleep improvement",
      "Ongoing monitoring and adjustment of sleep strategies"
    ],
    content: [
      {
        heading: "Understanding Sleep Disorders",
        text: "Sleep disorders encompass a range of conditions that affect the quality, timing, and amount of sleep, leading to daytime distress and impaired functioning. Common sleep disorders include insomnia, sleep apnea, restless leg syndrome, and circadian rhythm disorders. While medical treatment may be necessary for some conditions, many sleep disorders respond well to psychological interventions."
      },
      {
        heading: "Our Approach to Sleep Disorders Treatment",
        text: "At Sunrise Human Care Services, we provide specialized treatment for sleep disorders using evidence-based approaches that address both the physical and psychological aspects of sleep problems. Our primary focus is on non-medication approaches that help restore natural, restorative sleep patterns through behavioral changes, cognitive restructuring, and lifestyle modifications."
      },
      {
        heading: "Cognitive-Behavioral Therapy for Insomnia",
        text: "CBT-I is a structured program that helps identify and replace thoughts and behaviors that cause or worsen sleep problems with habits that promote sound sleep. Unlike sleeping pills, CBT-I addresses the underlying causes of sleep problems and provides skills that improve sleep over the long term. Components include sleep restriction, stimulus control, sleep hygiene, relaxation training, and cognitive restructuring."
      },
      {
        heading: "Addressing Sleep Anxiety",
        text: "For many people, anxiety about sleep itself becomes a significant barrier to restful nights. We help clients break the cycle of sleep anxiety by addressing worry, racing thoughts, and physical tension that interfere with falling and staying asleep. Our therapists teach practical strategies for calming the mind and body at bedtime."
      },
      {
        heading: "Your Path to Better Sleep",
        text: "Restful, restorative sleep is essential for physical and mental health. Our approach to sleep disorders treatment focuses on sustainable improvements that enhance overall well-being and daytime functioning. With commitment to the treatment process, most clients experience significant improvements in their sleep quality and quantity within a few weeks."
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="Sleep Disorders Treatment | Sunrise Human Care Services" 
        description="Effective treatment for insomnia and sleep-related issues in Havertown, PA. Evidence-based approaches including CBT-I and relaxation techniques." 
      />
      <Navbar />
      <ServicePageLayout serviceInfo={serviceInfo} />
      <Footer />
    </>
  );
};

export default SleepDisordersTherapy;
