
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import SEOHead from '../../components/SEOHead';

const SubstanceUseTherapy = () => {
  const serviceInfo = {
    title: "Substance Use Treatment",
    heroImage: "/images/Therapy-in-havertown.webp",
    description: "Evidence-based treatment for alcohol and drug addiction, recovery support, and relapse prevention in Havertown, PA.",
    details: [
      "Comprehensive assessment and evaluation",
      "Individualized treatment planning",
      "Evidence-based therapeutic approaches",
      "Dual diagnosis treatment for co-occurring disorders",
      "Relapse prevention strategies",
      "Family involvement and education",
      "Aftercare planning and ongoing support"
    ],
    content: [
      {
        heading: "Understanding Substance Use Disorders",
        text: "Substance use disorders involve patterns of symptoms resulting from using substances that you continue to take despite experiencing problems from their use. These disorders affect brain function and behavior, leading to an inability to control the use of substances including alcohol, medications, and illicit drugs. With proper treatment and support, recovery is possible."
      },
      {
        heading: "Our Approach to Substance Use Treatment",
        text: "At Sunrise Human Care Services, we provide compassionate, non-judgmental care for individuals struggling with substance use disorders. Our approach is comprehensive, addressing not only the substance use itself but also any underlying mental health conditions, trauma, or personal challenges that may contribute to addiction. We believe in meeting clients where they are in their recovery journey and supporting sustainable change."
      },
      {
        heading: "Evidence-Based Treatment Methods",
        text: "Our substance use treatment program utilizes evidence-based approaches including cognitive-behavioral therapy (CBT), motivational interviewing, contingency management, and mindfulness-based relapse prevention. We help clients identify triggers, develop coping skills, modify unhealthy thought patterns, and build a lifestyle supportive of long-term recovery."
      },
      {
        heading: "Addressing Co-occurring Disorders",
        text: "Many individuals with substance use disorders also experience co-occurring mental health conditions such as depression, anxiety, or PTSD. Our integrated approach treats both conditions simultaneously for better outcomes. Our therapists are trained to address the complex interactions between substance use and mental health symptoms."
      },
      {
        heading: "Your Path to Recovery",
        text: "Recovery from substance use disorders is a personal journey that looks different for everyone. Our goal is to provide you with the tools, support, and guidance needed to achieve and maintain recovery according to your definition of success. We focus on building resilience, developing healthy coping mechanisms, and creating a fulfilling life without dependence on substances."
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="Substance Use Treatment | Sunrise Human Care Services" 
        description="Comprehensive substance use and addiction treatment in Havertown, PA. Evidence-based approaches for alcohol and drug addiction recovery and relapse prevention." 
      />
      <Navbar />
      <ServicePageLayout serviceInfo={serviceInfo} />
      <Footer />
    </>
  );
};

export default SubstanceUseTherapy;
