
import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from './ui/separator';
import SectionTag from './ui/section-tag';
const AboutSection = () => {
  return <section id="about" className="py-24 bg-inherit">
    <div className="container mx-auto px-4 md:px-6">
      <motion.div className="max-w-3xl mx-auto text-center mb-12" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }}>
        <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.4
        }}>
          <SectionTag>About Us</SectionTag>
        </motion.div>

        <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
Our Story & Mission in Mental Health Care
        </motion.h2>

        <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="font-normal text-zinc-700">
Learn about our commitment to providing compassionate, accessible mental health care in Havertown, PA and surrounding communities.
        </motion.p>

        <div className="mx-auto mt-6 mb-10 w-24">
          <Separator className="bg-gradient-to-r from-transparent via-orange-300/50 to-transparent h-0.5" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="relative">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <img src="/images/therapy-for-older-adults.webp" alt="Therapy for older adults at Sunrise Human Care Services in Havertown" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sunrise-50 rounded-full -z-10"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-50 rounded-full -z-10"></div>
        </motion.div>

        <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="space-y-6">
          <h3 className="text-2xl font-semibold text-amber-900">Compassionate Mental Health Care for Every Journey</h3>
          <p className="text-muted-foreground">
Founded by Michael Thevar, Sunrise Human Care Services has grown into a leading provider of mental health care in Havertown. With over 30 years of dedication to mental health, we've built a foundation of experience, trust, and community care to help individuals navigate their challenges and realize their full potential.
          </p>
          <p className="text-muted-foreground">
Our team of experienced therapists and psychiatric providers brings diverse backgrounds and specialties to Havertown, PA, united by a shared commitment to compassionate, evidence-based care. We believe in treating the whole person, not just symptoms, and in creating individualized treatment plans that respect each client's unique needs and goals.
          </p>
          <p className="text-muted-foreground">
Whether you're seeking support for anxiety, depression, ADHD, or working toward personal growth, our mental health care in Havertown is designed to walk alongside you on your journey. We're proud to serve residents from Drexel Hill, Broomall, and throughout Delaware County with accessible, high-quality mental health services.
          </p>
        </motion.div>
      </div>
    </div>
  </section>;
};
export default AboutSection;
