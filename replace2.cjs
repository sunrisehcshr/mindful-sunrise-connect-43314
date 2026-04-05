const fs = require('fs');

const filePath = 'src/app/individual-therapy-darby-pa/IndividualTherapyClient.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add TimelineStep component back at the top
const timelineStepCode = `
// --- Timeline Step Component ---
const TimelineStep = ({
    step,
    i,
    totalSteps,
    hoveredIndex,
    setHoveredIndex,
    accentColor,
    progress,
    prefersReducedMotion,
}: {
    step: { title: string; desc: string };
    i: number;
    totalSteps: number;
    hoveredIndex: number | null;
    setHoveredIndex: (i: number | null) => void;
    accentColor: string;
    progress: any;
    prefersReducedMotion: boolean | null;
}) => {
    const isLeft = i % 2 === 0;
    const isHovered = hoveredIndex === i;
    const number = String(i + 1).padStart(2, "0");

    const stepThreshold = i / Math.max(1, totalSteps - 1);
    const isCardGlowing = useTransform(progress, (p: number) => p >= stepThreshold);
    const [shouldGlow, setShouldGlow] = useState(false);

    useEffect(() => {
        const unsubscribe = isCardGlowing.on("change", (latest) => {
            setShouldGlow(latest);
        });
        return () => unsubscribe();
    }, [isCardGlowing]);

    return (
        <div className="relative flex items-start md:items-center">
            <motion.div
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileTap={{ scale: 0.96 }}
                className={\`
                    ml-10 md:ml-0 w-full md:w-[calc(50%-2.5rem)]
                    \${isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"}
                    cursor-pointer
                \`}
            >
                <div
                    className="relative rounded-[2rem] p-8 transition-all duration-500 cursor-default bg-white"
                    style={{
                        border: \`1px solid \${shouldGlow ? \`\${accentColor}80\` : (isHovered ? \`\${accentColor}40\` : "rgba(0,0,0,0.05)")}\`,
                        boxShadow: shouldGlow
                            ? \`0 10px 40px -10px \${accentColor}40\`
                            : (isHovered ? \`0 10px 30px -10px \${accentColor}20\` : "0 4px 20px -10px rgba(0,0,0,0.05)"),
                        transform: (isHovered || (shouldGlow && !isHovered)) && !prefersReducedMotion
                            ? (isLeft ? "translateX(-5px)" : "translateX(5px)")
                            : "none",
                    }}
                >
                    <span
                        className="block text-sm font-bold mb-3 font-barlow tracking-widest uppercase transition-colors duration-500 tabular-nums"
                        style={{ color: shouldGlow ? accentColor : "rgba(0,0,0,0.4)" }}
                    >
                        Step {number}
                    </span>
                    <h3 className="text-2xl font-normal text-stone-900 mb-3 tracking-tight">
                        {step.title}
                    </h3>
                    <p className="text-stone-500 text-base leading-relaxed font-barlow">
                        {step.desc}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
`;

content = content.replace('// --- Scramble Text Effect (Brand Style) ---', timelineStepCode + '\n// --- Scramble Text Effect (Brand Style) ---');

// 2. Add hooks to IndividualTherapyClient
const hooksCode = `export default function IndividualTherapyClient() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const accentColor = "#f97316";

  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
  });

  const lineHeight = useTransform(
      prefersReducedMotion ? scrollYProgress : smoothProgress, 
      [0, 1], 
      ["0%", "100%"]
  );`;

