const C='vet-work-v1',F=['./','index.html','manifest.webmanifest','pdf-lib.min.js','logo.png','logo-app.png','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!='GET')return;e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>{const n=fetch(e.request).then(x=>{if(x.ok&&x.status==200){const cp=x.clone();caches.open(C).then(c=>c.put(e.request,cp))}return x}).catch(()=>r);return r||n}))});
