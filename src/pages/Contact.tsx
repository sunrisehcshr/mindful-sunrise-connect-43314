
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';
import { Mail, Phone, MapPin, Clock, Hospital, Video } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { useFormProtection } from '@/hooks/useFormProtection';
import { appointmentFormSchema } from '@/lib/formValidation';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    preferredDateTime: '',
    serviceInterest: '' as 'Counselling' | 'Psychiatric Consultation' | 'General Inquiry' | '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { honeypot, setHoneypot, validateSubmission } = useFormProtection({ 
    requireRecaptcha: false,
    checkContent: true 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Spam protection
      const validation = validateSubmission();
      if (!validation.valid) {
        toast.error(validation.error || 'Submission blocked');
        setIsSubmitting(false);
        return;
      }

      // Validate form data
      const validatedData = appointmentFormSchema.parse({
        ...formData,
        honeypot
      });

      const response = await fetch('https://formspree.io/f/xzzeaeql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });

      if (response.ok) {
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
        title="Contact Our Mental Health Clinic | Sunrise Human Care Services Havertown"
        description="Reach our mental health team in Havertown, PA. Phone: (814) 620-2162. Located at 2050 West Chester Pike. In-person and telehealth appointments available. Easy online contact form. Medicaid accepted."
        canonicalUrl="https://sunrisehumancare.com/contact"
        keywords="contact therapist Havertown, mental health clinic address, therapy phone number, counseling office hours, psychiatrist directions, telehealth therapy consultation"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          {/* Hero Section */}
          <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-r from-amber-500 to-orange-400 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto text-center"
              >
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
                <p className="text-white/90 text-lg mb-0">
                  We're here to help you on your mental health journey. Reach out to us today.
                </p>
              </motion.div>
            </div>
          </section>
          
          {/* Map Section */}
          <section className="py-12 bg-gradient-to-b from-amber-50 to-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-md border border-amber-200 mb-12">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.42270663133!2d-75.3343826!3d39.97665800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c19c8aaf0c5f%3A0xda74d062dc04cad0!2sSunrise%20Human%20Care%20Services!5e0!3m2!1sen!2sus!4v1743301383826!5m2!1sen!2sus" 
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
          
          {/* Contact Info & Form Section */}
          <section className="py-12 bg-white">
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
                    <h2 className="text-2xl font-bold text-amber-900 mb-4">Get In Touch</h2>
                    <Separator className="w-24 bg-gradient-to-r from-amber-300 to-orange-400 h-0.5 mb-6" />
                    
                    <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border border-amber-200 shadow-sm hover:shadow-md transition-shadow duration-300 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-100 p-3 rounded-full text-orange-500">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-amber-900">Phone</h3>
                          <p className="text-amber-700">(814) 620-2162</p>
                          <a href="tel:+18146202162" className="text-sm text-orange-500 hover:text-orange-600 font-medium mt-1 inline-block">
                            Call us now
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-100 p-3 rounded-full text-orange-500">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-amber-900">Email</h3>
                          <p className="text-amber-700">info@sunrisehumancare.com</p>
                          <a href="mailto:info@sunrisehumancare.com" className="text-sm text-orange-500 hover:text-orange-600 font-medium mt-1 inline-block">
                            Send an email
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-100 p-3 rounded-full text-orange-500">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-amber-900">Address</h3>
                          <p className="text-amber-700">2050 West Chester Pike</p>
                          <p className="text-amber-700">Havertown, PA 19083</p>
                          <a 
                            href="https://maps.app.goo.gl/5Bop8fKVPk1i61Ss6" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-orange-500 hover:text-orange-600 font-medium mt-1 inline-block"
                          >
                            Get directions
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-100 p-3 rounded-full text-orange-500">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-amber-900">Hours</h3>
                          <p className="text-amber-700">Monday - Friday: 9am - 5pm</p>
                          <p className="text-amber-700">Saturday & Sunday: Closed</p>
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
                    <h2 className="text-2xl font-bold text-amber-900 mb-4">Send a Message</h2>
                    <Separator className="w-24 bg-gradient-to-r from-amber-300 to-orange-400 h-0.5 mb-6" />
                    
                    <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border border-amber-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Honeypot field - hidden from users */}
                        <input
                          type="text"
                          name="website"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                          tabIndex={-1}
                          autoComplete="off"
                          style={{
                            position: 'absolute',
                            left: '-9999px',
                            width: '1px',
                            height: '1px',
                            opacity: 0
                          }}
                          aria-hidden="true"
                        />
                        <div>
                          <label htmlFor="firstName" className="block text-amber-800 text-sm mb-1">First Name*</label>
                          <input 
                            type="text" 
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full p-2.5 text-sm border border-amber-200 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white/70"
                            placeholder="Enter your first name"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="email" className="block text-amber-800 text-sm mb-1">Email*</label>
                            <input 
                              type="email" 
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full p-2.5 text-sm border border-amber-200 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white/70"
                              placeholder="your.email@example.com"
                              required
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="phone" className="block text-amber-800 text-sm mb-1">Phone Number (Optional)</label>
                            <input 
                              type="tel" 
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full p-2.5 text-sm border border-amber-200 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white/70"
                              placeholder="(123) 456-7890"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="preferredDateTime" className="block text-amber-800 text-sm mb-1">Preferred Date or Time</label>
                          <input 
                            type="text" 
                            id="preferredDateTime"
                            name="preferredDateTime"
                            value={formData.preferredDateTime}
                            onChange={handleChange}
                            className="w-full p-2.5 text-sm border border-amber-200 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white/70"
                            placeholder="e.g., Next Tuesday afternoon, or any weekday morning"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="serviceInterest" className="block text-amber-800 text-sm mb-1">Service Interest*</label>
                          <select
                            id="serviceInterest"
                            name="serviceInterest"
                            required
                            value={formData.serviceInterest}
                            onChange={handleChange}
                            className="w-full p-2.5 text-sm border border-amber-200 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white/70"
                          >
                            <option value="">Select a service</option>
                            <option value="Counselling">Counselling</option>
                            <option value="Psychiatric Consultation">Psychiatric Consultation</option>
                            <option value="General Inquiry">General Inquiry</option>
                          </select>
                        </div>
                        
                        <div className="text-sm text-amber-900 bg-amber-50 p-3 rounded-md border border-amber-200">
                          This form is for general scheduling and inquiries only. Please do not include personal health details.
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium py-2.5 px-4 rounded-md transition-colors"
                          disabled={isSubmitting}
                        >
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
