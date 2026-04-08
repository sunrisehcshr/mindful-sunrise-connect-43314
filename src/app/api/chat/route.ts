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
    let navigateTo = null; // Optional path to navigate the user to in the background

    if (lastMessage.includes("medicaid") || lastMessage.includes("insurance") || lastMessage.includes("cost")) {
      responseText = "Yes, we proudly accept Medicaid! We believe everyone deserves access to quality mental healthcare, and we currently have no waitlist for Medicaid patients. Would you like to schedule an evaluation?";
    } else if (lastMessage.includes("location") || lastMessage.includes("address") || lastMessage.includes("where")) {
      responseText = "We are located in Darby, Pennsylvania, serving the greater Delaware County area. We also offer convenient telehealth appointments if you prefer to meet from home.";
    } else if (lastMessage.includes("phone") || lastMessage.includes("call") || lastMessage.includes("contact")) {
      responseText = "You can reach our front office directly at (814) 620-2162. Our team would be happy to help you set up an appointment or answer any questions.";
    } else if (lastMessage.includes("child") || lastMessage.includes("kid") || lastMessage.includes("teen")) {
      responseText = "We offer specialized Child & Adolescent Therapy in Darby, PA. Let me take you to our dedicated child therapy page so you can learn more about how we help young minds.";
      navigateTo = "/child-therapy-darby-pa";
    } else if (lastMessage.includes("couple") || lastMessage.includes("marriage") || lastMessage.includes("partner")) {
      responseText = "Couples counseling is one of our core specialties. I'll navigate you to our Couples Counseling page right now so you can explore our relationship therapy services.";
      navigateTo = "/couples-counseling-darby-pa";
    } else if (lastMessage.includes("medication") || lastMessage.includes("psychiatr") || lastMessage.includes("pill")) {
      responseText = "Our licensed psychiatric providers offer both comprehensive evaluations and ongoing medication management. I'm opening our Psychiatric Evaluations page for you now.";
      navigateTo = "/psychiatric-evaluations-darby-pa";
    } else if (lastMessage.includes("team") || lastMessage.includes("staff") || lastMessage.includes("therapist") || lastMessage.includes("who")) {
      responseText = "We have an incredible, compassionate clinical team at Sunrise. Let me take you to our Team directory so you can meet our therapists and psychiatric providers.";
      navigateTo = "/team";
    } else if (lastMessage.includes("service") || lastMessage.includes("therapy") || lastMessage.includes("help") || lastMessage.includes("anxiety") || lastMessage.includes("depression")) {
      responseText = "We offer Individual Therapy, Family Therapy, Couples Counseling, Child Therapy, Psychiatric Evaluations, and Medication Management. I'll open our main Services directory so you can see everything we do.";
      navigateTo = "/services";
    } else if (lastMessage.includes("hello") || lastMessage.includes("hi") || lastMessage.includes("hey")) {
      responseText = "Hello! Welcome to Sunrise Human Care. How can I assist you with your mental health journey today?";
    } else if (lastMessage.includes("waitlist") || lastMessage.includes("wait list") || lastMessage.includes("appointment") || lastMessage.includes("book")) {
      responseText = "We currently have absolutely no waitlist! You can get started right away. Please call us at (814) 620-2162 or click 'Book Evaluation' at the top of the screen.";
    }

    return NextResponse.json({ message: responseText, navigateTo });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
