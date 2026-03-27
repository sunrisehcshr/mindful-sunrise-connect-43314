
import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown, Calendar } from "lucide-react";
import { Button } from './ui/button';
import AppointmentDialog from './Appointment/AppointmentDialog';

const faqs = [{
  question: "What mental health services do you offer at your Darby, PA clinic?",
  answer: "We provide comprehensive mental health care in Darby, including individual therapy, couples counseling, group therapy, family counseling, psychiatric evaluations, and medication management. Our licensed mental health professionals address various conditions such as anxiety, depression, PTSD, ADHD, and substance use disorders, with treatment plans tailored to each client's unique needs and goals."
}, {
  question: "Which insurance plans are currently accepted at your Darby clinic?",
  answer: "We currently accept Medicaid for our mental health services in Darby. We understand the importance of accessible care and are committed to serving the Medicaid community with quality mental health treatment. Our staff can help verify your Medicaid benefits and guide you through the process for residents in Darby and nearby communities like Upper Darby and Yeadon."
}, {
  question: "How do I know if I need to seek help from a mental health professional?",
  answer: "If you're experiencing persistent feelings of sadness, anxiety, anger, or if these emotions interfere with daily activities and relationships, it may be beneficial to consult a mental health professional. Other signs include changes in sleep or appetite, decreased energy, difficulty concentrating, withdrawal from social activities, or thoughts of harming yourself or others. Our therapy sessions in Darby provide a safe space to address these concerns."
}, {
  question: "What should I expect during my first visit to your clinic?",
  answer: "During your initial visit to our Darby mental health clinic, our clinicians will conduct a comprehensive assessment to understand your needs. This evaluation includes discussing your concerns, history, symptoms, and goals for treatment. We'll explain our approach to therapy, answer your questions, and collaborate with you to create a personalized treatment plan. The first session typically lasts about 60 minutes in a comfortable, confidential environment."
}, {
  question: "How do I schedule an appointment at your Darby clinic?",
  answer: "To schedule an appointment for mental health care in Darby, please contact our office directly at (814) 620-2162 or use our website's appointment request form. Our friendly staff will guide you through the process, collect necessary information, and match you with the appropriate therapist. We offer flexible scheduling options, including evenings and weekends, to accommodate your busy lifestyle."
}, {
  question: "Do you offer virtual therapy sessions?",
  answer: "Yes, we offer virtual therapy sessions for individuals who prefer remote care. Our telehealth services provide a secure and convenient way to access therapy from the comfort of your home. Our virtual mental health care follows the same high standards as our in-person sessions, allowing clients in Darby, Upper Darby, Yeadon and beyond to receive quality care regardless of mobility limitations, scheduling constraints, or health concerns."
}, {
  question: "What steps should I take if I or someone I know is in crisis?",
  answer: "If you or someone you know is struggling or in crisis, help is available immediately. Call or text 988 to speak with a trained crisis counselor any time of day or night. For emergencies that present an immediate danger, please call 911 or go to your nearest emergency room. After the immediate crisis, contact our Darby clinic at (814) 620-2162 for follow-up mental health care and support."
}];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className={cn(
      "bg-white border rounded-2xl overflow-hidden mb-3 transition-all duration-300",
      isOpen ? "border-amber-200 shadow-md" : "border-stone-200/80 hover:border-amber-200 hover:shadow-sm"
    )}>
      <button 
        className="flex items-center justify-between w-full p-5 text-left transition-colors duration-200" 
        onClick={onClick} 
        aria-expanded={isOpen}
      >
        <h3 className="font-barlow font-medium text-stone-800">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-stone-400">
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 border-t border-stone-100">
              <p className="text-stone-500 font-barlow pt-4 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#f0ece4]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-14" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70 mb-4">FAQ</span>
          
          <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-5xl text-stone-800 tracking-tight leading-tight mb-4">
            Frequently asked
            <span className="block font-instrument-serif italic text-amber-400 font-normal">questions</span>
          </h2>
          
          <p className="text-stone-600 font-barlow">
            Find answers to common questions about our services, appointments, and mental health care in Darby.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} isOpen={openIndex === index} onClick={() => toggleFAQ(index)} />
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-12 bg-white p-8 rounded-2xl border border-stone-200/80">
          <h3 className="text-xl font-barlow font-semibold mb-4 text-center text-stone-800">
            Ready to start your mental health journey in Darby?
          </h3>
          <p className="text-stone-500 mb-6 text-center font-barlow">
            Our licensed mental health professionals are here to provide the compassionate care you deserve.
            Contact us today to schedule your first appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18146202162" className="inline-flex items-center justify-center px-6 py-3 bg-[#222] text-white font-barlow font-medium rounded-full hover:bg-zinc-800 transition-colors">
              Call Us at (814) 620-2162
            </a>
            <AppointmentDialog>
              <Button className="bg-white border border-stone-200 text-stone-800 font-barlow font-medium rounded-full hover:border-amber-200 hover:bg-amber-50">
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
            </AppointmentDialog>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQSection;
