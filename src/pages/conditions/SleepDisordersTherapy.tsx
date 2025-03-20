
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import SEOHead from '../../components/SEOHead';

const SleepDisordersTherapy = () => {
  const pageData = {
    title: "Sleep Disorders Treatment",
    description: "Effective treatment for insomnia, sleep anxiety, and other sleep-related issues in Havertown, PA.",
    pageTitle: "Sleep Disorders Treatment | Sunrise Human Care Services",
    metaDescription: "Effective treatment for insomnia and sleep-related issues in Havertown, PA. Evidence-based approaches including CBT-I and relaxation techniques.",
    serviceType: "Sleep Disorders Treatment",
    canonicalUrl: "/sleep-disorders-treatment-havertown-pa",
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
        url: "/anxiety-therapy-havertown-pa"
      },
      {
        title: "Depression Therapy",
        url: "/depression-therapy-havertown-pa"
      },
      {
        title: "Stress Management",
        url: "/stress-management-havertown-pa"
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
        {/* Service-specific content */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 font-playfair">
                  Our Approach to Sleep Disorders Treatment
                </h2>
                
                <div className="space-y-4">
                  <p>
                    At Sunrise Human Care Services in Havertown, PA, we provide evidence-based treatment for a range of sleep disorders. Our approach begins with a comprehensive sleep assessment to understand your specific sleep patterns, habits, and factors that may be interfering with restful sleep.
                  </p>
                  
                  <p>
                    For insomnia, which is the most common sleep disorder, we primarily use Cognitive-Behavioral Therapy for Insomnia (CBT-I), the gold-standard treatment recommended by sleep medicine experts. This structured approach helps you identify and change thoughts and behaviors that cause or worsen sleep problems.
                  </p>
                  
                  <p>
                    Beyond insomnia, we address sleep-related anxiety, nightmares, circadian rhythm disorders, and the psychological aspects of other sleep conditions. We work collaboratively with medical providers when necessary to ensure comprehensive care for complex sleep problems.
                  </p>
                  
                  <p>
                    Our goal is to help you develop healthy sleep habits and thought patterns that support natural, restorative sleep without ongoing reliance on medication or therapy.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-sunrise-100/30">
                <h3 className="text-xl font-semibold mb-4 font-playfair">
                  Our Sleep Disorders Treatment Helps With:
                </h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Insomnia (difficulty falling or staying asleep)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Sleep anxiety and worry about sleep</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Nightmares and disturbing dreams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Circadian rhythm disorders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Psychological aspects of sleep apnea</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Sleep-related behaviors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Sleep disruption due to stress or lifestyle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Sleep issues related to depression or anxiety</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ServicePageLayout>
    </>
  );
};

export default SleepDisordersTherapy;
