
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What mental health services do you offer at your Havertown, PA clinic?",
    answer: "We provide comprehensive mental health services, including individual therapy, couple Counseling, group therapy, family counseling, psychiatric evaluations, and medication management. Our team addresses various conditions such as anxiety, depression, PTSD, and substance use disorders."
  },
  {
    question: "Which insurance plans are currently accepted at your Havertown clinic?",
    answer: "At present, we accept Medicare for our services. We understand the importance of accessible care and are actively working to expand our accepted insurance plans in the near future."
  },
  {
    question: "How do I know if I need to seek help from a mental health professional?",
    answer: "If you're experiencing persistent feelings of sadness, anxiety, anger, or if these emotions interfere with daily activities and relationships, it may be beneficial to consult a mental health professional."
  },
  {
    question: "What should I expect during my first visit to your clinic?",
    answer: "During your initial visit, our clinicians will conduct a comprehensive assessment to understand your mental health needs. This evaluation helps us create a personalized treatment plan tailored to your specific goals and concerns."
  },
  {
    question: "How do I schedule an appointment at your Havertown clinic?",
    answer: "To schedule an appointment, please contact our office directly via phone or through our website's appointment request form. Our team will guide you through the process and address any questions you may have."
  },
  {
    question: "Do you offer virtual therapy sessions?",
    answer: "Yes, we offer virtual therapy sessions for individuals who prefer remote care. Our telehealth services provide a secure and convenient way to access therapy from the comfort of your home. Contact us to learn more about availability and scheduling."
  },
  {
    question: "What steps should I take if I or someone I know is in crisis?",
    answer: "If you or someone you know is struggling or in crisis, help is available. Call or text 988 to speak with a trained crisis counselor any time of day or night."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border border-sunrise-200/70 rounded-lg overflow-hidden mb-4 transition-all duration-300 shadow-sm hover:shadow-md">
      <button
        className={cn(
          "flex items-center justify-between w-full p-5 text-left transition-colors duration-200",
          isOpen ? "bg-sunrise-50/80" : "bg-white/70 hover:bg-sunrise-50/40"
        )}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="font-medium text-foreground">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-sunrise-500">
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
            <div className="p-5 bg-white/80 border-t border-sunrise-100">
              <p className="text-muted-foreground">{answer}</p>
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
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sunrise-400/20 text-sunrise-900 mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Common Questions About Our Services
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about our mental health services, appointments, and insurance.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-10 bg-white/70 p-6 rounded-lg border border-sunrise-100/80 shadow-sm warm-glow">
          <h3 className="text-lg font-medium mb-3 text-center">Still have questions?</h3>
          <p className="text-muted-foreground mb-4 text-center">
            If you couldn't find the answer to your question, please feel free to contact us.
            Our friendly staff is here to help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+18146202162" className="btn-sunrise-outline text-sm">
              Call Us at (814) 620-2162
            </a>
            <a href="mailto:info@sunrisehcsllc.com" className="btn-sunrise text-sm">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
