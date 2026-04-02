// Spam keyword detection
const spamKeywords = [
  'click here', 'buy now', 'limited time', 'act now', 'free money',
  'get paid', 'work from home', 'casino', 'lottery', 'prize',
  'congratulations', 'winner', 'claim now', 'bitcoin', 'crypto investment'
];

// Profanity and hate speech patterns (basic list)
const profanityPatterns = [
  /\b(f+u+c+k|s+h+i+t|b+i+t+c+h|a+s+s+h+o+l+e|d+a+m+n)\b/gi,
  /\b(hate|hates|hating)\s+(on\s+)?(everyone|everybody|all|neighbors)\b/gi,
  /\b(nasty|disgusting|miserable|fraud)\s+(lady|person|woman|man)\b/gi,
];

// Suspicious patterns
const suspiciousPatterns = [
  /(.)\1{4,}/g, // Same character repeated 5+ times
  /\b[A-Z]{20,}\b/g, // All caps words 20+ chars
  /https?:\/\//gi, // URLs (context-dependent)
  /\b(\w+)\s+\1\b/gi, // Repeated words
];

export interface SpamCheckResult {
  isSpam: boolean;
  reason?: string;
  score: number; // 0-100, higher = more suspicious
}

export function checkContentForSpam(content: string): SpamCheckResult {
  let score = 0;
  const reasons: string[] = [];

  if (!content || content.trim().length === 0) {
    return { isSpam: false, score: 0 };
  }

  const lowerContent = content.toLowerCase();

  // Check for spam keywords (20 points per match)
  const spamMatches = spamKeywords.filter(keyword => 
    lowerContent.includes(keyword.toLowerCase())
  );
  if (spamMatches.length > 0) {
    score += spamMatches.length * 20;
    reasons.push(`Contains spam keywords: ${spamMatches.join(', ')}`);
  }

  // Check for profanity patterns (30 points per match)
  profanityPatterns.forEach(pattern => {
    const matches = content.match(pattern);
    if (matches && matches.length > 0) {
      score += matches.length * 30;
      reasons.push('Contains inappropriate language');
    }
  });

  // Check for suspicious patterns (15 points per type)
  suspiciousPatterns.forEach(pattern => {
    if (pattern.test(content)) {
      score += 15;
      reasons.push('Contains suspicious patterns');
    }
  });

  // Check for excessive length (5 points per 100 chars over 500)
  if (content.length > 500) {
    const excessChars = content.length - 500;
    score += Math.floor(excessChars / 100) * 5;
  }

  // Check for ALL CAPS (20 points if >70% uppercase)
  const uppercaseRatio = (content.match(/[A-Z]/g) || []).length / content.replace(/\s/g, '').length;
  if (uppercaseRatio > 0.7 && content.length > 50) {
    score += 20;
    reasons.push('Excessive uppercase text');
  }

  // Normalize score to 0-100
  score = Math.min(score, 100);

  return {
    isSpam: score >= 50, // Threshold: 50 points = spam
    reason: reasons.length > 0 ? reasons.join('; ') : undefined,
    score
  };
}

// Rate limiting using localStorage
interface RateLimitEntry {
  count: number;
  firstSubmission: number;
}

const RATE_LIMIT_KEY = 'form_submissions';
const MAX_SUBMISSIONS = 3;
const TIME_WINDOW = 60 * 60 * 1000; // 1 hour

export function checkRateLimit(): { allowed: boolean; remainingAttempts: number } {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const now = Date.now();

    if (!stored) {
      // First submission
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({
        count: 1,
        firstSubmission: now
      }));
      return { allowed: true, remainingAttempts: MAX_SUBMISSIONS - 1 };
    }

    const data: RateLimitEntry = JSON.parse(stored);

    // Check if time window has passed
    if (now - data.firstSubmission > TIME_WINDOW) {
      // Reset counter
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({
        count: 1,
        firstSubmission: now
      }));
      return { allowed: true, remainingAttempts: MAX_SUBMISSIONS - 1 };
    }

    // Check if limit exceeded
    if (data.count >= MAX_SUBMISSIONS) {
      return { allowed: false, remainingAttempts: 0 };
    }

    // Increment counter
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({
      count: data.count + 1,
      firstSubmission: data.firstSubmission
    }));

    return { allowed: true, remainingAttempts: MAX_SUBMISSIONS - data.count - 1 };
  } catch (error) {
    // If localStorage fails, allow submission
    console.error('Rate limit check failed:', error);
    return { allowed: true, remainingAttempts: MAX_SUBMISSIONS };
  }
}

// Time-based protection
export function checkSubmissionTiming(formRenderTime: number): boolean {
  const now = Date.now();
  const timeElapsed = now - formRenderTime;
  
  // Minimum 3 seconds to fill form
  return timeElapsed >= 3000;
}
