
import React from 'react';
import ServicePageLayout from '../../components/services/ServicePageLayout';
import ServiceContentSection from '../../components/services/ServiceContentSection';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const TraumaPTSDTherapy = () => {
  const benefits = [
    "Reduce intrusive memories, nightmares, and flashbacks",
    "Develop effective coping strategies for managing trauma reactions",
    "Process traumatic memories in a safe, supported environment",
    "Decrease hypervigilance and startle responses",
    "Improve sleep, concentration, and daily functioning",
    "Reclaim a sense of safety, control, and hope for the future"
  ];
  
  const approaches = [
    {
      title: "Eye Movement Desensitization and Reprocessing (EMDR)",
      description: "A specialized therapy that helps the brain process traumatic memories using bilateral stimulation, often leading to significant symptom reduction in a relatively short time."
    },
    {
      title: "Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)",
      description: "A structured approach that helps you identify and change unhelpful thoughts and beliefs related to the trauma while developing skills to manage difficult emotions."
    },
    {
      title: "Cognitive Processing Therapy (CPT)",
      description: "Focuses on how you make sense of your traumatic experience, helping you modify unhelpful beliefs that have developed as a result of trauma."
    },
    {
      title: "Prolonged Exposure Therapy (PE)",
      description: "Gradually and safely confronts trauma-related memories, feelings, and situations that you've been avoiding, helping reduce their power over you."
    }
  ];
  
  const faqs = [
    {
      question: "Do I have to talk about my trauma in detail?",
      answer: "While processing traumatic experiences is often part of effective treatment, we move at your pace and use techniques that make this process manageable. With approaches like EMDR, you don't always need to share every detail aloud. We prioritize your safety and comfort throughout treatment."
    },
    {
      question: "How long does trauma therapy typically take?",
      answer: "Treatment length varies based on the nature of the trauma, its complexity, and your specific needs. Some approaches like EMDR can produce significant results in 8-12 sessions for single-incident trauma. Complex or childhood trauma may require longer treatment. We'll discuss expected timeframes during your initial consultation."
    },
    {
      question: "Can trauma therapy make my symptoms worse?",
      answer: "It's common to experience some temporary discomfort during trauma processing, similar to how physical therapy might cause some soreness while healing occurs. However, we use evidence-based approaches with proven safety records and teach stabilization skills before processing trauma to ensure you have tools to manage any distress that arises."
    },
    {
      question: "Is it possible to recover from PTSD and trauma?",
      answer: "Yes, absolutely. With appropriate treatment, most people experience significant reduction in PTSD symptoms and many achieve full recovery. Recovery doesn't necessarily mean forgetting what happened, but rather that the memories no longer control your life or cause intense distress."
    }
  ];
  
  const relatedServices = [
    { title: "Individual Therapy", url: "/individual-therapy-havertown-pa" },
    { title: "Anxiety Therapy", url: "/anxiety-therapy-havertown-pa" },
    { title: "Depression Therapy", url: "/depression-therapy-havertown-pa" }
  ];
  
  return (
    <ServicePageLayout
      title="Trauma & PTSD Therapy in Havertown, PA"
      description="Specialized therapeutic approaches for healing from trauma and PTSD, including EMDR therapy and trauma-focused counseling."
      pageTitle="Expert Trauma & PTSD Therapy in Havertown, PA - EMDR & Trauma Treatment | Sunrise Human Care"
      metaDescription="Effective trauma and PTSD treatment in Havertown, PA. Specialized approaches including EMDR therapy help you process traumatic experiences and reclaim your life. Schedule today."
      serviceType="Trauma & PTSD Therapy"
      canonicalUrl="/ptsd-therapy-havertown-pa"
      benefits={benefits}
      approaches={approaches}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      {/* Enhanced service-specific content */}
      <ServiceContentSection
        title="Our Approach to Trauma Treatment"
        hasBgPattern={true}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-5 text-muted-foreground">
              <p className="leading-relaxed">
                At Sunrise Human Care Services in Havertown, PA, we understand that trauma can profoundly impact every aspect of your life. Our trauma-informed therapists specialize in evidence-based approaches specifically designed to help you process traumatic experiences and reduce their impact on your daily life.
              </p>
              
              <p className="leading-relaxed">
                We begin with a thorough assessment to understand your specific trauma history, symptoms, and treatment goals. Based on this assessment, we'll recommend the most appropriate therapeutic approach for your particular situation, whether that's EMDR, trauma-focused CBT, or another specialized approach.
              </p>
              
              <p className="leading-relaxed">
                Safety and stabilization come first—we'll help you develop skills to manage overwhelming emotions and establish a sense of security before processing traumatic material. Throughout treatment, we work at your pace, respecting your boundaries and ensuring you feel in control of the therapeutic process.
              </p>
              
              <p className="leading-relaxed">
                Our goal is not just symptom reduction but helping you integrate traumatic experiences in a way that allows you to move forward with renewed strength and resilience. Many clients find that effective trauma treatment leads to not only relief from PTSD symptoms but also personal growth and a deeper connection to themselves and others.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-7 rounded-xl shadow-md border border-sunrise-100/50 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-5 text-orange-600 font-playfair">
              Our Trauma Services Help With:
            </h3>
            
            <ul className="space-y-3.5">
              {[
                "Post-Traumatic Stress Disorder (PTSD)",
                "Complex trauma and C-PTSD",
                "Childhood trauma and adverse experiences",
                "Single-incident trauma (accidents, assaults, etc.)",
                "Medical trauma",
                "Combat trauma and military experiences",
                "Interpersonal trauma and abuse",
                "Traumatic grief and loss"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </ServiceContentSection>
    </ServicePageLayout>
  );
};

export default TraumaPTSDTherapy;
