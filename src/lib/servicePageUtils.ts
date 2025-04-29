
/**
 * Utility functions for the ServicePageTemplate component
 */

import { ReactNode } from 'react';

// Gradient styling helper functions based on theme color
export const getGradientClass = (iconColor: string): string => {
  const gradientMap: Record<string, string> = {
    "text-purple-700": "from-purple-500 to-purple-300",
    "text-blue-700": "from-blue-500 to-blue-600",
    "text-pink-600": "from-pink-500 to-pink-300",
    "text-teal-700": "from-teal-500 to-teal-300",
    "text-orange-700": "from-orange-500 to-orange-300",
    "text-green-700": "from-green-500 to-green-300",
    "text-amber-700": "from-amber-500 to-amber-400",
  };
  return gradientMap[iconColor] || "from-amber-500 to-orange-500";
};

export const getHoverClass = (iconColor: string): string => {
  const hoverMap: Record<string, string> = {
    "text-purple-700": "hover:from-purple-600 hover:to-purple-400",
    "text-blue-700": "hover:from-blue-600 hover:to-blue-700",
    "text-pink-600": "hover:from-pink-600 hover:to-pink-400",
    "text-teal-700": "hover:from-teal-600 hover:to-teal-400",
    "text-orange-700": "hover:from-orange-600 hover:to-orange-400",
    "text-green-700": "hover:from-green-600 hover:to-green-400",
    "text-amber-700": "hover:from-amber-600 hover:to-amber-500",
  };
  return hoverMap[iconColor] || "hover:from-amber-600 hover:to-orange-600";
};

export const getIconBoxClass = (iconColor: string): string => {
  const boxColorMap: Record<string, string> = {
    "text-purple-700": "bg-purple-50",
    "text-blue-700": "bg-blue-50",
    "text-pink-600": "bg-pink-50",
    "text-teal-700": "bg-teal-50",
    "text-orange-700": "bg-orange-50",
    "text-green-700": "bg-green-50",
    "text-amber-700": "bg-amber-50",
  };
  return boxColorMap[iconColor] || "bg-amber-50";
};

// Interface for Service Data
export interface ServiceData {
  title: string;
  slug: string;
  seoSlug?: string;
  description: string;
  metaDescription?: string;
  detailedDescription: string;
  icon: ReactNode;
  iconColor: string;
  imageUrl: string;
  benefits?: string[];
  process?: string[];
}

// Interface for Testimonial
export interface Testimonial {
  quote: string;
  author: string;
}

// Interface for FAQ
export interface FAQ {
  q: string;
  a: string;
}

// Default testimonials organized by service type
export const testimonials: Record<string, Testimonial[]> = {
  "Individual": [
    { quote: "I've gained so much clarity through therapy at Sunrise.", author: "Sarah K., Havertown" },
    { quote: "My anxiety has dramatically improved since starting sessions.", author: "Michael R., Broomall" },
    { quote: "The therapists create such a supportive environment.", author: "Jessica T., Ardmore" },
    { quote: "Life-changing therapy that helped me overcome depression.", author: "Robert L., Havertown" },
  ],
  "Couple": [
    { quote: "We've learned to communicate in ways we never thought possible.", author: "Mark & Lisa, Havertown" },
    { quote: "Our relationship has truly transformed since coming to Sunrise.", author: "David & Emma, Ardmore" },
    { quote: "The therapist helped us rebuild trust in our marriage.", author: "John & Kelly, Broomall" },
  ],
  "Family": [
    { quote: "Our family connections are stronger than ever thanks to therapy.", author: "The Wilson Family, Havertown" },
    { quote: "We've learned healthy ways to resolve conflicts together.", author: "The Johnson Family, Broomall" },
    { quote: "Our therapist helped us navigate a difficult transition period.", author: "The Patel Family, Ardmore" },
  ],
  "Child": [
    { quote: "My child has gained so much confidence through therapy.", author: "Parent in Havertown" },
    { quote: "The therapists know exactly how to connect with kids.", author: "Mother in Broomall" },
    { quote: "School anxiety is no longer an issue for my daughter.", author: "Father in Ardmore" },
  ],
  "Psychiatric": [
    { quote: "Finally found the right medication balance for my needs.", author: "Thomas M., Havertown" },
    { quote: "Professional, thorough evaluations and clear explanations.", author: "Alicia N., Ardmore" },
    { quote: "The psychiatrist truly listens and adjusts treatment accordingly.", author: "William P., Broomall" },
  ],
};

