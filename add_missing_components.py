import re

with open('/workspace/src/app/services/ServicesClient.tsx', 'r') as f:
    content = f.read()

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

with open('/workspace/src/app/services/ServicesClient.tsx', 'w') as f:
    f.write(content)
print("Missing components added.")
