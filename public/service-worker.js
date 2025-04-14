
// Service Worker for Sunrise Human Care Website
// Improved caching for better performance

const CACHE_NAME = 'sunrise-care-cache-v3';
const RUNTIME_CACHE = 'sunrise-runtime-v3';
const IMG_CACHE = 'sunrise-images-v3';
const FONT_CACHE = 'sunrise-fonts-v3';
const STATIC_CACHE = 'sunrise-static-v3';

// Assets that should be cached immediately
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/manifest.json',
  '/critical.css',
  '/images/family-counseling-havertown.webp'
];

// Additional assets to cache when they're fetched
const STATIC_CACHE_EXTENSIONS = ['.js', '.css', '.webp', '.svg', '.png', '.jpg', '.woff2'];
const FONT_CACHE_PATTERNS = [/fonts\.gstatic\.com/, /fonts\.googleapis\.com/];
const IMAGE_CACHE_EXTENSIONS = ['.webp', '.jpg', '.jpeg', '.png', '.svg', '.gif'];

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
          .filter((name) => {
            return name.startsWith('sunrise-') && 
                   ![CACHE_NAME, RUNTIME_CACHE, IMG_CACHE, FONT_CACHE, STATIC_CACHE].includes(name);
          })
          .map((name) => caches.delete(name))
      );
    }).then(() => {
      return self.clients.claim(); // Take control of all clients
    })
  );
});

// Helper function to determine appropriate cache for a URL
const getCacheForUrl = (url) => {
  const urlObj = new URL(url);
  
  // Skip API requests, analytics, etc.
  if (
    urlObj.pathname.includes('/api/') || 
    url.includes('googletagmanager') || 
    url.includes('analytics') ||
    url.includes('gtag')
  ) {
    return null;
  }
  
  // Cache fonts with long expiration
  if (FONT_CACHE_PATTERNS.some(pattern => pattern.test(url))) {
    return FONT_CACHE;
  }
  
  // Cache images
  if (IMAGE_CACHE_EXTENSIONS.some(ext => urlObj.pathname.endsWith(ext))) {
    return IMG_CACHE;
  }
  
  // Cache static assets
  if (STATIC_CACHE_EXTENSIONS.some(ext => urlObj.pathname.endsWith(ext))) {
    return STATIC_CACHE;
  }
  
  // Default runtime cache for other assets
  return RUNTIME_CACHE;
};

// Fetch - Implement optimized caching strategies
self.addEventListener('fetch', (event) => {
  // Skip for non-GET requests and browser extension requests
  if (
    event.request.method !== 'GET' || 
    event.request.url.startsWith('chrome-extension') ||
    event.request.url.includes('extension')
  ) {
    return;
  }
  
  // Handle HTML navigation requests - network first with cache fallback
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Clone the response to store in cache
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          return caches.match('/index.html') || caches.match(event.request);
        })
    );
    return;
  }
  
  // Get appropriate cache for this URL
  const cacheName = getCacheForUrl(event.request.url);
  
  // Skip caching for things we don't want to cache
  if (!cacheName) {
    return;
  }
  
  // Images - Cache first with network fallback
  if (cacheName === IMG_CACHE) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        return cachedResponse || fetch(event.request).then(networkResponse => {
          // Save successful responses in cache
          if (networkResponse && networkResponse.status === 200) {
            const clonedResponse = networkResponse.clone();
            caches.open(IMG_CACHE).then(cache => {
              cache.put(event.request, clonedResponse);
            });
          }
          return networkResponse;
        });
      })
    );
    return;
  }
  
  // Fonts - Cache first with long expiration
  if (cacheName === FONT_CACHE) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        return fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            const clonedResponse = networkResponse.clone();
            caches.open(FONT_CACHE).then(cache => {
              cache.put(event.request, clonedResponse);
            });
          }
          return networkResponse;
        });
      })
    );
    return;
  }
  
  // Static assets - Stale while revalidate
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Return cached response immediately
      const fetchPromise = fetch(event.request)
        .then(networkResponse => {
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
          caches.open(cacheName).then(cache => {
            cache.put(event.request, responseToCache);
          });
          
          return networkResponse;
        })
        .catch(error => {
          console.error('Fetch failed:', error);
          return null;
        });
      
      return cachedResponse || fetchPromise;
    })
  );
});

// Handle service worker messages for cache management
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            return caches.delete(cacheName);
          })
        );
      })
    );
  }
});

// Periodic cache cleanup
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'cache-cleanup') {
    event.waitUntil(
      // Clear caches older than 7 days
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            // Skip main caches
            if ([CACHE_NAME, STATIC_CACHE].includes(cacheName)) {
              return Promise.resolve();
            }
            
            return caches.open(cacheName).then(cache => {
              return cache.keys().then(requests => {
                return Promise.all(
                  requests.map(request => {
                    // Check cache age
                    return caches.match(request).then(response => {
                      if (!response) return Promise.resolve();
                      
                      const dateHeader = response.headers.get('date');
                      if (!dateHeader) return Promise.resolve();
                      
                      const cacheDate = new Date(dateHeader);
                      const nowDate = new Date();
                      
                      // Remove if older than 7 days
                      if ((nowDate.getTime() - cacheDate.getTime()) > (7 * 24 * 60 * 60 * 1000)) {
                        return cache.delete(request);
                      }
                      
                      return Promise.resolve();
                    });
                  })
                );
              });
            });
          })
        );
      })
    );
  }
});
