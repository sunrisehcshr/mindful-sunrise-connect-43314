
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import SEOHead from '../../components/SEOHead';

const GriefTherapy = () => {
  const pageData = {
    title: "Grief & Loss Therapy",
    description: "Compassionate support for bereavement, complicated grief, and adapting to significant losses in Havertown, PA.",
    pageTitle: "Grief & Loss Therapy | Sunrise Human Care Services",
    metaDescription: "Compassionate grief counseling and bereavement support in Havertown, PA. Professional therapy for coping with loss and complicated grief.",
    serviceType: "Grief & Loss Therapy",
    canonicalUrl: "/conditions/grief-therapy",
    heroImage: "/images/Therapy-in-havertown.webp",
    benefits: [
      "Grief assessment and education",
      "Processing complex emotions",
      "Making meaning of your loss",
      "Coping with anniversary reactions",
      "Adapting to life changes",
      "Memorial rituals and continuing bonds",
      "Building resilience through loss"
    ],
    approaches: [
      {
        title: "Understanding Grief and Loss",
        description: "Grief is a natural response to loss that can affect every dimension of our lives—emotional, physical, cognitive, social, and spiritual. While grief commonly occurs after the death of a loved one, it can also result from other significant losses such as relationship endings, health changes, job loss, or major life transitions. Everyone's grief journey is unique, with no single 'right way' to grieve."
      },
      {
        title: "Our Approach to Grief Therapy",
        description: "At Sunrise Human Care Services, we provide compassionate grief therapy that honors your unique experience of loss and supports your healing process. Our approach is non-judgmental and recognizes that grief doesn't follow a predictable timeline or pattern. We create a safe space where all emotions related to your loss can be expressed and processed, helping you navigate the grief journey at your own pace."
      },
      {
        title: "Addressing Complicated Grief",
        description: "Sometimes grief becomes complicated or prolonged, making it difficult to adapt to the loss and move forward in life. This can happen due to traumatic circumstances of the loss, multiple concurrent losses, or other factors. Our therapists are trained to recognize and address complicated grief, providing specialized interventions that help resolve barriers to the natural grief process."
      },
      {
        title: "Finding Meaning and Moving Forward",
        description: "An important aspect of grief therapy involves making meaning of your loss and finding ways to move forward while honoring what or who has been lost. This doesn't mean 'getting over' the loss, but rather integrating it into your life story and identity. We help clients develop continuing bonds with deceased loved ones, create meaningful rituals, and gradually reinvest in life while carrying their loved one's memory."
      },
      {
        title: "Your Path Through Grief",
        description: "While grief may never completely end, its acute pain can soften over time as you learn to live with your loss. Our compassionate therapists provide guidance, support, and practical coping strategies as you navigate this difficult journey. With appropriate support, you can find your way to a place where memories bring comfort alongside sadness, and where you can engage fully in life again while honoring what you've lost."
      }
    ],
    faqs: [
      {
        question: "Is there a 'normal' way to grieve?",
        answer: "There is no single 'normal' way to grieve. Grief is highly individual and influenced by many factors including your relationship with what was lost, cultural background, coping style, and available support. What's important is finding healthy ways to express and process your grief that work for you."
      },
      {
        question: "How do I know if I need grief therapy?",
        answer: "Consider seeking grief therapy if your grief feels overwhelming or unbearable, if you're having trouble functioning in daily life, if you feel stuck in your grief, if you're experiencing complicated grief symptoms like persistent disbelief or intense yearning that doesn't ease over time, or if you lack adequate support from others."
      },
      {
        question: "How long does grief therapy typically last?",
        answer: "The duration of grief therapy varies based on individual needs and circumstances. Some people benefit from short-term therapy of 8-12 sessions, while others may need longer-term support, especially for complicated grief. Therapy can be continuous or intermittent, with some clients returning around significant dates or when new aspects of grief emerge."
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
        title: "Trauma & PTSD Therapy",
        url: "/services/trauma-ptsd-therapy"
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

export default GriefTherapy;
