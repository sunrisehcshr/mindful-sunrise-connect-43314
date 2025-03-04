
import React, { useState } from 'react';

const AppointmentForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Individual Therapy",
    "Group Therapy",
    "Family Counseling",
    "Couples Counseling",
    "Psychiatry & Medication Management",
    "Specialized Programs"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log({ name, email, phone, date, service, message });
    setSubmitted(true);
    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setService("");
    setMessage("");
    
    // Show success for 3 seconds then reset
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-foreground mb-1">Preferred Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50"
            required
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1">Service Type</label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50"
            required
          >
            <option value="" disabled>Select a service...</option>
            {services.map((svc, index) => (
              <option key={index} value={svc}>{svc}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Your Message</label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50"
          placeholder="Please share any specific concerns or questions you have."
          required
        ></textarea>
      </div>
      
      <button type="submit" className="btn-sunrise w-full">
        {submitted ? "Request Sent!" : "Request Appointment"}
      </button>
    </form>
  );
};

export default AppointmentForm;
