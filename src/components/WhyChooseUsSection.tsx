
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  MapPin,
  HeartPulse,
  UserPlus,
  Navigation,
} from "lucide-react";
import SectionTag from "./ui/section-tag";
import Link from "next/link";
import Image from "next/image";
import ClinicStatus from "./ui/ClinicStatus";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-6 font-barlow md:pt-16 md:pb-8">
      <div className="container mx-auto px-4 md:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-4xl text-center md:mb-12"
        >
          <div className="flex flex-col items-center gap-4">
            <SectionTag>Why Choose Us</SectionTag>

            <h2 className="text-3xl font-normal leading-tight tracking-tighter text-stone-900 sm:text-4xl md:text-5xl lg:text-6xl">
  Compassionate care that
  <br />
  <span className="text-orange-500">
    puts you first.
  </span>
</h2>
          </div>
        </motion.div>

        {/* Main content and information cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="mx-auto max-w-7xl"
        >

          {/* Main mental health care card */}
          <motion.div variants={itemVariants}>
            <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-gradient-to-br from-white via-white to-orange-50/60 p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-8 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.6fr_0.8fr] md:gap-6">

                {/* Main text */}
                <div className="relative z-10 flex flex-col">
                  <div className="mb-5 flex items-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-stone-100 bg-white shadow-md shadow-stone-200/50">
                      <HeartPulse className="h-5 w-5 text-orange-500" />
                    </div>
                  </div>

                  <div className="space-y-5">
                    <h2 className="text-3xl font-normal leading-[1.05] tracking-tighter text-stone-900 sm:text-4xl md:text-5xl lg:text-6xl">
  Mental health care
  <br />
  <span className="text-orange-500">
    centered around your needs.
  </span>
</h2>

                    <p className="max-w-2xl text-sm font-medium leading-relaxed text-stone-500 sm:text-base">
  Our team works alongside individuals and families to provide
  compassionate, personalized mental health support. We build
  on each person&apos;s strengths and work together toward goals
  that support their well-being.
</p>
                  </div>

                  {/* Existing navigation links */}
                  <div className="mt-7 flex flex-wrap gap-6 border-t border-stone-200/80 pt-6">
                    <Link
                      href="/services"
                      className="group/link inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-stone-600 transition-colors hover:text-orange-600"
                    >
                      Our Services
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </Link>

                    <Link
                      href="/appointment"
                      className="group/link inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-stone-600 transition-colors hover:text-orange-600"
                    >
                      Book Visit
                      <Calendar className="h-4 w-4 transition-transform group-hover/link:scale-110" />
                    </Link>
                  </div>
                </div>

                {/* Existing Sunrise logo */}
                <div className="relative mx-auto flex w-full max-w-[240px] items-center justify-center md:max-w-[280px]">
                  <div className="absolute inset-0 rounded-full bg-orange-100/60 blur-3xl" />

                  <Image
                    src="/images/logo.png"
                    alt="Sunrise Human Care Services Logo"
                    width={280}
                    height={240}
                    priority={false}
                    className="relative z-10 h-auto w-full object-contain drop-shadow-sm"
                  />
                </div>

              </div>
            </div>
          </motion.div>

          {/* Four information cards */}
          <motion.div
            variants={itemVariants}
            className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >

            {/* Sunrise / Open Now */}
            <div className="flex min-h-[145px] items-center justify-between gap-3 rounded-[1.5rem] border border-orange-100 bg-gradient-to-br from-white to-orange-50/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex min-w-0 flex-col">
                <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
                  Sunrise
                </span>

                <span className="text-sm text-stone-500">
                  Human Care Services
                </span>

                <div className="mt-3">
                  <ClinicStatus showBadge={true} />
                </div>
              </div>

              <Image
                src="/images/logo.png"
                alt="Sunrise logo"
                width={78}
                height={70}
                className="h-auto w-[70px] shrink-0 object-contain"
              />
            </div>

            {/* Business Hours */}
            <div className="flex min-h-[145px] flex-col items-center justify-center rounded-[1.5rem] border border-blue-100 bg-gradient-to-br from-blue-50/80 to-blue-100/50 p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                Mon - Fri
              </span>

              <span className="mt-2 font-barlow text-xl font-bold tracking-tight text-stone-900">
                9:00 AM - 5:00 PM
              </span>

              <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-blue-700">
                Business Hours
              </span>
            </div>

            {/* Accepting Patients */}
            <div className="flex min-h-[145px] flex-col justify-center rounded-[1.5rem] border border-emerald-100 bg-gradient-to-br from-emerald-50/70 to-emerald-100/30 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="font-bold tracking-tight text-emerald-900">
                  Accepting Patients
                </span>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-white shadow-sm">
                  <UserPlus className="h-5 w-5 text-emerald-600" />
                </div>
              </div>

              <p className="text-xs font-medium leading-relaxed text-emerald-800/80">
  Connect with our team today.
  <br />
  Medicaid and Private Pay welcome.
</p>
            </div>

            {/* Clinic Address */}
            <div className="flex min-h-[145px] items-center justify-between gap-3 rounded-[1.5rem] border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex min-w-0 flex-col">
                <span className="mb-2 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                  Clinic Address
                </span>

                <span className="text-sm font-bold leading-snug text-stone-900">
                  869 Main Street
                  <br />
                  Darby, PA 19023
                </span>

                <span className="mt-2 text-xs text-stone-500">
                  United States
                </span>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=869+Main+Street+Darby+PA+19023"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View our Darby clinic location on Google Maps"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-100 bg-white text-stone-700 shadow-sm transition-all hover:bg-orange-500 hover:text-white"
              >
                <Navigation className="h-4 w-4" />
              </a>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
