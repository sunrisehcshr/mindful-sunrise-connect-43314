import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    // Log the incoming messages for debugging
    console.log("Incoming chat messages:", messages);

    // Simulate network delay for a more realistic feel
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // For now, this is a mock response. 
    // You can easily plug in OpenAI or Anthropic SDK here.
    return NextResponse.json({
      message: "Thank you for reaching out to Sunrise Human Care Services. We are currently building this custom AI integration! If you need immediate assistance, please call us at (814) 620-2162.",
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
