
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of mental health services do you offer?",
    answer: "We offer a comprehensive range of mental health services, including individual therapy, couples counseling, family therapy, group therapy, child and adolescent therapy, psychiatric evaluation, and medication management. Our therapeutic approaches include cognitive-behavioral therapy (CBT), dialectical behavior therapy (DBT), trauma-focused therapy, and more."
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major insurance plans, including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and Medicare. We also offer self-pay options and sliding scale fees for those without insurance coverage. Please contact our office to verify your specific insurance benefits."
  },
  {
    question: "How do I schedule an appointment?",
    answer: "You can schedule an appointment by calling our office at (215) 555-1234, using our online booking system on our website, or emailing us at info@sunrisehcs.com. We typically respond to all appointment requests within 24 business hours."
  },
  {
    question: "What can I expect during my first therapy session?",
    answer: "Your first session will primarily be an assessment where your therapist will gather information about your history, current concerns, and goals for therapy. It's an opportunity for you to ask questions and determine if the therapist is a good fit for your needs. The session typically lasts about 50-60 minutes."
  },
  {
    question: "Do you offer telehealth/virtual appointments?",
    answer: "Yes, we offer secure video telehealth appointments for most of our services. Telehealth is a convenient option that provides the same quality care as in-person sessions while allowing you to attend from the comfort of your home."
  },
  {
    question: "How long does therapy typically last?",
    answer: "The duration of therapy varies widely depending on your specific needs, goals, and the complexity of your concerns. Some clients benefit from short-term therapy (8-12 sessions), while others may engage in longer-term treatment. Your therapist will discuss treatment recommendations during your initial sessions."
  },
  {
    question: "Is everything I share in therapy confidential?",
    answer: "Yes, confidentiality is a fundamental part of the therapeutic relationship. However, there are legal limits to confidentiality, including situations involving risk of harm to yourself or others, suspicion of abuse of children or vulnerable adults, or if records are subpoenaed by a court. Your therapist will discuss these limitations in detail during your first session."
  },
  {
    question: "What are your cancellation policies?",
    answer: "We require 24 hours' notice for cancellation of appointments. Late cancellations or missed appointments without proper notice may result in a fee that is not covered by insurance. We understand that emergencies happen, and these situations are handled on a case-by-case basis."
  },
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
          <a href="tel:+12155551234" className="btn-sunrise-outline text-sm">
            Call Us at (215) 555-1234
          </a>
          <a href="mailto:info@sunrisehcs.com" className="btn-sunrise text-sm">
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
