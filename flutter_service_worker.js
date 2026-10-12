// Retire the previous Flutter worker during the approved V2 website switch.
// Keep IndexedDB/localStorage: they may contain unsent legacy changes.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all(
      ["flutter-app-cache", "flutter-temp-cache", "flutter-app-manifest"].map((name) =>
        caches.delete(name),
      ),
    )
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: "window" }))
      .then((clients) => Promise.all(clients.map((client) => client.navigate(client.url)))),
  );
});
