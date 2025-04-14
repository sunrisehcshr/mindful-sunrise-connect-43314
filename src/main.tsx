
import { createRoot } from 'react-dom/client';
import './index.css';
import { lazy, Suspense } from 'react';

// Lazy load the App component
const App = lazy(() => import('./App.tsx'));

// Create a lightweight loading component
const AppLoader = () => (
  <div className="flex items-center justify-center h-screen bg-gradient-to-r from-amber-50 to-yellow-100">
    <div className="w-12 h-12 rounded-full border-4 border-orange-500 border-t-transparent animate-spin"></div>
  </div>
);

// Measure initial load performance
if (window.performance) {
  performance.mark('app-init');
}

// Create root before lazy loading to speed up initial render
const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

// Render the app with Suspense for better loading experience
root.render(
  <Suspense fallback={<AppLoader />}>
    <App />
  </Suspense>
);

// Mark when app is loaded
if (window.performance) {
  window.addEventListener('load', () => {
    performance.mark('app-loaded');
    performance.measure('app-loading-time', 'app-init', 'app-loaded');
  });
}

// Register service worker for better caching and performance
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  // Register service worker after page has loaded and idle
  window.addEventListener('load', () => {
    requestIdleCallback(() => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('ServiceWorker registration successful:', registration.scope);
        })
        .catch(error => {
          console.error('ServiceWorker registration failed:', error);
        });
    }, { timeout: 2000 });
  });
}

// Polyfill for requestIdleCallback
if (!('requestIdleCallback' in window)) {
  // @ts-ignore
  window.requestIdleCallback = (callback, options) => {
    const timeout = options?.timeout || 50;
    return setTimeout(() => {
      const start = Date.now();
      callback({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
      });
    }, timeout);
  };
  
  // @ts-ignore
  window.cancelIdleCallback = (id) => {
    clearTimeout(id);
  };
}
