
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
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
                        <p className="text-amber-700">(610) 555-1234</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-amber-500 mt-1" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-amber-700">contact@sunrisehcs.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-amber-500 mt-1" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-amber-700">123 Healing Way, Havertown, PA 19083</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-amber-500 mt-1" />
                      <div>
                        <h3 className="font-medium">Hours</h3>
                        <p className="text-amber-700">Monday - Friday: 9am - 7pm</p>
                        <p className="text-amber-700">Saturday: 10am - 3pm</p>
                        <p className="text-amber-700">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="warm-card p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold text-amber-800 mb-4">Send a Message</h2>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-amber-800 mb-1">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full p-2 border border-amber-200 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-amber-800 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full p-2 border border-amber-200 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-amber-800 mb-1">Message</label>
                      <textarea 
                        id="message" 
                        rows={5}
                        className="w-full p-2 border border-amber-200 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      Send Message
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
