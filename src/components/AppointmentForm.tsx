import { useState } from "react";
import { Calendar as CalendarIcon, Clock, Info } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

// Available time slots
const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

// Updated comprehensive list of all services
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

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [appointmentType, setAppointmentType] = useState<string>("in-person");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!selectedDate || !selectedTime || !selectedService || !formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare data for submission
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: selectedDate ? format(selectedDate, "PPP") : "",
        time: selectedTime,
        service: selectedService,
        appointmentType: appointmentType,
        message: formData.message,
        _subject: "New Appointment Request",
        _cc: "shweta.s@sunrisehcsllc.com"
      };
      
      // Send to Formspree
      const response = await fetch("https://formspree.io/f/xpwqvvvw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(submissionData)
      });
      
      if (response.ok) {
        toast.success("Thank you! Your appointment request has been submitted. We'll contact you shortly to confirm your appointment.");
        
        // Reset form
        setSelectedDate(undefined);
        setSelectedTime("");
        setSelectedService("");
        setAppointmentType("in-person");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        console.error("Form submission error:", await response.text());
        toast.error("Something went wrong. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate the minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Calculate the maximum date (3 months from now)
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="service">Service Needed <span className="text-red-500">*</span></Label>
          <Select value={selectedService} onValueChange={setSelectedService} required>
            <SelectTrigger id="service" className="w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>Preferred Date <span className="text-red-500">*</span></Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !selectedDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {selectedDate ? format(selectedDate, "PPP") : "Select a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => 
                  date < tomorrow || 
                  date > maxDate || 
                  date.getDay() === 0 // Sundays disabled
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="time">Preferred Time <span className="text-red-500">*</span></Label>
          <Select value={selectedTime} onValueChange={setSelectedTime} required>
            <SelectTrigger id="time" className="w-full">
              <SelectValue placeholder="Select a time">
                {selectedTime ? (
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {selectedTime}
                  </div>
                ) : (
                  "Select a time"
                )}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label>Appointment Type <span className="text-red-500">*</span></Label>
        <RadioGroup
          value={appointmentType}
          onValueChange={setAppointmentType}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="in-person" id="in-person" />
            <Label htmlFor="in-person" className="font-normal">In-Person</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="virtual" id="virtual" />
            <Label htmlFor="virtual" className="font-normal">Virtual (Telehealth)</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Additional Information</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your needs or any specific concerns"
          value={formData.message}
          onChange={handleInputChange}
          className="min-h-[120px]"
        />
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start space-x-3">
        <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-blue-700">
          <p className="font-medium">Insurance Information</p>
          <p className="mt-1">We accept most major insurance plans. We will contact you to verify your insurance coverage after receiving your appointment request.</p>
        </div>
      </div>
      
      <div className="flex justify-center">
        <Button
          type="submit"
          className="btn-sunrise w-full max-w-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Request Appointment"}
        </Button>
      </div>
    </form>
  );
};

export default AppointmentForm;
