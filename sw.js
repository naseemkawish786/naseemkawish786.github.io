/* Wild Laughs service worker.
   Navigations: network-first, falling back to the cached page (offline-friendly).
   Static assets (CSS/JS/icons/images on this origin): cache-first. */

var CACHE = "wildlaughs-v1";

var SHELL = [
  "/",
  "/index.html",
  "/videos/",
  "/shorts/",
  "/blog/",
  "/blog/amazing-dog-secrets/",
  "/blog/giant-animals-that-vanished/",
  "/blog/pet-care-basics/",
  "/about/",
  "/contact/",
  "/app/",
  "/assets/style.css",
  "/assets/videos.js",
  "/assets/i18n.js",
  "/assets/main.js",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/apple-touch-icon.png",
  "/icons/favicon-32.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(SHELL);
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (key) {
        return key === CACHE ? null : caches.delete(key);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;

  /* Pages: network-first so new videos/posts appear quickly; cache is the offline fallback. */
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (cache) { cache.put(req, copy); });
        return res;
      }).catch(function () {
        return caches.match(req).then(function (cached) {
          return cached || caches.match("/index.html");
        });
      })
    );
    return;
  }

  /* Everything else on this origin: cache-first, then network (and cache it). */
  event.respondWith(
    caches.match(req).then(function (cached) {
      if (cached) return cached;
      return fetch(req).then(function (res) {
        if (res && res.status === 200 && new URL(req.url).origin === self.location.origin) {
          var copy = res.clone();
          caches.open(CACHE).then(function (cache) { cache.put(req, copy); });
        }
        return res;
      });
    })
  );
});
