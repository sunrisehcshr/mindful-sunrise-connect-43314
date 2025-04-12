import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const MedicationManagement = () => {
  const benefits = ["Expert psychiatric medication guidance tailored to your specific needs", "Comprehensive monitoring to minimize side effects and maximize benefits", "Personalized medication adjustments based on your response and needs", "Integrated approach combining medication with therapy for optimal outcomes", "Educational resources about your condition and medication options", "Ongoing support throughout your medication management journey in Havertown"];
  const approaches = [{
    title: "Comprehensive Psychiatric Evaluation",
    description: "Before starting any medication regimen, our Havertown psychiatrists conduct thorough assessments of your symptoms, medical history, and treatment goals to inform medication decisions."
  }, {
    title: "Personalized Medication Selection",
    description: "Our medication management specialists in Havertown carefully consider your specific symptoms, medical history, and individual factors to select the most appropriate medication options."
  }, {
    title: "Shared Decision Making",
    description: "We believe in collaborative discussions about medication options, including benefits, risks, and alternatives, to ensure treatments align with your preferences and recovery goals."
  }, {
    title: "Regular Monitoring and Adjustment",
    description: "Our medication management in Havertown includes consistent follow-up appointments to assess medication effectiveness, manage side effects, and make necessary adjustments for optimal outcomes."
  }, {
    title: "Integrated Care Approach",
    description: "We coordinate with your therapist and other healthcare providers throughout Delaware County to ensure all aspects of your treatment work together effectively for comprehensive care."
  }];
  const faqs = [{
    question: "Will I become dependent on psychiatric medication?",
    answer: "Most psychiatric medications prescribed through our medication management services in Havertown are not habit-forming or addictive. Some medications do require gradual tapering when discontinuing to prevent withdrawal symptoms, but this is different from addiction. Your psychiatric provider will discuss the specific properties of any medication recommended and support you through any changes in your medication regimen."
  }, {
    question: "How long will I need to take psychiatric medication?",
    answer: "Treatment duration through our medication management in Havertown varies widely depending on your condition, symptoms, and treatment response. Some people may need medication for a limited time during a specific episode, while others with chronic conditions may benefit from longer-term treatment. We regularly review the continued need for medication and adjust treatment plans accordingly, always prioritizing your well-being and quality of life."
  }, {
    question: "How often will I need to come in for medication management appointments in Havertown?",
    answer: "Initially, appointments may be more frequent (every 2-4 weeks) as we find the right medication and dosage. Once your symptoms are stable, appointments typically become less frequent (every 1-3 months). The schedule is always personalized based on your specific needs and treatment response. Our Havertown office serves clients from throughout Delaware County, including Drexel Hill and Broomall, with flexible scheduling options."
  }, {
    question: "What if I experience side effects from my medication?",
    answer: "Many side effects are temporary and resolve as your body adjusts to the medication. However, our medication management team in Havertown takes all side effects seriously. Contact us promptly about any concerning side effects, and we'll determine whether dosage adjustments, medication changes, or other interventions are needed. Never discontinue medication abruptly without consulting your provider, as this can sometimes lead to withdrawal symptoms or symptom recurrence."
  }];
  const relatedServices = [{
    title: "Psychiatric Evaluations in Havertown",
    url: "/psychiatric-evaluations-havertown-pa"
  }, {
    title: "Depression Therapy in Havertown",
    url: "/depression-therapy-havertown-pa"
  }, {
    title: "ADHD Treatment in Havertown",
    url: "/adhd-treatment-havertown-pa"
  }];
  return <ServicePageLayout title="Medication Management in Havertown, PA" description="Expert psychiatric medication services to help manage mental health conditions effectively, with personalized care and ongoing support." pageTitle="Expert Medication Management in Havertown, PA - Psychiatric Medication Services | Sunrise Human Care" metaDescription="Professional psychiatric medication management in Havertown, PA serving Delaware County. Personalized medication services for depression, anxiety, ADHD, and other mental health conditions with expert psychiatrists. Schedule today." serviceType="Medication Management" canonicalUrl="/medication-management-havertown-pa" schemaType="MedicalService" benefits={benefits} approaches={approaches} faqs={faqs} relatedServices={relatedServices}>
      {/* Enhanced service-specific content with improved keyword density */}
      <ServiceContentSection title="Our Medication Management Approach in Havertown" hasBgPattern={true}>
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
                At Sunrise Human Care Services, our medication management in Havertown, PA is provided by licensed psychiatric specialists who combine medical expertise with compassionate care. We believe in evidence-based medication practices tailored to your individual needs and treatment goals.
              </p>
              
              <p className="leading-relaxed">
                Our psychiatric medication management begins with a comprehensive evaluation to understand your symptoms, medical history, and treatment goals. If medication is appropriate, we'll explain your options in clear, understandable terms, discussing potential benefits and risks so you can make informed decisions about your care.
              </p>
              
              <p className="leading-relaxed">
                The medication management approach at our Havertown clinic emphasizes finding the right medication and dosage with minimal side effects. We start with the lowest effective dose and adjust based on your response. Throughout treatment, we provide ongoing monitoring, education, and support to help you achieve optimal results.
              </p>
              
              <p className="leading-relaxed">
                We value coordinated care and work closely with your therapist or other healthcare providers across Delaware County to ensure your treatment plan is comprehensive and effective. Our medication management services are available to residents throughout Havertown, Drexel Hill, Broomall, and surrounding communities, providing convenient access to psychiatric care.
              </p>

              <p className="leading-relaxed">
                Whether you're seeking medication for depression, anxiety, ADHD, or another mental health condition, our medication management specialists in Havertown provide expert care with a focus on your overall wellbeing and quality of life.
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
              Our Medication Management in Havertown Helps With:
            </h3>
            
            <ul className="space-y-3.5">
              {["Depression and mood disorders", "Anxiety disorders", "Bipolar disorder", "ADHD in children and adults", "PTSD and trauma-related disorders", "Obsessive-compulsive disorder (OCD)", "Sleep disorders", "Complex or treatment-resistant conditions"].map((item, index) => <motion.li key={index} initial={{
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
                Related Resources
              </h4>
              
              <ul className="space-y-3">
                {[{
                name: "Understanding Psychiatric Medications",
                url: "/blog/understanding-psychiatric-medications"
              }, {
                name: "Therapy and Medication Combined",
                url: "/blog/therapy-and-medication"
              }, {
                name: "ADHD Medication Guide",
                url: "/adhd-treatment-havertown-pa"
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

      {/* New testimonial section specifically for medication management */}
      <ServiceContentSection title="What Our Medication Management Clients in Havertown Say" hasBgPattern={false}>
        
      </ServiceContentSection>

      {/* Additional local service area information */}
      <ServiceContentSection title="Medication Management Services Throughout Delaware County" hasBgPattern={true}>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-6">
            Our psychiatric medication management services are available to residents throughout Delaware County, 
            with our convenient Havertown location serving clients from Broomall, Drexel Hill, Ardmore, 
            Springfield, Newtown Square, and surrounding communities. We offer flexible scheduling options
            and telehealth appointments when appropriate for medication follow-ups.
          </p>
          
          <div className="flex justify-center">
            <Link to="/appointment" className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium">
              Schedule your medication consultation in Havertown today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </ServiceContentSection>
    </ServicePageLayout>;
};
export default MedicationManagement;