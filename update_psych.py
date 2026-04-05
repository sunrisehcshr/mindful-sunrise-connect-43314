import re

with open('/workspace/src/app/individual-therapy-darby-pa/IndividualTherapyClient.tsx', 'r') as f:
    content = f.read()

# Replace Image
content = content.replace(
    'https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918057/cropped-shot-of-a-man-having-a-therapeutic-session-2026-03-25-02-43-30-utc_bzrrq0.jpg',
    'https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918057/cropped-view-of-psychotherapist-writing-on-clipboa-2026-03-11-19-39-36-utc_j17vdo.jpg'
)
content = content.replace('alt="Individual Therapy in Darby PA"', 'alt="Psychiatric Evaluations in Darby PA"')

# Hero Section
content = content.replace('Personalized Counseling in PA', 'Expert Psychiatric Care in PA')
content = content.replace('Take Back Your Life with', 'Get the Right Diagnosis with')
content = content.replace('Individual Therapy in Darby, PA', 'Psychiatric Evaluations in Darby, PA')
content = content.replace('One-on-one counseling in Darby, PA. Learn practical tools to reduce anxiety, overcome depression, and regain control of your daily life in a 100% confidential environment.', 'Stop wondering what is wrong. Get a clear, accurate diagnosis and a personalized medical treatment plan from licensed psychiatric specialists who actually listen to you.')

# Section 1
content = content.replace('Therapy tailored to your exact needs,', 'Evaluations designed to give you answers,')
content = content.replace('not a textbook.', 'not just a prescription.')
content = content.replace("Therapy isn't just about talking—it's about taking your life back. When you partner with a licensed expert at Sunrise Human Care in Darby, PA, you get more than a confidential space. You gain a dedicated guide who will help you untangle your thoughts, build practical coping skills, and empower you to finally step back into a life that feels entirely your own.", "A psychiatric evaluation isn't just a checklist—it's the crucial first step to getting your life back. When you meet with our licensed psychiatric providers in Darby, PA, you receive a comprehensive medical assessment of your symptoms, a clear diagnosis, and a collaborative roadmap for medication and therapy.")

