const CACHE_NAME = 'matty-notes-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/main.js',
  '/style.css',
  '/icon-192.png'
];

// Install: cache app files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching app files...');
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('Removing old cache', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// Fetch: serve cached files first
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});