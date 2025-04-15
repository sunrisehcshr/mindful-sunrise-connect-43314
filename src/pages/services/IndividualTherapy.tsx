
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Brain, Shield, Lightbulb, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import SectionTag from '@/components/ui/section-tag';

const IndividualTherapy = () => {
  const benefits = [
    "Licensed Havertown Therapists with years of experience",
    "Convenient Location on West Chester Pike with easy parking",
    "In-Person & Telehealth Options for flexibility",
    "Most Insurance Plans Accepted including Medicaid & commercial providers",
    "Multilingual Staff Available upon request",
    "Evening and weekend appointments available"
  ];

  const approaches = [
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      description: "Understand and change unhelpful thought patterns"
    },
    {
      title: "Trauma-Informed Therapy",
      description: "Heal from past experiences with safety and trust"
    },
    {
      title: "Mindfulness-Based Therapy",
      description: "Manage anxiety through present-moment awareness"
    },
    {
      title: "Solution-Focused Brief Therapy",
      description: "Identify practical strategies and strengths"
    },
    {
      title: "Dialectical Behavior Therapy (DBT)",
      description: "Regulate emotions and improve communication"
    }
  ];

  const faqs = [
    {
      question: "What happens during my first therapy session?",
      answer: "Your first session is an intake assessment where we get to know you and your goals. We'll discuss your background, current concerns, and what you hope to achieve through therapy. It's also your chance to ask questions and ensure you feel comfortable with your therapist."
    },
    {
      question: "How often should I attend therapy sessions?",
      answer: "Most clients start with weekly sessions to build momentum and establish a strong therapeutic relationship. As you progress, we can adjust the frequency based on your needs and goals. Some clients later transition to bi-weekly or monthly sessions for maintenance."
    },
    {
      question: "How long does therapy usually last?",
      answer: "The duration of therapy varies for each person. Some clients achieve their goals in 8-12 sessions, while others benefit from longer-term support. We'll regularly review your progress and adjust the treatment plan as needed."
    },
    {
      question: "Do you accept insurance for individual therapy?",
      answer: "Yes, we accept most major insurance plans, including Medicaid and commercial providers. Our staff will verify your coverage and discuss any copays or out-of-pocket costs before your first session."
    },
    {
      question: "Is everything I share in therapy confidential?",
      answer: "Yes, confidentiality is a fundamental part of therapy. Everything you share is protected by law and professional ethics. The only exceptions are situations involving immediate safety concerns or when required by law, which we'll discuss in detail during your first session."
    }
  ];

  const relatedServices = [
    {
      title: "Anxiety Treatment in Havertown",
      url: "/anxiety-therapy-havertown-pa"
    },
    {
      title: "Depression Treatment in Havertown",
      url: "/depression-therapy-havertown-pa"
    },
    {
      title: "ADHD Treatment in Havertown",
      url: "/adhd-treatment-havertown-pa"
    }
  ];

  return (
    <ServicePageLayout
      title="Individual Therapy in Havertown, PA"
      description="Professional individual therapy in Havertown, PA. Our experienced therapists help adults, teens, and seniors navigate life's challenges with evidence-based therapeutic approaches."
      pageTitle="Expert Individual Therapy in Havertown, PA | Evidence-Based Treatment | Sunrise Human Care"
      metaDescription="Compassionate individual therapy in Havertown, PA. Licensed therapists providing evidence-based treatment for anxiety, depression, trauma, and personal growth. Convenient location, insurance accepted."
      serviceType="Individual Therapy"
      canonicalUrl="/individual-therapy-havertown-pa"
      benefits={benefits}
      approaches={approaches}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <ServiceContentSection 
        title="What to Expect in Individual Therapy" 
        hasBgPattern={true}
      >
        <div className="mb-6">
          <SectionTag icon={<Brain className="h-3 w-3" />}>Professional Care</SectionTag>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-5 text-muted-foreground">
              <p className="leading-relaxed">
                Individual therapy at Sunrise Human Care Services provides a safe, confidential space where you can explore your thoughts, feelings, and challenges with a licensed therapist. Our approach is collaborative and person-centered, focusing on your unique needs and goals.
              </p>
              
              <p className="leading-relaxed">
                During your sessions, we'll work together to identify patterns, develop coping strategies, and create positive change in your life. Whether you're dealing with anxiety, depression, relationship issues, or seeking personal growth, our experienced therapists are here to support you.
              </p>
              
              <p className="leading-relaxed">
                We use evidence-based therapeutic approaches tailored to your specific situation. Our therapists are trained in various modalities, including Cognitive Behavioral Therapy (CBT), mindfulness-based approaches, and trauma-informed care.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-7 rounded-xl shadow-md border border-orange-100/50 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-5 text-orange-600 font-playfair">
              Our Individual Therapy Services Include:
            </h3>

            <ul className="space-y-3.5">
              {[
                "One-on-one sessions with licensed therapists",
                "Personalized treatment planning",
                "Evidence-based therapeutic approaches",
                "Regular progress assessments",
                "Flexible scheduling options",
                "Both in-person and telehealth sessions",
                "Crisis support when needed",
                "Coordination with other healthcare providers"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </ServiceContentSection>

      <ServiceContentSection 
        title="Our Therapeutic Approach" 
        hasBgPattern={false}
      >
        <div className="mb-6">
          <SectionTag icon={<Lightbulb className="h-3 w-3" />}>Evidence-Based Methods</SectionTag>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-muted-foreground"
          >
            <p className="leading-relaxed">
              At Sunrise Human Care Services, we believe in providing evidence-based therapy that's tailored to your unique needs. Our therapists are trained in multiple therapeutic modalities, allowing us to adapt our approach based on what works best for you.
            </p>

            <p className="leading-relaxed">
              We take a holistic view of mental health, considering how various aspects of your life - including relationships, work, physical health, and personal history - impact your well-being. This comprehensive approach helps us develop more effective treatment strategies.
            </p>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4 text-orange-600">Why Choose Our Individual Therapy Services:</h4>
              <ul className="space-y-3">
                {[
                  "Evidence-based treatment approaches",
                  "Experienced, licensed therapists",
                  "Personalized care plans",
                  "Flexible scheduling options",
                  "Insurance accepted"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-7 rounded-xl shadow-md border border-orange-100/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-orange-600 font-playfair mb-4">
                Treatment Areas We Specialize In:
              </h3>

              <ul className="space-y-4">
                {[
                  {
                    title: "Anxiety & Depression",
                    description: "Evidence-based treatment for mood disorders"
                  },
                  {
                    title: "Trauma & PTSD",
                    description: "Trauma-informed therapy approaches"
                  },
                  {
                    title: "Life Transitions",
                    description: "Support during major life changes"
                  },
                  {
                    title: "Relationship Issues",
                    description: "Improving interpersonal relationships"
                  },
                  {
                    title: "Stress Management",
                    description: "Developing healthy coping strategies"
                  }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="border-b border-orange-100 pb-4 last:border-b-0 last:pb-0"
                  >
                    <h4 className="font-semibold text-amber-900">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </ServiceContentSection>
    </ServicePageLayout>
  );
};

export default IndividualTherapy;
