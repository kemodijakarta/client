"use strict";var precacheConfig=[["./index.html","a7c49a52d48bc63a69abedcb114fef12"],["./static/css/main.a62157b5.css","aa3bfd4c35b6bc1fbb7a6869f37a6900"],["./static/media/1-en.bd7d88b4.jpeg","bd7d88b4f3ed981dc88b55956faea8b5"],["./static/media/1.1ea50f60.jpeg","1ea50f6030d88465ab1fbf3476566532"],["./static/media/2-en.d55d5e54.jpeg","d55d5e54648ae6f52eae606618d379e7"],["./static/media/2.5ecf7aa9.jpeg","5ecf7aa9f2fc67d08799ffe7a90de234"],["./static/media/3-en.49f30014.jpeg","49f30014614337332fb78a78fa847316"],["./static/media/3.9a469cf1.jpeg","9a469cf1838e18be083c835c586e1ad8"],["./static/media/calc-medic2.fd38707d.jpeg","fd38707d27e779f90cf25c68c17f71a8"],["./static/media/home-image.58ffdd73.png","58ffdd732399ef43660b74420c0bf750"],["./static/media/konsultasi.8a74cd9a.jpg","8a74cd9a63d658d162fd3240f52b98f8"],["./static/media/loader.d9fe32c9.gif","d9fe32c95e172e8b3c3728dcdfe2aab8"],["./static/media/logo-kemo.1b23db2a.png","1b23db2a5544772db2a8271e18c49513"],["./static/media/makanan-sehat.caa2f4eb.jpg","caa2f4ebb4bf7f60b425808c7a15debe"],["./static/media/nurse-helping-senior-man-exit-260nw-742009099.a572df6e.jpg","a572df6ea604d4e8b416945016cf18f4"],["./static/media/perawat-homecare.60076092.jpg","600760925a1f10b812e442667a104efd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});