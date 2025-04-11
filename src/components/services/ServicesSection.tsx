
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { User, Users, Baby, HeartHandshake, Stethoscope, Pill } from 'lucide-react';
import { Separator } from '../ui/separator';
import SectionTag from '../ui/section-tag';
const ServicesSection: React.FC = () => {
  const services = [{
    icon: <User className="h-6 w-6" />,
    title: "Individual Therapy in Havertown, PA",
    description: "One-on-one therapy sessions tailored to your unique needs and challenges. Our specialized mental health care in Havertown helps clients overcome anxiety, depression, and stress with evidence-based techniques and personalized treatment plans.",
    color: "bg-sunrise-50 text-sunrise-700",
    bgColor: "bg-gradient-to-r from-orange-400 to-amber-400",
    url: "/individual-therapy-havertown-pa"
  }, {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: "Couples Counseling in Havertown",
    description: "Specialized therapy to help couples improve communication, resolve conflicts, and strengthen relationships. Our experienced therapists provide supportive guidance for couples facing challenges, helping rebuild trust and foster deeper connections.",
    color: "bg-sunrise-50 text-sunrise-700",
    bgColor: "bg-gradient-to-r from-orange-400 to-amber-400",
    url: "/couples-counseling-havertown-pa"
  }, {
    icon: <Users className="h-6 w-6" />,
    title: "Family Therapy in Havertown, PA",
    description: "Therapy sessions focused on improving family relationships and communication. We help families from Havertown, Broomall, and surrounding areas navigate conflicts, adjust to changes, and develop healthier patterns of interaction for lasting family harmony.",
    color: "bg-sunrise-50 text-sunrise-700",
    bgColor: "bg-gradient-to-r from-orange-400 to-amber-400",
    url: "/family-therapy-havertown-pa"
  }, {
    icon: <Baby className="h-6 w-6" />,
    title: "Child & Adolescent Therapy",
    description: "Specialized therapy for children and teens facing behavioral or emotional challenges. Our compassionate approach to mental health care in Havertown helps young people build resilience, develop coping skills, and thrive through life's challenges.",
    color: "bg-sunrise-50 text-sunrise-700",
    bgColor: "bg-gradient-to-r from-orange-400 to-amber-400",
    url: "/child-therapy-havertown-pa"
  }, {
    icon: <Stethoscope className="h-6 w-6" />,
    title: "Psychiatric Evaluations in Havertown",
    description: "Comprehensive mental health assessments and diagnostic services. Our thorough evaluations provide clarity and direction for treatment, identifying specific conditions and creating the foundation for effective, personalized mental health care.",
    color: "bg-sunrise-50 text-sunrise-700",
    bgColor: "bg-gradient-to-r from-orange-400 to-amber-400",
    url: "/psychiatric-evaluations-havertown-pa"
  }, {
    icon: <Pill className="h-6 w-6" />,
    title: "Medication Management",
    description: "Professional psychiatric medication reviews and management for mental health conditions. Our psychiatrists in Havertown provide expert guidance on medication options, carefully monitor effectiveness, and make adjustments to optimize your mental wellness journey.",
    color: "bg-sunrise-50 text-sunrise-700",
    bgColor: "bg-gradient-to-r from-orange-400 to-amber-400",
    url: "/medication-management-havertown-pa"
  }];
  return <section id="services" className="bg-gradient-to-b from-white to-secondary/50 py-[100px]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="max-w-3xl mx-auto text-center mb-12" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.4
        }}>
            <SectionTag>Our Services</SectionTag>
          </motion.div>
          
          <motion.h2 initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="text-3xl font-bold mb-4 font-opensans md:text-5xl">
            Comprehensive Mental Health Services in Havertown
          </motion.h2>
          
          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="text-base font-medium text-zinc-700">
            Our team of experienced mental health professionals provides a range of services 
            designed to support your well-being and personal growth in Havertown, PA and surrounding areas.
          </motion.p>
          
          <div className="mx-auto mt-6 mb-10 w-24">
            <Separator className="bg-gradient-to-r from-transparent via-orange-300/50 to-transparent h-0.5" />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => <ServiceCard key={index} service={service} index={index} />)}
        </div>

        <div className="flex justify-center mt-12">
          <AppointmentDialog>
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300">
              <Calendar className="mr-2 h-4 w-4" />
              Book Mental Health Appointment in Havertown
            </Button>
          </AppointmentDialog>
        </div>
      </div>
    </section>;
};
export default ServicesSection;
