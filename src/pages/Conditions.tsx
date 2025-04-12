
import React from 'react';
import ConditionsSection from '../components/conditions/ConditionsSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';

const Conditions = () => {
  return (
    <>
      <SEOHead 
        title="Mental Health Conditions We Treat in Havertown, PA | Sunrise Human Care" 
        description="Comprehensive evidence-based treatment for anxiety, depression, ADHD, PTSD, OCD, bipolar disorder, and more mental health conditions in Havertown, PA. Our expert team provides specialized care for all ages. Call (814) 620-2162." 
        canonicalUrl="https://sunrisehumancare.com/conditions"
        keywords="mental health conditions Havertown, anxiety treatment PA, depression therapy Delaware County, ADHD treatment Havertown, PTSD therapy Pennsylvania, OCD treatment near me, bipolar disorder help"
        serviceSchema={{
          name: "Mental Health Condition Treatment",
          description: "Evidence-based treatment for a wide range of mental health conditions including anxiety, depression, ADHD, PTSD, OCD, bipolar disorder, and more.",
          provider: "Sunrise Human Care Services",
          serviceType: "Mental Health Treatment",
          areaServed: "Havertown, PA and Delaware County"
        }}
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 bg-white">
          {/* Hero Section */}
          <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-500 to-amber-400"></div>
            
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44NSA1NC44NXYtNTBINS4xNXY1MGg0OS43eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
            
            <div className="container relative z-10 mx-auto px-4 md:px-6">
              <div className="max-w-3xl">                
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
                  Mental Health Conditions We Treat in Havertown
                </h1>
                
                <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
                  Our experienced team provides evidence-based treatment for a wide range of mental health conditions affecting children, adolescents, adults, and seniors in Havertown, PA and the surrounding Delaware County area.
                </p>
                
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <a href="#anxiety" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-white text-orange-600 shadow hover:bg-white/90 h-9 px-4 py-2">
                    Anxiety
                  </a>
                  <a href="#depression" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-white text-orange-600 shadow hover:bg-white/90 h-9 px-4 py-2">
                    Depression
                  </a>
                  <a href="#adhd" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-white text-orange-600 shadow hover:bg-white/90 h-9 px-4 py-2">
                    ADHD
                  </a>
                  <a href="#trauma" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-white text-orange-600 shadow hover:bg-white/90 h-9 px-4 py-2">
                    Trauma & PTSD
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          <ConditionsSection />
          
          {/* Local Context Section */}
          <section className="py-16 bg-orange-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-playfair">Mental Health Care in Havertown, Pennsylvania</h2>
                <p className="mb-4">At Sunrise Human Care Services, we're proud to serve the Havertown community and surrounding areas in Delaware County with comprehensive mental health care. Our practice is conveniently located at 2050 West Chester Pike, making quality mental health treatment accessible to residents throughout the region.</p>
                <p className="mb-4">We understand the unique needs of our local community and provide culturally responsive care that considers the specific challenges and resources of the Havertown area. Our team is committed to improving mental health awareness and reducing stigma throughout Delaware County.</p>
                <p>Whether you're coming from Haverford Township, Springfield, Upper Darby, Broomall, or other nearby communities, we provide a welcoming environment where you can receive expert care for a wide range of mental health conditions.</p>
              </div>
            </div>
          </section>
          
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Conditions;
