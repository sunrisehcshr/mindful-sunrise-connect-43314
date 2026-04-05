import re

with open('/workspace/src/app/services/ServicesClient.tsx', 'r') as f:
    content = f.read()

# 1. Add imports needed for FAQ (AnimatePresence, Plus, useRef)
if 'AnimatePresence' not in content:
    content = content.replace("import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';", "import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';")

if 'Plus' not in content:
    content = content.replace("import { ArrowRight, ChevronDown, Calendar, Phone, MapPin, ShieldCheck, Users, Stethoscope, Navigation, HeartPulse, UserPlus } from 'lucide-react';", "import { ArrowRight, ChevronDown, Calendar, Phone, MapPin, ShieldCheck, Users, Stethoscope, Navigation, HeartPulse, UserPlus, Plus } from 'lucide-react';")

if 'useRef' not in content:
    content = content.replace("import React, { useState } from 'react';", "import React, { useState, useRef } from 'react';")

# 2. Add SpotlightItem and CurveTransition components
spotlight_code = """
const SpotlightItem = React.memo(({ faq, cardBgColor, cardBorderColor, cardTextColor, hoverCardTextColor, answerTextColor, iconColor, hoverIconColor, spotlightColor }: { faq: { question: string, answer: string }, cardBgColor: string, cardBorderColor: string, cardTextColor: string, hoverCardTextColor: string, answerTextColor: string, iconColor: string, hoverIconColor: string, spotlightColor: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);
    
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 40%)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onClick={() => setIsOpen(!isOpen)}
            className="relative rounded-[2rem] border overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-shadow duration-300"
            style={{ backgroundColor: cardBgColor, borderColor: cardBorderColor }}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{ background }}
            />
            <div className="relative z-10 p-6 md:p-8">
                <div className="flex justify-between items-center gap-4">
                    <h3 className="text-lg font-barlow font-medium leading-tight tracking-tight transition-colors group-hover:text-orange-500" style={{ color: cardTextColor }}>{faq.question}</h3>
                    <motion.div 
                        animate={{ rotate: isOpen ? 45 : 0 }} 
                        className="flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-white border border-stone-100 shadow-sm transition-colors duration-300 group-hover:border-orange-200"
                        style={{ color: iconColor }}
                    >
                        <Plus size={20} className="group-hover:text-orange-500 transition-colors" />
                    </motion.div>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <p className="pt-4 font-barlow text-base leading-relaxed" style={{ color: answerTextColor }}>{faq.answer}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
});

function CurveTransition({ fillColor }: { fillColor: string }) {
    return (
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 -mt-[1px]">
            <svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="relative block w-full h-[60px] md:h-[100px]"
                style={{ transform: "rotate(180deg)" }}
            >
                <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    fill={fillColor}
                ></path>
            </svg>
        </div>
    );
}

export default function ServicesClient() {
"""

if 'function SpotlightItem' not in content:
    content = content.replace("export default function ServicesClient() {", spotlight_code)

# 3. Replace FAQ Section
old_faq_section = """          {/* SECTION 4: FAQs */}
          <section className="py-16 md:py-24 bg-stone-100">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <SectionTag>Common Questions</SectionTag>
                  <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight mt-4">
                    Mental Health Services FAQs
                  </h2>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      question: "Do you accept Medicaid for therapy and psychiatry?",
                      answer: "Yes, Sunrise Human Care Services exclusively accepts Medicaid. We believe high-quality mental health care should be accessible to everyone in Delaware County, without financial barriers."
                    },
                    {
                      question: "What is the difference between therapy and a psychiatric evaluation?",
                      answer: "Therapy (or counseling) involves regular sessions to discuss feelings, behaviors, and coping strategies. A psychiatric evaluation is a diagnostic assessment performed by a medical professional who can prescribe medications to help manage your symptoms."
                    },
                    {
                      question: "Can I receive both therapy and medication management at your clinic?",
                      answer: "Absolutely. In fact, we encourage it. Research shows that combining talk therapy with appropriate medication management often yields the best outcomes for conditions like depression, anxiety, and ADHD."
                    },
                    {
                      question: "Do you offer services for children and teenagers?",
                      answer: "Yes, we have specialized child and adolescent therapists on staff. We offer play therapy for younger children and cognitive behavioral approaches tailored specifically for teens navigating school, peer, and family challenges."
                    }
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-[2rem] border border-stone-200/60 bg-white/50 hover:border-orange-200/40 hover:bg-white shadow-sm transition-all duration-500"
                    >
                      <button
                        type="button"
                        className="relative flex w-full items-start gap-6 px-8 py-6 text-left transition-colors duration-300 focus:outline-none"
                      >
                        <div className="flex flex-1 flex-col gap-2">
                          <h3 className="text-lg font-barlow font-bold leading-tight tracking-tight text-stone-900 group-hover:text-orange-500 transition-colors duration-300">
                            {faq.question}
                          </h3>
                          <p className="text-stone-500 font-barlow text-base leading-relaxed pt-2">
                            {faq.answer}
                          </p>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>"""

