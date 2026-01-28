import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '../ui/separator';
import SectionTag from '../ui/section-tag';
import TeamMemberCard from './TeamMemberCard';
import { Users } from 'lucide-react';

const fullTeamMembers = [
  {
    name: "Michael Thevar",
    role: "President",
    specialties: ["Anxiety", "Depression", "ADHD"],
    bio: "Mr Michael Thevar built his successful career in the mental health industry over twenty years ago as a drug and alcohol counsellor. He has a long-standing history with the healthcare sector due to his previous experience of serving as a clinical service manager, along with establishing a successful healthcare staffing agency and co-founding Omni Staffing. Most recently, he established Omni Cares, a 501c3 charitable organisation. Mr Michael Thevar, aspires to change the landscape and language used to describe mental health universally.",
    image: "/images/michael.jpg"
  },
  {
    name: "Holli O'Donnell",
    role: "Clinical Director",
    specialties: ["Medication Management", "Bipolar", "OCD"],
    bio: "Holli O'Donnell is the Clinical Director for Sunrise Human Care. She is a Licensed Clinical Social Worker with over 25 years of experience in the behavioral health field, receiving her MSW from New York University. Her most recent position, as a Clinical Director, Holli provided administrative duties and clinical supervision to clinicians and interns working in various levels of care. Throughout her career she has worked with children and adolescents in multiple settings including BHRS, outpatient, residential treatment and acute hospital programs. Holli is trained in TFCBT and focuses on providing and supervising around trauma informed care.",
    image: "/images/holly.jpg"
  },
  {
    name: "Dr. Farah Khan",
    role: "Psychiatrist",
    specialties: ["Child Therapy", "Adolescent Care", "Behavioral Issues"],
    bio: "Specialized in children with ASD ( Autism spectrum disorder) ADHD and other behavioral problems. Learning how to treat children with behavioral problems has equipped me with a unique perspective and an invaluable tool with which I can provide the best care for my patients. A good psychiatrist not only needs to be competent and knowledgeable in the discipline, but also empathetic and sensitive towards patients. My training from New York Medical College and Robert Wood Johnson University hospital has enhanced my the ability and given me the experience to deal with diverse patient population ranging from children to adolescents and adults.",
    image: "/images/dr-farah-khan.jpeg"
  },
  {
    name: "Chevonne Worthy",
    role: "Outpatient Therapist",
    specialties: ["Individual Therapy", "Couples Counseling", "Family Therapy"],
    bio: "Chevonne is a compassionate and curious therapist providing Outpatient Therapeutic services at Sunrise Human Care Services. She provides client centered counseling to individuals, couples and families. Chevonne specializes in providing space and calm for individuals to learn, grow, grieve, laugh, cry and process the big and small moments in life. Chevonne holds a Master's Degree in Clinical and Counseling Psychology with a Concentration in Marriage and Family Therapy. She uses her 10+ years of experience and creativity to provide a wide range of modalities catered to the needs of the persons or families needing support.",
    image: "/images/chevonne-worthy.jpg"
  },
  {
    name: "Anthony Obi",
    role: "Outpatient Therapist",
    specialties: ["Schizophrenia", "Mood Disorders", "Geriatric Care"],
    bio: "Anthony Obi works as an Outpatient Therapist at Sunrise Human Care Services, providing compassionate, client-centered counseling to individuals, families, and groups. His responsibilities include assessing mental health needs, creating personalized treatment plans, and guiding clients through therapies that promote resilience and emotional well-being. By partnering with healthcare providers and community resources, Anthony ensures each client receives comprehensive support. Through his dedication, Anthony helps clients achieve personal growth and stability while contributing to Sunrise Human Care Services' mission of strengthening lives and uplifting the community.",
    image: "/images/Toni Obi's Profile Picture.jpeg"
  },
  {
    name: "Michael Flynn",
    role: "Outpatient Therapist",
    specialties: ["Social Work", "Evidence-Based Care", "Emotional Well-being"],
    bio: "Michael Flynn works as an Outpatient Therapist at Sunrise Human Care Services. He is a licensed social worker with a passion for supporting individuals throughout life's challenges with empathy, insight, and evidence-based care. His therapeutic approach is grounded in creating a safe, nonjudgmental space where clients feel heard and empowered to make meaningful change. He draws from a range of modalities tailored to each person's unique needs, with a focus on fostering resilience, self-awareness, and emotional well-being.",
    image: "/images/michael-flynn.jpg"
  },
  {
    name: "Shanada Anderson",
    role: "Outpatient Therapist",
    specialties: ["Couples Counseling", "Relationship Issues", "Communication"],
    bio: "Shanada Anderson, MS, is a therapist dedicated to creating safe, affirming spaces where clients feel seen and supported. She provides culturally competent, client-centered care that empowers individuals to build resilience and navigate life's challenges with confidence. Shanada is committed to not only supporting her clients, but also transforming the culture of care with authenticity, strength, and heart. Shanada holds a Master's in Science in Professional Counseling ",
    image: "/images/Shanada Anderson.jpeg"
  },
  {
    name: "Ekalavya Amrute",
    role: "Office Manager",
    specialties: ["Substance Abuse", "Grief Counseling", "Life Transitions"],
    bio: "Ekalavya Amrute serves as the Office Manager at Sunrise Human Care Services, where he ensures the smooth functioning of daily operations and supports the team in delivering quality care. His responsibilities include managing administrative processes, coordinating schedules, maintaining records, and overseeing compliance to keep organizational workflows efficient. Through his strong organizational skills and dedication, Ekalavya creates a supportive environment for staff and contributes directly to the productivity of the team and the overall mission of Sunrise Human Care Services.",
    image: "/images/ekalavya-amrute.jpeg"
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
