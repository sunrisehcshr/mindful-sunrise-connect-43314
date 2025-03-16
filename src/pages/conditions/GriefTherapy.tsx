
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import SEOHead from '../../components/SEOHead';

const GriefTherapy = () => {
  const serviceInfo = {
    title: "Grief & Loss Therapy",
    heroImage: "/images/Therapy-in-havertown.webp",
    description: "Compassionate support for bereavement, complicated grief, and adapting to significant losses in Havertown, PA.",
    details: [
      "Grief assessment and education",
      "Processing complex emotions",
      "Making meaning of your loss",
      "Coping with anniversary reactions",
      "Adapting to life changes",
      "Memorial rituals and continuing bonds",
      "Building resilience through loss"
    ],
    content: [
      {
        heading: "Understanding Grief and Loss",
        text: "Grief is a natural response to loss that can affect every dimension of our lives—emotional, physical, cognitive, social, and spiritual. While grief commonly occurs after the death of a loved one, it can also result from other significant losses such as relationship endings, health changes, job loss, or major life transitions. Everyone's grief journey is unique, with no single 'right way' to grieve."
      },
      {
        heading: "Our Approach to Grief Therapy",
        text: "At Sunrise Human Care Services, we provide compassionate grief therapy that honors your unique experience of loss and supports your healing process. Our approach is non-judgmental and recognizes that grief doesn't follow a predictable timeline or pattern. We create a safe space where all emotions related to your loss can be expressed and processed, helping you navigate the grief journey at your own pace."
      },
      {
        heading: "Addressing Complicated Grief",
        text: "Sometimes grief becomes complicated or prolonged, making it difficult to adapt to the loss and move forward in life. This can happen due to traumatic circumstances of the loss, multiple concurrent losses, or other factors. Our therapists are trained to recognize and address complicated grief, providing specialized interventions that help resolve barriers to the natural grief process."
      },
      {
        heading: "Finding Meaning and Moving Forward",
        text: "An important aspect of grief therapy involves making meaning of your loss and finding ways to move forward while honoring what or who has been lost. This doesn't mean 'getting over' the loss, but rather integrating it into your life story and identity. We help clients develop continuing bonds with deceased loved ones, create meaningful rituals, and gradually reinvest in life while carrying their loved one's memory."
      },
      {
        heading: "Your Path Through Grief",
        text: "While grief may never completely end, its acute pain can soften over time as you learn to live with your loss. Our compassionate therapists provide guidance, support, and practical coping strategies as you navigate this difficult journey. With appropriate support, you can find your way to a place where memories bring comfort alongside sadness, and where you can engage fully in life again while honoring what you've lost."
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="Grief & Loss Therapy | Sunrise Human Care Services" 
        description="Compassionate grief counseling and bereavement support in Havertown, PA. Professional therapy for coping with loss and complicated grief." 
      />
      <Navbar />
      <ServicePageLayout serviceInfo={serviceInfo} />
      <Footer />
    </>
  );
};

export default GriefTherapy;
