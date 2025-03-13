import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import SchemaMarkup from "../components/SchemaMarkup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import SpecialtiesSection from "../components/SpecialtiesSection";
import Map from "../components/Map";
import { ArrowRight, Check, Phone } from "lucide-react";
const MentalHealthHavertown = () => {
  return <>
      <SEOHead title="Mental Health Services in Havertown, PA | Anxiety & Depression Therapy" description="Top-rated mental health services in Havertown, PA. Specialized therapy for anxiety, depression, and stress from licensed professionals. In-person & virtual sessions available. Call (814) 620-2162 today." canonicalUrl="https://sunrisehcsllc.com/mental-health-havertown-pa" />
      <SchemaMarkup />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-16">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-orange-500 mb-4 text-white text-xs font-semibold">
                    Mental Health Services in Havertown
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-yellow-700 mb-6">
                    Expert Mental Health Care in Havertown, PA
                  </h1>
                  <p className="text-lg text-gray-700 mb-8">
                    Sunrise Human Care provides compassionate therapy, counseling, and psychiatric services 
                    for individuals and families in Havertown, PA. Our licensed professionals specialize 
                    in treating anxiety, depression, and stress with personalized in-person and virtual sessions.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-yellow-600 mr-2" />
                      <span>Licensed Havertown Therapists</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-yellow-600 mr-2" />
                      <span>In-Person & Telehealth</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-yellow-600 mr-2" />
                      <span>Most Insurance Accepted</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/appointment" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md transition-colors font-medium flex items-center justify-center">
                      Book an Appointment in Havertown
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <a href="tel:+18146202162" className="border border-yellow-500 hover:bg-yellow-50 text-yellow-700 px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center">
                      <Phone className="mr-2 h-4 w-4" />
                      (814) 620-2162
                    </a>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img src="/images/Therapy-in-havertown.webp" alt="Mental health therapy session in Havertown, PA" className="w-full h-auto object-cover rounded-xl" />
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-800 mb-4">
                  Our Services in Havertown
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Comprehensive Mental Health Services in Havertown, PA
                </h2>
                <p className="text-lg text-gray-600">
                  Our team of experienced Havertown mental health professionals provides evidence-based 
                  treatments customized for your unique needs and circumstances.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {/* Service 1 */}
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="p-3 rounded-lg bg-blue-50 text-blue-600 w-fit mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="10" /><path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Anxiety & Depression Therapy</h3>
                  <p className="text-gray-600 mb-4">
                    Our Havertown therapists provide specialized treatment for anxiety disorders and depression, 
                    helping you develop effective coping strategies and regain control.
                  </p>
                  <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                
                {/* Service 2 */}
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="p-3 rounded-lg bg-purple-50 text-purple-600 w-fit mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M17 11l.84 2.76a2 2 0 0 0 1.74 1.4l2.76.84a2 2 0 0 1 0 3.8l-2.76.84a2 2 0 0 0-1.74 1.4L17 25a2 2 0 0 1-3.5 0l-.84-2.76a2 2 0 0 0-1.74-1.4l-2.76-.84a2 2 0 0 1 0-3.8l2.76-.84a2 2 0 0 0 1.74-1.4L13 11a2 2 0 0 1 4 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Trauma & PTSD Treatment</h3>
                  <p className="text-gray-600 mb-4">
                    Our Havertown clinic offers evidence-based approaches including EMDR and CBT to help 
                    process traumatic experiences and reduce PTSD symptoms.
                  </p>
                  <Link to="/services" className="text-purple-600 hover:text-purple-800 font-medium flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                
                {/* Service 3 */}
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="p-3 rounded-lg bg-green-50 text-green-600 w-fit mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Family & Couples Counseling</h3>
                  <p className="text-gray-600 mb-4">
                    Our Havertown counselors help improve communication, resolve conflicts, 
                    and strengthen relationships between family members and couples.
                  </p>
                  <Link to="/services" className="text-green-600 hover:text-green-800 font-medium flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Link to="/services" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md transition-colors font-medium inline-flex items-center">
                  View All Services in Havertown
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
          
          {/* Specialties Section */}
          <SpecialtiesSection />
          
          {/* Why Choose Us Section */}
          <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-800 mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Trusted Mental Health Care in Havertown
                </h2>
                <p className="text-lg text-gray-600">
                  Sunrise Human Care Services is a leading provider of mental health services in Havertown, PA, 
                  dedicated to helping our community thrive.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-yellow-100 rounded-full p-2 h-fit">
                      <Check className="h-6 w-6 text-yellow-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Licensed Havertown Therapists</h3>
                      <p className="text-gray-600">
                        Our team consists of licensed therapists, psychologists, and psychiatrists with extensive 
                        experience serving the Havertown community.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-yellow-100 rounded-full p-2 h-fit">
                      <Check className="h-6 w-6 text-yellow-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Convenient Havertown Location</h3>
                      <p className="text-gray-600">
                        Located at 2050 West Chester Pike in Havertown, PA, our clinic is easily accessible 
                        with ample parking and close to public transportation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-yellow-100 rounded-full p-2 h-fit">
                      <Check className="h-6 w-6 text-yellow-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Personalized Treatment Plans</h3>
                      <p className="text-gray-600">
                        We create customized treatment plans for each client based on their unique needs, 
                        ensuring the most effective care possible.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img src="/images/family-counseling-havertown.webp" alt="Family counseling session in Havertown, PA" className="w-full h-auto object-cover rounded-xl" />
                </div>
              </div>
              
              <div className="mt-12 mx-auto max-w-3xl bg-white p-6 rounded-xl shadow-md border border-yellow-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Ready to Take the First Step?</h3>
                    <p className="text-gray-600">
                      Schedule a consultation with our Havertown mental health specialists today.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Link to="/appointment" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md transition-colors font-medium whitespace-nowrap">
                      Book Now
                    </Link>
                    <a href="tel:+18146202162" className="border border-yellow-500 hover:bg-yellow-50 text-yellow-700 px-6 py-3 rounded-lg transition-colors font-medium flex items-center">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Map and Contact Information */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-800 mb-4">
                  Visit Our Havertown Office
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Our Location in Havertown, PA
                </h2>
                <p className="text-lg text-gray-600">
                  Sunrise Human Care Services is conveniently located in the heart of Havertown, Pennsylvania, 
                  providing easy access to quality mental health care.
                </p>
              </div>
              
              <div className="max-w-5xl mx-auto">
                <Map />
                
                <div className="mt-12 bg-yellow-50 p-6 rounded-xl shadow-sm border border-yellow-100">
                  <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="font-medium">Sunrise Human Care Services</p>
                      <p className="text-gray-600">2050 West Chester Pike</p>
                      <p className="text-gray-600">Havertown, PA 19083</p>
                    </div>
                    <div>
                      <p className="font-medium">Phone Number</p>
                      <a href="tel:+18146202162" className="text-yellow-700 hover:text-yellow-800 transition-colors">
                        (814) 620-2162
                      </a>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@sunrisehcsllc.com" className="text-yellow-700 hover:text-yellow-800 transition-colors">
                        info@sunrisehcsllc.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Start Your Mental Health Journey in Havertown Today
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Our team of compassionate mental health professionals in Havertown is ready to help you 
                overcome challenges and improve your wellbeing.
              </p>
              <Link to="/appointment" className="bg-white text-yellow-600 hover:bg-yellow-50 px-8 py-4 rounded-lg shadow-lg transition-colors font-medium text-lg inline-block">
                Book an Appointment in Havertown Today!
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>;
};
export default MentalHealthHavertown;