import re

with open('/workspace/src/app/individual-therapy-darby-pa/IndividualTherapyClient.tsx', 'r') as f:
    content = f.read()

# Replace Image
content = content.replace(
    'https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918057/cropped-shot-of-a-man-having-a-therapeutic-session-2026-03-25-02-43-30-utc_bzrrq0.jpg',
    'https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918385/doctor-give-advice-about-medicine-or-vitamin-to-el-2026-01-08-05-55-04-utc_fvofy1.jpg'
)
content = content.replace('alt="Individual Therapy in Darby PA"', 'alt="Medication Management in Darby PA"')

# Hero Section
content = content.replace('Personalized Counseling in PA', 'Safe, Effective Psychiatric Care')
content = content.replace('Take Back Your Life with', 'Find the Right Balance with')
content = content.replace('Individual Therapy in Darby, PA', 'Medication Management in Darby, PA')
content = content.replace('One-on-one counseling in Darby, PA. Learn practical tools to reduce anxiety, overcome depression, and regain control of your daily life in a 100% confidential environment.', 'Stop struggling with side effects and treatments that don\'t work. Get a safe, personalized medication plan from psychiatric specialists who monitor your progress closely.')

# Section 1
content = content.replace('Why Choose Sunrise', 'Why Choose Sunrise')
content = content.replace('Therapy tailored to your exact needs, <br className="hidden md:block" /><span className="font-instrument-serif italic text-orange-500">not a textbook.</span>', 'Medication designed for your biology, <br className="hidden md:block" /><span className="font-instrument-serif italic text-orange-500">not a one-size-fits-all approach.</span>')
content = content.replace("Therapy isn't just about talking—it's about taking your life back. When you partner with a licensed expert at Sunrise Human Care in Darby, PA, you get more than a confidential space. You gain a dedicated guide who will help you untangle your thoughts, build practical coping skills, and empower you to finally step back into a life that feels entirely your own.", "Finding the right psychiatric medication shouldn't feel like a guessing game. When you partner with our licensed prescribers in Darby, PA, you gain a dedicated medical team who will carefully evaluate your symptoms, adjust your prescriptions safely, and ensure your treatment actually improves your daily life.")

# Cards in Bento
content = content.replace('Work with fully licensed, state-certified therapists in Delaware County who specialize in approaches that actually work for your family.', 'Work with fully licensed, state-certified psychiatric providers who prioritize your safety and long-term health above all else.')
content = content.replace('Strategies That Actually Work', 'Precise Adjustments')
content = content.replace('We use proven methods like Family Systems Therapy so you see measurable, real-world progress in your home.', 'We carefully monitor your progress and make precise, science-backed adjustments to minimize side effects and maximize relief.')
content = content.replace('Tailored to Your Unique Story', 'Tailored to Your Biology')
content = content.replace("Your family's roadmap is tailored specifically to your unique dynamic, communication styles, and shared goals.", 'Your prescription plan is customized to your unique genetics, lifestyle, and overall medical history.')

