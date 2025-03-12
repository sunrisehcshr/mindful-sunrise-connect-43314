
import React, { useState } from 'react';
import { toast } from 'sonner';
import { CalendarIcon, Phone, Mail, Hospital, Video } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const QuickAppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: undefined as Date | undefined,
    service: '',
    sessionType: '',
    preferredContact: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Individual Therapy',
    'Group Therapy',
    'Family Counseling',
    'Couples Counseling',
    'Psychiatry & Medication Management',
    'Specialized Programs',
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date: Date | undefined) => {
    setFormData({
      ...formData,
      date,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.date) {
      toast.error('Please select a preferred date');
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Format the date for the form submission
      const formattedData = {
        ...formData,
        date: formData.date ? format(formData.date, 'PPP') : '',
        _cc: "shweta.s@sunrisehcsllc.com" // Add CC email
      };
      
      // Send data to Formspree
      const response = await fetch('https://formspree.io/f/mqkrqkwo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });
      
      if (response.ok) {
        toast.success('Thank you! Your appointment request has been submitted.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: undefined,
          service: '',
          sessionType: '',
          preferredContact: '',
          message: '',
        });
        
        // Close the dialog after successful submission
        const closeButton = document.querySelector('[data-state="open"] button[data-state="closed"]');
        if (closeButton && closeButton instanceof HTMLElement) {
          closeButton.click();
        }
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Full Name*
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border border-sunrise-200/70 bg-white focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:border-transparent"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-sunrise-200/70 bg-white focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number*
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-sunrise-200/70 bg-white focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:border-transparent"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-1">
            Preferred Date*
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal border-sunrise-200/70",
                  !formData.date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formData.date ? format(formData.date, "PPP") : <span>Select a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={formData.date}
                onSelect={handleDateChange}
                initialFocus
                disabled={(date) => date < new Date()}
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-1">
            Service Type*
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-sunrise-200/70 bg-white focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:border-transparent"
            required
          >
            <option value="" disabled>
              Select a service...
            </option>
            {services.map((svc, index) => (
              <option key={index} value={svc}>
                {svc}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Session Type*
        </label>
        <div className="flex gap-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="sessionType"
              value="in-clinic"
              onChange={handleChange}
              checked={formData.sessionType === 'in-clinic'}
              className="h-4 w-4 text-orange-500 focus:ring-orange-500"
              required
            />
            <span className="flex items-center">
              <Hospital className="h-4 w-4 text-orange-500 mr-1" /> In-Clinic
            </span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="sessionType"
              value="online"
              onChange={handleChange}
              checked={formData.sessionType === 'online'}
              className="h-4 w-4 text-orange-500 focus:ring-orange-500"
            />
            <span className="flex items-center">
              <Video className="h-4 w-4 text-orange-500 mr-1" /> Online
            </span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Preferred Contact Method*
        </label>
        <div className="flex gap-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="preferredContact"
              value="phone"
              onChange={handleChange}
              checked={formData.preferredContact === 'phone'}
              className="h-4 w-4 text-orange-500 focus:ring-orange-500"
              required
            />
            <span className="flex items-center">
              <Phone className="h-4 w-4 text-orange-500 mr-1" /> Phone
            </span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="preferredContact"
              value="email"
              onChange={handleChange}
              checked={formData.preferredContact === 'email'}
              className="h-4 w-4 text-orange-500 focus:ring-orange-500"
            />
            <span className="flex items-center">
              <Mail className="h-4 w-4 text-orange-500 mr-1" /> Email
            </span>
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Your Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border border-sunrise-200/70 bg-white focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:border-transparent"
          placeholder="Any specific concerns or questions?"
        ></textarea>
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-400 text-white font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Request Appointment"}
        </Button>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          We'll confirm your appointment within 24 hours.
        </p>
      </div>
    </form>
  );
};

export default QuickAppointmentForm;
