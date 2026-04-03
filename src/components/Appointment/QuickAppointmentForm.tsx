"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { appointmentFormSchema } from '@/lib/formValidation';
import { useFormProtection } from '@/hooks/useFormProtection';

import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Calendar, MessageSquare, ChevronRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const QuickAppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    preferredDateTime: '',
    serviceInterest: '' as 'Counseling' | 'Psychiatric Consultation' | 'General Inquiry' | '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { honeypot, setHoneypot, validateSubmission } = useFormProtection();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validation = validateSubmission();
      if (!validation.valid) {
        toast.error(validation.error || 'Submission blocked');
        setIsSubmitting(false);
        return;
      }

      const result = appointmentFormSchema.safeParse({
        ...formData,
        honeypot
      });

      if (!result.success) {
        const formattedErrors: Record<string, string> = {};
        result.error.issues.forEach((issue) => {
          if (issue.path[0]) {
            formattedErrors[issue.path[0].toString()] = issue.message;
          }
        });
        setErrors(formattedErrors);
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'appointment',
          data: result.data,
        }),
      });

      const json = await response.json().catch(() => null);

      if (response.ok && json?.ok) {
        setIsSuccess(true);
        // Ogilvy-style success toast: Benefit-driven and specific
        toast.success('Your path to peace begins now. Our specialist will contact you within 24 hours.', {
          duration: 6000,
        });
        setFormData({
          firstName: '',
          email: '',
          phone: '',
          preferredDateTime: '',
          serviceInterest: '',
        });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        toast.error('Failed to submit request.');
      }
    } catch (error) {
      toast.error('An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (fieldName: string) => cn(
    "w-full bg-stone-50 border transition-all duration-300 rounded-xl px-10 py-3 font-barlow text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20",
    errors[fieldName] 
      ? "border-red-300 bg-red-50/30 focus:border-red-500" 
      : "border-stone-200 focus:border-orange-500"
  );

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-8 text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-barlow font-bold text-stone-900 mb-1">Thank you for reaching out</h3>
            <p className="text-stone-700 font-barlow text-sm mb-4">
              Our team will contact you within 24 hours to help you start your journey.
            </p>
            
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 mb-4 flex gap-2 items-start text-left" role="alert" aria-live="polite">
              <AlertCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              <p className="text-stone-500 font-barlow text-[11px] leading-relaxed">
                <span className="text-stone-900 font-bold uppercase tracking-wider block mb-0.5">Notice</span>
                This is not an appointment confirmation. Our team will contact you to verify and confirm your specific time slot.
              </p>
            </div>

            <button 
              onClick={() => setIsSuccess(false)}
              className="text-stone-500 hover:text-orange-600 font-barlow text-[10px] font-bold uppercase tracking-widest transition-colors"
            >
              Send another request
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="honeypot" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" />
            
            <div className="space-y-1">
              <Label htmlFor="firstName" className="text-xs font-bold text-stone-900 ml-1 font-barlow uppercase">Name *</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                <input id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange} placeholder="John Doe" autoComplete="name" className={inputClasses('firstName')} />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="email" className="text-xs font-bold text-stone-900 ml-1 font-barlow uppercase">Email *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" autoComplete="email" className={inputClasses('email')} />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="phone" className="text-xs font-bold text-stone-900 ml-1 font-barlow uppercase">Phone</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(123) 456-7890" autoComplete="tel" className={inputClasses('phone')} />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="preferredDateTime" className="text-xs font-bold text-stone-900 ml-1 font-barlow uppercase">Preferred Time *</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 pointer-events-none" />
                <input id="preferredDateTime" name="preferredDateTime" type="text" required value={formData.preferredDateTime} onChange={handleChange} placeholder="e.g. Next Monday" autoComplete="off" className={inputClasses('preferredDateTime')} />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="serviceInterest" className="text-xs font-bold text-stone-900 ml-1 font-barlow uppercase">Service *</Label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 pointer-events-none" />
                <select id="serviceInterest" name="serviceInterest" required value={formData.serviceInterest} onChange={handleChange} autoComplete="off" className={cn(inputClasses('serviceInterest'), "appearance-none")}>
                  <option value="" disabled>Select a service</option>
                  <option value="Counseling">Counseling</option>
                  <option value="Psychiatric Consultation">Psychiatric Consultation</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
                <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 rotate-90 pointer-events-none" />
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-3 border border-orange-100 flex gap-2 items-start">
              <AlertCircle className="h-3 w-3 text-orange-500 mt-0.5 flex-shrink-0" />
              <p className="text-[10px] text-orange-700 font-barlow leading-tight">
                For your privacy, please do not include personal health details.
              </p>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-barlow font-bold rounded-xl py-6 shadow-lg shadow-orange-600/20">
              {isSubmitting ? 'Sending...' : 'Schedule Now'}
            </Button>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuickAppointmentForm;
