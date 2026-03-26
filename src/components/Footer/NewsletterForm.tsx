
import React, { useState } from 'react';
import { toast } from 'sonner';
import { useFormProtection } from '@/hooks/useFormProtection';
import { newsletterFormSchema } from '@/lib/formValidation';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { honeypot, setHoneypot, validateSubmission } = useFormProtection({ 
    requireRecaptcha: false,
    checkContent: false 
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateSubmission();
    if (!validation.valid) return;

    const result = newsletterFormSchema.safeParse({ email, honeypot });
    if (!result.success) {
      toast.error(result.error.errors[0]?.message || "Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const formData = {
        email: email,
        _subject: "Newsletter Subscription",
        _cc: "info@sunrisehumancare.com"
      };
      
      const response = await fetch("https://formspree.io/f/xzzeaeql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        toast.success("Thank you for subscribing to our newsletter!");
        setEmail("");
      } else {
        console.error("Newsletter form submission failed:", await response.text());
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error submitting newsletter form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="space-y-3">
      <p className="text-xs sm:text-sm text-stone-500 font-barlow">
        Subscribe to our newsletter for helpful mental health tips and updates.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }} aria-hidden="true" />
        <input 
          type="email" 
          placeholder="Your email address" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          className="flex-grow px-3 py-1.5 text-xs rounded-lg border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 font-barlow" 
          required 
        />
        <button 
          type="submit" 
          className="bg-[#222] hover:bg-zinc-800 text-white font-barlow font-medium py-1.5 px-3 text-xs rounded-full transition-colors duration-300 whitespace-nowrap disabled:opacity-70" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
