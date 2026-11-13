
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SectionTag from "../ui/section-tag";

interface FeatureItem {
  title: string;
  desc: string;
  image: string;
  link: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const ServicesSection: React.FC = () => {
  const services: FeatureItem[] = [
    {
      title: "Individual Therapy",
      link: "/individual-therapy-darby-pa",
      desc: "One-on-one sessions focused on personal growth, emotional healing, and developing practical coping strategies for life's challenges.",
      image: "/lovable-uploads/individual-therapy-card.webp",
    },
    {
      title: "Couples Counseling",
      link: "/couples-counseling-darby-pa",
      desc: "Strengthening relationships through improved communication, conflict resolution, and rebuilding trust in a supportive environment.",
      image: "/lovable-uploads/couple-therapy.webp",
    },
    {
      title: "Family Therapy",
      link: "/family-therapy-darby-pa",
      desc: "Nurturing family dynamics and fostering healthy connections by addressing collective challenges and improving understanding.",
      image: "/lovable-uploads/Family Therapy.jpg",
    },
    {
  title: "Children's Therapy",
  link: "/child-therapy-darby-pa",
  desc: "Compassionate therapy supporting children's emotional, behavioral, and social development in a safe and supportive environment.",
  image: "/lovable-uploads/women-child-progress.webp",
},
    {
      title: "Psychiatric Evaluations",
      link: "/psychiatric-evaluations-darby-pa",
      desc: "Comprehensive diagnostic assessments to understand your mental health needs and determine the best course of treatment.",
      image: "/lovable-uploads/Physcatarics.jpg",
    },
    {
      title: "Medication Management",
      link: "/medication-management-darby-pa",
      desc: "Professional oversight and monitoring of psychiatric medications to ensure optimal effectiveness and safety in your recovery.",
      image: "/lovable-uploads/doctor-medicine-advice.webp",
    },
  ];

  return (
    <section
      id="services"
      className="bg-white pt-10 pb-4 md:pt-12 md:pb-6"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section heading */}
        <motion.div
          className="mx-auto mb-8 max-w-4xl text-center md:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-3"
          >
            <SectionTag>Our Specialties</SectionTag>

            <h2 className="text-2xl font-normal leading-tight tracking-tighter text-stone-900 sm:text-3xl md:text-4xl">
              From Talk Therapy to Psychiatric Care:
              <br />
              <span className="font-barlow text-orange-500">
                A connected approach to care, built around your needs.
              </span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Responsive service card grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {services.map((item, index) => (
            <motion.div
              key={item.link}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="h-full"
            >
              <Link
                href={item.link}
                aria-label={`Explore ${item.title}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              >
                {/* Service thumbnail */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={item.image}
                    alt={`${item.title} at Sunrise Human Care in Darby, PA`}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Service title and link */}
                <div className="flex flex-1 items-center justify-between gap-3 p-3 sm:p-4">
                  <div className="min-w-0">
                    <span className="mb-1 block font-barlow text-[10px] font-medium uppercase tracking-widest text-stone-400">
                      0{index + 1} / 06
                    </span>

                    <h3 className="font-barlow text-lg font-medium leading-tight tracking-tight text-stone-800 transition-colors duration-300 group-hover:text-orange-600 sm:text-xl">
                      {item.title}
                    </h3>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone-200 text-stone-500 transition-all duration-300 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
