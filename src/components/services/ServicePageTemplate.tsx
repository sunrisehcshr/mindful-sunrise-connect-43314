
import React, { useState, useEffect } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ImageOptimizer from "@/components/ui/ImageOptimizer";
import { cn } from "@/lib/utils";
import { AppointmentDialog } from "@/components/Appointment/AppointmentDialog";
import ServiceContentSection from "@/components/services/ServiceContentSection";

interface ServicePageTemplateProps {
  title: string;
  description: string;
  metaDescription?: string;
  canonicalUrl: string;
  breadcrumbs?: {
    name: string;
    url: string;
    position: number;
  }[];
  icon?: React.ReactNode;
  iconColor?: string;
  heroBackground?: string;
  detailedDescription?: React.ReactNode;
  benefits?: string[];
  process?: string[];
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  serviceSchema?: {
    name: string;
    description: string;
    provider: string;
    serviceType: string;
    areaServed: string;
  };
  children?: React.ReactNode;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  description,
  metaDescription,
  canonicalUrl,
  breadcrumbs,
  icon,
  iconColor = "text-amber-800",
  heroBackground,
  detailedDescription,
  benefits,
  process,
  faqs,
  serviceSchema,
  children,
}) => {
  const [openAppointment, setOpenAppointment] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Scroll to top and set page title on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Generate background style for hero section
  const heroBgStyle = heroBackground 
    ? { backgroundImage: `url(${heroBackground})` }
    : {};

  return (
    <>
      {/* SEO */}
      <SEOHead 
        title={`${title} | Sunrise Human Care Services | Havertown, PA`}
        description={metaDescription || description}
        canonicalUrl={canonicalUrl}
        keywords={`${title.toLowerCase()}, counseling, therapy, Havertown, PA, mental health`}
        serviceSchema={serviceSchema}
        breadcrumbs={breadcrumbs}
      />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-amber-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="soft" className="mb-4">Mental Health Services</Badge>
            <h1 className="text-3xl md:text-5xl font-playfair font-bold text-amber-950 mb-6">{title}</h1>
            <p className="text-lg md:text-xl text-amber-900/80 mb-8 max-w-3xl mx-auto">{description}</p>
            <Button 
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-6 h-auto text-lg rounded-full shadow-lg"
              onClick={() => setOpenAppointment(true)}
            >
              <Calendar className="mr-2 h-5 w-5" /> 
              Schedule Your Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      {detailedDescription && (
        <ServiceContentSection 
          title="About Our Service"
          variant="alternate"
          hasBgPattern
          tagText="Professional Care"
        >
          <div className="prose prose-amber max-w-none">
            {detailedDescription}
          </div>
        </ServiceContentSection>
      )}

      {/* Benefits Section */}
      {benefits && benefits.length > 0 && (
        <ServiceContentSection
          title="Benefits of Our Service"
          variant="default"
        >
          <div className="grid gap-6 md:grid-cols-2 mt-8">
            {benefits.map((benefit, index) => (
              <Card key={index} hover="lift" variant="outline" className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex">
                    <div className="shrink-0 mr-4">
                      <div className={cn("h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center", iconColor)}>
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <p className="text-amber-900">{benefit}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ServiceContentSection>
      )}

      {/* Process Section */}
      {process && process.length > 0 && (
        <ServiceContentSection
          title="Our Process"
          variant="highlight"
        >
          <ol className="mt-8 space-y-6">
            {process.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className={cn("flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-semibold mr-4", iconColor)}>
                  {index + 1}
                </span>
                <div className="pt-1">
                  <p className="text-amber-900">{step}</p>
                </div>
              </li>
            ))}
          </ol>
        </ServiceContentSection>
      )}

      {/* FAQs Section */}
      {faqs && faqs.length > 0 && (
        <ServiceContentSection
          title="Frequently Asked Questions"
          variant="default"
          hasBgPattern
          tagText="Common Questions"
        >
          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-amber-100 pb-4">
                <button
                  className="w-full text-left flex justify-between items-center font-medium text-amber-900"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {faq.question}
                  <ChevronDown
                    className={cn("h-5 w-5 text-amber-600 transition-transform", 
                      openFaq === index ? "rotate-180" : "")}
                  />
                </button>
                {openFaq === index && (
                  <div className="mt-2 text-amber-800">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ServiceContentSection>
      )}

      {/* Additional content */}
      {children}

      {/* CTA Section */}
      <ServiceContentSection
        title="Take the First Step Today"
        variant="highlight"
      >
        <div className="text-center">
          <p className="text-lg text-amber-800 mb-8">
            Contact us today to schedule your initial consultation and begin your journey toward improved mental health and well-being.
          </p>
          <Button 
            className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-6 h-auto text-lg rounded-full shadow-lg"
            onClick={() => setOpenAppointment(true)}
          >
            <Calendar className="mr-2 h-5 w-5" /> 
            Schedule Your Appointment
          </Button>
        </div>
      </ServiceContentSection>
      
      {/* Appointment Dialog */}
      <AppointmentDialog 
        onOpenChange={setOpenAppointment} 
        open={openAppointment} 
        defaultServiceName={title}
      />
    </>
  );
};

export default ServicePageTemplate;
