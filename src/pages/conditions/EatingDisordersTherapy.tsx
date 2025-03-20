
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import SEOHead from '../../components/SEOHead';

const EatingDisordersTherapy = () => {
  const pageData = {
    title: "Eating Disorders Treatment",
    description: "Specialized treatment for anorexia, bulimia, binge eating disorder, and disordered eating in Havertown, PA.",
    pageTitle: "Eating Disorders Treatment | Sunrise Human Care Services",
    metaDescription: "Specialized treatment for anorexia, bulimia, binge eating disorder and disordered eating in Havertown, PA. Comprehensive therapy and nutritional support.",
    serviceType: "Eating Disorders Treatment",
    canonicalUrl: "/eating-disorders-treatment-havertown-pa",
    heroImage: "/images/Therapy-in-havertown.webp",
    benefits: [
      "Comprehensive assessment and diagnosis",
      "Personalized treatment planning",
      "Individual therapy using evidence-based approaches",
      "Nutritional counseling coordination",
      "Body image work",
      "Family involvement when appropriate",
      "Medical monitoring coordination"
    ],
    approaches: [
      {
        title: "Understanding Eating Disorders",
        description: "Eating disorders are serious mental health conditions characterized by disturbed eating behaviors and distressing thoughts and emotions. They include anorexia nervosa, bulimia nervosa, binge eating disorder, and other specified feeding or eating disorders. These conditions can have severe physical and emotional consequences, but recovery is possible with proper treatment."
      },
      {
        title: "Our Approach to Eating Disorder Treatment",
        description: "At Sunrise Human Care Services, we provide specialized eating disorder treatment that addresses both the psychological and physical aspects of these complex conditions. Our multidisciplinary approach combines evidence-based psychotherapy with nutritional guidance and medical monitoring when needed. We focus on improving eating behaviors, addressing underlying emotional issues, and developing a healthier relationship with food and body image."
      },
      {
        title: "Treatment Methods",
        description: "Our treatment methods include cognitive-behavioral therapy (CBT), dialectical behavior therapy (DBT), acceptance and commitment therapy (ACT), and family-based treatment when appropriate. We work collaboratively with nutritionists, physicians, and other specialists to ensure comprehensive care. Our goal is to help you develop sustainable skills for recovery and long-term well-being."
      },
      {
        title: "Addressing Body Image",
        description: "Body image disturbance is a central feature of many eating disorders. Our therapists help clients explore and challenge negative body image, develop body acceptance, and reduce body-checking behaviors. We work to shift focus from appearance to body functionality and overall health, supporting a more positive relationship with your body."
      },
      {
        title: "Your Path to Recovery",
        description: "Recovery from an eating disorder is possible. Our compassionate team provides the support, skills, and guidance needed to overcome disordered eating patterns and develop a healthier relationship with food and your body. We recognize that each person's journey is unique, and we tailor our approach to your specific needs, challenges, and goals."
      }
    ],
    faqs: [
      {
        question: "How do I know if I or my loved one has an eating disorder?",
        answer: "Warning signs include preoccupation with weight, food, and body image; restrictive eating; binge eating; purging behaviors; excessive exercise; and body dissatisfaction. A comprehensive assessment by a healthcare professional is important for diagnosis."
      },
      {
        question: "How long does eating disorder treatment take?",
        answer: "The duration of treatment varies based on the severity of the eating disorder, individual needs, and treatment response. Recovery is typically a gradual process that can take months to years, with ongoing support often being beneficial."
      },
      {
        question: "Can someone fully recover from an eating disorder?",
        answer: "Yes, full recovery is possible. Many people with eating disorders recover completely with proper treatment. Recovery involves not only changes in eating behaviors but also addressing underlying psychological issues and developing a healthier relationship with food and body image."
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
        title: "Family Therapy",
        url: "/family-therapy-havertown-pa"
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
                  Our Approach to Eating Disorder Treatment
                </h2>
                
                <div className="space-y-4">
                  <p>
                    At Sunrise Human Care Services in Havertown, PA, we understand that eating disorders are complex conditions that affect both physical and mental health. Our comprehensive treatment approach begins with a thorough assessment to understand your specific symptoms, history, and the unique factors contributing to your eating disorder.
                  </p>
                  
                  <p>
                    We take a collaborative, multidisciplinary approach that may include therapists, nutritionists, and medical providers working together to address all aspects of your recovery. Our treatment combines evidence-based psychotherapy with nutritional counseling and medical monitoring when needed.
                  </p>
                  
                  <p>
                    Throughout treatment, we focus not only on normalizing eating behaviors but also addressing the underlying psychological issues that maintain the eating disorder. We help you develop a healthier relationship with food, your body, and your emotions, while building skills for long-term recovery.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-sunrise-100/30">
                <h3 className="text-xl font-semibold mb-4 font-playfair">
                  Our Eating Disorder Treatment Helps With:
                </h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Anorexia Nervosa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Bulimia Nervosa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Binge Eating Disorder</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Avoidant/Restrictive Food Intake Disorder (ARFID)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Other Specified Feeding or Eating Disorders (OSFED)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Body Image Concerns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Compulsive Exercise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sunrise-500 mr-2">✓</span>
                    <span>Disordered Eating Patterns</span>
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

export default EatingDisordersTherapy;
