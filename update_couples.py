import re

with open('/workspace/src/app/individual-therapy-darby-pa/IndividualTherapyClient.tsx', 'r') as f:
    content = f.read()

# Replace Image
content = content.replace(
    'https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918057/cropped-shot-of-a-man-having-a-therapeutic-session-2026-03-25-02-43-30-utc_bzrrq0.jpg',
    'https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_1600/v1774918015/diverse-couple-on-a-therapy-session-in-a-psycholog-2026-03-25-04-41-39-utc_jebtlc.jpg'
)
content = content.replace('alt="Individual Therapy in Darby PA"', 'alt="Couples Counseling in Darby PA"')

# Hero Section
content = content.replace('Personalized Counseling in PA', 'Rebuild Your Relationship in PA')
content = content.replace('Individual Therapy in', 'Couples Counseling in')
content = content.replace('One-on-one counseling in Darby, PA. Learn practical tools to reduce anxiety, overcome depression, and regain control of your daily life in a 100% confidential environment.', 'Stop the endless arguments and emotional distance. Reconnect with your partner, rebuild trust, and restore intimacy with expert marriage counseling in Darby, PA.')

# Section 1
content = content.replace('Why Choose Sunrise', 'Why Choose Sunrise')
content = content.replace('Therapy tailored to your exact needs, <br className="hidden md:block" /><span className="font-instrument-serif italic text-orange-500">not a textbook.</span>', 'Therapy designed to heal your relationship, <br className="hidden md:block" /><span className="font-instrument-serif italic text-orange-500">not take sides.</span>')
content = content.replace("Therapy isn't just about talking—it's about taking your life back. When you partner with a licensed expert at Sunrise Human Care in Darby, PA, you get more than a confidential space. You gain a dedicated guide who will help you untangle your thoughts, build practical coping skills, and empower you to finally step back into a life that feels entirely your own.", "Couples counseling isn't about finding out who is right—it's about getting your relationship back on track. When you work with our licensed relationship experts in Darby, PA, you gain an unbiased guide who will help you break destructive communication loops, rebuild broken trust, and rediscover the love you thought was lost.")

