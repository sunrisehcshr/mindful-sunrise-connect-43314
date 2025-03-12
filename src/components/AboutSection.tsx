
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
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 to-orange-200 rounded-3xl blur-md"></div>
              <img src="/images/Therapy-in-havertown.webp" alt="Therapy session in Havertown" className="w-full h-auto rounded-2xl shadow-xl relative z-10 border-2 border-amber-50" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
