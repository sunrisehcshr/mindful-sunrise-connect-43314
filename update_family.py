import re

with open('/workspace/src/app/individual-therapy-darby-pa/IndividualTherapyClient.tsx', 'r') as f:
    content = f.read()

# Replace Image
content = content.replace(
    'https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918057/cropped-shot-of-a-man-having-a-therapeutic-session-2026-03-25-02-43-30-utc_bzrrq0.jpg',
    'https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918387/family-counseling-talk-from-home-parents-listen-t-2026-03-25-02-29-59-utc_a9m3eu.jpg'
)
content = content.replace('alt="Individual Therapy in Darby PA"', 'alt="Family Therapy in Darby PA"')

# Hero Section
content = content.replace('Personalized Counseling in PA', 'Restore Harmony in Your Home')
content = content.replace('Individual Therapy in', 'Family Therapy in')
content = content.replace('One-on-one counseling in Darby, PA. Learn practical tools to reduce anxiety, overcome depression, and regain control of your daily life in a 100% confidential environment.', 'Stop the daily power struggles and emotional disconnect. Rebuild a peaceful, connected family dynamic with expert therapy in Darby, PA.')

# Section 1
content = content.replace('Therapy tailored to your exact needs, <br className="hidden md:block" /><span className="font-instrument-serif italic text-orange-500">not a textbook.</span>', 'Therapy designed to support your family, <br className="hidden md:block" /><span className="font-instrument-serif italic text-orange-500">not judge your parenting.</span>')
content = content.replace("Therapy isn't just about talking—it's about taking your life back. When you partner with a licensed expert at Sunrise Human Care in Darby, PA, you get more than a confidential space. You gain a dedicated guide who will help you untangle your thoughts, build practical coping skills, and empower you to finally step back into a life that feels entirely your own.", "Family therapy isn't about assigning blame—it's about healing the whole unit. When you partner with our licensed family specialists in Darby, PA, you gain a dedicated team who will help your family break destructive behavioral loops, resolve deep-seated conflict, and empower everyone to communicate with compassion and clarity.")

# Conditions
content = content.replace('Targeted Relief', 'Targeted Relief for Families')
content = content.replace('Find relief from the weight of <br />', 'Find your way back to a <br />')
content = content.replace('<span className="font-instrument-serif italic text-orange-500">everyday struggles.</span>', '<span className="font-instrument-serif italic text-orange-500">peaceful home.</span>')
content = content.replace("You don't have to carry this burden alone. Our specialists in Darby, PA use proven, evidence-based methods to help you break free from emotional pain and get back to living fully.", "You don't have to navigate parenting struggles or family conflict alone. Our specialists in Darby, PA use proven methods to help your family thrive and restore balance to your household.")

# Conditions Grid
old_grid = """                {[
                  { title: "Anxiety Disorders", icon: Brain, desc: "Stop letting worry dictate your life. We'll help you identify hidden triggers and build practical tools to quiet your mind." },
                  { title: "Depression & Mood", icon: Sparkles, desc: "Break free from the heavy fog of sadness. Restore your energy, motivation, and sense of purpose with proven methods." },
                  { title: "Trauma & PTSD", icon: Shield, desc: "You don't have to live in the past. Safely process painful memories so you can heal and finally move forward." },
                  { title: "Stress & Burnout", icon: Lightbulb, desc: "Reclaim your energy. Learn actionable techniques to manage overwhelming stress and achieve the balance you deserve." },
                  { title: "Life Transitions", icon: ArrowRight, desc: "Navigate change with absolute confidence. Find clarity and support during career shifts, moves, or relationship changes." },
                  { title: "Self-Esteem & Growth", icon: Star, desc: "Discover your true worth. Silence your inner critic, build unwavering confidence, and unlock your full potential." }
                ].map((item, i) => ("""

