"use client";

import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Phone, Mail, MapPin, Calendar, ArrowLeft, CheckCircle2, Award, Brain, Heart, Star, ArrowUpRight, ShieldCheck, Clock } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import SectionTag from "@/components/ui/section-tag";
import AppointmentSection from "@/components/Appointment/AppointmentSection";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// --- Glowing Bento Card ---
function Card({ children, className, containerClassName }: { children: React.ReactNode; className?: string, containerClassName?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative border border-stone-200/80 bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-500",
        "hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-amber-200/50 hover:bg-white",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-stone-50/50 pointer-events-none" />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(245, 158, 11, 0.12),
              transparent 80%
            )
          `,
        }}
      />
      <div className={cn("relative h-full w-full p-8", className)}>
        {children}
      </div>
    </div>
  );
}

const providers = [
  // ... (keeping existing provider data)
  {
    slug: "michael-thevar",
    name: "Michael Thevar",
    role: "President",
    credentials: "Drug & Alcohol Counselor",
    specialties: ["Anxiety", "Depression", "ADHD", "Substance Use"],
    bio: "Mr. Michael Thevar built his successful career in the mental health industry over twenty years ago as a drug and alcohol counselor. His dedication to providing accessible care led to the founding of Sunrise Human Care Services, where he continues to lead with a focus on community wellness and clinical excellence.",
    image: "/images/michael.jpg",
    longBio: "Mr. Michael Thevar built his successful career in the mental health industry over twenty years ago as a drug and alcohol counselor. With extensive experience in both clinical and administrative roles, Michael has a deep understanding of the challenges individuals face when seeking mental health and substance use support. He founded Sunrise Human Care Services with a vision to create a clinic that removes barriers to care, specifically for the Medicaid community in Darby and surrounding areas. Under his leadership, the clinic has grown to provide a wide range of evidence-based therapies while maintaining a 'no waitlist' policy to ensure immediate support for those in need."
  },
  {
    slug: "holli-odonnell",
    name: "Holli O'Donnell",
    role: "Clinical Director",
    credentials: "LCSW (Licensed Clinical Social Worker)",
    specialties: ["Medication Management", "Bipolar", "OCD", "Clinical Supervision"],
    bio: "Holli O'Donnell is the Clinical Director for Sunrise Human Care. She is a Licensed Clinical Social Worker with over 25 years of experience in the mental health field.",
    image: "/images/holly.jpg",
    longBio: "Holli O'Donnell serves as the Clinical Director for Sunrise Human Care, bringing over 25 years of clinical expertise to the team. As a Licensed Clinical Social Worker (LCSW), Holli specializes in treating complex mood disorders, including Bipolar Disorder and OCD, as well as providing medication management oversight. Her clinical approach is rooted in empathy and evidence-based practices, ensuring that every patient receives a personalized treatment plan. In her role as Clinical Director, she also provides supervision and guidance to our team of therapists, fostering a culture of continuous learning and high-quality patient care."
  },
  {
    slug: "dr-farah-khan",
    name: "Dr. Farah Khan",
    role: "Psychiatrist",
    credentials: "MD, Board Certified Psychiatrist",
    specialties: ["Child Therapy", "Adolescent Care", "Behavioral Issues", "ASD"],
    bio: "Specialized in children with ASD (Autism spectrum disorder) ADHD and other behavioral problems.",
    image: "/images/dr-farah-khan.jpeg",
    longBio: "Dr. Farah Khan is a board-certified psychiatrist specializing in child and adolescent mental health. She has extensive experience in diagnosing and treating complex neurodevelopmental and behavioral concerns, including Autism Spectrum Disorder (ASD) and ADHD. Dr. Khan's approach is family-centered, working closely with parents and caregivers to develop comprehensive treatment strategies that include both therapeutic and pharmacological interventions when necessary. Her expertise ensures that children and teens in the Darby community receive the specialized psychiatric care they need to thrive."
  },
  {
    slug: "chevonne-worthy",
    name: "Chevonne Worthy",
    role: "Outpatient Therapist",
    credentials: "LPC / LCSW Candidate",
    specialties: ["Individual Therapy", "Couples Counseling", "Family Therapy"],
    bio: "Chevonne is a compassionate and curious therapist providing Outpatient Therapeutic services.",
    image: "/images/chevonne-worthy.jpg",
    longBio: "Chevonne Worthy is a dedicated Outpatient Therapist who believes in the power of a safe, non-judgmental therapeutic space. She works with individuals, couples, and families to navigate life's challenges, from relationship issues to complex emotional struggles. Chevonne's approach is characterized by curiosity and compassion, helping her clients uncover their inner strengths and develop effective coping mechanisms. She is committed to helping the residents of Delaware County achieve emotional wellness through personalized, evidence-based counseling."
  },
  {
    slug: "anthony-obi",
    name: "Anthony Obi",
    role: "Outpatient Therapist",
    credentials: "Mental Health Professional",
    specialties: ["Schizophrenia", "Mood Disorders", "Geriatric Care"],
    bio: "Anthony Obi works as an Outpatient Therapist at Sunrise Human Care Services with a focus on severe mental health conditions.",
    image: "/images/Toni Obi's Profile Picture.jpeg",
    longBio: "Anthony Obi is an experienced Outpatient Therapist specializing in the treatment of severe mental health conditions, including Schizophrenia and various mood disorders. He also has a strong background in geriatric mental health care, addressing the unique challenges faced by older adults. Anthony's clinical work is focused on stability, recovery, and improving the quality of life for his patients. He provides a supportive and structured environment for those managing chronic mental health concerns in the Darby area."
  },
  {
    slug: "michael-flynn",
    name: "Michael Flynn",
    role: "Outpatient Therapist",
    credentials: "MSW, Therapist",
    specialties: ["Social Work", "Evidence-Based Care", "Emotional Well-being"],
    bio: "Michael Flynn works as an Outpatient Therapist at Sunrise Human Care Services, dedicated to emotional well-being.",
    image: "/images/michael-flynn.jpg",
    longBio: "Michael Flynn is an Outpatient Therapist with a Master of Social Work (MSW) degree. He is dedicated to providing evidence-based care that promotes long-term emotional well-being. Michael works with a diverse range of clients, helping them navigate stress, anxiety, and life transitions. His approach is grounded in social work principles of social justice and empowerment, ensuring that his patients feel supported and heard throughout their therapeutic journey."
  },
  {
    slug: "shanada-anderson",
    name: "Shanada Anderson",
    role: "Outpatient Therapist",
    credentials: "MS, Outpatient Therapist",
    specialties: ["Couples Counseling", "Relationship Issues", "Communication"],
    bio: "Shanada Anderson, MS, is a therapist dedicated to creating safe, affirming spaces for relationship healing.",
    image: "/images/Shanada Anderson.jpeg",
    longBio: "Shanada Anderson is a specialized Outpatient Therapist with a focus on relationship dynamics and communication. Holding a Master of Science (MS) in counseling, she is dedicated to creating safe and affirming spaces for individuals and couples. Shanada specializes in helping partners rebuild trust, resolve conflicts, and strengthen their emotional bonds. Her work is essential for families and couples in the Darby community looking to improve their interpersonal relationships and overall mental health."
  }
];

export default function ProviderPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const provider = providers.find((p) => p.slug === slug);

  if (!provider) {
    notFound();
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: provider.name, url: `/team/${provider.slug}` }
  ];

  const iconContainerStyles = "w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center border border-stone-100 transition-transform group-hover:scale-110 duration-300 shrink-0";

  return (
    <>
      <SEOHead 
        title={`${provider.name} | ${provider.role} in Darby, PA | Sunrise`} 
        description={`${provider.name} is a ${provider.role} at Sunrise Human Care in Darby, PA. Specializing in ${provider.specialties.join(", ")}. Medicaid accepted, no waitlist.`} 
        canonicalUrl={`https://sunrisehumancare.com/team/${provider.slug}`} 
        keywords={`${provider.name}, ${provider.role} Darby PA, therapist Darby, psychiatrist Darby, mental health professional Delaware County`}
      />
      <SchemaMarkup type="Person" data={[provider]} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />
      
      <div className="flex flex-col min-h-screen bg-white font-barlow">
        <Navbar />
        <main className="flex-grow">
          {/* Provider Hero */}
          <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <div className="max-w-6xl mx-auto">
                <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="flex flex-col md:flex-row gap-16 items-center md:items-start text-center md:text-left">
                  <div className="relative w-72 h-72 md:w-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl shadow-stone-200/50 shrink-0 border border-stone-100">
                    <Image 
                      src={provider.image} 
                      alt={`${provider.name} - ${provider.role} at Sunrise Human Care Services in Darby, PA`} 
                      fill 
                      className="object-cover transition-transform duration-700 hover:scale-105" 
                    />
                  </div>
                  <div className="flex-grow flex flex-col h-full py-4">
                    <div className="flex flex-col items-center md:items-start gap-4 mb-8">
                      <SectionTag>Clinical Team</SectionTag>
                      <h1 className="text-4xl md:text-7xl font-normal text-stone-900 tracking-tighter leading-[0.9] md:leading-tight">
                        {provider.name}
                      </h1>
                      <p className="text-orange-500 text-2xl md:text-3xl font-normal italic font-instrument-serif leading-none">
                        {provider.role} · {provider.credentials}
                      </p>
                    </div>

                    <p className="text-lg md:text-xl text-stone-500 font-medium leading-relaxed mb-10 max-w-2xl">
                      {provider.bio}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <Button asChild size="lg" className="bg-[#222] hover:bg-stone-800 text-white rounded-full px-10 py-7 text-lg font-bold transition-all shadow-xl shadow-stone-200">
                        <Link href="/appointment">
                          <Calendar className="mr-2 h-5 w-5" />
                          Book Evaluation
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="text-stone-600 border-stone-200 hover:bg-stone-50 rounded-full px-10 py-7 text-lg font-bold transition-all">
                        <a href="tel:+18146202162">
                          <Phone className="mr-2 h-5 w-5" />
                          (814) 620-2162
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-50 opacity-[0.03] rounded-full blur-[120px] -mr-64 -mt-64" />
          </section>

          {/* Bento Bio Section */}
          <section className="py-24 bg-stone-50/50">
            <div className="container mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Biography Card */}
                <Card containerClassName="md:col-span-8 rounded-[2.5rem]" className="flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <div className={iconContainerStyles}>
                      <Heart className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-stone-50 border border-stone-100 text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                      Professional Background
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-normal leading-tight tracking-tighter text-stone-900 mb-8">
                    Clinical Expertise & <br />
                    <span className="font-instrument-serif italic text-orange-500">Healing Philosophy.</span>
                  </h2>
                  <div className="space-y-6 text-stone-500 text-lg leading-relaxed font-medium">
                    {provider.longBio.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </Card>

                {/* Specialties & Sidebar */}
                <div className="md:col-span-4 flex flex-col gap-4">
                  <Card containerClassName="rounded-[2.5rem] flex-grow" className="flex flex-col">
                    <div className={iconContainerStyles + " mb-8"}>
                      <Brain className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-6 tracking-tight">Clinical Focus</h3>
                    <div className="flex flex-wrap gap-2">
                      {provider.specialties.map((spec, i) => (
                        <span key={i} className="px-4 py-2 rounded-full bg-stone-100 text-stone-700 text-sm font-bold border border-stone-200">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </Card>

                  <Card containerClassName="rounded-[2.5rem] bg-orange-500 border-orange-400 shadow-xl shadow-orange-900/10" className="flex flex-col text-white">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8 border border-white/30">
                      <ShieldCheck className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight">Ready to Start?</h3>
                    <p className="text-white/80 font-medium mb-8">
                      {provider.name.split(' ')[0]} is currently accepting new Medicaid patients with no waitlist.
                    </p>
                    <Link 
                      href="/appointment" 
                      className="mt-auto flex items-center justify-between group/btn bg-white text-orange-600 px-6 py-4 rounded-2xl font-bold transition-all hover:bg-stone-50"
                    >
                      Schedule Now <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Link>
                  </Card>
                </div>

                {/* Differentiators */}
                <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {[
                    { icon: ShieldCheck, title: "Medicaid Only", desc: "Dedicated specifically to the Medicaid community." },
                    { icon: Clock, title: "No Waitlist", desc: "Start your healing journey without delay." },
                    { icon: Phone, title: "24h Response", desc: "We respond to all inquiries within one business day." }
                  ].map((item, i) => (
                    <Card key={i} containerClassName="rounded-3xl" className="flex items-center gap-6">
                      <div className={iconContainerStyles}>
                        <item.icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-800 text-lg tracking-tight leading-none mb-1">{item.title}</h4>
                        <p className="text-stone-400 text-sm font-medium leading-none">{item.desc}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <AppointmentSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
