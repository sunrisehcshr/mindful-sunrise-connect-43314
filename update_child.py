import re

with open('/workspace/src/app/individual-therapy-darby-pa/IndividualTherapyClient.tsx', 'r') as f:
    content = f.read()

# Replace Image
content = content.replace(
    'https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918057/cropped-shot-of-a-man-having-a-therapeutic-session-2026-03-25-02-43-30-utc_bzrrq0.jpg',
    'https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_1600/v1774918385/women-discussing-childs-progress-in-kindergarten-e-2026-03-25-09-19-16-utc_j1quiw.jpg'
)
content = content.replace('alt="Individual Therapy in Darby PA"', 'alt="Child Therapy in Darby PA"')

# Hero Section
content = content.replace('Personalized Counseling in PA', 'Expert Care for Your Child')
content = content.replace('Individual Therapy in', 'Child Therapy in')
content = content.replace('One-on-one counseling in Darby, PA. Learn practical tools to reduce anxiety, overcome depression, and regain control of your daily life in a 100% confidential environment.', 'Equip your child with healthy coping skills, overcome behavioral challenges, and foster profound developmental growth with expert child therapy in Darby, PA.')

# Section 1
content = content.replace('Therapy tailored to your exact needs, <br className="hidden md:block" /><span className="font-instrument-serif italic text-orange-500">not a textbook.</span>', 'Therapy designed for how children learn, <br className="hidden md:block" /><span className="font-instrument-serif italic text-orange-500">not how adults talk.</span>')
content = content.replace("Therapy isn't just about talking—it's about taking your life back. When you partner with a licensed expert at Sunrise Human Care in Darby, PA, you get more than a confidential space. You gain a dedicated guide who will help you untangle your thoughts, build practical coping skills, and empower you to finally step back into a life that feels entirely your own.", "Children don't process emotions like adults do. When you partner with our licensed child specialists in Darby, PA, your child gains a safe, engaging environment where they can express themselves naturally through play and age-appropriate therapy, helping them build confidence and resilience.")