content = content.replace(/export default function IndividualTherapyClient\(\) \{\s*const \[activeFaq, setActiveFaq\] = useState<number \| null>\(0\);/, hooksCode);

// 3. Replace the entire content of Sections 1 to 5 to apply Typography, Colors, and new layouts
const mainStart = '{/* SECTION 1: Understanding Individual Therapy (Bento Grid) */}';
const mainEnd = '{/* Medical Reviewer / E-E-A-T Footer Section (Visually Hidden for SEO) */}';

const newMainContent = `{/* SECTION 1: Understanding Individual Therapy (Bento Grid) */}
          <section className="py-16 md:py-24 relative overflow-hidden bg-white selection:bg-stone-100 selection:text-stone-900 font-barlow">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header Row */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <div className="flex flex-col items-center gap-4">
                        <SectionTag>Understanding Your Journey</SectionTag>
                        <h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight">
                            What is <span className="font-instrument-serif italic text-orange-500">Individual Therapy?</span>
                        </h2>
                    </div>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
                    }}
                    className="relative z-10 mx-auto max-w-7xl flex flex-col gap-4 bg-white p-4 md:p-8 rounded-[3rem] border border-stone-100 shadow-sm"
                >
                    {/* Top Row */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-1 gap-4 md:grid-cols-4 relative z-10">
                        <Card containerClassName="md:col-span-3 rounded-3xl bg-stone-50/50" className="flex flex-col justify-center p-8 md:p-12">
                            <p className="text-stone-500 font-barlow text-lg md:text-xl leading-relaxed max-w-3xl">
                                Individual therapy is a collaborative process between you and a licensed mental health professional. At Sunrise Human Care in Darby, PA, we provide a safe, confidential space to explore your thoughts, develop healthy coping mechanisms, and empower you to lead a fulfilling life.
                            </p>
                        </Card>
                        <Card containerClassName="md:col-span-1 rounded-3xl bg-orange-50/50 border-orange-100/50" className="flex flex-col items-center justify-center text-center p-8">
                            <Shield className="w-10 h-10 text-orange-500 mb-4" />
                            <h3 className="text-xl font-bold text-stone-900 mb-2">Safe Space</h3>
                            <p className="text-stone-500 text-sm font-medium">100% confidential and non-judgmental.</p>
                        </Card>
                    </motion.div>

                    {/* Features Row - With varied colors */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-1 gap-4 md:grid-cols-3 relative z-10">
                        <Card containerClassName="rounded-3xl bg-emerald-50/40 border-emerald-100/50" className="p-8">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md shadow-emerald-200/20 border border-emerald-100 mb-6 shrink-0 transition-transform group-hover:scale-110 duration-300">
                                <Users className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-emerald-700 transition-colors">Licensed Experts</h3>
                            <p className="text-sm text-stone-600 leading-relaxed font-medium">Work with highly trained, compassionate therapists in Delaware County who specialize in various therapeutic modalities.</p>
                        </Card>
                        <Card containerClassName="rounded-3xl bg-blue-50/40 border-blue-100/50" className="p-8">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md shadow-blue-200/20 border border-blue-100 mb-6 shrink-0 transition-transform group-hover:scale-110 duration-300">
                                <Lightbulb className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-blue-700 transition-colors">Evidence-Based</h3>
                            <p className="text-sm text-stone-600 leading-relaxed font-medium">We utilize scientifically proven methods like CBT and DBT to ensure effective, measurable progress in your mental health journey.</p>
                        </Card>
                        <Card containerClassName="rounded-3xl bg-rose-50/40 border-rose-100/50" className="p-8">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md shadow-rose-200/20 border border-rose-100 mb-6 shrink-0 transition-transform group-hover:scale-110 duration-300">
                                <Heart className="w-6 h-6 text-rose-600" />
                            </div>
                            <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-rose-700 transition-colors">Personalized Care</h3>
                            <p className="text-sm text-stone-600 leading-relaxed font-medium">Your treatment plan is tailored specifically to your unique background, challenges, and personal goals for therapy.</p>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
          </section>

          {/* SECTION 2: Conditions Treated (Distinct Grid Layout) */}
          <section className="py-16 md:py-24 bg-stone-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-4xl mx-auto text-center mb-16"
              >
                <div className="flex flex-col items-center gap-4">
                  <SectionTag>Comprehensive Care</SectionTag>
                  <h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight">
                    What we treat with <br />
                    <span className="font-instrument-serif italic text-orange-500">Individual Therapy.</span>
                  </h2>
                  <p className="text-stone-500 font-barlow text-lg leading-relaxed max-w-2xl mx-auto mt-2">
                    Our licensed professionals in Darby, PA are equipped to help you manage and overcome a wide spectrum of psychological and emotional challenges.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {[
                  { title: "Anxiety Disorders", icon: Brain, desc: "Identifying triggers and developing coping strategies for generalized anxiety, social anxiety, and panic attacks." },
                  { title: "Depression & Mood", icon: Sparkles, desc: "Proven methods to address persistent sadness, lack of motivation, and help you rediscover joy and purpose." },
                  { title: "Trauma & PTSD", icon: Shield, desc: "Trauma-informed care to help process and heal from past experiences, reducing the impact of distressing memories." },
                  { title: "Stress & Burnout", icon: Lightbulb, desc: "Equipping you with stress management techniques to restore your energy and work-life balance." },
                  { title: "Life Transitions", icon: ArrowRight, desc: "Guidance during uncertain times like career shifts, relocation, or major relationship changes." },
                  { title: "Self-Esteem & Growth", icon: Star, desc: "Assisting clients in exploring their identity, building self-worth, and achieving personal growth." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative overflow-hidden rounded-[2rem] bg-white border border-stone-200 p-8 hover:border-orange-500/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-orange-500/10 transition-colors duration-500" />
                    <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center mb-6 border border-stone-100 group-hover:bg-orange-50 group-hover:border-orange-100 transition-colors duration-500">
                        <item.icon className="w-6 h-6 text-stone-400 group-hover:text-orange-500 transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-3 tracking-tight group-hover:text-orange-600 transition-colors">{item.title}</h3>
                    <p className="text-stone-500 text-base leading-relaxed font-medium">
                        {item.desc}
                    </p>
                  </motion.div>
                ))}
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
          <section className="py-16 md:py-32 bg-stone-50/50 relative overflow-hidden">
            <CurveTransition fillColor="#ffffff" />
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto text-center mb-16 md:mb-24"
              >
                <div className="flex flex-col items-center gap-4">
                  <SectionTag>Your Path Forward</SectionTag>
                  <h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight">
                    The 4-step path to <span className="font-instrument-serif italic text-orange-500">reclaiming your life.</span>
                  </h2>
                </div>
              </motion.div>

              {/* Timeline Container */}
              <div className="relative max-w-5xl mx-auto" ref={containerRef}>
                  {/* Background Vertical Line */}
                  <div
                      className="absolute top-0 bottom-0 w-px left-4 md:left-1/2 md:-translate-x-px"
                      style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
                  />
                  
                  {/* Animated Fill Line */}
                  <motion.div
                      className="absolute top-0 w-1 left-4 md:left-1/2 md:-translate-x-1/2 rounded-full origin-top"
                      style={{ 
                          backgroundColor: accentColor,
                          height: lineHeight,
                          boxShadow: \`0 0 10px \${accentColor}40\`
                      }}
                  />

                  <div className="flex flex-col gap-12 md:gap-16">
                      {processSteps.map((step, i) => (
                          <TimelineStep 
                              key={i}
                              step={step}
                              i={i}
                              totalSteps={processSteps.length}
                              hoveredIndex={hoveredIndex}
                              setHoveredIndex={setHoveredIndex}
                              accentColor={accentColor}
                              progress={prefersReducedMotion ? scrollYProgress : smoothProgress}
                              prefersReducedMotion={prefersReducedMotion}
                          />
                      ))}
                  </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: FAQs */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 flex flex-col items-center gap-4">
                  <SectionTag>Common Questions</SectionTag>
                  <h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight">
                    Individual Therapy <span className="font-instrument-serif italic text-orange-500">FAQs.</span>
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
`;

let startIndex = content.indexOf(mainStart);
let endIndex = content.indexOf(mainEnd);
if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + newMainContent + '\n          ' + content.substring(endIndex);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully replaced the main content block.");
} else {
  console.error("Could not find start or end block.");
  process.exit(1);
}
