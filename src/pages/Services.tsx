
import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/services/ServicesSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEOHead from '../components/SEOHead';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const servicesBreadcrumbs = [
    { name: "Home", url: "https://sunrisehumancare.com", position: 1 },
    { name: "Services", url: "https://sunrisehumancare.com/services", position: 2 }
  ];
  
  return (
    <>
      <SEOHead 
        title="Mental Health Services in Darby, PA | Therapy & Counseling | Sunrise Human Care" 
        description="Comprehensive mental health services in Darby, PA. We offer therapy for anxiety, depression, ADHD, trauma, and more for children, teens, adults, and seniors in Delaware County. Call (814) 620-2162." 
        canonicalUrl="https://sunrisehumancare.com/services"
        keywords="mental health services Darby, therapy Delaware County PA, counseling services Pennsylvania, psychiatry Darby, anxiety therapy PA, depression treatment Darby"
        serviceSchema={{
          name: "Mental Health Services",
          description: "Comprehensive mental health services including therapy, counseling, and psychiatric care for individuals, families, and couples in Darby and Delaware County.",
          provider: "Sunrise Human Care Services",
          serviceType: "Mental Health Care",
          areaServed: "Darby, PA and Delaware County"
        }}
        breadcrumbs={servicesBreadcrumbs}
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-28 bg-[#faf8f4]">
          {/* Hero */}
          <section className="py-16 md:py-20 lg:py-28 bg-[#f0ece4]">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                <div className="flex items-center mb-4 text-stone-500 font-barlow text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Darby, PA • Delaware County • 19023</span>
                </div>
                
                <h1 className="font-barlow font-bold text-2xl sm:text-3xl md:text-5xl text-stone-800 tracking-tight leading-tight mb-6">
                  Mental Health Services
                  <span className="block font-instrument-serif italic text-amber-700/70 font-normal">in Darby, PA</span>
                </h1>
                
                <p className="text-base md:text-lg text-stone-600 font-barlow mb-8 leading-relaxed">
                  At Sunrise Human Care, we provide comprehensive mental health services in Darby and throughout Delaware County. Our team offers specialized therapy, counseling, and psychiatric care for children, adolescents, adults, and seniors.
                </p>
              </div>
            </div>
          </section>
          
          <ServicesSection />
          
          {/* Local Context */}
          <section className="py-16 bg-[#f0ece4]">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-barlow font-bold text-2xl md:text-3xl text-stone-800 tracking-tight mb-6">
                  Mental Health Services in Darby, Pennsylvania
                </h2>
                <div className="space-y-4 text-stone-600 font-barlow leading-relaxed">
                  <p>
                    At Sunrise Human Care Services, we're proud to provide comprehensive mental health services to Darby and surrounding communities in Delaware County. Our practice at 869 Main Street offers a convenient location for residents seeking high-quality mental health care close to home.
                  </p>
                  <p>
                    We understand the unique needs of our local community and provide culturally responsive care that considers the specific challenges and resources of the Darby area. Whether you're coming from Haverford Township, Collingdale, Upper Darby, Yeadon, or other nearby areas, our team is committed to improving mental health awareness and reducing stigma throughout Delaware County.
                  </p>
                  <p>
                    Our full range of mental health services in Darby includes individual therapy, family counseling, anxiety treatment, depression therapy, and specialized care for conditions like ADHD, trauma, and OCD. We welcome clients of all ages and backgrounds to experience the compassionate care that has made us a trusted provider in Delaware County.
                  </p>
                </div>
                
                <div className="mt-8 bg-white rounded-2xl p-6 border border-stone-200/80">
                  <h3 className="text-xl font-barlow font-semibold mb-4 text-stone-800">Areas We Serve in Delaware County</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <Link to="/mental-health-darby-pa" className="px-3 py-2 bg-amber-50 hover:bg-amber-100 transition-colors rounded-lg text-center font-barlow text-stone-700">
                      Darby
                    </Link>
                    {["Yeadon", "Lansdowne", "Upper Darby", "Collingdale", "Sharon Hill"].map(city => (
                      <div key={city} className="px-3 py-2 bg-amber-50 rounded-lg text-center font-barlow text-stone-700">
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 text-sm text-stone-500 font-barlow">
                  <p>Proudly serving ZIP codes: 19023 (Darby), 19008 (Yeadon), 19003 (Lansdowne), 19026 (Upper Darby), 19064 (Collingdale), 19073 (Sharon Hill), and surrounding areas in Delaware County, Pennsylvania.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;
