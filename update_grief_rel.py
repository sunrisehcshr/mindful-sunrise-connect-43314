import re
import os

with open('/workspace/src/app/individual-therapy-darby-pa/IndividualTherapyClient.tsx', 'r') as f:
    base_content = f.read()

# ---------------------------------------------------------
# GRIEF THERAPY
# ---------------------------------------------------------
grief_content = base_content

# Image
grief_content = grief_content.replace(
    'https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918057/cropped-shot-of-a-man-having-a-therapeutic-session-2026-03-25-02-43-30-utc_bzrrq0.jpg',
    'https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918388/sad-woman-crying-at-psychotherapy-session-comfort-2026-03-25-06-38-04-utc_hfj8y7.jpg'
)
grief_content = grief_content.replace('alt="Individual Therapy in Darby PA"', 'alt="Grief Therapy in Darby PA"')

# Hero
grief_content = grief_content.replace('Personalized Counseling in PA', 'Compassionate Bereavement Support')
grief_content = grief_content.replace('Take Back Your Life with', 'Find a Path Through the Pain with')
grief_content = grief_content.replace('Individual Therapy in Darby, PA', 'Grief Therapy in Darby, PA')
grief_content = grief_content.replace('One-on-one counseling in Darby, PA. Learn practical tools to reduce anxiety, overcome depression, and regain control of your daily life in a 100% confidential environment.', 'You don\'t have to carry this heavy burden alone. Get compassionate, expert support to navigate loss, honor your loved one, and slowly rebuild your life in a safe space.')

# Section 1
grief_content = grief_content.replace('Why Choose Sunrise', 'Why Choose Sunrise')
grief_content = grief_content.replace('Therapy tailored to your exact needs, <br className="hidden md:block" /><span className="font-instrument-serif italic text-orange-500">not a textbook.</span>', 'Therapy designed to hold your pain, <br className="hidden md:block" /><span className="font-instrument-serif italic text-orange-500">not rush your healing.</span>')
grief_content = grief_content.replace("Therapy isn't just about talking—it's about taking your life back. When you partner with a licensed expert at Sunrise Human Care in Darby, PA, you get more than a confidential space. You gain a dedicated guide who will help you untangle your thoughts, build practical coping skills, and empower you to finally step back into a life that feels entirely your own.", "Grief doesn't follow a timeline, and neither do we. When you partner with our licensed grief specialists in Darby, PA, you gain a safe harbor to express your deepest sorrow without judgment, process complex emotions, and find a way to breathe again.")

# Cards
grief_content = grief_content.replace('Guidance You Can Trust', 'Guidance You Can Trust')
grief_content = grief_content.replace('Work with fully licensed, state-certified therapists in Delaware County who specialize in approaches that actually work for your family.', 'Work with fully licensed, state-certified grief specialists who understand the deep complexities of mourning and profound loss.')
grief_content = grief_content.replace('Strategies That Actually Work', 'A Safe Harbor')
grief_content = grief_content.replace('We use proven methods like Family Systems Therapy so you see measurable, real-world progress in your home.', 'We provide a secure, compassionate environment where you can process your loss at your own pace without feeling rushed.')
grief_content = grief_content.replace('Tailored to Your Unique Story', 'Tailored to Your Journey')
grief_content = grief_content.replace("Your family's roadmap is tailored specifically to your unique dynamic, communication styles, and shared goals.", 'There is no right way to grieve. Your counseling plan is customized to honor your unique relationship with who or what you lost.')

# Conditions
grief_content = grief_content.replace('Targeted Relief', 'Compassionate Support')
grief_content = grief_content.replace('Find relief from the weight of <br />', 'Find a way to carry the weight of <br />')
grief_content = grief_content.replace('<span className="font-instrument-serif italic text-orange-500">everyday struggles.</span>', '<span className="font-instrument-serif italic text-orange-500">profound loss.</span>')
grief_content = grief_content.replace("You don't have to carry this burden alone. Our specialists in Darby, PA use proven, evidence-based methods to help you break free from emotional pain and get back to living fully.", "You don't have to navigate the darkness by yourself. Our grief specialists in Darby, PA provide a supportive environment to help you process every stage of bereavement.")

