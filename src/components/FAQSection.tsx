
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
    <div className="border border-border rounded-lg overflow-hidden mb-4">
      <button
        className={cn(
          "flex items-center justify-between w-full p-5 text-left bg-card hover:bg-accent/30 transition-colors duration-200",
          isOpen && "bg-accent/50"
        )}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="font-medium text-foreground">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-muted-foreground">
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
            <div className="p-5 bg-background border-t border-border">
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
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
      
      <div>
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
      
      <div className="bg-secondary p-6 rounded-lg border border-border">
        <h3 className="text-lg font-medium mb-3">Still have questions?</h3>
        <p className="text-muted-foreground mb-4">
          If you couldn't find the answer to your question, please feel free to contact us.
          Our friendly staff is here to help.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="tel:+18146202162" className="btn-sunrise-outline text-sm">
            Call Us at (814) 620-2162
          </a>
          <a href="mailto:info@sunrisehcsllc.com" className="btn-sunrise text-sm">
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
