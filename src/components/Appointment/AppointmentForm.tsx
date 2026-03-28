import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { appointmentFormSchema } from '@/lib/formValidation';
import { useFormProtection } from '@/hooks/useFormProtection';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    preferredDateTime: '',
    serviceInterest: '' as 'Counseling' | 'Psychiatric Consultation' | 'General Inquiry' | '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { honeypot, setHoneypot, validateSubmission } = useFormProtection();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Spam protection
      const validation = validateSubmission();
      if (!validation.valid) {
        toast.error(validation.error || 'Submission blocked');
        setIsSubmitting(false);
        return;
      }

      // Validate form data
      const validatedData = appointmentFormSchema.parse({
        ...formData,
        honeypot
      });

      const response = await fetch('https://formspree.io/f/xzzeaeql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });

      if (response.ok) {
        toast.success('Request submitted successfully! We\'ll contact you soon.');
        setFormData({
          firstName: '',
          email: '',
          phone: '',
          preferredDateTime: '',
          serviceInterest: '',
        });
      } else {
        toast.error('Failed to submit request. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Please check your information and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="honeypot"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />
      
      <div className="space-y-2">
        <Label htmlFor="firstName">First Name *</Label>
        <Input
          id="firstName"
          name="firstName"
          type="text"
          required
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number (Optional)</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(123) 456-7890"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="preferredDateTime">Preferred Date or Time</Label>
        <Input
          id="preferredDateTime"
          name="preferredDateTime"
          type="text"
          value={formData.preferredDateTime}
          onChange={handleChange}
          placeholder="e.g., Next Tuesday afternoon, or any weekday morning"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="serviceInterest">Service Interest *</Label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          required
          value={formData.serviceInterest}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">Select a service</option>
          <option value="Counseling">Counseling</option>
          <option value="Psychiatric Consultation">Psychiatric Consultation</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
      </div>

      <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
        This form is for general scheduling and inquiries only. Please do not include personal health details.
      </div>

      <Button
        type="submit"
        className="w-full bg-[#222] hover:bg-zinc-800 text-white font-barlow font-medium rounded-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </Button>
    </form>
  );
};

export default AppointmentForm;
