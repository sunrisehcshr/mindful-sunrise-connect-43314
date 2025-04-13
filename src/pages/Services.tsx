
import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/services/ServicesSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';
import WarmTestimonialsSection from '../components/WarmTestimonialsSection';

const Services = () => {
  // Services page breadcrumbs
  const servicesBreadcrumbs = [
    {
      name: "Home",
      url: "https://sunrisehumancare.com",
      position: 1
    },
    {
      name: "Services",
      url: "https://sunrisehumancare.com/services",
      position: 2
    }
  ];
  
  return (
    <>
      <SEOHead 
        title="Mental Health Services in Havertown, PA | Therapy & Counseling | Sunrise Human Care" 
        description="Comprehensive mental health services in Havertown, PA. We offer therapy for anxiety, depression, ADHD, trauma, and more for children, teens, adults, and seniors. Call (814) 620-2162." 
        canonicalUrl="https://sunrisehumancare.com/services"
        keywords="mental health services Havertown, therapy Delaware County PA, counseling services Pennsylvania, psychiatry Havertown, anxiety therapy PA, depression treatment Havertown"
        serviceSchema={{
          name: "Mental Health Services",
          description: "Comprehensive mental health services including therapy, counseling, and psychiatric care for individuals, families, and couples.",
          provider: "Sunrise Human Care Services",
          serviceType: "Mental Health Care",
          areaServed: "Havertown, PA and Delaware County"
        }}
        breadcrumbs={servicesBreadcrumbs}
      />
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
          
          <ServicesSection />
          
          {/* Local Context Section */}
          <section className="py-16 bg-orange-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-playfair">
                  Mental Health Services in Havertown, Pennsylvania
                </h2>
                <p className="mb-4">
                  At Sunrise Human Care Services, we're proud to provide comprehensive mental health services to Havertown and surrounding communities in Delaware County. Our practice at 2050 West Chester Pike offers a convenient location for residents seeking high-quality mental health care close to home.
                </p>
                <p className="mb-4">
                  We understand the unique needs of our local community and provide culturally responsive care that considers the specific challenges and resources of the Havertown area. Whether you're coming from Haverford Township, Springfield, Upper Darby, Broomall, or other nearby areas, our team is committed to improving mental health awareness and reducing stigma throughout Delaware County.
                </p>
                <p>
                  Our full range of mental health services in Havertown includes individual therapy, family counseling, anxiety treatment, depression therapy, and specialized care for conditions like ADHD, trauma, and OCD. We welcome clients of all ages and backgrounds to experience the compassionate care that has made us a trusted provider in Delaware County.
                </p>
              </div>
            </div>
          </section>
          
          {/* Add Testimonials Section */}
          <WarmTestimonialsSection />
          
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;
