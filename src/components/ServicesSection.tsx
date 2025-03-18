
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Brain, Heart, Users, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Brain,
    title: "Individual Therapy",
    description: "One-on-one therapy sessions tailored to your unique needs and challenges.",
    color: "bg-blue-50 text-blue-600",
    url: "/individual-therapy-havertown-pa",
  },
  {
    icon: Users,
    title: "Group Therapy",
    description: "Supportive group environments to connect with others facing similar challenges.",
    color: "bg-green-50 text-green-600",
    url: "/family-therapy-havertown-pa",
  },
  {
    icon: Heart,
    title: "Family Counseling",
    description: "Therapy sessions focused on improving family relationships and communication.",
    color: "bg-purple-50 text-purple-600",
    url: "/family-therapy-havertown-pa",
  },
  {
    icon: Sparkles,
    title: "Specialized Programs",
    description: "Targeted therapeutic approaches for specific mental health conditions.",
    color: "bg-amber-50 text-amber-600",
    url: "/services",
  },
];

const ServicesSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-background" id="services">
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
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-xl p-6 shadow-sm border border-border/40 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className={cn("p-3 rounded-lg w-fit mb-4", service.color)}>
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm flex-grow">
                {service.description}
              </p>
              <Link
                to={service.url}
                className="mt-4 inline-flex items-center text-sm font-medium text-sunrise-700 hover:text-sunrise-800 transition-colors duration-200"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Link to="/services" className="btn-sunrise inline-flex items-center">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
