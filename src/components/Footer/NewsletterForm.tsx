
import React, { useState } from 'react';
import { toast } from 'sonner';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // This would connect to your newsletter service in production
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error submitting newsletter form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Newsletter</h3>
      <p className="text-sm text-muted-foreground">
        Subscribe to our newsletter for helpful mental health tips and updates.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow px-4 py-2 text-sm rounded-md border border-sunrise-200/70 bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50"
          required
        />
        <button
          type="submit"
          className="bg-sunrise-500 hover:bg-sunrise-600 text-white font-medium py-2 px-4 text-sm rounded-md transition-colors duration-300 whitespace-nowrap disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
