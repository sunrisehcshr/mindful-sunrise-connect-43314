
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      answer: "For younger children, you might describe child therapy in Havertown as a special place where they can play, talk, and learn about feelings. For teens, explain that a therapist is someone who helps young people handle stress, emotions, and challenges. Our child therapists in Havertown can provide age-appropriate resources to help with this conversation and make the introduction to therapy comfortable."
    },
    {
      question: "Will I be involved in my child's therapy?",
      answer: "Yes, parent involvement is crucial to successful child therapy in Havertown. While some sessions may be one-on-one with your child, our Havertown child therapists regularly include parents for updates, education, and family sessions. The level of involvement varies based on your child's age and specific needs, creating a collaborative approach to your child's mental health care."
    },
    {
      question: "How long does child therapy typically last?",
      answer: "Treatment duration varies depending on your child's specific needs and goals. Some children benefit from short-term therapy (8-12 sessions) at our Havertown clinic, while others may need ongoing support. We serve families from throughout Havertown, Drexel Hill, and Broomall with flexible child therapy options. We'll discuss timeframes during the initial consultation and provide regular updates on your child's progress."
    },
    {
      question: "How do you handle confidentiality with children and teens?",
      answer: "At our Havertown child therapy practice, we balance a child's need for privacy with parents' right to information. We maintain confidentiality except in cases of safety concerns, but also work to facilitate healthy communication between children and parents about the therapeutic process. Our child therapists in Havertown will clearly explain confidentiality boundaries during your initial consultation."
    }
  ];
  
  const relatedServices = [
    { title: "Family Therapy in Havertown", url: "/family-therapy-havertown-pa" },
    { title: "ADHD Treatment in Havertown", url: "/adhd-treatment-havertown-pa" },
    { title: "Anxiety Therapy in Havertown", url: "/anxiety-therapy-havertown-pa" }
  ];
  
  return (
    <ServicePageLayout
      title="Child & Adolescent Therapy in Havertown, PA"
      description="Specialized therapeutic approaches for children and teens facing emotional, behavioral, or developmental challenges."
      pageTitle="Child & Adolescent Therapy in Havertown, PA - Youth Mental Health Services | Sunrise Human Care"
      metaDescription="Professional child and adolescent therapy in Havertown, PA serving Delaware County families. Age-appropriate counseling for anxiety, depression, behavioral issues, and developmental challenges. Child therapists for Havertown, Drexel Hill, and Broomall."
      serviceType="Child & Adolescent Therapy"
      canonicalUrl="/child-therapy-havertown-pa"
      benefits={benefits}
      approaches={approaches}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      {/* Service-specific content */}
      <ServiceContentSection
        title="Our Child Therapy Approach in Havertown"
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
                At Sunrise Human Care Services in Havertown, PA, we recognize that children and teens have unique developmental needs. Our child therapy approach begins with a comprehensive assessment involving both the young person and their parents to understand the presenting concerns, strengths, and goals.
              </p>
              
              <p className="leading-relaxed">
                For younger children, our child therapists in Havertown utilize play therapy and expressive arts in a welcoming, child-friendly environment. These approaches allow children to express themselves naturally and process emotions in age-appropriate ways during child counseling sessions.
              </p>
              
              <p className="leading-relaxed">
                With adolescents, our Havertown teen therapy combines talk therapy, creative activities, and skill-building exercises. We respect teens' growing need for independence while maintaining appropriate parental involvement. Throughout the process, we collaborate closely with parents, providing guidance, support, and education to help you better understand and respond to your child's needs.
              </p>
              
              <p className="leading-relaxed">
                Our child therapy services are available to families throughout Havertown, Drexel Hill, Broomall, and surrounding Delaware County communities. Whether your child is struggling with <Link to="/anxiety-therapy-havertown-pa" className="text-orange-600 hover:underline">anxiety</Link>, <Link to="/adhd-treatment-havertown-pa" className="text-orange-600 hover:underline">ADHD</Link>, or behavioral challenges, our experienced child therapists provide specialized care tailored to your child's unique needs.
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
              Our Child Therapy in Havertown Helps With:
            </h3>
            
            <ul className="space-y-3.5">
              {[
                "Anxiety and worry",
                "Depression and mood issues",
                "ADHD and concentration difficulties",
                "Behavioral challenges",
                "School-related issues",
                "Social difficulties and bullying",
                "Trauma and significant life changes",
                "Identity and self-esteem development"
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
                Related Child Development Resources
              </h4>
              
              <ul className="space-y-3">
                {[
                  { name: "Supporting Children with Anxiety", url: "/anxiety-therapy-havertown-pa" },
                  { name: "When to Consider ADHD Assessment", url: "/adhd-treatment-havertown-pa" },
                  { name: "Building Family Communication Skills", url: "/family-therapy-havertown-pa" }
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
      
      {/* New testimonial section specifically for child therapy */}
      <ServiceContentSection title="What Our Child Therapy Clients in Havertown Say" hasBgPattern={false}>
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
              <p className="italic text-amber-900">Our 8-year-old son had been struggling with anxiety and behavioral issues that affected his school performance. The child therapist at Sunrise in Havertown connected with him immediately through play therapy. The difference we've seen in just a few months is remarkable - he's happier, more confident, and doing better in school.</p>
              <p className="mt-4 font-medium text-amber-800">- Parent of child client, Havertown</p>
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
              <p className="italic text-amber-900">As the mother of a teenager from Broomall, I was worried about my daughter's depression after a difficult transition to high school. The adolescent therapist at Sunrise connected with her in a way I couldn't, and provided us both with strategies and support. The teen counseling approach was respectful of her independence while keeping me appropriately involved.</p>
              <p className="mt-4 font-medium text-amber-800">- Parent of teen client, Broomall</p>
            </div>
          </motion.div>
        </div>
      </ServiceContentSection>
    </ServicePageLayout>
  );
};

export default ChildTherapy;
