import re

with open('/workspace/src/app/individual-therapy-darby-pa/IndividualTherapyClient.tsx', 'r') as f:
    ind_content = f.read()

# Extract TimelineStep component
timeline_match = re.search(r'// --- Timeline Step Component ---.*?const TimelineStep = React\.memo\(.*?\}\);\n\nTimelineStep\.displayName = "TimelineStep";\n', ind_content, re.DOTALL)
timeline_code = timeline_match.group(0)

# Extract processSteps array
# We will create our own optimized processSteps for the services page
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

# Extract SECTION 4 (The Process) logic
process_section_match = re.search(r'\{\/\* SECTION 4: The Process \*\/\}.*?\{\/\* SECTION 5: FAQs \*\/\}', ind_content, re.DOTALL)
process_section_code = process_section_match.group(0)
# Clean up the trailing SECTION 5 comment
process_section_code = process_section_code.replace('{/* SECTION 5: FAQs */}', '')

# We need to adapt the process section for the Services page
# In Individual, it's:
# <section className="py-16 md:py-32 bg-stone-50 relative overflow-hidden">
#   <CurveTransition fillColor="#ffffff" />
# We will change the copy to match the Services page context.

process_section_code = process_section_code.replace(
    'The 4-step path to <span className="font-instrument-serif italic text-orange-500">reclaiming your life.</span>',
    'The 4-step path to <span className="font-instrument-serif italic text-orange-500">reclaiming your life.</span>'
)

# We need to insert these into ServicesClient.tsx
with open('/workspace/src/app/services/ServicesClient.tsx', 'r') as f:
    services_content = f.read()

# Add UiloraFrostedGlass import
if 'UiloraFrostedGlass' not in services_content:
    services_content = services_content.replace(
        "const AppointmentSection = dynamic(() => import('@/components/Appointment/AppointmentSection'));",
        "const AppointmentSection = dynamic(() => import('@/components/Appointment/AppointmentSection'));\nconst UiloraFrostedGlass = dynamic(() => import('@/components/ui/uilora-frosted-glass'), { ssr: false });"
    )

# Add TimelineStep and processSteps before SpotlightItem
if 'const TimelineStep =' not in services_content:
    services_content = services_content.replace(
        "// --- Opening Hours Component ---",
        f"{timeline_code}\n{process_steps_code}\n\n// --- Opening Hours Component ---"
    )

# We need `useScroll`, `useTransform`, `useSpring`, `useReducedMotion` hooks
if 'useScroll' not in services_content:
    services_content = services_content.replace(
        "import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';",
        "import { motion, useMotionTemplate, useMotionValue, AnimatePresence, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';"
    )

# Add hooks inside ServicesClient
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
if 'const [hoveredIndex, setHoveredIndex]' not in services_content:
    services_content = services_content.replace(
        "export default function ServicesClient() {\n",
        "export default function ServicesClient() {\n" + hooks_code
    )

# Insert the Process section AFTER Section 2 (Why Choose Us) and BEFORE Section 3 (Local Context)
# Section 2 ends with:
#               </motion.div>
#             </div>
#           </section>
# 
#           {/* SECTION 3: Local Context & Service Areas */}

process_section_code = process_section_code.replace('SECTION 4: The Process', 'SECTION 2.5: The Process')

# We need to change the process section background from bg-stone-50 to bg-white?
# Why Choose Us is bg-white. So if Process is bg-stone-50, we need a CurveTransition fillColor="#ffffff"
# Wait, Why Choose Us is bg-white. So CurveTransition fillColor="#ffffff" is perfect.
# Then Section 3 is Community First (bg-stone-900 rounded-[3rem] mx-4 md:mx-6 my-12). It floats, so it doesn't need a curve into it.
# Actually, the container of Section 3 is just `mx-4 md:mx-6`. The background behind the card is whatever the main div is.
# The main div is `<div className="bg-white ...">`.
# If Process is `bg-stone-50`, it will clash with the white background behind the Section 3 card unless we transition it back to white.
# So let's make the Process section `bg-white` and REMOVE the CurveTransition from it, since Section 2 is also `bg-white`.
process_section_code = process_section_code.replace('<section className="py-16 md:py-32 bg-stone-50 relative overflow-hidden">', '<section className="py-16 md:py-32 bg-white relative overflow-hidden">')
process_section_code = process_section_code.replace('<CurveTransition fillColor="#ffffff" />', '')

# Insert the code
services_content = services_content.replace(
    "          {/* SECTION 3: Local Context & Service Areas */}",
    f"{process_section_code}\n          {{/* SECTION 3: Local Context & Service Areas */}}"
)

with open('/workspace/src/app/services/ServicesClient.tsx', 'w') as f:
    f.write(services_content)

print("Process section integrated.")
