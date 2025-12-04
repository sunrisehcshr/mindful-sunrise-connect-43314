
import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { Separator } from './ui/separator';
import SectionTag from './ui/section-tag';
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown, Calendar } from "lucide-react";
import { Button } from './ui/button';
import AppointmentDialog from './Appointment/AppointmentDialog';

const faqs = [{
  question: "What mental health services do you offer at your Havertown, PA clinic?",
  answer: "We provide comprehensive mental health care in Havertown, including individual therapy, couples counseling, group therapy, family counseling, psychiatric evaluations, and medication management. Our licensed mental health professionals address various conditions such as anxiety, depression, PTSD, ADHD, and substance use disorders, with treatment plans tailored to each client's unique needs and goals."
}, {
  question: "Which insurance plans are currently accepted at your Havertown clinic?",
  answer: "We currently accept Medicaid for our mental health services in Havertown. We understand the importance of accessible care and are committed to serving the Medicaid community with quality mental health treatment. Our staff can help verify your Medicaid benefits and guide you through the process for residents in Havertown and nearby communities like Drexel Hill and Broomall."
}, {
  question: "How do I know if I need to seek help from a mental health professional?",
  answer: "If you're experiencing persistent feelings of sadness, anxiety, anger, or if these emotions interfere with daily activities and relationships, it may be beneficial to consult a mental health professional. Other signs include changes in sleep or appetite, decreased energy, difficulty concentrating, withdrawal from social activities, or thoughts of harming yourself or others. Our therapy sessions in Havertown provide a safe space to address these concerns."
}, {
  question: "What should I expect during my first visit to your clinic?",
  answer: "During your initial visit to our Havertown mental health clinic, our clinicians will conduct a comprehensive assessment to understand your needs. This evaluation includes discussing your concerns, history, symptoms, and goals for treatment. We'll explain our approach to therapy, answer your questions, and collaborate with you to create a personalized treatment plan. The first session typically lasts about 60 minutes in a comfortable, confidential environment."
}, {
  question: "How do I schedule an appointment at your Havertown clinic?",
  answer: "To schedule an appointment for mental health care in Havertown, please contact our office directly at (814) 620-2162 or use our website's appointment request form. Our friendly staff will guide you through the process, collect necessary information, and match you with the appropriate therapist. We offer flexible scheduling options, including evenings and weekends, to accommodate your busy lifestyle."
}, {
  question: "Do you offer virtual therapy sessions?",
  answer: "Yes, we offer virtual therapy sessions for individuals who prefer remote care. Our telehealth services provide a secure and convenient way to access therapy from the comfort of your home. Our virtual mental health care follows the same high standards as our in-person sessions, allowing clients in Havertown, Drexel Hill, Broomall and beyond to receive quality care regardless of mobility limitations, scheduling constraints, or health concerns."
}, {
  question: "What steps should I take if I or someone I know is in crisis?",
  answer: "If you or someone you know is struggling or in crisis, help is available immediately. Call or text 988 to speak with a trained crisis counselor any time of day or night. For emergencies that present an immediate danger, please call 911 or go to your nearest emergency room. After the immediate crisis, contact our Havertown clinic at (814) 620-2162 for follow-up mental health care and support."
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
  return <div className="border border-sunrise-200/70 rounded-lg overflow-hidden mb-4 transition-all duration-300 shadow-sm hover:shadow-md">
      <button className={cn("flex items-center justify-between w-full p-5 text-left transition-colors duration-200", isOpen ? "bg-sunrise-50/80" : "bg-white/70 hover:bg-sunrise-50/40")} onClick={onClick} aria-expanded={isOpen}>
        <h3 className="font-medium text-foreground">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-sunrise-500">
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: "auto",
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}>
            <div className="p-5 bg-white/80 border-t border-sunrise-100">
              <p className="text-muted-foreground">{answer}</p>
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
};
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <section id="faq" className="py-24 bg-white">
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
            <SectionTag>FAQ</SectionTag>
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
            Frequently Asked Questions About Mental Health Care
          </motion.h2>
          
          <motion.p className="text-muted-foreground" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            Find answers to common questions about our services, appointments, and mental health care in Havertown.
          </motion.p>
          
          <div className="mx-auto mt-6 mb-10 w-24">
            <Separator className="bg-gradient-to-r from-transparent via-orange-300/50 to-transparent h-0.5" />
          </div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} isOpen={openIndex === index} onClick={() => toggleFAQ(index)} />)}
        </div>
        
        <div className="max-w-3xl mx-auto mt-12 bg-white/70 p-8 rounded-xl border border-sunrise-100/80 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Ready to start your mental health journey in Havertown?
          </h3>
          <p className="text-muted-foreground mb-6 text-center">
            Our licensed mental health professionals are here to provide the compassionate care you deserve.
            Contact us today to schedule your first appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18146202162" className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-md hover:from-orange-600 hover:to-amber-600 transition-colors shadow-sm">
              Call Us at (814) 620-2162
            </a>
            <AppointmentDialog>
              <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white">
                <Calendar className="mr-2 h-4 w-4" />
                Book Mental Health Appointment
              </Button>
            </AppointmentDialog>
          </div>
        </div>
      </div>
    </section>;
};
export default FAQSection;