new_faq_section = """          {/* SECTION 4: FAQs */}
          <section className="py-16 md:py-24 bg-stone-50 relative overflow-hidden">
            <CurveTransition fillColor="#ffffff" />
            
            {/* Animated SVG Background */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0">
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f97316" strokeWidth="0.5" strokeOpacity="0.3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                <motion.circle 
                  cx="80%" 
                  cy="20%" 
                  r="150" 
                  fill="none" 
                  stroke="#ea580c" 
                  strokeWidth="1" 
                  strokeOpacity="0.2"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1] 
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
                <motion.circle 
                  cx="20%" 
                  cy="80%" 
                  r="250" 
                  fill="none" 
                  stroke="#ea580c" 
                  strokeWidth="1" 
                  strokeOpacity="0.1"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1] 
                  }}
                  transition={{ 
                    duration: 12, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 mt-12">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 flex flex-col items-center gap-4">
                  <SectionTag>Common Questions</SectionTag>
                  <h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight">
                    Mental Health Services <span className="font-instrument-serif italic text-orange-500">FAQs.</span>
                  </h2>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      question: "Do you accept Medicaid for therapy and psychiatry?",
                      answer: "Yes, Sunrise Human Care Services exclusively accepts Medicaid. We believe high-quality mental health care should be accessible to everyone in Delaware County, without financial barriers."
                    },
                    {
                      question: "What is the difference between therapy and a psychiatric evaluation?",
                      answer: "Therapy (or counseling) involves regular sessions to discuss feelings, behaviors, and coping strategies. A psychiatric evaluation is a diagnostic assessment performed by a medical professional who can prescribe medications to help manage your symptoms."
                    },
                    {
                      question: "Can I receive both therapy and medication management at your clinic?",
                      answer: "Absolutely. In fact, we encourage it. Research shows that combining talk therapy with appropriate medication management often yields the best outcomes for conditions like depression, anxiety, and ADHD."
                    },
                    {
                      question: "Do you offer services for children and teenagers?",
                      answer: "Yes, we have specialized child and adolescent therapists on staff. We offer play therapy for younger children and cognitive behavioral approaches tailored specifically for teens navigating school, peer, and family challenges."
                    }
                  ].map((faq) => (
                    <SpotlightItem 
                        key={faq.question} 
                        faq={faq} 
                        cardBgColor="#ffffff" 
                        cardBorderColor="rgba(249, 115, 22, 0.15)" 
                        cardTextColor="#1c1917" 
                        hoverCardTextColor="#ea580c" 
                        answerTextColor="#78716c" 
                        iconColor="#f97316" 
                        hoverIconColor="#ffffff" 
                        spotlightColor="rgba(249, 115, 22, 0.08)" 
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>"""

if old_faq_section in content:
    content = content.replace(old_faq_section, new_faq_section)
else:
    print("FAQ section not found! Manual check needed.")

with open('/workspace/src/app/services/ServicesClient.tsx', 'w') as f:
    f.write(content)

print("FAQ added")
