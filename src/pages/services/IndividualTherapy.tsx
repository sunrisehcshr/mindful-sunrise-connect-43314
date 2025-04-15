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
      question: "What is individual therapy in Havertown like?",
      answer: "Individual therapy in Havertown at Sunrise Human Care involves a personalized, confidential process where licensed therapists help you address your goals, whether it’s managing anxiety or fostering growth."
    },
    {
      question: "How often should I attend therapy sessions in Havertown?",
      answer: "Weekly sessions are common for individual therapy in Havertown to build momentum. As progress is made, we may adjust to bi-weekly or monthly based on your needs."
    },
    {
      question: "How long does mental health counseling in Delaware County last?",
      answer: "The duration of mental health counseling in Delaware County varies—some clients meet goals in 8-12 sessions, while others benefit from longer support. We tailor your plan."
    },
    {
      question: "Do you accept insurance for therapy in Pennsylvania?",
      answer: "Yes, we accept most major insurance plans for therapy in Pennsylvania, including Medicaid. We’ll verify coverage before your first session."
    },
    {
      question: "Is everything I share with a therapist near me confidential?",
      answer: "Yes, confidentiality is protected in therapy, except in cases of safety concerns or legal requirements, which your therapist near me will explain upfront."
    },
    {
      question: "Can I switch therapists if it’s not a good fit?",
      answer: "Absolutely. A strong therapeutic relationship is key in individual therapy in Havertown. We’ll help you find a better match within our team."
    },
    {
      question: "What if I’m unsure about starting Havertown therapy for anxiety?",
      answer: "It’s normal to feel hesitant. We offer a free consultation for Havertown therapy for anxiety to discuss concerns and see if it’s right for you."
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
      description: "Havertown therapy for anxiety, including generalized anxiety, social anxiety, and panic disorders.",
      url: "/anxiety-therapy-havertown-pa",
      imageSrc: "/therapy-in-havertown.jpg"
    },
    {
      title: "Depression",
      description: "Depression therapy in Havertown to improve mood and daily functioning with evidence-based methods.",
      url: "/depression-therapy-havertown-pa",
      imageSrc: "/therapy-in-havertown.jpg"
    },
    {
      title: "Trauma & PTSD",
      description: "Trauma therapy in Havertown to heal from past experiences using trauma-informed care.",
      url: "/trauma-therapy-havertown-pa",
      imageSrc: "/therapy-in-havertown.jpg"
    }
  ];

  const therapyTypes = [
    {
      title: "Short-Term Therapy",
      description: "Focused CBT therapy in Havertown for specific challenges or immediate goals.",
      icon: <Clock3 className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Long-Term Therapy",
      description: "In-depth mental health counseling in Delaware County for complex issues or growth.",
      icon: <FileCheck className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Crisis Intervention",
      description: "Immediate support from licensed therapists in Havertown for acute distress.",
      icon: <Shield className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Maintenance Therapy",
      description: "Periodic therapy in Pennsylvania to sustain progress and prevent relapse.",
      icon: <MessageCircle className="h-6 w-6 text-orange-500" />
    }
  ];

  return (
    <>
      <SEOHead
        title="Expert Individual Therapy in Havertown, PA | Licensed Therapists"
        description="Individual therapy in Havertown, PA with licensed therapists for anxiety, depression, and trauma. Evidence-based counseling, same-day appointments, insurance accepted."
        canonicalUrl="https://sunrisehumancare.com/individual-therapy-havertown-pa"
        keywords="individual therapy Havertown, therapy in Pennsylvania, mental health counseling Delaware County, therapist near me, anxiety treatment Havertown, CBT therapy Havertown"
        serviceSchema={{
          name: "Individual Therapy",
          description: "Individual therapy in Havertown, PA with licensed therapists for mental health conditions",
          provider: "Sunrise Human Care Services",
          serviceType: "Mental Health Counseling",
          areaServed: "Havertown, PA and Delaware County"
        }}
      />

      <ServicePageLayout
        title="Individual Therapy in Havertown, PA"
        description="Discover individual therapy in Havertown, PA with licensed therapists helping adults, teens, and seniors navigate mental health conditions using evidence-based approaches."
        pageTitle="Expert Individual Therapy in Havertown, PA | Evidence-Based Counseling"
        metaDescription="Individual therapy in Havertown, PA with licensed therapists for anxiety, depression, and trauma. Evidence-based counseling, same-day appointments, insurance accepted."
        serviceType="Individual Therapy"
        canonicalUrl="/individual-therapy-havertown-pa"
        schemaType="MedicalService"
        benefits={benefits}
        approaches={approaches}
        faqs={faqs}
        relatedServices={relatedServices}
      >
        <ServiceContentSection
          title="Why Choose Individual Therapy in Havertown, PA"
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
                  Individual therapy in Havertown, PA at Sunrise Human Care Services offers a compassionate space to explore your emotions and challenges. Our licensed therapists tailor mental health counseling in Delaware County to your unique needs, fostering resilience and growth.
                </p>
                <p className="leading-relaxed">
                  Starting therapy can feel daunting, especially when searching for a therapist near me. Our Havertown team creates a welcoming environment, listening to your goals for anxiety treatment in Havertown, depression therapy, or personal growth.
                </p>
                <p className="leading-relaxed">
                  We use evidence-based therapy like CBT therapy in Havertown and trauma-informed care, customized to your situation. Our therapists help you develop strategies for lasting change, whether in-person or via telehealth.
                </p>
                <p className="leading-relaxed">
                  Therapy is a collaborative journey. We assess progress regularly, ensuring you feel supported in mental health counseling in Delaware County. <Link to="/contact" className="text-orange-600 hover:text-orange-700">Schedule your session today</Link>.
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
                    title: "What Does Individual Therapy in Havertown Involve?",
                    items: [
                      "Addressing mental health conditions like anxiety",
                      "Setting personal goals with your therapist",
                      "Improving communication and relationships",
                      "Learning stress management techniques",
                      "Healing from trauma with expert care",
                      "Navigating life transitions smoothly",
                      "Building self-esteem and confidence",
                      "Enhancing daily functioning and routines"
                    ]
                  },
                  {
                    title: "Therapy Formats in Havertown, PA",
                    items: [
                      "In-person individual therapy in Havertown",
                      "Telehealth for therapy in Pennsylvania",
                      "Short-term CBT therapy sessions",
                      "Long-term mental health counseling",
                      "Crisis intervention for urgent needs",
                      "Maintenance therapy for ongoing support",
                      "Flexible session pacing for comfort",
                      "Referrals to group therapy if needed"
                    ]
                  },
                  {
                    title: "Benefits of Therapy with a Therapist Near Me",
                    items: [
                      "Safe, non-judgmental environment",
                      "Clear, achievable goal-setting",
                      "Regular progress reviews",
                      "Evidence-based therapy techniques",
                      "Convenient scheduling options",
                      "Strict confidentiality assurance",
                      "Strong therapist-client connection",
                      "Practical tools for everyday life"
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
          title="Types of Individual Therapy in Havertown"
          className="bg-white"
        >
          <div className="mb-6">
            <SectionTag icon={<Brain className="h-3 w-3" />}>Tailored Therapy</SectionTag>
          </div>
          <div className="mb-10 max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              Our individual therapy in Havertown, PA is tailored to meet diverse needs, from immediate support to long-term growth. Licensed therapists use evidence-based therapy to help you thrive.
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
          <div className="mt-6 text-center">
            <Link to="/contact" className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
              Start Your Therapy Journey
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ServiceContentSection>

        <ServiceContentSection
          title="Mental Health Conditions Treated in Havertown"
          hasBgPattern={true}
        >
          <div className="mb-6">
            <SectionTag icon={<Brain className="h-3 w-3" />}>Condition Support</SectionTag>
          </div>
          <div className="mb-8 max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              Our individual therapy in Havertown addresses mental health conditions with evidence-based techniques. Licensed therapists in Havertown help you find relief and build resilience.
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
              View all mental health conditions we treat
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ServiceContentSection>

        <ServiceContentSection
          title="The Value of Therapy in Pennsylvania"
          className="bg-white"
        >
          <div className="mb-6">
            <SectionTag icon={<Brain className="h-3 w-3" />}>Holistic Wellness</SectionTag>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-5"
              >
                <p className="leading-relaxed text-muted-foreground">
                  Individual therapy in Havertown, PA is a powerful tool for addressing mental health conditions and fostering growth. At Sunrise Human Care Services, our licensed therapists in Havertown empower you with evidence-based therapy.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Therapy in Pennsylvania helps uncover patterns contributing to distress, offering new coping strategies. Our therapists collaborate to create a plan tailored to your life, whether for anxiety treatment in Havertown or trauma therapy.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Beyond relief, mental health counseling in Delaware County builds resilience and self-awareness. We consider biological, psychological, and social factors for holistic care, ensuring lasting change with CBT therapy in Havertown or other methods.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  For those facing challenges or seeking to thrive, therapy in Pennsylvania offers a path forward. Contact us for Havertown therapy for anxiety or other needs, and start your journey today.
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
                    "Improved emotional regulation with CBT therapy",
                    "Enhanced self-esteem through trauma therapy",
                    "Stronger relationships via counseling",
                    "Relief from mental health conditions like anxiety",
                    "Support during life transitions or crises",
                    "Foundation for sustained wellness in Havertown"
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
          <div className="mt-6 text-center">
            <Link to="/contact" className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
              Book Your Havertown Therapy Session
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ServiceContentSection>
      </ServicePageLayout>
    </>
  );
};

export default IndividualTherapy;