const staticCacheName = "site-static-v1";
const cacheAssets = [
  "/",
  "/index.html",
  "/docs/style/output.css",
  "/docs/js/main.js",
  "/docs/js/index.js",
];

self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches
      .open(staticCacheName)
      .then((cache) => {
        console.log("caching assets...");
        cache.addAll(cacheAssets);
      })
      .catch((err) => {})
  );
});

self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches
      .match(evt.request)
      .then((res) => {
        return res || fetch(evt.request);
      })
      .catch((err) => {
        if (evt.request.url.indexOf(".html") > -1) {
          return caches.match("./index.html");
        }
      })
  );
});