new_grid = """                {[
                  { title: "Parent-Child Conflict", icon: Brain, desc: "Stop the daily battles. Learn how to communicate effectively and set boundaries without triggering defensive reactions." },
                  { title: "Teen Behavioral Issues", icon: Sparkles, desc: "Bridge the gap with your teenager. Create a safe space to address acting out, peer pressure, and emotional withdrawal." },
                  { title: "Family Trauma & Grief", icon: Shield, desc: "Heal together. Provide gentle, trauma-informed care to help your entire family safely process painful experiences and move forward." },
                  { title: "Blended Families", icon: Users, desc: "Navigate the complexities of step-parenting. Build a united front and establish trust in a newly blended household." },
                  { title: "Divorce & Separation", icon: ArrowRight, desc: "Protect your children through transition. Safely process painful changes and establish healthy co-parenting dynamics." },
                  { title: "Sibling Rivalry", icon: Star, desc: "End the constant fighting. We provide a structured roadmap to resolve jealousy and build a cooperative, supportive sibling bond." }
                ].map((item, i) => ("""
content = content.replace(old_grid, new_grid)

# Clinical Excellence -> How We Work
content = content.replace("Discover Proven Therapies <br />", "Discover Proven Therapies <br className=\"hidden md:block\" />")
content = content.replace("Stop guessing with your mental health. We exclusively use scientifically proven, evidence-based practices (EBPs) tailored to your unique mind—ensuring you experience measurable progress, faster.", "Stop guessing what your family needs. We exclusively use scientifically proven, evidence-based practices tailored for families—ensuring you see measurable progress at home.")

old_methods = """                        {[
                            { title: "Cognitive Behavioral Therapy (CBT)", desc: "Rewire your mind for success. Stop negative thought loops in their tracks and conquer anxiety and depression using the clinical gold standard." },
                            { title: "Dialectical Behavior Therapy (DBT)", desc: "Regain emotional control. Learn powerful, practical skills to live in the present moment, manage intense feelings, and build healthier relationships." },
                            { title: "Mindfulness-Based Therapy", desc: "Find peace in the chaos. Master scientifically proven mindfulness techniques that quiet mental noise and dramatically reduce daily distress." },
                            { title: "Solution-Focused Brief Therapy", desc: "Get unstuck, fast. Stop dwelling on past problems and start building concrete, actionable solutions for your future in fewer sessions." }
                        ].map((method, idx) => ("""

new_methods = """                        {[
                            { title: "Family Systems Therapy", desc: "Heal the whole unit. Address the underlying family dynamics driving conflict, improve communication, and strengthen bonds." },
                            { title: "Structural Family Therapy", desc: "Restore healthy boundaries. Realign the family hierarchy so parents can lead effectively and children feel secure." },
                            { title: "Cognitive Behavioral Therapy (CBT)", desc: "Rewire negative patterns. Teach family members how to identify and change the thought loops that cause anxiety and anger." },
                            { title: "Solution-Focused Counseling", desc: "Get unstuck, fast. Stop dwelling on past resentments and start building concrete, actionable solutions for your family's future." }
                        ].map((method, idx) => ("""
content = content.replace(old_methods, new_methods)

# Process Steps
old_process = """const processSteps = [
  {
    title: "Initial Consultation",
    desc: "We handle the paperwork and verify your insurance coverage—including Medicaid—before you even start. We'll match you with the right therapist on day one."
  },
  {
    title: "Comprehensive Assessment",
    desc: "During your first session, your therapist will conduct a thorough evaluation of your mental health history, current challenges, and personal goals."
  },
  {
    title: "Personalized Plan",
    desc: "Collaborate to design a personalized treatment plan tailored to your specific needs, establishing clear objectives for your therapy sessions."
  },
  {
    title: "Continuous Progress",
    desc: "Engage in regular therapy sessions utilizing evidence-based practices to address your concerns, track your improvement, and adjust your treatment as necessary."
  }
];"""

new_process = """const processSteps = [
  {
    title: "Initial Consultation",
    desc: "We handle the paperwork and verify your insurance coverage—including Medicaid. We'll match your family with the right therapist on day one."
  },
  {
    title: "Family Assessment",
    desc: "During the first sessions, your therapist will conduct a thorough evaluation of your family's history, conflict patterns, and shared goals."
  },
  {
    title: "Actionable Roadmap",
    desc: "Collaborate to design a customized roadmap tailored to your family's dynamic, establishing clear objectives for therapy and at-home strategies."
  },
  {
    title: "Continuous Progress",
    desc: "Engage in regular joint sessions utilizing evidence-based practices to break negative cycles, track your improvement, and restore harmony."
  }
];"""
content = content.replace(old_process, new_process)

