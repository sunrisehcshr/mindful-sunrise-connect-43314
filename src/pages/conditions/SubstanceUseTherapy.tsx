
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const SubstanceUseTherapy = () => {
  return (
    <ServicePageLayout
      title="Substance Use Treatment in Havertown, PA"
      description="Evidence-based treatment for alcohol and drug addiction, recovery support, and relapse prevention in Havertown, PA."
      pageTitle="Substance Use Treatment | Sunrise Human Care Services | Havertown, PA"
      metaDescription="Comprehensive substance use and addiction treatment in Havertown, PA. Evidence-based approaches for alcohol and drug addiction recovery and relapse prevention."
      serviceType="Substance Use Counseling"
      canonicalUrl="https://sunrisehumancare.com/substance-use-treatment-havertown-pa"
      benefits={[
        "Comprehensive assessment and evaluation",
        "Individualized treatment planning",
        "Evidence-based therapeutic approaches",
        "Dual diagnosis treatment for co-occurring disorders",
        "Relapse prevention strategies",
        "Family involvement and education",
        "Aftercare planning and ongoing support"
      ]}
      approaches={[
        {
          title: "Cognitive Behavioral Therapy (CBT)",
          description: "Identify and change thoughts and behaviors that contribute to substance use, developing healthier coping strategies and relapse prevention skills."
        },
        {
          title: "Motivational Interviewing",
          description: "Enhance internal motivation for change by exploring and resolving ambivalence about recovery and treatment engagement."
        },
        {
          title: "Contingency Management",
          description: "Reinforce positive behaviors like abstinence and treatment attendance through tangible incentives and recognition."
        },
        {
          title: "Mindfulness-Based Relapse Prevention",
          description: "Integrate mindfulness practices with cognitive-behavioral strategies to prevent and manage relapse triggers."
        },
        {
          title: "Family Therapy",
          description: "Involve family members in the recovery process to improve communication, set healthy boundaries, and build a supportive home environment."
        }
      ]}
      faqs={[
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
      ]}
      relatedServices={[
        { title: "Depression Therapy", url: "/depression-therapy-havertown-pa" },
        { title: "Anxiety Therapy", url: "/anxiety-therapy-havertown-pa" },
        { title: "Trauma & PTSD Therapy", url: "/ptsd-therapy-havertown-pa" }
      ]}
    >
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
  );
};

export default SubstanceUseTherapy;
