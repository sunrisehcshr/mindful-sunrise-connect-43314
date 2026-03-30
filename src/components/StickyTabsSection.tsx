import React, { useEffect, useRef, useState } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from './ui/button';
import AppointmentDialog from './Appointment/AppointmentDialog';

const tabs = [
  {
    title: (
      <>Compassionate care rooted in <span className="text-amber-400">community</span></>
    ),
    description:
      "Our Darby clinic offers a warm, welcoming environment where every client is treated with dignity and respect. We believe healing begins with genuine human connection.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: (
      <>Evidence-based therapies for <span className="text-amber-400">lasting results</span></>
    ),
    description:
      "From CBT and DBT to trauma-focused approaches, our licensed professionals use proven methods tailored to your unique needs — in-person or via telehealth.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: (
      <>Holistic support for <span className="text-amber-400">every stage of life</span></>
    ),
    description:
      "Whether you're navigating childhood challenges, relationship struggles, or life transitions — we provide comprehensive care for individuals, couples, families, and older adults.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
  },
];

const StickyTabsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrolled = -rect.top;
      const segmentHeight = (sectionHeight - window.innerHeight) / tabs.length;

      if (scrolled < 0) {
        setActiveIndex(0);
      } else {
        const index = Math.min(
          Math.floor(scrolled / segmentHeight),
          tabs.length - 1
        );
        setActiveIndex(index);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10"
      style={{ height: `${tabs.length * 150 + 100}vh` }}
    >
      <div className="sticky top-0 h-screen">
        <div className="h-full bg-stone-800 rounded-t-[2rem] px-4 md:px-[3.3%] py-8 md:py-16">
          <div className="h-full grid grid-cols-1 md:grid-cols-[0.4fr_1fr] gap-4 md:gap-6 max-w-[120rem] mx-auto">
            {/* Left Panel */}
            <div className="bg-stone-700 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden min-h-[220px] md:min-h-0">
              <div className="relative flex-1">
                {tabs.map((tab, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 flex flex-col justify-center text-center transition-opacity duration-500 px-2"
                    style={{ opacity: activeIndex === index ? 1 : 0 }}
                  >
                    <h2 className="font-barlow font-medium text-xl md:text-2xl lg:text-[2.125rem] text-stone-100 leading-tight tracking-tight mb-4">
                      {tab.title}
                    </h2>
                    <div className="w-full h-px bg-stone-500 my-3" />
                    <p className="text-sm md:text-base text-stone-400 font-barlow leading-relaxed">
                      {tab.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="relative z-10 mt-4">
                <AppointmentDialog>
                  <Button className="w-full bg-transparent border border-amber-400 text-stone-100 font-barlow font-medium rounded-lg hover:bg-amber-400 hover:text-stone-900 transition-colors duration-300">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Your Appointment
                  </Button>
                </AppointmentDialog>
              </div>
            </div>

            {/* Right Panel */}
            <div className="rounded-2xl relative overflow-hidden min-h-[300px] md:min-h-0">
              {tabs.map((tab, index) => (
                <img
                  key={index}
                  src={tab.image}
                  alt={`Sunrise Human Care - ${typeof tab.title === 'string' ? tab.title : 'service'}`}
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-all duration-500"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateY(0)' : 'translateY(100%)',
                  }}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyTabsSection;
