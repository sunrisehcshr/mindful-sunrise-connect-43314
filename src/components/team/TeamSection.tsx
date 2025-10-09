import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Separator } from '../ui/separator';
import SectionTag from '../ui/section-tag';
import TeamMemberCard from './TeamMemberCard';
import { Button } from '../ui/button';
import { Users, ArrowRight } from 'lucide-react';

const teamMembers = [
  {
    name: "Michael Thevar",
    role: "President",
    specialties: ["Anxiety", "Depression", "ADHD"],
    bio: "Mr Michael Thevar built his successful career in the mental health industry over twenty years ago as a drug and alcohol counsellor. He has a long-standing history with the healthcare sector due to his previous experience of serving as a clinical service manager, along with establishing a successful healthcare staffing agency and co-founding Omni Staffing. Most recently, he established Omni Cares, a 501c3 charitable organisation. Mr Michael Thevar, aspires to change the landscape and language used to describe mental health universally.",
    image: "/images/michael.jpg"
  },
  {
    name: "Pamela Martin",
    role: "CEO",
    specialties: ["Trauma", "PTSD", "Family Therapy"],
    bio: "Pam Martin is the CEO of Sunrise Human Care. She received her Masters in Business Administration from Shippensburg University and is a graduate of Bloomsburg University with a BA in political science. Her professional career has focused on public services for children. Pam has extensive knowledge of behavioral health services in the tri county area with a specialization in Behavioral Health Rehabilitative Services (BHRS) for children.",
    image: "/images/pam.jpg"
  },
  {
    name: "Holli O'Donnell",
    role: "Clinical Director",
    specialties: ["Medication Management", "Bipolar", "OCD"],
    bio: "Holli O’Donnell is the Clinical Director for Sunrise Human Care. She is a Licensed Clinical Social Worker with over 25 years of experience in the behavioral health field, receiving her MSW from New York University. Her most recent position, as a Clinical Director, Holli provided administrative duties and clinical supervision to clinicians and interns working in various levels of care. Throughout her career she has worked with children and adolescents in multiple settings including BHRS, outpatient, residential treatment and acute hospital programs. Holli is trained in TFCBT and focuses on providing and supervising around trauma informed care.",
    image: "/images/holly.jpg"
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
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
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
