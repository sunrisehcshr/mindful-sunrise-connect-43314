import re

with open('/workspace/src/app/services/ServicesClient.tsx', 'r') as f:
    content = f.read()

# 1. Imports
if 'useEffect' not in content:
    content = content.replace("import React, { useState, useRef }", "import React, { useState, useRef, useEffect }")

if 'UiloraFrostedGlass' not in content:
    content = content.replace(
        "import ClinicStatus from '@/components/ui/ClinicStatus';",
        "import ClinicStatus from '@/components/ui/ClinicStatus';\nimport dynamic from 'next/dynamic';\nconst UiloraFrostedGlass = dynamic(() => import('@/components/ui/uilora-frosted-glass'), { ssr: false });"
    )

if 'useScroll' not in content:
    content = content.replace(
        "import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';",
        "import { motion, useMotionTemplate, useMotionValue, AnimatePresence, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';"
    )

# 2. Add TimelineStep and Hooks
with open('/workspace/src/app/individual-therapy-darby-pa/IndividualTherapyClient.tsx', 'r') as f:
    ind_content = f.read()

timeline_match = re.search(r'// --- Timeline Step Component ---.*?const TimelineStep = React\.memo\(.*?\}\);\n\nTimelineStep\.displayName = "TimelineStep";\n', ind_content, re.DOTALL)
timeline_code = timeline_match.group(0)

process_steps_code = """
const processSteps = [
  {
    title: "Let's Talk (Stress-Free Onboarding)",
    desc: "We handle the paperwork and verify your Medicaid coverage before you even start. You'll be matched with the right specialist on day one."
  },
  {
    title: "Comprehensive Evaluation",
    desc: "Whether you need therapy, psychiatry, or both, our clinicians take the time to understand your complete medical and emotional picture."
  },
  {
    title: "Your Custom Care Plan",
    desc: "We build a tailored roadmap combining the right therapeutic modalities and/or medication management for your specific needs."
  },
  {
    title: "Finding Your Balance",
    desc: "Engage in consistent, high-quality care to break negative cycles, manage your symptoms, and reclaim control of your daily life."
  }
];
"""

hooks_code = """
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start center", "end center"] as any,
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
  );

  const accentColor = "#f97316"; // orange-500
"""

if 'const TimelineStep =' not in content:
    content = content.replace(
        "// --- Opening Hours Component ---",
        f"{timeline_code}\n{process_steps_code}\n\n// --- Opening Hours Component ---"
    )

if 'const [hoveredIndex, setHoveredIndex]' not in content:
    content = content.replace(
        "export default function ServicesClient() {\n",
        "export default function ServicesClient() {\n" + hooks_code
    )


