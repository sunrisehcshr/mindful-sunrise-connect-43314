import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '../ui/separator';
import SectionTag from '../ui/section-tag';
import TeamMemberCard from './TeamMemberCard';
import { Users } from 'lucide-react';

const teamMembers = [
  {
    name: "Dr. Michael Thevar",
    role: "Founder & Clinical Director",
    specialties: ["Anxiety", "Depression", "ADHD"],
    image: "",
    email: "michael@sunrisehumancare.com",
    phone: "(814) 620-2162"
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Licensed Psychologist",
    specialties: ["Trauma", "PTSD", "Family Therapy"],
    image: "",
    email: "sarah@sunrisehumancare.com"
  },
  {
    name: "Dr. James Chen",
    role: "Psychiatrist",
    specialties: ["Medication Management", "Bipolar", "OCD"],
    image: "",
    email: "james@sunrisehumancare.com"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-inherit">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <SectionTag icon={<Users className="h-3 w-3" />}>
              Our Team
            </SectionTag>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Meet Our Expert Mental Health Professionals
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground"
          >
            Our compassionate team of licensed therapists and psychiatrists is dedicated to providing personalized, evidence-based care in Havertown, PA.
          </motion.p>

          <div className="mx-auto mt-6 mb-10 w-24">
            <Separator className="bg-gradient-to-r from-transparent via-orange-300/50 to-transparent h-0.5" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              {...member}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
