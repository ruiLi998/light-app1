const CACHE_NAME = 'light-app-v1';
const urlsToCache = [
  '/light-app/',
  '/light-app/index.html',
  '/light-app/manifest.json',
  '/light-app/icons/light-icon-192.png',
  '/light-app/icons/light-icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
}); 