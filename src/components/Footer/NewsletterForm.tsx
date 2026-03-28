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
      <p className="text-sm text-stone-600 font-barlow leading-relaxed">
        Subscribe to our newsletter for helpful mental health tips and updates.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }} aria-hidden="true" />
        <input 
          type="email" 
          placeholder="Your email address" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-200 bg-stone-50 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400/30 font-barlow transition-all duration-300" 
          required 
        />
        <button 
          type="submit" 
          className="w-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-barlow font-semibold py-2.5 px-4 text-sm rounded-full transition-all duration-300 whitespace-nowrap disabled:opacity-70" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
