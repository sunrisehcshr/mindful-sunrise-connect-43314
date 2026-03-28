import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TeamMemberCard from './TeamMemberCard';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const teamMembers = [
  {
    name: "Michael Thevar",
    role: "President",
    specialties: ["Anxiety", "Depression", "ADHD"],
    bio: "Mr. Michael Thevar built his successful career in the mental health industry over twenty years ago as a drug and alcohol counselor. He has a long-standing history with the healthcare sector due to his previous experience of serving as a clinical service manager, along with establishing a successful healthcare staffing agency and co-founding Omni Staffing. Most recently, he established Omni Cares, a 501c3 charitable organization. Mr. Michael Thevar aspires to change the landscape and language used to describe mental health universally.",
    image: "/images/michael.jpg"
  },
  {
    name: "Holli O'Donnell",
    role: "Clinical Director",
    specialties: ["Medication Management", "Bipolar", "OCD"],
    bio: "Holli O'Donnell is the Clinical Director for Sunrise Human Care. She is a Licensed Clinical Social Worker with over 25 years of experience in the behavioral health field, receiving her MSW from New York University. Her most recent position, as a Clinical Director, Holli provided administrative duties and clinical supervision to clinicians and interns working in various levels of care. Throughout her career she has worked with children and adolescents in multiple settings including BHRS, outpatient, residential treatment and acute hospital programs. Holli is trained in TFCBT and focuses on providing and supervising around trauma informed care.",
    image: "/images/holly.jpg"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 md:py-28 bg-[#faf8f4]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70 mb-4">Our Team</span>

          <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-5xl text-stone-800 tracking-tight leading-tight mb-4">
            Meet our expert {' '}
            <span className="font-instrument-serif italic text-amber-400 font-normal">mental health professionals</span>
          </h2>

          <p className="text-stone-600 font-barlow">
            Our compassionate team of licensed therapists and psychiatrists is dedicated to providing personalized, evidence-based care in Darby, PA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/about">
            <Button
              size="lg"
              className="bg-[#222] hover:bg-zinc-800 text-white font-barlow font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              View All Team Members
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
