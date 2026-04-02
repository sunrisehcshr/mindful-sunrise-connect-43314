"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      toast.error(result.error.issues[0]?.message || "Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'newsletter',
          data: { email, honeypot },
        }),
      });
      const json = await response.json().catch(() => null);
      
      if (response.ok && json?.ok) {
        toast.success('Your path to peace begins now. Our team will contact you within 24 hours.', {
          duration: 6000,
          description: 'This is not an appointment confirmation. Our clinical team will contact you to verify details and confirm your specific time slot.',
        });
        setEmail("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
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
        <motion.button 
          whileTap={{ scale: 0.96 }}
          type="submit" 
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-barlow font-bold py-2.5 px-4 text-sm rounded-full transition-all duration-300 whitespace-nowrap disabled:opacity-70 shadow-md shadow-orange-600/10" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </motion.button>
      </form>
    </div>
  );
};

export default NewsletterForm;
