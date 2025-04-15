
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Create root before lazy loading to speed up initial render
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);

// Render with simpler loading state for faster initial paint
root.render(
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-amber-50 to-yellow-100">
    <App />
  </div>
);

// Mark when app is loaded
if (window.performance) {
  window.addEventListener('load', () => {
    performance.mark('app-loaded');
    performance.measure('app-loading-time', 'navigationStart', 'app-loaded');
  });
}
