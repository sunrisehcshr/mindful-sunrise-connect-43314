/**
 * netlify/edge-functions/sunny.ts
 *
 * Native Netlify Edge Function WebSocket proxy for the Deepgram Voice Agent.
 * This explicitly bypasses Next.js's App Router, which is known to strip
 * the WebSocket upgrades and block `WebSocketPair` on Netlify.
 *
 * Flow:
 *   Browser <--WS--> /api/sunny <--WS--> api.deepgram.com/agent
 */

const DEEPGRAM_AGENT_URL = "wss://agent.deepgram.com/agent";

export default async (request: Request, context: any) => {
  // @ts-ignore: Deno is available in Netlify Edge runtime
  const apiKey = Deno.env.get("DEEPGRAM_API_KEY");

  if (!apiKey) {
    return new Response("DEEPGRAM_API_KEY not configured in Netlify environment variables", { status: 503 });
  }

  const upgradeHeader = request.headers.get("upgrade");
  if (upgradeHeader !== "websocket") {
    return new Response("Expected WebSocket upgrade", { status: 426 });
  }

  // @ts-ignore
  const pair = new WebSocketPair();
  const [client, server] = Object.values(pair) as any[];

  server.accept?.();

  // Connect to Deepgram
  const dgSocket = new WebSocket(DEEPGRAM_AGENT_URL, ["token", apiKey]);
  dgSocket.binaryType = "arraybuffer";

  // Deepgram -> Client
  dgSocket.addEventListener("message", (event: MessageEvent) => {
    if (server.readyState === 1) { // WebSocket.OPEN
      server.send(event.data);
    }
  });

  dgSocket.addEventListener("close", () => server.close());
  dgSocket.addEventListener("error", (e: Event) => {
    console.error("Deepgram WS error:", e);
    server.close(1011, "Deepgram connection error");
  });

  // Client -> Deepgram
  server.addEventListener("message", (event: MessageEvent) => {
    if (dgSocket.readyState === 1) { // WebSocket.OPEN
      dgSocket.send(event.data);
    }
  });

  server.addEventListener("close", () => dgSocket.close());

  return new Response(null, {
    status: 101,
    // @ts-ignore
    webSocket: client,
  });
};