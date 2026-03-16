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
        {/* Custom floating nav for this page */}
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl bg-white/95 backdrop-blur-md rounded-[16px] shadow-lg px-4 md:px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src="/logo.svg" alt="Sunrise Logo" className="h-10 w-12 object-contain" />
            <div className="flex flex-col">
              <span className="leading-tight text-base bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text font-extrabold">Sunrise</span>
              <span className="text-xs text-muted-foreground leading-tight font-normal">Human Care Services</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="font-barlow font-medium text-sm text-zinc-600 hover:text-zinc-900 transition-colors">About</a>
            <a href="#services" className="font-barlow font-medium text-sm text-zinc-600 hover:text-zinc-900 transition-colors">Services</a>
            <a href="#conditions" className="font-barlow font-medium text-sm text-zinc-600 hover:text-zinc-900 transition-colors">Conditions</a>
            <a href="#faq" className="font-barlow font-medium text-sm text-zinc-600 hover:text-zinc-900 transition-colors">FAQ</a>
          </div>
          <Link
            to="/appointment"
            className="flex items-center gap-2 bg-[#222] text-white font-barlow font-medium text-xs md:text-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full hover:bg-zinc-800 transition-colors shrink-0"
          >
            <span className="hidden sm:inline">Book</span> Appointment
            <span className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/20">
              <ArrowRight className="h-3 w-3 md:h-3.5 md:w-3.5 rotate-[-45deg]" />
            </span>
          </Link>
        </nav>
        <main className="flex-grow">
          
          {/* Premium Video Hero Section */}
          <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260228_065522_522e2295-ba22-457e-8fdb-fbcd68109c73.mp4"
            />

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="max-w-4xl"
              >
                <h1 className="mb-6">
                  <span className="block font-barlow font-semibold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.04em] leading-tight drop-shadow-lg">
                    Step into a brighter tomorrow
                  </span>
                  <span className="block font-instrument-serif italic text-yellow-300 text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-none mt-2 drop-shadow-lg">
                    with sunrise
                  </span>
                </h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="font-barlow font-medium text-white text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-lg"
                >
                  Professional, compassionate mental health care from licensed therapists who understand your needs. Serving Havertown and the surrounding community.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <Link
                    to="/appointment"
                    className="inline-flex items-center gap-2 bg-white text-zinc-900 font-barlow font-semibold text-base md:text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <Calendar className="h-5 w-5" />
                    Schedule an Appointment
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
          </section>

          {/* Local Introduction */}
          <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
                >
                  <div>
                    <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-zinc-400 mb-4">About Our Practice</span>
                    <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-5xl text-zinc-900 tracking-tight leading-tight mb-6">
                      Compassionate care for
                      <span className="block font-instrument-serif italic text-zinc-500 font-normal">Havertown residents</span>
                    </h2>
                  </div>
                  <div className="space-y-5 font-barlow text-zinc-600 text-base md:text-lg leading-relaxed">
                    <p>
                      At Sunrise Human Care, we understand that seeking mental health support can feel like a significant step. That's why we've created a welcoming, confidential environment where Havertown residents can receive the care they deserve.
                    </p>
                    <p>
                      We believe everyone's path to wellness is unique. Our licensed mental health professionals take the time to listen, understand your concerns, and work with you to develop a treatment approach that fits your life.
                    </p>
                    <p>
                      From your first phone call to every session that follows, you can expect to be treated with dignity and compassion by a team that genuinely cares about your well-being.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Trust & Differentiation */}
          <section className="py-20 md:py-28 bg-gradient-to-b from-amber-50/40 via-orange-50/30 to-amber-50/20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="text-center mb-14">
                    <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-amber-600 mb-4">Why Choose Us</span>
                    <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-5xl text-amber-950 tracking-tight leading-tight">
                      Licensed mental health clinic
                      <span className="block font-instrument-serif italic text-amber-700/70 font-normal">serving Havertown, PA</span>
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[
                      { icon: <Shield className="h-5 w-5" />, title: "Licensed Professionals", desc: "Our team consists of fully licensed mental health professionals with extensive training and experience in evidence-based treatment approaches." },
                      { icon: <Heart className="h-5 w-5" />, title: "Personalized Care", desc: "We prioritize quality over volume. Each client receives individualized attention and a treatment plan tailored to their specific needs and goals." },
                      { icon: <MessageCircle className="h-5 w-5" />, title: "Confidential Treatment", desc: "Your privacy matters. We maintain strict confidentiality standards and provide a safe, judgment-free space for you to share openly." },
                      { icon: <MapPin className="h-5 w-5" />, title: "Local Presence", desc: "As part of the Havertown community, we understand the local culture and are committed to serving our neighbors with integrity and care." }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group bg-white/80 backdrop-blur-sm border border-amber-200/50 rounded-2xl p-7 hover:bg-white hover:shadow-md hover:border-amber-300/60 transition-all duration-300"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600">
                            {item.icon}
                          </div>
                          <h3 className="font-barlow font-semibold text-lg text-amber-950">{item.title}</h3>
                        </div>
                        <p className="font-barlow text-amber-900/60 text-sm leading-relaxed">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-amber-50/20 to-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="text-center mb-14">
                    <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-zinc-400 mb-4">Our Services</span>
                    <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-5xl text-zinc-900 tracking-tight leading-tight">
                      Mental health services
                      <span className="block font-instrument-serif italic text-zinc-400 font-normal">available in Havertown</span>
                    </h2>
                    <p className="font-barlow text-zinc-500 text-base md:text-lg mt-5 max-w-2xl mx-auto">
                      Our Havertown clinic provides structured mental health and psychiatric services for individuals, couples, families, and children.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <Link 
                          to={service.link}
                          className="group flex items-start gap-5 rounded-2xl p-6 border border-zinc-100 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 bg-white"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center mt-0.5 group-hover:bg-yellow-400 transition-colors duration-300">
                            <ArrowRight className="h-4 w-4 text-white rotate-[-45deg] group-hover:text-zinc-900 transition-colors duration-300" />
                          </div>
                          <div>
                            <h3 className="font-barlow font-semibold text-lg text-zinc-900 mb-1.5 group-hover:text-zinc-700 transition-colors">
                              {service.title}
                            </h3>
                            <p className="font-barlow text-zinc-500 text-sm leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Conditions Supported */}
          <section id="conditions" className="py-20 md:py-28 bg-gradient-to-b from-white via-orange-50/20 to-amber-50/30">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="text-center mb-14">
                    <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-zinc-400 mb-4">Conditions</span>
                    <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-5xl text-zinc-900 tracking-tight leading-tight">
                      Concerns we
                      <span className="font-instrument-serif italic text-zinc-400 font-normal"> commonly support</span>
                    </h2>
                    <p className="font-barlow text-zinc-500 text-base md:text-lg mt-5 max-w-2xl mx-auto">
                      Our therapists are experienced in helping individuals and families navigate a wide range of mental health challenges.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {conditions.map((condition, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-white rounded-2xl p-5 md:p-6 border border-zinc-100 text-center hover:shadow-md hover:border-zinc-200 transition-all duration-300"
                      >
                        <span className="font-barlow font-semibold text-zinc-800 text-base">{condition}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <p className="font-barlow text-zinc-500 mt-8 text-center text-sm">
                    If you're unsure whether we can help with your specific concern, please reach out. Our team is happy to discuss your situation.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Local Accessibility */}
          <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div>
                      <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-zinc-400 mb-4">Visit Us</span>
                      <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-5xl text-zinc-900 tracking-tight leading-tight mb-6">
                        In-clinic services in
                        <span className="block font-instrument-serif italic text-zinc-500 font-normal">Havertown, Pennsylvania</span>
                      </h2>
                      <div className="space-y-4 font-barlow text-zinc-600 text-base leading-relaxed">
                        <p>
                          Our clinic is located in Havertown, Pennsylvania, serving residents across Delaware County. We've designed our space to be a comfortable, private environment where you can focus on your well-being.
                        </p>
                        <p>
                          The office is easily accessible for residents throughout the area, including those coming from Upper Darby, Ardmore, and Bryn Mawr.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-zinc-950 rounded-2xl p-8 text-white">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-300/10">
                          <Calendar className="h-5 w-5 text-yellow-300" />
                        </div>
                        <h3 className="font-barlow font-semibold text-lg">Convenient Access</h3>
                      </div>
                      <ul className="space-y-4">
                        {[
                          "In-clinic appointments in Havertown, PA",
                          "Comfortable, private clinical setting",
                          "Flexible scheduling for your convenience",
                          "Easy appointment booking process"
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 font-barlow text-zinc-300 text-sm">
                            <CheckCircle className="h-4 w-4 text-yellow-300 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section id="faq" className="py-20 md:py-28 bg-zinc-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <div className="text-center mb-14">
                    <span className="inline-block font-barlow font-semibold text-xs tracking-[0.2em] uppercase text-zinc-400 mb-4">FAQ</span>
                    <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-5xl text-zinc-900 tracking-tight leading-tight">
                      Frequently asked
                      <span className="font-instrument-serif italic text-zinc-400 font-normal"> questions</span>
                    </h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`faq-${index}`}
                        className="bg-white rounded-2xl border border-zinc-100 px-6 data-[state=open]:shadow-md transition-shadow duration-300"
                      >
                        <AccordionTrigger className="text-left font-barlow font-semibold text-zinc-900 hover:text-zinc-600 hover:no-underline py-5 text-base">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="font-barlow text-zinc-500 pb-5 text-sm leading-relaxed">
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
          <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-no-repeat"
              style={{ backgroundImage: "url('/images/havertown-hero-sunrise.png')", backgroundPosition: "center 5%" }}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />
            
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h2 className="font-barlow font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4 drop-shadow-lg">
                    Ready for a
                    <span className="font-instrument-serif italic text-yellow-300 font-normal"> brighter tomorrow?</span>
                  </h2>
                  <p className="font-barlow text-white/80 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed drop-shadow-md">
                    Taking the first step toward better mental health is an act of courage. Our compassionate team is here to listen, support, and guide you.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      to="/appointment" 
                      className="inline-flex items-center justify-center gap-2 bg-white text-zinc-900 font-barlow font-semibold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <Calendar className="h-5 w-5" />
                      Book Your Appointment
                    </Link>
                    <a 
                      href="tel:+18146202162" 
                      className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-barlow font-semibold text-base px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
                    >
                      <Phone className="h-5 w-5" />
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