# Conditions Grid
old_grid = """                {[
                  { title: "Anxiety Disorders", icon: Brain, desc: "Stop letting worry dictate your life. We'll help you identify hidden triggers and build practical tools to quiet your mind." },
                  { title: "Depression & Mood", icon: Sparkles, desc: "Break free from the heavy fog of sadness. Restore your energy, motivation, and sense of purpose with proven methods." },
                  { title: "Trauma & PTSD", icon: Shield, desc: "You don't have to live in the past. Safely process painful memories so you can heal and finally move forward." },
                  { title: "Stress & Burnout", icon: Lightbulb, desc: "Reclaim your energy. Learn actionable techniques to manage overwhelming stress and achieve the balance you deserve." },
                  { title: "Life Transitions", icon: ArrowRight, desc: "Navigate change with absolute confidence. Find clarity and support during career shifts, moves, or relationship changes." },
                  { title: "Self-Esteem & Growth", icon: Star, desc: "Discover your true worth. Silence your inner critic, build unwavering confidence, and unlock your full potential." }
                ].map((item, i) => ("""
new_grid_grief = """                {[
                  { title: "Loss of a Loved One", icon: Heart, desc: "Whether you lost a spouse, parent, child, or friend, we provide a safe space to honor their memory and navigate the painful void." },
                  { title: "Complicated Grief", icon: Shield, desc: "If you feel entirely stuck in your pain months or years later, we offer specialized care to help you slowly move forward." },
                  { title: "Anticipatory Grief", icon: Brain, desc: "Caring for a terminally ill loved one is exhausting. Find emotional support to manage the profound sorrow of impending loss." },
                  { title: "Traumatic Loss", icon: Sparkles, desc: "Sudden or violent deaths leave deep psychological scars. We provide trauma-informed care to safely process the unthinkable." },
                  { title: "Major Life Transitions", icon: ArrowRight, desc: "Grief isn't just for death. We support you through painful divorces, career losses, empty nest syndrome, or loss of independence." },
                  { title: "Pet Loss", icon: Star, desc: "The loss of a furry family member is devastating. Receive genuine, validating support to mourn the unconditional love of your pet." }
                ].map((item, i) => ("""
grief_content = grief_content.replace(old_grid, new_grid_grief)

# How We Work
grief_content = grief_content.replace("Discover Proven Therapies <br className=\"hidden md:block\" />", "Discover Compassionate Care <br className=\"hidden md:block\" />")
grief_content = grief_content.replace("That Deliver Real Results", "That Honors Your Journey")
grief_content = grief_content.replace("Stop guessing with your mental health. We exclusively use scientifically proven, evidence-based practices (EBPs) tailored to your unique mind—ensuring you experience measurable progress, faster.", "Stop feeling pressured to 'move on' or 'get over it.' Your healing process is unique, which is why we use evidence-based grief protocols to help you integrate the loss and find meaning again.")

old_methods = """                        {[
                            { title: "Cognitive Behavioral Therapy (CBT)", desc: "Rewire your mind for success. Stop negative thought loops in their tracks and conquer anxiety and depression using the clinical gold standard." },
                            { title: "Dialectical Behavior Therapy (DBT)", desc: "Regain emotional control. Learn powerful, practical skills to live in the present moment, manage intense feelings, and build healthier relationships." },
                            { title: "Mindfulness-Based Therapy", desc: "Find peace in the chaos. Master scientifically proven mindfulness techniques that quiet mental noise and dramatically reduce daily distress." },
                            { title: "Solution-Focused Brief Therapy", desc: "Get unstuck, fast. Stop dwelling on past problems and start building concrete, actionable solutions for your future in fewer sessions." }
                        ].map((method, idx) => ("""
new_methods_grief = """                        {[
                            { title: "Meaning-Centered Therapy", desc: "Find a way forward. We help you explore how to honor the person or life you lost while rebuilding a sense of purpose for your future." },
                            { title: "Trauma-Informed Care", desc: "Process the unthinkable safely. We use specialized, gentle techniques to help your nervous system heal from the shock of sudden or traumatic loss." },
                            { title: "Cognitive Behavioral Therapy for Grief", desc: "Untangle complicated emotions. Learn to identify and reframe the intense guilt, anger, or regret that often accompanies deep mourning." },
                            { title: "Mindfulness & Acceptance", desc: "Learn to carry the weight. Master practical grounding techniques to manage sudden waves of sorrow and panic when grief strikes unexpectedly." }
                        ].map((method, idx) => ("""
grief_content = grief_content.replace(old_methods, new_methods_grief)

