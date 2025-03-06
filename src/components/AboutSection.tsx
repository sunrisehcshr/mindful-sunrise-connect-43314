
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 pb-4 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sunrise-400/20 text-sunrise-900 mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dedicated to Your Mental Health Journey
            </h2>
            <p className="text-muted-foreground mb-6">Step into a brighter tomorrow with Sunrise Human Care Services, founded by Michael Thevar, whose dedication to mental health spans over 30 years. Built on a foundation of experience, trust, and community care, we are committed to helping individuals navigate their challenges and realize their full potential.</p>
            <p className="text-muted-foreground mb-6">With a deep understanding of mental well-being, our mission is to provide compassionate support and meaningful solutions, empowering people to lead healthier, more fulfilling lives.</p>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <img className="rounded-2xl h-40 object-cover w-full md:h-64 shadow-md" src="https://i.imgur.com/CIVFGK9.jpeg" alt="Mental health of older adults" />
            <img className="rounded-2xl h-40 object-cover w-full md:h-64 mt-8 shadow-md" src="https://i.imgur.com/OxJkb2X.jpeg="family counseling in havertown" />
            <img className="rounded-2xl h-40 object-cover w-full md:h-64 shadow-md col-span-2" src="https://i.imgur.com/oLQIxo3.jpeg" alt="Couple therapy in havertown,pa" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
