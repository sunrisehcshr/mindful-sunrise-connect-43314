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

const IndividualTherapy = () => {
  const benefits = [
    "Personalized treatment plans from licensed therapists",
    "Confidential, supportive environment for growth",
    "Flexible scheduling, including evenings and weekends",
    "Most insurance plans accepted, including Medicaid",
    "Evidence-based techniques for lasting change"
  ];

  const approaches = [
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      description: "Reshape negative thoughts to improve emotions and behaviors.",
      icon: <Brain className="h-5 w-5 text-orange-500" />
    },
    {
      title: "Trauma-Informed Therapy",
      description: "Heal past wounds with a safe, empowering approach.",
      icon: <Heart className="h-5 w-5 text-orange-500" />
    },
    {
      title: "Mindfulness-Based Therapy",
      description: "Build awareness to reduce stress and enhance resilience.",
      icon: <Lightbulb className="h-5 w-5 text-orange-500" />
    },
    {
      title: "Solution-Focused Brief Therapy",
      description: "Focus on solutions for quick, practical progress.",
      icon: <Star className="h-5 w-5 text-orange-500" />
    },
    {
      title: "Dialectical Behavior Therapy (DBT)",
      description: "Develop skills to manage emotions and relationships.",
      icon: <Shield className="h-5 w-5 text-orange-500" />
    }
  ];

  const faqs = [
    {
      question: "What does individual therapy in Havertown involve?",
      answer: "Individual therapy in Havertown offers a personalized process where licensed therapists support you in addressing challenges like anxiety or depression in a confidential setting."
    },
    {
      question: "How often are therapy sessions recommended?",
      answer: "Most clients start with weekly sessions to build progress, adjusting to bi-weekly or monthly as goals are met, tailored to your needs."
    },
    {
      question: "How long does therapy typically last?",
      answer: "Some achieve goals in 8-12 sessions, while others benefit from longer counseling, depending on your unique situation and objectives."
    },
    {
      question: "Is therapy covered by insurance?",
      answer: "Yes, we accept most insurance plans, including Medicaid, and verify coverage before starting to ensure accessibility."
    },
    {
      question: "Is therapy confidential?",
      answer: "Your privacy is protected, with exceptions only for safety or legal requirements, which your therapist will explain clearly."
    },
    {
      question: "Can I change therapists if needed?",
      answer: "Yes, we’ll help you find a better match if the connection isn’t right, ensuring effective therapy."
    },
    {
      question: "What if I’m nervous about starting therapy?",
      answer: "Feeling hesitant is common. We offer a free consultation to discuss concerns and explore if therapy suits you."
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
      url: "/anxiety-therapy-havertown-pa"
    },
    {
      title: "Depression",
      description: "Depression therapy in Havertown to improve mood and daily functioning with evidence-based methods.",
      url: "/depression-therapy-havertown-pa"
    },
    {
      title: "Trauma & PTSD",
      description: "Trauma therapy in Havertown to heal from past experiences using trauma-informed care.",
      url: "/trauma-therapy-havertown-pa"
    }
  ];

  const therapyTypes = [
    {
      title: "Short-Term Therapy",
      description: "Focused sessions to address specific challenges or immediate goals efficiently.",
      icon: <Clock3 className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Long-Term Therapy",
      description: "Deep exploration of complex issues for sustained growth and understanding.",
      icon: <FileCheck className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Crisis Intervention",
      description: "Immediate support for acute distress to stabilize and guide forward.",
      icon: <Shield className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Maintenance Therapy",
      description: "Ongoing sessions to sustain progress and prevent setbacks.",
      icon: <MessageCircle className="h-6 w-6 text-orange-500" />
    }
  ];

  return (
    <>
      <SEOHead
        title="Individual Therapy in Havertown, PA | Licensed Therapists"
        description="Individual therapy in Havertown, PA with licensed therapists for anxiety, depression, and trauma. Personalized counseling, flexible scheduling, insurance accepted."
        canonicalUrl="https://sunrisehumancare.com/individual-therapy-havertown-pa"
        keywords="individual therapy Havertown, therapy in Pennsylvania, mental health counseling Delaware County, therapist near me, anxiety treatment Havertown, CBT therapy Havertown"
        serviceSchema={{
          name: "Individual Therapy",
          description: "Personalized therapy in Havertown, PA for mental health challenges like anxiety and depression.",
          provider: "Sunrise Human Care Services",
          serviceType: "Mental Health Counseling",
          areaServed: "Havertown, PA and Delaware County"
        }}
      />

      <ServicePageLayout
        title="Individual Therapy in Havertown, PA"
        description="Personalized individual therapy in Havertown, PA with licensed therapists helping you navigate anxiety, depression, and trauma using proven counseling methods."
        pageTitle="Individual Therapy in Havertown, PA | Evidence-Based Counseling"
        metaDescription="Individual therapy in Havertown, PA with licensed therapists for anxiety, depression, and trauma. Personalized counseling, flexible scheduling, insurance accepted."
        serviceType="Individual Therapy"
        canonicalUrl="/individual-therapy-havertown-pa"
        benefits={benefits}
        approaches={approaches}
        faqs={faqs}
        relatedServices={relatedServices}
      >
        <ServiceContentSection title="Why Choose Individual Therapy in Havertown, PA" hasBgPattern={true}>
          <div className="w-24 h-1 bg-amber-200 mx-auto mt-2 mb-8"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-5 text-muted-foreground">
                <p className="leading-relaxed">
                  Individual therapy in Havertown offers a supportive space to explore your emotions and challenges. At Sunrise Human Care Services, our licensed therapists create personalized plans to help you grow, whether addressing anxiety, depression, or personal goals.
                </p>
                <p className="leading-relaxed">
                  Beginning therapy can feel overwhelming, especially when seeking a therapist nearby. Our Havertown team fosters a welcoming environment, listening closely to understand your needs and tailoring sessions to support your journey.
                </p>
                <p className="leading-relaxed">
                  We use proven methods like Cognitive Behavioral Therapy and mindfulness, adjusting each session to fit your situation. Available in-person or via telehealth, our counseling helps you build skills for lasting change.
                </p>
                <p className="leading-relaxed">
                  Therapy is a partnership. We work with you to track progress and celebrate milestones, ensuring you feel empowered. <Link to="/contact" className="text-orange-600 hover:text-orange-700">Start your journey today</Link>.
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
                    title: "What Does Individual Therapy Involve?",
                    items: [
                      "Exploring emotions with a trusted therapist",
                      "Setting achievable personal goals",
                      "Learning coping strategies for stress",
                      "Addressing challenges like anxiety or depression",
                      "Building confidence and self-awareness",
                      "Navigating life changes with support",
                      "Improving relationships and communication",
                      "Creating a plan for sustained wellness"
                    ]
                  },
                  {
                    title: "Why Choose Sunrise in Havertown for Therapy?",
                    items: [
                      "Compassionate, licensed professionals",
                      "Convenient Delaware County location",
                      "Warm, judgment-free counseling spaces",
                      "Tailored sessions for your needs",
                      "Support for adults, teens, and seniors",
                      "Proven therapeutic techniques",
                      "Options for in-person or virtual sessions",
                      "Focus on your growth and progress"
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

        <ServiceContentSection title="How Individual Therapy Works in Havertown" className="bg-white">
          <div className="w-24 h-1 bg-amber-200 mx-auto mt-2 mb-8"></div>
          <div className="mb-10 max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground">
              Individual therapy in Havertown is a personalized process designed to support your mental health goals. Here’s how our licensed therapists guide you at Sunrise Human Care Services.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6 text-muted-foreground"
            >
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">Initial Consultation</h3>
                <p className="leading-relaxed">
                  Your therapy begins with a consultation to discuss your concerns and goals. Our Havertown therapists listen carefully, building a foundation for personalized counseling.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">Customized Plan</h3>
                <p className="leading-relaxed">
                  We create a plan using methods like CBT or mindfulness, focusing on practical steps to address your challenges, ensuring therapy feels relevant and effective.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">Ongoing Support</h3>
                <p className="leading-relaxed">
                  Regular sessions provide consistent guidance, with progress reviews to refine strategies. You’ll gain tools to manage stress and improve daily life.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-amber-50 border border-amber-100 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-amber-900 mb-4">What Makes Our Therapy Unique</h3>
              <Separator className="bg-amber-200 mb-4" />
              <ul className="space-y-4">
                {[
                  "Plans tailored to your personal journey",
                  "Therapists skilled in diverse methods",
                  "Focus on actionable, real-world skills",
                  "Support for short- or long-term goals",
                  "Inclusive space for all clients",
                  "Progress tracking for meaningful growth"
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
          <div className="mt-10 text-center">
            <Link to="/contact" className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
              Learn More About Starting Therapy
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ServiceContentSection>

        <ServiceContentSection title="Types of Individual Therapy in Havertown" hasBgPattern={true}>
          <div className="w-24 h-1 bg-amber-200 mx-auto mt-2 mb-8"></div>
          <div className="mb-10 max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground">
              Our therapy in Havertown is designed to meet varied needs, from quick solutions to deep exploration, with licensed therapists guiding your path to wellness.
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
                  <div className="rounded-full bg-amber-100/80 p-3 flex-shrink-0">{type.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/contact" className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
              Find the Right Therapy for You
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ServiceContentSection>

        <ServiceContentSection title="Mental Health Conditions Addressed in Havertown" hasBgPattern={true}>
          <div className="w-24 h-1 bg-amber-200 mx-auto mt-2 mb-8"></div>
          <div className="mb-10 max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground">
              Our individual therapy in Havertown addresses mental health challenges with evidence-based techniques. Licensed therapists help you find relief and build resilience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-amber-900 mb-3 font-opensans">
                  {condition.title}
                </h3>
                <p className="text-amber-800 mb-4 text-sm">
                  {condition.description}
                </p>
                <Link
                  to={condition.url}
                  className="inline-flex items-center text-sm font-medium bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-3 py-1.5 rounded-md transition-colors duration-200 group mt-2 shadow-sm"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/conditions" className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
              View all mental health conditions we treat
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ServiceContentSection>

        <ServiceContentSection title="The Value of Therapy in Pennsylvania" hasBgPattern={true}>
          <div className="w-24 h-1 bg-amber-200 mx-auto mt-2 mb-8"></div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-5 text-muted-foreground"
              >
                <p className="leading-relaxed">
                  Individual therapy in Havertown is a transformative tool for mental health and personal growth. At Sunrise Human Care Services, our licensed therapists empower you to overcome challenges and thrive.
                </p>
                <p className="leading-relaxed">
                  Counseling helps uncover patterns behind distress, offering new ways to cope. Whether managing anxiety or healing trauma, we tailor strategies to fit your life.
                </p>
                <p className="leading-relaxed">
                  Beyond immediate relief, therapy builds resilience and self-awareness. Our holistic approach considers your unique needs, fostering lasting wellness through personalized sessions.
                </p>
                <p className="leading-relaxed">
                  If you’re ready to take the next step, our team is here to support you. <Link to="/contact" className="text-orange-600 hover:text-orange-700">Book a session today</Link> to begin.
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
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Long-Term Benefits of Therapy</h3>
                <Separator className="bg-amber-200 mb-4" />
                <ul className="space-y-4">
                  {[
                    "Improved emotional balance",
                    "Stronger sense of self",
                    "Healthier relationships",
                    "Relief from anxiety or depression",
                    "Tools for life’s challenges",
                    "Sustained personal growth"
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
          <div className="mt-10 text-center">
            <Link to="/contact" className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
              Start Your Path to Wellness
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ServiceContentSection>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-950 text-center tracking-tight">
              Benefits of Individual Therapy
            </h2>
            <div className="w-24 h-1 bg-amber-200 mx-auto mt-2 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-amber-50 border border-amber-100 rounded-lg p-6 shadow-sm"
                >
                  <CheckCircle2 className="h-6 w-6 text-orange-500 mb-4" />
                  <p className="text-amber-800 text-sm">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-amber-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-950 text-center tracking-tight">
              Our Therapeutic Approaches
            </h2>
            <div className="w-24 h-1 bg-amber-200 mx-auto mt-2 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {approaches.map((approach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-amber-100 rounded-lg p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-amber-100/80 p-3 flex-shrink-0">{approach.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-amber-900 mb-2">{approach.title}</h3>
                      <p className="text-sm text-muted-foreground">{approach.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-950 text-center tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-amber-200 mx-auto mt-2 mb-8"></div>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <AccordionItem value={`faq-${index}`} key={index}>
                  <AccordionTrigger className="text-lg font-semibold text-amber-950 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </ServicePageLayout>
    </>
  );
};

export default IndividualTherapy;
