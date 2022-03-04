const cache_name = "portfolio v1";
const urlsCache = ["index.html", "offline.html"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cache_name).then((cache) => {
 
      return cache.addAll(urlsCache);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(() => {
      return fetch(e.request).catch(() => caches.match("offline.html"));
    })
  );
});

self.addEventListener("activate", (e) => {
  const listOfCache = [];
  listOfCache.push(cache_name);

  e.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!listOfCache.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
