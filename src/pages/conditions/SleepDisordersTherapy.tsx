import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SleepDisordersTherapy = () => {
  const benefits = ["Improved sleep quality and duration", "Reduced time to fall asleep", "Fewer nighttime awakenings", "Decreased sleep-related anxiety", "Increased daytime energy and functioning", "Sustainable sleep habits without medication dependence", "Better overall mental and physical health"];
  const approaches = [{
    title: "Cognitive-Behavioral Therapy for Insomnia (CBT-I)",
    description: "The gold standard treatment for insomnia that addresses thoughts and behaviors that interfere with sleep through techniques like sleep restriction, stimulus control, and cognitive restructuring."
  }, {
    title: "Sleep Hygiene Education",
    description: "Guidance on creating optimal sleep conditions and habits, including bedroom environment, bedtime routines, and lifestyle factors that impact sleep."
  }, {
    title: "Relaxation Training",
    description: "Techniques such as progressive muscle relaxation, deep breathing, and guided imagery to reduce physical tension and mental arousal that interfere with sleep."
  }, {
    title: "Mindfulness for Sleep",
    description: "Mindfulness practices specifically adapted for sleep problems to help quiet the racing mind and reduce sleep-related worry and rumination."
  }, {
    title: "Circadian Rhythm Management",
    description: "Strategies to realign disrupted sleep-wake cycles and optimize your body's natural timing system for better sleep quality."
  }];
  const faqs = [{
    question: "How do I know if I have a sleep disorder?",
    answer: "Common signs include difficulty falling or staying asleep, excessive daytime sleepiness, irregular sleep patterns, unusual behaviors during sleep, and feeling unrefreshed after sleep. If sleep problems persist for more than a few weeks or interfere with daily functioning, our sleep disorder treatment in Darby can help with a professional assessment and personalized recommendations."
  }, {
    question: "Is medication necessary for treating sleep disorders?",
    answer: "Not always. While medication may be helpful in some cases, many sleep disorders can be effectively treated with non-medication approaches like CBT-I at our Darby sleep therapy center. This evidence-based treatment has been shown to produce long-lasting improvements in sleep quality without the side effects or dependencies associated with sleep medications. Our sleep specialists in Darby will discuss all treatment options based on your specific situation."
  }, {
    question: "How long does sleep therapy take to work?",
    answer: "Many people seeking sleep disorder treatment in Darby begin to see improvements in their sleep within 2-4 weeks of starting CBT-I or other behavioral sleep treatments. Full benefits of our sleep therapy typically develop over 6-8 weeks of consistent practice of the recommended strategies. Clients throughout Darby, Drexel Hill, and Broomall report significant improvements in sleep quality with our structured approach."
  }];
  const relatedServices = [{
    title: "Anxiety Therapy in Darby",
    url: "/anxiety-therapy-darby-pa"
  }, {
    title: "Depression Therapy in Darby",
    url: "/depression-therapy-darby-pa"
  }, {
    title: "Stress Management in Darby",
    url: "/stress-management-darby-pa"
  }];

  return <ServicePageLayout title="Sleep Disorders Treatment in Darby, PA" description="Effective treatment for insomnia, sleep anxiety, and other sleep-related issues in Darby, PA." pageTitle="Sleep Disorders Treatment in Darby, PA | Insomnia Therapy | Sunrise Human Care Services" metaDescription="Effective sleep disorder treatment in Darby, PA for insomnia and sleep-related issues. Evidence-based approaches including CBT-I serving Delaware County residents. Sleep therapy for Darby, Drexel Hill, and Broomall." serviceType="Sleep Disorders Treatment" canonicalUrl="/sleep-disorders-treatment-darby-pa" benefits={benefits} approaches={approaches} faqs={faqs} relatedServices={relatedServices}>
      <ServiceContentSection title="Our Sleep Disorders Treatment Approach in Darby" hasBgPattern={true}>
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
                At Sunrise Human Care Services in Darby, PA, we provide evidence-based treatment for a range of sleep disorders. Our sleep therapy begins with a comprehensive sleep assessment to understand your specific sleep patterns, habits, and factors that may be interfering with restful sleep.
              </p>
              
              <p className="leading-relaxed">
                For insomnia, which is the most common sleep disorder, our Darby sleep specialists primarily use Cognitive-Behavioral Therapy for Insomnia (CBT-I), the gold-standard treatment recommended by sleep medicine experts. This structured approach helps you identify and change thoughts and behaviors that cause or worsen sleep problems.
              </p>
              
              <p className="leading-relaxed">
                Beyond insomnia, our sleep disorder treatment in Darby addresses sleep-related anxiety, nightmares, circadian rhythm disorders, and the psychological aspects of other sleep conditions. We work collaboratively with medical providers when necessary to ensure comprehensive care for complex sleep problems.
              </p>
              
              <p className="leading-relaxed">
                We provide sleep therapy services to clients throughout Darby, Drexel Hill, Broomall, and surrounding Delaware County communities. Our goal is to help you develop healthy sleep habits and thought patterns that support natural, restorative sleep without ongoing reliance on medication or therapy.
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
              Our Sleep Disorders Treatment in Darby Helps With:
            </h3>
            
            <ul className="space-y-3.5">
              {["Insomnia (difficulty falling or staying asleep)", "Sleep anxiety and worry about sleep", "Nightmares and disturbing dreams", "Circadian rhythm disorders", "Psychological aspects of sleep apnea", "Sleep-related behaviors", "Sleep disruption due to stress or lifestyle", "Sleep issues related to depression or anxiety"].map((item, index) => <motion.li key={index} initial={{
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
                Related Sleep Health Resources
              </h4>
              
              <ul className="space-y-3">
                {[{
                name: "Sleep and Anxiety Connection",
                url: "/anxiety-therapy-darby-pa"
              }, {
                name: "Depression and Sleep Problems",
                url: "/depression-therapy-darby-pa"
              }, {
                name: "Sleep Hygiene Basics",
                url: "/blog/sleep-hygiene-tips"
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

export default SleepDisordersTherapy;
