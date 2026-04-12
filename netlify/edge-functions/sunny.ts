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

export default async (request: Request, context: any) => {
  // Get API key from Netlify/Deno environment
  // @ts-ignore: Deno is available in Netlify Edge runtime
  const apiKey = Deno.env.get("DEEPGRAM_API_KEY");

  if (!apiKey) {
    return new Response("DEEPGRAM_API_KEY not configured in Netlify environment variables", { status: 503 });
  }

  const upgradeHeader = request.headers.get("upgrade");
  if (upgradeHeader !== "websocket") {
    return new Response("Expected WebSocket upgrade", { status: 426 });
  }

  // Upgrade the HTTP request to a WebSocket using Deno's native API
  // @ts-ignore
  const { socket: clientSocket, response } = Deno.upgradeWebSocket(request);

  // Connect to Deepgram
  const dgSocket = new WebSocket(DEEPGRAM_AGENT_URL, ["token", apiKey]);
  dgSocket.binaryType = "arraybuffer";

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
  clientSocket.addEventListener("message", (event: MessageEvent) => {
    if (dgSocket.readyState === 1) {
      dgSocket.send(event.data);
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
