
import React from 'react';

interface FAQProps {
  faq: {
    question: string;
    answer: string;
  };
}

const FAQItem: React.FC<FAQProps> = ({ faq }) => {
  return (
    <div className="py-6">
      <h3 className="text-lg font-medium mb-3">
        {faq.question}
      </h3>
      <p className="text-muted-foreground">
        {faq.answer}
      </p>
    </div>
  );
};

export default FAQItem;
