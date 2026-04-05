const fs = require('fs');

const filePath = 'src/app/individual-therapy-darby-pa/IndividualTherapyClient.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const startMarker = '<div className="bg-stone-50 relative z-10 -mt-10 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.15)]">';
const endMarker = '</main>';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker) + endMarker.length;

if (startIndex === -1 || endIndex === -1) {
  console.error("Markers not found");
  process.exit(1);
}

const replacement = `<div className="bg-white relative z-10 -mt-10 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.15)]">
          
          {/* SECTION 1: Understanding Individual Therapy (Bento Grid) */}
          <section className="py-16 md:py-24 relative overflow-hidden bg-white selection:bg-stone-100 selection:text-stone-900 font-barlow">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                    }}
                    className="relative z-10 mx-auto max-w-7xl flex flex-col gap-4 bg-white p-6 md:p-12 md:pb-20 rounded-[2.5rem] border border-stone-100 shadow-sm"
                >
                    {/* Header Row */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-1 gap-4 md:grid-cols-4 relative z-10">
                        <Card containerClassName="md:col-span-3 rounded-3xl bg-stone-50/50" className="flex flex-col justify-center">
                            <SectionTag className="w-fit mb-6">Understanding Your Journey</SectionTag>
                            <h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight mb-4">
                                What is Individual Therapy?
                            </h2>
                            <p className="text-stone-500 font-barlow text-lg leading-relaxed max-w-3xl">
                                Individual therapy is a collaborative process between you and a licensed mental health professional. At Sunrise Human Care in Darby, PA, we provide a safe, confidential space to explore your thoughts, develop healthy coping mechanisms, and empower you to lead a fulfilling life.
                            </p>
                        </Card>
                        <Card containerClassName="md:col-span-1 rounded-3xl bg-orange-500/5 border-orange-500/20" className="flex flex-col items-center justify-center text-center py-12">
                            <Shield className="w-12 h-12 text-orange-500 mb-4" />
                            <h3 className="text-xl font-bold text-stone-900 mb-2">Safe Space</h3>
                            <p className="text-stone-600 text-sm font-medium">100% confidential and non-judgmental.</p>
                        </Card>
                    </motion.div>

                    {/* Features Row */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-1 gap-4 md:grid-cols-3 relative z-10">
                        <Card containerClassName="rounded-3xl" className="p-8">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md shadow-stone-200/50 border border-stone-100 mb-6 shrink-0 transition-transform group-hover:scale-110 duration-300">
                                <Users className="w-6 h-6 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-orange-600 transition-colors">Licensed Experts</h3>
                            <p className="text-sm text-stone-500 leading-relaxed font-medium">Work with highly trained, compassionate therapists in Delaware County who specialize in various therapeutic modalities.</p>
                        </Card>
                        <Card containerClassName="rounded-3xl" className="p-8">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md shadow-stone-200/50 border border-stone-100 mb-6 shrink-0 transition-transform group-hover:scale-110 duration-300">
                                <Lightbulb className="w-6 h-6 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-orange-600 transition-colors">Evidence-Based</h3>
                            <p className="text-sm text-stone-500 leading-relaxed font-medium">We utilize scientifically proven methods like CBT and DBT to ensure effective, measurable progress in your mental health journey.</p>
                        </Card>
                        <Card containerClassName="rounded-3xl" className="p-8">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md shadow-stone-200/50 border border-stone-100 mb-6 shrink-0 transition-transform group-hover:scale-110 duration-300">
                                <Heart className="w-6 h-6 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-orange-600 transition-colors">Personalized Care</h3>
                            <p className="text-sm text-stone-500 leading-relaxed font-medium">Your treatment plan is tailored specifically to your unique background, challenges, and personal goals for therapy.</p>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
          </section>

          {/* SECTION 2: Conditions Treated (Bento Grid) */}
          <section className="py-16 md:py-24 bg-stone-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <SectionTag>Comprehensive Care</SectionTag>
                <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight mt-4 mb-6">
                  What We Treat
                </h2>
                <p className="text-stone-500 font-barlow text-lg leading-relaxed">
                  Our licensed professionals in Darby, PA are equipped to help you manage and overcome a wide spectrum of psychological and emotional challenges.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-7xl mx-auto">
                {/* Large Featured Card */}
                <Card containerClassName="md:col-span-8 rounded-[2.5rem]" className="flex flex-col justify-center p-8 md:p-12">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md shadow-stone-200/50 border border-stone-100 mb-6 shrink-0">
                        <Brain className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight group-hover:text-orange-600 transition-colors">Anxiety & Depression</h3>
                    <p className="text-stone-500 text-base md:text-lg leading-relaxed font-medium max-w-2xl">
                        We focus on identifying triggers and developing coping strategies for generalized anxiety, social anxiety, and panic attacks. For depression, we utilize proven methods to address persistent sadness and help you rediscover joy and purpose.
                    </p>
                </Card>

                <Card containerClassName="md:col-span-4 rounded-[2.5rem]" className="p-8 flex flex-col justify-center">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md shadow-stone-200/50 border border-stone-100 mb-6 shrink-0">
                        <Shield className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-3 tracking-tight group-hover:text-orange-600 transition-colors">Trauma & PTSD</h3>
                    <p className="text-stone-500 text-sm leading-relaxed font-medium">
                        Trauma-informed care to help process and heal from past experiences, reducing the impact of distressing memories.
                    </p>
                </Card>

                <Card containerClassName="md:col-span-4 rounded-[2.5rem]" className="p-8">
                    <h3 className="text-xl font-bold text-stone-900 mb-3 tracking-tight group-hover:text-orange-600 transition-colors">Stress & Burnout</h3>
                    <p className="text-stone-500 text-sm leading-relaxed font-medium">
                        Equipping you with stress management techniques to restore your energy and work-life balance.
                    </p>
                </Card>
                <Card containerClassName="md:col-span-4 rounded-[2.5rem]" className="p-8">
                    <h3 className="text-xl font-bold text-stone-900 mb-3 tracking-tight group-hover:text-orange-600 transition-colors">Life Transitions</h3>
                    <p className="text-stone-500 text-sm leading-relaxed font-medium">
                        Guidance during uncertain times like career shifts, relocation, or major relationship changes.
                    </p>
                </Card>
                <Card containerClassName="md:col-span-4 rounded-[2.5rem]" className="p-8">
                    <h3 className="text-xl font-bold text-stone-900 mb-3 tracking-tight group-hover:text-orange-600 transition-colors">Self-Esteem & Growth</h3>
                    <p className="text-stone-500 text-sm leading-relaxed font-medium">
                        Assisting clients in exploring their identity, building self-worth, and achieving personal growth.
                    </p>
                </Card>
              </div>
            </div>
          </section>

          {/* SECTION 3: Clinical Approach */}
          <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
                className="max-w-7xl mx-auto bg-stone-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-stone-100 shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <SectionTag className="bg-white/10 text-white border-white/20 mb-6 w-fit">Clinical Excellence</SectionTag>
                        <h2 className="text-3xl md:text-5xl text-balance font-normal text-white tracking-tighter leading-tight mb-6">
                            Evidence-Based <br />
                            <span className="font-instrument-serif italic text-orange-400">Therapeutic Approaches</span>
                        </h2>
                        <p className="text-stone-400 text-lg leading-relaxed mb-8">
                            We adhere strictly to evidence-based practices (EBPs). Our licensed therapists integrate various modalities depending on your specific diagnosis and personal preferences.
                        </p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { title: "Cognitive Behavioral Therapy (CBT)", desc: "Identifies and changes negative thought patterns. A gold standard for anxiety and depression." },
                            { title: "Dialectical Behavior Therapy (DBT)", desc: "Focuses on living in the moment, regulating emotions, and improving relationships." },
                            { title: "Mindfulness-Based Therapy", desc: "Combines cognitive techniques with mindfulness to manage thoughts and distress." },
                            { title: "Solution-Focused Brief Therapy", desc: "A short-term, future-focused approach that constructs solutions rather than dwelling on problems." }
                        ].map((method, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors duration-300">
                                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                                    <CheckCircle2 className="w-5 h-5 text-orange-400" />
                                </div>
                                <h4 className="font-barlow font-bold text-lg text-white mb-2">{method.title}</h4>
                                <p className="text-stone-400 text-sm leading-relaxed">{method.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* SECTION 4: The Process */}
          <section className="py-16 md:py-24 bg-stone-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <SectionTag>Your Path Forward</SectionTag>
                <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight mt-4 mb-6">
                  The 4-Step Process
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
                {[
                  { title: "Initial Consultation", desc: "Reach out to schedule your first appointment and verify your insurance." },
                  { title: "Comprehensive Assessment", desc: "A thorough evaluation of your mental health history and personal goals." },
                  { title: "Personalized Plan", desc: "Develop a customized treatment plan outlining therapeutic methods." },
                  { title: "Growth & Healing", desc: "Engage in regular therapy sessions to achieve lasting positive change." }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="h-full bg-white p-8 flex flex-col group/step relative">
                        <span className="text-orange-500 font-bold text-5xl font-instrument-serif opacity-30 mb-4 block transition-opacity duration-500 group-hover/step:opacity-100">0{i+1}</span>
                        <h3 className="font-barlow font-bold text-xl text-stone-900 mb-3 group-hover/step:text-orange-600 transition-colors">{step.title}</h3>
                        <p className="font-barlow text-stone-500 text-sm leading-relaxed">{step.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 5: FAQs */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <SectionTag>Common Questions</SectionTag>
                  <h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight mt-4">
                    Individual Therapy FAQs
                  </h2>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "group relative overflow-hidden rounded-[2rem] border backdrop-blur-xl transition-all duration-500",
                        activeFaq === index 
                          ? "border-orange-500/30 bg-stone-50 shadow-md" 
                          : "border-stone-200/60 bg-white hover:border-orange-200/40 shadow-sm"
                      )}
                    >
                      <button 
                        type="button"
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                        className="relative flex w-full items-start sm:items-center gap-4 px-6 py-6 md:px-8 text-left transition-colors duration-300 focus:outline-none"
                      >
                        <span 
                          className={cn(
                            "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-105 mt-1 sm:mt-0",
                            activeFaq === index ? "bg-orange-500 border-orange-400 text-white" : "bg-orange-50 border-stone-100 text-orange-500"
                          )}
                        >
                          <ChevronDown className={cn("relative h-5 w-5 transition-transform duration-500", activeFaq === index ? "rotate-180" : "")} />
                        </span>

                        <div className="flex flex-1 flex-col gap-2">
                          <h3 className={cn(
                            "text-lg font-barlow font-medium leading-tight tracking-tight transition-colors duration-300",
                            activeFaq === index ? "text-orange-600" : "text-stone-900 group-hover:text-orange-500"
                          )}>
                            {faq.question}
                          </h3>

                          <AnimatePresence initial={false}>
                            {activeFaq === index && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }} 
                                animate={{ height: "auto", opacity: 1 }} 
                                exit={{ height: 0, opacity: 0 }} 
                                transition={{ duration: 0.3 }}
                              >
                                <div className="pt-2">
                                  <p className="text-stone-500 font-barlow text-base leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Medical Reviewer / E-E-A-T Footer Section (Visually Hidden for SEO) */}
          <section className="sr-only">
            <div itemScope itemType="https://schema.org/WebPage">
              <div itemProp="reviewedBy" itemScope itemType="https://schema.org/Person">
                <meta itemProp="name" content="Holli O'Donnell" />
                <meta itemProp="jobTitle" content="Licensed Mental Health Professional" />
                <link itemProp="image" href="/images/holly.jpg" />
              </div>
              <meta itemProp="lastReviewed" content={new Date().toISOString().split('T')[0]} />
              <p>
                This content was clinically reviewed by Holli O'Donnell, Licensed Mental Health Professional, on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} to ensure accuracy and compliance with current medical standards.
              </p>
            </div>
          </section>

          {/* SECTION 6: Appointment */}
          <AppointmentSection />
          
        </div>
      </main>`;

const newContent = content.substring(0, startIndex) + replacement + content.substring(endIndex);
fs.writeFileSync(filePath, newContent, 'utf8');
console.log("Successfully replaced the content.");
