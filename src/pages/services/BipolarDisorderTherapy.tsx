import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BipolarDisorderTherapy = () => {
  const benefits = ["Improved mood stability and decreased frequency of episodes", "Better understanding of your condition and triggers", "Enhanced coping skills for managing mood fluctuations", "Decreased hospitalization rates and improved functioning", "Improved interpersonal relationships and quality of life", "Coordinated care approach involving therapy and medication management"];
  const approaches = [{
    title: "Cognitive Behavioral Therapy (CBT)",
    description: "Identify and change negative thought patterns that contribute to mood episodes, focusing on developing coping strategies for both manic and depressive phases."
  }, {
    title: "Interpersonal and Social Rhythm Therapy (IPSRT)",
    description: "Stabilize daily routines, improve medication adherence, and enhance interpersonal functioning to reduce mood episodes."
  }, {
    title: "Family-Focused Therapy",
    description: "Educate family members about bipolar disorder, improve family communication, and develop problem-solving skills to better support the individual."
  }, {
    title: "Medication Management Coordination",
    description: "Collaborate with psychiatric providers to ensure optimal medication treatment, which is typically a cornerstone of successful bipolar disorder management."
  }, {
    title: "Psychoeducation",
    description: "Learn about bipolar disorder, its causes, treatments, and early warning signs of mood episodes to support better self-management."
  }];
  const faqs = [{
    question: "What is the difference between Bipolar I and Bipolar II Disorder?",
    answer: "Bipolar I Disorder involves manic episodes that last at least 7 days or are severe enough to require hospitalization, often with depressive episodes as well. Bipolar II Disorder involves less severe hypomanic episodes alternating with depressive episodes. Our bipolar disorder treatment in Darby is tailored to address the specific type and symptoms you're experiencing."
  }, {
    question: "Is medication always necessary to treat bipolar disorder?",
    answer: "Medication is typically considered a cornerstone of bipolar disorder treatment in Darby, as it helps stabilize mood and prevent episodes. However, therapy is an essential complement to medication, and treatment plans at our Darby mental health clinic are always personalized to each individual's needs, preferences, and specific bipolar symptoms."
  }, {
    question: "How long does bipolar disorder treatment take?",
    answer: "Bipolar disorder is typically a lifelong condition requiring ongoing management. While acute episodes may resolve within weeks to months with proper treatment at our Darby clinic, many individuals benefit from long-term maintenance treatment to prevent future episodes. We serve clients throughout Darby, Drexel Hill, and Broomall with comprehensive bipolar disorder care plans."
  }, {
    question: "Can therapy alone manage bipolar disorder?",
    answer: "While therapy provides critical skills and support, most research indicates that a combination of medication and therapy offers the best outcomes for bipolar disorder. Our bipolar disorder treatment in Darby works collaboratively with psychiatrists to provide comprehensive care. We focus on helping clients throughout Delaware County develop effective self-management strategies alongside appropriate medical treatment."
  }, {
    question: "What should family members know about supporting someone with bipolar disorder?",
    answer: "Family support is crucial for successful bipolar disorder treatment in Darby. Learning about the condition, recognizing warning signs of episodes, encouraging treatment adherence, maintaining calm during mood fluctuations, and participating in family therapy can all be tremendously helpful. Our Darby therapists provide education and support for family members as part of our comprehensive approach."
  }];
  const relatedServices = [{
    title: "Depression Therapy in Darby",
    url: "/depression-therapy-darby-pa"
  }, {
    title: "Anxiety Therapy in Darby",
    url: "/anxiety-therapy-darby-pa"
  }, {
    title: "Medication Management in Darby",
    url: "/medication-management-darby-pa"
  }, {
    title: "Family Therapy in Darby",
    url: "/family-therapy-darby-pa"
  }, {
    title: "Individual Therapy in Darby",
    url: "/individual-therapy-darby-pa"
  }];

  return <ServicePageLayout title="Bipolar Disorder Treatment in Darby, PA" description="Evidence-based bipolar disorder therapy to help manage mood episodes, maintain stability, and improve quality of life." pageTitle="Bipolar Disorder Treatment in Darby, PA | Mood Stability | Sunrise Human Care Services" metaDescription="Effective bipolar disorder therapy in Darby, PA serving Delaware County. Our specialized approach helps stabilize mood, manage symptoms, and build a balanced lifestyle. Bipolar treatment for Darby, Drexel Hill, and Broomall." serviceType="Bipolar Disorder Treatment" canonicalUrl="/bipolar-disorder-therapy-darby-pa" benefits={benefits} approaches={approaches} faqs={faqs} relatedServices={relatedServices}>
      <ServiceContentSection title="Our Bipolar Disorder Treatment Approach in Darby" hasBgPattern={true}>
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
                At Sunrise Human Care Services in Darby, PA, we understand the unique challenges of living with bipolar disorder. Our compassionate team provides specialized bipolar disorder treatment to help you manage mood fluctuations, maintain stability, and improve your overall quality of life.
              </p>
              
              <p className="leading-relaxed">
                Bipolar disorder is characterized by distinct mood episodes ranging from depressive lows to manic or hypomanic highs. These episodes can significantly impact your relationships, work, and daily functioning. Our evidence-based bipolar disorder therapy in Darby combines therapeutic approaches, lifestyle recommendations, and collaboration with psychiatric providers for medication management when appropriate.
              </p>
              
              <p className="leading-relaxed">
                Our therapists have specialized training in bipolar disorder treatment and stay current with the latest research and best practices. Our bipolar disorder therapy in Darby focuses not only on symptom management but also on helping you build a fulfilling life with enhanced stability, improved relationships, and better overall functioning.
              </p>
              
              <p className="leading-relaxed">
                We provide bipolar disorder treatment services to clients throughout Darby, Drexel Hill, Broomall, and surrounding Delaware County communities. Our integrated approach addresses all aspects of bipolar disorder management, including <Link to="/medication-management-darby-pa" className="text-orange-600 hover:underline">medication support</Link>, <Link to="/individual-therapy-darby-pa" className="text-orange-600 hover:underline">individual therapy</Link>, and family education.
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
              Our Bipolar Disorder Treatment in Darby Helps With:
            </h3>
            
            <ul className="space-y-3.5">
              {["Bipolar I Disorder", "Bipolar II Disorder", "Cyclothymic Disorder", "Managing manic or hypomanic episodes", "Addressing bipolar depression", "Mood tracking and early intervention", "Medication adherence support", "Life adjustments to support stability"].map((item, index) => <motion.li key={index} initial={{
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
                Related Bipolar Disorder Resources
              </h4>
              
              <ul className="space-y-3">
                {[{
                name: "Understanding Bipolar Episodes",
                url: "/blog/bipolar-episode-management"
              }, {
                name: "Medication Options for Bipolar Disorder",
                url: "/medication-management-darby-pa"
              }, {
                name: "Supporting a Loved One with Bipolar",
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

export default BipolarDisorderTherapy;
