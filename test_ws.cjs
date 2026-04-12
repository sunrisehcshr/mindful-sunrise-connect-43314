const WebSocket = require('ws');
const ws = new WebSocket('wss://agent.deepgram.com/agent', ['token', '3f16c2e06c76b3541de723ab556de4fd0ecd6f03']);
ws.on('open', () => {
  console.log('Connected to Deepgram!');
  ws.close();
});
ws.on('error', (err) => console.error('WS Error:', err.message));
ws.on('close', (code, reason) => console.log('Closed', code, reason.toString()));
