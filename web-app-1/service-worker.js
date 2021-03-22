var cacheName = 'lessonstore-v1';
var cacheFiles = [
    'index.html',
    'lessons.js',
    'lessonstore.webmanifest',
    'img/accounting.jpg',
    'img/biology.jpg',
    'img/chemistry.jpg',
    'img/demo-img.svg',
    'img/english.jpg',
    'img/government.jpg',
    'img/history.jpg',
    'img/icon-512.png',
    'img/law.jpg',
    'img/math.jpg',
    'img/science.jpg'
];
// download cacheFiles to cache
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        }));
});