# 3. New Why Choose Us Section
new_grid = """{/* ROW 1: Main Value Prop + Detail Cards */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
                    }
                  }}
                  className="grid grid-cols-1 gap-4 md:grid-cols-3 relative z-10"
                >
                  <Card containerClassName="md:col-span-2 rounded-3xl bg-white group" className="flex flex-col justify-between py-10 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-orange-500/10 transition-colors duration-700" />
                    <div className="flex justify-between items-start mb-12 relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center border border-orange-100 group-hover:scale-110 transition-transform duration-500">
                        <HeartPulse className="h-6 w-6 text-orange-500" />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-stone-50 border border-stone-100 text-[10px] uppercase tracking-widest text-stone-400 font-bold group-hover:border-orange-200 transition-colors duration-500">
                        All-In-One Care
                      </div>
                    </div>
                    <div className="space-y-6 relative z-10">
                      <h3 className="text-4xl md:text-5xl font-normal leading-[0.95] tracking-tighter text-stone-900 group-hover:text-stone-950 transition-colors duration-300">
                        Everything your family needs <br />
                        <span className="font-instrument-serif italic text-orange-500 group-hover:text-orange-600 transition-colors duration-300">under one roof.</span>
                      </h3>
                      <p className="max-w-md text-stone-500 text-sm leading-relaxed font-medium group-hover:text-stone-600 transition-colors duration-300">
                        Stop bouncing between different clinics for therapy and psychiatry. From children struggling with behavioral issues to adults navigating depression or relationship conflict, our Darby clinic provides a unified, expert team for your entire family.
                      </p>
                    </div>
                  </Card>

                  <div className="flex flex-col gap-4">
                    <Card containerClassName="rounded-3xl bg-stone-900 text-white border-none group relative overflow-hidden" className="flex flex-col justify-between h-full z-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[-1]" />
                      <ShieldCheck className="h-8 w-8 text-orange-400 mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:text-orange-300" />
                      <div>
                        <h4 className="font-bold text-lg mb-1 group-hover:text-orange-100 transition-colors duration-300">Zero Financial Surprises</h4>
                        <p className="text-stone-400 text-xs leading-relaxed group-hover:text-stone-300 transition-colors duration-300">We proudly and exclusively accept Medicaid. Get premium psychiatric care without the out-of-pocket costs.</p>
                      </div>
                    </Card>
                    <Card containerClassName="rounded-3xl bg-orange-500 text-stone-900 border-none group relative overflow-hidden" className="flex flex-col justify-between h-full z-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[-1]" />
                      <Users className="h-8 w-8 text-white mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-1 group-hover:text-white transition-colors duration-300">No More Starting Over</h4>
                        <p className="text-stone-900/70 text-xs leading-relaxed font-medium group-hover:text-stone-900/90 transition-colors duration-300">Your therapist and prescriber work together. Stop repeating your story to five different doctors.</p>
                      </div>
                    </Card>
                  </div>
                </motion.div>

                {/* ROW 2: Additional Value Props */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
                    }
                  }}
                  className="grid grid-cols-1 gap-4 md:grid-cols-3 relative z-10"
                >
                  <Card containerClassName="md:col-span-1 rounded-3xl bg-blue-50/80 border-blue-200/50 group relative overflow-hidden" className="flex flex-col justify-center items-start py-8 px-8 z-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-[30px] pointer-events-none group-hover:bg-blue-400/20 transition-colors duration-500" />
                    <Calendar className="h-8 w-8 text-blue-600 mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" />
                    <h4 className="font-bold text-lg text-blue-950 mb-2">No Waitlists</h4>
                    <p className="text-blue-900/70 text-xs leading-relaxed font-medium">Stop waiting months for a psychiatric evaluation. We have immediate openings for new patients in Darby, PA.</p>
                  </Card>

                  <Card containerClassName="md:col-span-2 rounded-3xl bg-white group relative overflow-hidden" className="flex flex-col justify-center items-start py-8 px-8 z-10 border-stone-200/60">
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-50/0 to-stone-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[-1]" />
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 transition-transform duration-500 group-hover:scale-110">
                        <Stethoscope className="h-5 w-5 text-emerald-600" />
                      </div>
                      <h4 className="font-bold text-xl text-stone-900">Evidence-Based Practices</h4>
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed font-medium max-w-lg">
                      We don't do guesswork. We exclusively utilize scientifically proven methods—like Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and Trauma-Informed Care—to ensure you see measurable progress in your daily life.
                    </p>
                  </Card>
                </motion.div>"""

# Find the exact string to replace using regex to avoid trailing tag issues
pattern = re.compile(r'\{\/\* ROW 1: Status \+ Hours \*\/.*?\n\s+<\/motion\.div>\s+<\/motion\.div>', re.DOTALL)

def replacement(m):
    # m.group(0) ends with `              </motion.div>\n              </motion.div>`
    # We want to replace everything except those last two tags
    return new_grid + '\n              </motion.div>\n              </motion.div>'

content = pattern.sub(replacement, content)

# 4. Insert Process Section
process_section_match = re.search(r'\{\/\* SECTION 4: The Process \*\/\}.*?\{\/\* SECTION 5: FAQs \*\/\}', ind_content, re.DOTALL)
process_section_code = process_section_match.group(0)
process_section_code = process_section_code.replace('{/* SECTION 5: FAQs */}', '')
process_section_code = process_section_code.replace('<section className="py-16 md:py-32 bg-stone-50 relative overflow-hidden">', '<section className="py-16 md:py-32 bg-white relative overflow-hidden">')
process_section_code = process_section_code.replace('<CurveTransition fillColor="#ffffff" />', '')
process_section_code = process_section_code.replace('SECTION 4: The Process', 'SECTION 2.5: The Process')

content = content.replace(
    "          {/* SECTION 3: Local Context & Service Areas */}",
    f"{process_section_code}\n          {{/* SECTION 3: Local Context & Service Areas */}}"
)

with open('/workspace/src/app/services/ServicesClient.tsx', 'w') as f:
    f.write(content)

print("Safe replace done.")
