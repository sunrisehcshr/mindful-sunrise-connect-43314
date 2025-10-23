import { useState, useEffect, useRef } from 'react';
import { checkRateLimit, checkSubmissionTiming, checkContentForSpam } from '@/lib/spamDetection';
import { toast } from 'sonner';

interface UseFormProtectionOptions {
  requireRecaptcha?: boolean;
  checkContent?: boolean;
}

export function useFormProtection(options: UseFormProtectionOptions = {}) {
  const { requireRecaptcha = true, checkContent = true } = options;
  const [isProtected, setIsProtected] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const formRenderTime = useRef(Date.now());

  useEffect(() => {
    // Record when form was rendered
    formRenderTime.current = Date.now();
    
    // Load reCAPTCHA if required
    if (requireRecaptcha) {
      // reCAPTCHA will be loaded by GoogleReCaptchaProvider
      setIsProtected(true);
    } else {
      setIsProtected(true);
    }
  }, [requireRecaptcha]);

  const validateSubmission = (messageContent?: string): { valid: boolean; error?: string } => {
    // Check honeypot
    if (honeypot && honeypot.length > 0) {
      console.warn('Honeypot triggered - bot detected');
      return { valid: false, error: 'Submission failed. Please try again.' };
    }

    // Check timing
    if (!checkSubmissionTiming(formRenderTime.current)) {
      toast.error('Please take a moment to review your information.');
      return { valid: false, error: 'Please slow down and review your submission.' };
    }

    // Check rate limit
    const rateLimitCheck = checkRateLimit();
    if (!rateLimitCheck.allowed) {
      toast.error('Too many submissions. Please try again in an hour.');
      return { valid: false, error: 'Rate limit exceeded.' };
    }

    // Check content for spam if message provided
    if (checkContent && messageContent) {
      const spamCheck = checkContentForSpam(messageContent);
      if (spamCheck.isSpam) {
        console.warn('Spam detected:', spamCheck.reason);
        toast.error('Your message contains inappropriate content. Please revise and try again.');
        return { valid: false, error: 'Content validation failed.' };
      }

      // Warn if suspicious but not blocking
      if (spamCheck.score >= 30 && spamCheck.score < 50) {
        toast.warning('Please ensure your message is professional and relevant.');
      }
    }

    return { valid: true };
  };

  return {
    isProtected,
    honeypot,
    setHoneypot,
    validateSubmission,
  };
}
