
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

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
      pageTitle="Expert Family Therapy in Havertown, PA - Relationship Counseling | Sunrise Human Care Services"
      metaDescription="Professional family therapy in Havertown, PA to improve communication, resolve conflicts, and strengthen family bonds. Our experienced therapists help families thrive. Schedule today."
      serviceType="Family Therapy"
      canonicalUrl="/family-therapy-havertown-pa"
      heroImage="/images/family-counseling-havertown.webp"
      benefits={benefits}
      approaches={approaches}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      {/* Service-specific content */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-opensans">
                What to Expect in Family Therapy
              </h2>
              
              <div className="space-y-4">
                <p>
                  At Sunrise Human Care Services in Havertown, PA, family therapy begins with a comprehensive assessment to understand your family's unique dynamics, strengths, challenges, and goals. This helps us develop a tailored treatment approach.
                </p>
                
                <p>
                  During sessions, your therapist will create a safe, balanced environment where each family member has the opportunity to express themselves and be heard. We'll help identify unhelpful patterns of interaction and develop more effective ways of communicating and resolving conflicts.
                </p>
                
                <p>
                  Your therapist may assign "homework" between sessions, giving your family the opportunity to practice new skills in real-life situations. As therapy progresses, you'll develop a deeper understanding of each other's needs and perspectives, strengthening your family bonds.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sunrise-100/30">
              <h3 className="text-xl font-semibold mb-4 font-opensans">
                Our Family Therapy Helps With:
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Communication breakdowns and conflicts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Parenting challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Blended family integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Major family transitions (moves, divorces, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Supporting a family member with mental health issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Behavioral problems in children or teens</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Grief and loss</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Family conflict resolution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional image section showing family therapy session */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4 font-opensans">Building Stronger Families Together</h3>
              <p className="text-muted-foreground mb-4">
                Family therapy provides a safe space where all members can express themselves and be heard, helping to resolve conflicts and strengthen bonds.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-sunrise-500 mr-2 text-lg">→</span>
                  <span>Learn effective communication skills</span>
                </div>
                <div className="flex items-start">
                  <span className="text-sunrise-500 mr-2 text-lg">→</span>
                  <span>Develop healthier interaction patterns</span>
                </div>
                <div className="flex items-start">
                  <span className="text-sunrise-500 mr-2 text-lg">→</span>
                  <span>Understand each other's perspectives</span>
                </div>
                <div className="flex items-start">
                  <span className="text-sunrise-500 mr-2 text-lg">→</span>
                  <span>Create a more supportive home environment</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/images/family-counseling-havertown.webp" 
                alt="Family therapy session with parents and children" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default FamilyTherapy;
