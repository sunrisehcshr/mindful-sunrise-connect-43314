import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnxietyTherapy = () => {
  const benefits = ["Reduce excessive worry, fear, and panic symptoms", "Develop effective strategies to manage anxiety in daily life", "Identify and change anxious thought patterns", "Learn physical relaxation techniques", "Build confidence in facing anxiety-provoking situations", "Improve quality of life and functioning"];
  const approaches = [{
    title: "Cognitive Behavioral Therapy (CBT)",
    description: "The gold standard for anxiety treatment, CBT helps you identify and challenge anxious thoughts while developing healthier behavioral responses."
  }, {
    title: "Exposure Therapy",
    description: "A specialized form of CBT that involves gradually and safely facing feared situations to reduce anxiety over time."
  }, {
    title: "Acceptance and Commitment Therapy (ACT)",
    description: "Focuses on accepting anxious feelings rather than fighting them, while committing to actions that enrich your life despite anxiety."
  }, {
    title: "Mindfulness-Based Approaches",
    description: "Teaches present-moment awareness and non-judgmental acceptance to reduce rumination and worry."
  }];
  const faqs = [{
    question: "How long does anxiety treatment typically take?",
    answer: "Many clients experience significant improvement within 8-16 sessions of anxiety-focused treatment. However, the timeline varies based on anxiety severity, type, and individual factors. At our Havertown anxiety therapy center, we'll discuss expected timeframes during your initial consultation and adjust the treatment plan based on your progress and needs throughout therapy."
  }, {
    question: "Will I need medication for my anxiety?",
    answer: "Not necessarily. Many people effectively manage anxiety through therapy alone. After a thorough assessment at our Havertown mental health clinic, if medication might be beneficial, we can discuss a referral to our psychiatric providers. Our anxiety treatment in Havertown supports both medication and non-medication approaches based on your specific needs, preferences, and the severity of your anxiety symptoms."
  }, {
    question: "Will I have to talk about things that make me anxious?",
    answer: "Gradually addressing anxiety triggers is often part of effective treatment at our Havertown anxiety therapy practice. However, we move at your pace and use techniques to make this process manageable. Our experienced therapists in Havertown provide a safe environment where you can build confidence to face anxiety-provoking situations, but we'll never force you to discuss something you're not ready to explore."
  }, {
    question: "Is my anxiety just something I have to live with?",
    answer: "No. Anxiety disorders are highly treatable, and most people experience significant reduction in symptoms with proper treatment at Sunrise Human Care Services in Havertown. While occasional anxiety is part of life, debilitating anxiety is not something you simply have to endure. Our evidence-based anxiety therapy in Havertown has helped many clients regain control and live fulfilling lives despite previous struggles with anxiety."
  }];
  const relatedServices = [{
    title: "Depression Therapy in Havertown",
    url: "/depression-therapy-havertown-pa"
  }, {
    title: "Individual Therapy in Havertown",
    url: "/individual-therapy-havertown-pa"
  }, {
    title: "ADHD Treatment in Havertown",
    url: "/adhd-treatment-havertown-pa"
  }];

  return <ServicePageLayout title="Anxiety Treatment in Havertown, PA" description="Evidence-based therapy for all types of anxiety disorders, including generalized anxiety, social anxiety, panic disorder, and phobias." pageTitle="Expert Anxiety Treatment in Havertown, PA - Effective Therapy | Sunrise Human Care Services" metaDescription="Specialized anxiety treatment in Havertown, PA. Evidence-based therapy for panic attacks, generalized anxiety, social anxiety, and phobias. Serving Delaware County including Drexel Hill and Broomall. Find relief today." serviceType="Anxiety Therapy" canonicalUrl="/anxiety-therapy-havertown-pa" benefits={benefits} approaches={approaches} faqs={faqs} relatedServices={relatedServices}>
      {/* Service-specific content */}
      <ServiceContentSection title="Our Anxiety Treatment Approach in Havertown" hasBgPattern={true}>
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
                At Sunrise Human Care Services in Havertown, PA, we provide specialized, evidence-based anxiety treatment for all types of anxiety disorders. Our approach begins with a thorough assessment to understand your specific anxiety symptoms, triggers, and how anxiety is impacting your life.
              </p>
              
              <p className="leading-relaxed">
                Our therapists are trained in proven anxiety treatment methods that help you address both the psychological and physical symptoms of anxiety. You'll learn to recognize and challenge anxious thinking patterns while developing practical coping strategies to manage anxiety in your daily life.
              </p>
              
              <p className="leading-relaxed">
                Anxiety treatment in Havertown at our clinic is collaborative and personalized—we'll work together to develop an approach that fits your unique needs and circumstances. Many clients begin experiencing relief within a few sessions as they gain understanding of their anxiety and start implementing effective management techniques.
              </p>
              
              <p className="leading-relaxed">
                We proudly serve clients seeking anxiety therapy throughout Havertown, Drexel Hill, Broomall, and surrounding Delaware County communities. Whether you're dealing with panic attacks, persistent worry, or social anxiety, our licensed therapists provide effective <Link to="/anxiety-therapy-havertown-pa" className="text-orange-600 hover:underline">anxiety treatment in Havertown</Link> tailored to your specific needs.
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
              Our Anxiety Treatment in Havertown Helps With:
            </h3>
            
            <ul className="space-y-3.5">
              {["Generalized Anxiety Disorder (GAD)", "Panic Disorder and panic attacks", "Social Anxiety Disorder", "Specific Phobias", "Obsessive-Compulsive Disorder (OCD)", "Health Anxiety", "Performance Anxiety", "General stress and worry"].map((item, index) => <motion.li key={index} initial={{
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
                name: "Managing Panic Attacks",
                url: "/blog/managing-panic-attacks"
              }, {
                name: "When to Consider Medication for Anxiety",
                url: "/medication-management-havertown-pa"
              }, {
                name: "How Individual Therapy Helps Anxiety",
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
    </ServicePageLayout>;
};

export default AnxietyTherapy;
