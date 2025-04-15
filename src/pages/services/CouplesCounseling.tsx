import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Heart, Users, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import SectionTag from '@/components/ui/section-tag';
import { Badge } from '@/components/ui/badge';

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

  return (
    <>
      <SEOHead 
        title="Expert Couples Counseling in Havertown, PA | Marriage & Relationship Therapy"
        description="Transform your relationship with professional couples counseling in Havertown, PA. Our experienced therapists help couples improve communication, resolve conflicts, and rebuild intimacy. Serving Delaware County. Call (814) 620-2162."
        canonicalUrl="https://sunrisehumancare.com/couples-counseling-havertown-pa"
        keywords="couples counseling Havertown, marriage counseling PA, relationship therapy Delaware County, couples therapy near me, marriage therapist Havertown PA, relationship counseling Havertown, premarital counseling Delaware County, family counseling Havertown"
        serviceSchema={{
          name: "Couples Counseling",
          description: "Professional couples therapy helping partners improve communication, resolve conflicts, and strengthen their relationship through evidence-based approaches.",
          provider: "Sunrise Human Care Services",
          serviceType: "Couples Therapy",
          areaServed: "Havertown, PA and Delaware County"
        }}
      />
      <ServicePageLayout 
        title="Couples Counseling in Havertown, PA"
        description="Specialized therapy to help couples improve communication, resolve conflicts, and strengthen their relationship with professional guidance."
        pageTitle="Expert Couples Counseling in Havertown, PA - Relationship Therapy | Sunrise Human Care Services"
        metaDescription="Professional couples counseling in Havertown, PA serving Delaware County communities. Improve communication, resolve conflicts, and rebuild intimacy with our experienced relationship therapists. Couples therapy for Havertown, Drexel Hill, and Broomall."
        serviceType="Couples Counseling"
        canonicalUrl="/couples-counseling-havertown-pa" 
        heroImage="/images/couple-counseling-havertown-pa.webp" 
        benefits={benefits} 
        approaches={approaches} 
        faqs={faqs} 
        relatedServices={relatedServices}
      >
        <ServiceContentSection title="Expert Couples Counseling in Havertown" hasBgPattern={true}>
          <div className="mb-6">
            <SectionTag icon={<Heart className="h-3 w-3" />}>Building Stronger Relationships</SectionTag>
          </div>
          
          <div className="flex items-center gap-2 mb-6">
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">Experienced Therapists</Badge>
            <Badge variant="secondary" className="bg-amber-100 text-amber-700 hover:bg-amber-200">Evidence-Based Methods</Badge>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">Convenient Location</Badge>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg opacity-10"></div>
            <div className="relative p-6 text-center">
              <p className="text-lg font-medium text-amber-900">
                "Every relationship deserves a chance to grow stronger. Our Havertown couples counseling team is here to help you build the connection you desire."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 0.5, delay: 0.2}}>
              <div className="space-y-5 text-muted-foreground">
                <p className="leading-relaxed">
                  At Sunrise Human Care Services in Havertown, PA, our couples counseling services are designed to help partners navigate challenges, improve communication, and strengthen their emotional connection. With years of experience serving couples throughout Delaware County, our therapists understand the unique dynamics that shape relationships.
                </p>
                
                <p className="leading-relaxed">
                  Using evidence-based approaches like Emotionally Focused Therapy (EFT) and The Gottman Method, our couples counseling in Havertown helps you identify and transform negative interaction patterns, develop effective communication skills, and rebuild trust and intimacy.
                </p>
                
                <p className="leading-relaxed">
                  Whether you're seeking premarital counseling, working through trust issues, or wanting to deepen your connection, our relationship therapy services provide the tools and support you need. We serve couples throughout Havertown, Drexel Hill, Broomall, and surrounding Delaware County communities.
                </p>
              </div>
            </motion.div>
            
            <motion.div initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 0.5, delay: 0.4}} className="bg-white p-7 rounded-xl shadow-md border border-sunrise-100/50 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-5 text-orange-600 font-playfair">
                Our Couples Counseling Helps With:
              </h3>
              
              <ul className="space-y-3.5">
                {["Communication difficulties", "Trust and intimacy issues", "Conflict resolution", "Premarital counseling", "Infidelity recovery", "Life transitions", "Parenting challenges", "Emotional disconnection"].map((item, index) => (
                  <motion.li key={index} initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{delay: 0.1 * index}} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-7 pt-5 border-t border-orange-100">
                <h4 className="text-lg font-medium mb-3 text-orange-600">
                  Related Resources
                </h4>
                
                <ul className="space-y-3">
                  {[
                    {name: "Communication Skills for Couples", url: "/blog/communication-skills-couples"},
                    {name: "When to Consider Family Therapy", url: "/family-therapy-havertown-pa"},
                    {name: "Building Trust After Infidelity", url: "/blog/rebuilding-trust-relationships"}
                  ].map((resource, index) => (
                    <li key={index}>
                      <Link to={resource.url} className="flex items-center text-orange-500 hover:text-orange-700 transition-colors">
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

        <ServiceContentSection title="Our Couples Counseling Approach" hasBgPattern={false}>
          <div className="mb-6">
            <SectionTag icon={<Users className="h-3 w-3" />}>Expert Guidance</SectionTag>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-5 text-muted-foreground">
              <p className="leading-relaxed">
                Our approach to couples counseling in Havertown begins with understanding each partner's perspective and the unique dynamics of your relationship. We create a safe, balanced environment where both partners feel heard and respected throughout the therapeutic process.
              </p>
              
              <p className="leading-relaxed">
                Through proven therapeutic techniques and personalized interventions, we help couples identify and break free from negative interaction cycles, develop stronger emotional bonds, and build lasting relationship skills.
              </p>
            </div>
            
            <div className="space-y-5 text-muted-foreground">
              <p className="leading-relaxed">
                Whether you're dealing with communication challenges, trust issues, or navigating major life transitions, our experienced couples therapists in Havertown provide the guidance and support needed to strengthen your relationship.
              </p>
              
              <p className="leading-relaxed">
                We serve couples throughout Delaware County, including Havertown, Drexel Hill, and Broomall, offering flexible scheduling options to accommodate your needs. Contact us today to begin your journey toward a stronger, more fulfilling relationship.
              </p>
            </div>
          </div>
        </ServiceContentSection>

        <ServiceContentSection title="Evidence-Based Couples Therapy" hasBgPattern={true}>
          <div className="mb-6">
            <SectionTag icon={<MessageSquare className="h-3 w-3" />}>Proven Methods</SectionTag>
          </div>
          
          <div className="space-y-5 text-muted-foreground">
            <p className="leading-relaxed">
              At Sunrise Human Care Services, we utilize research-backed approaches to couples therapy that have been proven effective in helping partners improve their relationships. Our therapists are trained in multiple evidence-based methods, allowing us to tailor our approach to your specific needs.
            </p>
          </div>
        </ServiceContentSection>
      </ServicePageLayout>
    </>
  );
};

export default CouplesCounseling;
