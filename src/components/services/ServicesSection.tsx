
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { User, Users, Baby, HeartHandshake, Stethoscope, Pill, Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import AppointmentDialog from '../Appointment/AppointmentDialog';

const ServicesSection: React.FC = () => {
  const services = [{
    icon: <User className="h-6 w-6 text-orange-300" />,
    title: "Individual Therapy in Darby, PA",
    description: "One-on-one therapy sessions tailored to your unique needs and challenges. Our specialized mental health care in Darby helps clients overcome anxiety, depression, and stress with evidence-based techniques and personalized treatment plans.",
    url: "/individual-therapy-darby-pa"
  }, {
    icon: <HeartHandshake className="h-6 w-6 text-orange-300" />,
    title: "Couples Counseling in Darby",
    description: "Specialized therapy to help couples improve communication, resolve conflicts, and strengthen relationships. Our experienced therapists provide supportive guidance for couples facing challenges, helping rebuild trust and foster deeper connections.",
    url: "/couples-counseling-darby-pa"
  }, {
    icon: <Users className="h-6 w-6 text-orange-300" />,
    title: "Family Therapy in Darby, PA",
    description: "Therapy sessions focused on improving family relationships and communication. We help families from Darby, Yeadon, and surrounding areas navigate conflicts, adjust to changes, and develop healthier patterns of interaction for lasting family harmony.",
    url: "/family-therapy-darby-pa"
  }, {
    icon: <Baby className="h-6 w-6 text-orange-300" />,
    title: "Child & Adolescent Therapy",
    description: "Specialized therapy for children and teens facing behavioral or emotional challenges. Our compassionate approach to mental health care in Darby helps young people build resilience, develop coping skills, and thrive through life's challenges.",
    url: "/child-therapy-darby-pa"
  }, {
    icon: <Stethoscope className="h-6 w-6 text-orange-300" />,
    title: "Psychiatric Evaluations in Darby",
    description: "Comprehensive mental health assessments and diagnostic services. Our thorough evaluations provide clarity and direction for treatment, identifying specific conditions and creating the foundation for effective, personalized mental health care.",
    url: "/psychiatric-evaluations-darby-pa"
  }, {
    icon: <Pill className="h-6 w-6 text-orange-300" />,
    title: "Medication Management",
    description: "Professional psychiatric medication reviews and management for mental health conditions. Our psychiatrists in Darby provide expert guidance on medication options, carefully monitor effectiveness, and make adjustments to optimize your mental wellness journey.",
    url: "/medication-management-darby-pa"
  }];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#faf8f4]">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {services.map((service, index) => <ServiceCard key={index} service={service} index={index} />)}
        </div>

      </div>
    </section>
  );
};
export default ServicesSection;
