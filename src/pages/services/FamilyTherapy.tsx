
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      answer: "Ideally, all household members participate, as family therapy in Havertown works best when everyone is involved. However, at Sunrise Human Care Services, we can begin family counseling with available family members and incorporate others as therapy progresses. Our Havertown family therapists are skilled at adapting the process to your family's specific situation and needs."
    },
    {
      question: "Are children included in family therapy?",
      answer: "Yes, children are generally included in our family therapy sessions in Havertown as they're important members of the family system. Our experienced family therapists adapt their approach based on children's ages, using age-appropriate techniques to ensure everyone can meaningfully participate. We create a safe environment for family members of all ages throughout Delaware County."
    },
    {
      question: "How long does family therapy typically last?",
      answer: "Family therapy in Havertown generally ranges from 8-20 sessions, depending on your family's specific needs and goals. Some families from Havertown, Drexel Hill, and Broomall complete treatment in a few months, while others benefit from longer-term family counseling. We'll discuss expected timeframes during your initial consultation and adjust as needed."
    },
    {
      question: "Will the therapist take sides in family conflicts?",
      answer: "No, our Havertown family therapists remain neutral and do not take sides. Their role in family counseling is to help all family members communicate effectively, understand each other's perspectives, and work together toward positive change. This balanced approach ensures everyone feels heard and respected during the family therapy process at our Havertown practice."
    }
  ];
  
  const relatedServices = [
    { title: "Couples Counseling in Havertown", url: "/couples-counseling-havertown-pa" },
    { title: "Child & Adolescent Therapy in Havertown", url: "/child-therapy-havertown-pa" },
    { title: "Individual Therapy in Havertown", url: "/individual-therapy-havertown-pa" }
  ];
  
  return (
    <ServicePageLayout
      title="Family Therapy in Havertown, PA"
      description="Comprehensive family counseling to improve communication, resolve conflicts, and strengthen relationships among all family members."
      pageTitle="Expert Family Therapy in Havertown, PA | Improve Communication & Resolve Conflicts | Sunrise Human Care"
      metaDescription="Professional family therapy in Havertown, PA serving Delaware County families. Our experienced therapists help families improve communication, resolve conflicts, and strengthen bonds. Family counseling for Havertown, Drexel Hill, and Broomall."
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
        title="Our Family Therapy Approach in Havertown"
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
                At Sunrise Human Care Services in Havertown, PA, family therapy begins with a comprehensive assessment to understand your family's unique dynamics, strengths, challenges, and goals. This helps us develop a tailored family counseling approach for your specific situation.
              </p>
              
              <p className="leading-relaxed">
                During family therapy sessions in Havertown, your therapist will create a safe, balanced environment where each family member has the opportunity to express themselves and be heard. Our family counselors help identify unhelpful patterns of interaction and develop more effective ways of communicating and resolving conflicts.
              </p>
              
              <p className="leading-relaxed">
                Your family therapist may assign "homework" between sessions, giving your family the opportunity to practice new skills in real-life situations. As family therapy progresses, you'll develop a deeper understanding of each other's needs and perspectives, strengthening your family bonds and creating lasting positive change.
              </p>
              
              <p className="leading-relaxed">
                We provide family therapy services to families throughout Havertown, Drexel Hill, Broomall, and surrounding Delaware County communities. Whether you're struggling with communication challenges, behavioral issues, or major life transitions, our <Link to="/child-therapy-havertown-pa" className="text-orange-600 hover:underline">experienced family therapists</Link> can help you build stronger, healthier family relationships.
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
              Our Family Therapy in Havertown Helps With:
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
            
            <div className="mt-7 pt-5 border-t border-orange-100">
              <h4 className="text-lg font-medium mb-3 text-orange-600">
                Related Family Resources
              </h4>
              
              <ul className="space-y-3">
                {[
                  { name: "Supporting Children Through Divorce", url: "/blog/children-divorce-support" },
                  { name: "When to Consider Child Therapy", url: "/child-therapy-havertown-pa" },
                  { name: "Building Stronger Parent-Teen Relationships", url: "/blog/parent-teen-communication" }
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
      
      {/* New testimonial section specifically for family therapy */}
      <ServiceContentSection title="What Our Family Therapy Clients in Havertown Say" hasBgPattern={false}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-amber-100 relative"
          >
            <svg className="h-8 w-8 text-amber-300 absolute top-4 left-4 opacity-40" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <div className="pl-6 pt-6">
              <p className="italic text-amber-900">The family counseling at Sunrise in Havertown helped us navigate a really difficult time after our daughter started having behavioral problems at school. Our therapist helped us understand what was happening and gave us practical tools that made a huge difference. Family therapy truly transformed our home environment.</p>
              <p className="mt-4 font-medium text-amber-800">- The Wilson Family, Havertown</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-amber-100 relative"
          >
            <svg className="h-8 w-8 text-amber-300 absolute top-4 left-4 opacity-40" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <div className="pl-6 pt-6">
              <p className="italic text-amber-900">As a blended family from Drexel Hill, we struggled to merge our different parenting styles and household rules. The family therapy we received at Sunrise in Havertown was exactly what we needed - practical, compassionate, and effective. We now function as a united family instead of two separate units.</p>
              <p className="mt-4 font-medium text-amber-800">- The Johnson-Martinez Family, Drexel Hill</p>
            </div>
          </motion.div>
        </div>
      </ServiceContentSection>
    </ServicePageLayout>
  );
};

export default FamilyTherapy;
