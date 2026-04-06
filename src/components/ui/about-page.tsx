"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface AboutPageProps {
  achievements?: Array<{ label: string; value: string }>
}

const defaultAchievements = [
  { label: "Patients Supported", value: "500+" },
  { label: "Sessions Completed", value: "5,000+" },
  { label: "Medicaid Acceptance", value: "100%" },
  { label: "Years in Darby", value: "5+" },
]

export default function AboutPage({
  achievements = defaultAchievements,
}: AboutPageProps) {
  return (
    <div className="flex flex-col font-barlow bg-stone-50 min-h-screen">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="py-16 md:py-28 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl space-y-12 px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              className="rounded-[2rem] object-cover w-full h-[300px] md:h-[500px] shadow-2xl shadow-stone-900/10"
              src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_1600/v1774918015/diverse-couple-on-a-therapy-session-in-a-psycholog-2026-03-25-04-41-39-utc_jebtlc.jpg"
              alt="Therapy session at Sunrise Human Care"
              width={1200}
              height={600}
              priority
            />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-16 pt-8">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-normal text-stone-900 leading-[1.1] tracking-tighter"
            >
              The Sunrise <span className="font-instrument-serif italic text-orange-500">difference</span>{" "}
              <br />
              <span className="text-stone-400 text-3xl md:text-4xl">
                brings together clinical excellence and profound empathy.
              </span>
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8 text-stone-500 text-lg md:text-xl leading-relaxed flex flex-col justify-center"
            >
              <p>
                Sunrise Human Care is evolving to be more than just a clinic. We support an entire ecosystem of healing — from individual therapy to comprehensive medication management, helping patients and families rebuild their lives.
              </p>
              <Button
                asChild
                className="bg-orange-500 hover:bg-orange-400 text-white rounded-full w-fit px-8 py-6 shadow-lg shadow-orange-500/20 text-base transition-all hover:scale-[0.98] group"
              >
                <Link href="#appointment" onClick={(e) => { e.preventDefault(); document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <span>Start Your Recovery</span>
                  <ChevronRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT SECTION (NEW LAYOUT) ---------------- */}
      <section className="py-20 md:py-32 bg-white rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.03)]">
        <div className="mx-auto max-w-7xl space-y-16 px-6">

          {/* Header */}
          <div className="grid gap-6 text-center md:grid-cols-2 md:gap-12 md:text-left">
            <h2 className="text-4xl md:text-5xl font-normal text-stone-900 tracking-tighter">
              About <span className="font-instrument-serif italic text-orange-500">Us.</span>
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed">
              Sunrise Human Care is a passionate team of licensed professionals dedicated to creating innovative, evidence-based solutions that empower individuals and families to thrive.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-stone-100">
            {achievements.map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-3xl md:text-4xl font-bold text-orange-500 font-barlow tracking-tight">{stat.value}</span>
                <span className="text-sm font-medium text-stone-500 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* ---------------- LAST THREE CARDS (NEW LAYOUT) ---------------- */}
          <div className="flex flex-col md:flex-row gap-6 mt-16">
            
            {/* LEFT BIG IMAGE */}
            <div className="md:flex-1 relative group overflow-hidden rounded-[2rem] shadow-xl">
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image
                src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_1200/v1774918385/young-woman-with-her-psychologist-during-a-therapy-2025-11-20-15-46-12-utc_d2c80h.jpg"
                alt="Therapy session"
                className="object-cover w-full h-[400px] md:h-full transition-transform duration-700 group-hover:scale-105"
                width={800}
                height={800}
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent text-white z-20">
                <span className="inline-block px-4 py-1.5 bg-orange-500/20 backdrop-blur-md border border-orange-500/30 rounded-full text-xs font-bold tracking-widest uppercase text-orange-300 mb-4">
                  Our Mission
                </span>
                <h3 className="text-3xl font-normal font-instrument-serif italic mb-2">Compassionate Care</h3>
                <p className="text-stone-200">Delivering 100% Medicaid-accessible psychiatric and therapeutic care to Delaware County.</p>
              </div>
            </div>

            {/* RIGHT TWO CARDS */}
            <div className="flex flex-col gap-6 md:flex-1">
              {/* FIRST CARD */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative overflow-hidden rounded-[2rem] bg-stone-900 text-white shadow-xl group"
              >
                <div className="relative h-48 sm:h-64 md:h-56 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-orange-500/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <Image
                    src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_800/v1774918385/doctor-give-advice-about-medicine-or-vitamin-to-el-2026-01-08-05-55-04-utc_fvofy1.jpg"
                    alt="Medication Management"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    width={600}
                    height={400}
                  />
                  <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-stone-900 via-stone-900/70 to-transparent z-20" />
                </div>
                <div className="p-8 relative z-30 -mt-8">
                  <h3 className="text-2xl font-normal font-instrument-serif italic text-orange-400">Accelerate Recovery</h3>
                  <p className="mt-3 text-base text-stone-300 leading-relaxed">
                    Our evidence-based solutions drive clinical innovation, ensuring measurable impact and symptom reduction for our patients.
                  </p>
                  <Button
                    variant="outline"
                    asChild
                    className="mt-6 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-stone-900 rounded-full px-6 transition-all duration-300"
                  >
                    <Link href="/services">View Services</Link>
                  </Button>
                </div>
              </motion.div>

              {/* SECOND CARD */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative overflow-hidden rounded-[2rem] bg-orange-50 shadow-xl border border-orange-100 group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[50px] -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150" />
                
                <div className="p-8 h-full flex flex-col justify-center min-h-[220px] relative z-10">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 tracking-tight">Future-Ready Care</h3>
                  <p className="mt-3 text-base text-stone-600 leading-relaxed">
                    Intuitive, scalable treatment plans combining modern telehealth accessibility with deep, functional clinical expertise.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
