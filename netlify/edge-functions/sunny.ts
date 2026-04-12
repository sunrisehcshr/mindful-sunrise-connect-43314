/**
 * netlify/edge-functions/sunny.ts
 *
 * Native Netlify Edge Function WebSocket proxy for the Deepgram Voice Agent.
 * This runs on Deno (Netlify's Edge platform) and uses Deno's native
 * `upgradeWebSocket` API to proxy the connection securely.
 *
 * Flow:
 *   Browser <--WS--> /api/sunny <--WS--> api.deepgram.com/agent
 */

const DEEPGRAM_AGENT_URL = "wss://agent.deepgram.com/agent";

const AGENT_SETTINGS = {
  "type": "Settings",
  "audio": {
    "input": {
      "encoding": "linear16",
      "sample_rate": 48000
    },
    "output": {
      "encoding": "linear16",
      "sample_rate": 24000,
      "container": "none"
    }
  },
  "agent": {
    "speak": {
      "provider": {
        "type": "deepgram",
        "model": "aura-2-thalia-en"
      }
    },
    "listen": {
      "provider": {
        "type": "deepgram",
        "version": "v1",
        "model": "nova-3-medical",
        "language": "en"
      }
    },
    "think": {
      "provider": {
        "type": "google",
        "key": "" // Injected below
      },
      "model": "gemini-2.5-flash",
      "temperature": 0.4,
      "prompt": "Your name is Sunny. You are the virtual care assistant for Sunrise Human Care Services, a mental health clinic in Darby, Pennsylvania serving Delaware County and the Greater Philadelphia area.\n\nYou are warm, empathetic, professional, and concise. You speak naturally as if on a phone call — short sentences, no bullet points, no lists. Never read out URLs or say \"slash\" — just speak naturally about the page or service.\n\nYou are NOT a therapist or doctor. Never give medical advice, diagnosis, or clinical guidance. If someone is in crisis, calmly tell them to call 911 or go to their nearest emergency room.\n\nALWAYS refer to the clinic as \"we\", \"our team\", or \"Sunrise Human Care\" — never say \"I offer therapy\" or \"I treat anxiety.\"\n\nKEY FACTS TO WEAVE IN NATURALLY:\n- We proudly accept Medicaid as well as private pay\n- We currently have no waitlist — patients can start right away\n- We offer flexible telehealth appointments for those who prefer to meet from home\n- Our phone number is 814-620-2162\n- We are located in Darby, Pennsylvania\n\nSERVICES WE OFFER:\nChild and adolescent therapy, couples and marriage counseling, individual therapy, family therapy, psychiatric evaluations, medication management, and IBHS services for children.\n\nCONDITIONS WE TREAT:\nAnxiety, depression, ADHD, PTSD, trauma, grief, OCD, bipolar disorder, BPD, schizophrenia, eating disorders, sleep disorders, somatic disorders, substance use, and dissociative disorders.\n\nNAVIGATION RULES:\nWhen a user asks about a specific service or condition, speak a brief response AND call the navigate_to_page function with the correct route so the website navigates them there automatically. Only navigate once per topic — do not call the function repeatedly.\n\nCONVERSATION RULES:\n- Keep responses under 3 sentences unless the caller genuinely needs more detail\n- Only give the phone number when the caller explicitly asks how to reach us or wants to book\n- If someone asks about cost, gently mention we accept Medicaid and there is no waitlist\n- If someone wants to book, give the phone number and encourage them to call the front desk\n- Never repeat the phone number more than once per conversation\n- If you don't know something specific say \"I'd recommend calling our front desk at 814-620-2162 and they can help you directly\"\n- Never say goodbye abruptly — always end warmly, for example \"Take care, and don't hesitate to reach out if you need anything\""
    },
    "greeting": "Hi there! I'm Sunny, your virtual care assistant for Sunrise Human Care Services. I can help you explore our services, answer questions about what we treat, or guide you toward booking an appointment. How can I help you today?"
  }
};

export default async (request: Request, context: any) => {
  // Get API keys from Netlify/Deno environment
  // @ts-ignore: Deno is available in Netlify Edge runtime
  const deepgramKey = Deno.env.get("DEEPGRAM_API_KEY");
  // @ts-ignore
  const aiKey = Deno.env.get("AI_API_KEY");

  if (!deepgramKey || !aiKey) {
    return new Response("Missing DEEPGRAM_API_KEY or AI_API_KEY in Netlify environment variables", { status: 503 });
  }

  // Inject the Google Gemini API key into the settings
  AGENT_SETTINGS.agent.think.provider.key = aiKey;

  const upgradeHeader = request.headers.get("upgrade");
  if (upgradeHeader !== "websocket") {
    return new Response("Expected WebSocket upgrade", { status: 426 });
  }

  // Upgrade the HTTP request to a WebSocket using Deno's native API
  // @ts-ignore
  const { socket: clientSocket, response } = Deno.upgradeWebSocket(request);

  // Connect to Deepgram
  const dgSocket = new WebSocket(DEEPGRAM_AGENT_URL, ["token", deepgramKey]);
  dgSocket.binaryType = "arraybuffer";

  // When Deepgram is fully open, send the AGENT_SETTINGS
  // This completely eliminates the race condition where the frontend sends settings
  // before the Deepgram connection is fully established.
  dgSocket.addEventListener("open", () => {
    dgSocket.send(JSON.stringify(AGENT_SETTINGS));
  });

  // When Deepgram sends audio/events, forward them to the Client
  dgSocket.addEventListener("message", (event: MessageEvent) => {
    if (clientSocket.readyState === 1) { // 1 = OPEN
      clientSocket.send(event.data);
    }
  });

  dgSocket.addEventListener("close", () => {
    if (clientSocket.readyState === 1) {
      clientSocket.close();
    }
  });

  dgSocket.addEventListener("error", (e: Event) => {
    console.error("Deepgram WS error:", e);
    if (clientSocket.readyState === 1) {
      clientSocket.close(1011, "Deepgram connection error");
    }
  });

  // When the Client sends audio, forward it to Deepgram
  // Buffer audio until the Deepgram socket is actually OPEN to prevent drops
  const audioBuffer: any[] = [];
  
  clientSocket.addEventListener("message", (event: MessageEvent) => {
    if (dgSocket.readyState === 1) { // OPEN
      // If we have buffered audio, send it first
      while (audioBuffer.length > 0) {
        dgSocket.send(audioBuffer.shift());
      }
      dgSocket.send(event.data);
    } else if (dgSocket.readyState === 0) { // CONNECTING
      audioBuffer.push(event.data);
    }
  });

  clientSocket.addEventListener("close", () => {
    if (dgSocket.readyState === 1) {
      dgSocket.close();
    }
  });

  // Return the 101 Switching Protocols response to the browser
  return response;
};