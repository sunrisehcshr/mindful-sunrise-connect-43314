
import React, { useState } from 'react';

const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const services = ["Individual Therapy", "Group Therapy", "Family Counseling", "Couples Counseling", "Psychiatry & Medication Management", "Specialized Programs"];
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xpwqvvvw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          service: "",
          message: ""
        });

        // Hide success message after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
        <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50" required />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50" required />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
          <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50" required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-foreground mb-1">Preferred Date</label>
          <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50" required />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-foreground mb-1">Preferred Time</label>
          <select id="time" name="time" value={formData.time} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50" required>
            <option value="" disabled>Select a time...</option>
            {timeSlots.map((timeSlot, index) => <option key={index} value={timeSlot}>{timeSlot}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1">Service Type</label>
        <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50" required>
          <option value="" disabled>Select a service...</option>
          {services.map((svc, index) => <option key={index} value={svc}>{svc}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Your Message</label>
        <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50" placeholder="Please share any specific concerns or questions you have." required></textarea>
      </div>

      <button type="submit" className="btn-sunrise w-full">
        {submitted ? "Request Sent!" : "Request Appointment"}
      </button>
    </form>;
};
export default AppointmentForm;
