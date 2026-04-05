"use client";

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer/Footer';
import SEOHead from '@/components/SEOHead';
import SchemaMarkup from '@/components/SchemaMarkup';
import Script from 'next/script';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";
import SectionTag from '@/components/ui/section-tag';
import CurveTransition from '@/components/ui/CurveTransition';
import { ChevronDown, Search, MessageCircle, Shield, Calendar, Heart, Zap, Brain, Users } from 'lucide-react';

const faqCategories = [
  {
    id: 'general',
    label: 'General',
    icon: MessageCircle,
    questions: [
      {
        question: "What mental health services do you offer at your Darby, PA clinic?",
        answer: "We provide comprehensive mental health care in Darby, including individual therapy, couples counseling, group therapy, family counseling, psychiatric evaluations, and medication management. Our licensed mental health professionals address various conditions such as anxiety, depression, PTSD, ADHD, and substance use disorders, with treatment plans tailored to each client's unique needs and goals."
      },
      {
        question: "How do I know if I need to seek help from a mental health professional?",
        answer: "If you're experiencing persistent feelings of sadness, anxiety, anger, or if these emotions interfere with daily activities and relationships, it may be beneficial to consult a mental health professional. Other signs include changes in sleep or appetite, decreased energy, difficulty concentrating, withdrawal from social activities, or thoughts of harming yourself or others. Our therapy sessions in Darby provide a safe space to address these concerns."
      },
      {
        question: "What should I expect during my first visit to your clinic?",
        answer: "During your initial visit to our Darby mental health clinic, our clinicians will conduct a comprehensive assessment to understand your needs. This evaluation includes discussing your concerns, history, symptoms, and goals for treatment. We'll explain our approach to therapy, answer your questions, and collaborate with you to create a personalized treatment plan. The first session typically lasts about 60 minutes in a comfortable, confidential environment."
      },
      {
        question: "Do you offer virtual therapy sessions?",
        answer: "Yes, we offer virtual therapy sessions for individuals who prefer remote care. Our telehealth services provide a secure and convenient way to access therapy from the comfort of your home. Our virtual mental health care follows the same high standards as our in-person sessions, allowing clients in Darby, Upper Darby, Yeadon and beyond to receive quality care regardless of mobility limitations, scheduling constraints, or health concerns."
      },
      {
        question: "What steps should I take if I or someone I know is in crisis?",
        answer: "If you or someone you know is struggling or in crisis, help is available immediately. Call or text 988 to speak with a trained crisis counselor any time of day or night. For emergencies that present an immediate danger, please call 911 or go to your nearest emergency room. After the immediate crisis, contact our Darby clinic at (814) 620-2162 for follow-up mental health care and support."
      },
      {
        question: "What conditions do you specialize in?",
        answer: "We specialize in treating Anxiety Disorders, Depression, Bipolar Disorder, PTSD, OCD, ADHD, Schizophrenia, and more. Each treatment plan is personalized to your unique needs."
      },
      {
        question: "How long are the therapy sessions?",
        answer: "Standard individual therapy sessions typically last 45 to 60 minutes, while psychiatric evaluations may take longer."
      },
      {
        question: "How far is the Darby clinic from my location, PA?",
        answer: "Our Darby clinic is located just 1.5 miles from Yeadon, which is typically a quick 5-minute drive. This makes it a very convenient option for residents seeking in-person therapy."
      }
    ]
  },
  {
    id: 'therapy',
    label: 'Therapy & Treatments',
    icon: Heart,
    questions: [
      {
        question: "What happens during a psychiatric evaluation?",
        answer: "A psychiatric evaluation typically begins with a comprehensive discussion about your symptoms, concerns, and goals. We'll explore your medical history, family history, lifestyle factors, and current life circumstances. You may complete some standardized assessments, and we'll discuss our findings and treatment recommendations."
      },
      {
        question: "How long does a psychiatric evaluation take?",
        answer: "Initial evaluations usually take 60-90 minutes to ensure we gather all necessary information. Follow-up appointments are typically 30-45 minutes. Complex cases may require additional sessions for a complete assessment."
      },
      {
        question: "What should I bring to my evaluation?",
        answer: "Please bring a list of current medications, relevant medical records, previous psychiatric records if available, and notes about your symptoms or concerns. Having this information ready helps us provide the most accurate assessment."
      },
      {
        question: "Will I receive a diagnosis after my evaluation?",
        answer: "If appropriate, we will provide diagnostic information during your evaluation. However, some conditions may require additional sessions or information for a definitive diagnosis. We'll always explain our findings and discuss treatment options with you."
      },
      {
        question: "What is the difference between therapy and a psychiatric evaluation?",
        answer: "Therapy (or counseling) involves regular sessions to discuss feelings, behaviors, and coping strategies. A psychiatric evaluation is a diagnostic assessment performed by a medical professional who can prescribe medications to help manage your symptoms."
      },
      {
        question: "Can I receive both therapy and medication management at your clinic?",
        answer: "Absolutely. In fact, we encourage it. Research shows that combining talk therapy with appropriate medication management often yields the best outcomes for conditions like depression, anxiety, and ADHD."
      },
      {
        question: "How long will I need to take psychiatric medication?",
        answer: "The duration of medication treatment varies depending on your condition, symptoms, and response. Some individuals may need short-term medication during specific episodes, while others benefit from longer-term treatment for chronic conditions. We regularly review the need for continued medication and adjust treatment plans accordingly, always prioritizing your well-being and quality of life."
      },
      {
        question: "What if I experience side effects from my medication?",
        answer: "Side effects are taken very seriously in our practice. While some side effects may be temporary as your body adjusts, we carefully monitor any reactions you experience. We can often adjust dosages or switch to alternative medications if needed. It's important to communicate any concerns about side effects promptly, and we provide detailed guidance on managing potential side effects."
      },
      {
        question: "How often will I need to come in for medication management appointments?",
        answer: "Initially, appointments are typically more frequent (every 2-4 weeks) as we establish the right medication and dosage. Once your symptoms are stable, visits may be scheduled less frequently (every 1-3 months). The schedule is always personalized based on your specific needs, response to medication, and overall stability."
      },
      {
        question: "Can I combine medication with therapy?",
        answer: "Yes, and we often recommend this combined approach. Research shows that for many mental health conditions, the combination of medication and therapy provides better outcomes than either treatment alone. We collaborate closely with therapists to ensure coordinated care and optimal results."
      },
      {
        question: "What can we expect from couples counseling in Darby?",
        answer: "Couples counseling in Darby at Sunrise Human Care offers a tailored approach where licensed therapists guide partners to improve communication, resolve conflicts, and build a stronger bond in a confidential, supportive environment. We help you navigate challenges together rather than against each other."
      },
      {
        question: "Is couples counseling effective for long-term relationships?",
        answer: "Yes, couples counseling helps long-term partners address entrenched patterns, rebuild trust, and rediscover connection. By utilizing proven methods like The Gottman Method and EFT, we assist couples in overcoming emotional distance and reigniting intimacy, regardless of how long they've been together."
      },
      {
        question: "Can unmarried couples benefit from relationship therapy?",
        answer: "Absolutely. Relationship therapy supports all committed relationships. Whether you are dating, engaged, or living together, our therapists can help unmarried couples strengthen their partnership, navigate life transitions, and lay a solid foundation for the future."
      },
      {
        question: "How many sessions are needed for couples therapy?",
        answer: "The duration of couples therapy depends entirely on your specific goals and challenges. Some couples see significant progress through short-term, solution-focused therapy in 8-12 sessions, while others dealing with deeper issues like infidelity or severe communication breakdowns may engage longer for lasting transformation."
      },
      {
        question: "Do all family members need to attend therapy sessions?",
        answer: "Ideally, all household members participate, as family therapy works best when everyone is involved. However, we can begin with available family members and incorporate others as therapy progresses. Our therapists are skilled at adapting the process to your family's specific situation."
      },
      {
        question: "How long does family therapy typically last?",
        answer: "Family therapy generally ranges from 8-20 sessions, depending on your family's specific needs and goals. Some families complete treatment in a few months, while others benefit from longer-term counseling. We'll discuss expected timeframes during your initial consultation."
      },
      {
        question: "Will the therapist take sides in family conflicts?",
        answer: "No, our therapists remain neutral and do not take sides. Their role is to help all family members communicate effectively, understand each other's perspectives, and work together toward positive change."
      },
      {
        question: "Is there a 'normal' way to grieve?",
        answer: "There is no single 'normal' way to grieve. Grief is highly individual and influenced by many factors including your relationship with what was lost, cultural background, coping style, and available support. What's important is finding healthy ways to express and process your grief that work for you."
      },
      {
        question: "How do I know if I need grief therapy?",
        answer: "Consider seeking grief therapy if your grief feels overwhelming or unbearable, if you're having trouble functioning in daily life, if you feel stuck in your grief, if you're experiencing complicated grief symptoms like persistent disbelief or intense yearning that doesn't ease over time, or if you lack adequate support from others."
      },
      {
        question: "How long does grief therapy typically last?",
        answer: "The duration of grief therapy varies based on individual needs and circumstances. Some people benefit from short-term therapy of 8-12 sessions, while others may need longer-term support, especially for complicated grief. Therapy can be continuous or intermittent, with some clients returning around significant dates or when new aspects of grief emerge."
      },
      {
        question: "Do I have to talk about my trauma in detail?",
        answer: "Not necessarily. While traditional talk therapy involves discussing the event, specialized trauma therapies like EMDR (Eye Movement Desensitization and Reprocessing) often require very little verbal description of the traumatic event. Our priority is your safety and emotional regulation; we will never force you to recount details before you are ready."
      },
      {
        question: "Will trauma therapy make my symptoms worse?",
        answer: "It is common to experience a temporary increase in distress when you first begin processing trauma—similar to cleaning out a wound. However, our highly trained therapists focus heavily on 'resourcing' (teaching you grounding and coping skills) before any trauma processing begins, ensuring you have the tools to manage distress safely."
      },
      {
        question: "How long does trauma therapy take?",
        answer: "The timeline for trauma recovery is unique to each individual. Some clients see significant symptom reduction in 8-12 sessions of targeted therapy like EMDR, while others benefit from longer-term support for complex trauma."
      },
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
        question: "What if I'm nervous about starting therapy for the first time?",
        answer: "It is completely normal to feel nervous or hesitant about starting individual therapy. Our therapists prioritize creating a warm, non-judgmental, and secure environment. We move at a pace that feels comfortable for you, ensuring you feel safe every step of the way."
      },
      {
        question: "How do I know if my relationship would benefit from therapy?",
        answer: "Consider relationship therapy if you're experiencing recurring conflicts that don't get resolved, communication problems, emotional disconnection, trust issues, intimacy concerns, or if you're navigating major life transitions that are straining your relationship. It's best to seek help early rather than waiting until problems become severe."
      },
      {
        question: "Does relationship therapy only work for couples on the brink of separation?",
        answer: "No, relationship therapy can benefit relationships at any stage. While it can help relationships in crisis, it's also valuable for relatively healthy relationships that want to enhance communication, deepen connection, or navigate transitions proactively. Many couples use therapy as a relationship wellness tool rather than only as crisis intervention."
      },
      {
        question: "How long does relationship therapy typically take?",
        answer: "The duration varies depending on the issues being addressed, the goals for therapy, and how actively partners engage in the process. Some couples attend 10-12 sessions and achieve their goals, while others may benefit from longer-term therapy, especially when addressing complex issues or recovering from significant relationship trauma."
      },
      {
        question: "What is a Dual Diagnosis?",
        answer: "A dual diagnosis (or co-occurring disorder) occurs when a person has both a substance use disorder and a mental health condition (like Depression, Anxiety, or PTSD) simultaneously. Effective treatment must address both conditions at the same time, as they often fuel each other."
      },
      {
        question: "Do I need residential rehab or can I do outpatient therapy?",
        answer: "It depends on the severity of the addiction and your physical health. Outpatient therapy is highly effective for many individuals, allowing them to maintain work and family life while receiving treatment. However, if medical detox is required, we will help coordinate a referral to an inpatient facility first."
      },
      {
        question: "Can psychiatric medication help with substance use?",
        answer: "Yes. Medication-Assisted Treatment (MAT) can be a crucial component of recovery for certain substance use disorders (like alcohol or opioid use). Additionally, properly medicating underlying psychiatric conditions (like severe anxiety or ADHD) often drastically reduces the urge to self-medicate with drugs or alcohol."
      },
      {
        question: "What happens if I relapse?",
        answer: "We view relapse as a symptom of a chronic condition, not a moral failure. If a relapse occurs, we do not judge or shame you. Instead, we use it as an opportunity to understand the trigger, adjust your treatment plan, and strengthen your coping skills to prevent future occurrences."
      },
      {
        question: "Is in-person therapy better than virtual apps like Talkspace?",
        answer: "While virtual therapy is convenient for some, in-person therapy offers a deeper level of connection, allowing therapists to observe body language and build stronger therapeutic alliances. For complex issues, children, or severe mental health conditions, in-person care is often clinically recommended."
      },
      {
        question: "Will I always see the same therapist at Sunrise Human Care?",
        answer: "Yes. Unlike some large apps where you might be reassigned or have high therapist turnover, Sunrise Human Care guarantees continuity of care. You will build a long-term relationship with your dedicated therapist."
      }
    ]
  },
  {
    id: 'conditions',
    label: 'Conditions',
    icon: Brain,
    questions: [
      {
        question: "Is schizophrenia treatable?",
        answer: "Yes. While schizophrenia is a chronic condition without a permanent cure, it is highly treatable. With the right combination of antipsychotic medication, therapy, and social support, many individuals experience a significant reduction in symptoms and are able to lead independent, fulfilling lives."
      },
      {
        question: "Does schizophrenia mean having multiple personalities?",
        answer: "No. This is a common misconception. Schizophrenia literally translates to 'split mind,' but it refers to a split from reality, not a split into multiple personalities. Dissociative Identity Disorder (DID) is a completely separate condition."
      },
      {
        question: "Will someone with schizophrenia need to take medication forever?",
        answer: "In most cases, long-term or lifelong medication is necessary to prevent relapse, similar to how someone with diabetes needs daily insulin. Antipsychotic medications are crucial for keeping the neurochemical balance in the brain stable. Abruptly stopping medication often leads to a severe return of symptoms."
      },
      {
        question: "How can family members help someone with schizophrenia?",
        answer: "Family support is one of the strongest predictors of successful recovery. Families should educate themselves on the illness, help ensure the individual adheres to their medication schedule, maintain a low-stress home environment, and participate in family therapy to learn how to communicate effectively during a crisis."
      },
      {
        question: "What causes schizophrenia?",
        answer: "The exact cause is unknown, but it is believed to be a combination of genetics, brain chemistry (specifically dysregulation of the neurotransmitter dopamine), and environmental factors. Severe stress, trauma, or substance use (especially high-THC cannabis) during teen years can trigger the onset in individuals who are genetically predisposed."
      },
      {
        question: "Are somatic symptoms 'all in my head'?",
        answer: "No, somatic symptoms are real physical experiences, not imagined or fabricated. The pain, fatigue, or other physical sensations you feel are genuine. Somatic symptom disorders involve how the brain processes and responds to physical sensations, not whether the sensations exist. Our approach validates your physical experience while addressing psychological factors that may be intensifying symptoms."
      },
      {
        question: "How is psychological treatment helpful for physical symptoms?",
        answer: "Psychological treatment helps by addressing how you interpret, respond to, and cope with physical symptoms. It can reduce symptom-related anxiety, break cycles of symptom focusing and avoidance, develop skills for managing discomfort, address emotional factors that may exacerbate symptoms, and improve overall functioning despite persistent symptoms."
      },
      {
        question: "Will I still need medical care while in therapy for somatic symptoms?",
        answer: "Yes, continuing appropriate medical care is important. We work collaboratively with your healthcare providers to ensure comprehensive care. Psychological treatment for somatic symptoms complements rather than replaces medical care. We can help you communicate effectively with medical providers and make informed decisions about your health care."
      },
      {
        question: "How is OCD different from being a perfectionist or liking things organized?",
        answer: "While perfectionism involves high standards, OCD involves unwanted, intrusive thoughts (obsessions) that cause significant distress. Compulsive behaviors are performed not out of preference, but out of a desperate need to reduce anxiety or prevent a feared outcome. OCD symptoms typically interfere substantially with daily functioning."
      },
      {
        question: "Is Exposure and Response Prevention (ERP) therapy difficult?",
        answer: "ERP is challenging because it involves intentionally facing feared situations and tolerating anxiety without performing compulsions. However, it is done gradually. We start with less difficult situations and progress at your pace. Most clients find that the temporary discomfort of ERP is well worth the long-term freedom it provides."
      },
      {
        question: "How long does OCD treatment typically take?",
        answer: "The duration of treatment varies depending on OCD severity and individual factors. Many clients see significant improvement within 12 to 20 weeks of regular ERP sessions and medication management. We provide a personalized timeline after your comprehensive initial psychiatric assessment."
      },
      {
        question: "Can medication help with OCD?",
        answer: "Yes, absolutely. Certain medications, primarily specific SSRIs (Selective Serotonin Reuptake Inhibitors) given at higher doses than typically used for depression, are highly effective for OCD. Our psychiatric providers specialize in finding the right medication balance to complement your therapy."
      },
      {
        question: "Can OCD be cured completely?",
        answer: "OCD is considered a chronic neurobiological condition, meaning there is no permanent 'cure'. However, with proper evidence-based treatment (ERP and medication), many people achieve significant symptom reduction and even full remission. The goal is to help you manage symptoms so effectively that OCD no longer dictates your life choices."
      },
      {
        question: "How do I know if I have a sleep disorder?",
        answer: "Occasional restless nights are normal. However, if you consistently have trouble falling asleep, staying asleep, or if you wake up feeling unrefreshed and exhausted for more than a month, it is likely a clinical sleep disorder. If your sleep issues are affecting your mood, focus, or ability to work, it is time to seek professional evaluation."
      },
      {
        question: "What is CBT-I and how does it work?",
        answer: "Cognitive Behavioral Therapy for Insomnia (CBT-I) is the gold standard, first-line treatment for chronic insomnia. Unlike sleeping pills, which only provide a temporary fix, CBT-I addresses the underlying thoughts and behaviors that ruin sleep. It involves sleep restriction, stimulus control, and cognitive restructuring to literally retrain your brain to sleep."
      },
      {
        question: "Do I have to take sleeping pills?",
        answer: "Not necessarily. While psychiatric medication can be a helpful short-term tool to break a severe cycle of insomnia, our goal is long-term, sustainable sleep without reliance on heavy sedatives. We strongly prioritize behavioral interventions (like CBT-I) and, when necessary, utilize non-habit-forming medications to support your sleep architecture."
      },
      {
        question: "Can mental health issues cause sleep disorders?",
        answer: "Absolutely. The relationship is highly bidirectional. Conditions like Anxiety, Depression, and PTSD frequently cause severe insomnia or hypersomnia (oversleeping). Conversely, chronic sleep deprivation can trigger or drastically worsen mental health conditions. We treat both the sleep disorder and the underlying mental health condition simultaneously."
      },
      {
        question: "What is Sleep Apnea and do you treat it?",
        answer: "Sleep Apnea is a physical medical condition where breathing repeatedly stops and starts during sleep. While our psychiatric team does not prescribe CPAP machines, we frequently screen for Sleep Apnea during our psychiatric evaluations. If we suspect Sleep Apnea is the root cause of your mental health symptoms, we will coordinate a referral to a specialized sleep medicine clinic while continuing to support your mental health."
      },
      {
        question: "Is Borderline Personality Disorder (BPD) treatable?",
        answer: "Yes. Historically, BPD was considered highly difficult to treat, but modern therapies—specifically Dialectical Behavior Therapy (DBT)—have proven to be incredibly effective. With committed treatment, many individuals with BPD experience a massive reduction in symptoms and are able to build stable, fulfilling relationships."
      },
      {
        question: "How is BPD different from Bipolar Disorder?",
        answer: "While both involve severe mood swings, they are fundamentally different. Bipolar mood swings last for days, weeks, or months and often happen independently of external events. BPD mood swings are highly reactive to environmental triggers (especially interpersonal conflict) and can shift multiple times within a single day."
      },
      {
        question: "What is 'splitting' in BPD?",
        answer: "Splitting is a common defense mechanism in BPD where an individual views people, situations, or themselves in extreme black-and-white terms. Someone may be seen as perfect and idealized one moment, and completely villainized the next. Therapy helps build 'gray area' thinking to stabilize relationships."
      },
      {
        question: "Is medication used to treat BPD?",
        answer: "There is no specific medication approved to cure BPD itself. However, psychiatric medication is frequently used to manage the severe co-occurring symptoms, such as debilitating anxiety, depression, or severe mood instability. The core treatment for BPD, however, is always long-term psychotherapy."
      },
      {
        question: "Does BPD stem from childhood trauma?",
        answer: "In many cases, yes. A large percentage of individuals with BPD experienced severe childhood trauma, neglect, or invalidating environments where their emotional needs were chronically dismissed. However, genetics and brain structure (specifically an overactive amygdala) also play a significant role."
      },
      {
        question: "What is the difference between Bipolar I and Bipolar II?",
        answer: "Bipolar I Disorder involves severe manic episodes that last at least 7 days or require hospitalization, often accompanied by depressive episodes. Bipolar II Disorder involves less severe manic periods (called hypomania) alternating with deep depressive episodes. Both require professional treatment but may need different medication strategies."
      },
      {
        question: "Is medication always necessary to treat bipolar disorder?",
        answer: "For the vast majority of individuals, yes. Bipolar disorder is deeply rooted in brain chemistry. Mood stabilizers or antipsychotic medications are typically the cornerstone of treatment to prevent extreme highs and lows. Therapy is then used alongside medication to manage triggers, rebuild relationships, and develop coping skills."
      },
      {
        question: "Can bipolar disorder be cured?",
        answer: "Bipolar disorder is a lifelong, chronic condition and cannot be permanently 'cured'. However, it is highly treatable. With a consistent, customized treatment plan involving medication management and psychotherapy, most people with bipolar disorder can achieve long-term mood stability and lead incredibly successful, fulfilling lives."
      },
      {
        question: "What should family members know about supporting someone with bipolar disorder?",
        answer: "Family support is crucial. Family members should learn to recognize the early warning signs of both manic and depressive episodes. It's important to encourage treatment adherence, help maintain a calm environment with regular sleep schedules, and participate in family therapy to improve communication and boundaries."
      },
      {
        question: "Is bipolar disorder genetic?",
        answer: "Yes, bipolar disorder has one of the strongest genetic links of all psychiatric conditions. If you have a first-degree relative (parent or sibling) with bipolar disorder, your risk of developing the condition is significantly higher, though environmental factors and severe stress also play a role in triggering the onset."
      },
      {
        question: "Is ADHD a real condition or just a lack of discipline?",
        answer: "ADHD is a legitimate, highly researched neurodevelopmental condition. Brain imaging studies show distinct differences in the structure and function of brains in individuals with ADHD, particularly in areas controlling executive function. It is not caused by laziness, poor parenting, or a lack of discipline."
      },
      {
        question: "Do I have to take stimulant medication to treat ADHD?",
        answer: "Not necessarily. While stimulant medications (like Adderall or Ritalin) are often the most effective first-line treatment for managing symptoms, non-stimulant medications and behavioral therapies are also highly effective. We provide comprehensive evaluations to find the safest and best approach for your specific needs and medical history."
      },
      {
        question: "I was never diagnosed as a child. Can adults have ADHD?",
        answer: "Absolutely. Many adults with ADHD were never diagnosed in childhood, especially those who did not exhibit disruptive hyperactive behaviors. Adult ADHD often presents as chronic disorganization, missed deadlines, relationship issues, and persistent feelings of underachievement despite high intelligence."
      },
      {
        question: "How does therapy help with ADHD?",
        answer: "Therapy, particularly Cognitive Behavioral Therapy (CBT) adapted for ADHD, helps you develop practical executive functioning skills. We focus on building systems for time management, organization, and emotional regulation, while also addressing the anxiety and low self-esteem that often accompany living with unmanaged ADHD."
      },
      {
        question: "Is ADHD genetic?",
        answer: "Yes, ADHD has a very strong genetic component. Research indicates that if a parent has ADHD, their child has a significantly higher chance of also having the condition. It is one of the most highly heritable psychiatric disorders."
      },
      {
        question: "Is anxiety genetic?",
        answer: "Yes, there is a genetic component to anxiety disorders. Having a family member with an anxiety disorder can increase your risk. However, genetics are only one factor; environmental stressors, trauma, and brain chemistry also play significant roles."
      },
      {
        question: "Can therapy help with anxiety disorders?",
        answer: "Absolutely. Therapy, particularly Cognitive Behavioral Therapy (CBT), is considered the gold standard for anxiety treatment. It helps individuals identify and challenge anxious thoughts, develop coping strategies, and gradually face feared situations in a safe environment."
      },
      {
        question: "What is the difference between a panic attack and an anxiety attack?",
        answer: "A panic attack is sudden, intense, and often occurs without an obvious trigger, accompanied by severe physical symptoms like a racing heart and shortness of breath. An 'anxiety attack' is not a clinical term, but people usually use it to describe a period of intense worry and distress that builds gradually, often in response to a specific stressor."
      },
      {
        question: "How do I know if my anxiety is a disorder?",
        answer: "Occasional anxiety is a normal part of life. However, if your anxiety is persistent, difficult to control, out of proportion to the actual danger, and interferes with your daily activities, relationships, or work, it may be an anxiety disorder that requires professional treatment."
      },
      {
        question: "Will I need medication for my anxiety?",
        answer: "Not necessarily. Many people effectively manage anxiety through therapy and lifestyle changes alone. However, for moderate to severe anxiety, a combination of therapy and psychiatric medication (such as SSRIs or SNRIs) is often the most effective approach. Our providers will evaluate your specific needs."
      },
      {
        question: "How is depression different from just feeling sad?",
        answer: "While sadness is a normal human emotion triggered by difficult events, clinical depression is a persistent mood disorder. Sadness usually comes in waves and allows for moments of joy, whereas depression is a constant heavy cloud that affects your sleep, appetite, energy, and self-worth for weeks or months at a time."
      },
      {
        question: "Can therapy alone cure my depression?",
        answer: "For mild to moderate depression, therapy (especially Cognitive Behavioral Therapy) is often highly effective on its own. It helps you build coping skills and rewire negative thought patterns. However, for severe depression, a combination of therapy and medication is usually the gold standard of treatment."
      },
      {
        question: "How long does depression treatment take?",
        answer: "There is no set timeline, as it depends on the severity and type of depression. Many patients start noticing improvements in their sleep and energy levels within 4 to 6 weeks of starting treatment. Deeper emotional shifts often occur over 3 to 6 months of consistent therapy."
      },
      {
        question: "What if I'm too exhausted to even attend therapy?",
        answer: "Extreme fatigue is a core symptom of depression. We understand how hard it can be to take that first step. We offer telehealth appointments so you can begin treatment from the comfort of your home, removing the barrier of having to travel when you're feeling depleted."
      },
      {
        question: "Is depression genetic?",
        answer: "Genetics do play a role; if you have a first-degree relative with depression, your risk is higher. However, it's usually a combination of genetic vulnerability, brain chemistry, and environmental stressors (like trauma, loss, or chronic stress) that trigger a depressive episode."
      },
      {
        question: "How do I know if I or my loved one has an eating disorder?",
        answer: "Warning signs include a severe preoccupation with weight, food, calories, and body image; restrictive eating or skipping meals; frequent episodes of binge eating; purging behaviors (like vomiting or excessive exercise); and intense body dissatisfaction. If these thoughts and behaviors interfere with daily life, it is time for a professional assessment."
      },
      {
        question: "Do you treat severe Anorexia Nervosa?",
        answer: "We provide outpatient psychiatric care and therapy for eating disorders. However, severe Anorexia Nervosa often requires intensive medical stabilization or inpatient care if a patient is medically compromised. We conduct thorough assessments to determine the appropriate level of care and will coordinate with specialized inpatient facilities if necessary."
      },
      {
        question: "Can medication help with eating disorders?",
        answer: "Yes, psychiatric medication can be an important component of treatment, particularly for Binge Eating Disorder or Bulimia Nervosa, and to treat co-occurring conditions like Depression, Anxiety, or OCD that frequently accompany eating disorders. Our psychiatric team carefully manages medications to support your overall recovery."
      },
      {
        question: "How long does eating disorder treatment take?",
        answer: "Recovery from an eating disorder is typically a gradual, long-term process that varies based on the severity of the condition and individual needs. It requires consistency, patience, and a comprehensive approach. Many people require months to years of support to achieve full, sustainable recovery and a healthy relationship with food."
      },
      {
        question: "Is full recovery from an eating disorder possible?",
        answer: "Absolutely. While it is a challenging journey, many people achieve full recovery with the right professional support. Recovery involves normalizing eating behaviors, addressing the underlying emotional pain or trauma, and fundamentally changing how you view and value your body."
      },
      {
        question: "Is dissociation the same as having multiple personalities?",
        answer: "Dissociation exists on a spectrum. While Dissociative Identity Disorder (formerly called multiple personality disorder) involves distinct identity states, many people experience milder forms of dissociation like depersonalization (feeling detached from oneself) or derealization (feeling the world is unreal). All forms of dissociation involve some degree of disconnection from full awareness."
      },
      {
        question: "How long does treatment for dissociative disorders take?",
        answer: "Treatment for dissociative disorders is typically longer-term, often lasting several years, especially for more complex presentations like Dissociative Identity Disorder. The pace of treatment is determined by the client's needs and readiness, focusing first on stabilization before addressing traumatic material."
      },
      {
        question: "Can medication cure dissociative disorders?",
        answer: "There are no medications that specifically cure dissociation. However, psychiatric medications are highly effective in treating the severe anxiety, depression, or sleep disturbances that almost always accompany dissociative disorders. Therapy (such as EMDR or CBT) remains the primary treatment for the dissociation itself."
      },
      {
        question: "What causes dissociative disorders?",
        answer: "Dissociative disorders usually develop as a psychological response to severe trauma, particularly chronic physical, sexual, or emotional abuse during childhood. The dissociation serves as a survival mechanism, allowing the mind to detach from an overwhelmingly painful reality."
      },
      {
        question: "Can you get PTSD from something that isn't military combat?",
        answer: "Absolutely. While PTSD was initially recognized in veterans, it can develop after any event where you felt your life or safety (or the life/safety of others) was in danger. Common causes include car accidents, domestic abuse, sexual assault, medical trauma, childhood neglect, or sudden loss."
      },
      {
        question: "What is Complex PTSD (C-PTSD)?",
        answer: "Traditional PTSD is often linked to a single traumatic event (like an accident). Complex PTSD (C-PTSD) develops from chronic, prolonged, or repeated trauma from which escape was difficult or impossible—such as childhood abuse, domestic violence, or human trafficking. It includes PTSD symptoms plus severe difficulties with emotional regulation and self-worth."
      },
      {
        question: "Can PTSD ever go away completely?",
        answer: "Yes. With evidence-based treatment like EMDR or Trauma-Focused CBT, many individuals experience a complete remission of their PTSD symptoms. While the memory of the event remains, it loses its emotional charge and stops triggering the intense physical 'fight or flight' response, allowing you to reclaim your life."
      }
    ]
  },
  {
    id: 'insurance',
    label: 'Insurance & Appointments',
    icon: Shield,
    questions: [
      {
        question: "Which insurance plans are currently accepted at your Darby clinic?",
        answer: "We currently accept Medicaid for our mental health services in Darby. We understand the importance of accessible care and are committed to serving the Medicaid community with quality mental health treatment. Our staff can help verify your Medicaid benefits and guide you through the process for residents in Darby and nearby communities like Upper Darby and Yeadon."
      },
      {
        question: "How do I schedule an appointment at your Darby clinic?",
        answer: "To schedule an appointment for mental health care in Darby, please contact our office directly at (814) 620-2162 or use our website's appointment request form. Our friendly staff will guide you through the process, collect necessary information, and match you with the appropriate therapist. We offer flexible scheduling options, including evenings and weekends, to accommodate your busy lifestyle."
      },
      {
        question: "How long is the waitlist for new patients?",
        answer: "We currently have no waitlist and typically respond to all inquiries within 24 hours."
      },
      {
        question: "Do you accept Medicaid for therapy and psychiatry?",
        answer: "Yes, Sunrise Human Care Services exclusively accepts Medicaid. We believe high-quality mental health care should be accessible to everyone in Delaware County, without financial barriers."
      },
      {
        question: "How do I verify my insurance coverage?",
        answer: "Our intake specialists can help you verify your Medicaid benefits. Simply provide your information during the initial contact, and we will handle the rest."
      },
      {
        question: "Do you accept Medicaid for psychiatric evaluations?",
        answer: "Yes, we exclusively accept Medicaid and Medical Assistance. We provide expert psychiatric assessments with no waitlist to ensure you get the care you need promptly."
      },
      {
        question: "Are psychiatric evaluations covered by insurance?",
        answer: "Yes, Sunrise Human Care exclusively accepts Medicaid for psychiatric evaluations. Our team will verify your benefits and explain any coverage details before your appointment to ensure you receive the care you need."
      },
      {
        question: "Does marriage counseling PA accept insurance?",
        answer: "Yes, our marriage counseling PA services accept Medicaid to ensure that relationship support is accessible to the Darby and broader Delaware County community. Our administrative team will verify your benefits and clearly explain any coverage details prior to your first session."
      },
      {
        question: "Do you accept Medicaid for addiction therapy?",
        answer: "Yes, we exclusively accept Medicaid and Medical Assistance. We provide professional substance use treatment with no waitlist to help you start your recovery journey today."
      },
      {
        question: "Will my insurance cover psychiatric medication management?",
        answer: "We exclusively accept Medicaid for medication management services. Our staff will verify your coverage and discuss any potential costs before beginning treatment. We strive to make mental health care accessible and affordable for our community."
      },
      {
        question: "Does BetterHelp accept Medicaid in Pennsylvania?",
        answer: "No, BetterHelp does not accept Medicaid or Medicare. Sunrise Human Care, located in Darby, PA, exclusively accepts Medicaid, ensuring that high-quality mental health care is accessible and affordable for our community."
      }
    ]
  },
  {
    id: 'children-adolescents',
    label: 'Children & Adolescents',
    icon: Users,
    questions: [
      {
        question: "Do you offer services for children and teenagers?",
        answer: "Yes, we have specialized child and adolescent therapists on staff. We offer play therapy for younger children and cognitive behavioral approaches tailored specifically for teens navigating school, peer, and family challenges."
      },
      {
        question: "Are children included in family therapy?",
        answer: "Yes, children are included in our family therapy sessions as they're important members of the family system. Our experienced therapists adapt their approach based on children's ages, using age-appropriate techniques to ensure everyone can meaningfully participate."
      },
      {
        question: "How do I explain therapy to my child?",
        answer: "For younger children, we describe child therapy as a special place where they can play, talk, and learn about feelings. For teens, we explain that a therapist is someone who helps young people handle stress, emotions, and challenges. Our child therapists provide age-appropriate resources to help with this conversation."
      },
      {
        question: "Will I be involved in my child's therapy?",
        answer: "Yes, parent involvement is crucial to successful child therapy. While some sessions may be one-on-one with your child, our therapists regularly include parents for updates, education, and family sessions. The level of involvement varies based on your child's age and specific needs."
      },
      {
        question: "How long does child therapy typically last?",
        answer: "Treatment duration varies depending on your child's specific needs and goals. Some children benefit from short-term therapy (8-12 sessions), while others may need ongoing support. We'll discuss timeframes during the initial consultation and provide regular updates on progress."
      },
      {
        question: "How do you handle confidentiality with children and teens?",
        answer: "We balance a child's need for privacy with parents' right to information. We maintain confidentiality except in cases of safety concerns, but also work to facilitate healthy communication between children and parents about the therapeutic process."
      }
    ]
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-stone-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={cn(
          "font-barlow font-medium text-lg md:text-xl transition-colors duration-300",
          isOpen ? "text-orange-600" : "text-stone-800 group-hover:text-orange-500"
        )}>
          {question}
        </span>
        <div className={cn(
          "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300",
          isOpen ? "bg-orange-500 border-orange-500 text-stone-950 rotate-180" : "bg-white border-stone-200 text-stone-400 group-hover:border-orange-300 group-hover:text-orange-500"
        )}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 pr-12 text-stone-500 font-barlow leading-relaxed text-base md:text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState(faqCategories[0].id);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const currentCategory = faqCategories.find(cat => cat.id === activeTab);

  const filteredQuestions = useMemo(() => {
    if (!searchQuery) return currentCategory?.questions || [];
    return faqCategories
      .flatMap(cat => cat.questions)
      .filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [searchQuery, currentCategory]);

  return (
    <>
      <SchemaMarkup type="FAQPage" data={faqCategories.flatMap(cat => cat.questions)} />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow pt-28">
          {/* Hero Section */}
          <section className="relative py-20 md:py-32 bg-stone-900 overflow-hidden">
            <div className="absolute inset-0 z-0">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -mr-48 -mt-48" />
               <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -ml-48 -mb-48" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto text-center"
              >
                <div className="mb-6 flex justify-center">
                  <SectionTag className="border-white/20 text-white bg-white/10">Resource Center</SectionTag>
                </div>
                <h1 className="font-barlow font-bold text-4xl md:text-7xl text-white tracking-tighter leading-none mb-8">
                  Common <span className="font-instrument-serif italic text-orange-500 font-normal">Questions.</span> <br />
                  Clear <span className="font-instrument-serif italic text-orange-500 font-normal">Answers.</span>
                </h1>
                
                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto group">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 group-focus-within:text-orange-500 transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Search for questions (e.g., 'Medicaid', 'Telehealth')..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-full py-5 pl-14 pr-8 text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500/30 transition-all text-lg font-barlow"
                  />
                </div>
              </motion.div>
            </div>
            <CurveTransition fillColor="#ffffff" inverted className="z-20" />
          </section>

          {/* FAQ Content */}
          <section className="py-24 container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {!searchQuery ? (
                <div className="flex flex-col lg:flex-row gap-12">
                  {/* Sidebar Tabs */}
                  <div className="lg:w-1/3">
                    <div className="sticky top-32 flex flex-col gap-2">
                      {faqCategories.map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setActiveTab(cat.id);
                            setOpenIndex(0);
                          }}
                          className={cn(
                            "flex items-center gap-4 px-6 py-4 rounded-2xl border transition-all duration-300 group",
                            activeTab === cat.id 
                              ? "bg-orange-50 border-orange-100 text-orange-600 shadow-sm" 
                              : "bg-white border-stone-100 text-stone-500 hover:bg-stone-50 hover:border-stone-200"
                          )}
                        >
                          <div className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                            activeTab === cat.id ? "bg-orange-500 text-stone-950" : "bg-stone-100 text-stone-400 group-hover:bg-white"
                          )}>
                            <cat.icon className="w-5 h-5" />
                          </div>
                          <span className="font-barlow font-bold text-lg">{cat.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* FAQ Accordion */}
                  <div className="lg:w-2/3">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)]"
                    >
                      <h2 className="text-3xl font-barlow font-bold text-stone-900 mb-8 tracking-tight">{currentCategory?.label} Questions</h2>
                      <div className="flex flex-col">
                        {currentCategory?.questions.map((faq, idx) => (
                          <FAQItem 
                            key={idx} 
                            {...faq} 
                            isOpen={openIndex === idx} 
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              ) : (
                /* Search Results */
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="flex items-center justify-between mb-12">
                    <h2 className="text-2xl font-barlow font-bold text-stone-900">
                      Search results for &quot;{searchQuery}&quot;
                    </h2>
                    <button onClick={() => setSearchQuery("")} className="text-orange-600 font-bold text-sm hover:underline">Clear search</button>
                  </div>
                  
                  {filteredQuestions.length > 0 ? (
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-stone-100 shadow-sm">
                      {filteredQuestions.map((faq, idx) => (
                        <FAQItem 
                          key={idx} 
                          {...faq} 
                          isOpen={openIndex === idx} 
                          onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-20 bg-stone-50 rounded-[2.5rem] border border-dashed border-stone-200">
                      <p className="text-stone-400 font-barlow text-lg">No matching questions found. Try another term or contact us directly.</p>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
