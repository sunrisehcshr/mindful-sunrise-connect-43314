import React from 'react';
import { Link } from 'react-router-dom';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
const IndividualTherapy = () => {
  const benefits = ["Personalized one-on-one attention from a dedicated therapist in Havertown", "Safe, confidential space to explore your thoughts and feelings", "Customized treatment approaches tailored to your specific needs", "Flexibility in addressing multiple concerns in a single session", "Develop coping strategies specific to your life circumstances", "Build self-awareness and personal growth at your own pace"];
  const approaches = [{
    title: "Cognitive Behavioral Therapy (CBT)",
    description: "Our Havertown therapists use CBT to help you identify negative thought patterns and develop healthier ways of thinking that positively impact your emotions and behaviors."
  }, {
    title: "Psychodynamic Therapy",
    description: "Explore how past experiences and unconscious patterns may be influencing your current behaviors and relationships with expert guidance from our individual therapy specialists."
  }, {
    title: "Mindfulness-Based Therapy",
    description: "Learn to stay present, reduce rumination, and develop greater awareness of your thoughts and feelings without judgment through our mindfulness approaches in Havertown, PA."
  }, {
    title: "Solution-Focused Brief Therapy",
    description: "Concentrate on solutions rather than problems, setting achievable goals and building on your existing strengths with our experienced Havertown therapists."
  }];
  const faqs = [{
    question: "How long does individual therapy typically last in Havertown?",
    answer: "The duration varies based on your needs and goals. Some clients benefit from short-term therapy (8-12 sessions), while others prefer longer-term support. At our Havertown mental health clinic, we'll discuss timeframes during your initial consultation and adjust as needed throughout your treatment journey."
  }, {
    question: "How often will I meet with my therapist?",
    answer: "Most clients begin with weekly sessions at our Havertown therapy center. As you progress, we may adjust to biweekly or monthly meetings. The frequency is tailored to your specific needs and can be modified throughout your individual therapy treatment. We offer flexible scheduling options for residents of Havertown, Drexel Hill, and Broomall."
  }, {
    question: "Is individual therapy covered by insurance?",
    answer: "Many insurance plans cover individual therapy at Sunrise Human Care Services. We accept most major insurance providers serving Havertown and Delaware County and can verify your benefits before your first session. For those without coverage, we also offer affordable self-pay options for mental health care in Havertown."
  }, {
    question: "Can I switch therapists if I don't feel it's a good match?",
    answer: "Absolutely. The therapeutic relationship is crucial for successful individual therapy treatment. If you feel you'd benefit from working with a different therapist at our Havertown mental health clinic, we'll gladly help you find a better match within our practice to ensure you receive the highest quality care."
  }];
  const relatedServices = [{
    title: "Anxiety Therapy in Havertown",
    url: "/anxiety-therapy-havertown-pa"
  }, {
    title: "Depression Treatment in Havertown",
    url: "/depression-therapy-havertown-pa"
  }, {
    title: "ADHD Treatment in Havertown",
    url: "/adhd-treatment-havertown-pa"
  }];
  return <ServicePageLayout title="Individual Therapy in Havertown, PA" description="Personalized one-on-one therapy sessions tailored to your unique needs, helping you navigate life's challenges with professional guidance and support." pageTitle="Expert Individual Therapy in Havertown, PA - Personalized Mental Health Support | Sunrise Human Care Services" metaDescription="Compassionate individual therapy in Havertown, PA for anxiety, depression, trauma, and personal growth. Private, confidential sessions with experienced therapists. Schedule today." serviceType="Individual Therapy" canonicalUrl="/individual-therapy-havertown-pa" benefits={benefits} approaches={approaches} faqs={faqs} relatedServices={relatedServices}>
      {/* Enhanced service-specific content with additional keywords and local context */}
      <ServiceContentSection title="What to Expect in Individual Therapy in Havertown" hasBgPattern={true}>
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
                At Sunrise Human Care Services in Havertown, PA, individual therapy begins with a comprehensive assessment to understand your unique concerns, history, and goals. This helps us develop a personalized treatment plan tailored specifically to you.
              </p>
              
              <p className="leading-relaxed">
                During your ongoing sessions, you'll work one-on-one with your therapist in a safe, confidential environment where you can freely express yourself. Your therapist will guide you through evidence-based therapeutic techniques designed to address your specific challenges through our proven individual therapy approach in Havertown.
              </p>
              
              <p className="leading-relaxed">
                As therapy progresses, you'll develop new insights, coping strategies, and practical skills that you can apply to your daily life. We emphasize measurable progress toward your goals, with regular check-ins to ensure your treatment remains effective and aligned with your evolving needs.
              </p>
              
              <p className="leading-relaxed">
                Our individual therapy services in Havertown serve clients from throughout Delaware County, including Drexel Hill, Broomall, Springfield, and Newtown Square. Whether you're dealing with <Link to="/anxiety-therapy-havertown-pa" className="text-orange-600 hover:underline">anxiety</Link>, <Link to="/depression-therapy-havertown-pa" className="text-orange-600 hover:underline">depression</Link>, or <Link to="/ptsd-therapy-havertown-pa" className="text-orange-600 hover:underline">trauma and PTSD</Link>, our licensed therapists provide personalized mental health care in Havertown tailored to your unique needs.
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
              Our Individual Therapy Services in Havertown Help With:
            </h3>
            
            <ul className="space-y-3.5">
              {["Anxiety, worry and panic attacks", "Depression and mood disorders", "Trauma recovery and PTSD", "Grief and loss", "Life transitions and adjustments", "Self-esteem and personal growth", "Stress management", "Relationship issues"].map((item, index) => <motion.li key={index} initial={{
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
                Related Mental Health Resources
              </h4>
              
              <ul className="space-y-3">
                {[{
                name: "Anxiety Treatment Options in Havertown",
                url: "/anxiety-therapy-havertown-pa"
              }, {
                name: "Addressing Trauma Through Therapy",
                url: "/ptsd-therapy-havertown-pa"
              }, {
                name: "When to Consider Medication Management",
                url: "/medication-management-havertown-pa"
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
      
      {/* New testimonial section specifically for individual therapy */}
      <ServiceContentSection title="What Our Individual Therapy Clients in Havertown Say" hasBgPattern={false}>
        
      </ServiceContentSection>
    </ServicePageLayout>;
};
export default IndividualTherapy;