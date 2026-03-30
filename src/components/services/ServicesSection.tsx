
import React from 'react';
import { motion } from 'framer-motion';
import { ProjectShowcase, ShowcaseItem } from '../ui/project-showcase';
import individualTherapy from '@/assets/services/individual-therapy.jpg';
import couplesCounseling from '@/assets/services/couples-counseling.jpg';
import familyTherapy from '@/assets/services/family-therapy.jpg';
import childTherapy from '@/assets/services/child-therapy.jpg';
import psychiatricEval from '@/assets/services/psychiatric-eval.jpg';
import medicationMgmt from '@/assets/services/medication-management.jpg';

const ServicesSection: React.FC = () => {
  const services: ShowcaseItem[] = [
    {
      title: "Individual Therapy",
      description: "One-on-one therapy sessions tailored to your unique needs — anxiety, depression, stress, and more.",
      tag: "Therapy",
      link: "/individual-therapy-darby-pa#home",
      image: individualTherapy,
    },
    {
      title: "Couples Counseling",
      description: "Rebuild trust, improve communication, and strengthen your relationship with expert guidance.",
      tag: "Relationships",
      link: "/couples-counseling-darby-pa#home",
      image: couplesCounseling,
    },
    {
      title: "Family Therapy",
      description: "Navigate family conflicts and build healthier patterns of interaction for lasting harmony.",
      tag: "Family",
      link: "/family-therapy-darby-pa#home",
      image: familyTherapy,
    },
    {
      title: "Child & Adolescent Therapy",
      description: "Help young people build resilience, develop coping skills, and thrive through life's challenges.",
      tag: "Youth",
      link: "/child-therapy-darby-pa#home",
      image: childTherapy,
    },
    {
      title: "Psychiatric Evaluations",
      description: "Comprehensive mental health assessments providing clarity and direction for effective treatment.",
      tag: "Diagnostics",
      link: "/psychiatric-evaluations-darby-pa#home",
      image: psychiatricEval,
    },
    {
      title: "Medication Management",
      description: "Expert psychiatric medication reviews, monitoring, and adjustments to optimize your wellness.",
      tag: "Psychiatry",
      link: "/medication-management-darby-pa#home",
      image: medicationMgmt,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-14" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70 mb-4">Our Services</span>
          
          <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-5xl text-stone-800 tracking-tight leading-tight mb-4">
            Mental health services {' '}
            <span className="font-instrument-serif italic text-amber-400 font-normal">available in Darby</span>
          </h2>
          
          <p className="text-stone-600 font-barlow">
            Our team of experienced mental health professionals provides a range of services 
            designed to support your well-being and personal growth in Darby, PA and surrounding areas.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ProjectShowcase items={services} />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
