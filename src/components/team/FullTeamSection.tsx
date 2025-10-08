import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '../ui/separator';
import SectionTag from '../ui/section-tag';
import TeamMemberCard from './TeamMemberCard';
import { Users } from 'lucide-react';

const fullTeamMembers = [
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
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Licensed Clinical Psychologist",
    specialties: ["Child Therapy", "Adolescent Care", "Behavioral Issues"],
    bio: "Dr. Rodriguez specializes in child and adolescent psychology, helping young people navigate developmental challenges and behavioral concerns. With a playful yet professional approach, she creates a comfortable environment where children and teens feel heard and understood. Her work with families focuses on building communication skills and fostering positive relationships.",
    image: ""
  },
  {
    name: "Dr. David Kumar",
    role: "Psychiatrist",
    specialties: ["Schizophrenia", "Mood Disorders", "Geriatric Care"],
    bio: "Dr. Kumar brings specialized expertise in treating complex psychiatric conditions and geriatric mental health. His compassionate approach to care emphasizes dignity, respect, and quality of life for all patients. With years of experience in both inpatient and outpatient settings, he provides comprehensive psychiatric evaluations and medication management.",
    image: ""
  },
  {
    name: "Dr. Lisa Martinez",
    role: "Marriage & Family Therapist",
    specialties: ["Couples Counseling", "Relationship Issues", "Communication"],
    bio: "Dr. Martinez is a licensed marriage and family therapist who helps couples and families strengthen their relationships and improve communication. She uses evidence-based approaches including Emotionally Focused Therapy and the Gottman Method to help partners reconnect and build lasting intimacy. Her practice focuses on creating healthy, fulfilling relationships.",
    image: ""
  },
  {
    name: "Dr. Robert Thompson",
    role: "Licensed Professional Counselor",
    specialties: ["Substance Abuse", "Grief Counseling", "Life Transitions"],
    bio: "Dr. Thompson specializes in addiction recovery, grief counseling, and helping individuals navigate major life transitions. His compassionate, non-judgmental approach provides a supportive environment for clients to work through difficult challenges. He integrates cognitive-behavioral techniques with mindfulness-based practices to promote healing and personal growth.",
    image: ""
  },
  {
    name: "Dr. Amanda Foster",
    role: "Clinical Psychologist",
    specialties: ["Eating Disorders", "Body Image", "Women's Health"],
    bio: "Dr. Foster is dedicated to helping individuals overcome eating disorders and develop healthy relationships with food and their bodies. She specializes in women's mental health issues including perinatal mood disorders, body image concerns, and life transitions. Her integrative approach combines evidence-based therapies with mindfulness and self-compassion practices.",
    image: ""
  }
];

const FullTeamSection = () => {
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
            Meet Our Dedicated Mental Health Professionals
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground"
          >
            Our experienced team brings together diverse specialties and backgrounds, united by a shared commitment to providing compassionate, evidence-based mental health care in Havertown and Delaware County.
          </motion.p>

          <div className="mx-auto mt-6 mb-10 w-24">
            <Separator className="bg-gradient-to-r from-transparent via-orange-300/50 to-transparent h-0.5" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fullTeamMembers.map((member, index) => (
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

export default FullTeamSection;
