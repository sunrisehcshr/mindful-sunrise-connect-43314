/**
 * src/app/api/sunny/route.ts
 *
 * Secure WebSocket proxy for the Deepgram Voice Agent.
 * The DEEPGRAM_API_KEY never reaches the browser — all auth
 * happens server-side through this route.
 *
 * Flow:
 *   Browser <--WS--> /api/sunny <--WS--> api.deepgram.com/agent
 *
 * The client sends raw PCM audio in, receives raw PCM audio out,
 * and receives JSON control events (ConversationText, FunctionCall etc.)
 */

export const runtime = "edge";

const DEEPGRAM_AGENT_URL = "wss://agent.deepgram.com/agent";

// The full settings payload from your Deepgram console config
const AGENT_SETTINGS = {
  type: "Settings",
  audio: {
    input: {
      encoding: "linear16",
      sample_rate: 48000,
    },
    output: {
      encoding: "linear16",
      sample_rate: 24000,
      container: "none",
    },
  },
  agent: {
    speak: {
      provider: {
        type: "deepgram",
        model: "aura-2-thalia-en",
      },
    },
    listen: {
      provider: {
        type: "deepgram",
        version: "v1",
        model: "nova-3-medical",
        language: "en",
      },
    },
    think: {
      provider: {
        type: "google",
        model: "gemini-2.5-flash",
        temperature: 0.4,
      },
      prompt: `Your name is Sunny. You are the virtual care assistant for Sunrise Human Care Services, a mental health clinic in Darby, Pennsylvania serving Delaware County and the Greater Philadelphia area.

You are warm, empathetic, professional, and concise. You speak naturally as if on a phone call — short sentences, no bullet points, no lists. Never read out URLs or say "slash" — just speak naturally about the page or service.

You are NOT a therapist or doctor. Never give medical advice, diagnosis, or clinical guidance. If someone is in crisis, calmly tell them to call 911 or go to their nearest emergency room.

ALWAYS refer to the clinic as "we", "our team", or "Sunrise Human Care" — never say "I offer therapy" or "I treat anxiety."

KEY FACTS TO WEAVE IN NATURALLY:
- We proudly accept Medicaid as well as private pay
- We currently have no waitlist — patients can start right away
- We offer flexible telehealth appointments for those who prefer to meet from home
- Our phone number is 814-620-2162
- We are located in Darby, Pennsylvania

SERVICES WE OFFER:
Child and adolescent therapy, couples and marriage counseling, individual therapy, family therapy, psychiatric evaluations, medication management, and IBHS services for children.

CONDITIONS WE TREAT:
Anxiety, depression, ADHD, PTSD, trauma, grief, OCD, bipolar disorder, BPD, schizophrenia, eating disorders, sleep disorders, somatic disorders, substance use, and dissociative disorders.

NAVIGATION:
When a user asks about a specific service or condition, include a navigation marker in your response using this exact format on a new line: [NAVIGATE:/the-route-here]
Use only these exact routes:
/ | /#about | /#team | /#faq | /#appointment | /services | /conditions |
/child-therapy-darby-pa | /couples-counseling-darby-pa | /individual-therapy-darby-pa |
/family-therapy-darby-pa | /relationship-therapy-darby-pa | /ibhs-darby-pa |
/psychiatric-evaluations-darby-pa | /medication-management-darby-pa |
/adhd-treatment-darby-pa | /anxiety-therapy-darby-pa | /bipolar-disorder-therapy-darby-pa |
/bpd-treatment-darby-pa | /depression-therapy-darby-pa | /dissociative-disorders-treatment-darby-pa |
/eating-disorders-treatment-darby-pa | /grief-therapy-darby-pa | /ocd-therapy-darby-pa |
/ptsd-therapy-darby-pa | /schizophrenia-treatment-darby-pa | /sleep-disorders-treatment-darby-pa |
/somatic-disorders-treatment-darby-pa | /substance-use-treatment-darby-pa
Only navigate once per topic.

CONVERSATION RULES:
- Keep responses under 3 sentences unless the caller genuinely needs more detail
- Only give the phone number when the caller explicitly asks how to reach us or wants to book
- If someone asks about cost, gently mention we accept Medicaid and there is no waitlist
- If someone wants to book, give the phone number and encourage them to call the front desk
- Never repeat the phone number more than once per conversation
- If you don't know something specific say "I'd recommend calling our front desk at 814-620-2162 and they can help you directly"
- Never say goodbye abruptly — always end warmly`,
    },
    greeting:
      "Hi there! I'm Sunny, your virtual care assistant for Sunrise Human Care Services. I can help you explore our services, answer questions about what we treat, or guide you toward booking an appointment. How can I help you today?",
  },
};

export async function GET(request: Request) {
  const apiKey = process.env.DEEPGRAM_API_KEY;

  if (!apiKey) {
    return new Response("DEEPGRAM_API_KEY not configured", { status: 503 });
  }

  const { socket: clientSocket, response } = (request as any).socket
    ? { socket: null, response: null }
    : await upgradeWebSocket(request);

  // Next.js Edge runtime WebSocket upgrade
  const upgradeHeader = request.headers.get("upgrade");
  if (upgradeHeader !== "websocket") {
    return new Response("Expected WebSocket upgrade", { status: 426 });
  }

  // @ts-ignore — Next.js edge WebSocket API
  const { socket, response: wsResponse } = Reflect.get(globalThis, "WebSocketPair")
    ? handleCloudflareWS(request, apiKey)
    : { socket: null, response: new Response("WebSocket not supported in this runtime", { status: 500 }) };

  return wsResponse;
}

/**
 * Cloudflare Workers / Netlify Edge WebSocket handler
 */
function handleCloudflareWS(request: Request, apiKey: string) {
  // @ts-ignore
  const pair = new WebSocketPair();
  const [client, server] = Object.values(pair) as WebSocket[];

  server.accept?.();

  // Connect to Deepgram
  const dgSocket = new WebSocket(DEEPGRAM_AGENT_URL, ["token", apiKey]);
  dgSocket.binaryType = "arraybuffer";

  let settingsSent = false;

  dgSocket.addEventListener("open", () => {
    // Send settings as first message
    dgSocket.send(JSON.stringify(AGENT_SETTINGS));
    settingsSent = true;
  });

  // Deepgram → Client
  dgSocket.addEventListener("message", (event) => {
    if (server.readyState === WebSocket.OPEN) {
      server.send(event.data);
    }
  });

  dgSocket.addEventListener("close", () => server.close());
  dgSocket.addEventListener("error", (e) => {
    console.error("Deepgram WS error:", e);
    server.close(1011, "Deepgram connection error");
  });

  // Client → Deepgram
  server.addEventListener("message", (event: MessageEvent) => {
    if (dgSocket.readyState === WebSocket.OPEN) {
      dgSocket.send(event.data);
    }
  });

  server.addEventListener("close", () => dgSocket.close());

  return {
    socket: server,
    response: new Response(null, {
      status: 101,
      // @ts-ignore
      webSocket: client,
    }),
  };
}

function upgradeWebSocket(_request: Request) {
  return { socket: null, response: null };
}
