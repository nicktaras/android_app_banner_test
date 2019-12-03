/*
  This service worker doesn't actually do anything!

  In the real world, you would add support for Offline or the ability to
  handle push messages.
*/

const FILES_TO_CACHE = [
  '/offline.html',
];

evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    })
);
