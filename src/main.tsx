
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

// Render the app with Suspense for better loading experience
createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<AppLoader />}>
    <App />
  </Suspense>
);

// Register service worker for better caching and performance
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  // Defer service worker registration after page load
  window.addEventListener('load', () => {
    // Small timeout to prioritize initial render
    setTimeout(() => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('ServiceWorker registration successful:', registration.scope);
        })
        .catch(error => {
          console.error('ServiceWorker registration failed:', error);
        });
    }, 1000);
  });
}
