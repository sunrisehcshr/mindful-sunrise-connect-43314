
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck, MapPin, CheckCircle, Clock, Mail, Phone } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log({ name, email, phone, date, message });
    setSubmitted(true);
    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setMessage("");
    
    // Show success for 3 seconds then reset
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>Sunrise Human Care Services | Mental Health Clinic in Havertown, PA</title>
        <meta name="description" content="Sunrise Human Care Services provides compassionate mental health services in Havertown, PA. Professional therapy, counseling, and psychiatric care for individuals, couples, and families." />
        <meta name="keywords" content="mental health, therapy, counseling, psychiatry, Havertown, PA, psychological services, depression, anxiety, trauma, wellness" />
        <meta property="og:title" content="Sunrise Human Care Services | Mental Health Clinic in Havertown, PA" />
        <meta property="og:description" content="Professional therapy, counseling, and psychiatric services in Havertown, PA. Compassionate care for individuals, couples, and families." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sunrisehcs.com" />
        <link rel="canonical" href="https://sunrisehcs.com" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm py-4">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sunrise-400 transition-transform duration-500 group-hover:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-semibold text-lg leading-tight">Sunrise</span>
                  <span className="text-xs text-muted-foreground leading-tight">Human Care Services</span>
                </div>
              </Link>

              <nav className="hidden md:flex items-center space-x-1">
                <a href="#home" className="px-4 py-2 rounded-md text-sm font-medium text-foreground bg-sunrise-400/20">Home</a>
                <a href="#services" className="px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-sunrise-400/10">Services</a>
                <a href="#about" className="px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-sunrise-400/10">About</a>
                <a href="#faq" className="px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-sunrise-400/10">FAQ</a>
                <a href="#contact" className="px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-sunrise-400/10">Contact</a>
                <a href="#appointment" className="ml-2 btn-sunrise">Book Now</a>
              </nav>

              <button className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>
        
        <main>
          {/* Hero Section */}
          <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            <div className="absolute inset-0 bg-gradient-to-b from-sunrise-50/40 to-white/50 z-0"></div>
            
            <div className="absolute inset-0 z-0 opacity-5">
              <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div>
                    <motion.span 
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sunrise-400/20 text-sunrise-900"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      Sunrise Human Care Services
                    </motion.span>
                  </div>
                  <motion.h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    Compassionate Mental Health Care in{" "}
                    <span className="relative">
                      <span className="relative z-10">Havertown</span>
                      <span className="absolute bottom-1 left-0 w-full h-3 bg-sunrise-400/30 -z-10"></span>
                    </span>
                  </motion.h1>
                  <motion.p 
                    className="text-lg text-muted-foreground max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    We provide compassionate, personalized mental health services to help you navigate life's challenges. Our team of experienced professionals is dedicated to your well-being.
                  </motion.p>
                  <motion.div 
                    className="flex flex-wrap gap-4 pt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  >
                    <a href="#appointment" className="btn-sunrise flex items-center gap-2">
                      <CalendarCheck className="h-5 w-5" />
                      Book Appointment
                    </a>
                    <a href="tel:+12155551234" className="btn-sunrise-outline flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Call Us Now
                    </a>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-sunrise-400/80 to-sunrise-500/20 mix-blend-multiply z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Therapy session in a comfortable environment" 
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent z-20">
                    <p className="text-white text-lg font-medium">Creating a safe space for healing</p>
                    <p className="text-white/80 text-sm">Personalized therapy for your unique needs</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Services Section */}
          <section id="services" className="py-20 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sunrise-400/20 text-sunrise-900 mb-4">
                  Our Services
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Comprehensive Mental Health Services
                </h2>
                <p className="text-muted-foreground">
                  Our team of experienced mental health professionals provides a range of services 
                  designed to support your well-being and personal growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {[
                  {
                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
                    title: "Individual Therapy",
                    description: "One-on-one therapy sessions tailored to your unique needs and challenges.",
                    color: "bg-blue-50 text-blue-600",
                  },
                  {
                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
                    title: "Group Therapy",
                    description: "Supportive group environments to connect with others facing similar challenges.",
                    color: "bg-green-50 text-green-600",
                  },
                  {
                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
                    title: "Family Counseling",
                    description: "Therapy sessions focused on improving family relationships and communication.",
                    color: "bg-purple-50 text-purple-600",
                  },
                  {
                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
                    title: "Specialized Programs",
                    description: "Targeted therapeutic approaches for specific mental health conditions.",
                    color: "bg-amber-50 text-amber-600",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 shadow-sm border border-border/40 hover:shadow-md transition-shadow duration-300 flex flex-col"
                  >
                    <div className={`p-3 rounded-lg w-fit mb-4 ${service.color}`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm flex-grow">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* About Section */}
          <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sunrise-400/20 text-sunrise-900 mb-4">
                    About Us
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Dedicated to Your Mental Health Journey
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    At Sunrise Human Care Services, we believe in a holistic approach to mental health. 
                    Our clinic was founded in 2010 with a mission to provide accessible, compassionate care 
                    to the Havertown community and surrounding areas.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Our team of licensed therapists, counselors, and psychiatrists bring diverse expertise 
                    to address a wide range of mental health challenges, from anxiety and depression to trauma 
                    and relationship issues.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { value: "13+", label: "Years of Experience" },
                      { value: "20+", label: "Mental Health Professionals" },
                      { value: "5,000+", label: "Clients Helped" },
                      { value: "98%", label: "Client Satisfaction" }
                    ].map((stat, index) => (
                      <div key={index} className="bg-secondary/50 rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold text-sunrise-700">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                  <img 
                    className="rounded-2xl h-40 object-cover w-full md:h-64 shadow-md"
                    src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="Our clinic building"
                  />
                  <img 
                    className="rounded-2xl h-40 object-cover w-full md:h-64 mt-8 shadow-md"
                    src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="Our therapy room"
                  />
                  <img 
                    className="rounded-2xl h-40 object-cover w-full md:h-64 shadow-md col-span-2"
                    src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Our team"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section id="faq" className="py-20 bg-secondary/50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sunrise-400/20 text-sunrise-900 mb-4">
                  Frequently Asked Questions
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Common Questions About Our Services
                </h2>
                <p className="text-muted-foreground">
                  Find answers to common questions about our mental health services, appointments, and insurance.
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto divide-y divide-border">
                {[
                  {
                    question: "What types of mental health issues do you treat?",
                    answer: "We provide treatment for a wide range of mental health concerns including anxiety, depression, trauma, PTSD, relationship issues, grief, stress management, and more. Our team is experienced in working with individuals of all ages, from children to seniors."
                  },
                  {
                    question: "Do you accept insurance?",
                    answer: "Yes, we accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, United Healthcare, and Medicare. We also offer affordable self-pay options for those without insurance coverage. Please contact our office to verify your specific insurance benefits."
                  },
                  {
                    question: "How long are therapy sessions?",
                    answer: "Typical therapy sessions are 50 minutes in length, which is the standard for most mental health services. Initial evaluations may be longer, usually around 60-90 minutes, to allow for a comprehensive assessment of your needs."
                  },
                  {
                    question: "How do I know if I need therapy?",
                    answer: "If you're experiencing persistent feelings of sadness, anxiety, or overwhelm, having difficulty managing daily life, struggling with relationships, or facing challenging life transitions, therapy might be beneficial. We offer free 15-minute consultations to help determine if our services are right for you."
                  },
                  {
                    question: "Is therapy confidential?",
                    answer: "Yes, confidentiality is a fundamental part of the therapeutic relationship. What you share in therapy is protected by law and ethical standards. There are some legal limitations to confidentiality, such as situations involving risk of harm to yourself or others, which your therapist will discuss with you during your first session."
                  }
                ].map((faq, index) => (
                  <div key={index} className="py-6">
                    <h3 className="text-lg font-medium mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Appointment Section */}
          <section id="appointment" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sunrise-400/20 text-sunrise-900 mb-4">
                      Book an Appointment
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      Schedule Your Consultation
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Take the first step toward better mental health by scheduling an appointment with one of our experienced professionals.
                    </p>
                    
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                          <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                          <input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-foreground mb-1">Preferred Date</label>
                        <input
                          id="date"
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Your Message</label>
                        <textarea
                          id="message"
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50"
                          placeholder="Please share any specific concerns or questions you have."
                          required
                        ></textarea>
                      </div>
                      
                      <button type="submit" className="btn-sunrise w-full">
                        {submitted ? "Request Sent!" : "Request Appointment"}
                      </button>
                    </form>
                  </div>
                  
                  <div className="space-y-8">
                    {/* Map */}
                    <div className="h-64 md:h-80 rounded-xl overflow-hidden border border-border/40 shadow-sm">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24470.75269647747!2d-75.31516589451929!3d39.9707342424314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c09bb476bd27%3A0xfb0cdef8f04a8c20!2sHavertown%2C%20PA!5e0!3m2!1sen!2sus!4v1697318636626!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Sunrise Human Care Services location map"
                      ></iframe>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="bg-secondary/50 rounded-xl p-6 border border-border/40">
                      <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-sunrise-700 mt-0.5" />
                          <p className="text-muted-foreground">
                            123 Main Street<br />
                            Havertown, PA 19083
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-sunrise-700" />
                          <a href="tel:+12155551234" className="text-muted-foreground hover:text-sunrise-700 transition-colors">
                            (215) 555-1234
                          </a>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-sunrise-700" />
                          <a href="mailto:info@sunrisehcs.com" className="text-muted-foreground hover:text-sunrise-700 transition-colors">
                            info@sunrisehcs.com
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Opening Hours */}
                    <div className="bg-secondary/50 rounded-xl p-6 border border-border/40">
                      <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <p className="text-muted-foreground">Monday - Friday</p>
                          <p className="font-medium">8:00 AM - 7:00 PM</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-muted-foreground">Saturday</p>
                          <p className="font-medium">9:00 AM - 5:00 PM</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-muted-foreground">Sunday</p>
                          <p className="font-medium">Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Testimonials Section */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sunrise-400/20 text-sunrise-900 mb-4">
                  Testimonials
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What Our Clients Say
                </h2>
                <p className="text-muted-foreground">
                  Hear about the experiences of individuals who have found support 
                  and healing through our services.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    quote: "The therapists at Sunrise have helped me develop the tools I need to manage my anxiety. I'm truly grateful for their compassionate approach.",
                    author: "J.M., Havertown",
                  },
                  {
                    quote: "Our family therapy sessions have transformed our communication. We've learned to understand each other better and build stronger relationships.",
                    author: "The Wilson Family",
                  },
                  {
                    quote: "After struggling for years, the team at Sunrise helped me find a path forward. Their personalized approach made all the difference in my recovery.",
                    author: "T.D., Philadelphia",
                  },
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="h-32 flex items-center justify-center mb-6">
                      <svg className="h-10 w-10 text-sunrise-400/30" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                    <p className="font-medium text-foreground">- {testimonial.author}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        {/* Footer */}
        <footer className="bg-secondary py-12 border-t">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* About */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sunrise-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                  <h3 className="font-semibold text-lg">Sunrise</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Sunrise Human Care Services provides compassionate mental health care in Havertown, PA, 
                  focusing on individual well-being and community support.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Contact Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-sunrise-400 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      123 Main Street, Havertown, PA 19083
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-sunrise-400" />
                    <a href="tel:+12155551234" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      (215) 555-1234
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-sunrise-400" />
                    <a href="mailto:info@sunrisehcs.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      info@sunrisehcs.com
                    </a>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-sunrise-400 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <p>Monday - Friday: 8am - 7pm</p>
                      <p>Saturday: 9am - 5pm</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="space-y-4 md:col-span-2 lg:col-span-2">
                <h3 className="font-semibold text-lg">Newsletter</h3>
                <p className="text-sm text-muted-foreground">
                  Subscribe to our newsletter for helpful mental health tips and updates.
                </p>
                <form className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-2 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50"
                    required
                  />
                  <button
                    type="submit"
                    className="btn-sunrise text-sm whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  &copy; {new Date().getFullYear()} Sunrise Human Care Services. All rights reserved.
                </p>
                <div className="mt-4 md:mt-0">
                  <ul className="flex space-x-6">
                    <li>
                      <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="#sitemap" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                        Sitemap
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
