
// Service Worker for Sunrise Human Care Website
// This improves performance through caching static assets

const CACHE_NAME = 'sunrise-care-cache-v2';
const RUNTIME_CACHE = 'sunrise-runtime-v2';

// Assets that should be cached immediately
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/manifest.json'
];

// Additional assets to cache when they're fetched
const DYNAMIC_CACHE_PATTERNS = [
  /\.js$/,
  /\.css$/,
  /\.webp$/,
  /\.svg$/,
  /\.png$/,
  /\.jpg$/,
  /\.woff2$/
];

// Installation - Cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => {
      return self.skipWaiting(); // Ensure new service worker activates immediately
    })
  );
});

// Activate - Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== RUNTIME_CACHE)
          .map((name) => caches.delete(name))
      );
    }).then(() => {
      return self.clients.claim(); // Take control of all clients
    })
  );
});

// Helper function to check if a request should be cached
const shouldCache = (url) => {
  const urlObj = new URL(url);
  
  // Don't cache API requests or analytics
  if (
    urlObj.pathname.includes('/api/') || 
    url.includes('googletagmanager') || 
    url.includes('analytics') ||
    url.includes('gtag')
  ) {
    return false;
  }
  
  // Cache assets based on extension patterns
  return DYNAMIC_CACHE_PATTERNS.some(pattern => pattern.test(url));
};

// Fetch - Implement stale-while-revalidate for most resources
self.addEventListener('fetch', (event) => {
  // Skip for non-GET requests and browser extension requests
  if (
    event.request.method !== 'GET' || 
    event.request.url.startsWith('chrome-extension') ||
    event.request.url.includes('extension')
  ) {
    return;
  }
  
  // Handle HTML navigation requests specifically
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match('/index.html');
        })
    );
    return;
  }
  
  // Apply stale-while-revalidate strategy for static assets
  if (shouldCache(event.request.url)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        // Return cached response immediately if available
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            // Don't cache if response is not valid
            if (
              !networkResponse || 
              networkResponse.status !== 200 || 
              networkResponse.type !== 'basic'
            ) {
              return networkResponse;
            }
            
            // Cache the new response
            const responseToCache = networkResponse.clone();
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(event.request, responseToCache);
            });
            
            return networkResponse;
          })
          .catch(() => {
            // Return null to fall back to cached version
            return null;
          });
        
        return cachedResponse || fetchPromise;
      })
    );
  }
});

// Handle service worker messages
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
