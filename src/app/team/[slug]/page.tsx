import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import TeamMemberClient from './TeamMemberClient';

const providers = [
  {
    slug: "michael-thevar",
    name: "Michael Thevar",
    role: "President",
    credentials: "Drug & Alcohol Counselor",
    specialties: ["Anxiety", "Depression", "ADHD", "Substance Use"],
    bio: "Mr. Michael Thevar built his successful career in the mental health industry over twenty years ago as a drug and alcohol counselor. His dedication to providing accessible care led to the founding of Sunrise Human Care Services, where he continues to lead with a focus on community wellness and clinical excellence.",
    image: "/images/michael.jpg",
  },
  {
    slug: "holli-odonnell",
    name: "Holli O'Donnell",
    role: "Clinical Director",
    credentials: "LCSW (Licensed Clinical Social Worker)",
    specialties: ["Medication Management", "Bipolar", "OCD", "Clinical Supervision"],
    bio: "Holli O'Donnell is the Clinical Director for Sunrise Human Care. She is a Licensed Clinical Social Worker with over 25 years of experience in the mental health field.",
    image: "/images/holly.jpg",
  },
  {
    slug: "dr-farah-khan",
    name: "Dr. Farah Khan",
    role: "Psychiatrist",
    credentials: "MD, Board Certified Psychiatrist",
    specialties: ["Child Therapy", "Adolescent Care", "Behavioral Issues", "ASD"],
    bio: "Specialized in children with ASD (Autism spectrum disorder) ADHD and other behavioral problems.",
    image: "/images/dr-farah-khan.jpeg",
  },
  {
    slug: "chevonne-worthy",
    name: "Chevonne Worthy",
    role: "Outpatient Therapist",
    credentials: "LPC / LCSW Candidate",
    specialties: ["Individual Therapy", "Couples Counseling", "Family Therapy"],
    bio: "Chevonne is a compassionate and curious therapist providing Outpatient Therapeutic services.",
    image: "/images/chevonne-worthy.jpg",
  },
  {
    slug: "anthony-obi",
    name: "Anthony Obi",
    role: "Outpatient Therapist",
    credentials: "Mental Health Professional",
    specialties: ["Schizophrenia", "Mood Disorders", "Geriatric Care"],
    bio: "Anthony Obi works as an Outpatient Therapist at Sunrise Human Care Services with a focus on severe mental health conditions.",
    image: "/images/Toni Obi's Profile Picture.jpeg",
  },
  {
    slug: "michael-flynn",
    name: "Michael Flynn",
    role: "Outpatient Therapist",
    credentials: "MSW, Therapist",
    specialties: ["Social Work", "Evidence-Based Care", "Emotional Well-being"],
    bio: "Michael Flynn works as an Outpatient Therapist at Sunrise Human Care Services, dedicated to emotional well-being.",
    image: "/images/michael-flynn.jpg",
  },
  {
    slug: "shanada-anderson",
    name: "Shanada Anderson",
    role: "Outpatient Therapist",
    credentials: "MS, Outpatient Therapist",
    specialties: ["Couples Counseling", "Relationship Issues", "Communication"],
    bio: "Shanada Anderson, MS, is a therapist dedicated to creating safe, affirming spaces for relationship healing.",
    image: "/images/Shanada Anderson.jpeg",
  }
];

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const provider = providers.find((p) => p.slug === params.slug);

  if (!provider) {
    return {
      title: 'Provider Not Found | Sunrise Human Care Services'
    };
  }

  return createPageMetadata({
    title: `${provider.name} | ${provider.role} in Darby, PA | Sunrise`,
    description: `${provider.name} is a ${provider.role} at Sunrise Human Care in Darby, PA. Specializing in ${provider.specialties.join(", ")}. Medicaid accepted, no waitlist.`,
    path: `/team/${provider.slug}`,
    keywords: `${provider.name}, ${provider.role} Darby PA, therapist Darby, psychiatrist Darby, mental health professional Delaware County`,
    image: provider.image
  });
}

export default function ProviderPage() {
  return <TeamMemberClient />;
}
