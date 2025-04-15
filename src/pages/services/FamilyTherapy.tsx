
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import SectionTag from '@/components/ui/section-tag';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Users, HeartHandshake, LucideHome, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const FamilyTherapy = () => {
  const benefits = [
    "Licensed Havertown Family Therapists with extensive experience",
    "Convenient West Chester Pike location with parking",
    "Flexible scheduling for all family members",
    "Most insurance plans accepted",
    "Safe, supportive environment for every family member",
    "Both in-person & virtual sessions available"
  ];

  const approaches = [
    {
      title: "Structural Family Therapy",
      description: "Examines and strengthens family structure and relationships"
    },
    {
      title: "Strategic Family Therapy",
      description: "Focuses on solving specific problems efficiently"
    },
    {
      title: "Narrative Family Therapy",
      description: "Helps families create more empowering life stories"
    },
    {
      title: "Systemic Family Therapy",
      description: "Addresses patterns within the family system"
    },
    {
      title: "Attachment-Based Family Therapy",
      description: "Strengthens emotional bonds between family members"
    }
  ];

  const whoCanBenefit = [
    "Families experiencing communication challenges",
    "Blended families adjusting to new dynamics",
    "Families going through major life transitions",
    "Parents and children struggling with behavioral issues",
    "Families dealing with grief or loss",
    "Families impacted by mental health challenges",
    "Multigenerational families navigating relationships",
    "Families seeking to strengthen their bonds"
  ];

  const faqs = [
    {
      question: "Do all family members need to attend therapy sessions?",
      answer: "Ideally, all household members participate, as family therapy works best when everyone is involved. However, we can begin with available family members and incorporate others as therapy progresses. Our therapists are skilled at adapting the process to your family's specific situation."
    },
    {
      question: "Are children included in family therapy?",
      answer: "Yes, children are included in our family therapy sessions as they're important members of the family system. Our experienced therapists adapt their approach based on children's ages, using age-appropriate techniques to ensure everyone can meaningfully participate."
    },
    {
      question: "How long does family therapy typically last?",
      answer: "Family therapy generally ranges from 8-20 sessions, depending on your family's specific needs and goals. Some families complete treatment in a few months, while others benefit from longer-term counseling. We'll discuss expected timeframes during your initial consultation."
    },
    {
      question: "Will the therapist take sides in family conflicts?",
      answer: "No, our therapists remain neutral and do not take sides. Their role is to help all family members communicate effectively, understand each other's perspectives, and work together toward positive change."
    }
  ];

  const relatedServices = [
    {
      title: "Couples Counseling in Havertown",
      url: "/couples-counseling-havertown-pa"
    },
    {
      title: "Child & Adolescent Therapy in Havertown",
      url: "/child-therapy-havertown-pa"
    },
    {
      title: "Individual Therapy in Havertown",
      url: "/individual-therapy-havertown-pa"
    }
  ];

  // Custom breadcrumbs for Family Therapy page
  const familyTherapyBreadcrumbs = [
    {
      name: "Home",
      url: "https://sunrisehumancare.com",
      position: 1
    },
    {
      name: "Services",
      url: "https://sunrisehumancare.com/services",
      position: 2
    },
    {
      name: "Family Therapy",
      url: "https://sunrisehumancare.com/family-therapy-havertown-pa",
      position: 3
    }
  ];

  return (
    <ServicePageLayout 
      title="Family Therapy in Havertown, PA" 
      description="Expert family therapy in Havertown to improve communication, resolve conflicts, and strengthen relationships. Our experienced therapists help families navigate challenges and build stronger bonds." 
      pageTitle="Expert Family Therapy in Havertown, PA | Build Stronger Family Bonds | Sunrise Human Care" 
      metaDescription="Professional family therapy in Havertown, PA serving Delaware County families. Our experienced therapists help families improve communication, resolve conflicts, and strengthen bonds. Family counseling for Havertown, Drexel Hill, and Broomall." 
      serviceType="Family Therapy" 
      canonicalUrl="/family-therapy-havertown-pa" 
      heroImage="/images/family-counseling-havertown.webp" 
      benefits={benefits} 
      approaches={approaches} 
      faqs={faqs} 
      relatedServices={relatedServices} 
      schemaType="TherapeuticProcedure"
      breadcrumbs={familyTherapyBreadcrumbs}
    >
      <ServiceContentSection title="Our Family Therapy Approach in Havertown" hasBgPattern={true}>
        <div className="mb-6">
          <SectionTag icon={<HeartHandshake className="h-3 w-3" />}>Strengthening Family Bonds</SectionTag>
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
                At Sunrise Human Care Services in Havertown, our family therapy program begins with understanding your family's unique dynamics, strengths, and challenges. We create a welcoming environment where every family member feels safe to express themselves.
              </p>
              
              <p className="leading-relaxed text-base lg:text-lg">
                Our experienced family therapists work with families from diverse backgrounds, helping them navigate various challenges such as communication difficulties, behavioral issues, life transitions, and relationship conflicts. We understand that every family is unique, and we tailor our approach to meet your specific needs.
              </p>
              
              <p className="leading-relaxed text-base lg:text-lg">
                During sessions, we focus on improving communication patterns, resolving conflicts constructively, and strengthening the emotional bonds between family members. Our therapists help families develop practical tools and strategies they can use in their daily lives.
              </p>
              
              <p className="leading-relaxed text-base lg:text-lg">
                Whether you're dealing with parenting challenges, adjusting to changes in family structure, or working through generational differences, our <Link to="/about" className="text-orange-600 hover:underline">skilled therapists</Link> are here to support your family's journey toward healing and growth.
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
              Our Family Therapy Services Help With:
            </h3>
            
            <ul className="space-y-3.5">
              {[
                "Communication breakdowns and conflicts",
                "Parenting challenges and behavioral issues",
                "Blended family integration",
                "Major life transitions (moves, divorces, etc.)",
                "Supporting a family member with mental health issues",
                "Grief and loss within the family",
                "Intergenerational conflicts",
                "Family trauma and healing"
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
                Family Resources
              </h4>
              
              <ul className="space-y-3">
                {[
                  {
                    name: "Supporting Children Through Family Changes",
                    url: "/blog/children-family-changes"
                  },
                  {
                    name: "Building Strong Family Communication",
                    url: "/blog/family-communication-tips"
                  },
                  {
                    name: "When to Consider Family Therapy",
                    url: "/blog/family-therapy-guide"
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

      <ServiceContentSection title="Who Can Benefit from Family Therapy?" hasBgPattern={false}>
        <div className="mb-6">
          <SectionTag icon={<Users className="h-3 w-3" />}>For All Families</SectionTag>
        </div>
        
        <div className="flex items-center gap-2 mb-6">
          <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">Family Growth</Badge>
          <Badge variant="secondary" className="bg-amber-100 text-amber-700 hover:bg-amber-200">Better Communication</Badge>
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">Stronger Bonds</Badge>
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
                Family therapy is beneficial for families at any stage of their journey together. Whether you're experiencing specific challenges or simply want to strengthen your family bonds, our therapeutic approach can help create positive change.
              </p>
              
              <p className="leading-relaxed text-base lg:text-lg">
                We work with traditional families, blended families, single-parent families, multigenerational households, and families of all cultural backgrounds. Our inclusive approach ensures that every family member feels valued and understood.
              </p>
              
              <p className="leading-relaxed text-base lg:text-lg">
                Family therapy can be particularly helpful during times of transition or stress, but it's also valuable for families who want to proactively build stronger relationships and improve their communication patterns.
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
              Who Benefits from Family Therapy:
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

      <ServiceContentSection title="Our Family Therapy Methods" hasBgPattern={false}>
        <div className="mb-6">
          <SectionTag icon={<Lightbulb className="h-3 w-3" />}>Evidence-Based Approaches</SectionTag>
        </div>
        
        <div className="relative mb-8 mx-auto max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg opacity-10"></div>
          <div className="relative p-6 text-center">
            <p className="text-lg lg:text-xl font-medium text-amber-900">
              "Every family has unique strengths and challenges. We use proven therapeutic approaches tailored to your family's specific needs."
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
                Our family therapy approaches are grounded in evidence-based practices that have been proven effective in helping families overcome challenges and build stronger relationships. We combine different therapeutic methods to create a comprehensive treatment plan that addresses your family's specific needs.
              </p>
              
              <p className="leading-relaxed text-base lg:text-lg">
                Each session is structured to maximize engagement and progress, while remaining flexible enough to address immediate concerns as they arise. We help families identify and understand their patterns of interaction, develop new ways of communicating, and create lasting positive change.
              </p>
              
              <p className="leading-relaxed text-base lg:text-lg">
                Our therapists are trained in multiple therapeutic modalities, allowing us to adapt our approach as needed. We focus on building upon your family's existing strengths while developing new skills and strategies for managing challenges.
              </p>
              
              <p className="leading-relaxed text-base lg:text-lg">
                Throughout the therapy process, we work collaboratively with your family to ensure that the strategies and tools we develop together are practical and can be effectively implemented in your daily life.
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
                We continuously update our methods based on the latest research in family therapy and mental health.
              </p>
            </div>
          </motion.div>
        </div>
      </ServiceContentSection>
    </ServicePageLayout>
  );
};

export default FamilyTherapy;
