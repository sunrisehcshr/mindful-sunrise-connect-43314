import React from 'react';
import FAQItem from './FAQItem';
const FAQSection: React.FC = () => {
  const faqs = [{
    question: "What mental health services do you offer at your Darby, PA clinic?",
    answer: "We provide comprehensive mental health services, including individual therapy, couple Counseling, group therapy, family counseling, psychiatric evaluations, and medication management. Our team addresses various conditions such as anxiety, depression, PTSD, and substance use disorders."
  }, {
    question: "Which insurance plans are currently accepted at your Darby clinic?",
    answer: "We currently accept Medicaid for our mental health services. We understand the importance of accessible care and are committed to serving the Medicaid community with quality mental health treatment."
  }, {
    question: "How do I know if I need to seek help from a mental health professional?",
    answer: "If you're experiencing persistent feelings of sadness, anxiety, anger, or if these emotions interfere with daily activities and relationships, it may be beneficial to consult a mental health professional."
  }, {
    question: "What should I expect during my first visit to your clinic?",
    answer: "During your initial visit, our clinicians will conduct a comprehensive assessment to understand your mental health needs. This evaluation helps us create a personalized treatment plan tailored to your specific goals and concerns."
  }, {
    question: "How do I schedule an appointment at your Darby clinic?",
    answer: "To schedule an appointment, please contact our office directly via phone or through our website's appointment request form. Our team will guide you through the process and address any questions you may have."
  }, {
    question: "Do you offer virtual therapy sessions?",
    answer: "Yes, we offer virtual therapy sessions for individuals who prefer remote care. Our telehealth services provide a secure and convenient way to access therapy from the comfort of your home. Contact us to learn more about availability and scheduling."
  }, {
    question: "What steps should I take if I or someone I know is in crisis?",
    answer: "If you or someone you know is struggling or in crisis, help is available. Call or text 988 to speak with a trained crisis counselor any time of day or night."
  }];
  return <section id="faq" className="py-20 bg-inherit">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs bg-orange-500 mb-4 text-white font-semibold">
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
          {faqs.map((faq, index) => <FAQItem key={index} faq={faq} />)}
        </div>
      </div>
    </section>;
};
export default FAQSection;