import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, ArrowRight, Heart, Users, MessageCircle, Star, Shield } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import SEOHead from '../../components/SEOHead';
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
      answer: "Couples counseling in Havertown at Sunrise Human Care involves a personalized process where licensed therapists help partners improve communication, resolve conflicts, and strengthen their bond in a safe, confidential setting."
    },
    {
      question: "Do both partners need to attend every session?",
      answer: "Couples counseling in Havertown works best with both partners present, but our marriage therapists may include individual sessions to support your relationship’s goals."
    },
    {
      question: "Is couples counseling suitable for unmarried couples?",
      answer: "Yes, couples counseling in Havertown supports all committed relationships, helping partners in Delaware County build stronger connections, regardless of marital status."
    },
    {
      question: "How long does couples counseling take?",
      answer: "The duration of couples counseling in Havertown varies—some couples see progress in 8-12 sessions, while others benefit from longer relationship therapy in Delaware County."
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
      description: "Improves dialogue and understanding in your relationship.",
      icon: <MessageCircle className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Premarital Counseling",
      description: "Strengthens your foundation before marriage.",
      icon: <Star className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Trust-Building Counseling",
      description: "Rebuilds trust after infidelity or challenges.",
      icon: <Shield className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Transition Support Counseling",
      description: "Navigates life changes like parenthood or retirement.",
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
                  Couples counseling in Havertown, PA at Sunrise Human Care Services offers a supportive space to strengthen your relationship. Our licensed marriage therapists in Havertown guide partners through challenges, fostering communication and trust.
                </p>
                <p className="leading-relaxed">
                  Starting couples therapy near me can feel daunting. Our Havertown team creates a welcoming environment, tailoring relationship therapy in Delaware County to your goals, whether resolving conflicts or deepening intimacy.
                </p>
                <p className="leading-relaxed">
                  We use evidence-based approaches like EFT and The Gottman Method in our couples counseling in Havertown, offering tools for lasting change, available in-person or via telehealth.
                </p>
                <p className="leading-relaxed">
                  Therapy is a collaborative journey. Our marriage counseling PA ensures you feel supported. <Link to="/contact" className="text-orange-600 hover:text-orange-700">Schedule your session today</Link>.
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
                    title: "What Does Couples Counseling in Havertown Involve?",
                    items: [
                      "Improving communication between partners",
                      "Setting shared relationship goals",
                      "Resolving conflicts effectively",
                      "Rebuilding trust and intimacy",
                      "Navigating life transitions together",
                      "Strengthening emotional connection",
                      "Learning practical relationship skills",
                      "Preparing for marriage or commitment"
                    ]
                  },
                  {
                    title: "Counseling Formats in Havertown, PA",
                    items: [
                      "In-person couples counseling in Havertown",
                      "Telehealth for marriage counseling PA",
                      "Short-term focused therapy sessions",
                      "Long-term relationship support",
                      "Premarital counseling programs",
                      "Crisis intervention for urgent issues",
                      "Flexible session scheduling",
                      "Combination with individual therapy"
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
              Our couples counseling in Havertown, PA is tailored to meet diverse relationship needs, from communication to premarital preparation, with evidence-based therapy.
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
              Our couples counseling in Havertown addresses relationship challenges with evidence-based techniques to foster connection and resilience.
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
                  Couples counseling in Havertown, PA is a powerful tool for strengthening relationships. Our licensed marriage therapists in Havertown empower couples with evidence-based therapy.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Relationship therapy in Delaware County uncovers patterns causing distress, offering strategies to improve communication and trust. Our counselors tailor plans for your needs.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Beyond resolving conflicts, couples therapy near me builds resilience and connection. We ensure holistic care for lasting change through marriage counseling PA.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Whether rebuilding trust or deepening intimacy, couples counseling in Havertown offers a path forward. <Link to="/contact" className="text-orange-600 hover:text-orange-700">Contact us today</Link>.
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
                    "Improved communication with your partner",
                    "Restored trust and emotional intimacy",
                    "Effective conflict resolution skills",
                    "Stronger foundation for marriage",
                    "Support through life’s transitions",
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