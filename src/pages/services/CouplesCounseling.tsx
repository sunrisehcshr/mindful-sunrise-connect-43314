
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const CouplesCounseling = () => {
  const benefits = [
    "Improve communication and resolve recurring conflicts",
    "Rebuild trust and repair relationship after breaches",
    "Deepen emotional intimacy and connection",
    "Navigate major life transitions together",
    "Learn to recognize and break unhealthy patterns",
    "Develop skills for long-term relationship success"
  ];
  
  const approaches = [
    {
      title: "Emotionally Focused Therapy (EFT)",
      description: "Focuses on strengthening the emotional bond between partners, identifying negative interaction patterns, and developing more secure attachment."
    },
    {
      title: "The Gottman Method",
      description: "Based on decades of research, this approach helps couples build friendship, manage conflict, and create shared meaning in their relationship."
    },
    {
      title: "Imago Relationship Therapy",
      description: "Explores how childhood experiences influence partner selection and relationship dynamics, helping couples understand and fulfill each other's needs."
    },
    {
      title: "Solution-Focused Couples Therapy",
      description: "Concentrates on identifying solutions rather than analyzing problems, focusing on future possibilities rather than past disappointments."
    }
  ];
  
  const faqs = [
    {
      question: "Do both partners need to attend every session?",
      answer: "Ideally, yes. Couples therapy is most effective when both partners participate consistently. However, we may occasionally conduct individual sessions as part of the overall treatment plan."
    },
    {
      question: "We're not married. Is couples counseling still appropriate for us?",
      answer: "Absolutely! Couples counseling benefits all committed relationships regardless of marital status, including dating, engaged, and long-term partnerships."
    },
    {
      question: "Is couples counseling only for relationships in crisis?",
      answer: "Not at all. While many couples seek therapy during difficult times, counseling can benefit healthy relationships too. It can strengthen communication, deepen connection, and help navigate transitions like moving in together, having children, or retirement."
    },
    {
      question: "How long does couples counseling typically take?",
      answer: "The duration varies depending on your specific situation and goals. Some couples achieve their objectives in 8-12 sessions, while others benefit from longer-term support. We'll discuss timeframes during your initial consultation."
    }
  ];
  
  const relatedServices = [
    { title: "Family Therapy", url: "/family-therapy-havertown-pa" },
    { title: "Individual Therapy", url: "/individual-therapy-havertown-pa" },
    { title: "Anxiety Therapy", url: "/anxiety-therapy-havertown-pa" }
  ];
  
  return (
    <ServicePageLayout
      title="Couples Counseling in Havertown, PA"
      description="Specialized therapy to help couples improve communication, resolve conflicts, and strengthen their relationship with professional guidance."
      pageTitle="Expert Couples Counseling in Havertown, PA - Relationship Therapy | Sunrise Human Care Services"
      metaDescription="Professional couples counseling in Havertown, PA. Improve communication, resolve conflicts, and rebuild intimacy with our experienced relationship therapists. Book your consultation today."
      serviceType="Couples Counseling"
      canonicalUrl="/couples-counseling-havertown-pa"
      heroImage="/images/couple-counseling-havertown-pa.webp"
      benefits={benefits}
      approaches={approaches}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      {/* Enhanced service-specific content */}
      <ServiceContentSection
        title="Our Approach to Couples Counseling"
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
                At Sunrise Human Care Services in Havertown, PA, we understand that every relationship is unique. Our couples counseling begins with a thorough assessment to understand each partner's perspective, the relationship history, and your shared goals.
              </p>
              
              <p className="leading-relaxed">
                Using evidence-based approaches, we help you identify and address patterns that may be causing distress in your relationship. Our therapists create a balanced environment where both partners feel heard and respected.
              </p>
              
              <p className="leading-relaxed">
                Throughout therapy, you'll learn practical communication skills, emotional regulation techniques, and conflict resolution strategies that you can apply immediately. We focus on building upon your relationship's existing strengths while addressing areas that need improvement.
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
              Our Couples Counseling Helps With:
            </h3>
            
            <ul className="space-y-3.5">
              {[
                "Communication breakdowns",
                "Recurring arguments and conflicts",
                "Trust issues and infidelity recovery",
                "Intimacy and connection challenges",
                "Navigating major life changes together",
                "Parenting disagreements",
                "Pre-marital counseling",
                "Managing extended family relationships"
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
    </ServicePageLayout>
  );
};

export default CouplesCounseling;
