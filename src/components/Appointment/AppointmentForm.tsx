import React, { useState } from 'react';
import { toast } from 'sonner';
import { Phone, Mail, Hospital, Video } from 'lucide-react';
const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    sessionType: "",
    preferredContact: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const services = ["Individual Therapy", "Group Therapy", "Family Counseling", "Couples Counseling", "Psychiatry & Medication Management", "Specialized Programs"];
  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

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
    setIsSubmitting(true);
    try {
      const formspreeData = {
        ...formData,
        _cc: "shweta.s@sunrisehcsllc.com" // Add CC email
      };
      const response = await fetch("https://formspree.io/f/mqkrqkwo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formspreeData)
      });
      if (response.ok) {
        toast.success("Thank you! Your appointment request has been submitted.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          service: "",
          sessionType: "",
          preferredContact: "",
          message: ""
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return <form onSubmit={handleSubmit} className="space-y-4 bg-white/80 p-4 sm:p-6 rounded-lg shadow-sm border border-sunrise-100/50 warm-glow">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
        <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-md border border-sunrise-200/70 bg-white/90 focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:border-transparent" required />
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-md border border-sunrise-200/70 bg-white/90 focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:border-transparent" required />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
          <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-md border border-sunrise-200/70 bg-white/90 focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:border-transparent" required />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-foreground mb-1">Preferred Date</label>
          <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-md border border-sunrise-200/70 bg-white/90 focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:border-transparent" required />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-foreground mb-1">Preferred Time</label>
          <select id="time" name="time" value={formData.time} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-md border border-sunrise-200/70 bg-white/90 focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:border-transparent" required>
            <option value="" disabled>Select a time...</option>
            {timeSlots.map((timeSlot, index) => <option key={index} value={timeSlot}>{timeSlot}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1">Service Type</label>
        <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-md border border-sunrise-200/70 bg-white/90 focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:border-transparent" required>
          <option value="" disabled>Select a service...</option>
          {services.map((svc, index) => <option key={index} value={svc}>{svc}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Session Type</label>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="radio" name="sessionType" value="in-clinic" onChange={handleChange} checked={formData.sessionType === 'in-clinic'} className="h-4 w-4 text-orange-500 focus:ring-orange-500" required />
            <span className="flex items-center text-sm">
              <Hospital className="h-3 w-3 text-orange-500 mr-1" /> In-Clinic
            </span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="radio" name="sessionType" value="online" onChange={handleChange} checked={formData.sessionType === 'online'} className="h-4 w-4 text-orange-500 focus:ring-orange-500" />
            <span className="flex items-center text-sm">
              <Video className="h-3 w-3 text-orange-500 mr-1" /> Online
            </span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Preferred Contact Method</label>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="radio" name="preferredContact" value="phone" onChange={handleChange} checked={formData.preferredContact === 'phone'} className="h-4 w-4 text-orange-500 focus:ring-orange-500" required />
            <span className="flex items-center text-sm">
              <Phone className="h-3 w-3 text-orange-500 mr-1" /> Phone
            </span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="radio" name="preferredContact" value="email" onChange={handleChange} checked={formData.preferredContact === 'email'} className="h-4 w-4 text-orange-500 focus:ring-orange-500" />
            <span className="flex items-center text-sm">
              <Mail className="h-3 w-3 text-orange-500 mr-1" /> Email
            </span>
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Your Message</label>
        <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-md border border-sunrise-200/70 bg-white/90 focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:border-transparent" placeholder="Please share any specific concerns or questions you have." required></textarea>
      </div>

      <button type="submit" disabled={isSubmitting} className="w-full text-white font-medium py-2 px-3 text-sm rounded-md transition-colors duration-300 shadow-sm hover:shadow-md disabled:opacity-100 disabled:cursor-not-allowed bg-orange-500 hover:bg-orange-400">
        {isSubmitting ? "Submitting..." : "Request Appointment"}
      </button>
    </form>;
};
export default AppointmentForm;