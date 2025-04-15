import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import SchemaMarkup from "../components/SchemaMarkup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Map from "../components/Map";
import { ArrowRight, Check, Phone, Brain, Calendar, Shield, Clock } from "lucide-react";
import ConditionsSection from "../components/conditions/ConditionsSection";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const MentalHealthHavertown = () => {
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
        title="Medicare-Accepted Mental Health Care in Havertown, PA | Sunrise Human Care" 
        description="Trusted Medicare-approved mental health services in Havertown, PA. Expert therapy, counseling & psychiatric care for anxiety, depression & more. Medicare accepted. Schedule your consultation: (814) 620-2162." 
        canonicalUrl="https://sunrisehumancare.com/mental-health-havertown-pa"
        keywords="medicare mental health havertown, medicare therapy havertown pa, medicare psychiatrist delaware county, medicare counseling havertown, mental health medicare provider havertown, anxiety therapy medicare, depression counseling medicare, psychiatric care medicare havertown"
      />
      <SchemaMarkup />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Hero Section */}
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
                    Medicare-Accepted Mental Health Provider in Havertown
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
                    Medicare-Covered Mental Health Care in Havertown, PA
                  </h1>
                  <p className="text-lg text-amber-800 mb-8">
                    At Sunrise Human Care, we're proud to be a Medicare-approved mental health provider serving Havertown and Delaware County. Our team of licensed therapists, psychologists, and psychiatrists provides comprehensive mental health care covered by Medicare.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center bg-white/70 px-3 py-2 rounded-lg border border-amber-200 shadow-sm">
                      <Check className="h-5 w-5 text-orange-500 mr-2" />
                      <span className="text-amber-800 font-medium">Medicare Accepted</span>
                    </div>
                    <div className="flex items-center bg-white/70 px-3 py-2 rounded-lg border border-amber-200 shadow-sm">
                      <Check className="h-5 w-5 text-orange-500 mr-2" />
                      <span className="text-amber-800 font-medium">Licensed Medicare Providers</span>
                    </div>
                    <div className="flex items-center bg-white/70 px-3 py-2 rounded-lg border border-amber-200 shadow-sm">
                      <Check className="h-5 w-5 text-orange-500 mr-2" />
                      <span className="text-amber-800 font-medium">Same Week Appointments</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/appointment" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg shadow-md transition-colors font-medium flex items-center justify-center">
                      Book Mental Health Consultation
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

          {/* Core Services Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">
                  Mental Health Services in Havertown
                </h2>
                <p className="text-lg text-amber-700 mb-6">
                  Our comprehensive mental health care services are designed to address a wide range of conditions, with personalized treatment plans tailored to your needs.
                </p>
                <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Brain className="h-6 w-6" />,
                    title: "Individual Therapy",
                    description: "One-on-one counseling sessions with licensed therapists in Havertown for depression, anxiety, and personal growth.",
                    link: "/individual-therapy-havertown-pa"
                  },
                  {
                    icon: <Shield className="h-6 w-6" />,
                    title: "Psychiatric Care",
                    description: "Expert psychiatric evaluations and medication management by board-certified psychiatrists.",
                    link: "/psychiatric-evaluations-havertown-pa"
                  },
                  {
                    icon: <Clock className="h-6 w-6" />,
                    title: "Crisis Support",
                    description: "Rapid response mental health support for urgent situations in Havertown and Delaware County.",
                    link: "/services"
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-6 shadow-sm border border-amber-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-orange-500 text-white w-fit mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-amber-900">{service.title}</h3>
                    <p className="text-amber-700 mb-4">{service.description}</p>
                    <Link to={service.link} className="text-orange-600 hover:text-orange-700 font-medium flex items-center group">
                      Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Medicare Coverage Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">
                    Medicare Mental Health Coverage in Havertown
                  </h2>
                  <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <p className="text-amber-800">
                      As a Medicare-approved mental health provider in Havertown, we understand the importance of accessible mental health care for our Medicare beneficiaries. Our team is committed to providing high-quality, evidence-based treatment while ensuring a seamless Medicare billing experience.
                    </p>
                    <p className="text-amber-800">
                      Medicare Part B covers many essential mental health services, including individual therapy, psychiatric evaluations, medication management, and group therapy. Our experienced staff will help you understand your Medicare benefits and maximize your coverage.
                    </p>
                    <div className="pt-4">
                      <h3 className="text-xl font-semibold mb-3 text-amber-900">Medicare-Covered Services</h3>
                      <ul className="grid grid-cols-1 gap-2 text-amber-800">
                        <li className="flex items-center"><Check className="h-4 w-4 text-orange-500 mr-2" />Individual Therapy Sessions</li>
                        <li className="flex items-center"><Check className="h-4 w-4 text-orange-500 mr-2" />Psychiatric Evaluations</li>
                        <li className="flex items-center"><Check className="h-4 w-4 text-orange-500 mr-2" />Medication Management</li>
                        <li className="flex items-center"><Check className="h-4 w-4 text-orange-500 mr-2" />Depression Screening</li>
                        <li className="flex items-center"><Check className="h-4 w-4 text-orange-500 mr-2" />Annual Wellness Visits</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-amber-900">Understanding Your Medicare Coverage</h3>
                    <p className="text-amber-800 mb-4">
                      As a Medicare beneficiary seeking mental health care in Havertown, you're entitled to various covered services:
                    </p>
                    <ul className="space-y-3 text-amber-800">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-orange-500 mr-2 mt-1" />
                        <span>Medicare Part B covers 80% of approved mental health services after meeting your annual deductible</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-orange-500 mr-2 mt-1" />
                        <span>One depression screening per year at no cost to you</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-orange-500 mr-2 mt-1" />
                        <span>Coverage for both in-person and telehealth mental health visits</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-orange-500 mr-2 mt-1" />
                        <span>Medication management and psychiatric services when medically necessary</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link to="/appointment" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg shadow-md transition-colors font-medium flex items-center justify-center">
                        Verify Your Medicare Coverage
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Local Context Section */}
          <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">
                    Your Trusted Medicare Mental Health Provider in Havertown
                  </h2>
                  <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <p className="text-amber-800">
                      Located at 2050 West Chester Pike in Havertown, Sunrise Human Care is Delaware County's premier Medicare-approved mental health care provider. We serve Medicare beneficiaries from Havertown, Broomall, Ardmore, and surrounding communities with comprehensive mental health services.
                    </p>
                    <p className="text-amber-800">
                      Our Havertown mental health clinic combines clinical excellence with a warm, welcoming environment. Every member of our team is licensed in Pennsylvania, Medicare-approved, and committed to providing evidence-based mental health care that makes a real difference in our patients' lives.
                    </p>
                    <div className="pt-4">
                      <h3 className="text-xl font-semibold mb-3 text-amber-900">Communities We Serve</h3>
                      <ul className="grid grid-cols-2 gap-2 text-amber-800">
                        <li className="flex items-center"><Check className="h-4 w-4 text-orange-500 mr-2" />Havertown</li>
                        <li className="flex items-center"><Check className="h-4 w-4 text-orange-500 mr-2" />Broomall</li>
                        <li className="flex items-center"><Check className="h-4 w-4 text-orange-500 mr-2" />Ardmore</li>
                        <li className="flex items-center"><Check className="h-4 w-4 text-orange-500 mr-2" />Drexel Hill</li>
                        <li className="flex items-center"><Check className="h-4 w-4 text-orange-500 mr-2" />Springfield</li>
                        <li className="flex items-center"><Check className="h-4 w-4 text-orange-500 mr-2" />Upper Darby</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-amber-900">Medicare & Payment Information</h3>
                    <p className="text-amber-800 mb-4">
                      We're committed to making mental health care accessible to Medicare beneficiaries in Havertown:
                    </p>
                    <ul className="space-y-2 text-amber-800">
                      <li className="flex items-center"><Check className="h-4 w-4 text-orange-500 mr-2" />Medicare Part B Accepted</li>
                      <li className="flex items-center"><Check className="h-4 w-4 text-orange-500 mr-2" />Medicare Advantage Plans</li>
                      <li className="flex items-center"><Check className="h-4 w-4 text-orange-500 mr-2" />Assistance with Medicare Claims</li>
                      <li className="flex items-center"><Check className="h-4 w-4 text-orange-500 mr-2" />Transparent Billing Process</li>
                    </ul>
                    <div className="mt-6">
                      <Link to="/appointment" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg shadow-md transition-colors font-medium flex items-center justify-center">
                        Schedule Your Medicare Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conditions Section */}
          <ConditionsSection />

          {/* Why Choose Us Section */}
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
                  Start Your Medicare-Covered Mental Health Journey in Havertown Today
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Our team of compassionate mental health professionals in Havertown is ready to help you 
                  overcome challenges and improve your wellbeing.
                </p>
                <Link to="/appointment" className="bg-white text-amber-600 hover:bg-yellow-50 px-8 py-4 rounded-lg shadow-lg transition-colors font-medium text-lg inline-block">
                  Schedule Your Medicare Consultation Today!
                </Link>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MentalHealthHavertown;
