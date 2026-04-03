"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import TeamMemberCard from '@/components/team/TeamMemberCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import FAQSection from '@/components/FAQSection';
import { toast } from 'sonner';
import { appointmentFormSchema } from '@/lib/formValidation';
import { useFormProtection } from '@/hooks/useFormProtection';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Conversion tracking helper
const trackConversion = (eventName: string, eventParams?: object) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

export default function MedicaidLandingPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    preferredDateTime: '',
    serviceInterest: '' as 'Counseling' | 'Psychiatric Consultation' | 'General Inquiry' | '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { honeypot, setHoneypot, validateSubmission } = useFormProtection();

  // Track page view on component mount
  useEffect(() => {
    trackConversion('page_view', {
      page_title: 'Medicaid Mental Health Services',
      page_location: window.location.href,
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validation = validateSubmission();
      if (!validation.valid) {
        toast.error(validation.error || 'Submission blocked');
        setIsSubmitting(false);
        return;
      }

      const validatedData = appointmentFormSchema.parse({
        ...formData,
        honeypot
      });

      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'appointment',
          data: validatedData,
        }),
      });

      const json = await response.json().catch(() => null);

      if (response.ok && json?.ok) {
        // Track conversion
        trackConversion('form_submit', {
          form_name: 'medicaid_appointment_request',
          service_interest: formData.serviceInterest,
        });
        
        toast.success('Request submitted successfully! We\'ll contact you soon.');
        setFormData({
          firstName: '',
          email: '',
          phone: '',
          preferredDateTime: '',
          serviceInterest: '',
        });
      } else {
        toast.error('Failed to submit request. Please try again.');
      }
    } catch (error) {
      toast.error('Please check your information and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-stone-50">
        <Navbar />
        <main className="flex-grow pt-24">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70 mb-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-amber-100 shadow-sm">
                    Medicaid Accepted
                  </span>
                  <h1 className="font-barlow font-bold text-3xl md:text-5xl lg:text-6xl text-stone-800 tracking-tight leading-tight mb-6">
                    Compassionate Mental Health Care
                    <span className="block font-instrument-serif italic text-amber-700/70 font-normal">for Everyone</span>
                  </h1>
                  <p className="text-lg text-stone-600 font-barlow mb-8 leading-relaxed max-w-xl">
                    At Sunrise Human Care Services, we believe quality mental health care should be accessible. We proudly accept Medicaid for therapy, counseling, and psychiatric services in Darby, PA.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100"
                >
                  <h2 className="font-barlow font-bold text-2xl text-stone-800 mb-6">Schedule Your Appointment</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 font-barlow mb-1">Full Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all font-barlow text-stone-800 bg-stone-50/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-stone-700 font-barlow mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all font-barlow text-stone-800 bg-stone-50/50"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-stone-700 font-barlow mb-1">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all font-barlow text-stone-800 bg-stone-50/50"
                          placeholder="(555) 000-0000"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="serviceInterest" className="block text-sm font-medium text-stone-700 font-barlow mb-1">Service Interested In</label>
                      <select
                        id="serviceInterest"
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all font-barlow text-stone-800 bg-stone-50/50"
                      >
                        <option value="">Select a service</option>
                        <option value="Counseling">Counseling / Therapy</option>
                        <option value="Psychiatric Consultation">Psychiatric Consultation</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    <input
                      type="text"
                      name="honeypot"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-barlow font-medium py-4 rounded-xl transition-all h-auto text-base"
                    >
                      {isSubmitting ? 'Sending Request...' : 'Request Appointment'}
                    </Button>
                    <p className="text-center text-xs text-stone-500 font-barlow mt-4">
                      We accept Pennsylvania Medicaid and other major insurance plans.
                    </p>
                  </form>
                </motion.div>
              </div>
            </div>
          </section>

          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
