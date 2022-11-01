self.addEventListener("install", e => {
    console.log("Caching resources..");
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/master.css", "./src/images/logo192.png"]);
        })
    ) ;
    console.log("Resources in cache. Done");
}) ;