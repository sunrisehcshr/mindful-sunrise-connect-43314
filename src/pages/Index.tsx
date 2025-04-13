
import React from 'react';
import { motion } from 'framer-motion';
import WarmHeroSection from '../components/WarmHeroSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ServicesSection from '../components/services/ServicesSection';
import ConditionsSection from '../components/conditions/ConditionsSection';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import AppointmentSection from '../components/Appointment/AppointmentSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';
import SchemaMarkup from '../components/SchemaMarkup';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, HeartHandshake } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  // Home page breadcrumbs
  const homeBreadcrumbs = [
    {
      name: "Home",
      url: "https://sunrisehumancare.com",
      position: 1
    }
  ];
  
  return (
    <>
      <SEOHead 
        title="Mental Health Therapy & Psychiatry in Havertown, PA | Sunrise Human Care Services" 
        description="Expert mental health care in Havertown, PA for anxiety, depression, ADHD, and trauma. In-person and telehealth sessions available with licensed therapists and psychiatrists. Schedule your appointment today: (814) 620-2162." 
        canonicalUrl="https://sunrisehumancare.com/" 
        keywords="mental health care in Havertown, mental health Havertown, anxiety therapy Delaware County, depression counseling Havertown, ADHD treatment PA, psychiatrist near me, therapist Havertown PA, telehealth therapy, in-person counseling"
        breadcrumbs={homeBreadcrumbs}
      />
      <SchemaMarkup />
      <motion.div 
        className="flex flex-col min-h-screen relative overflow-hidden" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.6 }}
      >
        <Navbar />
        <main className="flex-grow">
          <WarmHeroSection />
          <WhyChooseUsSection />
          <ServicesSection />
          <ConditionsSection />
          
          {/* Our Treatment Methodology */}
          <section className="py-16 bg-orange-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-950">Our Treatment Methodology</h2>
                <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-6" />
                <p className="text-lg text-amber-900">
                  At Sunrise Human Care Services, we believe in a holistic, evidence-based approach to mental health treatment.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-amber-900">Evidence-Based Practices</h3>
                  <p className="mb-4">
                    Our therapists and psychiatrists are trained in the most effective, scientifically-validated treatment approaches. We continuously evaluate the latest research to ensure we're providing the highest quality care.
                  </p>
                  <p className="mb-4">
                    Common therapeutic approaches we use include Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Motivational Interviewing, and mindfulness-based interventions.
                  </p>
                  <p>
                    We believe in transparency about treatment methods and will always discuss the rationale behind recommended approaches, expected outcomes, and alternative options.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-amber-900">Personalized Treatment Plans</h3>
                  <p className="mb-4">
                    We recognize that each person's mental health journey is unique. Our approach begins with a comprehensive assessment to understand your specific needs, challenges, strengths, and goals.
                  </p>
                  <p className="mb-4">
                    Your treatment plan is developed collaboratively, integrating the most effective therapeutic techniques for your situation while considering your preferences, cultural background, and personal values.
                  </p>
                  <p>
                    As you progress, we regularly reassess and adjust your treatment plan to ensure it continues to meet your evolving needs and helps you achieve meaningful improvements in your mental health and wellbeing.
                  </p>
                </div>
              </div>
              
              <div className="max-w-3xl mx-auto mt-10 text-center">
                <Link to="/services">
                  <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white">
                    Learn More About Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </section>
          
          <AboutSection />
          
          {/* Community Involvement Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-10">
                <motion.h2 
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  className="text-3xl md:text-4xl font-bold mb-4 text-amber-950"
                >
                  Our Community Involvement
                </motion.h2>
                <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-6" />
                <motion.p 
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  viewport={{once: true}}
                  transition={{delay: 0.2}}
                  className="text-lg text-amber-900"
                >
                  Sunrise Human Care Services is committed to improving mental health awareness and access throughout Havertown and Delaware County.
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    icon: <HeartHandshake className="h-10 w-10 text-orange-500" />,
                    title: "Community Education",
                    description: "We regularly host workshops and seminars on mental health topics at local community centers, schools, and businesses throughout Delaware County."
                  },
                  {
                    icon: <MapPin className="h-10 w-10 text-orange-500" />,
                    title: "Local Partnerships",
                    description: "We collaborate with Havertown schools, healthcare providers, and community organizations to create integrated support systems for mental healthcare."
                  },
                  {
                    icon: <Calendar className="h-10 w-10 text-orange-500" />,
                    title: "Mental Health Awareness Events",
                    description: "Throughout the year, we participate in and sponsor events that promote mental health awareness and reduce stigma in our community."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: index * 0.1}}
                    className="text-center p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="mx-auto mb-4 rounded-full bg-orange-100 p-3 w-16 h-16 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-amber-900">{item.title}</h3>
                    <p className="text-amber-800">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="max-w-3xl mx-auto mt-10 text-center">
                <p className="text-amber-900 mb-4">
                  Interested in partnering with us for a community mental health initiative? We'd love to hear from you!
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                    Contact Us About Community Partnerships
                  </Button>
                </Link>
              </div>
            </div>
          </section>
          
          <FAQSection />
          <AppointmentSection />
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
