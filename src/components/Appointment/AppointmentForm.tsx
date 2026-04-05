"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { appointmentFormSchema } from '@/lib/formValidation';
import { useFormProtection } from '@/hooks/useFormProtection';
import { cn } from "@/lib/utils";

import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Calendar, MessageSquare, ChevronRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { z } from 'zod';

const AppointmentForm = () => {
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
    // Clear error when user starts typing
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
      // Spam protection
      const validation = validateSubmission();
      if (!validation.valid) {
        toast.error(validation.error || 'Submission blocked');
        setIsSubmitting(false);
        return;
      }

      // Validate form data with Zod
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
        toast.error("Please correct the errors in the form.");
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
        
        // Reset success state after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        toast.error('Failed to submit request. Please try again.');
      }
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (fieldName: string) => cn(
    "w-full bg-stone-50 border transition-all duration-300 rounded-2xl px-12 py-3.5 font-barlow text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20",
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
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center py-8 text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-barlow font-bold text-stone-900 mb-2">Thank you for reaching out</h3>
            <p className="text-stone-700 font-barlow text-lg max-w-sm mb-4">
              Our team will contact you within 24 hours to help you start your journey.
            </p>
            
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 max-w-sm mb-6 flex gap-3 items-start text-left" role="alert" aria-live="polite">
              <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-stone-900 font-bold text-xs uppercase tracking-wider mb-1">Important Notice</p>
                <p className="text-stone-500 font-barlow text-[13px] leading-relaxed">
                  This is not an appointment confirmation. Our clinical team will contact you to verify details and confirm your specific time slot.
                </p>
              </div>
            </div>

            <Button 
              onClick={() => setIsSuccess(false)}
              className="bg-stone-900 hover:bg-stone-800 text-white rounded-full px-8 py-4 font-barlow font-bold transition-all hover:scale-105 active:scale-95"
            >
              Send another request
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="honeypot"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Field */}
              <div className="space-y-1 group">
                <Label htmlFor="firstName" className="text-[11px] font-bold text-stone-900 ml-1 font-barlow uppercase tracking-wider">First Name *</Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400 group-focus-within:text-orange-500 transition-colors" />
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    autoComplete="name"
                    className={inputClasses('firstName')}
                  />
                </div>
                {errors.firstName && <p className="text-red-500 text-[10px] mt-1 ml-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.firstName}</p>}
              </div>

              {/* Email Field */}
              <div className="space-y-1 group">
                <Label htmlFor="email" className="text-[11px] font-bold text-stone-900 ml-1 font-barlow uppercase tracking-wider">Email Address *</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400 group-focus-within:text-orange-500 transition-colors" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    autoComplete="email"
                    className={inputClasses('email')}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Phone Field */}
              <div className="space-y-1 group">
                <Label htmlFor="phone" className="text-[11px] font-bold text-stone-900 ml-1 font-barlow uppercase tracking-wider">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400 group-focus-within:text-orange-500 transition-colors" />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    autoComplete="tel"
                    className={inputClasses('phone')}
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-[10px] mt-1 ml-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.phone}</p>}
              </div>

              {/* Date/Time Field */}
              <div className="space-y-1 group">
                <Label htmlFor="preferredDateTime" className="text-[11px] font-bold text-stone-900 ml-1 font-barlow uppercase tracking-wider">Preferred Time *</Label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400 group-focus-within:text-orange-500 transition-colors pointer-events-none" />
                  <input
                    id="preferredDateTime"
                    name="preferredDateTime"
                    type="text"
                    required
                    value={formData.preferredDateTime}
                    onChange={handleChange}
                    placeholder="e.g. Next Monday morning"
                    autoComplete="off"
                    className={inputClasses('preferredDateTime')}
                  />
                </div>
                {errors.preferredDateTime && <p className="text-red-500 text-[10px] mt-1 ml-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.preferredDateTime}</p>}
              </div>
            </div>

            {/* Service Interest Field */}
            <div className="space-y-1 group">
              <Label htmlFor="serviceInterest" className="text-[11px] font-bold text-stone-900 ml-1 font-barlow uppercase tracking-wider">Service Interest *</Label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400 group-focus-within:text-orange-500 transition-colors pointer-events-none" />
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  required
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  autoComplete="off"
                  className={cn(
                    inputClasses('serviceInterest'),
                    "appearance-none"
                  )}
                >
                  <option value="" disabled>Select a service interest</option>
                  <option value="Counseling">Counseling</option>
                  <option value="Psychiatric Consultation">Psychiatric Consultation</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronRight className="h-5 w-5 text-stone-400 rotate-90" />
                </div>
              </div>
              {errors.serviceInterest && <p className="text-red-500 text-[10px] mt-1 ml-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.serviceInterest}</p>}
            </div>

            <div className="bg-stone-50 rounded-[1.25rem] p-3.5 border border-stone-100 flex gap-3 items-start">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 className="h-3 w-3 text-green-600" />
              </div>
              <p className="text-[11px] text-stone-500 font-barlow leading-relaxed">
                <span className="font-bold text-stone-700">100% Confidential:</span> Your information is secure. Our team will contact you within 24 hours to schedule your session.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full group relative overflow-hidden bg-orange-500 hover:bg-orange-600 text-stone-50 font-barlow font-bold rounded-2xl py-8 transition-all duration-300 shadow-xl shadow-orange-500/20 disabled:opacity-70 disabled:cursor-not-allowed",
                isSubmitting && "animate-pulse"
              )}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                {isSubmitting ? 'Sending Request…' : 'Request My Appointment'}
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            <p className="text-center text-[10px] text-stone-400 font-barlow mt-2">
              No commitment required. Medicaid and private pay accepted.
            </p>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AppointmentForm;