# Conditions
content = content.replace('Targeted Relief', 'Relationship Repair')
content = content.replace('Find relief from the weight of <br />', 'Find your way back to <br />')
content = content.replace('<span className="font-instrument-serif italic text-orange-500">everyday struggles.</span>', '<span className="font-instrument-serif italic text-orange-500">each other.</span>')
content = content.replace("You don't have to carry this burden alone. Our specialists in Darby, PA use proven, evidence-based methods to help you break free from emotional pain and get back to living fully.", "You don't have to stay stuck in the same arguments. Our marriage specialists in Darby, PA use proven methods to help you bridge the emotional gap and build a stronger, healthier partnership.")

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
                  { title: "Communication Breakdown", icon: Brain, desc: "Stop the endless cycles of arguing. Learn how to truly hear each other and express your needs without triggering defensive reactions." },
                  { title: "Trust & Infidelity", icon: Shield, desc: "Rebuild after betrayal. We provide a structured, safe roadmap to process the pain, restore broken trust, and create a new foundation." },
                  { title: "Emotional Distance", icon: Heart, desc: "Bridge the gap between you. Reignite the intimacy and deep emotional connection that originally brought you together." },
                  { title: "Parenting Conflicts", icon: Users, desc: "Get on the same page. Resolve differences in parenting styles and build a united front to lead a healthier, happier family." },
                  { title: "Life Transitions", icon: ArrowRight, desc: "Navigate major changes together. Whether it's a new baby, career shifts, or an empty nest, stay connected through the chaos." },
                  { title: "Pre-Marital Counseling", icon: Star, desc: "Start your marriage on solid ground. Proactively address finances, family dynamics, and expectations before you say 'I do'." }
                ].map((item, i) => ("""
content = content.replace(old_grid, new_grid)

# Clinical Excellence -> How We Work
content = content.replace("Stop guessing with your mental health. We exclusively use scientifically proven, evidence-based practices (EBPs) tailored to your unique mind—ensuring you experience measurable progress, faster.", "Stop guessing what will fix your relationship. We exclusively use scientifically proven, evidence-based practices for couples—ensuring you experience measurable progress and lasting connection, faster.")

old_methods = """                        {[
                            { title: "Cognitive Behavioral Therapy (CBT)", desc: "Rewire your mind for success. Stop negative thought loops in their tracks and conquer anxiety and depression using the clinical gold standard." },
                            { title: "Dialectical Behavior Therapy (DBT)", desc: "Regain emotional control. Learn powerful, practical skills to live in the present moment, manage intense feelings, and build healthier relationships." },
                            { title: "Mindfulness-Based Therapy", desc: "Find peace in the chaos. Master scientifically proven mindfulness techniques that quiet mental noise and dramatically reduce daily distress." },
                            { title: "Solution-Focused Brief Therapy", desc: "Get unstuck, fast. Stop dwelling on past problems and start building concrete, actionable solutions for your future in fewer sessions." }
                        ].map((method, idx) => ("""

new_methods = """                        {[
                            { title: "The Gottman Method", desc: "Build a bulletproof partnership. Master the research-backed framework designed to disarm conflict, increase intimacy, and build shared meaning." },
                            { title: "Emotionally Focused Therapy (EFT)", desc: "Stop the negative cycle. Identify the hidden emotional triggers driving your arguments and create a secure, lasting bond with your partner." },
                            { title: "Imago Relationship Therapy", desc: "Heal childhood wounds together. Understand how your past influences your present relationship dynamics and transform conflict into connection." },
                            { title: "Solution-Focused Counseling", desc: "Get unstuck, fast. Stop dwelling on past resentments and start building concrete, actionable solutions for your shared future in fewer sessions." }
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
    desc: "We handle the paperwork and verify your insurance coverage—including Medicaid—before you even start. We'll match you with the right couples therapist on day one."
  },
  {
    title: "Relationship Assessment",
    desc: "During your first session, your therapist will conduct a thorough evaluation of your relationship history, current conflict patterns, and shared goals."
  },
  {
    title: "Actionable Roadmap",
    desc: "Collaborate to design a customized roadmap tailored to your specific dynamic, establishing clear, achievable objectives to rebuild your connection."
  },
  {
    title: "Continuous Progress",
    desc: "Engage in regular joint sessions utilizing evidence-based practices to break negative cycles, track your improvement, and restore your intimacy."
  }
];"""
content = content.replace(old_process, new_process)

# CTA Banner
content = content.replace("Start feeling better", "Start communicating better")
content = content.replace("You don't have to figure this out alone. Schedule your first appointment today and let our Darby, PA specialists help you move forward.", "You don't have to fix this alone. Schedule your first couples session today and let our Darby, PA specialists help you find your way back to each other.")

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
      question: "What can we expect from couples counseling in Darby?",
      answer: "Couples counseling in Darby at Sunrise Human Care offers a tailored approach where licensed therapists guide partners to improve communication, resolve conflicts, and build a stronger bond in a confidential, supportive environment. We help you navigate challenges together rather than against each other."
    },
    {
      question: "Is couples counseling effective for long-term relationships?",
      answer: "Yes, couples counseling helps long-term partners address entrenched patterns, rebuild trust, and rediscover connection. By utilizing proven methods like The Gottman Method and EFT, we assist couples in overcoming emotional distance and reigniting intimacy, regardless of how long they've been together."
    },
    {
      question: "Can unmarried couples benefit from relationship therapy in Delaware County?",
      answer: "Absolutely. Relationship therapy in Delaware County supports all committed relationships. Whether you are dating, engaged, or living together, our therapists can help unmarried couples strengthen their partnership, navigate life transitions, and lay a solid foundation for the future."
    },
    {
      question: "How many sessions are needed for couples therapy near me?",
      answer: "The duration of couples therapy depends entirely on your specific goals and challenges. Some couples see significant progress through short-term, solution-focused therapy in 8-12 sessions, while others dealing with deeper issues like infidelity or severe communication breakdowns may engage longer for lasting transformation."
    },
    {
      question: "Does marriage counseling PA accept insurance?",
      answer: "Yes, our marriage counseling PA services accept Medicaid to ensure that relationship support is accessible to the Darby and broader Delaware County community. Our administrative team will verify your benefits and clearly explain any coverage details prior to your first session."
    }
];"""
content = content.replace(old_faqs, new_faqs)
content = content.replace('Individual Therapy <span className="font-instrument-serif italic text-orange-500">FAQs.</span>', 'Couples Counseling <span className="font-instrument-serif italic text-orange-500">FAQs.</span>')

# Component Name
content = content.replace('IndividualTherapyClient', 'CouplesCounselingClient')

with open('/workspace/src/app/couples-counseling-darby-pa/CouplesCounselingClient.tsx', 'w') as f:
    f.write(content)

print("Replacement Complete")
