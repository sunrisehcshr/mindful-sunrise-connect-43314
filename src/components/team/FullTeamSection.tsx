"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Separator } from '../ui/separator';
import SectionTag from '../ui/section-tag';
import TeamMemberCard from './TeamMemberCard';
import { Users } from 'lucide-react';
import CurveTransition from '../ui/CurveTransition';

const fullTeamMembers = [
  {
    name: "Michael Thevar",
    role: "President",
    specialties: ["Anxiety", "Depression", "ADHD"],
    bio: "Mr. Michael Thevar built his successful career in the mental health industry over twenty years ago as a drug and alcohol counselor. He has a long-standing history with the healthcare sector due to his previous experience of serving as a clinical service manager, along with establishing a successful healthcare staffing agency and co-founding Omni Staffing. Most recently, he established Omni Cares, a 501c3 charitable organization. Mr. Michael Thevar aspires to change the landscape and language used to describe mental health universally.",
    image: "/images/michael.jpg",
    slug: "michael-thevar"
  },
  {
    name: "Holli O'Donnell",
    role: "Clinical Director",
    specialties: ["Medication Management", "Bipolar", "OCD"],
    bio: "Holli O'Donnell is the Clinical Director for Sunrise Human Care. She is a Licensed Clinical Social Worker with over 25 years of experience in the behavioral health field, receiving her MSW from New York University. Her most recent position, as a Clinical Director, Holli provided administrative duties and clinical supervision to clinicians and interns working in various levels of care. Throughout her career she has worked with children and adolescents in multiple settings including BHRS, outpatient, residential treatment and acute hospital programs. Holli is trained in TFCBT and focuses on providing and supervising around trauma informed care.",
    image: "/images/holly.jpg",
    slug: "holli-odonnell"
  },
  {
    name: "Dr. Farah Khan",
    role: "Psychiatrist",
    specialties: ["Child Therapy", "Adolescent Care", "Behavioral Issues"],
    bio: "Specialized in children with ASD ( Autism spectrum disorder) ADHD and other behavioral problems. Learning how to treat children with behavioral problems has equipped me with a unique perspective and an invaluable tool with which I can provide the best care for my patients. A good psychiatrist not only needs to be competent and knowledgeable in the discipline, but also empathetic and sensitive towards patients. My training from New York Medical College and Robert Wood Johnson University hospital has enhanced my the ability and given me the experience to deal with diverse patient population ranging from children to adolescents and adults.",
    image: "/images/dr-farah-khan.jpeg",
    slug: "dr-farah-khan"
  },
  {
    name: "Chevonne Worthy",
    role: "Outpatient Therapist",
    specialties: ["Individual Therapy", "Couples Counseling", "Family Therapy"],
    bio: "Chevonne is a compassionate and curious therapist providing Outpatient Therapeutic services at Sunrise Human Care Services. She provides client centered counseling to individuals, couples and families. Chevonne specializes in providing space and calm for individuals to learn, grow, grieve, laugh, cry and process the big and small moments in life. Chevonne holds a Master's Degree in Clinical and Counseling Psychology with a Concentration in Marriage and Family Therapy. She uses her 10+ years of experience and creativity to provide a wide range of modalities catered to the needs of the persons or families needing support.",
    image: "/images/chevonne-worthy.jpg",
    slug: "chevonne-worthy"
  },
  {
    name: "Anthony Obi",
    role: "Outpatient Therapist",
    specialties: ["Schizophrenia", "Mood Disorders", "Geriatric Care"],
    bio: "Anthony Obi works as an Outpatient Therapist at Sunrise Human Care Services, providing compassionate, client-centered counseling to individuals, families, and groups. His responsibilities include assessing mental health needs, creating personalized treatment plans, and guiding clients through therapies that promote resilience and emotional well-being. By partnering with healthcare providers and community resources, Anthony ensures each client receives comprehensive support. Through his dedication, Anthony helps clients achieve personal growth and stability while contributing to Sunrise Human Care Services' mission of strengthening lives and uplifting the community.",
    image: "/images/Toni Obi's Profile Picture.jpeg",
    slug: "anthony-obi"
  },
  {
    name: "Michael Flynn",
    role: "Outpatient Therapist",
    specialties: ["Social Work", "Evidence-Based Care", "Emotional Well-being"],
    bio: "Michael Flynn works as an Outpatient Therapist at Sunrise Human Care Services. He is a licensed social worker with a passion for supporting individuals throughout life's challenges with empathy, insight, and evidence-based care. His therapeutic approach is grounded in creating a safe, nonjudgmental space where clients feel heard and empowered to make meaningful change. He draws from a range of modalities tailored to each person's unique needs, with a focus on fostering resilience, self-awareness, and emotional well-being.",
    image: "/images/michael-flynn.jpg",
    slug: "michael-flynn"
  },
  {
    name: "Shanada Anderson",
    role: "Outpatient Therapist",
    specialties: ["Couples Counseling", "Relationship Issues", "Communication"],
    bio: "Shanada Anderson, MS, is a therapist dedicated to creating safe, affirming spaces where clients feel seen and supported. She provides culturally competent, client-centered care that empowers individuals to build resilience and navigate life's challenges with confidence. Shanada is committed to not only supporting her clients, but also transforming the culture of care with authenticity, strength, and heart. Shanada holds a Master's in Science in Professional Counseling ",
    image: "/images/Shanada Anderson.jpeg",
    slug: "shanada-anderson"
  }
];

 
const FullTeamSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="team" ref={sectionRef} className="py-16 md:py-24 bg-stone-50 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] -mr-[200px] -mt-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] -ml-[200px] -mb-[200px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
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
            className="mb-6"
          >
            <SectionTag>
              Our Team
            </SectionTag>
          </motion.div>

          <motion.h2
            className="font-barlow font-normal text-4xl md:text-5xl text-stone-900 tracking-tighter leading-none mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Meet the professionals <span className="font-instrument-serif italic text-orange-500 font-normal">behind your care</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-stone-500 font-barlow text-lg md:text-xl leading-relaxed"
          >
            Our experienced team brings together diverse specialties and backgrounds, united by a shared commitment to providing compassionate, evidence-based mental health care.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fullTeamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              {...member}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Curved Transition into the next section (AboutCTA which is stone-50) */}
      <CurveTransition fillColor="#fafaf9" inverted className="z-20" targetRef={sectionRef as any} />
    </section>
  );
};

export default FullTeamSection;