# Conditions
content = content.replace('Targeted Relief', 'Support for Your Child')
content = content.replace('Find relief from the weight of <br />', 'Find relief from childhood <br />')
content = content.replace('<span className="font-instrument-serif italic text-orange-500">everyday struggles.</span>', '<span className="font-instrument-serif italic text-orange-500">behavioral struggles.</span>')
content = content.replace("You don't have to carry this burden alone. Our specialists in Darby, PA use proven, evidence-based methods to help you break free from emotional pain and get back to living fully.", "You don't have to navigate your child's emotional or behavioral challenges alone. Our child specialists in Darby, PA use proven methods to help your child thrive at home and in school.")

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
                  { title: "Childhood Anxiety", icon: Brain, desc: "Equip your child with practical, age-appropriate tools to overcome overwhelming fears, separation anxiety, and daily worry." },
                  { title: "Behavioral Issues", icon: Sparkles, desc: "Transform daily power struggles. We help uncover the root cause of acting out and build positive, sustainable behavior patterns." },
                  { title: "Trauma & Grief", icon: Shield, desc: "Provide gentle, trauma-informed care to help children safely process painful experiences, loss, or family changes." },
                  { title: "ADHD & Focus", icon: Lightbulb, desc: "Help your child harness their unique potential. Learn strategies to improve focus, emotional regulation, and academic success." },
                  { title: "School Refusal", icon: ArrowRight, desc: "Address the underlying anxieties keeping your child from the classroom. Build confidence and a healthy relationship with learning." },
                  { title: "Social & Peer Struggles", icon: Users, desc: "Develop crucial social skills. Help your child navigate bullying, make friends, and build healthy self-esteem." }
                ].map((item, i) => ("""
content = content.replace(old_grid, new_grid)

# Clinical Excellence -> How We Work
content = content.replace("Discover Proven Therapies <br />", "Discover Proven Therapies <br className=\"hidden md:block\" />")
content = content.replace("Stop guessing with your mental health. We exclusively use scientifically proven, evidence-based practices (EBPs) tailored to your unique mind—ensuring you experience measurable progress, faster.", "Stop guessing what your child needs. We exclusively use scientifically proven, evidence-based practices tailored for children and teens—ensuring you see measurable progress at home and in school.")

old_methods = """                        {[
                            { title: "Cognitive Behavioral Therapy (CBT)", desc: "Rewire your mind for success. Stop negative thought loops in their tracks and conquer anxiety and depression using the clinical gold standard." },
                            { title: "Dialectical Behavior Therapy (DBT)", desc: "Regain emotional control. Learn powerful, practical skills to live in the present moment, manage intense feelings, and build healthier relationships." },
                            { title: "Mindfulness-Based Therapy", desc: "Find peace in the chaos. Master scientifically proven mindfulness techniques that quiet mental noise and dramatically reduce daily distress." },
                            { title: "Solution-Focused Brief Therapy", desc: "Get unstuck, fast. Stop dwelling on past problems and start building concrete, actionable solutions for your future in fewer sessions." }
                        ].map((method, idx) => ("""

new_methods = """                        {[
                            { title: "Play Therapy", desc: "Speak your child's language. Utilize guided play to help younger children express complex emotions, resolve trauma, and learn problem-solving skills naturally." },
                            { title: "Cognitive Behavioral Therapy (CBT)", desc: "Rewire anxious minds. Teach older children and teens how to identify negative thought loops and replace them with healthy, confident perspectives." },
                            { title: "Parent-Child Interaction Therapy (PCIT)", desc: "Restore your authority with love. Coach parents in real-time to manage disruptive behaviors and build a warmer, more secure attachment with their child." },
                            { title: "Solution-Focused Counseling", desc: "Get unstuck, fast. Stop dwelling on problems and start building concrete, actionable coping strategies for your child's future." }
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
    desc: "We handle the paperwork and verify your insurance coverage—including Medicaid. We'll match your child with the right specialist on day one."
  },
  {
    title: "Comprehensive Assessment",
    desc: "During the first sessions, your therapist will conduct a thorough evaluation of your child's developmental history, behavioral patterns, and emotional needs."
  },
  {
    title: "Actionable Roadmap",
    desc: "Collaborate to design a customized roadmap tailored to your child, establishing clear objectives for therapy and practical at-home strategies for parents."
  },
  {
    title: "Continuous Progress",
    desc: "Engage in regular sessions utilizing evidence-based practices to build coping skills, track your child's improvement, and adjust strategies as they grow."
  }
];"""
content = content.replace(old_process, new_process)

# CTA Banner
content = content.replace("Start feeling better <br className=\"hidden md:block\" />", "Start supporting your child's growth <br className=\"hidden md:block\" />")
content = content.replace("<span className=\"font-instrument-serif italic text-yellow-200 font-normal\">this week.</span>", "<span className=\"font-instrument-serif italic text-yellow-200 font-normal\">today.</span>")
content = content.replace("You don't have to figure this out alone. Schedule your first appointment today and let our Darby, PA specialists help you move forward.", "You don't have to figure out these parenting challenges alone. Schedule your child's first therapy session today and let our Darby, PA specialists help them thrive.")

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
      question: "What can we expect from child therapy in Darby?",
      answer: "Child therapy at Sunrise Human Care provides a safe, engaging environment where licensed specialists use age-appropriate methods like play therapy and CBT to help children express emotions, develop coping skills, and overcome behavioral challenges."
    },
    {
      question: "Do parents participate in the therapy sessions?",
      answer: "Yes, parental involvement is highly encouraged. Depending on your child's age and needs, therapists will regularly consult with parents, offer at-home strategies, and may include you in joint sessions to ensure progress continues outside the clinic."
    },
    {
      question: "How do I know if my child needs therapy?",
      answer: "If your child is experiencing sudden changes in mood, extreme tantrums, school refusal, withdrawal from friends, or difficulty sleeping, professional support can make a significant difference. Early intervention often prevents minor issues from becoming long-term struggles."
    },
    {
      question: "How long does child therapy usually take?",
      answer: "The duration depends entirely on your child's specific goals and challenges. Some children see significant behavioral improvements through short-term therapy in 8-12 sessions, while children dealing with trauma or deep-seated anxiety may engage longer."
    },
    {
      question: "Does your child therapy in PA accept Medicaid?",
      answer: "Yes, our child therapy services accept Medicaid to ensure that crucial developmental support is accessible to the Darby and broader Delaware County community. Our team will verify your benefits prior to your first session."
    }
];"""
content = content.replace(old_faqs, new_faqs)
content = content.replace('Individual Therapy <span className="font-instrument-serif italic text-orange-500">FAQs.</span>', 'Child Therapy <span className="font-instrument-serif italic text-orange-500">FAQs.</span>')

# Component Name
content = content.replace('IndividualTherapyClient', 'ChildTherapyClient')

with open('/workspace/src/app/child-therapy-darby-pa/ChildTherapyClient.tsx', 'w') as f:
    f.write(content)

print("Child Therapy update complete")
