
import React, { useState } from 'react';
import { toast } from 'sonner';
import { CalendarIcon, Phone, Mail, Hospital, Video, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface QuickAppointmentFormProps {
  defaultService?: string;
}

const QuickAppointmentForm: React.FC<QuickAppointmentFormProps> = ({ defaultService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: undefined as Date | undefined,
    time: '',
    service: defaultService || '',
    sessionType: '',
    preferredContact: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Individual Therapy",
    "Couples Counseling",
    "Family Therapy",
    "Child & Adolescent Therapy",
    "Group Therapy",
    "Anxiety Therapy",
    "Depression Therapy",
    "Trauma & PTSD Therapy",
    "ADHD Treatment",
    "Psychiatric Evaluation",
    "Medication Management",
    "Substance Use Counseling",
    "Grief Counseling",
    "Life Transitions Counseling",
    "Other"
  ];
  
  const timeSlots = [
    '9:00 AM', 
    '10:00 AM', 
    '11:00 AM', 
    '12:00 PM', 
    '1:00 PM', 
    '2:00 PM', 
    '3:00 PM', 
    '4:00 PM', 
    '5:00 PM'
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
    
    if (!formData.time) {
      toast.error('Please select a preferred time');
      return;
    }
    
    setIsSubmitting(true);

    try {
      const formattedData = {
        ...formData,
        date: formData.date ? format(formData.date, 'PPP') : '',
        _subject: "Quick Appointment Request",
        _cc: "shweta.s@sunrisehumancare.com"
      };
      
      const response = await fetch('https://formspree.io/f/xzzeaeql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });
      
      if (response.ok) {
        toast.success('Thank you! Your appointment request has been submitted. We will contact you shortly to confirm.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: undefined,
          time: '',
          service: '',
          sessionType: '',
          preferredContact: '',
          message: '',
        });
        
        const closeButton = document.querySelector('[data-state="open"] button[data-state="closed"]');
        if (closeButton && closeButton instanceof HTMLElement) {
          closeButton.click();
        }
      } else {
        console.error("Form submission failed:", await response.text());
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
    <form onSubmit={handleSubmit} className="space-y-3 text-sm max-h-[80vh] overflow-y-auto px-1">
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
          className="w-full px-3 py-1.5 text-sm rounded-md border border-sunrise-200/70 bg-white focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:border-transparent"
          required
        />
      </div>

      <div className="space-y-3">
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
            className="w-full px-3 py-1.5 text-sm rounded-md border border-sunrise-200/70 bg-white focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:border-transparent"
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
            className="w-full px-3 py-1.5 text-sm rounded-md border border-sunrise-200/70 bg-white focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:border-transparent"
            required
          />
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-1">
            Preferred Date*
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left text-xs font-normal border-sunrise-200/70 px-3 py-1.5 h-auto",
                  !formData.date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-3 w-3" />
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
                className={cn("p-2 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div>
          <label htmlFor="time" className="block text-sm font-medium mb-1">
            Preferred Time*
          </label>
          <div className="relative">
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-3 py-1.5 text-sm rounded-md border border-sunrise-200/70 bg-white focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:border-transparent appearance-none"
              required
            >
              <option value="" disabled>Select a time...</option>
              {timeSlots.map((timeSlot, index) => (
                <option key={index} value={timeSlot}>{timeSlot}</option>
              ))}
            </select>
            <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-3 w-3 text-muted-foreground pointer-events-none" />
          </div>
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
            className="w-full px-3 py-1.5 text-sm rounded-md border border-sunrise-200/70 bg-white focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:border-transparent"
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
        <div className="flex flex-wrap gap-3">
          <label className="flex items-center space-x-1 cursor-pointer">
            <input
              type="radio"
              name="sessionType"
              value="in-clinic"
              onChange={handleChange}
              checked={formData.sessionType === 'in-clinic'}
              className="h-3 w-3 text-orange-500 focus:ring-orange-500"
              required
            />
            <span className="flex items-center text-xs">
              <Hospital className="h-3 w-3 text-orange-500 mr-1" /> In-Clinic
            </span>
          </label>
          <label className="flex items-center space-x-1 cursor-pointer">
            <input
              type="radio"
              name="sessionType"
              value="online"
              onChange={handleChange}
              checked={formData.sessionType === 'online'}
              className="h-3 w-3 text-orange-500 focus:ring-orange-500"
            />
            <span className="flex items-center text-xs">
              <Video className="h-3 w-3 text-orange-500 mr-1" /> Online
            </span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Preferred Contact Method*
        </label>
        <div className="flex flex-wrap gap-3">
          <label className="flex items-center space-x-1 cursor-pointer">
            <input
              type="radio"
              name="preferredContact"
              value="phone"
              onChange={handleChange}
              checked={formData.preferredContact === 'phone'}
              className="h-3 w-3 text-orange-500 focus:ring-orange-500"
              required
            />
            <span className="flex items-center text-xs">
              <Phone className="h-3 w-3 text-orange-500 mr-1" /> Phone
            </span>
          </label>
          <label className="flex items-center space-x-1 cursor-pointer">
            <input
              type="radio"
              name="preferredContact"
              value="email"
              onChange={handleChange}
              checked={formData.preferredContact === 'email'}
              className="h-3 w-3 text-orange-500 focus:ring-orange-500"
            />
            <span className="flex items-center text-xs">
              <Mail className="h-3 w-3 text-orange-500 mr-1" /> Email
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
          rows={2}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-1.5 text-sm rounded-md border border-sunrise-200/70 bg-white focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:border-transparent"
          placeholder="Any specific concerns or questions?"
        ></textarea>
      </div>

      <div className="pt-1">
        <Button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm py-1 h-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Request Appointment"}
        </Button>
        <p className="text-xs text-muted-foreground mt-1 text-center">
          We'll confirm your appointment within 24 hours.
        </p>
      </div>
    </form>
  );
};

export default QuickAppointmentForm;
