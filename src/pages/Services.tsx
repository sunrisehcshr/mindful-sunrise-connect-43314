import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/services/ServicesSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';
import { Separator } from '@/components/ui/separator';
import { Calendar, FileText, Clock, Wallet, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const Services = () => {
  // Services page breadcrumbs
  const servicesBreadcrumbs = [{
    name: "Home",
    url: "https://sunrisehumancare.com",
    position: 1
  }, {
    name: "Services",
    url: "https://sunrisehumancare.com/services",
    position: 2
  }];
  return <>
      <SEOHead title="Mental Health Services in Havertown, PA | Therapy & Counseling | Sunrise Human Care" description="Comprehensive mental health services in Havertown, PA. We offer therapy for anxiety, depression, ADHD, trauma, and more for children, teens, adults, and seniors. Call (814) 620-2162." canonicalUrl="https://sunrisehumancare.com/services" keywords="mental health services Havertown, therapy Delaware County PA, counseling services Pennsylvania, psychiatry Havertown, anxiety therapy PA, depression treatment Havertown" serviceSchema={{
      name: "Mental Health Services",
      description: "Comprehensive mental health services including therapy, counseling, and psychiatric care for individuals, families, and couples.",
      provider: "Sunrise Human Care Services",
      serviceType: "Mental Health Care",
      areaServed: "Havertown, PA and Delaware County"
    }} breadcrumbs={servicesBreadcrumbs} />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 py-0 bg-white">
          {/* Hero Section - Optimized with local keywords and clear CTA */}
          <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-500 to-amber-400"></div>
            
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="max-w-3xl">                
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
                  Mental Health Services in Havertown, PA
                </h1>
                
                <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
                  At Sunrise Human Care, we provide comprehensive mental health services in Havertown and throughout Delaware County. Our team offers specialized therapy, counseling, and psychiatric care for children, adolescents, adults, and seniors.
                </p>
                
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <a href="#individual-therapy" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-white text-orange-600 shadow hover:bg-white/90 h-9 px-4 py-2">
                    Individual Therapy
                  </a>
                  <a href="#family-therapy" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-white text-orange-600 shadow hover:bg-white/90 h-9 px-4 py-2">
                    Family Therapy
                  </a>
                  <a href="#anxiety-treatment" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-white text-orange-600 shadow hover:bg-white/90 h-9 px-4 py-2">
                    Anxiety Treatment
                  </a>
                  <a href="#depression-therapy" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-white text-orange-600 shadow hover:bg-white/90 h-9 px-4 py-2">
                    Depression Therapy
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {/* How We Work Section */}
          <section className="py-16 bg-orange-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-950">How We Work</h2>
                <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-6" />
                <p className="text-lg text-amber-900 mb-6">
                  Our process is designed to provide personalized, effective mental health care for all our Havertown clients.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[{
                icon: <Calendar className="h-8 w-8 text-orange-500" />,
                title: "1. Initial Consultation",
                description: "Begin with a thorough assessment to understand your needs and goals for therapy."
              }, {
                icon: <FileText className="h-8 w-8 text-orange-500" />,
                title: "2. Personalized Plan",
                description: "We create a customized treatment plan that addresses your specific concerns and objectives."
              }, {
                icon: <Clock className="h-8 w-8 text-orange-500" />,
                title: "3. Regular Sessions",
                description: "Engage in ongoing therapy sessions with a consistent schedule that works for you."
              }, {
                icon: <MapPin className="h-8 w-8 text-orange-500" />,
                title: "4. Progress Review",
                description: "Regularly evaluate your progress and adjust treatment approaches as needed."
              }].map((step, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} className="text-center bg-white p-6 rounded-lg shadow-sm">
                    <div className="mx-auto mb-4 rounded-full bg-orange-100 p-3 w-16 h-16 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-amber-900">{step.title}</h3>
                    <p className="text-amber-800">{step.description}</p>
                  </motion.div>)}
              </div>
              
              <div className="max-w-3xl mx-auto mt-10 text-center">
                <Link to="/appointment">
                  <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white">
                    Schedule Your Initial Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </section>
          
          <ServicesSection />
          
          {/* Insurance Section */}
          
          
          {/* Local Context Section - Enhanced with more specific content */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-playfair">
                  Mental Health Services in Havertown, Pennsylvania
                </h2>
                
                <div className="space-y-4">
                  <p>
                    At Sunrise Human Care Services, we're proud to provide comprehensive mental health services to Havertown and surrounding communities in Delaware County. Our practice at 2050 West Chester Pike offers a convenient location for residents seeking high-quality mental health care close to home.
                  </p>
                  
                  <p>
                    We understand the unique needs of our local community and provide culturally responsive care that considers the specific challenges and resources of the Havertown area. Whether you're coming from Haverford Township, Springfield, Upper Darby, Broomall, or other nearby areas, our team is committed to improving mental health awareness and reducing stigma throughout Delaware County.
                  </p>
                  
                  <p>
                    Our full range of mental health services in Havertown includes individual therapy, family counseling, anxiety treatment, depression therapy, and specialized care for conditions like ADHD, trauma, and OCD. We welcome clients of all ages and backgrounds to experience the compassionate care that has made us a trusted provider in Delaware County.
                  </p>
                  
                  <p>
                    As a locally owned and operated practice, we're invested in the wellbeing of our community. We regularly participate in local mental health initiatives, provide educational workshops in schools and community centers, and collaborate with other healthcare providers to create a robust network of support for our clients.
                  </p>
                  
                  <p>
                    If you're searching for mental health services in Havertown or the surrounding area, we invite you to reach out. Our friendly staff is ready to answer your questions and help you take the first step toward improved mental wellbeing.
                  </p>
                </div>
                
                <div className="mt-8 text-center">
                  <Link to="/appointment">
                    <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white">
                      Schedule Your Appointment Today
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>;
};
export default Services;