# Process Steps
new_process_grief = """const processSteps = [
  {
    title: "Let's Talk (Stress-Free Onboarding)",
    desc: "We handle the paperwork and verify your insurance coverage—including Medicaid. We'll match you with a compassionate grief counselor on day one."
  },
  {
    title: "Understanding Your Unique Loss",
    desc: "During the first sessions, we take the time to truly understand your history, the relationship you lost, and what you need to feel supported."
  },
  {
    title: "Your Custom Healing Pace",
    desc: "Collaborate to design a roadmap tailored to you. We don't force timelines; we establish practical coping strategies for your daily survival."
  },
  {
    title: "Finding Light in the Darkness",
    desc: "Engage in regular, supportive sessions to safely process your emotions, integrate the loss into your life story, and slowly rediscover joy."
  }
];"""
grief_content = re.sub(r'const processSteps = \[.*?\];', new_process_grief, grief_content, flags=re.DOTALL)

# CTA Banner
grief_content = grief_content.replace("Take the first step", "Don't Carry It Alone")
grief_content = grief_content.replace("Your journey to wellness <br className=\"hidden md:block\" />", "Start finding your way through the dark <br className=\"hidden md:block\" />")
grief_content = grief_content.replace("<span className=\"font-instrument-serif italic text-yellow-200 font-normal\">begins here</span>", "<span className=\"font-instrument-serif italic text-yellow-200 font-normal\">today.</span>")
grief_content = grief_content.replace("Our compassionate team is ready to support you. Schedule an appointment today and discover a sanctuary for healing and growth in Darby, PA.", "You don't have to navigate this profound sorrow by yourself. Schedule your grief counseling session today and let our Darby, PA specialists support you.")

# FAQs
new_faqs_grief = """const faqs = [
    {
      question: "Is there a 'normal' way to grieve?",
      answer: "There is no single 'normal' way to grieve. Grief is highly individual and influenced by many factors. What's important is finding healthy ways to express and process your emotions that work for you."
    },
    {
      question: "How do I know if I need grief therapy?",
      answer: "Consider seeking therapy if your grief feels unbearable, if you're having trouble functioning in daily life, if you feel stuck, or if you're experiencing intense yearning that doesn't ease over time."
    },
    {
      question: "How long does grief therapy typically last?",
      answer: "Duration varies based on individual needs. Some benefit from short-term therapy (8-12 sessions), while others need longer-term support, especially for complicated or traumatic grief. We work at your pace."
    },
    {
      question: "Do you accept Medicaid for grief counseling in PA?",
      answer: "Yes, we exclusively accept Medicaid and Medical Assistance. We provide compassionate grief support to ensure you have the help you need during difficult times without financial stress."
    }
];"""
grief_content = re.sub(r'const faqs = \[.*?\];', new_faqs_grief, grief_content, flags=re.DOTALL)
grief_content = grief_content.replace('Individual Therapy <span className="font-instrument-serif italic text-orange-500">FAQs.</span>', 'Grief Therapy <span className="font-instrument-serif italic text-orange-500">FAQs.</span>')

grief_content = grief_content.replace('IndividualTherapyClient', 'GriefTherapyClient')

with open('/workspace/src/app/grief-therapy-darby-pa/GriefTherapyClient.tsx', 'w') as f:
    f.write(grief_content)


# ---------------------------------------------------------
# RELATIONSHIP THERAPY
# ---------------------------------------------------------
rel_content = base_content

# Image
rel_content = rel_content.replace(
    'https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918057/cropped-shot-of-a-man-having-a-therapeutic-session-2026-03-25-02-43-30-utc_bzrrq0.jpg',
    'https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918015/diverse-couple-on-a-therapy-session-in-a-psycholog-2026-03-25-04-41-39-utc_jebtlc.jpg'
)
rel_content = rel_content.replace('alt="Individual Therapy in Darby PA"', 'alt="Relationship Therapy in Darby PA"')

# Hero
rel_content = rel_content.replace('Personalized Counseling in PA', 'Expert Relationship Support')
rel_content = rel_content.replace('Take Back Your Life with', 'Heal and Strengthen Your Connections with')
rel_content = rel_content.replace('Individual Therapy in Darby, PA', 'Relationship Therapy in Darby, PA')
rel_content = rel_content.replace('One-on-one counseling in Darby, PA. Learn practical tools to reduce anxiety, overcome depression, and regain control of your daily life in a 100% confidential environment.', 'Stop the endless cycles of conflict and misunderstanding. Whether it\'s with a partner, family member, or co-worker, get expert support to build healthier, lasting bonds in Darby, PA.')

