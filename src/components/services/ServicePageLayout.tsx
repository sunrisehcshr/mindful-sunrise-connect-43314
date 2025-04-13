
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import SEOHead from '../SEOHead';
import SchemaMarkup from '../SchemaMarkup';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServicePageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  pageTitle: string;
  metaDescription: string;
  serviceType: string;
  canonicalUrl: string;
  heroImage?: string;
  benefits: string[];
  approaches: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: {
    title: string;
    url: string;
  }[];
  schemaType?: string;
  breadcrumbs?: {
    name: string;
    url: string;
    position: number;
  }[];
}

const ServicePageLayout = ({
  children,
  title,
  description,
  pageTitle,
  metaDescription,
  serviceType,
  canonicalUrl,
  heroImage = '/therapy-in-havertown.jpg',
  benefits,
  approaches,
  faqs,
  relatedServices,
  schemaType,
  breadcrumbs
}: ServicePageLayoutProps) => {
  const warmGradientBg = "relative overflow-hidden bg-gradient-to-br from-yellow-100/80 via-white/30 to-amber-50/90";

  const warmGradientOverlay = <>
      <div className="absolute inset-0 -z-10">
        <svg className="h-full w-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="warm-pattern" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="scale(0.75) rotate(0)">
              <rect x="0" y="0" width="100%" height="100%" fill="none" />
              <path d="M100 0H0V100" stroke="rgba(252, 211, 77, 0.4)" fill="none" strokeWidth="1" />
              <path d="M0 50H100M50 0V100" stroke="rgba(252, 211, 77, 0.3)" fill="none" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#warm-pattern)" />
        </svg>
      </div>
    </>;

  const itemBgClass = "bg-white/80 backdrop-blur-sm border border-amber-200/30 shadow-sm hover:shadow-md transition-all duration-300";

  const serviceName = serviceType || title.split('in')[0].trim();
  return <>
      <SEOHead title={pageTitle} description={metaDescription} canonicalUrl={canonicalUrl} keywords={`${serviceName.toLowerCase()} havertown pa, ${serviceName.toLowerCase()} delaware county, mental health havertown, therapy havertown pa`} breadcrumbs={breadcrumbs} />
      <SchemaMarkup />

      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-24 bg-white">
          <section className="relative py-12 md:py-16 lg:py-24 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-500 to-amber-400"></div>
            
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="max-w-3xl">                
                <motion.h1 initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}} className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
                  {title}
                </motion.h1>
                
                <motion.p initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.1}} className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
                  {description}
                </motion.p>
                
                <div className="flex flex-row flex-wrap sm:flex-nowrap gap-3 sm:gap-4 mt-6 md:mt-8">
                  <Link to="/appointment" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto bg-white text-orange-600 hover:bg-orange-50">
                      <Calendar className="mr-2 h-5 w-5" /> Schedule a Consultation
                    </Button>
                  </Link>
                  
                  <a href="tel:+18146202162" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white/10">
                      <PhoneCall className="mr-2 h-5 w-5" /> Call (814) 620-2162
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {/* Custom Content Section */}
          {children}

          {/* Treatment Approaches Section */}
          <section className="py-12 bg-orange-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-amber-950">Our {serviceType} Approach</h2>
                <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-6 md:mb-8" />
                <p className="text-amber-900 mb-6">
                  At Sunrise Human Care Services, we utilize evidence-based approaches tailored to your unique needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {approaches.map((approach, index) => (
                  <motion.div 
                    key={index} 
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: index * 0.1}}
                    className={`rounded-lg p-6 ${itemBgClass} h-full`}
                  >
                    <h3 className="text-lg font-semibold mb-3 text-amber-900">{approach.title}</h3>
                    <p className="text-amber-800 text-sm md:text-base">{approach.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          <section className="py-[50px] bg-white">
            {warmGradientOverlay}
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-amber-950">Benefits of {serviceType} in Havertown, PA</h2>
                <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-6 md:mb-8" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {benefits.map((benefit, index) => <motion.div key={index} initial={{
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
              }} className="flex items-start space-x-4">
                    <div className="mt-1 text-orange-600 rounded-full p-1 bg-orange-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-white">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base md:text-lg text-inherit">{benefit}</p>
                  </motion.div>)}
              </div>
            </div>
          </section>
          
          {/* Treatment Process Section */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-950">What to Expect: Our Treatment Process</h2>
                <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-6" />
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  {[
                    {
                      step: "Initial Assessment",
                      description: "Begin with a thorough evaluation to understand your specific needs, history, and goals for therapy."
                    },
                    {
                      step: "Personalized Treatment Plan",
                      description: "Together, we'll develop a customized plan addressing your unique challenges and utilizing the most effective approaches."
                    },
                    {
                      step: "Ongoing Sessions",
                      description: "Regular therapy sessions focus on developing skills, processing experiences, and making progress toward your goals."
                    },
                    {
                      step: "Progress Evaluation",
                      description: "We regularly review and adjust your treatment plan based on your progress and changing needs."
                    },
                    {
                      step: "Completion & Aftercare",
                      description: "As you reach your goals, we'll develop strategies for maintaining progress and provide resources for continued support."
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{opacity: 0, y: 20}}
                      whileInView={{opacity: 1, y: 0}}
                      viewport={{once: true}}
                      transition={{duration: 0.5, delay: index * 0.1}}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-amber-900">{item.step}</h3>
                        <p className="text-amber-800">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Insurance & Payment Section */}
          <section className="py-12 bg-orange-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-950">Insurance & Payment Options</h2>
                <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-6" />
              </div>
              
              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="mb-4">Sunrise Human Care Services is committed to making quality mental health care accessible. We accept many major insurance plans and offer various payment options to accommodate your financial situation.</p>
                  
                  <h3 className="text-lg font-semibold mb-3 text-amber-900">Insurance Plans We Accept</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {["Aetna", "Blue Cross Blue Shield", "Cigna", "UnitedHealthcare", "Medicare", "Medicaid", "Independence Blue Cross", "AmeriHealth"].map((plan, index) => (
                      <li key={index} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-orange-500 mr-2">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {plan}
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-lg font-semibold mb-3 text-amber-900">Additional Payment Options</h3>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-orange-500 mr-2 mt-0.5">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Self-Pay Options:</strong> We offer competitive rates for those paying out-of-pocket.</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-orange-500 mr-2 mt-0.5">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Sliding Scale:</strong> Based on financial need, we may provide adjusted fees.</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-orange-500 mr-2 mt-0.5">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><strong>HSA/FSA:</strong> We accept Health Savings Account and Flexible Spending Account payments.</span>
                    </li>
                  </ul>
                  
                  <p className="text-sm italic">We're happy to verify your insurance benefits before your first appointment. Please contact our office with your insurance information, and we'll help determine your coverage for our services.</p>
                </div>
                
                <div className="mt-6 text-center">
                  <Link to="/appointment" className="inline-flex items-center text-orange-600 font-medium hover:underline">
                    <Calendar className="mr-2 h-4 w-4" /> Schedule an appointment to discuss payment options
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-12 md:py-16 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to Take the First Step?</h2>
                <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
                  Our compassionate team is here to support you on your mental health journey in Havertown, Broomall, and Drexel Hill.
                </p>
                
                <div className="flex flex-row flex-wrap sm:flex-nowrap justify-center gap-3 sm:gap-4">
                  <Link to="/appointment" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full bg-white text-orange-600 hover:bg-orange-50">
                      <Calendar className="mr-2 h-5 w-5" /> Book Mental Health Appointment in Havertown
                    </Button>
                  </Link>
                  
                  <a href="tel:+18146202162" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full bg-transparent border-white text-white hover:bg-white/10">
                      <PhoneCall className="mr-2 h-5 w-5" /> Speak with a Therapist Today
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-[50px] bg-white">
            {warmGradientOverlay}
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-amber-950">Frequently Asked Questions About {serviceType} in Havertown</h2>
                <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-6 md:mb-8" />
              </div>
              
              <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => <motion.div key={index} initial={{
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
              }} className={`mb-5 md:mb-6 rounded-lg p-5 md:p-6 ${itemBgClass}`}>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-amber-900">{faq.question}</h3>
                    <p className="text-amber-800 text-sm md:text-base">{faq.answer}</p>
                  </motion.div>)}
              </div>
            </div>
          </section>
          
          {/* Community Resources Section */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-950">Mental Health Resources</h2>
                <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-6" />
                <p className="text-amber-900 mb-4">
                  In addition to our services, we've compiled these resources to support your mental health journey.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  {
                    title: "Crisis Support",
                    items: [
                      "National Suicide Prevention Lifeline: 988",
                      "Crisis Text Line: Text HOME to 741741",
                      "Delaware County Crisis Connections Team: (855) 889-7827"
                    ]
                  },
                  {
                    title: "Support Groups",
                    items: [
                      "NAMI Delaware County Support Groups",
                      "Anxiety and Depression Association of America",
                      "Local Recovery Community Organizations"
                    ]
                  },
                  {
                    title: "Self-Help Resources",
                    items: [
                      "Mental Health America Screening Tools",
                      "Mindfulness and Meditation Apps",
                      "Recommended Reading Materials"
                    ]
                  }
                ].map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: index * 0.1}}
                    className={`rounded-lg p-6 ${itemBgClass}`}
                  >
                    <h3 className="text-lg font-semibold mb-4 text-amber-900">{resource.title}</h3>
                    <ul className="space-y-2">
                      {resource.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-amber-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
              
              <div className="max-w-3xl mx-auto mt-8 text-center">
                <p className="text-amber-900">
                  For more resources or information about mental health services in Havertown and Delaware County, please contact our office.
                </p>
              </div>
            </div>
          </section>
          
          <section className={`py-12 md:py-16 ${warmGradientBg}`}>
            {warmGradientOverlay}
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-amber-950">Related Services in Havertown</h2>
                <Separator className="w-24 mx-auto bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5 mb-6 md:mb-8" />
                <p className="text-amber-900 mb-6 md:mb-8">
                  Explore our other mental health services in Havertown that complement {serviceType}.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
                {relatedServices.map((service, index) => <motion.div key={index} initial={{
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
              }}>
                    <Link to={service.url} className={`block rounded-lg p-5 md:p-6 h-full ${itemBgClass}`}>
                      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-amber-900">{service.title}</h3>
                      <div className="flex items-center text-orange-500 mt-3 md:mt-4">
                        <span className="text-sm font-medium">Learn more</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </Link>
                  </motion.div>)}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>;
};
export default ServicePageLayout;
