const cachName = "static";

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(
                [
                    'index.html',
                    'manifest.json',
                    'worker.js',
                    'images/cinema128x128.png',
                    'images/cinema144.144.png',
                    'images/images.jfif'
                ]
            );
        })
    );
}); 