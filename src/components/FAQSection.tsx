
"use client";

import React, { useEffect, useMemo, useState } from "react"; 
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown, MessageCircle, Phone, ArrowUpRight, Plus } from "lucide-react";
import SectionTag from './ui/section-tag';
import CurveTransition from './ui/CurveTransition';

const INTRO_STYLE_ID = "faq-animations";

const faqs = [{
  question: "What mental health services do you offer at your Darby, PA clinic?",
  answer: "We provide comprehensive mental health care in Darby, including individual therapy, couples counseling, group therapy, family counseling, psychiatric evaluations, and medication management. Our licensed mental health professionals address various conditions such as anxiety, depression, PTSD, ADHD, and substance use disorders, with treatment plans tailored to each client's unique needs and goals.",
  meta: "Services"
}, {
  question: "Which insurance plans are currently accepted at your Darby clinic?",
  answer: "We currently accept Medicaid for our mental health services in Darby. We understand the importance of accessible care and are committed to serving the Medicaid community with quality mental health treatment. Our staff can help verify your Medicaid benefits and guide you through the process for residents in Darby and nearby communities like Upper Darby and Yeadon.",
  meta: "Insurance"
}, {
  question: "How do I know if I need to seek help from a mental health professional?",
  answer: "If you're experiencing persistent feelings of sadness, anxiety, anger, or if these emotions interfere with daily activities and relationships, it may be beneficial to consult a mental health professional. Other signs include changes in sleep or appetite, decreased energy, difficulty concentrating, withdrawal from social activities, or thoughts of harming yourself or others. Our therapy sessions in Darby provide a safe space to address these concerns.",
  meta: "Support"
}, {
  question: "What should I expect during my first visit to your clinic?",
  answer: "During your initial visit to our Darby mental health clinic, our clinicians will conduct a comprehensive assessment to understand your needs. This evaluation includes discussing your concerns, history, symptoms, and goals for treatment. We'll explain our approach to therapy, answer your questions, and collaborate with you to create a personalized treatment plan. The first session typically lasts about 60 minutes in a comfortable, confidential environment.",
  meta: "Intake"
}, {
  question: "How do I schedule an appointment at your Darby clinic?",
  answer: "To schedule an appointment for mental health care in Darby, please contact our office directly at (814) 620-2162 or use our website's appointment request form. Our friendly staff will guide you through the process, collect necessary information, and match you with the appropriate therapist. We offer flexible scheduling options, including evenings and weekends, to accommodate your busy lifestyle.",
  meta: "Booking"
}, {
  question: "Do you offer virtual therapy sessions?",
  answer: "Yes, we offer virtual therapy sessions for individuals who prefer remote care. Our telehealth services provide a secure and convenient way to access therapy from the comfort of your home. Our virtual mental health care follows the same high standards as our in-person sessions, allowing clients in Darby, Upper Darby, Yeadon and beyond to receive quality care regardless of mobility limitations, scheduling constraints, or health concerns.",
  meta: "Telehealth"
}, {
  question: "What steps should I take if I or someone I know is in crisis?",
  answer: "If you or someone you know is struggling or in crisis, help is available immediately. Call or text 988 to speak with a trained crisis counselor any time of day or night. For emergencies that present an immediate danger, please call 911 or go to your nearest emergency room. After the immediate crisis, contact our Darby clinic at (814) 620-2162 for follow-up mental health care and support.",
  meta: "Emergency"
}];

const itemVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const FAQItem = ({
  question,
  answer,
  meta,
  isOpen,
  onClick,
  index
}: {
  question: string;
  answer: string;
  meta?: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) => {
  const setCardGlow = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--faq-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--faq-y", `${event.clientY - rect.top}px`);
  };

  const clearCardGlow = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    target.style.removeProperty("--faq-x");
    target.style.removeProperty("--faq-y");
  };

  return (
    <motion.li 
      variants={itemVariants}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5",
        isOpen 
          ? "border-orange-500/30 bg-white shadow-[0_20px_50px_rgba(249,115,22,0.05)]" 
          : "border-stone-200/60 bg-white/50 hover:border-orange-200/40 hover:bg-white shadow-sm"
      )}
      onMouseMove={setCardGlow}
      onMouseLeave={clearCardGlow}
    >
      <div 
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-500",
          isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        )}
        style={{ 
          background: `radial-gradient(300px circle at var(--faq-x, 50%) var(--faq-y, 50%), rgba(249, 115, 22, 0.06), transparent 70%)`, 
        }} 
      />

      <button 
        type="button"
        aria-expanded={isOpen}
        onClick={onClick}
        className="relative flex w-full items-start gap-6 px-8 py-8 text-left transition-colors duration-300 focus:outline-none"
      >
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
          <motion.span 
            initial={false}
            animate={{ 
              scale: isOpen ? 1 : 0.25,
              opacity: isOpen ? 1 : 0,
              filter: isOpen ? "blur(0px)" : "blur(4px)"
            }}
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
            className="absolute inset-0 rounded-full bg-orange-500 border border-orange-400"
          />
          <span 
            className={cn(
              "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-105",
              !isOpen && "bg-orange-50 border-stone-100 text-orange-500"
            )}
          >
            <Plus className={cn("relative h-5 w-5 transition-transform duration-500", isOpen ? "rotate-45 text-white" : "")} />
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <h3 className={cn(
              "text-lg md:text-xl font-barlow font-bold leading-tight tracking-tight transition-colors duration-300",
              isOpen ? "text-orange-500" : "text-stone-900 group-hover:text-orange-500"
            )}>
              {question}
            </h3>
            {meta && (
              <span className="inline-flex w-fit items-center rounded-full border border-stone-100 bg-stone-50/50 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 transition-opacity duration-300 sm:ml-auto">
                {meta}
              </span>
            )}
          </div>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }} 
                animate={{ height: "auto", opacity: 1 }} 
                exit={{ height: 0, opacity: 0 }} 
                transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div className="pt-4 border-t border-stone-50">
                  <p className="text-stone-500 font-barlow text-lg leading-relaxed max-w-3xl">{answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </motion.li>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [introReady, setIntroReady] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(INTRO_STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = INTRO_STYLE_ID;
    style.innerHTML = `
      @keyframes faq-beam-spin {
        0% { transform: rotate(0deg) scale(1); }
        100% { transform: rotate(360deg) scale(1); }
      }
      @keyframes faq-pulse {
        0% { transform: scale(0.7); opacity: 0.55; }
        60% { opacity: 0.1; }
        100% { transform: scale(1.25); opacity: 0; }
      }
      @keyframes faq-meter {
        0%, 20% { transform: scaleX(0); transform-origin: left; }
        45%, 60% { transform: scaleX(1); transform-origin: left; }
        80%, 100% { transform: scaleX(0); transform-origin: right; }
      }
      @keyframes faq-tick {
        0%, 30% { transform: translateX(-6px); opacity: 0.4; }
        50% { transform: translateX(2px); opacity: 1; }
        100% { transform: translateX(20px); opacity: 0; }
      }
      .faq-intro {
        position: relative;
        display: flex;
        align-items: center; gap: 0.85rem; padding: 0.85rem 1.4rem; border-radius: 9999px; overflow: hidden; border: 1px solid rgba(249, 115, 22, 0.12); background: rgba(255, 255, 255, 0.8); color: rgba(249, 115, 22, 0.8); text-transform: uppercase; letter-spacing: 0.35em; font-size: 0.65rem; width: fit-content; margin: 0 auto; opacity: 0; transform: translate3d(0, 12px, 0); filter: blur(8px); transition: all 720ms ease; isolation: isolate; backdrop-blur: 10px;
      }
      .faq-intro--active {
        opacity: 1; transform: translate3d(0, 0, 0); filter: blur(0);
      }
      .faq-intro__beam, .faq-intro__pulse {
        position: absolute; inset: -110%; pointer-events: none; border-radius: 50%;
      }
      .faq-intro__beam {
        background: conic-gradient(from 160deg, rgba(249, 115, 22, 0.15), transparent 32%, rgba(249, 115, 22, 0.12) 58%, transparent 78%, rgba(249, 115, 22, 0.1)); animation: faq-beam-spin 18s linear infinite; opacity: 0.55;
      }
      .faq-intro__pulse {
        border: 1px solid currentColor; opacity: 0.25; animation: faq-pulse 3.4s ease-out infinite;
      }
      .faq-intro__label {
        position: relative; z-index: 1; font-weight: 800; letter-spacing: 0.4em;
      }
      .faq-intro__meter {
        position: relative; z-index: 1; flex: 1 1 auto; width: 3rem; height: 1px; background: linear-gradient(90deg, transparent, currentColor 35%, transparent 85%); transform: scaleX(0); transform-origin: left; animation: faq-meter 5.8s ease-in-out infinite; opacity: 0.7;
      }
      .faq-intro__tick {
        position: relative; z-index: 1; width: 0.55rem; height: 0.55rem; border-radius: 9999px; background: currentColor; box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.1); animation: faq-tick 3.2s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => { if (style.parentNode) style.remove(); };
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIntroReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-32 md:py-40 bg-stone-50/50 overflow-hidden">
      <CurveTransition fillColor="#ffffff" />
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-20" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionTag>Common Questions</SectionTag>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="font-barlow font-normal text-4xl md:text-6xl text-balance text-stone-900 tracking-tighter leading-none mb-6">
            7 questions you might be {' '}
            <span className="font-instrument-serif italic text-orange-500 font-normal">hesitant to ask.</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-stone-500 font-barlow text-lg md:text-xl max-w-2xl mx-auto">
            Starting therapy can feel overwhelming. We&apos;ve gathered the most common concerns from our Darby community to help you feel confident before you ever step through our doors.
          </motion.p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.ul 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                index={index}
                question={faq.question} 
                answer={faq.answer} 
                meta={faq.meta}
                isOpen={openIndex === index} 
                onClick={() => toggleFAQ(index)} 
              />
            ))}
          </motion.ul>

          <motion.div 
            initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-stone-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0 shadow-sm border border-orange-100">
                    <MessageCircle className="w-7 h-7 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-barlow font-bold text-stone-900 tracking-tight">Still Unsure? Let&apos;s Talk It Through.</h3>
                    <p className="text-stone-500 font-barlow">Our team isn&apos;t here just to book appointments—we&apos;re here to help you find the right path.</p>
                  </div>
                </div>

                <div className="flex items-center w-full md:w-auto shrink-0">
                  <a 
                    href="tel:+18146202162" 
                    className="flex items-center gap-5 group/link w-full md:w-auto justify-center bg-stone-900 px-10 py-6 rounded-[2rem] hover:bg-orange-500 transition-all duration-700 shadow-2xl shadow-stone-900/20 whitespace-nowrap"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-orange-500 transition-all duration-500 shadow-inner">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-[11px] uppercase tracking-[0.3em] text-stone-400 font-extrabold leading-none group-hover:text-orange-100 transition-colors">Call Support</span>
                      <span className="font-barlow font-bold text-white text-xl md:text-2xl leading-none whitespace-nowrap tracking-tight">
                        (814) 620-2162
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