# Section 1
rel_content = rel_content.replace('Why Choose Sunrise', 'Why Choose Sunrise')
rel_content = rel_content.replace('Therapy tailored to your exact needs, <br className="hidden md:block" /><span className="font-instrument-serif italic text-orange-500">not a textbook.</span>', 'Therapy designed to rebuild trust, <br className="hidden md:block" /><span className="font-instrument-serif italic text-orange-500">not place blame.</span>')
rel_content = rel_content.replace("Therapy isn't just about talking—it's about taking your life back. When you partner with a licensed expert at Sunrise Human Care in Darby, PA, you get more than a confidential space. You gain a dedicated guide who will help you untangle your thoughts, build practical coping skills, and empower you to finally step back into a life that feels entirely your own.", "Relationships are complex, and navigating them shouldn't feel like a battlefield. When you work with our licensed relationship experts in Darby, PA, you gain an unbiased guide who will help you break destructive communication loops, establish healthy boundaries, and rediscover genuine connection.")

# Cards
rel_content = rel_content.replace('Guidance You Can Trust', 'Guidance You Can Trust')
rel_content = rel_content.replace('Work with fully licensed, state-certified therapists in Delaware County who specialize in approaches that actually work for your family.', 'Work with fully licensed, state-certified therapists in Delaware County who specialize in communication, conflict resolution, and family dynamics.')
rel_content = rel_content.replace('Strategies That Actually Work', 'Strategies That Actually Work')
rel_content = rel_content.replace('We use proven methods like Family Systems Therapy so you see measurable, real-world progress in your home.', 'We use proven methods like Emotionally Focused Therapy (EFT) so you see measurable, real-world progress in how you relate to others.')
rel_content = rel_content.replace('Tailored to Your Unique Story', 'Tailored to Your Dynamic')
rel_content = rel_content.replace("Your family's roadmap is tailored specifically to your unique dynamic, communication styles, and shared goals.", 'Your relationship roadmap is tailored specifically to the unique personalities, communication styles, and history involved.')

# Conditions
rel_content = rel_content.replace('Targeted Relief', 'Targeted Relief')
rel_content = rel_content.replace('Find relief from the weight of <br />', 'Find your way back to <br />')
rel_content = rel_content.replace('<span className="font-instrument-serif italic text-orange-500">everyday struggles.</span>', '<span className="font-instrument-serif italic text-orange-500">healthy connections.</span>')
rel_content = rel_content.replace("You don't have to carry this burden alone. Our specialists in Darby, PA use proven, evidence-based methods to help you break free from emotional pain and get back to living fully.", "You don't have to stay stuck in the same toxic patterns. Our relationship specialists in Darby, PA use proven methods to help you bridge the emotional gap and build stronger, healthier partnerships.")

# Conditions Grid
new_grid_rel = """                {[
                  { title: "Communication Breakdown", icon: Brain, desc: "Stop the endless cycles of arguing. Learn how to truly hear each other and express your needs without triggering defensive reactions." },
                  { title: "Trust & Infidelity", icon: Shield, desc: "Rebuild after betrayal. We provide a structured, safe roadmap to process the pain, restore broken trust, and create a new foundation." },
                  { title: "Family Estrangement", icon: Heart, desc: "Navigate the complex pain of broken family ties. We help you set healthy boundaries, heal past wounds, and explore reconciliation safely." },
                  { title: "Co-Parenting Conflicts", icon: Users, desc: "Get on the same page for your children. Resolve differences in parenting styles and build a united, cooperative front post-divorce." },
                  { title: "Navigating Divorce", icon: ArrowRight, desc: "Uncoupling doesn't have to destroy you. Receive compassionate guidance to untangle your life, process grief, and establish a healthy future." },
                  { title: "Workplace & Peer Issues", icon: Star, desc: "It's not just romance. Learn to navigate toxic bosses, difficult friendships, and set firm, respectful boundaries in all areas of life." }
                ].map((item, i) => ("""
rel_content = rel_content.replace(old_grid, new_grid_rel)

# How We Work
rel_content = rel_content.replace("Discover Proven Therapies <br className=\"hidden md:block\" />", "Discover Proven Methods <br className=\"hidden md:block\" />")
rel_content = rel_content.replace("That Deliver Real Results", "That Restore Connection")
rel_content = rel_content.replace("Stop guessing with your mental health. We exclusively use scientifically proven, evidence-based practices (EBPs) tailored to your unique mind—ensuring you experience measurable progress, faster.", "Stop repeating the same arguments. We exclusively use scientifically proven, evidence-based practices for relationship building—ensuring you experience measurable progress and lasting harmony.")

