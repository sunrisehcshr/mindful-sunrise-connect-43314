"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import SEOHead from '@/components/SEOHead';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useFormProtection } from '@/hooks/useFormProtection';
import { appointmentFormSchema } from '@/lib/formValidation';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    preferredDateTime: '',
    serviceInterest: '' as 'Counseling' | 'Psychiatric Consultation' | 'General Inquiry' | '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { honeypot, setHoneypot, validateSubmission } = useFormProtection({ 
    requireRecaptcha: false,
    checkContent: true 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validation = validateSubmission();
      if (!validation.valid) {
        toast.error(validation.error || 'Submission blocked');
        setIsSubmitting(false);
        return;
      }

      const validatedData = appointmentFormSchema.parse({ ...formData, honeypot });

      const response = await fetch('https://formspree.io/f/xzzeaeql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validatedData),
      });

      if (response.ok) {
        toast.success('Request submitted successfully! We\'ll contact you soon.');
        setFormData({ firstName: '', email: '', phone: '', preferredDateTime: '', serviceInterest: '' });
      } else {
        toast.error('Failed to submit request. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Please check your information and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Our Mental Health Clinic | Sunrise Human Care Services Darby"
        description="Reach our mental health team in Darby, PA. Phone: (814) 620-2162. Located at 869 Main Street. In-person and telehealth appointments available. Easy online contact form. Medicaid accepted."
        canonicalUrl="https://sunrisehumancare.com/contact"
        keywords="contact therapist Darby, mental health clinic address, therapy phone number, counseling office hours, psychiatrist directions, telehealth therapy consultation"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-28 bg-[#faf8f4]">
          {/* Hero */}
          <section className="py-16 md:py-20 bg-[#f0ece4]">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto text-center"
              >
                <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70 mb-4">Get In Touch</span>
                <h1 className="font-barlow font-bold text-3xl md:text-4xl lg:text-5xl text-stone-800 tracking-tight leading-tight mb-4">
                  Contact
                  <span className="block font-instrument-serif italic text-amber-700/70 font-normal">us</span>
                </h1>
                <p className="text-stone-600 text-lg font-barlow">
                  We&apos;re here to help you on your mental health journey. Reach out to us today.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Content */}
          <section className="py-20 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Contact Information */}
                <div className="space-y-12">
                  <div>
                    <h2 className="font-barlow font-bold text-2xl text-stone-800 mb-8">Office Information</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {/* Address */}
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 shrink-0">
                          <MapPin className="h-6 w-6 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-barlow font-semibold text-stone-800 mb-1">Our Location</h3>
                          <p className="text-stone-600 font-barlow text-sm leading-relaxed">
                            869 Main Street,<br />
                            Darby, PA 19023
                          </p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 shrink-0">
                          <Phone className="h-6 w-6 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-barlow font-semibold text-stone-800 mb-1">Phone Number</h3>
                          <a href="tel:+18146202162" className="text-stone-600 hover:text-amber-600 transition-colors font-barlow text-sm leading-relaxed">
                            (814) 620-2162
                          </a>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 shrink-0">
                          <Mail className="h-6 w-6 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-barlow font-semibold text-stone-800 mb-1">Email Us</h3>
                          <a href="mailto:info@sunrisehumancare.com" className="text-stone-600 hover:text-amber-600 transition-colors font-barlow text-sm leading-relaxed">
                            info@sunrisehumancare.com
                          </a>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 shrink-0">
                          <Clock className="h-6 w-6 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-barlow font-semibold text-stone-800 mb-1">Office Hours</h3>
                          <p className="text-stone-600 font-barlow text-sm leading-relaxed">
                            Mon - Fri: 9am - 5pm<br />
                            Sat & Sun: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <div className="rounded-3xl overflow-hidden bg-stone-200 aspect-video relative group">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.7513337039014!2d-75.2612344!3d39.9184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c19149463283%3A0xc62263152504859a!2s869%20Main%20St%2C%20Darby%2C%20PA%2019023!5e0!3m2!1sen!2sus!4v1709224400000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
                  <h2 className="font-barlow font-bold text-2xl text-stone-800 mb-8">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-stone-700 font-barlow">First Name</label>
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
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-stone-700 font-barlow">Email Address</label>
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
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-stone-700 font-barlow">Phone Number</label>
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
                      <div className="space-y-2">
                        <label htmlFor="serviceInterest" className="text-sm font-medium text-stone-700 font-barlow">Service Interested In</label>
                        <select
                          id="serviceInterest"
                          name="serviceInterest"
                          value={formData.serviceInterest}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all font-barlow text-stone-800 bg-stone-50/50"
                        >
                          <option value="">Select a service</option>
                          <option value="Counseling">Counseling</option>
                          <option value="Psychiatric Consultation">Psychiatric Consultation</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="preferredDateTime" className="text-sm font-medium text-stone-700 font-barlow">Preferred Date/Time</label>
                      <input
                        type="text"
                        id="preferredDateTime"
                        name="preferredDateTime"
                        value={formData.preferredDateTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all font-barlow text-stone-800 bg-stone-50/50"
                        placeholder="e.g. Monday afternoon"
                      />
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
                      className="w-full bg-[#222] hover:bg-stone-800 text-white font-barlow font-medium py-4 rounded-xl transition-all h-auto text-base mt-4"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
