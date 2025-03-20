
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import SEOHead from '../../components/SEOHead';

const SubstanceUseTherapy = () => {
  const pageData = {
    title: "Substance Use Treatment",
    description: "Evidence-based treatment for alcohol and drug addiction, recovery support, and relapse prevention in Havertown, PA.",
    pageTitle: "Substance Use Treatment | Sunrise Human Care Services",
    metaDescription: "Comprehensive substance use and addiction treatment in Havertown, PA. Evidence-based approaches for alcohol and drug addiction recovery and relapse prevention.",
    serviceType: "Substance Use Counseling",
    canonicalUrl: "/substance-use-treatment-havertown-pa",
    heroImage: "/images/Therapy-in-havertown.webp",
    benefits: [
      "Comprehensive assessment and evaluation",
      "Individualized treatment planning",
      "Evidence-based therapeutic approaches",
      "Dual diagnosis treatment for co-occurring disorders",
      "Relapse prevention strategies",
      "Family involvement and education",
      "Aftercare planning and ongoing support"
    ],
    approaches: [
      {
        title: "Understanding Substance Use Disorders",
        description: "Substance use disorders involve patterns of symptoms resulting from using substances that you continue to take despite experiencing problems from their use. These disorders affect brain function and behavior, leading to an inability to control the use of substances including alcohol, medications, and illicit drugs. With proper treatment and support, recovery is possible."
      },
      {
        title: "Our Approach to Substance Use Treatment",
        description: "At Sunrise Human Care Services, we provide compassionate, non-judgmental care for individuals struggling with substance use disorders. Our approach is comprehensive, addressing not only the substance use itself but also any underlying mental health conditions, trauma, or personal challenges that may contribute to addiction. We believe in meeting clients where they are in their recovery journey and supporting sustainable change."
      },
      {
        title: "Evidence-Based Treatment Methods",
        description: "Our substance use treatment program utilizes evidence-based approaches including cognitive-behavioral therapy (CBT), motivational interviewing, contingency management, and mindfulness-based relapse prevention. We help clients identify triggers, develop coping skills, modify unhealthy thought patterns, and build a lifestyle supportive of long-term recovery."
      },
      {
        title: "Addressing Co-occurring Disorders",
        description: "Many individuals with substance use disorders also experience co-occurring mental health conditions such as depression, anxiety, or PTSD. Our integrated approach treats both conditions simultaneously for better outcomes. Our therapists are trained to address the complex interactions between substance use and mental health symptoms."
      },
      {
        title: "Your Path to Recovery",
        description: "Recovery from substance use disorders is a personal journey that looks different for everyone. Our goal is to provide you with the tools, support, and guidance needed to achieve and maintain recovery according to your definition of success. We focus on building resilience, developing healthy coping mechanisms, and creating a fulfilling life without dependence on substances."
      }
    ],
    faqs: [
      {
        question: "How do I know if I have a substance use disorder?",
        answer: "Signs include using more of a substance than intended, unsuccessful attempts to cut down or stop use, spending significant time obtaining or using the substance, experiencing cravings, failing to fulfill obligations due to use, continuing use despite problems, and developing tolerance or withdrawal symptoms."
      },
      {
        question: "Can I recover from addiction without residential treatment?",
        answer: "Yes, many people successfully recover through outpatient treatment, especially when their substance use is caught early or is not severe. The appropriate level of care depends on factors like the severity of addiction, presence of co-occurring disorders, and available support system."
      },
      {
        question: "How do you handle relapse during treatment?",
        answer: "We view relapse as part of the recovery process rather than a failure. If relapse occurs, we work together to understand triggers, strengthen coping skills, and adjust the treatment plan accordingly. Our non-judgmental approach focuses on learning from setbacks to prevent future relapses."
      }
    ],
    relatedServices: [
      {
        title: "Depression Therapy",
        url: "/depression-therapy-havertown-pa"
      },
      {
        title: "Anxiety Therapy",
        url: "/anxiety-therapy-havertown-pa"
      },
      {
        title: "Trauma & PTSD Therapy",
        url: "/ptsd-therapy-havertown-pa"
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
                  Our Approach to Substance Use Treatment
                </h2>
                
                <div className="space-y-4">
                  <p>
                    At Sunrise Human Care Services in Havertown, PA, we provide compassionate, evidence-based treatment for substance use disorders. Our approach begins with a comprehensive assessment to understand your unique situation, substance use history, and any co-occurring mental health conditions.
                  </p>
                  
                  <p>
                    We recognize that substance use disorders develop for many reasons and often serve as coping mechanisms for underlying issues. Our treatment addresses not only the substance use itself but also the factors that contribute to and maintain addictive patterns.
                  </p>
                  
                  <p>
                    Using proven therapeutic approaches such as Cognitive-Behavioral Therapy (CBT), Motivational Interviewing, and Relapse Prevention, we help you identify triggers, develop healthier coping skills, change unhelpful thought patterns, and build a lifestyle that supports recovery.
                  </p>
                  
                  <p>
                    Our dual diagnosis capability ensures that co-occurring mental health conditions receive appropriate attention alongside substance use treatment. This integrated approach leads to better outcomes and more sustainable recovery.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-sunrise-100/30">
                <h3 className="text-xl font-semibold mb-4 font-playfair">
                  Our Substance Use Treatment Helps With:
                </h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Alcohol use disorder</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Opioid use disorder</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Cannabis use disorder</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Stimulant use disorders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Prescription medication misuse</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Dual diagnosis (co-occurring disorders)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Relapse prevention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Recovery maintenance</span>
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

export default SubstanceUseTherapy;
