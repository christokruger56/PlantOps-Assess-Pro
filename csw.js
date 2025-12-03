const CACHE_NAME = 'equip-assess-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/dump-truck.html',
  '/road-grader.html',
  '/bachoe.html',
  '/excavator.html',
  '/tracked-dozer.html',
  '/roller.html',
  '/front-end-loader.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