// Default FAQs organized by service type
export const faqs: Record<string, FAQ[]> = {
  "Individual": [
    { q: "How long does individual therapy typically last?", a: "Sessions are typically 45-50 minutes, and the overall treatment length varies based on individual needs. Some clients see benefits in a few sessions, while others may benefit from several months of therapy." },
    { q: "Is therapy confidential?", a: "Yes, we maintain strict confidentiality according to professional ethics and HIPAA regulations. There are limited exceptions when safety is at risk, which your therapist will discuss with you." },
    { q: "What therapy approaches do you use?", a: "We utilize evidence-based approaches including Cognitive Behavioral Therapy (CBT), Psychodynamic Therapy, Mindfulness-Based Therapy, and others tailored to your specific needs." },
    { q: "How often will I need to attend therapy?", a: "Most clients begin with weekly sessions. As progress is made, sessions may become less frequent. Your therapist will recommend a schedule based on your needs." },
  ],
  "Couple": [
    { q: "Should both partners attend every session?", a: "Ideally, yes. However, there may be instances where individual sessions are beneficial. Your therapist will guide this process." },
    { q: "How long does couples therapy take?", a: "The duration varies widely depending on your goals and challenges. Some couples see improvement in 10-12 sessions, while others benefit from longer treatment." },
    { q: "What if my partner is reluctant to attend?", a: "This is common. We can start with you individually, discuss strategies to encourage participation, or provide resources to help address reluctance." },
    { q: "Will you take sides in our conflicts?", a: "No. Our therapists remain neutral and focus on helping both partners communicate effectively and understand each other's perspectives." },
  ],
  "Family": [
    { q: "Should all family members attend therapy?", a: "Ideally, all relevant family members should participate, but we can work with whoever is willing to attend." },
    { q: "How do you handle children in family therapy?", a: "We use age-appropriate techniques to engage children and ensure they feel comfortable and heard in the therapeutic process." },
    { q: "Can extended family members join sessions?", a: "Yes, if their participation would benefit the therapeutic goals. This is determined on a case-by-case basis." },
    { q: "How long are family therapy sessions?", a: "Family sessions typically last 50-60 minutes but may be longer for larger families or complex situations." },
  ],
  "Child": [
    { q: "How do you make children comfortable in therapy?", a: "We create a warm, welcoming environment using play therapy techniques, art, games, and age-appropriate activities." },
    { q: "Should parents be involved in their child's therapy?", a: "Parent involvement varies based on the child's age and needs. We'll discuss the appropriate level of involvement during the initial consultation." },
    { q: "How do I explain therapy to my child?", a: "We can help you find age-appropriate ways to explain therapy. Generally, describing it as a place where they can talk, play, and learn about feelings works well." },
    { q: "How long does child therapy typically last?", a: "The duration varies based on the child's needs. Some children may need just a few sessions, while others benefit from ongoing support." },
  ],
  "Psychiatric": [
    { q: "What's the difference between a psychiatrist and therapist?", a: "Psychiatrists are medical doctors who can prescribe medication and diagnose mental health conditions. Therapists provide counseling but cannot prescribe medication." },
    { q: "How often will I need to see the psychiatrist?", a: "Initially more frequent (every 2-4 weeks), then typically every 1-3 months once medication is stabilized." },
    { q: "Can I see both a therapist and psychiatrist?", a: "Yes, this combined approach often provides the most comprehensive care. Our team coordinates treatment for optimal results." },
    { q: "What if my medication isn't working?", a: "Our psychiatrists closely monitor your response to medication and will adjust as needed, considering alternatives if the initial prescription isn't effective." },
  ],
};

// Service type normalization function
export const normalizeServiceType = (serviceTitle: string): string => {
  const title = serviceTitle.toLowerCase();
  
  if (title.includes("individual") || title.includes("personal")) {
    return "Individual";
  } else if (title.includes("couple") || title.includes("marriage") || title.includes("relationship")) {
    return "Couple";
  } else if (title.includes("family")) {
    return "Family";
  } else if (title.includes("child") || title.includes("adolescent") || title.includes("teen")) {
    return "Child";
  } else if (title.includes("psychiatric") || title.includes("medication") || title.includes("psychiatry")) {
    return "Psychiatric";
  }
  
  return "Individual"; // Default fallback
};

// Default pricing information
export const pricingInfo: Record<string, string> = {
  "Individual": "$100 - $175 per session",
  "Couple": "$125 - $200 per session",
  "Family": "$150 - $225 per session",
  "Child": "$125 - $175 per session",
  "Psychiatric": "Initial evaluation: $250 - $350, Follow-up: $100 - $175",
};
