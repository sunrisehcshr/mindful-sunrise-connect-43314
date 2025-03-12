import React from 'react';
const AboutSection: React.FC = () => {
  return <section id="about" className="py-12 pb-4 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-3 py-1 rounded-full text-xs bg-orange-500 mb-4 text-white font-semibold">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dedicated to Your Mental Health Journey
            </h2>
            <p className="text-muted-foreground mb-6">Step into a brighter tomorrow with Sunrise Human Care Services, founded by Michael Thevar, whose dedication to mental health spans over 30 years. Built on a foundation of experience, trust, and community care, we are committed to helping individuals navigate their challenges and realize their full potential.</p>
            <p className="text-muted-foreground mb-6">With a deep understanding of mental well-being, our mission is to provide compassionate support and meaningful solutions for children, teens, adults, and seniors to lead healthier, more fulfilling lives.</p>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <img className="rounded-2xl h-40 object-cover w-full md:h-64 shadow-md" src="/images/therapy-for-older-adults.webp" alt="Compassionate therapy for older adults in Havertown, PA" />

          <img className="rounded-2xl h-40 object-cover w-full md:h-64 mt-8 shadow-md" src="/images/family-counseling-havertown.webp" alt="Expert family counseling services in Havertown, PA" />

          <img className="rounded-2xl h-40 object-cover w-full md:h-64 shadow-md col-span-2" src="/images/couple-counseling-havertown-pa.webp" alt="Professional couples therapy in Havertown, PA for stronger relationships" />

          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;