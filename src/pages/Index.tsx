
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck, MapPin, CheckCircle } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sunrise Human Care Services | Mental Health Clinic in Havertown, PA</title>
        <meta name="description" content="Sunrise Human Care Services provides compassionate mental health services in Havertown, PA. Professional therapy, counseling, and psychiatric care for individuals, couples, and families." />
        <meta name="keywords" content="mental health, therapy, counseling, psychiatry, Havertown, PA, psychological services, depression, anxiety, trauma, wellness" />
        <meta property="og:title" content="Sunrise Human Care Services | Mental Health Clinic in Havertown, PA" />
        <meta property="og:description" content="Professional therapy, counseling, and psychiatric services in Havertown, PA. Compassionate care for individuals, couples, and families." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sunrisehcs.com" />
        <link rel="canonical" href="https://sunrisehcs.com" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <HeroSection />
          
          {/* Why Choose Us Section */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sunrise-400/20 text-sunrise-900 mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Compassionate Care from Experienced Professionals
                </h2>
                <p className="text-muted-foreground">
                  At Sunrise Human Care Services, we provide a safe, supportive environment 
                  where you can address your challenges and work towards healing and growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                {[
                  {
                    title: "Experienced Therapists",
                    description: "Our team consists of licensed professionals with extensive experience in various mental health specialties.",
                    icon: CheckCircle,
                  },
                  {
                    title: "Personalized Approach",
                    description: "We recognize that every individual is unique, and we tailor our therapeutic approaches to meet your specific needs.",
                    icon: CheckCircle,
                  },
                  {
                    title: "Supportive Environment",
                    description: "We create a warm, non-judgmental space where you can feel comfortable sharing your thoughts and feelings.",
                    icon: CheckCircle,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="bg-sunrise-400/10 p-3 rounded-full w-fit mb-4">
                      <item.icon className="h-6 w-6 text-sunrise-700" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          <ServicesSection />
          
          {/* CTA Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-sunrise-400/10 z-0"></div>
            <div className="absolute inset-0 opacity-30 z-0">
              <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="small-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#small-grid)" />
              </svg>
            </div>
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-border">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sunrise-400/20 text-sunrise-900 mb-4">
                      Get Started Today
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      Ready to Take the First Step?
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Taking the first step toward better mental health is a courageous decision. 
                      We're here to support you on your journey.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link to="/appointment" className="btn-sunrise flex items-center gap-2">
                        <CalendarCheck className="h-5 w-5" />
                        Book an Appointment
                      </Link>
                      <Link to="/contact" className="btn-sunrise-outline flex items-center gap-2">
                        <ArrowRight className="h-5 w-5" />
                        Contact Us
                      </Link>
                    </div>
                  </div>
                  <div className="bg-sunrise-100 p-8 md:p-10 flex flex-col justify-center">
                    <div className="max-w-xs mx-auto space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="bg-white p-2 rounded-full shadow-sm">
                          <CalendarCheck className="h-5 w-5 text-sunrise-700" />
                        </div>
                        <div>
                          <h3 className="font-medium text-sunrise-900">Flexible Scheduling</h3>
                          <p className="text-sm text-sunrise-700 mt-1">
                            Extended hours, including evenings and weekends
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-white p-2 rounded-full shadow-sm">
                          <MapPin className="h-5 w-5 text-sunrise-700" />
                        </div>
                        <div>
                          <h3 className="font-medium text-sunrise-900">Convenient Location</h3>
                          <p className="text-sm text-sunrise-700 mt-1">
                            Easy to find in Havertown with ample parking
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-white p-2 rounded-full shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sunrise-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-sunrise-900">Insurance Accepted</h3>
                          <p className="text-sm text-sunrise-700 mt-1">
                            We work with most major insurance plans
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Testimonials Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sunrise-400/20 text-sunrise-900 mb-4">
                  Testimonials
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What Our Clients Say
                </h2>
                <p className="text-muted-foreground">
                  Hear about the experiences of individuals who have found support 
                  and healing through our services.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    quote: "The therapists at Sunrise have helped me develop the tools I need to manage my anxiety. I'm truly grateful for their compassionate approach.",
                    author: "J.M., Havertown",
                  },
                  {
                    quote: "Our family therapy sessions have transformed our communication. We've learned to understand each other better and build stronger relationships.",
                    author: "The Wilson Family",
                  },
                  {
                    quote: "After struggling for years, the team at Sunrise helped me find a path forward. Their personalized approach made all the difference in my recovery.",
                    author: "T.D., Philadelphia",
                  },
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="h-32 flex items-center justify-center mb-6">
                      <svg className="h-10 w-10 text-sunrise-400/30" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                    <p className="font-medium text-foreground">- {testimonial.author}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
