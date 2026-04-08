import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    const lastMessage = messages[messages.length - 1].content.toLowerCase();

    // Log the incoming messages for debugging
    console.log("Incoming chat messages:", lastMessage);

    // Simulate network delay for a more realistic feel
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Basic keyword matching for the mock API to actually give data
    let responseText = "Thank you for reaching out to Sunrise Human Care Services. We are currently integrating our full AI model. If you need immediate assistance, please call us at (814) 620-2162.";

    if (lastMessage.includes("medicaid") || lastMessage.includes("insurance") || lastMessage.includes("cost")) {
      responseText = "Yes, we proudly accept Medicaid! We believe everyone deserves access to quality mental healthcare, and we currently have no waitlist for Medicaid patients. Would you like to schedule an evaluation?";
    } else if (lastMessage.includes("location") || lastMessage.includes("address") || lastMessage.includes("where")) {
      responseText = "We are located in Darby, Pennsylvania, serving the greater Delaware County area. We also offer convenient telehealth appointments if you prefer to meet from home.";
    } else if (lastMessage.includes("phone") || lastMessage.includes("call") || lastMessage.includes("contact")) {
      responseText = "You can reach our front office directly at (814) 620-2162. Our team would be happy to help you set up an appointment or answer any questions.";
    } else if (lastMessage.includes("service") || lastMessage.includes("therapy") || lastMessage.includes("help") || lastMessage.includes("anxiety") || lastMessage.includes("depression")) {
      responseText = "We offer Individual Therapy, Family Therapy, Couples Counseling, Child Therapy, Psychiatric Evaluations, and Medication Management. Our licensed therapists specialize in treating anxiety, depression, trauma, and ADHD.";
    } else if (lastMessage.includes("hello") || lastMessage.includes("hi") || lastMessage.includes("hey")) {
      responseText = "Hello! Welcome to Sunrise Human Care. How can I assist you with your mental health journey today?";
    } else if (lastMessage.includes("waitlist") || lastMessage.includes("wait list") || lastMessage.includes("appointment") || lastMessage.includes("book")) {
      responseText = "We currently have absolutely no waitlist! You can get started right away. Please call us at (814) 620-2162 or click 'Book Evaluation' at the top of the screen.";
    }

    return NextResponse.json({ message: responseText });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
