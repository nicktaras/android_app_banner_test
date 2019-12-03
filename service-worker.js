/*
  This service worker doesn't actually do anything!

  In the real world, you would add support for Offline or the ability to
  handle push messages.
*/

const FILES_TO_CACHE = [
  '/offline.html',
];

if (evt.request.mode !== 'navigate') {
  // Not a page navigation, bail.
  return;
}
evt.respondWith(
    fetch(evt.request)
        .catch(() => {
          return caches.open(CACHE_NAME)
              .then((cache) => {
                return cache.match('offline.html');
              });
        })
);
