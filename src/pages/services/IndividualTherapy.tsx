import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, ArrowRight, Brain, Shield, Lightbulb, Star, MessageCircle, FileCheck, Heart, Clock3 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import SEOHead from '../../components/SEOHead';
import WarmServiceCard from '../../components/services/WarmServiceCard';
import { Link } from 'react-router-dom';
import SectionTag from '@/components/ui/section-tag';

const IndividualTherapy = () => {
  const benefits = [
    "Accurate diagnosis and personalized treatment planning",
    "Understanding root causes of symptoms and behaviors",
    "Evidence-based therapeutic approaches",
    "Safe, confidential environment for sharing",
    "Flexible in-person and telehealth options",
    "Coordination with other healthcare providers",
    "Evening and weekend appointments available",
    "Most insurance plans accepted, including Medicaid"
  ];

  const approaches = [
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      description: "Understand and change unhelpful thought patterns to improve emotional regulation and behavior.",
      icon: <Brain className="h-5 w-5" />
    },
    {
      title: "Trauma-Informed Therapy",
      description: "Heal from past experiences in a safe, supportive environment with trust and empowerment.",
      icon: <Heart className="h-5 w-5" />
    },
    {
      title: "Mindfulness-Based Therapy",
      description: "Develop present-moment awareness to manage anxiety and enhance emotional resilience.",
      icon: <Lightbulb className="h-5 w-5" />
    },
    {
      title: "Solution-Focused Brief Therapy",
      description: "Identify practical strategies and leverage personal strengths for quick, effective change.",
      icon: <Star className="h-5 w-5" />
    },
    {
      title: "Dialectical Behavior Therapy (DBT)",
      description: "Build skills to regulate emotions, improve relationships, and manage distress.",
      icon: <Shield className="h-5 w-5" />
    }
  ];

  const faqs = [
    {
      question: "What happens during my first therapy session?",
      answer: "Your first session involves an intake assessment where we discuss your background, concerns, and goals. We’ll explore what you hope to achieve and ensure you feel comfortable with your therapist."
    },
    {
      question: "How often should I attend therapy sessions?",
      answer: "Weekly sessions are common initially to build momentum. As progress is made, we may adjust to bi-weekly or monthly sessions based on your needs."
    },
    {
      question: "How long does therapy usually last?",
      answer: "Therapy duration varies—some clients meet their goals in 8-12 sessions, while others benefit from longer-term support. We’ll regularly review progress to tailor your plan."
    },
    {
      question: "Do you accept insurance for individual therapy?",
      answer: "Yes, we accept most major insurance plans, including Medicaid. We’ll verify coverage and discuss costs before your first session."
    },
    {
      question: "Is everything I share in therapy confidential?",
      answer: "Yes, confidentiality is protected by law and ethics, except in cases of immediate safety concerns or legal requirements, which we’ll explain upfront."
    },
    {
      question: "Can I switch therapists if it’s not a good fit?",
      answer: "Absolutely. A strong therapeutic relationship is key. If you feel it’s not working, we’ll help you find a better match within our team."
    },
    {
      question: "What if I’m unsure about starting therapy?",
      answer: "It’s normal to feel hesitant. We offer a free consultation to discuss your concerns and see if therapy feels right for you."
    }
  ];

  const relatedServices = [
    { title: "Psychiatric Evaluations", url: "/psychiatric-evaluations-havertown-pa" },
    { title: "Medication Management", url: "/medication-management-havertown-pa" },
    { title: "Child Therapy", url: "/child-therapy-havertown-pa" }
  ];

  const conditions = [
    {
      title: "Anxiety Disorders",
      description: "Therapy for generalized anxiety, social anxiety, panic disorders, and phobias.",
      url: "/anxiety-therapy-havertown-pa",
      imageSrc: "/therapy-in-havertown.jpg"
    },
    {
      title: "Depression",
      description: "Support for managing depression and improving mood and daily functioning.",
      url: "/depression-therapy-havertown-pa",
      imageSrc: "/therapy-in-havertown.jpg"
    },
    {
      title: "Trauma & PTSD",
      description: "Trauma-informed care to heal from past experiences and regain control.",
      url: "/trauma-therapy-havertown-pa",
      imageSrc: "/therapy-in-havertown.jpg"
    }
  ];

  const therapyTypes = [
    {
      title: "Short-Term Therapy",
      description: "Focused sessions to address specific challenges or immediate goals.",
      icon: <Clock3 className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Long-Term Therapy",
      description: "In-depth support for complex issues or ongoing personal growth.",
      icon: <FileCheck className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Crisis Intervention",
      description: "Immediate support for acute emotional distress or life challenges.",
      icon: <Shield className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Maintenance Therapy",
      description: "Periodic sessions to sustain progress and prevent relapse.",
      icon: <MessageCircle className="h-6 w-6 text-orange-500" />
    }
  ];

  return (
    <>
      <SEOHead
        title="Expert Individual Therapy in Havertown, PA | Evidence-Based Treatment"
        description="Compassionate individual therapy in Havertown, PA. Licensed therapists providing evidence-based treatment for anxiety, depression, trauma, and personal growth. Schedule today."
        canonicalUrl="https://sunrisehumancare.com/individual-therapy-havertown-pa"
        keywords="individual therapy Havertown, therapy in Pennsylvania, mental health counseling Delaware County, therapist near me, anxiety treatment Havertown"
        serviceSchema={{
          name: "Individual Therapy",
          description: "Professional individual therapy services in Havertown, PA for adults, teens, and seniors",
          provider: "Sunrise Human Care Services",
          serviceType: "Mental Health Counseling",
          areaServed: "Havertown, PA and Delaware County"
        }}
      />

      <ServicePageLayout
        title="Individual Therapy in Havertown, PA"
        description="Professional individual therapy in Havertown, PA. Our experienced therapists help adults, teens, and seniors navigate life's challenges with evidence-based therapeutic approaches."
        pageTitle="Expert Individual Therapy in Havertown, PA | Evidence-Based Treatment | Sunrise Human Care"
        metaDescription="Compassionate individual therapy in Havertown, PA. Licensed therapists providing evidence-based treatment for anxiety, depression, trauma, and personal growth. Convenient location, insurance accepted."
        serviceType="Individual Therapy"
        canonicalUrl="/individual-therapy-havertown-pa"
        schemaType="MedicalService"
        benefits={benefits}
        approaches={approaches}
        faqs={faqs}
        relatedServices={relatedServices}
      >
        <ServiceContentSection
          title="Understanding Our Individual Therapy Process"
          hasBgPattern={true}
        >
          <div className="mb-6">
            <SectionTag icon={<Brain className="h-3 w-3" />}>Professional Care</SectionTag>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-5 text-muted-foreground">
                <p className="leading-relaxed">
                  At Sunrise Human Care Services in Havertown, PA, our individual therapy offers a compassionate, confidential space to explore your thoughts, emotions, and challenges. Our licensed therapists tailor sessions to your unique needs, fostering growth and resilience.
                </p>
                <p className="leading-relaxed">
                  We understand that starting therapy can feel intimidating. Our team creates a welcoming environment, taking time to listen and understand your goals. Whether you’re addressing anxiety, depression, or seeking personal growth, we’re here to guide you.
                </p>
                <p className="leading-relaxed">
                  Our evidence-based approaches, like Cognitive Behavioral Therapy (CBT) and trauma-informed care, are customized to your situation. We incorporate your strengths and preferences to develop effective strategies for lasting change.
                </p>
                <p className="leading-relaxed">
                  Therapy is a collaborative journey. We regularly assess progress, adjust plans as needed, and ensure you feel supported every step of the way, with flexible options for in-person or telehealth sessions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    title: "Key Focus Areas",
                    items: [
                      "Emotional and behavioral challenges",
                      "Personal goals and aspirations",
                      "Relationship and communication skills",
                      "Stress and coping mechanisms",
                      "Trauma and past experiences",
                      "Life transitions and adjustments",
                      "Self-esteem and identity",
                      "Daily functioning and routines"
                    ]
                  },
                  {
                    title: "Therapy Formats",
                    items: [
                      "In-person sessions in Havertown",
                      "Telehealth for remote access",
                      "Short-term goal-focused therapy",
                      "Long-term in-depth support",
                      "Crisis intervention sessions",
                      "Maintenance and follow-up care",
                      "Individualized session pacing",
                      "Group therapy referrals if needed"
                    ]
                  },
                  {
                    title: "What to Expect",
                    items: [
                      "Non-judgmental, safe space",
                      "Clear goal-setting process",
                      "Regular progress check-ins",
                      "Customized therapeutic techniques",
                      "Flexible scheduling options",
                      "Confidentiality assurance",
                      "Supportive therapist-client bond",
                      "Practical tools for daily life"
                    ]
                  }
                ].map((section, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold text-amber-950">
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 pt-2">
                        {section.items.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </ServiceContentSection>

        <ServiceContentSection
          title="Types of Individual Therapy We Offer"
          className="bg-white"
        >
          <div className="mb-10 max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              Our individual therapy services are designed to meet a variety of needs, from immediate support to long-term growth. Each type is tailored to help you achieve your mental health goals effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {therapyTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-amber-50/50 border border-amber-100 rounded-lg p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-amber-100/80 p-3 flex-shrink-0">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ServiceContentSection>

        <ServiceContentSection
          title="Common Conditions We Treat"
          hasBgPattern={true}
        >
          <div className="mb-8 max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              Our individual therapy addresses a wide range of mental health challenges using evidence-based techniques. We help clients find relief and build resilience for lasting well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <WarmServiceCard
                key={index}
                title={condition.title}
                description={condition.description}
                imageSrc={condition.imageSrc}
                url={condition.url}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/conditions" className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
              View all conditions we treat
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ServiceContentSection>

        <ServiceContentSection
          title="The Importance of Individual Therapy"
          className="bg-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-5"
              >
                <p className="text-muted-foreground">
                  Individual therapy is a powerful tool for addressing mental health challenges and fostering personal growth. At Sunrise Human Care Services, we believe in empowering you to navigate life’s complexities with confidence and clarity.
                </p>
                <p className="text-muted-foreground">
                  Therapy helps uncover underlying patterns that may contribute to distress, offering new perspectives and coping strategies. Our therapists work collaboratively to create a plan that aligns with your goals and lifestyle.
                </p>
                <p className="text-muted-foreground">
                  Beyond symptom relief, therapy builds resilience, enhances self-awareness, and strengthens relationships. We consider biological, psychological, and social factors to provide holistic care that supports lasting change.
                </p>
                <p className="text-muted-foreground">
                  For those facing persistent struggles or seeking to thrive, individual therapy offers a path forward. Our team stays current with the latest therapeutic advancements to deliver the highest quality care.
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-amber-50 border border-amber-100 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Benefits of Starting Therapy</h3>
                <Separator className="bg-amber-200 mb-4" />
                <ul className="space-y-4">
                  {[
                    "Improved emotional regulation and coping skills",
                    "Enhanced self-esteem and personal insight",
                    "Stronger relationships and communication",
                    "Relief from anxiety, depression, or trauma",
                    "Support during life transitions or crises",
                    "Foundation for sustained mental wellness"
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-amber-800 text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </ServiceContentSection>
      </ServicePageLayout>
    </>
  );
};

export default IndividualTherapy;