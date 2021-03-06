self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("pwa").then((cache) => {
      return cache.addAll(["index.html", "index.js"]);
    })
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