new_methods_rel = """                        {[
                            { title: "Emotionally Focused Therapy (EFT)", desc: "Stop the negative cycle. Identify the hidden emotional triggers driving your conflicts and create a secure, lasting bond with your loved ones." },
                            { title: "The Gottman Method", desc: "Build a bulletproof partnership. Master the research-backed framework designed to disarm conflict, increase intimacy, and build shared meaning." },
                            { title: "Family Systems Therapy", desc: "Heal the whole dynamic. Address the underlying unspoken rules and roles driving family conflict, improve communication, and strengthen bonds." },
                            { title: "Conflict Resolution Training", desc: "Get unstuck, fast. Stop dwelling on past resentments and start building concrete, actionable communication skills for your future interactions." }
                        ].map((method, idx) => ("""
rel_content = rel_content.replace(old_methods, new_methods_rel)

# Process Steps
new_process_rel = """const processSteps = [
  {
    title: "Let's Talk (Stress-Free Onboarding)",
    desc: "We handle the paperwork and verify your insurance coverage—including Medicaid. We'll match you with the right relationship expert on day one."
  },
  {
    title: "Understanding Your Dynamic",
    desc: "During your first session, your therapist will conduct a thorough evaluation of your relationship history, current conflict patterns, and shared goals."
  },
  {
    title: "Your Custom Relationship Roadmap",
    desc: "Collaborate to design a customized roadmap tailored to your specific dynamic, establishing clear, achievable objectives to rebuild your connection."
  },
  {
    title: "Seeing Real Changes Together",
    desc: "Engage in regular sessions utilizing proven practices to break negative cycles, track your improvement, and restore your mutual respect."
  }
];"""
rel_content = re.sub(r'const processSteps = \[.*?\];', new_process_rel, rel_content, flags=re.DOTALL)

# CTA Banner
rel_content = rel_content.replace("Take the first step", "Don't Let Conflict Win")
rel_content = rel_content.replace("Your journey to wellness <br className=\"hidden md:block\" />", "Start communicating better <br className=\"hidden md:block\" />")
rel_content = rel_content.replace("<span className=\"font-instrument-serif italic text-yellow-200 font-normal\">begins here</span>", "<span className=\"font-instrument-serif italic text-yellow-200 font-normal\">this week.</span>")
rel_content = rel_content.replace("Our compassionate team is ready to support you. Schedule an appointment today and discover a sanctuary for healing and growth in Darby, PA.", "You don't have to fix this alone. Schedule your relationship therapy session today and let our Darby, PA specialists help you find your way back to healthy connections.")

# FAQs
new_faqs_rel = """const faqs = [
    {
      question: "How do I know if my relationship would benefit from therapy?",
      answer: "Consider therapy if you're experiencing recurring conflicts that don't get resolved, communication problems, emotional disconnection, trust issues, or if you're navigating major life transitions that are straining your relationship."
    },
    {
      question: "Does relationship therapy only work for couples on the brink of separation?",
      answer: "No, relationship therapy can benefit relationships at any stage. While it can help those in crisis, it's also highly valuable for healthy relationships that want to enhance communication, deepen connection, or navigate transitions proactively."
    },
    {
      question: "Can I attend relationship therapy alone?",
      answer: "Yes! Individual relationship therapy is highly effective. You can learn to set better boundaries, understand your own attachment style, and change how you react to toxic people in your life, even if the other person refuses to attend."
    },
    {
      question: "How long does relationship therapy typically take?",
      answer: "The duration varies depending on the issues being addressed. Some individuals or couples attend 10-12 sessions and achieve their goals, while others benefit from longer-term therapy to recover from significant relationship trauma."
    }
];"""
rel_content = re.sub(r'const faqs = \[.*?\];', new_faqs_rel, rel_content, flags=re.DOTALL)
rel_content = rel_content.replace('Individual Therapy <span className="font-instrument-serif italic text-orange-500">FAQs.</span>', 'Relationship Therapy <span className="font-instrument-serif italic text-orange-500">FAQs.</span>')

rel_content = rel_content.replace('IndividualTherapyClient', 'RelationshipTherapyClient')

with open('/workspace/src/app/relationship-therapy-darby-pa/RelationshipTherapyClient.tsx', 'w') as f:
    f.write(rel_content)

print("Done generating clients")
