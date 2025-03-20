
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';

const ChildTherapy = () => {
  const benefits = [
    "Age-appropriate therapeutic approaches for children and teens",
    "Development of healthy coping skills and emotional regulation",
    "Improved communication between children and parents",
    "Support through developmental changes and transitions",
    "Early intervention for emerging mental health concerns",
    "Increased self-esteem and confidence"
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
      title: "Expressive Arts Therapy",
      description: "Uses creative activities like art, music, and movement to help children express emotions and experiences that may be difficult to put into words."
    }
  ];
  
  const faqs = [
    {
      question: "How do I explain therapy to my child?",
      answer: "For younger children, you might describe therapy as a special place where they can play, talk, and learn about feelings. For teens, explain that a therapist is someone who helps young people handle stress, emotions, and challenges. We can provide age-appropriate resources to help with this conversation."
    },
    {
      question: "Will I be involved in my child's therapy?",
      answer: "Yes, parent involvement is crucial. While some sessions may be one-on-one with your child, we regularly include parents for updates, education, and family sessions. The level of involvement varies based on your child's age and specific needs."
    },
    {
      question: "How long does child therapy typically last?",
      answer: "Treatment duration varies depending on your child's specific needs and goals. Some children benefit from short-term therapy (8-12 sessions), while others may need ongoing support. We'll discuss timeframes during the initial consultation and provide regular updates."
    },
    {
      question: "How do you handle confidentiality with children and teens?",
      answer: "We balance a child's need for privacy with parents' right to information. We maintain confidentiality except in cases of safety concerns, but also work to facilitate healthy communication between children and parents about the therapeutic process."
    }
  ];
  
  const relatedServices = [
    { title: "Family Therapy", url: "/family-therapy-havertown-pa" },
    { title: "ADHD Treatment", url: "/adhd-treatment-havertown-pa" },
    { title: "Anxiety Therapy", url: "/anxiety-therapy-havertown-pa" }
  ];
  
  return (
    <ServicePageLayout
      title="Child & Adolescent Therapy in Havertown, PA"
      description="Specialized therapeutic approaches for children and teens facing emotional, behavioral, or developmental challenges."
      pageTitle="Child & Adolescent Therapy in Havertown, PA - Youth Mental Health Services | Sunrise Human Care"
      metaDescription="Professional child and teen therapy in Havertown, PA. Age-appropriate counseling for anxiety, depression, behavioral issues, and developmental challenges. Schedule a consultation today."
      serviceType="Child & Adolescent Therapy"
      canonicalUrl="/child-therapy-havertown-pa"
      benefits={benefits}
      approaches={approaches}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      {/* Service-specific content */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-yellow-100/80 via-white/30 to-amber-50/90"></div>
        <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-playfair">
                Our Approach to Working with Children & Teens
              </h2>
              
              <div className="space-y-4">
                <p>
                  At Sunrise Human Care Services in Havertown, PA, we recognize that children and teens have unique developmental needs. Our approach begins with a comprehensive assessment involving both the young person and their parents to understand the presenting concerns, strengths, and goals.
                </p>
                
                <p>
                  For younger children, we utilize play therapy and expressive arts in a welcoming, child-friendly environment. These approaches allow children to express themselves naturally and process emotions in age-appropriate ways.
                </p>
                
                <p>
                  With adolescents, we use a combination of talk therapy, creative activities, and skill-building exercises. We respect teens' growing need for independence while maintaining appropriate parental involvement. Throughout the process, we collaborate closely with parents, providing guidance, support, and education to help you better understand and respond to your child's needs.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-sunrise-100/30">
              <h3 className="text-xl font-semibold mb-4 font-playfair">
                Our Child & Adolescent Therapy Helps With:
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Anxiety and worry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Depression and mood issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>ADHD and concentration difficulties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Behavioral challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>School-related issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Social difficulties and bullying</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Trauma and significant life changes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sunrise-500 mr-2">✓</span>
                  <span>Identity and self-esteem development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default ChildTherapy;
