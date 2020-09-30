const cachName = "static";

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(
                [
                    'index.html',
                    'style.css',
                    'site.js',
                ]
            );
        })
    );
}); 