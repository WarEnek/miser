if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>n(e,o),f={module:{uri:o},exports:t,require:c};i[o]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-cFJ8QNSh.js",revision:null},{url:"assets/index-dk5h3AFo.css",revision:null},{url:"index.html",revision:"8732c33e2009a9b5af1780f24d6eafeb"},{url:"registerSW.js",revision:"29785444c1e89aeb6806d696c15dc39d"},{url:"icon-144x144.png",revision:"717a92a1c8692565f244924d0f298a58"},{url:"icon-192x192.png",revision:"bbf89446fcc49acc0a11eede83b994bd"},{url:"icon-512x512.png",revision:"2e693dab4a55f36fc14c170c10877b45"},{url:"manifest.webmanifest",revision:"97f01106f1d569e592ff91459fa83be2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
