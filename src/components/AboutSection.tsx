
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#faf8f4]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70 mb-4">About Us</span>
              <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-5xl text-stone-800 tracking-tight leading-tight mb-6">
                Our Story & Mission
                <span className="block font-instrument-serif italic text-amber-400 font-normal">in mental health care</span>
              </h2>
            </div>
            <div>
              <p className="text-stone-600 font-barlow leading-relaxed">
                Learn about our commitment to providing compassionate, accessible mental health care in Darby, PA and surrounding communities.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/therapy-for-older-adults.webp" alt="Therapy for older adults at Sunrise Human Care Services in Darby" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="space-y-5 font-barlow text-stone-600 leading-relaxed"
          >
            <h3 className="text-2xl font-barlow font-semibold text-stone-800">Compassionate Mental Health Care for Every Journey</h3>
            <p>
              Founded by Michael Thevar, Sunrise Human Care Services has grown into a leading provider of mental health care in Darby. With over 30 years of dedication to mental health, we've built a foundation of experience, trust, and community care to help individuals navigate their challenges and realize their full potential.
            </p>
            <p>
              Our team of experienced therapists and psychiatric providers brings diverse backgrounds and specialties to Darby, PA, united by a shared commitment to compassionate, evidence-based care. We believe in treating the whole person, not just symptoms, and in creating individualized treatment plans that respect each client's unique needs and goals.
            </p>
            <p>
              Whether you're seeking support for anxiety, depression, ADHD, or working toward personal growth, our mental health care in Darby is designed to walk alongside you on your journey. We're proud to serve residents from Upper Darby, Yeadon, and throughout Delaware County with accessible, high-quality mental health services.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
