import { z } from 'zod';

// Disposable email domains to block
const disposableEmailDomains = [
  'tempmail.com', 'guerrillamail.com', '10minutemail.com', 'throwaway.email',
  'mailinator.com', 'trashmail.com', 'yopmail.com', 'getnada.com'
];

// Email validation with disposable domain check
const emailValidation = z.string()
  .trim()
  .email({ message: "Invalid email address" })
  .max(255, { message: "Email must be less than 255 characters" })
  .refine((email) => {
    const domain = email.split('@')[1]?.toLowerCase();
    return !disposableEmailDomains.some(disposable => domain?.includes(disposable));
  }, { message: "Please use a valid email address" });

// Phone validation - US format
const phoneValidation = z.string()
  .trim()
  .regex(/^[\d\s\-\(\)\+]+$/, { message: "Invalid phone number format" })
  .min(10, { message: "Phone number must be at least 10 digits" })
  .max(20, { message: "Phone number is too long" });

// Name validation
const nameValidation = z.string()
  .trim()
  .min(2, { message: "Name must be at least 2 characters" })
  .max(100, { message: "Name must be less than 100 characters" })
  .regex(/^[a-zA-Z\s\-'.]+$/, { message: "Name contains invalid characters" });

// Message validation with content limits
const messageValidation = z.string()
  .trim()
  .min(1, { message: "Message cannot be empty" })
  .max(1000, { message: "Message must be less than 1000 characters" });

// Optional message validation
const optionalMessageValidation = z.string()
  .trim()
  .max(1000, { message: "Message must be less than 1000 characters" })
  .optional();

// Contact form schema
export const contactFormSchema = z.object({
  name: nameValidation,
  email: emailValidation,
  message: messageValidation,
  honeypot: z.string().max(0, { message: "Bot detected" }).optional(),
});

// Simplified HIPAA-safe appointment form schema
export const appointmentFormSchema = z.object({
  firstName: z.string()
    .trim()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(100, { message: "First name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s\-'.]+$/, { message: "First name contains invalid characters" }),
  email: emailValidation,
  phone: z.string()
    .trim()
    .regex(/^[\d\s\-\(\)\+]*$/, { message: "Invalid phone number format" })
    .max(20, { message: "Phone number is too long" })
    .optional()
    .or(z.literal('')),
  preferredDateTime: z.string()
    .trim()
    .max(200, { message: "Preferred date/time must be less than 200 characters" })
    .optional()
    .or(z.literal('')),
  serviceInterest: z.enum(['Counselling', 'Psychiatric Consultation', 'General Inquiry'], {
    errorMap: () => ({ message: "Please select a service interest" })
  }),
  honeypot: z.string().max(0, { message: "Bot detected" }).optional(),
});

// Newsletter form schema
export const newsletterFormSchema = z.object({
  email: emailValidation,
  honeypot: z.string().max(0, { message: "Bot detected" }).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type AppointmentFormData = z.infer<typeof appointmentFormSchema>;
export type NewsletterFormData = z.infer<typeof newsletterFormSchema>;
