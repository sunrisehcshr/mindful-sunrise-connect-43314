
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useFormProtection } from '@/hooks/useFormProtection';
import { appointmentFormSchema } from '@/lib/formValidation';

const Contact = () => {
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
                  We're here to help you on your mental health journey. Reach out to us today.
                </p>
              </motion.div>
            </div>
          </section>
          
          {/* Map */}
          <section className="py-12 bg-[#faf8f4]">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-md border border-stone-200/80 mb-12">
                  <iframe 
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=869+Main+Street,+Darby,+PA+19023&zoom=15" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sunrise Human Care Services Google Maps"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
          
          {/* Contact Info & Form */}
          <section className="py-12 bg-[#faf8f4]">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <h2 className="font-barlow font-bold text-2xl text-stone-800">Get In Touch</h2>
                    
                    <div className="bg-white p-6 rounded-2xl border border-stone-200/80 space-y-4">
                      {[
                        { icon: <Phone className="h-5 w-5" />, label: "Phone", value: "(814) 620-2162", link: "tel:+18146202162", linkText: "Call us now" },
                        { icon: <Mail className="h-5 w-5" />, label: "Email", value: "info@sunrisehumancare.com", link: "mailto:info@sunrisehumancare.com", linkText: "Send an email" },
                        { icon: <MapPin className="h-5 w-5" />, label: "Address", value: "869 Main Street\nDarby, PA 19023", link: "https://www.google.com/maps/dir/?api=1&destination=869+Main+Street,+Darby,+PA+19023", linkText: "Get directions", external: true },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex-shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="font-barlow font-medium text-stone-800">{item.label}</h3>
                            <p className="text-stone-500 font-barlow whitespace-pre-line">{item.value}</p>
                            <a 
                              href={item.link} 
                              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                              className="text-sm text-amber-700 hover:text-amber-800 font-barlow font-medium mt-1 inline-block"
                            >
                              {item.linkText}
                            </a>
                          </div>
                        </div>
                      ))}
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex-shrink-0">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-barlow font-medium text-stone-800">Hours</h3>
                          <p className="text-stone-500 font-barlow">Monday - Friday: 9am - 5pm</p>
                          <p className="text-stone-500 font-barlow">Saturday & Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h2 className="font-barlow font-bold text-2xl text-stone-800 mb-4">Send a Message</h2>
                    
                    <div className="bg-white p-6 rounded-2xl border border-stone-200/80">
                      <form className="space-y-4" onSubmit={handleSubmit}>
                        <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }} aria-hidden="true" />
                        <div>
                          <label htmlFor="firstName" className="block text-stone-700 text-sm mb-1 font-barlow">First Name*</label>
                          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-2.5 text-sm border border-stone-200 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white font-barlow" placeholder="Enter your first name" required />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="email" className="block text-stone-700 text-sm mb-1 font-barlow">Email*</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2.5 text-sm border border-stone-200 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white font-barlow" placeholder="your.email@example.com" required />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-stone-700 text-sm mb-1 font-barlow">Phone Number (Optional)</label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2.5 text-sm border border-stone-200 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white font-barlow" placeholder="(123) 456-7890" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="preferredDateTime" className="block text-stone-700 text-sm mb-1 font-barlow">Preferred Date or Time</label>
                          <input type="text" id="preferredDateTime" name="preferredDateTime" value={formData.preferredDateTime} onChange={handleChange} className="w-full p-2.5 text-sm border border-stone-200 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white font-barlow" placeholder="e.g., Next Tuesday afternoon" />
                        </div>
                        <div>
                          <label htmlFor="serviceInterest" className="block text-stone-700 text-sm mb-1 font-barlow">Service Interest*</label>
                          <select id="serviceInterest" name="serviceInterest" required value={formData.serviceInterest} onChange={handleChange} className="w-full p-2.5 text-sm border border-stone-200 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-transparent bg-white font-barlow">
                            <option value="">Select a service</option>
                            <option value="Counseling">Counseling</option>
                            <option value="Psychiatric Consultation">Psychiatric Consultation</option>
                            <option value="General Inquiry">General Inquiry</option>
                          </select>
                        </div>
                        <div className="text-sm text-stone-600 bg-amber-50 p-3 rounded-lg border border-amber-100 font-barlow">
                          This form is for general scheduling and inquiries only. Please do not include personal health details.
                        </div>
                        <Button type="submit" className="w-full bg-[#222] hover:bg-zinc-800 text-white font-barlow font-medium rounded-full py-2.5" disabled={isSubmitting}>
                          {isSubmitting ? "Submitting..." : "Submit Request"}
                        </Button>
                      </form>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
