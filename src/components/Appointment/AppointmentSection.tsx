
import React from 'react';
import AppointmentForm from './AppointmentForm';
import ContactInfo from './ContactInfo';
import OpeningHours from './OpeningHours';

const AppointmentSection: React.FC = () => {
  return (
    <section id="appointment" className="py-20 bg-white/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sunrise-400/20 text-sunrise-900 mb-4">
              Book an Appointment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Schedule Your Consultation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take the first step toward better mental health by scheduling an appointment with one of our experienced professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <AppointmentForm />
            </div>
            
            <div className="space-y-8">
              {/* Map */}
              <div className="h-64 md:h-80 rounded-xl overflow-hidden border border-sunrise-100/50 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.025196175262!2d-75.35433992420519!3d39.97271998652599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c1c6a4c1b55b%3A0xa5a74da50eaac1d!2s2050%20West%20Chester%20Pike%2C%20Havertown%2C%20PA%2019083!5e0!3m2!1sen!2sus!4v1682187759696!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sunrise Human Care Services location map"
                ></iframe>
              </div>
              
              <div className="bg-white/80 p-6 rounded-lg border border-sunrise-100/50 shadow-sm warm-glow">
                <ContactInfo />
              </div>
              
              <div className="bg-white/80 p-6 rounded-lg border border-sunrise-100/50 shadow-sm warm-glow">
                <OpeningHours />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
