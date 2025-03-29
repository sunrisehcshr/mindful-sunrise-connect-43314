
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const FamilyTherapy = () => {
  const benefits = [
    "Improve communication among all family members",
    "Resolve conflicts and reduce family tension",
    "Strengthen family bonds and relationships",
    "Develop healthy boundaries and family roles",
    "Navigate major life transitions as a united family",
    "Create a more supportive and nurturing home environment"
  ];
  
  const approaches = [
    {
      title: "Structural Family Therapy",
      description: "Examines and adjusts the family structure to improve interactions and strengthen relationships between family members."
    },
    {
      title: "Strategic Family Therapy",
      description: "Focuses on specific problems and developing practical strategies to solve them in the shortest time possible."
    },
    {
      title: "Narrative Family Therapy",
      description: "Helps families identify and change the stories they tell about themselves and their challenges, creating more empowering narratives."
    },
    {
      title: "Systemic Family Therapy",
      description: "Addresses patterns of interaction within the family system rather than focusing on individual family members."
    }
  ];
  
  const faqs = [
    {
      question: "Do all family members need to attend therapy sessions?",
      answer: "Ideally, all household members participate, as family therapy works best when everyone is involved. However, we can begin with available family members and incorporate others as therapy progresses."
    },
    {
      question: "Are children included in family therapy?",
      answer: "Yes, children are generally included as they're important members of the family system. We adapt our approach based on their ages, using age-appropriate techniques to ensure they can meaningfully participate."
    },
    {
      question: "How long does family therapy typically last?",
      answer: "Family therapy generally ranges from 8-20 sessions, depending on your family's specific needs and goals. We'll discuss expected timeframes during your initial consultation and adjust as needed."
    },
    {
      question: "Will the therapist take sides in family conflicts?",
      answer: "No, our therapists remain neutral and do not take sides. Their role is to help all family members communicate effectively, understand each other's perspectives, and work together toward positive change."
    }
  ];
  
  const relatedServices = [
    { title: "Couples Counseling", url: "/couples-counseling-havertown-pa" },
    { title: "Child & Adolescent Therapy", url: "/child-therapy-havertown-pa" },
    { title: "Individual Therapy", url: "/individual-therapy-havertown-pa" }
  ];
  
  return (
    <ServicePageLayout
      title="Family Therapy in Havertown, PA"
      description="Comprehensive family counseling to improve communication, resolve conflicts, and strengthen relationships among all family members."
      pageTitle="Expert Family Therapy in Havertown, PA | Improve Communication & Resolve Conflicts | Sunrise Human Care"
      metaDescription="Professional family therapy in Havertown, PA to improve communication, resolve conflicts, and strengthen family bonds. Our experienced therapists help families navigate challenges, develop healthy boundaries, and create a supportive home environment. Schedule a consultation today."
      serviceType="Family Therapy"
      canonicalUrl="/family-therapy-havertown-pa"
      heroImage="/images/family-counseling-havertown.webp"
      benefits={benefits}
      approaches={approaches}
      faqs={faqs}
      relatedServices={relatedServices}
      schemaType="TherapeuticProcedure"
    >
      {/* Enhanced service-specific content */}
      <ServiceContentSection
        title="What to Expect in Family Therapy"
        hasBgPattern={true}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-5 text-muted-foreground">
              <p className="leading-relaxed">
                At Sunrise Human Care Services in Havertown, PA, family therapy begins with a comprehensive assessment to understand your family's unique dynamics, strengths, challenges, and goals. This helps us develop a tailored treatment approach.
              </p>
              
              <p className="leading-relaxed">
                During sessions, your therapist will create a safe, balanced environment where each family member has the opportunity to express themselves and be heard. We'll help identify unhelpful patterns of interaction and develop more effective ways of communicating and resolving conflicts.
              </p>
              
              <p className="leading-relaxed">
                Your therapist may assign "homework" between sessions, giving your family the opportunity to practice new skills in real-life situations. As therapy progresses, you'll develop a deeper understanding of each other's needs and perspectives, strengthening your family bonds.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-7 rounded-xl shadow-md border border-sunrise-100/50 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-5 text-orange-600 font-playfair">
              Our Family Therapy Helps With:
            </h3>
            
            <ul className="space-y-3.5">
              {[
                "Communication breakdowns and conflicts",
                "Parenting challenges",
                "Blended family integration",
                "Major family transitions (moves, divorces, etc.)",
                "Supporting a family member with mental health issues",
                "Behavioral problems in children or teens",
                "Grief and loss",
                "Family conflict resolution"
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
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </ServiceContentSection>
    </ServicePageLayout>
  );
};

export default FamilyTherapy;
