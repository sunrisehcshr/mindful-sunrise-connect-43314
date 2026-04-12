# SunnyAgent — Migration Guide

## File locations

| File | Drop here |
|---|---|
| `SunnyAgent.tsx` | `src/components/SunnyAgent.tsx` |
| `route.ts` | `src/app/api/sunny/route.ts` (new folder) |

The old `ChatWidget.tsx` and `src/app/api/chat/route.ts` can stay — they still
work as a text fallback. Just swap the import in your layout.

---

## 1. Replace ChatWidget in layout

```tsx
// src/app/layout.tsx — change this:
import ChatWidget from "@/components/ChatWidget";

// to this:
import SunnyAgent from "@/components/SunnyAgent";

// and in JSX:
<SunnyAgent />
```

---

## 2. Create the API route folder

```
src/app/api/sunny/route.ts   ← new file
```

This is the secure WebSocket proxy. The DEEPGRAM_API_KEY never
reaches the browser — all auth happens here server-side.

---

## 3. Netlify environment variables

You should already have this from the previous step:
```
DEEPGRAM_API_KEY=your_deepgram_key
```

You can now remove INWORLD_API_KEY — TTS is handled by Deepgram.
Keep GOOGLE_API_KEY if you still use the /api/chat text route.

---

## 4. How navigation works

Since Deepgram's console doesn't support custom functions on the
free tier, navigation is handled via text markers in Sunny's responses.

The agent prompt instructs Sunny to include [NAVIGATE:/route] in her
response when a user asks about a service. SunnyAgent.tsx strips this
marker before displaying the transcript and calls router.push(route).

Example Sunny response:
  "We offer individual therapy for anxiety, depression, and trauma.
   Let me take you there now. [NAVIGATE:/individual-therapy-darby-pa]"

What the user sees in transcript:
  "We offer individual therapy for anxiety, depression, and trauma.
   Let me take you there now."

And the page navigates automatically.

---

## 5. WebSocket proxy — Netlify Edge note

The route.ts uses the Edge runtime. On Netlify this runs as an
Edge Function automatically. No extra config needed.

If you see WebSocket connection errors in dev, make sure you are
running `next dev` not a static export. WebSockets require a
running server.

---

## 6. Known limitation — ScriptProcessor deprecation

The mic capture uses ScriptProcessorNode which is deprecated but
universally supported including iOS Safari. It will produce a
console warning in Chrome. This is safe to ignore for now.

To silence it, replace with an AudioWorklet in a future sprint:
https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet
