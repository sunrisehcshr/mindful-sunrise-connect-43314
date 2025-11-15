import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import { Phone, CheckCircle, Users, Calendar, Clock, Star, ArrowRight, Shield, Award } from 'lucide-react';
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

const MedicaidLanding = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    preferredDateTime: '',
    serviceInterest: '' as 'Counselling' | 'Psychiatric Consultation' | 'General Inquiry' | '',
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

      const response = await fetch('https://formspree.io/f/xzzeaeql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });

      if (response.ok) {
        // Track conversion
        trackConversion('form_submit', {
          form_name: 'medicaid_appointment_request',
          service_interest: formData.serviceInterest,
        });
        
        // Track Google Ads conversion
        trackConversion('conversion', {
          send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL', // Replace with your actual conversion ID
          value: 1.0,
          currency: 'USD'
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

  const handlePhoneClick = () => {
    trackConversion('phone_click', {
      method: 'phone_call',
    });
  };

  return (
    <>
      <Helmet>
        <title>Mental Health Care Covered by Medicaid | Sunrise Human Care Services</title>
        <meta name="description" content="Quality mental health therapy and psychiatry services covered by Medicaid in Havertown, PA. Book your appointment today - we accept Medicaid insurance." />
        
        {/* Google Ads Conversion Tracking - Replace CONVERSION_ID with your actual ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-CONVERSION_ID');
        `}</script>
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="section-padding relative overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mb-4">
                    <span className="section-tag">
                      <Shield className="inline-block w-3 h-3 mr-1" />
                      We Accept Medicaid
                    </span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                    Care you deserve,<br />
                    <span className="text-primary">covered by Medicaid</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                    Access quality mental health therapy and psychiatric services in Havertown, PA. 
                    No out-of-pocket costs with Medicaid coverage.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <a href="tel:8146202162" onClick={handlePhoneClick}>
                      <Button size="lg" className="w-full sm:w-auto gap-2">
                        <Phone className="w-4 h-4" />
                        Call: (814) 620-2162
                      </Button>
                    </a>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => {
                      document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' });
                      trackConversion('scroll_to_form', { method: 'button_click' });
                    }}>
                      Book Online
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>Medicaid Accepted</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>Same-Day Appointments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>Licensed Professionals</span>
                    </div>
                  </div>
                </motion.div>

                {/* Right Form */}
                <motion.div
                  id="appointment-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="warm-card p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Get Started Today</h2>
                    <p className="text-muted-foreground mb-6">Book your appointment in 60 seconds</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="text"
                        name="honeypot"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        style={{ display: 'none' }}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                      
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter your first name"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(123) 456-7890"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="serviceInterest">Service Interest *</Label>
                        <select
                          id="serviceInterest"
                          name="serviceInterest"
                          required
                          value={formData.serviceInterest}
                          onChange={handleChange}
                          className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select a service</option>
                          <option value="Counselling">Counselling</option>
                          <option value="Psychiatric Consultation">Psychiatric Consultation</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferredDateTime">Preferred Date or Time</Label>
                        <Input
                          id="preferredDateTime"
                          name="preferredDateTime"
                          type="text"
                          value={formData.preferredDateTime}
                          onChange={handleChange}
                          placeholder="e.g., Next Tuesday afternoon"
                          className="h-12"
                        />
                      </div>

                      <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
                        This form is for general scheduling and inquiries only. Please do not include personal health details.
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Book Appointment'}
                      </Button>
                    </form>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12 bg-white/50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Care you can count on
                </h2>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Users, value: '5,000+', label: 'Patients Served' },
                  { icon: Star, value: '4.9/5', label: 'Average Rating' },
                  { icon: Calendar, value: '15+', label: 'Active Providers' },
                  { icon: Clock, value: '24-48h', label: 'Appointment Wait' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="warm-card p-6 text-center hover:shadow-lg transition-shadow">
                      <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                      <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Getting Started Section */}
          <section className="section-padding">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <span className="section-tag">Simple Process</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
                  Getting started is simple
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Three easy steps to begin your mental health journey with Medicaid coverage
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    step: '1',
                    title: 'Book Your Appointment',
                    description: 'Fill out our simple form or call us directly. We\'ll match you with the right provider for your needs.',
                  },
                  {
                    step: '2',
                    title: 'Verify Your Coverage',
                    description: 'Bring your Medicaid card to your first visit. Our team will handle all the insurance verification.',
                  },
                  {
                    step: '3',
                    title: 'Start Your Care',
                    description: 'Meet with your therapist or psychiatrist. Choose in-person or telehealth sessions that fit your schedule.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="warm-card p-6 relative">
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 mt-4">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mt-12"
              >
                <Button size="lg" onClick={() => {
                  document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' });
                  trackConversion('scroll_to_form', { method: 'cta_button' });
                }}>
                  Start Your Journey Today
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Therapist Profiles Section */}
          <section className="section-padding bg-gradient-to-br from-orange-50/30 to-amber-50/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <span className="section-tag">Expert Care Team</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
                  Meet our Medicaid providers
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Experienced, licensed professionals dedicated to your mental health journey
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <TeamMemberCard
                  name="Dr. Farah Khan"
                  role="Psychiatrist"
                  specialties={["Child Therapy", "ADHD", "Behavioral Issues"]}
                  bio="Specialized in children with ASD (Autism spectrum disorder), ADHD and other behavioral problems. Training from New York Medical College and Robert Wood Johnson University hospital has enhanced my ability to deal with diverse patient populations ranging from children to adolescents and adults."
                  image="/images/dr-farah-khan.jpeg"
                  index={0}
                />
                <TeamMemberCard
                  name="Chevonne Worthy"
                  role="Outpatient Therapist"
                  specialties={["Individual Therapy", "Couples Counseling", "Family Therapy"]}
                  bio="Compassionate therapist providing client centered counseling to individuals, couples and families. Specializes in providing space and calm for individuals to learn, grow, grieve, laugh, cry and process the big and small moments in life. 10+ years of experience."
                  image="/images/chevonne-worthy.jpg"
                  index={1}
                />
                <TeamMemberCard
                  name="Anthony Obi"
                  role="Outpatient Therapist"
                  specialties={["Schizophrenia", "Mood Disorders", "Geriatric Care"]}
                  bio="Licensed therapist specializing in working with individuals experiencing serious mental health challenges. Dedicated to providing compassionate, evidence-based care to help clients manage symptoms and improve their quality of life."
                  image="/images/Toni Obi's Profile Picture.jpeg"
                  index={2}
                />
                <TeamMemberCard
                  name="Holli O'Donnell"
                  role="Clinical Director"
                  specialties={["Trauma", "TFCBT", "Clinical Supervision"]}
                  bio="Licensed Clinical Social Worker with over 25 years of experience. MSW from New York University. Trained in TFCBT and focuses on providing trauma informed care. Experience with children and adolescents in multiple settings including outpatient and residential treatment."
                  image="/images/holly.jpg"
                  index={3}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mt-12"
              >
                <p className="text-muted-foreground mb-4">All of our providers accept Medicaid and are here to support you</p>
                <Button size="lg" variant="outline" onClick={() => {
                  document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' });
                  trackConversion('scroll_to_form', { method: 'meet_team_cta' });
                }}>
                  Schedule with a Provider
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Social Proof Section */}
          <section className="py-12 bg-white/50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Trusted by thousands in Delaware County
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  {
                    quote: "The staff made the whole process so easy. I had my first appointment within days and my Medicaid covered everything.",
                    author: "Sarah M.",
                    location: "Havertown, PA"
                  },
                  {
                    quote: "Finally found quality mental health care that accepts Medicaid. The therapists here really care about their patients.",
                    author: "James R.",
                    location: "Drexel Hill, PA"
                  },
                  {
                    quote: "No hidden fees, no surprises. Just excellent care covered by my insurance. Highly recommend!",
                    author: "Maria L.",
                    location: "Broomall, PA"
                  },
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="warm-card p-6 h-full">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                      <div className="text-sm text-muted-foreground">
                        <div className="font-semibold">{testimonial.author}</div>
                        <div>{testimonial.location}</div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="section-padding">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Frequently asked questions
                </h2>
              </motion.div>
              <FAQSection />
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-16 bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to take the first step?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Quality mental health care is within reach. Book your Medicaid-covered appointment today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:8146202162" onClick={handlePhoneClick}>
                    <Button size="lg" className="w-full sm:w-auto gap-2">
                      <Phone className="w-4 h-4" />
                      Call: (814) 620-2162
                    </Button>
                  </a>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => {
                    document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' });
                    trackConversion('scroll_to_form', { method: 'final_cta' });
                  }}>
                    Book Online
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MedicaidLanding;