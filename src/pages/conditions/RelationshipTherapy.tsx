
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import SEOHead from '../../components/SEOHead';
import { MessageCircleHeart } from 'lucide-react';

const RelationshipTherapy = () => {
  const pageData = {
    title: "Relationship Therapy",
    description: "Effective therapy for communication problems, conflict resolution, and rebuilding trust in Havertown, PA.",
    pageTitle: "Relationship Therapy | Sunrise Human Care Services",
    metaDescription: "Effective therapy for relationship issues, communication problems, and conflict resolution in Havertown, PA.",
    serviceType: "Relationship Therapy",
    canonicalUrl: "/conditions/relationship-therapy",
    heroImage: "/images/couple-counseling-havertown-pa.webp",
    icon: <MessageCircleHeart className="h-12 w-12" />,
    benefits: [
      "Assessment of relationship patterns and dynamics",
      "Communication skills development",
      "Conflict resolution techniques",
      "Emotional intimacy building",
      "Trust repair and reconciliation work",
      "Boundaries exploration and establishment",
      "Tools for maintaining relationship health"
    ],
    approaches: [
      {
        title: "Understanding Relationship Challenges",
        description: "Relationship difficulties are a normal part of human connection, whether in romantic partnerships, friendships, or family relationships. Common challenges include communication breakdowns, recurring conflicts, trust issues, intimacy problems, and difficulty navigating major life transitions together. These issues can cause significant distress but can be effectively addressed through professional relationship therapy."
      },
      {
        title: "Our Approach to Relationship Therapy",
        description: "At Sunrise Human Care Services, we provide relationship therapy that helps identify and transform problematic patterns while strengthening positive aspects of your connection. Our approach draws from evidence-based methods including Emotionally Focused Therapy (EFT), the Gottman Method, and narrative therapy. We create a balanced, supportive environment where all parties feel heard and respected."
      },
      {
        title: "Communication and Conflict Resolution",
        description: "Effective communication is the foundation of healthy relationships. We help couples and families develop skills for expressing needs and feelings clearly, listening actively, and navigating disagreements constructively. You'll learn to recognize destructive communication patterns and replace them with interactions that build understanding and connection, even during difficult conversations."
      },
      {
        title: "Rebuilding Trust and Intimacy",
        description: "When trust has been damaged, relationships require intentional repair work. Our therapists guide couples through the process of rebuilding trust, processing hurt, and moving toward forgiveness at an appropriate pace. We help couples reconnect emotionally and physically, addressing barriers to intimacy while fostering deeper understanding and compassion."
      },
      {
        title: "Your Path to a Healthier Relationship",
        description: "Whether you're working to enhance a generally good relationship or heal from significant relationship trauma, our therapists provide the tools, insights, and support needed for positive change. With commitment to the therapeutic process, relationships can become more secure, satisfying, and resilient. We believe in the power of healthy relationships to enhance overall well-being and quality of life."
      }
    ],
    faqs: [
      {
        question: "How do I know if my relationship would benefit from therapy?",
        answer: "Consider relationship therapy if you're experiencing recurring conflicts that don't get resolved, communication problems, emotional disconnection, trust issues, intimacy concerns, or if you're navigating major life transitions that are straining your relationship. It's best to seek help early rather than waiting until problems become severe."
      },
      {
        question: "Does relationship therapy only work for couples on the brink of separation?",
        answer: "No, relationship therapy can benefit relationships at any stage. While it can help relationships in crisis, it's also valuable for relatively healthy relationships that want to enhance communication, deepen connection, or navigate transitions proactively. Many couples use therapy as a relationship wellness tool rather than only as crisis intervention."
      },
      {
        question: "How long does relationship therapy typically take?",
        answer: "The duration varies depending on the issues being addressed, the goals for therapy, and how actively partners engage in the process. Some couples attend 10-12 sessions and achieve their goals, while others may benefit from longer-term therapy, especially when addressing complex issues or recovering from significant relationship trauma."
      }
    ],
    relatedServices: [
      {
        title: "Couples Counseling",
        url: "/services/couples-counseling"
      },
      {
        title: "Family Therapy",
        url: "/services/family-therapy"
      },
      {
        title: "Individual Therapy",
        url: "/services/individual-therapy"
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title={pageData.pageTitle}
        description={pageData.metaDescription}
        canonicalUrl={pageData.canonicalUrl}
      />
      <ServicePageLayout 
        title={pageData.title}
        description={pageData.description}
        pageTitle={pageData.pageTitle}
        metaDescription={pageData.metaDescription}
        serviceType={pageData.serviceType}
        canonicalUrl={pageData.canonicalUrl}
        heroImage={pageData.heroImage}
        benefits={pageData.benefits}
        approaches={pageData.approaches}
        faqs={pageData.faqs}
        relatedServices={pageData.relatedServices}
        icon={pageData.icon}
      >
        {/* Content goes here if needed */}
      </ServicePageLayout>
    </>
  );
};

export default RelationshipTherapy;
