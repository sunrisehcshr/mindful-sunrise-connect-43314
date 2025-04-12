import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const CouplesCounseling = () => {
  const benefits = ["Improve communication and resolve recurring conflicts", "Rebuild trust and repair relationship after breaches", "Deepen emotional intimacy and connection", "Navigate major life transitions together", "Learn to recognize and break unhealthy patterns", "Develop skills for long-term relationship success"];
  const approaches = [{
    title: "Emotionally Focused Therapy (EFT)",
    description: "Focuses on strengthening the emotional bond between partners, identifying negative interaction patterns, and developing more secure attachment."
  }, {
    title: "The Gottman Method",
    description: "Based on decades of research, this approach helps couples build friendship, manage conflict, and create shared meaning in their relationship."
  }, {
    title: "Imago Relationship Therapy",
    description: "Explores how childhood experiences influence partner selection and relationship dynamics, helping couples understand and fulfill each other's needs."
  }, {
    title: "Solution-Focused Couples Therapy",
    description: "Concentrates on identifying solutions rather than analyzing problems, focusing on future possibilities rather than past disappointments."
  }];
  const faqs = [{
    question: "Do both partners need to attend every session?",
    answer: "Ideally, yes. Couples counseling in Havertown is most effective when both partners participate consistently. However, at our Havertown couples therapy practice, we may occasionally conduct individual sessions as part of the overall treatment plan when appropriate. Our goal is to create a balanced approach that serves your relationship's specific needs."
  }, {
    question: "We're not married. Is couples counseling still appropriate for us?",
    answer: "Absolutely! Our couples counseling in Havertown benefits all committed relationships regardless of marital status, including dating, engaged, and long-term partnerships. Many unmarried couples throughout Havertown, Drexel Hill, and Broomall seek our relationship therapy services to strengthen their bond, improve communication, and navigate challenges together."
  }, {
    question: "Is couples counseling only for relationships in crisis?",
    answer: "Not at all. While many couples seek therapy during difficult times, couples counseling in Havertown can benefit healthy relationships too. Our Havertown relationship therapists help couples strengthen communication, deepen connection, and navigate transitions like moving in together, having children, or retirement. Proactive couples therapy can help prevent small issues from becoming major problems."
  }, {
    question: "How long does couples counseling typically take?",
    answer: "The duration of couples therapy in Havertown varies depending on your specific situation and goals. Some couples achieve their objectives in 8-12 sessions at our Havertown practice, while others benefit from longer-term support. We'll discuss timeframes during your initial consultation and regularly evaluate progress throughout your couples counseling journey with us."
  }];
  const relatedServices = [{
    title: "Family Therapy in Havertown",
    url: "/family-therapy-havertown-pa"
  }, {
    title: "Individual Therapy in Havertown",
    url: "/individual-therapy-havertown-pa"
  }, {
    title: "Anxiety Therapy in Havertown",
    url: "/anxiety-therapy-havertown-pa"
  }];
  return <ServicePageLayout title="Couples Counseling in Havertown, PA" description="Specialized therapy to help couples improve communication, resolve conflicts, and strengthen their relationship with professional guidance." pageTitle="Expert Couples Counseling in Havertown, PA - Relationship Therapy | Sunrise Human Care Services" metaDescription="Professional couples counseling in Havertown, PA serving Delaware County communities. Improve communication, resolve conflicts, and rebuild intimacy with our experienced relationship therapists. Couples therapy for Havertown, Drexel Hill, and Broomall." serviceType="Couples Counseling" canonicalUrl="/couples-counseling-havertown-pa" heroImage="/images/couple-counseling-havertown-pa.webp" benefits={benefits} approaches={approaches} faqs={faqs} relatedServices={relatedServices}>
      {/* Enhanced service-specific content */}
      <ServiceContentSection title="Our Couples Counseling Approach in Havertown" hasBgPattern={true}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <div className="space-y-5 text-muted-foreground">
              <p className="leading-relaxed">
                At Sunrise Human Care Services in Havertown, PA, we understand that every relationship is unique. Our couples counseling begins with a thorough assessment to understand each partner's perspective, the relationship history, and your shared goals as a couple.
              </p>
              
              <p className="leading-relaxed">
                Using evidence-based approaches to couples therapy in Havertown, we help you identify and address patterns that may be causing distress in your relationship. Our couples counselors create a balanced environment where both partners feel heard and respected throughout the therapy process.
              </p>
              
              <p className="leading-relaxed">
                Throughout couples counseling, you'll learn practical communication skills, emotional regulation techniques, and conflict resolution strategies that you can apply immediately. Our couples therapy in Havertown focuses on building upon your relationship's existing strengths while addressing areas that need improvement.
              </p>
              
              <p className="leading-relaxed">
                We provide couples counseling services to clients throughout Havertown, Drexel Hill, Broomall, and surrounding Delaware County communities. Whether you're navigating communication challenges, rebuilding after infidelity, or seeking to deepen your connection, our <Link to="/individual-therapy-havertown-pa" className="text-orange-600 hover:underline">relationship therapists</Link> are here to support your journey together.
              </p>
            </div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} className="bg-white p-7 rounded-xl shadow-md border border-sunrise-100/50 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-5 text-orange-600 font-playfair">
              Our Couples Counseling in Havertown Helps With:
            </h3>
            
            <ul className="space-y-3.5">
              {["Communication breakdowns", "Recurring arguments and conflicts", "Trust issues and infidelity recovery", "Intimacy and connection challenges", "Navigating major life changes together", "Parenting disagreements", "Pre-marital counseling", "Managing extended family relationships"].map((item, index) => <motion.li key={index} initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.1 * index
            }} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>)}
            </ul>
            
            <div className="mt-7 pt-5 border-t border-orange-100">
              <h4 className="text-lg font-medium mb-3 text-orange-600">
                Related Relationship Resources
              </h4>
              
              <ul className="space-y-3">
                {[{
                name: "Communication Skills for Couples",
                url: "/blog/communication-skills-couples"
              }, {
                name: "When to Consider Family Therapy",
                url: "/family-therapy-havertown-pa"
              }, {
                name: "Individual Growth Within Relationships",
                url: "/individual-therapy-havertown-pa"
              }].map((resource, index) => <li key={index}>
                    <Link to={resource.url} className="flex items-center text-orange-500 hover:text-orange-700 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      <span>{resource.name}</span>
                    </Link>
                  </li>)}
              </ul>
            </div>
          </motion.div>
        </div>
      </ServiceContentSection>
      
      {/* New testimonial section specifically for couples counseling */}
      <ServiceContentSection title="What Our Couples Counseling Clients in Havertown Say" hasBgPattern={false}>
        
      </ServiceContentSection>
    </ServicePageLayout>;
};
export default CouplesCounseling;