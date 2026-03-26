import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SubstanceUseTherapy = () => {
  const benefits = ["Comprehensive assessment and evaluation", "Individualized treatment planning", "Evidence-based therapeutic approaches", "Dual diagnosis treatment for co-occurring disorders", "Relapse prevention strategies", "Family involvement and education", "Aftercare planning and ongoing support"];
  const approaches = [{
    title: "Cognitive Behavioral Therapy (CBT)",
    description: "Identify and change thoughts and behaviors that contribute to substance use, developing healthier coping strategies and relapse prevention skills."
  }, {
    title: "Motivational Interviewing",
    description: "Enhance internal motivation for change by exploring and resolving ambivalence about recovery and treatment engagement."
  }, {
    title: "Contingency Management",
    description: "Reinforce positive behaviors like abstinence and treatment attendance through tangible incentives and recognition."
  }, {
    title: "Mindfulness-Based Relapse Prevention",
    description: "Integrate mindfulness practices with cognitive-behavioral strategies to prevent and manage relapse triggers."
  }, {
    title: "Family Therapy",
    description: "Involve family members in the recovery process to improve communication, set healthy boundaries, and build a supportive home environment."
  }];
  const faqs = [{
    question: "How do I know if I have a substance use disorder?",
    answer: "Signs include using more of a substance than intended, unsuccessful attempts to cut down or stop use, spending significant time obtaining or using the substance, experiencing cravings, failing to fulfill obligations due to use, continuing use despite problems, and developing tolerance or withdrawal symptoms. Our substance use treatment in Darby provides comprehensive assessments to help determine if you would benefit from professional support."
  }, {
    question: "Can I recover from addiction without residential treatment?",
    answer: "Yes, many people successfully recover through outpatient substance use treatment in Darby, especially when their substance use is caught early or is not severe. The appropriate level of care depends on factors like the severity of addiction, presence of co-occurring disorders, and available support system. Our Darby addiction therapists will help determine the right treatment approach for clients throughout Delaware County, including Drexel Hill and Broomall."
  }, {
    question: "How do you handle relapse during treatment?",
    answer: "At our substance use treatment center in Darby, we view relapse as part of the recovery process rather than a failure. If relapse occurs, we work together to understand triggers, strengthen coping skills, and adjust the treatment plan accordingly. Our non-judgmental approach to addiction treatment focuses on learning from setbacks to prevent future relapses and support your continued recovery journey."
  }];
  const relatedServices = [{
    title: "Depression Therapy in Darby",
    url: "/depression-therapy-darby-pa"
  }, {
    title: "Anxiety Therapy in Darby",
    url: "/anxiety-therapy-darby-pa"
  }, {
    title: "Trauma & PTSD Therapy in Darby",
    url: "/ptsd-therapy-darby-pa"
  }];

  return <ServicePageLayout title="Substance Use Treatment in Darby, PA" description="Evidence-based treatment for alcohol and drug addiction, recovery support, and relapse prevention in Darby, PA." pageTitle="Substance Use Treatment in Darby, PA | Addiction Recovery | Sunrise Human Care Services" metaDescription="Comprehensive substance use and addiction treatment in Darby, PA serving Delaware County. Evidence-based approaches for alcohol and drug recovery with personalized care. Serving Darby, Drexel Hill, and Broomall." serviceType="Substance Use Counseling" canonicalUrl="/substance-use-treatment-darby-pa" benefits={benefits} approaches={approaches} faqs={faqs} relatedServices={relatedServices}>
      <ServiceContentSection title="Our Substance Use Treatment Approach in Darby" hasBgPattern={true}>
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
                At Sunrise Human Care Services in Darby, PA, we provide compassionate, evidence-based substance use treatment. Our addiction therapy begins with a comprehensive assessment to understand your unique situation, substance use history, and any co-occurring mental health conditions.
              </p>
              
              <p className="leading-relaxed">
                We recognize that substance use disorders develop for many reasons and often serve as coping mechanisms for underlying issues. Our substance use treatment in Darby addresses not only the substance use itself but also the factors that contribute to and maintain addictive patterns.
              </p>
              
              <p className="leading-relaxed">
                Using proven therapeutic approaches such as Cognitive-Behavioral Therapy (CBT), Motivational Interviewing, and Relapse Prevention, our addiction therapists help you identify triggers, develop healthier coping skills, change unhelpful thought patterns, and build a lifestyle that supports recovery.
              </p>
              
              <p className="leading-relaxed">
                Our substance use treatment services are available to residents throughout Darby, Drexel Hill, Broomall, and surrounding Delaware County communities. Our dual diagnosis capability ensures that co-occurring mental health conditions receive appropriate attention alongside addiction treatment. This integrated approach leads to better outcomes and more sustainable recovery.
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
              Our Substance Use Treatment in Darby Helps With:
            </h3>
            
            <ul className="space-y-3.5">
              {["Alcohol use disorder", "Opioid use disorder", "Cannabis use disorder", "Stimulant use disorders", "Prescription medication misuse", "Dual diagnosis (co-occurring disorders)", "Relapse prevention", "Recovery maintenance"].map((item, index) => <motion.li key={index} initial={{
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
                Related Recovery Resources
              </h4>
              
              <ul className="space-y-3">
                {[{
                name: "Understanding Dual Diagnosis",
                url: "/blog/dual-diagnosis-treatment"
              }, {
                name: "Depression and Substance Use",
                url: "/depression-therapy-darby-pa"
              }, {
                name: "Family Support in Recovery",
                url: "/family-therapy-darby-pa"
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
    </ServicePageLayout>;
};

export default SubstanceUseTherapy;
