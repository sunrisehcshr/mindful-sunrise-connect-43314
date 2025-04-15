import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, ArrowRight, Heart, Users, MessageCircle, Star, Shield, Calendar } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import SEOHead from '../../components/SEOHead';
import WarmServiceCard from '../../components/services/WarmServiceCard';
import { Link } from 'react-router-dom';

const CouplesCounseling = () => {
  const benefits = [
    "Expert couples counselors trained in Havertown",
    "Private, comfortable session rooms",
    "Flexible evening and weekend scheduling",
    "Insurance-friendly, including Medicaid",
    "Proven therapeutic techniques for relationships"
  ];

  const approaches = [
    {
      title: "Emotionally Focused Therapy (EFT)",
      description: "Deepens emotional connections by reshaping interaction patterns.",
      icon: <Heart className="h-5 w-5 text-orange-500" />
    },
    {
      title: "The Gottman Method",
      description: "Enhances friendship and equips couples with conflict resolution skills.",
      icon: <Users className="h-5 w-5 text-orange-500" />
    },
    {
      title: "Imago Relationship Therapy",
      description: "Uses past experiences to foster mutual understanding and growth.",
      icon: <Star className="h-5 w-5 text-orange-500" />
    },
    {
      title: "Solution-Focused Couples Therapy",
      description: "Targets immediate solutions for practical relationship improvements.",
      icon: <Shield className="h-5 w-5 text-orange-500" />
    }
  ];

  const faqs = [
    {
      question: "What can we expect from couples counseling in Havertown?",
      answer: "Couples counseling in Havertown at Sunrise Human Care offers a tailored approach where licensed therapists guide partners to improve communication, resolve conflicts, and build a stronger bond in a confidential, supportive environment."
    },
    {
      question: "Is couples counseling effective for long-term relationships?",
      answer: "Yes, couples counseling in Havertown helps long-term partners address entrenched patterns, rebuild trust, and rediscover connection, using proven methods like The Gottman Method."
    },
    {
      question: "Can unmarried couples benefit from relationship therapy in Delaware County?",
      answer: "Absolutely, relationship therapy in Delaware County supports all committed relationships, helping unmarried couples strengthen their partnership and navigate challenges."
    },
    {
      question: "How many sessions are needed for couples therapy near me?",
      answer: "The duration of couples therapy near me depends on your goals—some couples see progress in 8-12 sessions, while others engage longer for deeper transformation."
    },
    {
      question: "Does marriage counseling PA accept insurance?",
      answer: "Yes, our marriage counseling PA services accept most insurance plans, including Medicaid. We verify coverage before starting to ensure accessibility."
    }
  ];

  const relatedServices = [
    { title: "Family Therapy", url: "/family-therapy-havertown-pa" },
    { title: "Individual Therapy", url: "/individual-therapy-havertown-pa" },
    { title: "Anxiety Therapy", url: "/anxiety-therapy-havertown-pa" }
  ];

  const counselingTypes = [
    {
      title: "Communication-Focused Counseling",
      description: "Develops clear, empathetic dialogue to reduce misunderstandings and foster closeness.",
      icon: <MessageCircle className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Premarital Counseling",
      description: "Prepares couples for marriage by aligning values and planning for future challenges.",
      icon: <Star className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Trust-Building Counseling",
      description: "Guides partners to restore trust after breaches like infidelity or betrayal.",
      icon: <Shield className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Transition Support Counseling",
      description: "Supports couples through major life changes, such as parenthood or career shifts.",
      icon: <Heart className="h-6 w-6 text-orange-500" />
    }
  ];

  const challenges = [
    {
      title: "Communication Breakdowns",
      description: "Couples counseling in Havertown helps partners overcome misunderstandings and improve dialogue.",
      imageSrc: "/therapy-in-havertown.jpg"
    },
    {
      title: "Trust and Infidelity Issues",
      description: "Relationship therapy in Delaware County rebuilds trust after emotional or physical betrayals.",
      imageSrc: "/therapy-in-havertown.jpg"
    },
    {
      title: "Emotional Disconnection",
      description: "Couples therapy near me fosters intimacy and rekindles emotional bonds.",
      imageSrc: "/therapy-in-havertown.jpg"
    },
    {
      title: "Conflict Over Life Goals",
      description: "Marriage counseling PA aligns partners on shared visions for the future.",
      imageSrc: "/therapy-in-havertown.jpg"
    }
  ];

  return (
    <>
      <SEOHead
        title="Expert Couples Counseling in Havertown, PA | Marriage & Relationship Therapy"
        description="Strengthen your relationship with couples counseling in Havertown, PA. Licensed therapists offer personalized support to improve communication, rebuild trust, and deepen intimacy in Delaware County."
        canonicalUrl="https://sunrisehumancare.com/couples-counseling-havertown-pa"
        keywords="couples counseling Havertown, marriage counseling PA, relationship therapy Delaware County, couples therapy near me, marriage therapist Havertown, premarital counseling Havertown"
        serviceSchema={{
          name: "Couples Counseling",
          description: "Expert couples counseling in Havertown, PA to enhance communication, resolve conflicts, and strengthen relationships.",
          provider: "Sunrise Human Care Services",
          serviceType: "Couples Therapy",
          areaServed: "Havertown, PA and Delaware County"
        }}
      />

      <ServicePageLayout
        title="Couples Counseling in Havertown, PA"
        description="Expert couples counseling in Havertown, PA with licensed therapists dedicated to helping partners improve communication, resolve conflicts, and build stronger relationships through evidence-based therapy."
        pageTitle="Expert Couples Counseling in Havertown, PA | Relationship Therapy"
        metaDescription="Strengthen your relationship with couples counseling in Havertown, PA. Licensed therapists offer personalized support to improve communication, rebuild trust, and deepen intimacy in Delaware County."
        serviceType="Couples Counseling"
        canonicalUrl="/couples-counseling-havertown-pa"
        benefits={benefits}
        approaches={approaches}
        faqs={faqs}
        relatedServices={relatedServices}
      >
        <ServiceContentSection title="Why Choose Couples Counseling in Havertown, PA" hasBgPattern={true}>
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
                  Couples counseling in Havertown, PA at Sunrise Human Care Services offers a safe, nurturing environment to strengthen your partnership. Our licensed therapists specialize in helping couples navigate challenges, from everyday misunderstandings to deeper relational issues, fostering a renewed sense of connection.
                </p>
                <p className="leading-relaxed">
                  Starting couples therapy near me can feel like a big step. Our Havertown team is committed to making the process welcoming, listening closely to your needs and tailoring sessions to align with your relationship goals, whether you’re seeking to resolve conflicts or deepen your bond.
                </p>
                <p className="leading-relaxed">
                  We draw on evidence-based approaches like Emotionally Focused Therapy (EFT) and The Gottman Method, adapting each session to your unique dynamic. Whether you prefer in-person counseling in Havertown or telehealth for marriage counseling PA, we provide tools to create lasting change.
                </p>
                <p className="leading-relaxed">
                  Therapy is a collaborative journey, and our counselors work alongside you to track progress and celebrate milestones. If you’re ready to invest in your relationship, <Link to="/contact" className="text-orange-600 hover:text-orange-700">schedule a consultation today</Link> to begin.
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
                    title: "What Does Couples Counseling Involve?",
                    items: [
                      "Exploring your relationship dynamics with a skilled therapist",
                      "Identifying patterns that cause tension or distance",
                      "Developing healthier communication habits",
                      "Creating shared goals for your partnership",
                      "Learning to navigate disagreements constructively",
                      "Rebuilding emotional and physical intimacy",
                      "Addressing past hurts with empathy",
                      "Planning for a stronger future together"
                    ]
                  },
                  {
                    title: "Why Havertown for Couples Counseling?",
                    items: [
                      "Compassionate, licensed therapists in Havertown",
                      "Convenient access for Delaware County couples",
                      "Welcoming, judgment-free therapy spaces",
                      "Customized sessions for your unique needs",
                      "Support for all relationship stages",
                      "Integration of proven therapy methods",
                      "Options for in-person or virtual sessions",
                      "Focus on measurable relationship growth"
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

        <ServiceContentSection title="How Couples Counseling Works in Havertown" className="bg-white">
          <div className="w-24 h-1 bg-amber-200 mx-auto mt-2 mb-8"></div>
          <div className="mb-10 max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground">
              Couples counseling in Havertown, PA is a structured yet flexible process designed to help partners grow closer and tackle obstacles together. Here’s what the journey looks like at Sunrise Human Care Services.
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
                  Your couples counseling journey begins with a consultation where we discuss your goals and challenges. Our Havertown therapists listen carefully to understand both partners’ perspectives, setting the stage for personalized marriage counseling PA.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">Tailored Therapy Plan</h3>
                <p className="leading-relaxed">
                  Based on your needs, we craft a therapy plan using approaches like EFT or The Gottman Method. Sessions focus on actionable steps to improve communication, rebuild trust, or navigate transitions, ensuring relationship therapy in Delaware County feels relevant.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">Ongoing Support</h3>
                <p className="leading-relaxed">
                  Weekly or bi-weekly sessions provide consistent support, with progress reviews to adjust strategies. Couples therapy near me includes tools like communication exercises and conflict resolution techniques to practice between sessions.
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
              <h3 className="text-xl font-semibold text-amber-900 mb-4">What Sets Our Counseling Apart</h3>
              <Separator className="bg-amber-200 mb-4" />
              <ul className="space-y-4">
                {[
                  "Personalized plans for every couple’s unique story",
                  "Therapists trained in cutting-edge relationship methods",
                  "Focus on practical, real-world relationship skills",
                  "Support for both immediate and long-term goals",
                  "A warm, inclusive space for all couples",
                  "Progress tracking to celebrate your growth"
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
              Learn More About Starting Counseling
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ServiceContentSection>

        <ServiceContentSection title="Types of Couples Counseling in Havertown" hasBgPattern={true}>
          <div className="w-24 h-1 bg-amber-200 mx-auto mt-2 mb-8"></div>
          <div className="mb-10 max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground">
              Couples counseling in Havertown, PA is tailored to meet diverse needs, from enhancing daily interactions to preparing for lifelong commitments. Our licensed therapists offer specialized formats to support your relationship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {counselingTypes.map((type, index) => (
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
              Find the Right Counseling for You
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ServiceContentSection>

        <ServiceContentSection title="Relationship Challenges Addressed in Havertown" className="bg-white">
          <div className="w-24 h-1 bg-amber-200 mx-auto mt-2 mb-8"></div>
          <div className="mb-10 max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground">
              Every relationship faces hurdles, but couples counseling in Havertown provides targeted support to overcome them. Our therapists help partners address common challenges with compassion and expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <WarmServiceCard
                key={index}
                title={challenge.title}
                description={challenge.description}
                imageSrc={challenge.imageSrc}
                delay={index * 0.1}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
              Explore More Counseling Options
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ServiceContentSection>

        <ServiceContentSection title="The Value of Couples Counseling in Pennsylvania" hasBgPattern={true}>
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
                  Couples counseling in Havertown, PA is more than conflict resolution—it’s an investment in your relationship’s future. At Sunrise Human Care Services, our licensed therapists empower partners to build resilience, trust, and joy together.
                </p>
                <p className="leading-relaxed">
                  Relationship therapy in Delaware County uncovers the root causes of disconnection, offering practical strategies to restore harmony. Whether addressing trust issues or aligning life goals, our counselors create a plan that fits your unique journey.
                </p>
                <p className="leading-relaxed">
                  Beyond immediate challenges, couples therapy near me cultivates skills for lifelong partnership. From better communication to deeper intimacy, our Havertown sessions lay the foundation for lasting change through marriage counseling PA.
                </p>
                <p className="leading-relaxed">
                  If you’re ready to transform your relationship, our team is here to guide you. <Link to="/contact" className="text-orange-600 hover:text-orange-700">Book your first session today</Link> and discover the difference counseling can make.
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
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Long-Term Benefits of Counseling</h3>
                <Separator className="bg-amber-200 mb-4" />
                <ul className="space-y-4">
                  {[
                    "Stronger emotional connection with your partner",
                    "Improved ability to handle disagreements",
                    "Renewed sense of trust and security",
                    "Clarity on shared goals and values",
                    "Enhanced intimacy and mutual support",
                    "Skills to navigate future challenges"
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
              Start Building a Stronger Relationship
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ServiceContentSection>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-950 text-center tracking-tight">
              Benefits of Couples Counseling
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

export default CouplesCounseling;