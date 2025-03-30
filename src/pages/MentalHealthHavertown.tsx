
import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import SchemaMarkup from "../components/SchemaMarkup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Map from "../components/Map";
import { ArrowRight, Check, Phone } from "lucide-react";
import ConditionsSection from "../components/conditions/ConditionsSection";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const MentalHealthHavertown = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <SEOHead 
        title="Mental Health Services in Havertown, PA | Anxiety & Depression Therapy" 
        description="Top-rated mental health services in Havertown, PA. Specialized therapy for anxiety, depression, and stress from licensed professionals. In-person & virtual sessions available. Call (814) 620-2162 today." 
        canonicalUrl="https://sunrisehcsllc.com/mental-health-havertown-pa" 
      />
      <SchemaMarkup />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Hero Section - Enhanced with motion */}
          <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-16 md:py-20 lg:py-24 overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>
            
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 mb-4 text-white text-xs font-semibold shadow-sm">
                    Mental Health Services in Havertown
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
                    Expert Mental Health Care in Havertown, PA
                  </h1>
                  <p className="text-lg text-amber-800 mb-8">
                    Sunrise Human Care provides compassionate therapy, counseling, and psychiatric services 
                    for individuals and families in Havertown, PA. Our licensed professionals specialize 
                    in treating anxiety, depression, and stress with personalized in-person and virtual sessions.
                  </p>
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap gap-4 mb-8"
                  >
                    <motion.div variants={itemVariants} className="flex items-center bg-white/70 px-3 py-2 rounded-lg border border-amber-200 shadow-sm">
                      <Check className="h-5 w-5 text-orange-500 mr-2" />
                      <span className="text-amber-800 font-medium">Licensed Havertown Therapists</span>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center bg-white/70 px-3 py-2 rounded-lg border border-amber-200 shadow-sm">
                      <Check className="h-5 w-5 text-orange-500 mr-2" />
                      <span className="text-amber-800 font-medium">In-Person & Telehealth</span>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center bg-white/70 px-3 py-2 rounded-lg border border-amber-200 shadow-sm">
                      <Check className="h-5 w-5 text-orange-500 mr-2" />
                      <span className="text-amber-800 font-medium">Most Insurance Accepted</span>
                    </motion.div>
                  </motion.div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/appointment" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg shadow-md transition-colors font-medium flex items-center justify-center">
                      Book an Appointment in Havertown
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <a href="tel:+18146202162" className="border border-amber-400 hover:bg-amber-50 text-amber-700 px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center">
                      <Phone className="mr-2 h-4 w-4" />
                      (814) 620-2162
                    </a>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative rounded-xl overflow-hidden shadow-xl"
                >
                  <img src="/images/Therapy-in-havertown.webp" alt="Mental health therapy session in Havertown, PA" className="w-full h-auto object-cover rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-xl"></div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Section - Enhanced with animations */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto text-center mb-12"
              >
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 mb-4">
                  Our Services in Havertown
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">
                  Comprehensive Mental Health Services in Havertown, PA
                </h2>
                <p className="text-lg text-amber-700">
                  Our team of experienced Havertown mental health professionals provides evidence-based 
                  treatments customized for your unique needs and circumstances.
                </p>
                <div className="mx-auto mt-6 w-24">
                  <Separator className="bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5" />
                </div>
              </motion.div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
              >
                {/* Service 1 */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-6 shadow-sm border border-amber-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-3 rounded-lg bg-blue-500 text-white w-fit mb-4 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="10" /><path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-amber-900">Anxiety & Depression Therapy</h3>
                  <p className="text-amber-700 mb-4">
                    Our Havertown therapists provide specialized treatment for anxiety disorders and depression, 
                    helping you develop effective coping strategies and regain control.
                  </p>
                  <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium flex items-center group">
                    Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                {/* Service 2 */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-6 shadow-sm border border-amber-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-3 rounded-lg bg-purple-500 text-white w-fit mb-4 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M17 11l.84 2.76a2 2 0 0 0 1.74 1.4l2.76.84a2 2 0 0 1 0 3.8l-2.76.84a2 2 0 0 0-1.74 1.4L17 25a2 2 0 0 1-3.5 0l-.84-2.76a2 2 0 0 0-1.74-1.4l-2.76-.84a2 2 0 0 1 0-3.8l2.76-.84a2 2 0 0 0 1.74-1.4L13 11a2 2 0 0 1 4 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-amber-900">Trauma & PTSD Treatment</h3>
                  <p className="text-amber-700 mb-4">
                    Our Havertown clinic offers evidence-based approaches including EMDR and CBT to help 
                    process traumatic experiences and reduce PTSD symptoms.
                  </p>
                  <Link to="/services" className="text-purple-600 hover:text-purple-800 font-medium flex items-center group">
                    Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                {/* Service 3 */}
                <motion.div 
                  variants={itemVariants}
                  className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-6 shadow-sm border border-amber-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-3 rounded-lg bg-green-500 text-white w-fit mb-4 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-amber-900">Family & Couples Counseling</h3>
                  <p className="text-amber-700 mb-4">
                    Our Havertown counselors help improve communication, resolve conflicts, 
                    and strengthen relationships between family members and couples.
                  </p>
                  <Link to="/services" className="text-green-600 hover:text-green-800 font-medium flex items-center group">
                    Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
              
              <div className="mt-12 text-center">
                <Link to="/services" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg shadow-md transition-colors font-medium inline-flex items-center">
                  View All Services in Havertown
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
          
          {/* Conditions We Treat Section */}
          <ConditionsSection />
          
          {/* Why Choose Us Section - Enhanced with animations */}
          <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto text-center mb-12"
              >
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-800 mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">
                  Trusted Mental Health Care in Havertown
                </h2>
                <p className="text-lg text-amber-700">
                  Sunrise Human Care Services is a leading provider of mental health services in Havertown, PA, 
                  dedicated to helping our community thrive.
                </p>
                <div className="mx-auto mt-6 w-24">
                  <Separator className="bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5" />
                </div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants} className="flex gap-4 bg-white/70 p-5 rounded-xl border border-amber-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-400 rounded-full p-2 h-fit text-white shadow-sm">
                      <Check className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-amber-900">Licensed Havertown Therapists</h3>
                      <p className="text-amber-700">
                        Our team consists of licensed therapists, psychologists, and psychiatrists with extensive 
                        experience serving the Havertown community.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="flex gap-4 bg-white/70 p-5 rounded-xl border border-amber-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-400 rounded-full p-2 h-fit text-white shadow-sm">
                      <Check className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-amber-900">Convenient Havertown Location</h3>
                      <p className="text-amber-700">
                        Located at 2050 West Chester Pike in Havertown, PA, our clinic is easily accessible 
                        with ample parking and close to public transportation.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="flex gap-4 bg-white/70 p-5 rounded-xl border border-amber-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-400 rounded-full p-2 h-fit text-white shadow-sm">
                      <Check className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-amber-900">Personalized Treatment Plans</h3>
                      <p className="text-amber-700">
                        We create customized treatment plans for each client based on their unique needs, 
                        ensuring the most effective care possible.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative rounded-xl overflow-hidden shadow-xl"
                >
                  <img src="/images/family-counseling-havertown.webp" alt="Family counseling session in Havertown, PA" className="w-full h-auto object-cover rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-12 mx-auto max-w-3xl bg-white p-6 rounded-xl shadow-md border border-amber-200"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-amber-900">Ready to Take the First Step?</h3>
                    <p className="text-amber-700">
                      Schedule a consultation with our Havertown mental health specialists today.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Link to="/appointment" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg shadow-md transition-colors font-medium whitespace-nowrap">
                      Book Now
                    </Link>
                    <a href="tel:+18146202162" className="border border-amber-400 hover:bg-amber-50 text-amber-700 px-6 py-3 rounded-lg transition-colors font-medium flex items-center">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Us
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* Map and Contact Information - Enhanced with embedded map */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto text-center mb-12"
              >
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-800 mb-4">
                  Visit Our Havertown Office
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">
                  Our Location in Havertown, PA
                </h2>
                <p className="text-lg text-amber-700">
                  Sunrise Human Care Services is conveniently located in the heart of Havertown, Pennsylvania, 
                  providing easy access to quality mental health care.
                </p>
                <div className="mx-auto mt-6 w-24">
                  <Separator className="bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5" />
                </div>
              </motion.div>
              
              <div className="max-w-5xl mx-auto">
                <Map />
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-12 bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-sm border border-amber-200"
                >
                  <h3 className="text-xl font-semibold mb-4 text-center text-amber-900">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white/70 p-4 rounded-lg border border-amber-100 shadow-sm">
                      <p className="font-medium text-amber-900">Sunrise Human Care Services</p>
                      <p className="text-amber-700">2050 West Chester Pike</p>
                      <p className="text-amber-700">Havertown, PA 19083</p>
                    </div>
                    <div className="bg-white/70 p-4 rounded-lg border border-amber-100 shadow-sm">
                      <p className="font-medium text-amber-900">Phone Number</p>
                      <a href="tel:+18146202162" className="text-orange-500 hover:text-orange-600 transition-colors">
                        (814) 620-2162
                      </a>
                    </div>
                    <div className="bg-white/70 p-4 rounded-lg border border-amber-100 shadow-sm">
                      <p className="font-medium text-amber-900">Email</p>
                      <a href="mailto:info@sunrisehcsllc.com" className="text-orange-500 hover:text-orange-600 transition-colors">
                        info@sunrisehcsllc.com
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Call to Action - Enhanced with gradient */}
          <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>
            
            <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Start Your Mental Health Journey in Havertown Today
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Our team of compassionate mental health professionals in Havertown is ready to help you 
                  overcome challenges and improve your wellbeing.
                </p>
                <Link to="/appointment" className="bg-white text-amber-600 hover:bg-yellow-50 px-8 py-4 rounded-lg shadow-lg transition-colors font-medium text-lg inline-block">
                  Book an Appointment in Havertown Today!
                </Link>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>;
};

export default MentalHealthHavertown;
