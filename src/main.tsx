
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Render the app
createRoot(document.getElementById("root")!).render(<App />);

// Register service worker for better caching and performance
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful:', registration.scope);
      })
      .catch(error => {
        console.error('ServiceWorker registration failed:', error);
      });
  });
}