# Conditions
content = content.replace('Targeted Relief', 'Targeted Medical Relief')
content = content.replace('Find relief from the weight of <br />', 'Find the right medication for <br />')
content = content.replace('<span className="font-instrument-serif italic text-orange-500">everyday struggles.</span>', '<span className="font-instrument-serif italic text-orange-500">complex symptoms.</span>')
content = content.replace("You don't have to carry this burden alone. Our specialists in Darby, PA use proven, evidence-based methods to help you break free from emotional pain and get back to living fully.", "You don't have to settle for treatments that leave you feeling numb or exhausted. Our psychiatric specialists in Darby, PA provide careful medication management for a wide range of conditions.")

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
                  { title: "Treatment-Resistant Depression", icon: Sparkles, desc: "Find the right antidepressant to lift the heavy fog without the frustrating side effects." },
                  { title: "Severe Anxiety & Panic", icon: Shield, desc: "Stabilize your nervous system with safe, non-habit-forming medications designed to quiet your racing mind." },
                  { title: "Adult & Child ADHD", icon: Lightbulb, desc: "Regain your focus and productivity. We safely prescribe and monitor stimulant and non-stimulant ADHD treatments." },
                  { title: "Bipolar & Mood Instability", icon: Star, desc: "Smooth out the unpredictable highs and lows with a carefully managed mood stabilizer regimen." },
                  { title: "Insomnia & Sleep Issues", icon: Brain, desc: "Get the rest your brain needs to heal. We provide targeted medical support to restore healthy, natural sleep patterns." },
                  { title: "Safe Tapering & Transition", icon: ArrowRight, desc: "Want to stop or change your current meds? We provide medical supervision to help you transition safely and comfortably." }
                ].map((item, i) => ("""
content = content.replace(old_grid, new_grid)

# Clinical Excellence -> How We Work
content = content.replace("Discover Proven Therapies <br className=\"hidden md:block\" />", "Discover a Prescribing Approach <br className=\"hidden md:block\" />")
content = content.replace("That Deliver Real Results", "That Prioritizes Your Wellbeing")
content = content.replace("Stop guessing with your mental health. We exclusively use scientifically proven, evidence-based practices (EBPs) tailored to your unique mind—ensuring you experience measurable progress, faster.", "Stop enduring trial-and-error treatments. Your brain chemistry is unique, which is why we use evidence-based psychiatric protocols to ensure you receive the safest, most effective medical care possible.")

old_methods = """                        {[
                            { title: "Cognitive Behavioral Therapy (CBT)", desc: "Rewire your mind for success. Stop negative thought loops in their tracks and conquer anxiety and depression using the clinical gold standard." },
                            { title: "Dialectical Behavior Therapy (DBT)", desc: "Regain emotional control. Learn powerful, practical skills to live in the present moment, manage intense feelings, and build healthier relationships." },
                            { title: "Mindfulness-Based Therapy", desc: "Find peace in the chaos. Master scientifically proven mindfulness techniques that quiet mental noise and dramatically reduce daily distress." },
                            { title: "Solution-Focused Brief Therapy", desc: "Get unstuck, fast. Stop dwelling on past problems and start building concrete, actionable solutions for your future in fewer sessions." }
                        ].map((method, idx) => ("""

new_methods = """                        {[
                            { title: "Comprehensive Review", desc: "We look at the full picture, including your past prescriptions, medical history, and how your body metabolizes medication." },
                            { title: "Conservative Prescribing", desc: "Start low and go slow. We believe in using the minimum effective dose to get you the best results with the fewest side effects." },
                            { title: "Continuous Monitoring", desc: "We don't just write a script and disappear. We schedule regular follow-ups to track your progress and make necessary adjustments." },
                            { title: "Collaborative Care", desc: "A unified approach. Our psychiatric providers work directly with your therapists to ensure your medication and counseling are perfectly aligned." }
                        ].map((method, idx) => ("""
content = content.replace(old_methods, new_methods)

# Process Steps
new_process = """const processSteps = [
  {
    title: "Let's Talk (Stress-Free Onboarding)",
    desc: "We handle the paperwork and verify your insurance coverage—including Medicaid. We'll schedule your medication consultation without the hassle."
  },
  {
    title: "Comprehensive Medical Review",
    desc: "During your appointment, our provider will conduct a thorough, unhurried review of your current symptoms and medication history."
  },
  {
    title: "Your Custom Prescription Plan",
    desc: "Collaborate on a tailored medical roadmap. We clearly explain how your new medication works, what to expect, and how to take it safely."
  },
  {
    title: "Ongoing Support & Adjustments",
    desc: "Engage in regular follow-up visits where we monitor your progress, manage any side effects, and safely adjust your dosage until you feel like yourself again."
  }
];"""
content = re.sub(r'const processSteps = \[.*?\];', new_process, content, flags=re.DOTALL)

# CTA Banner
content = content.replace("Take the first step", "Don't Settle For Less")
content = content.replace("Your journey to wellness <br className=\"hidden md:block\" />", "Start finding the right balance <br className=\"hidden md:block\" />")
content = content.replace("<span className=\"font-instrument-serif italic text-yellow-200 font-normal\">begins here</span>", "<span className=\"font-instrument-serif italic text-yellow-200 font-normal\">for your mental health.</span>")
content = content.replace("Our compassionate team is ready to support you. Schedule an appointment today and discover a sanctuary for healing and growth in Darby, PA.", "You don't have to navigate confusing side effects alone. Schedule your medication management consultation today and let our Darby, PA specialists help you take control of your treatment.")

# FAQs
new_faqs = """const faqs = [
    {
      question: "What happens during a medication management appointment?",
      answer: "Our psychiatric provider will review your current symptoms, medical history, and any past medications to determine the safest, most effective prescription plan for you."
    },
    {
      question: "Will I be forced to take medication?",
      answer: "Never. Medication is always a collaborative choice. We explain all your options, including the benefits and potential side effects, so you can make an informed decision."
    },
    {
      question: "How often will I need to see my provider?",
      answer: "Initially, you may see your provider every 2 to 4 weeks to monitor your body's response to a new medication. Once you are stable, appointments are typically spaced out to every 1 to 3 months."
    },
    {
      question: "Can I do both therapy and medication management at Sunrise?",
      answer: "Yes! We highly recommend a combined approach. Our prescribers and therapists work together under one roof to provide you with seamless, comprehensive care."
    },
    {
      question: "Does your clinic in PA accept Medicaid for prescriptions?",
      answer: "Yes, our psychiatric services accept Medicaid. We will verify your benefits before your appointment and work with your pharmacy to ensure your medications are covered."
    }
];"""
content = re.sub(r'const faqs = \[.*?\];', new_faqs, content, flags=re.DOTALL)
content = content.replace('Individual Therapy <span className="font-instrument-serif italic text-orange-500">FAQs.</span>', 'Medication Management <span className="font-instrument-serif italic text-orange-500">FAQs.</span>')

# Component Name
content = content.replace('IndividualTherapyClient', 'MedicationManagementClient')

with open('/workspace/src/app/medication-management-darby-pa/MedicationManagementClient.tsx', 'w') as f:
    f.write(content)

print("Meds update complete")
