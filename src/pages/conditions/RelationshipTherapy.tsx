
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import SEOHead from '../../components/SEOHead';

const RelationshipTherapy = () => {
  const serviceInfo = {
    title: "Relationship Therapy",
    heroImage: "/images/couple-counseling-havertown-pa.webp",
    description: "Effective therapy for communication problems, conflict resolution, and rebuilding trust in Havertown, PA.",
    details: [
      "Assessment of relationship patterns and dynamics",
      "Communication skills development",
      "Conflict resolution techniques",
      "Emotional intimacy building",
      "Trust repair and reconciliation work",
      "Boundaries exploration and establishment",
      "Tools for maintaining relationship health"
    ],
    content: [
      {
        heading: "Understanding Relationship Challenges",
        text: "Relationship difficulties are a normal part of human connection, whether in romantic partnerships, friendships, or family relationships. Common challenges include communication breakdowns, recurring conflicts, trust issues, intimacy problems, and difficulty navigating major life transitions together. These issues can cause significant distress but can be effectively addressed through professional relationship therapy."
      },
      {
        heading: "Our Approach to Relationship Therapy",
        text: "At Sunrise Human Care Services, we provide relationship therapy that helps identify and transform problematic patterns while strengthening positive aspects of your connection. Our approach draws from evidence-based methods including Emotionally Focused Therapy (EFT), the Gottman Method, and narrative therapy. We create a balanced, supportive environment where all parties feel heard and respected."
      },
      {
        heading: "Communication and Conflict Resolution",
        text: "Effective communication is the foundation of healthy relationships. We help couples and families develop skills for expressing needs and feelings clearly, listening actively, and navigating disagreements constructively. You'll learn to recognize destructive communication patterns and replace them with interactions that build understanding and connection, even during difficult conversations."
      },
      {
        heading: "Rebuilding Trust and Intimacy",
        text: "When trust has been damaged, relationships require intentional repair work. Our therapists guide couples through the process of rebuilding trust, processing hurt, and moving toward forgiveness at an appropriate pace. We help couples reconnect emotionally and physically, addressing barriers to intimacy while fostering deeper understanding and compassion."
      },
      {
        heading: "Your Path to a Healthier Relationship",
        text: "Whether you're working to enhance a generally good relationship or heal from significant relationship trauma, our therapists provide the tools, insights, and support needed for positive change. With commitment to the therapeutic process, relationships can become more secure, satisfying, and resilient. We believe in the power of healthy relationships to enhance overall well-being and quality of life."
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="Relationship Therapy | Sunrise Human Care Services" 
        description="Effective therapy for relationship issues, communication problems, and conflict resolution in Havertown, PA." 
      />
      <Navbar />
      <ServicePageLayout serviceInfo={serviceInfo} />
      <Footer />
    </>
  );
};

export default RelationshipTherapy;
