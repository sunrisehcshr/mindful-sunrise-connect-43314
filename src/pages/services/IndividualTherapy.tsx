
import React from "react";
import { Brain } from "lucide-react";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { ServiceData } from "@/lib/servicePageUtils";

const IndividualTherapy: React.FC = () => {
  // Service data for Individual Therapy
  const serviceData: ServiceData = {
    title: "Individual Therapy",
    slug: "individual-therapy",
    seoSlug: "/individual-therapy-havertown-pa",
    description: "Professional individual therapy services in Havertown, PA for depression, anxiety, stress, and personal growth.",
    metaDescription: "Specialized individual therapy in Havertown, PA. Our licensed therapists provide evidence-based treatment for anxiety, depression, trauma, life transitions, and personal growth. Call (814) 620-2162.",
    detailedDescription: "Individual therapy at Sunrise Human Care Services provides a confidential, supportive space where you can work one-on-one with a licensed therapist to address personal challenges, process emotions, and develop coping strategies. Our therapists use evidence-based approaches tailored to your unique needs, helping you navigate life's difficulties and achieve meaningful growth and change. Whether you're dealing with depression, anxiety, grief, trauma, or simply seeking personal development, our professional team is here to support your journey toward improved well-being.",
    icon: <Brain className="h-6 w-6" />,
    iconColor: "text-amber-700",
    imageUrl: "/images/therapy-in-havertown.webp",
    benefits: [
      "Private, confidential environment to address personal concerns",
      "Personalized treatment plans based on your specific needs",
      "Development of practical coping skills for daily challenges",
      "Professional guidance through difficult life transitions",
      "Greater self-awareness and personal insight",
      "Improved emotional regulation and stress management"
    ],
    process: [
      "Initial consultation to understand your needs and goals",
      "Collaborative development of a personalized treatment plan",
      "Regular one-on-one sessions with your dedicated therapist",
      "Ongoing progress assessment and plan adjustments as needed",
      "Development and practice of new coping strategies",
      "Gradual transition to independence with follow-up support as needed"
    ]
  };

  // Custom testimonials specific to individual therapy
  const customTestimonials = [
    { quote: "My therapist at Sunrise helped me navigate through my anxiety and develop practical coping skills. I feel more in control of my life now.", author: "Rebecca M., Havertown" },
    { quote: "After years of struggling with depression, the individual therapy at Sunrise gave me hope and practical tools to rebuild my life.", author: "Thomas K., Broomall" },
    { quote: "The safe space my therapist created allowed me to work through childhood trauma I'd been carrying for decades.", author: "Sarah L., Ardmore" },
    { quote: "I was skeptical about therapy, but my experience at Sunrise completely changed my perspective. The growth I've experienced is incredible.", author: "James D., Havertown" }
  ];

  // Custom FAQs specific to individual therapy
  const customFAQs = [
    { 
      q: "How often will I need to come to individual therapy?", 
      a: "Most clients begin with weekly sessions. As you progress, sessions may become less frequent. Your therapist will discuss the recommended frequency based on your specific needs and goals." 
    },
    { 
      q: "How long does each therapy session last?", 
      a: "Standard individual therapy sessions at Sunrise Human Care are 50 minutes long." 
    },
    { 
      q: "Will my insurance cover individual therapy?", 
      a: "We accept most major insurance plans. We can verify your coverage before your first appointment. We also offer affordable self-pay options." 
    },
    { 
      q: "How long will I need to be in therapy?", 
      a: "The duration varies based on your specific situation, goals, and progress. Some clients benefit from short-term therapy (8-12 sessions), while others find longer-term therapy more beneficial. Your therapist will discuss expectations during your initial sessions." 
    },
    { 
      q: "Is everything I say in therapy confidential?", 
      a: "Yes, with limited exceptions required by law, such as if there is a risk of harm to yourself or others, or in cases of child or elder abuse. Your therapist will explain confidentiality in detail during your first session." 
    },
    { 
      q: "What therapy approaches do you use?", 
      a: "Our therapists are trained in multiple evidence-based approaches, including Cognitive Behavioral Therapy (CBT), Psychodynamic Therapy, Mindfulness-Based Therapies, EMDR, and Solution-Focused Therapy. We tailor our approach to meet your specific needs." 
    }
  ];

  return (
    <ServicePageTemplate 
      service={serviceData}
      customH1="Individual Therapy in Havertown, PA"
      customTestimonials={customTestimonials}
      customFAQs={customFAQs}
      customPricing="$120 - $180 per session"
    />
  );
};

export default IndividualTherapy;
