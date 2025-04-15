
import React from 'react';
import { Link } from 'react-router-dom';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

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
            className="bg-white p-7 rounded-xl shadow-md border border-sunrise-100/50 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-5 text-orange-600 font-playfair">
              Our Individual Therapy Services Help With:
            </h3>
            
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
    </ServicePageLayout>
  );
};

export default IndividualTherapy;
