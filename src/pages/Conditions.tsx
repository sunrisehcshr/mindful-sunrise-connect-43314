
import React from 'react';
import ConditionsSection from '../components/conditions/ConditionsSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';

const Conditions = () => {
  return (
    <>
      <SEOHead 
        title="Mental Health Conditions We Treat in Darby, PA | Sunrise Human Care" 
        description="Comprehensive evidence-based treatment for anxiety, depression, ADHD, PTSD, OCD, bipolar disorder, and more mental health conditions in Darby, PA. Our expert team provides specialized care for all ages. Call (814) 620-2162." 
        canonicalUrl="https://sunrisehumancare.com/conditions"
        keywords="mental health conditions Darby, anxiety treatment PA, depression therapy Delaware County, ADHD treatment Darby, PTSD therapy Pennsylvania, OCD treatment near me, bipolar disorder help"
        serviceSchema={{
          name: "Mental Health Condition Treatment",
          description: "Evidence-based treatment for a wide range of mental health conditions including anxiety, depression, ADHD, PTSD, OCD, bipolar disorder, and more.",
          provider: "Sunrise Human Care Services",
          serviceType: "Mental Health Treatment",
          areaServed: "Darby, PA and Delaware County"
        }}
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-28 bg-[#faf8f4]">
          {/* Hero */}
          <section className="py-16 md:py-20 lg:py-28 bg-[#f0ece4]">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600/70 mb-4">Specialized Care</span>
                <h1 className="font-barlow font-bold text-2xl sm:text-3xl md:text-5xl text-stone-800 tracking-tight leading-tight mb-6">
                  Mental Health Conditions
                  <span className="block font-instrument-serif italic text-amber-700/70 font-normal">We Treat in Darby</span>
                </h1>
                
                <p className="text-base md:text-lg text-stone-600 font-barlow mb-8 leading-relaxed">
                  Our experienced team provides evidence-based treatment for a wide range of mental health conditions affecting children, adolescents, adults, and seniors in Darby, PA and the surrounding Delaware County area.
                </p>
              </div>
            </div>
          </section>
          
          <ConditionsSection />
          
          {/* Local Context */}
          <section className="py-16 bg-[#faf8f4]">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto space-y-4 text-stone-600 font-barlow leading-relaxed">
                <h2 className="font-barlow font-bold text-2xl md:text-3xl text-stone-800 tracking-tight mb-6">Mental Health Care in Darby, Pennsylvania</h2>
                <p>At Sunrise Human Care Services, we're proud to serve the Darby community and surrounding areas in Delaware County with comprehensive mental health care. Our practice is conveniently located at 869 Main Street, making quality mental health treatment accessible to residents throughout the region.</p>
                <p>We understand the unique needs of our local community and provide culturally responsive care that considers the specific challenges and resources of the Darby area. Our team is committed to improving mental health awareness and reducing stigma throughout Delaware County.</p>
                <p>Whether you're coming from Haverford Township, Collingdale, Upper Darby, Yeadon, or other nearby communities, we provide a welcoming environment where you can receive expert care for a wide range of mental health conditions.</p>
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
