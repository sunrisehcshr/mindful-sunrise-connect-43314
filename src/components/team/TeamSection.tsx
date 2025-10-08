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
    name: "Dr. Michael Thevar",
    role: "Founder & Clinical Director",
    specialties: ["Anxiety", "Depression", "ADHD"],
    bio: "Dr. Thevar founded Sunrise Human Care Services with a vision to provide accessible, compassionate mental health care to the Havertown community. With over 30 years of experience in clinical psychology, he specializes in evidence-based treatments for anxiety, depression, and ADHD. His patient-centered approach focuses on empowering individuals to achieve lasting mental wellness.",
    image: ""
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Licensed Psychologist",
    specialties: ["Trauma", "PTSD", "Family Therapy"],
    bio: "Dr. Johnson brings extensive expertise in trauma-informed care and family systems therapy. She has dedicated her career to helping individuals and families heal from traumatic experiences and build stronger, healthier relationships. Her warm, empathetic approach creates a safe space for clients to process difficult emotions and develop effective coping strategies.",
    image: ""
  },
  {
    name: "Dr. James Chen",
    role: "Psychiatrist",
    specialties: ["Medication Management", "Bipolar", "OCD"],
    bio: "Dr. Chen is a board-certified psychiatrist with specialized training in psychopharmacology and complex mood disorders. He takes a holistic approach to medication management, carefully considering each patient's unique needs and circumstances. Dr. Chen works collaboratively with clients to find the most effective treatment plans that improve quality of life.",
    image: ""
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
