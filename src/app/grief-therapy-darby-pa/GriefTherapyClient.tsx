"use client";

import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import { motion } from 'framer-motion';

export default function GriefTherapyClient() {
  const pageData = {
    title: "Grief & Loss Therapy in Darby, PA",
    description: "Compassionate support for bereavement, complicated grief, and adapting to significant losses in Darby, PA.",
    pageTitle: "Grief & Loss Therapy | Sunrise Human Care Services",
    metaDescription: "Compassionate grief counseling and bereavement support in Darby, PA. Professional therapy for coping with loss and complicated grief.",
    serviceType: "Grief & Loss Therapy",
    canonicalUrl: "/grief-therapy-darby-pa",
    benefits: ["Grief assessment and education", "Processing complex emotions", "Making meaning of your loss", "Coping with anniversary reactions", "Adapting to life changes", "Memorial rituals and continuing bonds", "Building resilience through loss"],
    approaches: [{
      title: "Understanding Grief and Loss",
      description: "Grief is a natural response to loss that can affect every dimension of our lives—emotional, physical, cognitive, social, and spiritual. While grief commonly occurs after the death of a loved one, it can also result from other significant losses such as relationship endings, health changes, job loss, or major life transitions. Everyone's grief journey is unique, with no single 'right way' to grieve."
    }, {
      title: "Our Approach to Grief Therapy",
      description: "At Sunrise Human Care Services, we provide compassionate grief therapy that honors your unique experience of loss and supports your healing process. Our approach is non-judgmental and recognizes that grief doesn't follow a predictable timeline or pattern. We create a safe space where all emotions related to your loss can be expressed and processed, helping you navigate the grief journey at your own pace."
    }, {
      title: "Addressing Complicated Grief",
      description: "Sometimes grief becomes complicated or prolonged, making it difficult to adapt to the loss and move forward in life. This can happen due to traumatic circumstances of the loss, multiple concurrent losses, or other factors. Our therapists are trained to recognize and address complicated grief, providing specialized interventions that help resolve barriers to the natural grief process."
    }, {
      title: "Finding Meaning and Moving Forward",
      description: "An important aspect of grief therapy involves making meaning of your loss and finding ways to move forward while honoring what or who has been lost. This doesn't mean 'getting over' the loss, but rather integrating it into your life story and identity. We help clients develop continuing bonds with deceased loved ones, create meaningful rituals, and gradually reinvest in life while carrying their loved one's memory."
    }, {
      title: "Your Path Through Grief",
      description: "While grief may never completely end, its acute pain can soften over time as you learn to live with your loss. Our compassionate therapists provide guidance, support, and practical coping strategies as you navigate this difficult journey. With appropriate support, you can find your way to a place where memories bring comfort alongside sadness, and where you can engage fully in life again while honoring what you've lost."
    }],
    faqs: [{
      question: "Is there a 'normal' way to grieve?",
      answer: "There is no single 'normal' way to grieve. Grief is highly individual and influenced by many factors including your relationship with what was lost, cultural background, coping style, and available support. What's important is finding healthy ways to express and process your grief that work for you."
    }, {
      question: "How do I know if I need grief therapy?",
      answer: "Consider seeking grief therapy if your grief feels overwhelming or unbearable, if you're having trouble functioning in daily life, if you feel stuck in your grief, if you're experiencing complicated grief symptoms like persistent disbelief or intense yearning that doesn't ease over time, or if you lack adequate support from others."
    }, {
      question: "How long does grief therapy typically last?",
      answer: "The duration of grief therapy varies based on individual needs and circumstances. Some people benefit from short-term therapy of 8-12 sessions, while others may need longer-term support, especially for complicated grief. Therapy can be continuous or intermittent, with some clients returning around significant dates or when new aspects of grief emerge."
    }],
    relatedServices: [{
      title: "Depression Therapy",
      url: "/depression-therapy-darby-pa"
    }, {
      title: "Anxiety Therapy",
      url: "/anxiety-therapy-darby-pa"
    }, {
      title: "Trauma & PTSD Therapy",
      url: "/ptsd-therapy-darby-pa"
    }]
  };

  return (
    <ServicePageLayout 
      title={pageData.title} 
      description={pageData.description} 
      pageTitle={pageData.pageTitle} 
      metaDescription={pageData.metaDescription} 
      serviceType={pageData.serviceType} 
      canonicalUrl={pageData.canonicalUrl} 
      benefits={pageData.benefits} 
      approaches={pageData.approaches} 
      faqs={pageData.faqs} 
      relatedServices={pageData.relatedServices}
    >
      <section className="py-16 bg-amber-50/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-barlow text-stone-800 tracking-tight">
                Our Approach to Grief & Loss Therapy
              </h2>
              
              <div className="space-y-4 text-stone-600 font-barlow text-lg leading-relaxed">
                <p>
                  At Sunrise Human Care Services in Darby, PA, we provide compassionate support for individuals experiencing grief and loss. Our approach acknowledges that grief is a natural, necessary response to loss and that each person&apos;s grief journey is unique.
                </p>
                
                <p>
                  We create a safe, non-judgmental space where you can express the full range of emotions that accompany grief—sadness, anger, guilt, relief, confusion, and more. Our therapists help you process these feelings at your own pace, without rushing or imposing arbitrary timelines on your grief.
                </p>
                
                <p>
                  For those experiencing complicated grief, we offer specialized interventions to address factors that may be blocking the natural grieving process. This may include processing traumatic aspects of the loss, resolving ambivalent relationships, or addressing multiple concurrent losses.
                </p>
                
                <p>
                  Throughout therapy, we help you find ways to honor and maintain a connection with what you&apos;ve lost while gradually adapting to your changed life. Our goal is not to help you &quot;get over&quot; your loss, but to support you in integrating it into your life story as you move forward with meaning and purpose.
                </p>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:border-amber-200 transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-stone-800 font-barlow">
                Our Grief & Loss Therapy Helps With:
              </h3>
              
              <ul className="space-y-3">
                {pageData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-stone-600 font-barlow">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
