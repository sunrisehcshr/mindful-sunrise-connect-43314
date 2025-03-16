
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import SEOHead from '../../components/SEOHead';

const EatingDisordersTherapy = () => {
  const pageData = {
    title: "Eating Disorders Treatment",
    description: "Specialized treatment for anorexia, bulimia, binge eating disorder, and disordered eating in Havertown, PA.",
    pageTitle: "Eating Disorders Treatment | Sunrise Human Care Services",
    metaDescription: "Specialized treatment for anorexia, bulimia, binge eating disorder and disordered eating in Havertown, PA. Comprehensive therapy and nutritional support.",
    serviceType: "Eating Disorders Treatment",
    canonicalUrl: "/conditions/eating-disorders-therapy",
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
        url: "/services/depression-therapy"
      },
      {
        title: "Anxiety Therapy",
        url: "/services/anxiety-therapy"
      },
      {
        title: "Family Therapy",
        url: "/services/family-therapy"
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
        {/* Empty div to satisfy the children prop requirement */}
        <div></div>
      </ServicePageLayout>
    </>
  );
};

export default EatingDisordersTherapy;
