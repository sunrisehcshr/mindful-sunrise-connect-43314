import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Brain, Heart, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import SectionTag from '@/components/ui/section-tag';
import { Badge } from '@/components/ui/badge';

const DepressionTherapy = () => {
  const benefits = ["Reduce symptoms of depression and improve mood", "Regain interest and enjoyment in activities", "Develop healthy coping strategies for managing difficult emotions", "Break negative thought patterns that fuel depression", "Improve energy levels and daily functioning", "Build resilience to prevent future depressive episodes"];
  const approaches = [{
    title: "Cognitive Behavioral Therapy (CBT)",
    description: "Helps identify and change negative thought patterns and behaviors that contribute to and maintain depression."
  }, {
    title: "Interpersonal Therapy (IPT)",
    description: "Focuses on improving relationships and communication patterns to alleviate depression and build support systems."
  }, {
    title: "Behavioral Activation",
    description: "A structured approach that helps you gradually increase meaningful activities to improve mood and break the cycle of depression."
  }, {
    title: "Mindfulness-Based Cognitive Therapy",
    description: "Combines CBT techniques with mindfulness practices to help prevent depression relapse and manage difficult emotions."
  }];
  const faqs = [{
    question: "How is depression different from just feeling sad?",
    answer: "While sadness is a normal emotion that everyone experiences, depression is more persistent and severe, often interfering with daily functioning. Depression typically involves multiple symptoms beyond sadness, such as loss of interest, changes in sleep and appetite, fatigue, and feelings of worthlessness. Our depression therapy in Havertown helps clients distinguish between normal sadness and clinical depression that requires treatment."
  }, {
    question: "How long does depression treatment take?",
    answer: "Many people begin to experience improvement within 8-12 weeks of consistent depression therapy at our Havertown clinic. However, treatment duration varies based on depression severity, history, and individual factors. Some clients benefit from shorter-term depression treatment, while others may need longer support. We tailor our approach to each client's unique needs throughout Delaware County."
  }, {
    question: "Will I need medication for my depression?",
    answer: "Not necessarily. Many people effectively manage depression through therapy alone at Sunrise Human Care Services in Havertown. After a thorough assessment, if medication might be beneficial, we can discuss a referral to our psychiatric providers. Often, a combination of depression therapy and medication provides the most effective treatment for moderate to severe depression, and we coordinate this care seamlessly at our Havertown location."
  }, {
    question: "What if I've tried therapy before and it didn't help my depression?",
    answer: "Different therapeutic approaches and therapist relationships can yield different results. At our Havertown depression treatment center, we'll take time to understand your previous experiences and create a personalized approach that addresses the specific factors maintaining your depression. Many people find success with our depression therapy in Havertown after previous unsuccessful treatment attempts elsewhere in Delaware County."
  }];
  const relatedServices = [{
    title: "Anxiety Therapy in Havertown",
    url: "/anxiety-therapy-havertown-pa"
  }, {
    title: "Individual Therapy in Havertown",
    url: "/individual-therapy-havertown-pa"
  }, {
    title: "Medication Management in Havertown",
    url: "/medication-management-havertown-pa"
  }];

  return (
    <>
      <SEOHead 
        title="Depression Treatment in Havertown, PA | Expert Therapy Services | Sunrise Human Care"
        description="Effective depression therapy in Havertown, PA. Our experienced therapists provide evidence-based treatment for depression, helping you rediscover joy and purpose. Serving Delaware County. Call (814) 620-2162."
        canonicalUrl="https://sunrisehumancare.com/depression-therapy-havertown-pa"
        keywords="depression therapy Havertown, depression treatment PA, depression counseling Delaware County, mood disorder treatment Havertown, mental health services PA, depression help near me, evidence-based depression treatment, therapist Havertown PA"
        serviceSchema={{
          name: "Depression Therapy",
          description: "Evidence-based depression treatment helping clients overcome depression and regain emotional well-being through specialized therapeutic approaches.",
          provider: "Sunrise Human Care Services",
          serviceType: "Depression Treatment",
          areaServed: "Havertown, PA and Delaware County"
        }}
      />
      <ServicePageLayout title="Depression Therapy in Havertown, PA" description="Effective, compassionate treatment for depression, helping you rediscover joy, purpose, and connection in your life." pageTitle="Expert Depression Therapy in Havertown, PA - Evidence-Based Treatment | Sunrise Human Care" metaDescription="Specialized depression treatment in Havertown, PA serving Delaware County, including Drexel Hill and Broomall. Our experienced therapists provide evidence-based depression therapy to help you overcome depression and regain joy. Schedule today." serviceType="Depression Therapy" canonicalUrl="/depression-therapy-havertown-pa" benefits={benefits} approaches={approaches} faqs={faqs} relatedServices={relatedServices}>
        <ServiceContentSection title="Expert Depression Treatment in Havertown" hasBgPattern={true}>
          <div className="mb-6">
            <SectionTag icon={<Brain className="h-3 w-3" />}>Understanding Depression</SectionTag>
          </div>
          
          <div className="flex items-center gap-2 mb-6">
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">Evidence-Based Care</Badge>
            <Badge variant="secondary" className="bg-amber-100 text-amber-700 hover:bg-amber-200">Personalized Treatment</Badge>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">Local Support</Badge>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg opacity-10"></div>
            <div className="relative p-6 text-center">
              <p className="text-lg font-medium text-amber-900">
                "Depression is treatable, and recovery is possible. Our Havertown therapy team is here to guide you towards renewed hope and well-being."
              </p>
            </div>
          </div>

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
                  At Sunrise Human Care Services in Havertown, PA, we understand that depression affects each person differently. Our depression therapy begins with a comprehensive assessment to understand your specific symptoms, history, and the unique factors contributing to your depression.
                </p>
                
                <p className="leading-relaxed">
                  Using evidence-based depression treatment, we'll help you identify and change negative thought patterns, develop healthy coping strategies, and gradually increase meaningful activities that can improve your mood. Our depression therapy in Havertown focuses not only on symptom reduction but also on helping you build a more fulfilling life.
                </p>
                
                <p className="leading-relaxed">
                  When appropriate, we collaborate with our psychiatric providers to offer integrated care that may include medication management alongside depression therapy. Throughout treatment, we'll regularly assess your progress and adjust our approach to ensure you're receiving the most effective depression treatment in Havertown for your specific needs.
                </p>
                
                <p className="leading-relaxed">
                  Our depression treatment services are available to residents throughout Havertown, Drexel Hill, Broomall, and surrounding Delaware County communities. Whether you're experiencing a first episode of depression or have been struggling for years, our <Link to="/individual-therapy-havertown-pa" className="text-orange-600 hover:underline">individual therapy</Link> approaches can help you find relief and renewed hope.
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
                Our Depression Treatment in Havertown Helps With:
              </h3>
              
              <ul className="space-y-3.5">
                {["Major Depressive Disorder", "Persistent Depressive Disorder (Dysthymia)", "Seasonal Affective Disorder (SAD)", "Postpartum Depression", "Bipolar Depression (in coordination with medication management)", "Grief and bereavement", "Depression with co-occurring anxiety", "Treatment-resistant depression"].map((item, index) => <motion.li key={index} initial={{
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
                    name: "Signs of Depression vs. Normal Sadness",
                    url: "/blog/depression-vs-sadness"
                  }, {
                    name: "Depression and Anxiety: When They Occur Together",
                    url: "/anxiety-therapy-havertown-pa"
                  }, {
                    name: "When to Consider Medication for Depression",
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

        <ServiceContentSection title="Our Depression Treatment Approach" hasBgPattern={false}>
          <div className="mb-6">
            <SectionTag icon={<Heart className="h-3 w-3" />}>Compassionate Care</SectionTag>
          </div>
          
          <div className="space-y-5 text-muted-foreground">
            <p className="leading-relaxed">
              At Sunrise Human Care Services in Havertown, PA, we understand that depression affects each person differently. Our depression therapy begins with a comprehensive assessment to understand your specific symptoms, history, and the unique factors contributing to your depression.
            </p>
            
            <p className="leading-relaxed">
              Using evidence-based depression treatment, we'll help you identify and change negative thought patterns, develop healthy coping strategies, and gradually increase meaningful activities that can improve your mood. Our depression therapy in Havertown focuses not only on symptom reduction but also on helping you build a more fulfilling life.
            </p>
            
            <p className="leading-relaxed">
              When appropriate, we collaborate with our psychiatric providers to offer integrated care that may include medication management alongside depression therapy. Throughout treatment, we'll regularly assess your progress and adjust our approach to ensure you're receiving the most effective depression treatment in Havertown for your specific needs.
            </p>
            
            <p className="leading-relaxed">
              Our depression treatment services are available to residents throughout Havertown, Drexel Hill, Broomall, and surrounding Delaware County communities. Whether you're experiencing a first episode of depression or have been struggling for years, our <Link to="/individual-therapy-havertown-pa" className="text-orange-600 hover:underline">individual therapy</Link> approaches can help you find relief and renewed hope.
            </p>
          </div>
        </ServiceContentSection>

        <ServiceContentSection title="Evidence-Based Depression Therapy" hasBgPattern={true}>
          <div className="mb-6">
            <SectionTag icon={<Lightbulb className="h-3 w-3" />}>Proven Methods</SectionTag>
          </div>
          
          <div className="space-y-5 text-muted-foreground">
            <p className="leading-relaxed">
              At Sunrise Human Care Services in Havertown, PA, we understand that depression affects each person differently. Our depression therapy begins with a comprehensive assessment to understand your specific symptoms, history, and the unique factors contributing to your depression.
            </p>
            
            <p className="leading-relaxed">
              Using evidence-based depression treatment, we'll help you identify and change negative thought patterns, develop healthy coping strategies, and gradually increase meaningful activities that can improve your mood. Our depression therapy in Havertown focuses not only on symptom reduction but also on helping you build a more fulfilling life.
            </p>
            
            <p className="leading-relaxed">
              When appropriate, we collaborate with our psychiatric providers to offer integrated care that may include medication management alongside depression therapy. Throughout treatment, we'll regularly assess your progress and adjust our approach to ensure you're receiving the most effective depression treatment in Havertown for your specific needs.
            </p>
            
            <p className="leading-relaxed">
              Our depression treatment services are available to residents throughout Havertown, Drexel Hill, Broomall, and surrounding Delaware County communities. Whether you're experiencing a first episode of depression or have been struggling for years, our <Link to="/individual-therapy-havertown-pa" className="text-orange-600 hover:underline">individual therapy</Link> approaches can help you find relief and renewed hope.
            </p>
          </div>
        </ServiceContentSection>
      </ServicePageLayout>
    </>
  );
};

export default DepressionTherapy;
