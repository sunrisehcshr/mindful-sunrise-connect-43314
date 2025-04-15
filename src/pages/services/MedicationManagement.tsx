
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Pills, Clipboard, Brain, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTag from '@/components/ui/section-tag';

const MedicationManagement = () => {
  const benefits = [
    "Board-certified psychiatric providers with extensive experience",
    "Comprehensive medication evaluations and ongoing monitoring",
    "Evidence-based medication management approaches",
    "Coordination with therapists and other healthcare providers",
    "Flexible scheduling including telehealth options when appropriate",
    "Most insurance plans accepted including Medicaid",
    "Evening and weekend appointments available",
    "Convenient Havertown location serving Delaware County"
  ];

  const approaches = [
    {
      title: "Comprehensive Psychiatric Evaluation",
      description: "Thorough assessment of symptoms, medical history, and treatment goals to inform medication decisions."
    },
    {
      title: "Personalized Medication Plans",
      description: "Customized medication selection and dosing based on individual needs, symptoms, and response."
    },
    {
      title: "Regular Monitoring & Adjustment",
      description: "Ongoing assessment of medication effectiveness, side effects, and necessary adjustments."
    },
    {
      title: "Integrated Care Coordination",
      description: "Close collaboration with therapists and healthcare providers for comprehensive treatment."
    },
    {
      title: "Patient Education",
      description: "Detailed information about medications, potential side effects, and management strategies."
    },
    {
      title: "Crisis Management Support",
      description: "Access to emergency support and crisis intervention when needed."
    }
  ];

  const faqs = [
    {
      question: "How long will I need to take psychiatric medication?",
      answer: "The duration of medication treatment varies depending on your condition, symptoms, and response. Some individuals may need short-term medication during specific episodes, while others benefit from longer-term treatment for chronic conditions. We regularly review the need for continued medication and adjust treatment plans accordingly, always prioritizing your well-being and quality of life."
    },
    {
      question: "What if I experience side effects from my medication?",
      answer: "Side effects are taken very seriously in our practice. While some side effects may be temporary as your body adjusts, we carefully monitor any reactions you experience. We can often adjust dosages or switch to alternative medications if needed. It's important to communicate any concerns about side effects promptly, and we provide detailed guidance on managing potential side effects."
    },
    {
      question: "How often will I need to come in for medication management appointments?",
      answer: "Initially, appointments are typically more frequent (every 2-4 weeks) as we establish the right medication and dosage. Once your symptoms are stable, visits may be scheduled less frequently (every 1-3 months). The schedule is always personalized based on your specific needs, response to medication, and overall stability."
    },
    {
      question: "Can I combine medication with therapy?",
      answer: "Yes, and we often recommend this combined approach. Research shows that for many mental health conditions, the combination of medication and therapy provides better outcomes than either treatment alone. We collaborate closely with therapists to ensure coordinated care and optimal results."
    },
    {
      question: "Will my insurance cover psychiatric medication management?",
      answer: "We accept most major insurance plans, including Medicaid and commercial providers. Our staff will verify your coverage for medication management services and discuss any potential costs before beginning treatment. We strive to make mental health care accessible and affordable for our community."
    }
  ];

  const relatedServices = [
    {
      title: "Psychiatric Evaluations in Havertown",
      url: "/psychiatric-evaluations-havertown-pa"
    },
    {
      title: "Depression Treatment in Havertown",
      url: "/depression-therapy-havertown-pa"
    },
    {
      title: "Anxiety Treatment in Havertown",
      url: "/anxiety-therapy-havertown-pa"
    }
  ];

  return (
    <ServicePageLayout
      title="Medication Management in Havertown, PA"
      description="Expert psychiatric medication management services with personalized care plans, regular monitoring, and ongoing support for optimal mental health outcomes."
      pageTitle="Expert Medication Management in Havertown, PA | Psychiatric Medication Services | Sunrise Human Care"
      metaDescription="Professional psychiatric medication management in Havertown, PA serving Delaware County. Comprehensive medication services for depression, anxiety, ADHD, and other mental health conditions with expert psychiatric providers. Schedule today."
      serviceType="Medication Management"
      canonicalUrl="/medication-management-havertown-pa"
      benefits={benefits}
      approaches={approaches}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <ServiceContentSection 
        title="Our Medication Management Approach" 
        hasBgPattern={true}
      >
        <div className="mb-6">
          <SectionTag icon={<Pills className="h-3 w-3" />}>Expert Care</SectionTag>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-5 text-muted-foreground">
              <p className="leading-relaxed">
                At Sunrise Human Care Services in Havertown, our medication management program is led by experienced psychiatric providers who understand the complex interplay between mental health conditions and medication treatment. We take a comprehensive approach to psychiatric medication management, ensuring that each medication plan is tailored to your specific needs and circumstances.
              </p>
              
              <p className="leading-relaxed">
                Our psychiatric medication management services begin with a thorough evaluation to understand your symptoms, medical history, and treatment goals. We believe in collaborative decision-making and ensure you're fully informed about medication options, potential benefits, and any possible side effects.
              </p>
              
              <p className="leading-relaxed">
                Throughout your treatment, we provide careful monitoring and regular follow-up appointments to assess medication effectiveness and make any necessary adjustments. Our team coordinates closely with your therapist and other healthcare providers to ensure comprehensive, integrated care that supports your overall mental health goals.
              </p>

              <p className="leading-relaxed">
                We serve clients throughout Havertown, Drexel Hill, Broomall, and surrounding Delaware County communities, providing accessible, evidence-based medication management services for various mental health conditions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-7 rounded-xl shadow-md border border-orange-100/50 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-5 text-orange-600 font-playfair">
              Our Medication Management Services Include:
            </h3>

            <ul className="space-y-3.5">
              {[
                "Comprehensive psychiatric evaluations",
                "Personalized medication plans",
                "Regular monitoring and adjustments",
                "Side effect management",
                "Medication education and counseling",
                "Crisis intervention when needed",
                "Coordination with other providers",
                "Ongoing medication reviews",
                "Telehealth options when appropriate"
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
                Related Resources
              </h4>
              
              <ul className="space-y-3">
                {[
                  {
                    name: "Understanding Psychiatric Medications",
                    url: "/blog/understanding-psychiatric-medications"
                  },
                  {
                    name: "Medication and Therapy Combined",
                    url: "/blog/medication-and-therapy"
                  },
                  {
                    name: "Mental Health Treatment Options",
                    url: "/psychiatric-evaluations-havertown-pa"
                  }
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

      <ServiceContentSection 
        title="Conditions We Treat with Medication Management" 
        hasBgPattern={false}
      >
        <div className="mb-6">
          <SectionTag icon={<Brain className="h-3 w-3" />}>Specialized Care</SectionTag>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-muted-foreground"
          >
            <p className="leading-relaxed">
              Our Havertown medication management services address a wide range of mental health conditions. We provide expert medication treatment for:
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Major Depressive Disorder",
                "Anxiety Disorders",
                "Bipolar Disorder",
                "ADHD in Adults and Children",
                "Post-Traumatic Stress Disorder",
                "Obsessive-Compulsive Disorder",
                "Schizophrenia",
                "Sleep Disorders"
              ].map((condition, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span>{condition}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-7 rounded-xl shadow-md border border-orange-100/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-orange-600 font-playfair mb-4">
                Our Treatment Philosophy
              </h3>

              <ul className="space-y-4">
                {[
                  {
                    title: "Evidence-Based Approach",
                    description: "Using proven medication protocols and guidelines"
                  },
                  {
                    title: "Individualized Treatment",
                    description: "Tailoring medication plans to your specific needs"
                  },
                  {
                    title: "Collaborative Care",
                    description: "Working with your entire healthcare team"
                  },
                  {
                    title: "Regular Monitoring",
                    description: "Ensuring optimal medication effectiveness"
                  },
                  {
                    title: "Patient Education",
                    description: "Empowering you with knowledge about your treatment"
                  }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="border-b border-orange-100 pb-4 last:border-b-0 last:pb-0"
                  >
                    <h4 className="font-semibold text-amber-900">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </ServiceContentSection>
    </ServicePageLayout>
  );
};

export default MedicationManagement;
