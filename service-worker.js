self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('notes-app-cache').then(cache => {
      return cache.addAll([
        'https://mattydem.github.io/notes/service-worker.js',
        './index.html',
        './styles.css',
        './index.js',
        './icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
