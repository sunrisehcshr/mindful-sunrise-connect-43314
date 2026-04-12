const WebSocket = require('ws');
const dgKey = '3f16c2e06c76b3541de723ab556de4fd0ecd6f03';

const payload = {
  type: "SettingsConfiguration",
  audio: {
    input: { encoding: "linear16", sample_rate: 48000 },
    output: { encoding: "linear16", sample_rate: 24000 }
  },
  agent: {
    speak: { model: "aura-asteria-en" },
    listen: { model: "nova-3-medical" },
    think: {
      provider: { type: "google", key: "dummy" },
      model: "gemini-2.5-flash",
      instructions: "Test"
    }
  }
};

// Test 1: Subprotocol auth (what we currently do)
const ws1 = new WebSocket('wss://agent.deepgram.com/agent', ['token', dgKey]);
ws1.on('open', () => { console.log('WS1 (Subprotocol) connected'); ws1.send(JSON.stringify(payload)); });
ws1.on('message', (m) => console.log('WS1 msg:', m.toString()));
ws1.on('close', (c, r) => console.log('WS1 closed:', c, r.toString()));
ws1.on('error', (e) => console.log('WS1 error:', e.message));

// Test 2: Header auth
const ws2 = new WebSocket('wss://agent.deepgram.com/agent', { headers: { Authorization: `Token ${dgKey}` } });
ws2.on('open', () => { console.log('WS2 (Header) connected'); ws2.send(JSON.stringify(payload)); });
ws2.on('message', (m) => console.log('WS2 msg:', m.toString()));
ws2.on('close', (c, r) => console.log('WS2 closed:', c, r.toString()));
ws2.on('error', (e) => console.log('WS2 error:', e.message));
