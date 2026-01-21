import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import SchemaMarkup from "../components/SchemaMarkup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import { ArrowRight, Phone, Users, Heart, Shield, Calendar, MapPin, MessageCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MentalHealthHavertown = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    {
      title: "Individual Therapy",
      description: "Private, one-on-one sessions with a licensed therapist to address personal challenges and promote emotional well-being.",
      link: "/individual-therapy-havertown-pa"
    },
    {
      title: "Couples Counseling",
      description: "Supportive therapy for partners looking to strengthen communication, rebuild trust, and navigate relationship challenges together.",
      link: "/couples-counseling-havertown-pa"
    },
    {
      title: "Family Therapy",
      description: "Guided sessions designed to improve family dynamics, resolve conflicts, and foster healthier connections among family members.",
      link: "/family-therapy-havertown-pa"
    },
    {
      title: "Child & Adolescent Therapy",
      description: "Age-appropriate therapeutic support for children and teens facing emotional, behavioral, or developmental concerns.",
      link: "/child-therapy-havertown-pa"
    },
    {
      title: "Psychiatric Evaluations",
      description: "Comprehensive assessments conducted by qualified professionals to understand mental health needs and guide treatment planning.",
      link: "/psychiatric-evaluations-havertown-pa"
    },
    {
      title: "Medication Management",
      description: "Careful oversight of psychiatric medications to ensure safe, effective treatment as part of a comprehensive care plan.",
      link: "/medication-management-havertown-pa"
    },
    {
      title: "Grief Therapy",
      description: "Compassionate support for individuals processing loss and navigating the emotional journey of grief.",
      link: "/grief-therapy-havertown-pa"
    },
    {
      title: "Relationship Therapy",
      description: "Therapeutic guidance for individuals seeking to improve interpersonal skills and build healthier relationships.",
      link: "/relationship-therapy-havertown-pa"
    }
  ];

  const conditions = [
    "Anxiety",
    "Depression", 
    "ADHD",
    "Trauma & PTSD",
    "Grief & loss",
    "Relationship challenges"
  ];

  const faqs = [
    {
      question: "How do I know if I should seek therapy?",
      answer: "If you're experiencing persistent feelings of sadness, anxiety, or stress that affect your daily life, relationships, or work, therapy can help. You don't need to be in crisis to benefit from professional support. Many people seek therapy to better understand themselves, develop coping strategies, or simply have a safe space to process life's challenges. If you're unsure, we encourage you to reach out—our team can help you determine if our services are right for you."
    },
    {
      question: "Do you offer services for children and families?",
      answer: "Yes, we provide therapy for children, adolescents, and families. Our licensed therapists are experienced in working with young people and understand the unique challenges they face. Family therapy sessions are also available to help improve communication, resolve conflicts, and strengthen family bonds. We create a supportive environment where every family member feels heard and respected."
    },
    {
      question: "What should I expect during my first visit?",
      answer: "Your first visit is an opportunity for you and your therapist to get to know each other. You'll discuss what brings you to therapy, your personal history, and your goals for treatment. This initial session helps us understand your needs and develop a personalized care plan. There's no pressure to share more than you're comfortable with—the pace is always guided by you."
    },
    {
      question: "Is my information kept confidential?",
      answer: "Absolutely. Confidentiality is a cornerstone of ethical mental health care. Everything you share with your therapist remains private, with very few legal exceptions (such as imminent safety concerns). We follow strict professional and legal standards to protect your privacy, and we're happy to discuss our confidentiality policies in detail during your first visit."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "Scheduling an appointment is simple. You can call our office directly, or use our online appointment request form. Our team will work with you to find a convenient time and answer any questions you may have before your first session. We strive to accommodate your schedule and get you started on your path to wellness as soon as possible."
    }
  ];

  // FAQPage Schema for rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEOHead 
        title="Mental Health Services in Havertown, PA | Sunrise Human Care" 
        description="Compassionate mental health care for Havertown residents. Licensed therapists offering individual therapy, couples counseling, family therapy, and psychiatric services. Schedule your appointment today." 
        canonicalUrl="https://sunrisehumancare.com/mental-health-havertown-pa"
        keywords="mental health Havertown PA, mental health services Havertown, therapy Havertown PA, mental health clinic Havertown, counseling Havertown Pennsylvania"
      />
      <SchemaMarkup />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          
          {/* Hero Section with H1 */}
          <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[80vh] flex items-center overflow-hidden">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/images/havertown-aerial.png')" }}
            />
            
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
            
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 py-16 md:py-20">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                    Mental Health Services in Havertown, PA
                  </h1>
                  <p className="text-lg md:text-xl text-amber-100 mb-8 max-w-3xl mx-auto drop-shadow-md">
                    Professional, compassionate mental health care from licensed therapists who understand your needs. Serving Havertown and the surrounding community.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      to="/appointment" 
                      className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-8 py-4 rounded-lg shadow-lg transition-all duration-300 font-medium inline-flex items-center justify-center hover:scale-105"
                    >
                      Schedule an Appointment
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <a 
                      href="tel:+18146202162" 
                      className="bg-white/10 backdrop-blur-sm border-2 border-white/40 hover:bg-white/20 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium inline-flex items-center justify-center hover:scale-105"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      (814) 620-2162
                    </a>
                  </div>
                  <div className="mt-6 space-y-2">
                    <p className="text-sm text-amber-200 flex items-center justify-center gap-3 flex-wrap">
                      <span className="inline-flex items-center gap-1"><Shield className="h-4 w-4" /> Confidential care</span>
                      <span className="text-amber-300">•</span>
                      <span className="inline-flex items-center gap-1"><Users className="h-4 w-4" /> Licensed providers</span>
                      <span className="text-amber-300">•</span>
                      <span className="inline-flex items-center gap-1"><CheckCircle className="h-4 w-4" /> Accepting new patients</span>
                    </p>
                    <p className="text-sm text-amber-200">We accept Medicaid insurance</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Bottom fade to blend with next section */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
          </section>

          {/* Local Introduction */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                    Compassionate Mental Health Care for Havertown Residents
                  </h2>
                  <div className="prose prose-lg text-amber-800 space-y-4">
                    <p>
                      At Sunrise Human Care, we understand that seeking mental health support can feel like a significant step. That's why we've created a welcoming, confidential environment where Havertown residents can receive the care they deserve. Our clinic serves individuals and families throughout Delaware County who are looking for professional, personalized mental health services.
                    </p>
                    <p>
                      We believe everyone's path to wellness is unique. Our licensed mental health professionals take the time to listen, understand your concerns, and work with you to develop a treatment approach that fits your life. Whether you're navigating a difficult transition, managing ongoing mental health concerns, or simply seeking a safe space to talk, we're here to support you.
                    </p>
                    <p>
                      Our commitment is to provide ethical, respectful care that honors your privacy and meets you where you are. From your first phone call to every session that follows, you can expect to be treated with dignity and compassion by a team that genuinely cares about your well-being.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Trust & Differentiation */}
          <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8">
                    Licensed Mental Health Clinic Serving Havertown, PA
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-amber-200">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-amber-100 text-amber-600">
                          <Shield className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-amber-900 mb-2">Licensed Professionals</h3>
                          <p className="text-amber-700">Our team consists of fully licensed mental health professionals with extensive training and experience in evidence-based treatment approaches.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-amber-200">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-amber-100 text-amber-600">
                          <Heart className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-amber-900 mb-2">Personalized Care</h3>
                          <p className="text-amber-700">We prioritize quality over volume. Each client receives individualized attention and a treatment plan tailored to their specific needs and goals.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-amber-200">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-amber-100 text-amber-600">
                          <MessageCircle className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-amber-900 mb-2">Confidential Treatment</h3>
                          <p className="text-amber-700">Your privacy matters. We maintain strict confidentiality standards and provide a safe, judgment-free space for you to share openly.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-amber-200">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-amber-100 text-amber-600">
                          <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-amber-900 mb-2">Local Presence</h3>
                          <p className="text-amber-700">As part of the Havertown community, we understand the local culture and are committed to serving our neighbors with integrity and care.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
                    Mental Health Services Available in Havertown
                  </h2>
                  <p className="text-lg text-amber-800 mb-8">
                    Our Havertown clinic provides structured mental health and psychiatric services for individuals, couples, families, and children.
                  </p>
                  
                  <div className="prose prose-lg text-amber-800 mb-8">
                    <p>
                      Whether you're looking for <Link to="/individual-therapy-havertown-pa" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">individual therapy in Havertown</Link> to work through personal challenges, or need <Link to="/psychiatric-evaluations-havertown-pa" className="text-orange-600 hover:text-orange-700 underline underline-offset-2">psychiatric evaluations</Link> to better understand your mental health needs, our licensed team is here to help.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="group"
                      >
                        <Link 
                          to={service.link}
                          className="block bg-gradient-to-br from-white to-amber-50 rounded-xl p-6 border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all duration-300"
                        >
                          <h3 className="text-lg font-semibold text-amber-900 mb-2 group-hover:text-orange-600 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-amber-700 text-sm">
                            {service.description}
                          </p>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Conditions Supported */}
          <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                    Mental Health Concerns We Commonly Support
                  </h2>
                  <p className="text-lg text-amber-800 mb-8">
                    Our therapists are experienced in helping individuals and families navigate a wide range of mental health challenges. We provide supportive, evidence-based care for concerns including:
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {conditions.map((condition, index) => (
                      <div 
                        key={index}
                        className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-amber-200 text-center"
                      >
                        <span className="text-amber-800 font-medium">{condition}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-amber-700 mt-8">
                    If you're unsure whether we can help with your specific concern, please reach out. Our team is happy to discuss your situation and help you find the right support.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Local Accessibility */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                    In-Clinic Mental Health Services in Havertown, Pennsylvania
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4 text-amber-800">
                      <p>
                        Our clinic is located in Havertown, Pennsylvania, serving residents across Delaware County. We've designed our space to be a comfortable, private environment where you can focus on your well-being.
                      </p>
                      <p>
                        The office is easily accessible for residents throughout the area, including those coming from Upper Darby, Ardmore, and Bryn Mawr.
                      </p>
                      <p>
                        Our in-clinic sessions take place in a professional, welcoming environment where your comfort and privacy are our priority. We offer flexible scheduling options to accommodate your work, school, or family commitments.
                      </p>
                      <p>
                        Scheduling an appointment is straightforward. You can call us directly or submit a request through our website, and our team will work with you to find a time that fits your schedule.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Calendar className="h-6 w-6 text-orange-500" />
                        <h3 className="text-lg font-semibold text-amber-900">Convenient Access</h3>
                      </div>
                      <ul className="space-y-3 text-amber-700">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          In-clinic appointments in Havertown, PA
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          Comfortable, private clinical setting
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          Flexible scheduling for your convenience
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          Easy appointment booking process
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8">
                    Mental Health Services in Havertown – FAQs
                  </h2>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`faq-${index}`}
                        className="bg-white/80 backdrop-blur-sm rounded-xl border border-amber-200 px-6"
                      >
                        <AccordionTrigger className="text-left text-amber-900 font-medium hover:text-orange-600 hover:no-underline py-5">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-amber-700 pb-5">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Conversion CTA */}
          <section className="relative py-20 md:py-24 overflow-hidden">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/images/havertown-aerial.png')" }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
            
            {/* Top fade from previous section */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-amber-50 to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
                    Schedule a Mental Health Appointment in Havertown
                  </h2>
                  <p className="text-lg text-amber-100 mb-8 drop-shadow-md">
                    Taking the first step toward better mental health is an act of courage. At Sunrise Human Care, we're ready to walk alongside you on your journey. Our compassionate team is here to listen, support, and guide you toward the well-being you deserve—all within a confidential, caring environment.
                  </p>
                  <p className="text-amber-100 mb-8 drop-shadow-md">
                    Contact us today to schedule your appointment. We look forward to welcoming you.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      to="/appointment" 
                      className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-8 py-4 rounded-lg shadow-lg transition-all duration-300 font-medium inline-flex items-center justify-center hover:scale-105"
                    >
                      Book Your Appointment
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <a 
                      href="tel:+18146202162" 
                      className="bg-white/10 backdrop-blur-sm border-2 border-white/40 hover:bg-white/20 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium inline-flex items-center justify-center hover:scale-105"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      (814) 620-2162
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
};

export default MentalHealthHavertown;
