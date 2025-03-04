
import React from 'react';
import FAQItem from './FAQItem';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What types of mental health issues do you treat?",
      answer: "We provide treatment for a wide range of mental health concerns including anxiety, depression, trauma, PTSD, relationship issues, grief, stress management, and more. Our team is experienced in working with individuals of all ages, from children to seniors."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, and Medicare. We also offer affordable self-pay options for those without insurance coverage. Please contact our office to verify your specific insurance benefits."
    },
    {
      question: "How long are therapy sessions?",
      answer: "Typical therapy sessions are 50 minutes in length, which is the standard for most mental health services. Initial evaluations may be longer, usually around 60-90 minutes, to allow for a comprehensive assessment of your needs."
    },
    {
      question: "How do I know if I need therapy?",
      answer: "If you're experiencing persistent feelings of sadness, anxiety, or overwhelm, having difficulty managing daily life, struggling with relationships, or facing challenging life transitions, therapy might be beneficial. We offer free 15-minute consultations to help determine if our services are right for you."
    },
    {
      question: "Is therapy confidential?",
      answer: "Yes, confidentiality is a fundamental part of the therapeutic relationship. What you share in therapy is protected by law and ethical standards. There are some legal limitations to confidentiality, such as situations involving risk of harm to yourself or others, which your therapist will discuss with you during your first session."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
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
        
        <div className="max-w-3xl mx-auto divide-y divide-border">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
