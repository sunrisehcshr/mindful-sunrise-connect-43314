
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';
import { Mail, Phone, MapPin, Clock, Hospital, Video } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: '',
    preferredContact: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formspreeData = {
        ...formData,
        _subject: "Contact Form Message",
        _cc: "shweta.s@sunrisehcsllc.com"
      };
      
      const response = await fetch("https://formspree.io/f/xpwqvvvw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formspreeData)
      });
      
      if (response.ok) {
        toast.success("Thank you! Your message has been sent. We'll get back to you shortly.");
        setFormData({
          name: '',
          email: '',
          phone: '',
          sessionType: '',
          preferredContact: '',
          message: ''
        });
      } else {
        console.error("Form submission failed:", await response.text());
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us | Sunrise Human Care Services"
        description="Get in touch with our mental health team in Havertown, PA. Contact information, office hours, and directions to our clinic."
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
              <h1 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6 text-center">Contact Us</h1>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="warm-card p-4 sm:p-5 rounded-lg">
                  <h2 className="text-xl font-semibold text-amber-800 mb-3">Get In Touch</h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Phone className="h-4 w-4 text-amber-500 mt-1" />
                      <div>
                        <h3 className="font-medium text-sm">Phone</h3>
                        <p className="text-amber-700 text-sm">(814) 620-2162</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Mail className="h-4 w-4 text-amber-500 mt-1" />
                      <div>
                        <h3 className="font-medium text-sm">Email</h3>
                        <p className="text-amber-700 text-sm">info@sunrisehcsllc.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-500 mt-1" />
                      <div>
                        <h3 className="font-medium text-sm">Address</h3>
                        <p className="text-amber-700 text-sm">2050 West Chester Pike, Havertown, PA 19083</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-amber-500 mt-1" />
                      <div>
                        <h3 className="font-medium text-sm">Hours</h3>
                        <p className="text-amber-700 text-sm">Monday - Friday: 9am - 5pm</p>
                        <p className="text-amber-700 text-sm">Saturday & Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="warm-card p-4 sm:p-5 rounded-lg">
                  <h2 className="text-xl font-semibold text-amber-800 mb-3">Send a Message</h2>
                  <form className="space-y-3" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-amber-800 text-sm mb-1">Your Name*</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 text-sm border border-amber-200 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="email" className="block text-amber-800 text-sm mb-1">Email Address*</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-2 text-sm border border-amber-200 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-amber-800 text-sm mb-1">Phone Number*</label>
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-2 text-sm border border-amber-200 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-amber-800 text-sm mb-1">Preferred Session Type*</label>
                      <div className="flex flex-wrap gap-3">
                        <label className="flex items-center space-x-1 cursor-pointer">
                          <input
                            type="radio"
                            name="sessionType"
                            value="in-clinic"
                            onChange={handleChange}
                            checked={formData.sessionType === 'in-clinic'}
                            className="h-3 w-3 text-amber-500 focus:ring-amber-500"
                            required
                          />
                          <span className="flex items-center text-xs">
                            <Hospital className="h-3 w-3 text-amber-500 mr-1" /> In-Clinic
                          </span>
                        </label>
                        <label className="flex items-center space-x-1 cursor-pointer">
                          <input
                            type="radio"
                            name="sessionType"
                            value="online"
                            onChange={handleChange}
                            checked={formData.sessionType === 'online'}
                            className="h-3 w-3 text-amber-500 focus:ring-amber-500"
                          />
                          <span className="flex items-center text-xs">
                            <Video className="h-3 w-3 text-amber-500 mr-1" /> Online
                          </span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-amber-800 text-sm mb-1">Preferred Contact Method*</label>
                      <div className="flex flex-wrap gap-3">
                        <label className="flex items-center space-x-1 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            onChange={handleChange}
                            checked={formData.preferredContact === 'phone'}
                            className="h-3 w-3 text-amber-500 focus:ring-amber-500"
                            required
                          />
                          <span className="flex items-center text-xs">
                            <Phone className="h-3 w-3 text-amber-500 mr-1" /> Phone
                          </span>
                        </label>
                        <label className="flex items-center space-x-1 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            onChange={handleChange}
                            checked={formData.preferredContact === 'email'}
                            className="h-3 w-3 text-amber-500 focus:ring-amber-500"
                          />
                          <span className="flex items-center text-xs">
                            <Mail className="h-3 w-3 text-amber-500 mr-1" /> Email
                          </span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-amber-800 text-sm mb-1">Message*</label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full p-2 text-sm border border-amber-200 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                        placeholder="Please share any specific concerns or questions you have."
                        required
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 text-sm rounded-md transition-colors"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
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
};

export default Contact;
