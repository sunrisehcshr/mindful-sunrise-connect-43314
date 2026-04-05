import re

with open('/workspace/src/app/services/ServicesClient.tsx', 'r') as f:
    content = f.read()

old_faq = """          {/* SECTION 4: FAQs */}
          <section className="py-16 md:py-24 bg-stone-100">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <SectionTag>Common Questions</SectionTag>
                  <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight mt-4">
                    Mental Health Services FAQs
                  </h2>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      question: "Do you accept Medicaid for therapy and psychiatry?",
                      answer: "Yes, Sunrise Human Care Services exclusively accepts Medicaid. We believe high-quality mental health care should be accessible to everyone in Delaware County, without financial barriers."
                    },
                    {
                      question: "What is the difference between therapy and a psychiatric evaluation?",
                      answer: "Therapy (or counseling) involves regular sessions to discuss feelings, behaviors, and coping strategies. A psychiatric evaluation is a diagnostic assessment performed by a medical professional who can prescribe medications to help manage your symptoms."
                    },
                    {
                      question: "Can I receive both therapy and medication management at your clinic?",
                      answer: "Absolutely. In fact, we encourage it. Research shows that combining talk therapy with appropriate medication management often yields the best outcomes for conditions like depression, anxiety, and ADHD."
                    },
                    {
                      question: "Do you offer services for children and teenagers?",
                      answer: "Yes, we have specialized child and adolescent therapists on staff. We offer play therapy for younger children and cognitive behavioral approaches tailored specifically for teens navigating school, peer, and family challenges."
                    }
                  ].map((faq, index) => (
                    <div 
                      key={index}
                      className="group relative overflow-hidden rounded-[2rem] border border-stone-200/60 bg-white/50 hover:border-orange-200/40 hover:bg-white shadow-sm transition-all duration-500"
                    >
                      <button 
                        type="button"
                        className="relative flex w-full items-start gap-6 px-8 py-6 text-left transition-colors duration-300 focus:outline-none"
                      >
                        <div className="flex flex-1 flex-col gap-2">
                          <h3 className="text-lg font-barlow font-bold leading-tight tracking-tight text-stone-900 group-hover:text-orange-500 transition-colors duration-300">
                            {faq.question}
                          </h3>
                          <p className="text-stone-500 font-barlow text-base leading-relaxed pt-2">
                            {faq.answer}
                          </p>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>"""

new_faq = """          {/* SECTION 4: FAQs */}
          <section className="py-16 md:py-24 bg-stone-50 relative overflow-hidden">
            <CurveTransition fillColor="#ffffff" />
            
            {/* Animated SVG Background */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0">
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f97316" strokeWidth="0.5" strokeOpacity="0.3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                <motion.circle 
                  cx="80%" 
                  cy="20%" 
                  r="150" 
                  fill="none" 
                  stroke="#ea580c" 
                  strokeWidth="1" 
                  strokeOpacity="0.2"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1] 
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
                <motion.circle 
                  cx="20%" 
                  cy="80%" 
                  r="250" 
                  fill="none" 
                  stroke="#ea580c" 
                  strokeWidth="1" 
                  strokeOpacity="0.1"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1] 
                  }}
                  transition={{ 
                    duration: 12, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 mt-12">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 flex flex-col items-center gap-4">
                  <SectionTag>Common Questions</SectionTag>
                  <h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight">
                    Mental Health Services <span className="font-instrument-serif italic text-orange-500">FAQs.</span>
                  </h2>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      question: "Do you accept Medicaid for therapy and psychiatry?",
                      answer: "Yes, Sunrise Human Care Services exclusively accepts Medicaid. We believe high-quality mental health care should be accessible to everyone in Delaware County, without financial barriers."
                    },
                    {
                      question: "What is the difference between therapy and a psychiatric evaluation?",
                      answer: "Therapy (or counseling) involves regular sessions to discuss feelings, behaviors, and coping strategies. A psychiatric evaluation is a diagnostic assessment performed by a medical professional who can prescribe medications to help manage your symptoms."
                    },
                    {
                      question: "Can I receive both therapy and medication management at your clinic?",
                      answer: "Absolutely. In fact, we encourage it. Research shows that combining talk therapy with appropriate medication management often yields the best outcomes for conditions like depression, anxiety, and ADHD."
                    },
                    {
                      question: "Do you offer services for children and teenagers?",
                      answer: "Yes, we have specialized child and adolescent therapists on staff. We offer play therapy for younger children and cognitive behavioral approaches tailored specifically for teens navigating school, peer, and family challenges."
                    }
                  ].map((faq) => (
                    <SpotlightItem 
                        key={faq.question} 
                        faq={faq} 
                        cardBgColor="#ffffff" 
                        cardBorderColor="rgba(249, 115, 22, 0.15)" 
                        cardTextColor="#1c1917" 
                        hoverCardTextColor="#ea580c" 
                        answerTextColor="#78716c" 
                        iconColor="#f97316" 
                        hoverIconColor="#ffffff" 
                        spotlightColor="rgba(249, 115, 22, 0.08)" 
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>"""

content = content.replace(old_faq, new_faq)

with open('/workspace/src/app/services/ServicesClient.tsx', 'w') as f:
    f.write(content)
