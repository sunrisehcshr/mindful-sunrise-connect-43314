
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import SEOHead from '../../components/SEOHead';

const EatingDisordersTherapy = () => {
  const serviceInfo = {
    title: "Eating Disorders Treatment",
    heroImage: "/images/Therapy-in-havertown.webp",
    description: "Specialized treatment for anorexia, bulimia, binge eating disorder, and disordered eating in Havertown, PA.",
    details: [
      "Comprehensive assessment and diagnosis",
      "Personalized treatment planning",
      "Individual therapy using evidence-based approaches",
      "Nutritional counseling coordination",
      "Body image work",
      "Family involvement when appropriate",
      "Medical monitoring coordination"
    ],
    content: [
      {
        heading: "Understanding Eating Disorders",
        text: "Eating disorders are serious mental health conditions characterized by disturbed eating behaviors and distressing thoughts and emotions. They include anorexia nervosa, bulimia nervosa, binge eating disorder, and other specified feeding or eating disorders. These conditions can have severe physical and emotional consequences, but recovery is possible with proper treatment."
      },
      {
        heading: "Our Approach to Eating Disorder Treatment",
        text: "At Sunrise Human Care Services, we provide specialized eating disorder treatment that addresses both the psychological and physical aspects of these complex conditions. Our multidisciplinary approach combines evidence-based psychotherapy with nutritional guidance and medical monitoring when needed. We focus on improving eating behaviors, addressing underlying emotional issues, and developing a healthier relationship with food and body image."
      },
      {
        heading: "Treatment Methods",
        text: "Our treatment methods include cognitive-behavioral therapy (CBT), dialectical behavior therapy (DBT), acceptance and commitment therapy (ACT), and family-based treatment when appropriate. We work collaboratively with nutritionists, physicians, and other specialists to ensure comprehensive care. Our goal is to help you develop sustainable skills for recovery and long-term well-being."
      },
      {
        heading: "Addressing Body Image",
        text: "Body image disturbance is a central feature of many eating disorders. Our therapists help clients explore and challenge negative body image, develop body acceptance, and reduce body-checking behaviors. We work to shift focus from appearance to body functionality and overall health, supporting a more positive relationship with your body."
      },
      {
        heading: "Your Path to Recovery",
        text: "Recovery from an eating disorder is possible. Our compassionate team provides the support, skills, and guidance needed to overcome disordered eating patterns and develop a healthier relationship with food and your body. We recognize that each person's journey is unique, and we tailor our approach to your specific needs, challenges, and goals."
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="Eating Disorders Treatment | Sunrise Human Care Services" 
        description="Specialized treatment for anorexia, bulimia, binge eating disorder and disordered eating in Havertown, PA. Comprehensive therapy and nutritional support." 
      />
      <Navbar />
      <ServicePageLayout serviceInfo={serviceInfo} />
      <Footer />
    </>
  );
};

export default EatingDisordersTherapy;
