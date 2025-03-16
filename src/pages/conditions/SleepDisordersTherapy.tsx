
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import SEOHead from '../../components/SEOHead';

const SleepDisordersTherapy = () => {
  const pageData = {
    title: "Sleep Disorders Treatment",
    description: "Effective treatment for insomnia, sleep anxiety, and other sleep-related issues in Havertown, PA.",
    pageTitle: "Sleep Disorders Treatment | Sunrise Human Care Services",
    metaDescription: "Effective treatment for insomnia and sleep-related issues in Havertown, PA. Evidence-based approaches including CBT-I and relaxation techniques.",
    serviceType: "Sleep Disorders Treatment",
    canonicalUrl: "/conditions/sleep-disorders-therapy",
    heroImage: "/images/Therapy-in-havertown.webp",
    benefits: [
      "Comprehensive sleep assessment",
      "Cognitive-Behavioral Therapy for Insomnia (CBT-I)",
      "Sleep hygiene education",
      "Relaxation and mindfulness techniques",
      "Anxiety management for sleep-related worry",
      "Behavioral interventions for sleep improvement",
      "Ongoing monitoring and adjustment of sleep strategies"
    ],
    approaches: [
      {
        title: "Understanding Sleep Disorders",
        description: "Sleep disorders encompass a range of conditions that affect the quality, timing, and amount of sleep, leading to daytime distress and impaired functioning. Common sleep disorders include insomnia, sleep apnea, restless leg syndrome, and circadian rhythm disorders. While medical treatment may be necessary for some conditions, many sleep disorders respond well to psychological interventions."
      },
      {
        title: "Our Approach to Sleep Disorders Treatment",
        description: "At Sunrise Human Care Services, we provide specialized treatment for sleep disorders using evidence-based approaches that address both the physical and psychological aspects of sleep problems. Our primary focus is on non-medication approaches that help restore natural, restorative sleep patterns through behavioral changes, cognitive restructuring, and lifestyle modifications."
      },
      {
        title: "Cognitive-Behavioral Therapy for Insomnia",
        description: "CBT-I is a structured program that helps identify and replace thoughts and behaviors that cause or worsen sleep problems with habits that promote sound sleep. Unlike sleeping pills, CBT-I addresses the underlying causes of sleep problems and provides skills that improve sleep over the long term. Components include sleep restriction, stimulus control, sleep hygiene, relaxation training, and cognitive restructuring."
      },
      {
        title: "Addressing Sleep Anxiety",
        description: "For many people, anxiety about sleep itself becomes a significant barrier to restful nights. We help clients break the cycle of sleep anxiety by addressing worry, racing thoughts, and physical tension that interfere with falling and staying asleep. Our therapists teach practical strategies for calming the mind and body at bedtime."
      },
      {
        title: "Your Path to Better Sleep",
        description: "Restful, restorative sleep is essential for physical and mental health. Our approach to sleep disorders treatment focuses on sustainable improvements that enhance overall well-being and daytime functioning. With commitment to the treatment process, most clients experience significant improvements in their sleep quality and quantity within a few weeks."
      }
    ],
    faqs: [
      {
        question: "How do I know if I have a sleep disorder?",
        answer: "Common signs include difficulty falling or staying asleep, excessive daytime sleepiness, irregular sleep patterns, unusual behaviors during sleep, and feeling unrefreshed after sleep. If sleep problems persist for more than a few weeks or interfere with daily functioning, a professional assessment is recommended."
      },
      {
        question: "Is medication necessary for treating sleep disorders?",
        answer: "Not always. While medication may be helpful in some cases, many sleep disorders can be effectively treated with non-medication approaches like CBT-I, which has been shown to produce long-lasting improvements in sleep quality without the side effects or dependencies associated with sleep medications."
      },
      {
        question: "How long does sleep therapy take to work?",
        answer: "Many people begin to see improvements in their sleep within 2-4 weeks of starting CBT-I or other behavioral sleep treatments. Full benefits typically develop over 6-8 weeks of consistent practice of the recommended strategies."
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
        title: "Stress Management",
        url: "/conditions/stress-management"
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

export default SleepDisordersTherapy;