# CTA Banner
content = content.replace("Start feeling better <br className=\"hidden md:block\" />", "Start restoring peace <br className=\"hidden md:block\" />")
content = content.replace("<span className=\"font-instrument-serif italic text-yellow-200 font-normal\">this week.</span>", "<span className=\"font-instrument-serif italic text-yellow-200 font-normal\">in your home.</span>")
content = content.replace("You don't have to figure this out alone. Schedule your first appointment today and let our Darby, PA specialists help you move forward.", "You don't have to figure out these family challenges alone. Schedule your first session today and let our Darby, PA specialists help your family thrive.")

# FAQs
old_faqs = """const faqs = [
  {
    question: "What does individual therapy in Darby involve?",
    answer: "Individual therapy in Darby offers a personalized process where licensed therapists support you in addressing challenges like anxiety, depression, or life transitions in a safe, confidential setting. Our Delaware County therapists use evidence-based methods tailored to your needs."
  },
  {
    question: "How often are individual counseling sessions recommended?",
    answer: "Most clients begin with weekly counseling sessions to establish momentum and build progress. As you meet your therapeutic goals, we can adjust the frequency to bi-weekly or monthly based on your unique situation."
  },
  {
    question: "How long does personal counseling typically last?",
    answer: "The duration of personal counseling in PA varies widely. Some individuals achieve their specific goals through short-term solution-focused therapy in 8-12 sessions, while others benefit from longer-term counseling to navigate deeper trauma or ongoing life stressors."
  },
  {
    question: "Is individual therapy covered by insurance in PA?",
    answer: "Yes, Sunrise Human Care accepts Medicaid to ensure mental health care is accessible to the Darby and broader Delaware County community. Our administrative team will verify your benefits prior to your first session."
  },
  {
    question: "What if I'm nervous about starting therapy for the first time?",
    answer: "It is completely normal to feel nervous or hesitant about starting individual therapy. Our therapists prioritize creating a warm, non-judgmental, and secure environment. We move at a pace that feels comfortable for you, ensuring you feel safe every step of the way."
  }
];"""

new_faqs = """const faqs = [
    {
      question: "What can we expect from family therapy in Darby?",
      answer: "Family therapy at Sunrise Human Care offers a tailored approach where licensed therapists guide your family to improve communication, resolve conflicts, and build a stronger bond in a supportive environment."
    },
    {
      question: "Do all family members need to attend?",
      answer: "While having everyone present is ideal, it is not strictly necessary for every session. Your therapist will recommend the best configuration—sometimes meeting with just parents, just siblings, or the whole family."
    },
    {
      question: "Is family counseling effective for blended families?",
      answer: "Yes, blended families face unique challenges. Therapy helps establish new roles, build trust, and navigate the complex emotions that come with integrating two households."
    },
    {
      question: "How long does family therapy typically last?",
      answer: "The duration depends on your family's specific goals. Many families see significant improvements in communication and behavior through short-term therapy in 8-12 sessions."
    },
    {
      question: "Does your family therapy in PA accept insurance?",
      answer: "Yes, our family therapy services accept Medicaid to ensure that relationship support is accessible to the Darby and broader Delaware County community. We verify benefits prior to your first session."
    }
];"""
content = content.replace(old_faqs, new_faqs)
content = content.replace('Individual Therapy <span className="font-instrument-serif italic text-orange-500">FAQs.</span>', 'Family Therapy <span className="font-instrument-serif italic text-orange-500">FAQs.</span>')

# Component Name
content = content.replace('IndividualTherapyClient', 'FamilyTherapyClient')

with open('/workspace/src/app/family-therapy-darby-pa/FamilyTherapyClient.tsx', 'w') as f:
    f.write(content)

print("Family Therapy update complete")
