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
<head><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8722521161742523"
     crossorigin="anonymous"></script></head>
