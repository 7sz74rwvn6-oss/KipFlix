self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("hdfilmci").then(cache => {
      return cache.addAll([
        "index.html",
        "player.html"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
