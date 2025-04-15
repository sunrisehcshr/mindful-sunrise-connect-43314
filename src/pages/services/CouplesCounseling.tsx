import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, ArrowRight, Heart, Users, MessageCircle, Star, Shield } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import SEOHead from '../../components/SEOHead';
import WarmServiceCard from '../../components/services/WarmServiceCard';
import { Link } from 'react-router-dom';

const CouplesCounseling = () => {
  const benefits = [
    "Licensed Havertown couples counselors with specialized training",
    "Convenient location with private session rooms",
    "Evening and weekend appointments for busy couples",
    "Most insurance plans accepted, including Medicaid",
    "Evidence-based approaches to relationship improvement"
  ];

  const approaches = [
    {
      title: "Emotionally Focused Therapy (EFT)",
      description: "Strengthens emotional bonds by addressing negative patterns.",
      icon: <Heart className="h-5 w-5 text-orange-500" />
    },
    {
      title: "The Gottman Method",
      description: "Builds friendship and manages conflict with research-backed tools.",
      icon: <Users className="h-5 w-5 text-orange-500" />
    },
    {
      title: "Imago Relationship Therapy",
      description: "Explores childhood influences to meet each other’s needs.",
      icon: <Star className="h-5 w-5 text-orange-500" />
    },
    {
      title: "Solution-Focused Couples Therapy",
      description: "Focuses on solutions for quick, effective change.",
      icon: <Shield className="h-5 w-5 text-orange-500" />
    }
  ];

  const faqs = [
    {
      question: "What is couples counseling in Havertown like?",
      answer: "Couples counseling in Havertown at Sunrise Human Care involves a personalized process where licensed therapists help partners improve communication, resolve conflicts, and strengthen their bond in a safe setting."
    },
    {
      question: "Do both partners need to attend every session?",
      answer: "Couples counseling in Havertown works best with both partners, but our marriage therapists may include individual sessions to support your goals."
    },
    {
      question: "Is couples counseling suitable for unmarried couples?",
      answer: "Yes, relationship therapy in Delaware County supports all committed relationships, helping partners build stronger connections."
    },
    {
      question: "How long does couples counseling take?",
      answer: "Couples therapy near me varies—some couples see progress in 8-12 sessions, while others benefit from longer support."
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
      description: "Enhances dialogue and mutual understanding between partners.",
      icon: <MessageCircle className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Premarital Counseling",
      description: "Builds a strong foundation for couples planning marriage.",
      icon: <Star className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Trust-Building Counseling",
      description: "Restores trust after challenges like infidelity.",
      icon: <Shield className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Transition Support Counseling",
      description: "Guides couples through life changes like parenthood.",
      icon: <Heart className="h-6 w-6 text-orange-500" />
    }
  ];

  const challenges = [
    {
      title: "Communication Issues",
      description: "Couples counseling in Havertown improves dialogue and understanding.",
      url: "/communication-therapy-havertown-pa",
      imageSrc: "/therapy-in-havertown.jpg"
    },
    {
      title: "Trust and Infidelity",
      description: "Relationship therapy in Delaware County rebuilds trust after breaches.",
      url: "/trust-therapy-havertown-pa",
      imageSrc: "/therapy-in-havertown.jpg"
    },
    {
      title: "Emotional Disconnection",
      description: "Couples therapy near me fosters intimacy and connection.",
      url: "/intimacy-therapy-havertown-pa",
      imageSrc: "/therapy-in-havertown.jpg"
    }
  ];

  return (
    <>
      <SEOHead
        title="Expert Couples Counseling in Havertown, PA | Marriage & Relationship Therapy"
        description="Transform your relationship with couples counseling in Havertown, PA. Licensed therapists help couples improve communication, resolve conflicts, and rebuild intimacy."
        canonicalUrl="https://sunrisehumancare.com/couples-counseling-havertown-pa"
        keywords="couples counseling Havertown, marriage counseling PA, relationship therapy Delaware County, couples therapy near me, marriage therapist Havertown"
        serviceSchema={{
          name: "Couples Counseling",
          description: "Couples counseling in Havertown, PA to improve communication and strengthen relationships.",
          provider: "Sunrise Human Care Services",
          serviceType: "Couples Therapy",
          areaServed: "Havertown, PA and Delaware County"
        }}
      />

      <ServicePageLayout
        title="Couples Counseling in Havertown, PA"
        description="Discover couples counseling in Havertown, PA with licensed therapists helping partners strengthen their relationship, improve communication, and resolve conflicts."
        pageTitle="Expert Couples Counseling in Havertown, PA | Relationship Therapy"
        metaDescription="Couples counseling in Havertown, PA for communication, trust, and intimacy. Licensed therapists serve Delaware County with evidence-based approaches."
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
                  Couples counseling in Havertown, PA at Sunrise Human Care Services provides a nurturing space to enhance your relationship. Our licensed therapists guide partners through challenges, promoting trust and understanding.
                </p>
                <p className="leading-relaxed">
                  Beginning couples therapy near me may feel overwhelming. Our Havertown team offers a warm, supportive environment, customizing relationship therapy in Delaware County to your unique needs.
                </p>
                <p className="leading-relaxed">
                  We employ proven methods like Emotionally Focused Therapy and The Gottman Method, tailored to foster lasting change, available in-person or via telehealth for marriage counseling PA.
                </p>
                <p className="leading-relaxed">
                  Therapy is a partnership. We work with you to ensure progress feels meaningful. <Link to="/contact" className="text-orange-600 hover:text-orange-700">Start your journey today</Link>.
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
                      "Enhancing partner communication",
                      "Setting mutual goals",
                      "Resolving relationship conflicts",
                      "Building emotional intimacy",
                      "Navigating life transitions",
                      "Strengthening connection",
                      "Learning practical skills",
                      "Preparing for commitment"
                    ]
                  },
                  {
                    title: "Counseling Formats in Havertown",
                    items: [
                      "In-person sessions in Havertown",
                      "Telehealth for Pennsylvania couples",
                      "Short-term focused counseling",
                      "Long-term relationship support",
                      "Premarital guidance programs",
                      "Crisis support for urgent needs",
                      "Flexible scheduling options",
                      "Integration with individual therapy"
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

        <ServiceContentSection title="Types of Couples Counseling in Havertown" className="bg-white">
          <div className="w-24 h-1 bg-amber-200 mx-auto mt-2 mb-8"></div>
          <div className="mb-10 max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              Our couples counseling in Havertown, PA addresses diverse relationship needs, from communication to preparing for marriage, using evidence-based techniques.
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
          <div className="mt-6 text-center">
            <Link to="/contact" className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
              Start Your Counseling Journey
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ServiceContentSection>

        <ServiceContentSection title="Relationship Challenges Addressed in Havertown" hasBgPattern={true}>
          <div className="w-24 h-1 bg-amber-200 mx-auto mt-2 mb-8"></div>
          <div className="mb-8 max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              Our couples counseling in Havertown tackles common relationship issues with proven methods to restore connection and resilience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <WarmServiceCard
                key={index}
                title={challenge.title}
                description={challenge.description}
                imageSrc={challenge.imageSrc}
                url={challenge.url}
                delay={index * 0.1}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/challenges" className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
              View all relationship challenges we address
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ServiceContentSection>

        <ServiceContentSection title="The Value of Couples Counseling in Pennsylvania" className="bg-white">
          <div className="w-24 h-1 bg-amber-200 mx-auto mt-2 mb-8"></div>
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
                  Couples counseling in Havertown, PA empowers partners to build stronger relationships. Our licensed therapists offer tailored guidance for lasting change.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Relationship therapy in Delaware County helps identify patterns causing distress, providing tools to enhance communication and trust in a supportive setting.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Beyond resolving conflicts, couples therapy near me fosters resilience and deeper connection, ensuring holistic support through marriage counseling PA.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Whether addressing trust issues or enhancing intimacy, our Havertown counseling offers a clear path forward. <Link to="/contact" className="text-orange-600 hover:text-orange-700">Contact us today</Link>.
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
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Benefits of Starting Counseling</h3>
                <Separator className="bg-amber-200 mb-4" />
                <ul className="space-y-4">
                  {[
                    "Enhanced partner communication",
                    "Restored trust and intimacy",
                    "Effective conflict resolution",
                    "Stronger relationship foundation",
                    "Support for life transitions",
                    "Lasting connection in Havertown"
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
              Book Your Havertown Counseling Session
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