# Conditions
content = content.replace('Targeted Relief', 'Clarity and Relief')
content = content.replace('Find relief from the weight of <br />', 'Find clarity and relief from <br />')
content = content.replace('<span className="font-instrument-serif italic text-orange-500">everyday struggles.</span>', '<span className="font-instrument-serif italic text-orange-500">complex symptoms.</span>')
content = content.replace("You don't have to carry this burden alone. Our specialists in Darby, PA use proven, evidence-based methods to help you break free from emotional pain and get back to living fully.", "You don't have to live with untreated or mismanaged symptoms. Our psychiatric specialists in Darby, PA provide accurate diagnoses and targeted medical treatment for a wide range of conditions.")

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
                  { title: "Severe Depression", icon: Sparkles, desc: "Lift the heavy fog. We evaluate treatment-resistant depression to find the right medication and therapeutic approach for your brain chemistry." },
                  { title: "Anxiety & Panic", icon: Shield, desc: "Stop the spiraling. Get a precise assessment to differentiate between generalized anxiety, panic disorders, and OCD for targeted relief." },
                  { title: "ADHD & Focus Issues", icon: Lightbulb, desc: "Regain your concentration. We provide thorough evaluations for adult and childhood ADHD to help you harness your focus and productivity." },
                  { title: "Bipolar & Mood Disorders", icon: Star, desc: "Stabilize your moods. Receive an expert diagnosis and a careful medication management plan to smooth out the highs and lows." },
                  { title: "Trauma & PTSD", icon: ArrowRight, desc: "Process the past safely. We assess complex trauma to ensure your psychiatric care perfectly complements your ongoing therapy." },
                  { title: "Medication Reviews", icon: Brain, desc: "Optimize your treatment. If your current meds aren't working, we conduct comprehensive reviews to adjust and safely transition your prescriptions." }
                ].map((item, i) => ("""
content = content.replace(old_grid, new_grid)

# Clinical Excellence -> How We Work
content = content.replace("Discover Proven Therapies <br className=\"hidden md:block\" />", "Discover a Medical Approach <br className=\"hidden md:block\" />")
content = content.replace("That Deliver Real Results", "That Prioritizes Your Wellbeing")
content = content.replace("Stop guessing with your mental health. We exclusively use scientifically proven, evidence-based practices (EBPs) tailored to your unique mind—ensuring you experience measurable progress, faster.", "Stop enduring trial-and-error treatments. You will benefit from thorough, evidence-based psychiatric assessments ensuring you receive the safest, most effective medical care possible.")

old_methods = """                        {[
                            { title: "Cognitive Behavioral Therapy (CBT)", desc: "Rewire your mind for success. Stop negative thought loops in their tracks and conquer anxiety and depression using the clinical gold standard." },
                            { title: "Dialectical Behavior Therapy (DBT)", desc: "Regain emotional control. Learn powerful, practical skills to live in the present moment, manage intense feelings, and build healthier relationships." },
                            { title: "Mindfulness-Based Therapy", desc: "Find peace in the chaos. Master scientifically proven mindfulness techniques that quiet mental noise and dramatically reduce daily distress." },
                            { title: "Solution-Focused Brief Therapy", desc: "Get unstuck, fast. Stop dwelling on past problems and start building concrete, actionable solutions for your future in fewer sessions." }
                        ].map((method, idx) => ("""

new_methods = """                        {[
                            { title: "Diagnostic Interviews", desc: "Get the full picture. We conduct deep-dive clinical interviews to understand your symptoms in the context of your entire medical and emotional life." },
                            { title: "Medication Management", desc: "Balance your brain chemistry safely. We prescribe and monitor medications using the latest psychiatric research and clinical guidelines." },
                            { title: "Collaborative Care", desc: "A unified approach. Our psychiatric providers work directly with your therapists to ensure your medication and counseling are perfectly aligned." },
                            { title: "Holistic Treatment Planning", desc: "Treat the whole person. We consider your lifestyle, physical health, and personal preferences before recommending any medical intervention." }
                        ].map((method, idx) => ("""
content = content.replace(old_methods, new_methods)

# Process Steps
old_process = """const processSteps = [
  {
    title: "Let's Talk (Stress-Free Onboarding)",
    desc: "We handle the paperwork and verify your insurance coverage—including Medicaid—before you even start. We'll match you with the right therapist on day one."
  },
  {
    title: "Understanding Your Unique Needs",
    desc: "During the first sessions, we take the time to truly understand your history, behavior, and what you need to feel better."
  },
  {
    title: "Your Custom Healing Plan",
    desc: "Collaborate to design a customized roadmap tailored to you, establishing clear objectives for therapy and practical at-home strategies."
  },
  {
    title: "Seeing Real Changes at Home",
    desc: "Engage in regular sessions utilizing proven methods to build coping skills, track your improvement, and adjust strategies as you grow."
  }
];"""

new_process = """const processSteps = [
  {
    title: "Let's Talk (Stress-Free Onboarding)",
    desc: "We handle the paperwork and verify your insurance coverage—including Medicaid. We'll schedule your psychiatric evaluation without the hassle."
  },
  {
    title: "Deep-Dive Evaluation",
    desc: "During your appointment, our provider will conduct a thorough, unhurried review of your medical history, current symptoms, and previous treatments."
  },
  {
    title: "Your Clear Diagnosis",
    desc: "We break down your assessment results in plain English, giving you clarity and a definitive diagnosis you can finally understand."
  },
  {
    title: "Your Custom Treatment Plan",
    desc: "Collaborate on a tailored medical roadmap. We'll monitor your progress and safely adjust medications until you feel like yourself again."
  }
];"""
# The old_process in IndividualTherapyClient is actually:
#  {
#    title: "Initial Consultation",
#    desc: "We handle the paperwork and verify your insurance coverage—including Medicaid—before you even start. We'll match you with the right therapist on day one."
#  },
#  {
#    title: "Comprehensive Assessment",
#    desc: "During your first session, your therapist will conduct a thorough evaluation of your mental health history, current challenges, and personal goals."
#  },
# Let's use regex or direct replace based on actual content
import sys
content = re.sub(r'const processSteps = \[.*?\];', new_process, content, flags=re.DOTALL)


# CTA Banner
content = content.replace("Take Back Your Life with <br className=\"hidden md:block\" />", "Get the Right Diagnosis with <br className=\"hidden md:block\" />")
content = content.replace("Take the first step", "Don't Wait Another Day")
content = content.replace("Start feeling better <br className=\"hidden md:block\" />", "Start finding the right answers <br className=\"hidden md:block\" />")
content = content.replace("<span className=\"font-instrument-serif italic text-yellow-200 font-normal\">this week.</span>", "<span className=\"font-instrument-serif italic text-yellow-200 font-normal\">for your mental health.</span>")
content = content.replace("You don't have to figure this out alone. Schedule your first appointment today and let our Darby, PA specialists help you move forward.", "You don't have to navigate confusing symptoms alone. Schedule your psychiatric evaluation today and let our Darby, PA specialists help you take control of your treatment.")

# FAQs
new_faqs = """const faqs = [
    {
      question: "What happens during a psychiatric evaluation in Darby?",
      answer: "A psychiatric evaluation at Sunrise Human Care is a comprehensive assessment where a licensed medical professional reviews your mental health history, symptoms, and lifestyle to provide an accurate diagnosis and treatment plan."
    },
    {
      question: "How is this different from regular therapy?",
      answer: "While therapy focuses on talking through emotional and behavioral challenges, a psychiatric evaluation is a medical assessment designed to diagnose mental health conditions and determine if medication is a safe, effective option for you."
    },
    {
      question: "Will I definitely be prescribed medication?",
      answer: "Not necessarily. Medication is only prescribed if it is clinically appropriate and aligns with your personal goals. We explore all treatment options, including lifestyle changes and coordinated therapy."
    },
    {
      question: "How long does the evaluation take?",
      answer: "Initial psychiatric evaluations typically take 60 to 90 minutes. This gives our providers ample time to understand your complete history without rushing, ensuring a highly accurate diagnosis."
    },
    {
      question: "Does your psychiatric clinic in PA accept Medicaid?",
      answer: "Yes, our psychiatric services accept Medicaid to ensure critical medical mental health care is accessible to the Darby and Delaware County community. We will verify your benefits before your appointment."
    }
];"""
content = re.sub(r'const faqs = \[.*?\];', new_faqs, content, flags=re.DOTALL)
content = content.replace('Individual Therapy <span className="font-instrument-serif italic text-orange-500">FAQs.</span>', 'Psychiatric Evaluation <span className="font-instrument-serif italic text-orange-500">FAQs.</span>')

# Component Name
content = content.replace('IndividualTherapyClient', 'PsychiatricEvaluationsClient')

with open('/workspace/src/app/psychiatric-evaluations-darby-pa/PsychiatricEvaluationsClient.tsx', 'w') as f:
    f.write(content)

print("Psych update complete")
