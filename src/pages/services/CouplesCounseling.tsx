import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, ArrowRight, Heart, Users, MessageSquare, Star, Shield } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import SEOHead from '@/components/SEOHead';
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
      question: "Do both partners need to attend every session?",
      answer: "Couples counseling in Havertown works best with both partners present, but our marriage therapists may include individual sessions to support your goals."
    },
    {
      question: "Is couples counseling suitable for unmarried couples?",
      answer: "Yes, couples counseling in Havertown supports all committed relationships, helping partners in Delaware County strengthen their bond."
    },
    {
      question: "Is couples counseling only for struggling relationships?",
      answer: "No, couples counseling in Havertown enhances both challenged and healthy relationships, preventing issues with relationship therapy."
    },
    {
      question: "How long does couples counseling take?",
      answer: "Couples counseling in Havertown varies—some couples see progress in 8-12 sessions, others benefit from longer therapy."
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
      icon: <MessageSquare className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Transition Support Counseling",
      description: "Navigates major life changes like marriage or parenthood.",
      icon: <Heart className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Trust-Building Counseling",
      description: "Rebuilds trust after infidelity or breaches.",
      icon: <Shield className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Premarital Counseling",
      description: "Strengthens your foundation before marriage.",
      icon: <Star className="h-6 w-6 text-orange-500" />
    }
  ];

  const challenges = [
    {
      title: "Communication Breakdowns",
      description: "Couples counseling in Havertown improves dialogue and understanding."
    },
    {
      title: "Trust and Infidelity Issues",
      description: "Relationship therapy in Delaware County rebuilds trust after breaches."
    },
    {
      title: "Emotional Disconnection",
      description: "Couples therapy near me fosters intimacy and connection."
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
        description="Specialized couples counseling in Havertown, PA to help partners improve communication, resolve conflicts, and strengthen their relationship with expert guidance."
        pageTitle="Expert Couples Counseling in Havertown, PA | Relationship Therapy"
        metaDescription="Professional couples counseling in Havertown, PA for communication, trust, and intimacy. Serving Delaware County with evidence-based therapy."
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
                  Couples counseling in Havertown, PA at Sunrise Human Care Services provides a compassionate space to strengthen your relationship. Our licensed marriage therapists in Havertown help partners navigate challenges, fostering communication and trust.
                </p>
                <p className="leading-relaxed">
                  Starting couples therapy near me can feel daunting. Our Havertown team creates a welcoming environment, tailoring relationship therapy in Delaware County to your unique goals, whether resolving conflicts or deepening intimacy.
                </p>
                <p className="leading-relaxed">
                  We use evidence-based methods like EFT and The Gottman Method in our couples counseling in Havertown, offering tools for lasting change, available in-person or via telehealth.
                </p>
                <p className="leading-relaxed">
                  Therapy is a collaborative journey. Our marriage counseling PA services ensure you feel supported. <Link to="/contact" className="text-orange-600 hover:text-orange-700">Schedule your session today</Link>.
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
                      "Improving communication and understanding",
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
                    title: "Counseling Formats in Havertown",
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
              Our couples counseling in Havertown, PA is tailored to diverse relationship needs, from communication to premarital preparation, with evidence-based therapy.
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

        <ServiceContentSection title="Challenges Addressed in Couples Counseling" hasBgPattern={true}>
          <div className="w-24 h-1 bg-amber-200 mx-auto mt-2 mb-8"></div>
          <div className="mb-8 max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              Our couples counseling in Havertown addresses relationship challenges with evidence-based techniques to foster connection and resilience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="bg-amber-50/50 border border-amber-100 rounded-lg p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-amber-900 mb-2">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/challenges" className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
              Explore More Relationship Challenges
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
            <Link to="/contact" className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
              Book Your Havertown Counseling Session
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ServiceContentSection>
      </ServicePageLayout>
    </>
  );
};

export default CouplesCounseling;