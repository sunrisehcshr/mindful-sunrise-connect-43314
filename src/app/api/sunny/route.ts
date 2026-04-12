import { NextResponse } from "next/server";

/**
 * src/app/api/sunny/route.ts
 *
 * Secure Deepgram Temporary Token Generator
 * 
 * Instead of attempting to proxy a WebSocket connection through Netlify Edge
 * (which fails because Netlify does not support WebSocketPair natively),
 * this route securely uses your DEEPGRAM_API_KEY to generate a short-lived
 * temporary API key. 
 *
 * The browser uses this temporary key to connect directly to Deepgram's
 * wss://agent.deepgram.com/agent server. The temporary key expires quickly,
 * keeping your master key perfectly safe.
 */

export const runtime = "edge";

export async function GET() {
  const apiKey = process.env.DEEPGRAM_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "DEEPGRAM_API_KEY not configured" }, { status: 503 });
  }

  try {
    // Generate a temporary Deepgram API key (valid for 60 seconds)
    const response = await fetch("https://api.deepgram.com/v1/projects", {
      method: "GET",
      headers: {
        Authorization: `Token ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.status}`);
    }

    const { projects } = await response.json();
    const projectId = projects[0].project_id;

    const keyResponse = await fetch(`https://api.deepgram.com/v1/projects/${projectId}/keys`, {
      method: "POST",
      headers: {
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: "Temporary Voice Agent Token",
        scopes: ["usage:write"],
        time_to_live_in_seconds: 60,
      }),
    });

    if (!keyResponse.ok) {
      throw new Error(`Failed to generate temporary key: ${keyResponse.status}`);
    }

    const { api_key } = await keyResponse.json();

    return NextResponse.json({ token: api_key });
  } catch (error) {
    console.error("Deepgram token generation error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}