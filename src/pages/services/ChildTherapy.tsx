
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import SectionTag from '@/components/ui/section-tag';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Brain, HeartHandshake, Users, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const ChildTherapy = () => {
  const benefits = [
    "Age-appropriate therapeutic approaches for children and teens",
    "Development of healthy coping skills and emotional regulation",
    "Improved communication between children and parents",
    "Support through developmental changes and transitions",
    "Early intervention for emerging mental health concerns",
    "Increased self-esteem and confidence",
    "Safe and welcoming environment for expression",
    "Collaboration with parents and caregivers"
  ];

  const approaches = [
    {
      title: "Play Therapy",
      description: "Uses play as a natural form of communication to help younger children express their feelings, develop problem-solving skills, and process difficult experiences."
    },
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      description: "Adapted for children and teens to help them identify negative thought patterns and develop healthier ways of thinking and behaving."
    },
    {
      title: "Family Systems Approach",
      description: "Involves parents and other family members to address the child's challenges within the context of family dynamics."
    },
    {
      title: "Art & Creative Expression",
      description: "Uses creative activities like art, music, and movement to help children express emotions and experiences that may be difficult to put into words."
    },
    {
      title: "Mindfulness Techniques",
      description: "Age-appropriate mindfulness and relaxation exercises to help children manage anxiety, stress, and emotional regulation."
    }
  ];

  const whoCanBenefit = [
    "Children experiencing anxiety or worry",
    "Youth struggling with depression or mood changes",
    "Children with attention or behavioral challenges",
    "Teens navigating social and academic pressures",
    "Children coping with family changes or transitions",
    "Youth experiencing peer difficulties or bullying",
    "Children with trauma or significant life changes",
    "Teens struggling with identity and self-esteem"
  ];

  const faqs = [
    {
      question: "How do I explain therapy to my child?",
      answer: "For younger children, we describe child therapy as a special place where they can play, talk, and learn about feelings. For teens, we explain that a therapist is someone who helps young people handle stress, emotions, and challenges. Our child therapists provide age-appropriate resources to help with this conversation."
    },
    {
      question: "Will I be involved in my child's therapy?",
      answer: "Yes, parent involvement is crucial to successful child therapy. While some sessions may be one-on-one with your child, our therapists regularly include parents for updates, education, and family sessions. The level of involvement varies based on your child's age and specific needs."
    },
    {
      question: "How long does child therapy typically last?",
      answer: "Treatment duration varies depending on your child's specific needs and goals. Some children benefit from short-term therapy (8-12 sessions), while others may need ongoing support. We'll discuss timeframes during the initial consultation and provide regular updates on progress."
    },
    {
      question: "How do you handle confidentiality with children and teens?",
      answer: "We balance a child's need for privacy with parents' right to information. We maintain confidentiality except in cases of safety concerns, but also work to facilitate healthy communication between children and parents about the therapeutic process."
    }
  ];

  const relatedServices = [
    {
      title: "Family Therapy in Havertown",
      url: "/family-therapy-havertown-pa"
    },
    {
      title: "ADHD Treatment in Havertown",
      url: "/adhd-treatment-havertown-pa"
    },
    {
      title: "Anxiety Therapy in Havertown",
      url: "/anxiety-therapy-havertown-pa"
    }
  ];

  return (
    <ServicePageLayout
      title="Child & Adolescent Therapy in Havertown, PA"
      description="Specialized therapeutic approaches for children and teens facing emotional, behavioral, or developmental challenges. Our experienced child therapists create a safe, nurturing environment for growth."
      pageTitle="Child & Adolescent Therapy in Havertown, PA - Youth Mental Health Services | Sunrise Human Care"
      metaDescription="Professional child and adolescent therapy in Havertown, PA serving Delaware County families. Age-appropriate counseling for anxiety, depression, behavioral issues, and developmental challenges. Child therapists for Havertown, Drexel Hill, and Broomall."
      serviceType="Child & Adolescent Therapy"
      canonicalUrl="/child-therapy-havertown-pa"
      heroImage="/images/child-counseling-havertown.webp"
      benefits={benefits}
      approaches={approaches}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <ServiceContentSection title="Our Child Therapy Approach" hasBgPattern={true}>
        <div className="mb-6">
          <SectionTag icon={<HeartHandshake className="h-3 w-3" />}>Child-Centered Care</SectionTag>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">Age-Appropriate Care</Badge>
          <Badge variant="secondary" className="bg-amber-100 text-amber-700 hover:bg-amber-200">Family Involvement</Badge>
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">Evidence-Based</Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-5 text-muted-foreground">
              <p className="leading-relaxed text-base lg:text-lg">
                At Sunrise Human Care Services in Havertown, PA, we understand that children and adolescents have unique therapeutic needs. Our child therapy approach begins with creating a safe, welcoming environment where young people feel comfortable expressing themselves.
              </p>
              
              <p className="leading-relaxed text-base lg:text-lg">
                For younger children, we utilize play therapy and creative expression in our child-friendly spaces. These approaches allow children to communicate naturally and process emotions in age-appropriate ways. Our skilled therapists adapt their techniques to match each child's developmental level and interests.
              </p>
              
              <p className="leading-relaxed text-base lg:text-lg">
                With adolescents, we combine traditional talk therapy with engaging activities and skill-building exercises. We respect teens' growing independence while maintaining appropriate parental involvement. Throughout therapy, we work closely with parents, providing guidance and support to help you understand and respond to your child's needs.
              </p>
              
              <p className="leading-relaxed text-base lg:text-lg">
                Our child therapy services support families throughout Havertown, Drexel Hill, and Broomall. Whether your child is struggling with <Link to="/anxiety-therapy-havertown-pa" className="text-orange-600 hover:underline">anxiety</Link>, <Link to="/adhd-treatment-havertown-pa" className="text-orange-600 hover:underline">ADHD</Link>, or emotional challenges, our experienced child therapists provide specialized care tailored to their unique needs.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-7 lg:p-8 rounded-xl shadow-md border border-orange-100/50 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl lg:text-2xl font-semibold mb-5 text-orange-600 font-playfair">
              Our Child Therapy Helps With:
            </h3>
            
            <ul className="space-y-3.5">
              {[
                "Anxiety and worry",
                "Depression and mood changes",
                "ADHD and concentration difficulties",
                "Behavioral challenges",
                "School-related stress",
                "Social skills and peer relationships",
                "Family transitions and adjustment",
                "Self-esteem and identity development"
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
                  <span className="text-muted-foreground text-base lg:text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-7 pt-5 border-t border-orange-100">
              <h4 className="text-lg lg:text-xl font-medium mb-3 text-orange-600">
                Child Development Resources
              </h4>
              
              <ul className="space-y-3">
                {[
                  {
                    name: "Understanding Childhood Anxiety",
                    url: "/anxiety-therapy-havertown-pa"
                  },
                  {
                    name: "Signs of ADHD in Children",
                    url: "/adhd-treatment-havertown-pa"
                  },
                  {
                    name: "Supporting Your Child's Mental Health",
                    url: "/blog/child-mental-health"
                  }
                ].map((resource, index) => (
                  <li key={index}>
                    <Link
                      to={resource.url}
                      className="flex items-center text-orange-500 hover:text-orange-700 transition-colors text-base lg:text-lg"
                    >
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

      <ServiceContentSection title="Who Can Benefit from Child Therapy?" hasBgPattern={false}>
        <div className="mb-6">
          <SectionTag icon={<Users className="h-3 w-3" />}>Comprehensive Support</SectionTag>
        </div>
        
        <div className="relative mb-8 mx-auto max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg opacity-10"></div>
          <div className="relative p-6 text-center">
            <p className="text-lg lg:text-xl font-medium text-amber-900">
              "Every child deserves a safe space to express themselves and develop healthy coping skills. Our child therapy services are designed to support children and teens through their unique challenges."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-5 text-muted-foreground">
              <p className="leading-relaxed text-base lg:text-lg">
                Child therapy can benefit children and adolescents facing various challenges. Our therapeutic approaches are tailored to each child's age, developmental stage, and specific needs. We create a supportive environment where children feel comfortable exploring their thoughts and feelings.
              </p>
              
              <p className="leading-relaxed text-base lg:text-lg">
                Early intervention through child therapy can help prevent more serious issues from developing later in life. We work with children to build resilience, develop healthy coping mechanisms, and improve their emotional regulation skills.
              </p>
              
              <p className="leading-relaxed text-base lg:text-lg">
                Parent involvement is a crucial part of successful child therapy. We provide parents with tools and strategies to better understand and support their child's emotional needs, creating a collaborative approach to your child's mental health care.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-7 lg:p-8 rounded-xl shadow-md border border-orange-100/50 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl lg:text-2xl font-semibold mb-5 text-orange-600 font-playfair">
              Who Benefits from Child Therapy:
            </h3>
            
            <ul className="space-y-3.5">
              {whoCanBenefit.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base lg:text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </ServiceContentSection>

      <ServiceContentSection title="Our Child Therapy Methods" hasBgPattern={false}>
        <div className="mb-6">
          <SectionTag icon={<Lightbulb className="h-3 w-3" />}>Evidence-Based Approaches</SectionTag>
        </div>
        
        <div className="relative mb-8 mx-auto max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg opacity-10"></div>
          <div className="relative p-6 text-center">
            <p className="text-lg lg:text-xl font-medium text-amber-900">
              "We use proven therapeutic approaches adapted for children and teens, ensuring that every session is engaging and developmentally appropriate."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-5 text-muted-foreground">
              <p className="leading-relaxed text-base lg:text-lg">
                Our child therapy approaches are grounded in evidence-based practices that have been proven effective for children and adolescents. We combine different therapeutic methods to create a comprehensive treatment plan that addresses your child's specific needs.
              </p>
              
              <p className="leading-relaxed text-base lg:text-lg">
                Each session is structured to maximize engagement while remaining flexible enough to address immediate concerns. We help children identify and express their emotions, develop problem-solving skills, and build healthy coping strategies.
              </p>
              
              <p className="leading-relaxed text-base lg:text-lg">
                Our therapists are trained in multiple therapeutic modalities specifically designed for young people. We focus on building upon your child's existing strengths while developing new skills for managing challenges.
              </p>
              
              <p className="leading-relaxed text-base lg:text-lg">
                Throughout the therapy process, we work collaboratively with both children and parents to ensure that the strategies we develop can be effectively implemented in daily life.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-7 lg:p-8 rounded-xl shadow-md border border-orange-100/50 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl lg:text-2xl font-semibold mb-5 text-orange-600 font-playfair">
              Our Therapeutic Methods Include:
            </h3>
            
            <ul className="space-y-4">
              {approaches.map((approach, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="border-b border-orange-100 pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-amber-900 text-base lg:text-lg">{approach.title}</span>
                    <span className="text-muted-foreground text-sm lg:text-base">{approach.description}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-7 pt-5 border-t border-orange-100">
              <p className="text-sm lg:text-base text-muted-foreground italic">
                We continuously update our therapeutic approaches based on the latest research in child and adolescent mental health.
              </p>
            </div>
          </motion.div>
        </div>
      </ServiceContentSection>
    </ServicePageLayout>
  );
};

export default ChildTherapy;
