
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';
import { Mail, Phone, MapPin, Clock, Hospital, Video } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sessionType: '',
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
        _cc: "shweta.s@sunrisehcsllc.com" // Add CC email
      };
      
      const response = await fetch("https://formspree.io/f/mqkrqkwo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formspreeData)
      });
      
      if (response.ok) {
        toast.success("Thank you! Your message has been sent.");
        setFormData({
          name: '',
          email: '',
          sessionType: '',
          message: ''
        });
      } else {
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
          <section className="section-padding">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6 text-center">Contact Us</h1>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="warm-card p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold text-amber-800 mb-4">Get In Touch</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-amber-500 mt-1" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-amber-700">(814) 620-2162</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-amber-500 mt-1" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-amber-700">info@sunrisehcsllc.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-amber-500 mt-1" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-amber-700">2050 West Chester Pike, Havertown, PA 19083</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-amber-500 mt-1" />
                      <div>
                        <h3 className="font-medium">Hours</h3>
                        <p className="text-amber-700">Monday - Friday: 9am - 5pm</p>
                        <p className="text-amber-700">Saturday & Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="warm-card p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold text-amber-800 mb-4">Send a Message</h2>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-amber-800 mb-1">Your Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-amber-200 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-amber-800 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-amber-200 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-amber-800 mb-1">Preferred Session Type</label>
                      <div className="flex gap-4">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="sessionType"
                            value="in-clinic"
                            onChange={handleChange}
                            checked={formData.sessionType === 'in-clinic'}
                            className="h-4 w-4 text-amber-500 focus:ring-amber-500"
                            required
                          />
                          <span className="flex items-center">
                            <Hospital className="h-4 w-4 text-amber-500 mr-1" /> In-Clinic
                          </span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="sessionType"
                            value="online"
                            onChange={handleChange}
                            checked={formData.sessionType === 'online'}
                            className="h-4 w-4 text-amber-500 focus:ring-amber-500"
                          />
                          <span className="flex items-center">
                            <Video className="h-4 w-4 text-amber-500 mr-1" /> Online
                          </span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-amber-800 mb-1">Message</label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full p-2 border border-amber-200 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
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
