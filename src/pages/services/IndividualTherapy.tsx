import React from 'react';
import { Link } from 'react-router-dom';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import SectionTag from '@/components/ui/section-tag';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Brain, Users, Lightbulb, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const IndividualTherapy = () => {
  const benefits = [
    "Licensed Havertown Therapists with years of experience",
    "Convenient Location on West Chester Pike with easy parking",
    "In-Person & Telehealth Options for flexibility",
    "Most Insurance Plans Accepted including Medicaid & commercial providers",
    "Multilingual Staff Available upon request"
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

  const whoCanBenefit = [
    "Adults dealing with anxiety, depression, or stress",
    "Individuals navigating life transitions or relationship issues",
    "People seeking personal growth and self-discovery",
    "Those coping with trauma or past experiences",
    "Professionals managing work-related stress",
    "Anyone looking to improve their mental well-being"
  ];

  const faqs = [
    {
      question: "What happens during my first session?",
      answer: "Your first session is an intake. Your therapist will ask questions about your background, current concerns, and therapy goals. It's a chance for you to get comfortable and ask questions too."
    },
    {
      question: "How often should I attend therapy?",
      answer: "Many clients start with weekly sessions, then adjust based on progress. We'll recommend a schedule based on your needs."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes. We accept most major plans. Our staff will verify your coverage and discuss any copays or out-of-pocket costs before you begin."
    },
    {
      question: "Is therapy confidential?",
      answer: "Absolutely. Everything shared in session is strictly confidential, in compliance with HIPAA."
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
      description="At Sunrise Human Care, we provide compassionate and effective individual therapy in Havertown, PA, for teens, adults, and seniors. Whether you're facing anxiety, depression, relationship issues, or just need someone to talk to, our licensed therapists are here to help you feel seen, heard, and supported."
      pageTitle="Expert Individual Therapy in Havertown, PA - Personalized Mental Health Support | Sunrise Human Care Services"
      metaDescription="Compassionate individual therapy in Havertown, PA for anxiety, depression, trauma, and personal growth. Private, confidential sessions with experienced therapists. Schedule today."
      serviceType="Individual Therapy"
      canonicalUrl="/individual-therapy-havertown-pa"
      benefits={benefits}
      approaches={approaches}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <ServiceContentSection
        title="What to Expect in Individual Therapy in Havertown"
        hasBgPattern={true}
      >
        <div className="mb-6">
          <SectionTag icon={<Brain className="h-3 w-3" />}>Understanding Your Journey</SectionTag>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-5 text-muted-foreground">
              <p className="leading-relaxed">
                Individual therapy—sometimes called talk therapy or counseling—is a one-on-one therapeutic process between you and a trained mental health professional. It provides a safe, private space to explore your emotions, thoughts, behaviors, and life events.
              </p>
              
              <p className="leading-relaxed">
                At Sunrise, therapy is about more than just talking. It's about discovering patterns, building new habits, and moving toward emotional resilience. Whether you're navigating a specific issue or want long-term personal growth, we tailor the experience to meet your needs.
              </p>
              
              <p className="leading-relaxed">
                We support clients facing anxiety and panic attacks, depression and mood disorders, trauma and PTSD, grief and loss, work or school stress, life transitions, relationship challenges, self-esteem issues, and identity exploration.
              </p>
              
              <p className="leading-relaxed">
                Our Havertown therapists work with clients from all walks of life—including young adults, professionals, caregivers, veterans, and retirees—to create positive, lasting change. Visit our office at 2050 West Chester Pike, Havertown, PA 19083 or call us at (814) 620-2162.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-7 rounded-xl shadow-md border border-orange-100/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-5">
              <Star className="h-5 w-5 text-orange-500" />
              <h3 className="text-xl font-semibold text-orange-600 font-playfair">
                Our Individual Therapy Services Help With:
              </h3>
            </div>
            
            <ul className="space-y-3.5">
              {[
                "Anxiety and panic attacks",
                "Depression and mood disorders",
                "Trauma recovery and PTSD",
                "Grief and loss",
                "Life transitions and adjustments",
                "Self-esteem and personal growth",
                "Stress management",
                "Relationship issues"
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
            
            <div className="mt-7 pt-5 border-t border-orange-100">
              <h4 className="text-lg font-medium mb-3 text-orange-600">
                Related Mental Health Resources
              </h4>
              
              <ul className="space-y-3">
                {[
                  {
                    name: "Anxiety Treatment Options in Havertown",
                    url: "/anxiety-therapy-havertown-pa"
                  },
                  {
                    name: "Depression Treatment in Havertown",
                    url: "/depression-therapy-havertown-pa"
                  },
                  {
                    name: "When to Consider Medication Management",
                    url: "/medication-management-havertown-pa"
                  }
                ].map((resource, index) => (
                  <li key={index}>
                    <Link
                      to={resource.url}
                      className="flex items-center text-orange-500 hover:text-orange-700 transition-colors"
                    >
                      <ArrowRight className="h-4 w-4 mr-2" />
                      <span>{resource.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </ServiceContentSection>

      <ServiceContentSection
        title="Who Can Benefit from Individual Therapy?"
        hasBgPattern={false}
      >
        <div className="mb-6">
          <SectionTag icon={<Users className="h-3 w-3" />}>For Everyone's Growth</SectionTag>
        </div>
        
        <div className="flex items-center gap-2 mb-6">
          <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">Personal Growth</Badge>
          <Badge variant="secondary" className="bg-amber-100 text-amber-700 hover:bg-amber-200">Mental Wellness</Badge>
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">Life Changes</Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-5 text-muted-foreground">
              <p className="leading-relaxed">
                Individual therapy can be beneficial for anyone seeking to improve their mental health, work through challenges, or pursue personal growth. Our Havertown therapy services are designed to support individuals from all walks of life.
              </p>
              
              <p className="leading-relaxed">
                Whether you're experiencing specific mental health concerns, going through a difficult life transition, or simply want to better understand yourself, our experienced therapists are here to help guide you on your journey.
              </p>
              
              <p className="leading-relaxed">
                We create a safe, non-judgmental space where you can explore your thoughts, feelings, and experiences while developing practical tools for personal growth and healing.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-7 rounded-xl shadow-md border border-orange-100/50 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-5 text-orange-600 font-playfair">
              Individual Therapy Can Help With:
            </h3>
            
            <ul className="space-y-3.5">
              {whoCanBenefit.map((item, index) => (
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
        title="Our Therapy Approach"
        hasBgPattern={false}
      >
        <div className="mb-6">
          <SectionTag icon={<Lightbulb className="h-3 w-3" />}>Evidence-Based Methods</SectionTag>
        </div>
        
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg opacity-10"></div>
          <div className="relative p-6 text-center">
            <p className="text-lg font-medium text-amber-900">
              "Our approach combines proven therapeutic techniques with personalized care to help you achieve lasting positive change."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-5 text-muted-foreground">
              <p className="leading-relaxed">
                We use evidence-based practices to deliver results-oriented care. Each therapy session is customized based on your unique goals, preferences, and needs.
              </p>
              
              <p className="leading-relaxed">
                Our licensed clinicians are experienced in multiple therapeutic modalities, allowing us to adapt our approach to what works best for you. Whether you respond well to structured cognitive techniques or more exploratory approaches, we tailor the experience to maximize your progress.
              </p>
              
              <p className="leading-relaxed">
                At Sunrise Human Care, we believe in therapy that feels collaborative and empowering. Our approach focuses not just on understanding problems, but on building practical skills and strategies you can use in your everyday life.
              </p>
              
              <p className="leading-relaxed">
                No two people are the same—neither are their therapy sessions. We pride ourselves on personalized care that recognizes your individual experiences, background, and goals for treatment.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-7 rounded-xl shadow-md border border-orange-100/50 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-5 text-orange-600 font-playfair">
              Our Therapeutic Methods Include:
            </h3>
            
            <ul className="space-y-4">
              {approaches.map((approach, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="border-b border-orange-100 pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-amber-900">{approach.title}</span>
                    <span className="text-muted-foreground text-sm">{approach.description}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-7 pt-5 border-t border-orange-100">
              <p className="text-sm text-muted-foreground italic">
                We continue to stay current with the latest research and therapeutic techniques to provide the most effective care possible.
              </p>
            </div>
          </motion.div>
        </div>
      </ServiceContentSection>
    </ServicePageLayout>
  );
};

export default IndividualTherapy;
