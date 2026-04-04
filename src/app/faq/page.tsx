"use client";

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import SEOHead from '@/components/SEOHead';
import SchemaMarkup from '@/components/SchemaMarkup';
import Script from 'next/script';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";
import SectionTag from '@/components/ui/section-tag';
import CurveTransition from '@/components/ui/CurveTransition';
import { ChevronDown, Search, MessageCircle, Shield, Calendar, Heart, Zap, Brain, Users } from 'lucide-react';

const faqCategories = [
  {
    id: 'general',
    label: 'General',
    icon: MessageCircle,
    questions: [
      {
        question: "What mental health services do you offer at your Darby, PA clinic?",
        answer: "We provide comprehensive mental health services, including individual therapy, couples counseling, family therapy, child therapy, psychiatric evaluations, and medication management. Our team addresses various conditions such as anxiety, depression, PTSD, and substance use disorders."
      },
      {
        question: "How do I schedule an appointment at your Darby clinic?",
        answer: "To schedule an appointment, please contact our office directly at (814) 620-2162 or through our website's appointment request form. Our team will contact you within 24 hours to confirm your details."
      },
      {
        question: "Do you offer virtual therapy sessions?",
        answer: "Yes, we offer HIPAA-compliant virtual therapy sessions (telehealth) for individuals who prefer remote care from the comfort of their home."
      }
    ]
  },
  {
    id: 'insurance',
    label: 'Insurance & Costs',
    icon: Shield,
    questions: [
      {
        question: "Which insurance plans are currently accepted at your Darby clinic?",
        answer: "We currently accept Medicaid for our mental health services. We understand the importance of accessible care and are committed to serving the Medicaid community with quality mental health treatment."
      },
      {
        question: "How do I verify my insurance coverage?",
        answer: "Our intake specialists can help you verify your Medicaid benefits. Simply provide your information during the initial contact, and we will handle the rest."
      }
    ]
  },
  {
    id: 'specialties',
    label: 'Specialties',
    icon: Brain,
    questions: [
      {
        question: "What conditions do you specialize in?",
        answer: "We specialize in treating Anxiety Disorders, Depression, Bipolar Disorder, PTSD, OCD, ADHD, Schizophrenia, and more. Each treatment plan is personalized to your unique needs."
      },
      {
        question: "Do you provide child and adolescent therapy?",
        answer: "Yes, we have specialized clinicians who focus on child and adolescent behavioral health, including ADHD, school-related stress, and family transitions."
      }
    ]
  },
  {
    id: 'clinical',
    label: 'Clinical Process',
    icon: Heart,
    questions: [
      {
        question: "What should I expect during my first visit?",
        answer: "Your initial visit involves a comprehensive clinical assessment. We'll discuss your history, current challenges, and goals to create a roadmap for your recovery."
      },
      {
        question: "How long are the therapy sessions?",
        answer: "Standard individual therapy sessions typically last 45 to 60 minutes, while psychiatric evaluations may take longer."
      }
    ]
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-stone-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={cn(
          "font-barlow font-medium text-lg md:text-xl transition-colors duration-300",
          isOpen ? "text-orange-600" : "text-stone-800 group-hover:text-orange-500"
        )}>
          {question}
        </span>
        <div className={cn(
          "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300",
          isOpen ? "bg-orange-500 border-orange-500 text-stone-950 rotate-180" : "bg-white border-stone-200 text-stone-400 group-hover:border-orange-300 group-hover:text-orange-500"
        )}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 pr-12 text-stone-500 font-barlow leading-relaxed text-base md:text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState(faqCategories[0].id);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const currentCategory = faqCategories.find(cat => cat.id === activeTab);

  const filteredQuestions = useMemo(() => {
    if (!searchQuery) return currentCategory?.questions || [];
    return faqCategories
      .flatMap(cat => cat.questions)
      .filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [searchQuery, currentCategory]);

  return (
    <>
      <SchemaMarkup type="FAQPage" data={faqCategories.flatMap(cat => cat.questions)} />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow pt-28">
          {/* Hero Section */}
          <section className="relative py-20 md:py-32 bg-stone-900 overflow-hidden">
            <div className="absolute inset-0 z-0">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -mr-48 -mt-48" />
               <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -ml-48 -mb-48" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto text-center"
              >
                <div className="mb-6 flex justify-center">
                  <SectionTag className="border-white/20 text-white bg-white/10">Resource Center</SectionTag>
                </div>
                <h1 className="font-barlow font-bold text-4xl md:text-7xl text-white tracking-tighter leading-none mb-8">
                  Common <span className="font-instrument-serif italic text-orange-500 font-normal">Questions.</span> <br />
                  Clear <span className="font-instrument-serif italic text-orange-500 font-normal">Answers.</span>
                </h1>
                
                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto group">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 group-focus-within:text-orange-500 transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Search for questions (e.g., 'Medicaid', 'Telehealth')..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-full py-5 pl-14 pr-8 text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500/30 transition-all text-lg font-barlow"
                  />
                </div>
              </motion.div>
            </div>
            <CurveTransition fillColor="#ffffff" inverted className="z-20" />
          </section>

          {/* FAQ Content */}
          <section className="py-24 container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {!searchQuery ? (
                <div className="flex flex-col lg:flex-row gap-12">
                  {/* Sidebar Tabs */}
                  <div className="lg:w-1/3">
                    <div className="sticky top-32 flex flex-col gap-2">
                      {faqCategories.map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setActiveTab(cat.id);
                            setOpenIndex(0);
                          }}
                          className={cn(
                            "flex items-center gap-4 px-6 py-4 rounded-2xl border transition-all duration-300 group",
                            activeTab === cat.id 
                              ? "bg-orange-50 border-orange-100 text-orange-600 shadow-sm" 
                              : "bg-white border-stone-100 text-stone-500 hover:bg-stone-50 hover:border-stone-200"
                          )}
                        >
                          <div className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                            activeTab === cat.id ? "bg-orange-500 text-stone-950" : "bg-stone-100 text-stone-400 group-hover:bg-white"
                          )}>
                            <cat.icon className="w-5 h-5" />
                          </div>
                          <span className="font-barlow font-bold text-lg">{cat.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* FAQ Accordion */}
                  <div className="lg:w-2/3">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)]"
                    >
                      <h2 className="text-3xl font-barlow font-bold text-stone-900 mb-8 tracking-tight">{currentCategory?.label} Questions</h2>
                      <div className="flex flex-col">
                        {currentCategory?.questions.map((faq, idx) => (
                          <FAQItem 
                            key={idx} 
                            {...faq} 
                            isOpen={openIndex === idx} 
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              ) : (
                /* Search Results */
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="flex items-center justify-between mb-12">
                    <h2 className="text-2xl font-barlow font-bold text-stone-900">
                      Search results for &quot;{searchQuery}&quot;
                    </h2>
                    <button onClick={() => setSearchQuery("")} className="text-orange-600 font-bold text-sm hover:underline">Clear search</button>
                  </div>
                  
                  {filteredQuestions.length > 0 ? (
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-stone-100 shadow-sm">
                      {filteredQuestions.map((faq, idx) => (
                        <FAQItem 
                          key={idx} 
                          {...faq} 
                          isOpen={openIndex === idx} 
                          onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-20 bg-stone-50 rounded-[2.5rem] border border-dashed border-stone-200">
                      <p className="text-stone-400 font-barlow text-lg">No matching questions found. Try another term or contact us directly.</p>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
