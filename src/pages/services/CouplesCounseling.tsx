import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, ArrowRight, Heart, Users, MessageSquare, Star, Shield } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import SEOHead from '@/components/SEOHead';
import WarmServiceCard from '../../components/services/WarmServiceCard';
import { Link } from 'react-router-dom';

const CouplesCounseling = () => {
  const benefits = [
    "Licensed Havertown couples counselors with specialized training",
    "Convenient location on West Chester Pike with private session rooms",
    "Evening and weekend appointments for busy couples",
    "Most insurance plans accepted, including Medicaid",
    "Evidence-based approaches to relationship improvement"
  ];

  const approaches = [
    {
      title: "Emotionally Focused Therapy (EFT)",
      description: "Strengthens emotional bonds by identifying negative patterns and fostering secure attachment.",
      icon: <Heart className="h-5 w-5 text-orange-500" />
    },
    {
      title: "The Gottman Method",
      description: "Builds friendship, manages conflict, and creates shared meaning based on research.",
      icon: <Users className="h-5 w-5 text-orange-500" />
    },
    {
      title: "Imago Relationship Therapy",
      description: "Explores childhood influences on relationships to understand and meet each other’s needs.",
      icon: <Star className="h-5 w-5 text-orange-500" />
    },
    {
      title: "Solution-Focused Couples Therapy",
      description: "Focuses on solutions and future possibilities rather than past problems.",
      icon: <Shield className="h-5 w-5 text-orange-500" />
    }
  ];

  const faqs = [
    {
      question: "Do both partners need to attend every session?",
      answer: "Couples counseling in Havertown is most effective when both partners attend consistently. However, our marriage therapists in Havertown may include individual sessions when needed to support your relationship’s goals."
    },
    {
      question: "Is couples counseling appropriate for unmarried couples?",
      answer: "Yes! Couples counseling in Havertown supports all committed relationships, including dating, engaged, or long-term partnerships, helping couples in Delaware County strengthen their bond."
    },
    {
      question: "Is couples counseling only for relationships in crisis?",
      answer: "No, couples counseling in Havertown benefits both struggling and healthy relationships. Our relationship therapy in Delaware County enhances communication and prevents future issues."
    },
    {
      question: "How long does couples counseling typically take?",
      answer: "The duration of couples counseling in Havertown varies. Some couples achieve goals in 8-12 sessions, while others benefit from longer relationship therapy in Delaware County."
    }
  ];

  const relatedServices = [
    {
      title: "Family Therapy",
      description: "Support for family dynamics and communication in Havertown, PA.",
      url: "/family-therapy-havertown-pa",
      imageSrc: "/therapy-in-havertown.jpg"
    },
    {
      title: "Individual Therapy",
      description: "Personalized therapy for individual growth in Havertown, PA.",
      url: "/individual-therapy-havertown-pa",
      imageSrc: "/therapy-in-havertown.jpg"
    },
    {
      title: "Anxiety Therapy",
      description: "Targeted support for anxiety management in Havertown, PA.",
      url: "/anxiety-therapy-havertown-pa",
      imageSrc: "/therapy-in-havertown.jpg"
    }
  ];

  const whoCanBenefit = [
    {
      title: "Communication Challenges",
      description: "Couples counseling in Havertown helps partners improve dialogue and understanding.",
      icon: <MessageSquare className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Life Transitions",
      description: "Navigate marriage, parenthood, or retirement with relationship therapy in Delaware County.",
      icon: <Heart className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Trust Issues",
      description: "Rebuild trust after infidelity or breaches with couples therapy near me.",
      icon: <Shield className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Premarital Counseling",
      description: "Strengthen your foundation before marriage with Havertown counselors.",
      icon: <Star className="h-6 w-6 text-orange-500" />
    }
  ];

  return (
    <>
      <SEOHead
        title="Expert Couples Counseling in Havertown, PA | Marriage & Relationship Therapy"
        description="Transform your relationship with couples counseling in Havertown, PA. Licensed therapists help couples improve communication, resolve conflicts, and rebuild intimacy."
        canonicalUrl="https://sunrisehumancare.com/couples-counseling-havertown-pa"
        keywords="couples counseling Havertown, marriage counseling PA, relationship therapy Delaware County, couples therapy near me, marriage therapist Havertown, premarital counseling Delaware County"
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
        description="Specialized couples counseling in Havertown, PA to help partners improve communication, resolve conflicts, and strengthen their relationship with expert guidance."
        pageTitle="Expert Couples Counseling in Havertown, PA | Relationship Therapy"
        metaDescription="Professional couples counseling in Havertown, PA for communication, trust, and intimacy. Serving Delaware County with evidence-based therapy."
        serviceType="Couples Counseling"
        canonicalUrl="/couples-counseling-havertown-pa"
        heroImage="/images/couple-counseling-havertown-pa.webp"
        benefits={benefits}
        approaches={approaches}
        faqs={faqs}
        relatedServices={relatedServices}
      >
        <ServiceContentSection title="What to Expect in Couples Counseling" hasBgPattern={true}>
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
                  Couples counseling in Havertown, PA at Sunrise Human Care Services offers a safe space to strengthen your relationship. Our licensed marriage therapists in Havertown guide partners through challenges, helping you improve communication and rebuild intimacy.
                </p>
                <p className="leading-relaxed">
                  Using evidence-based methods like Emotionally Focused Therapy (EFT) and The Gottman Method, our couples counseling in Havertown addresses negative patterns, fosters trust, and equips you with tools for lasting connection.
                </p>
                <p className="leading-relaxed">
                  Whether facing conflict, trust issues, or seeking premarital counseling, our relationship therapy in Delaware County is tailored to your unique needs. We serve couples in Havertown, Drexel Hill, and Broomall with compassion and expertise.
                </p>
                <p className="leading-relaxed">
                  Start your journey with couples therapy near me. Our Havertown counselors create a collaborative plan to meet your goals. <Link to="/contact" className="text-orange-600 hover:text-orange-700">Schedule your session today</Link>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-7 rounded-xl shadow-md border border-amber-100 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-amber-900 mb-5">Couples Counseling Helps With</h3>
              <ul className="space-y-3.5">
                {[
                  "Improving communication skills",
                  "Rebuilding trust and intimacy",
                  "Resolving ongoing conflicts",
                  "Preparing for marriage",
                  "Recovering from infidelity",
                  "Navigating life transitions",
                  "Addressing parenting challenges",
                  "Deepening emotional connection"
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

        <ServiceContentSection title="Who Can Benefit from Couples Counseling?" hasBgPattern={false}>
          <div className="w-24 h-1 bg-amber-200 mx-auto mt-2 mb-8"></div>
          <div className="mb-10 max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              Couples counseling in Havertown, PA supports relationships at any stage, from new partnerships to long-term marriages, with tailored therapy to meet your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {whoCanBenefit.map((item, index) => (
              <motion.div
                key={index}
                className="bg-amber-50/50 border border-amber-100 rounded-lg p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-amber-100/80 p-3 flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors"
            >
              Start Your Counseling Journey
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ServiceContentSection>

        <ServiceContentSection title="Our Approach to Couples Therapy" hasBgPattern={true}>
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
                  Our couples counseling in Havertown uses evidence-based approaches to deliver lasting results. Licensed marriage therapists in Havertown tailor each session to your relationship’s unique dynamics and goals.
                </p>
                <p className="leading-relaxed">
                  From EFT to The Gottman Method, our relationship therapy in Delaware County helps couples build practical skills for communication, conflict resolution, and emotional connection.
                </p>
                <p className="leading-relaxed">
                  We create a collaborative and empowering environment, ensuring couples therapy near me feels personalized. Our Havertown counselors focus on actionable strategies you can use daily.
                </p>
                <p className="leading-relaxed">
                  No two relationships are alike, and neither are our sessions. Contact us for couples counseling in Havertown to start building a stronger bond today.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-7 rounded-xl shadow-md border border-amber-100 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-amber-900 mb-5">Our Therapeutic Methods</h3>
              <ul className="space-y-4">
                {approaches.map((approach, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-3"
                  >
                    <div className="rounded-full bg-amber-100/80 p-3 flex-shrink-0">{approach.icon}</div>
                    <div>
                      <span className="font-semibold text-amber-900">{approach.title}</span>
                      <p className="text-sm text-muted-foreground">{approach.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
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
                  Couples counseling in Havertown, PA is a powerful way to strengthen your relationship. At Sunrise Human Care Services, our licensed marriage therapists in Havertown empower couples with evidence-based tools.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Relationship therapy in Delaware County helps uncover patterns causing distress, offering strategies to improve communication and trust. Our Havertown counselors tailor plans to your unique needs.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Beyond resolving conflicts, couples therapy near me builds resilience and connection. We address emotional, social, and practical factors for holistic care, ensuring lasting change.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Whether rebuilding trust or deepening intimacy, marriage counseling PA offers a path forward. <Link to="/contact" className="text-orange-600 hover:text-orange-700">Contact us today</Link> for couples counseling in Havertown.
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
                    "Enhanced communication with your partner",
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
            <Link
              to="/contact"
              className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors"
            >
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

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-amber-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-950 text-center tracking-tight">
              Related Services
            </h2>
            <div className="w-24 h-1 bg-amber-200 mx-auto mt-2 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <WarmServiceCard
                    title={service.title}
                    description={service.description}
                    imageSrc={service.imageSrc}
                    url={service.url}
                    delay={index * 0.1}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ServicePageLayout>
    </>
  );
};

export default CouplesCounseling;