import { NextResponse } from "next/server";
import { generateObject } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { z } from "zod";

// Create a custom OpenAI client that can connect to any Open-Source Model provider
// (Like Together AI, Groq, OpenRouter, etc.)
const customProvider = createOpenAI({
  apiKey: process.env.AI_API_KEY || "",
  baseURL: process.env.AI_BASE_URL || "https://api.openai.com/v1", // Change this in your .env
});

const SYSTEM_PROMPT = `
You are the Sunrise AI Assistant for Sunrise Human Care Services in Darby, PA.
You are empathetic, calm, highly professional, and concise.
Your primary goal is to answer questions about therapy, psychiatry, and Medicaid, and warmly encourage users to call (814) 620-2162 or book an evaluation.

KEY FACTS ABOUT SUNRISE HUMAN CARE SERVICES:
- We proudly accept Medicaid.
- We currently have absolutely NO waitlists. Patients can start right away.
- Core Services: Child & Adolescent Therapy, Couples Counseling, Individual Therapy, Family Therapy, Psychiatric Evaluations, and Medication Management.
- Location: Darby, Pennsylvania (serving Delaware County). Telehealth is also available.
- Contact: Phone is (814) 620-2162.

INSTRUCTIONS:
1. Always respond in a conversational, helpful, human tone.
2. Keep your answers brief (1-3 short sentences max). People do not like reading long paragraphs.
3. If they ask a medical question, politely decline and tell them to call the clinic or 911 if it is an emergency.
4. If the user asks about a specific service (e.g., child therapy, couples counseling, the team/therapists, or medication/psychiatry), provide the correct 'navigateTo' URL path to take them there seamlessly.
`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    // Ensure we have an API key configured
    if (!process.env.AI_API_KEY) {
      console.warn("AI_API_KEY is not set in the environment variables.");
      return NextResponse.json({
        message: "Thank you for reaching out to Sunrise Human Care Services! Our AI system is currently being configured. Please call us at (814) 620-2162 for immediate assistance.",
        navigateTo: null
      });
    }

    // Call the Gemma model and force it to return perfectly structured JSON
    const { object } = await generateObject({
      model: customProvider(process.env.AI_MODEL_NAME || "gemma-4-31b-it"),
      system: SYSTEM_PROMPT,
      messages: messages.map((m: any) => ({ role: m.role, content: m.content })),
      schema: z.object({
        message: z.string().describe("Your conversational, empathetic response to the user."),
        navigateTo: z.string().nullable().describe("The exact relative URL path to navigate to if the user asks about a specific service (e.g., '/child-therapy-darby-pa', '/couples-counseling-darby-pa', '/psychiatric-evaluations-darby-pa', '/team', '/services'). Otherwise, set to null.")
      })
    });

    // Send the structured response back to the ChatWidget
    return NextResponse.json({ 
      message: object.message, 
      navigateTo: object.navigateTo 
    });

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
