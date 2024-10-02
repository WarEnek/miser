var de=Object.defineProperty;var pe=(e,t,n)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var D=(e,t,n)=>pe(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function A(){}function ce(e){return e()}function ie(){return Object.create(null)}function M(e){e.forEach(ce)}function fe(e){return typeof e=="function"}function he(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function _e(e){return Object.keys(e).length===0}function u(e,t){e.appendChild(t)}function V(e,t,n){e.insertBefore(t,n||null)}function W(e){e.parentNode&&e.parentNode.removeChild(e)}function a(e){return document.createElement(e)}function U(e){return document.createTextNode(e)}function v(){return U(" ")}function w(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function o(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function E(e){return e===""?null:+e}function me(e){return Array.from(e.childNodes)}function ve(e,t){t=""+t,e.data!==t&&(e.data=t)}function P(e,t){e.value=t??""}function T(e,t,n){e.classList.toggle(t,!!n)}let X;function G(e){X=e}const B=[],se=[];let F=[];const ue=[],ge=Promise.resolve();let J=!1;function be(){J||(J=!0,ge.then(ae))}function Q(e){F.push(e)}const H=new Set;let I=0;function ae(){if(I!==0)return;const e=X;do{try{for(;I<B.length;){const t=B[I];I++,G(t),$e(t.$$)}}catch(t){throw B.length=0,I=0,t}for(G(null),B.length=0,I=0;se.length;)se.pop()();for(let t=0;t<F.length;t+=1){const n=F[t];H.has(n)||(H.add(n),n())}F.length=0}while(B.length);for(;ue.length;)ue.pop()();J=!1,H.clear(),G(e)}function $e(e){if(e.fragment!==null){e.update(),M(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Q)}}function ye(e){const t=[],n=[];F.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),F=t}const we=new Set;function Pe(e,t){e&&e.i&&(we.delete(e),e.i(t))}function Ee(e,t,n){const{fragment:r,after_update:l}=e.$$;r&&r.m(t,n),Q(()=>{const i=e.$$.on_mount.map(ce).filter(fe);e.$$.on_destroy?e.$$.on_destroy.push(...i):M(i),e.$$.on_mount=[]}),l.forEach(Q)}function ke(e,t){const n=e.$$;n.fragment!==null&&(ye(n.after_update),M(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ce(e,t){e.$$.dirty[0]===-1&&(B.push(e),be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Oe(e,t,n,r,l,i,c=null,m=[-1]){const b=X;G(e);const s=e.$$={fragment:null,ctx:[],props:i,update:A,not_equal:l,bound:ie(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(b?b.$$.context:[])),callbacks:ie(),dirty:m,skip_bound:!1,root:t.target||b.$$.root};c&&c(s.root);let k=!1;if(s.ctx=n?n(e,t.props||{},(p,C,...h)=>{const O=h.length?h[0]:C;return s.ctx&&l(s.ctx[p],s.ctx[p]=O)&&(!s.skip_bound&&s.bound[p]&&s.bound[p](O),k&&Ce(e,p)),C}):[],s.update(),k=!0,M(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const p=me(t.target);s.fragment&&s.fragment.l(p),p.forEach(W)}else s.fragment&&s.fragment.c();t.intro&&Pe(e.$$.fragment),Ee(e,t.target,t.anchor),ae()}G(b)}class Le{constructor(){D(this,"$$");D(this,"$$set")}$destroy(){ke(this,1),this.$destroy=A}$on(t,n){if(!fe(n))return A;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!_e(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ne="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ne);function Ae(e){let t;return{c(){t=a("p"),t.textContent=`Price per gram: ${e[5]().toFixed(2)}`,o(t,"class","svelte-e5tlve")},m(n,r){V(n,t,r)},p:A,d(n){n&&W(t)}}}function Se(e){let t;return{c(){t=a("p"),t.textContent=`Price per gram: ${e[6]().toFixed(2)}`,o(t,"class","svelte-e5tlve")},m(n,r){V(n,t,r)},p:A,d(n){n&&W(t)}}}function oe(e){let t,n,r,l,i;return{c(){t=a("div"),n=a("p"),r=U("Product "),l=U(e[4]),i=U(" is cheaper"),o(n,"class","svelte-e5tlve"),o(t,"class","result svelte-e5tlve")},m(c,m){V(c,t,m),u(t,n),u(n,r),u(n,l),u(n,i)},p(c,m){m&16&&ve(l,c[4])},d(c){c&&W(t)}}}function je(e){let t,n,r,l,i,c,m,b,s,k,p,C,h,O,S=e[5]()!==null,j,d,q,Y,K,Z,$,x,R,ee,y,te,ne=e[6]()!==null,le,z,re,L=S&&Ae(e),N=ne&&Se(e),_=e[4]!==null&&oe(e);return{c(){t=a("main"),n=a("h1"),n.textContent="Product Price Comparison",r=v(),l=a("div"),i=a("h2"),i.textContent="Product 1",c=v(),m=a("label"),m.textContent="Weight (g):",b=v(),s=a("input"),k=v(),p=a("label"),p.textContent="Price:",C=v(),h=a("input"),O=v(),L&&L.c(),j=v(),d=a("div"),q=a("h2"),q.textContent="Product 2",Y=v(),K=a("label"),K.textContent="Weight (g):",Z=v(),$=a("input"),x=v(),R=a("label"),R.textContent="Price:",ee=v(),y=a("input"),te=v(),N&&N.c(),le=v(),_&&_.c(),o(n,"class","svelte-e5tlve"),o(i,"class","svelte-e5tlve"),o(m,"class","svelte-e5tlve"),o(s,"type","number"),o(s,"placeholder","Enter weight"),o(s,"class","svelte-e5tlve"),o(p,"class","svelte-e5tlve"),o(h,"type","number"),o(h,"placeholder","Enter price"),o(h,"class","svelte-e5tlve"),o(l,"class","product svelte-e5tlve"),T(l,"cheaper",e[4]===1),o(q,"class","svelte-e5tlve"),o(K,"class","svelte-e5tlve"),o($,"type","number"),o($,"placeholder","Enter weight"),o($,"class","svelte-e5tlve"),o(R,"class","svelte-e5tlve"),o(y,"type","number"),o(y,"placeholder","Enter price"),o(y,"class","svelte-e5tlve"),o(d,"class","product svelte-e5tlve"),T(d,"cheaper",e[4]===2),o(t,"class","svelte-e5tlve")},m(f,g){V(f,t,g),u(t,n),u(t,r),u(t,l),u(l,i),u(l,c),u(l,m),u(l,b),u(l,s),P(s,e[0]),u(l,k),u(l,p),u(l,C),u(l,h),P(h,e[1]),u(l,O),L&&L.m(l,null),u(t,j),u(t,d),u(d,q),u(d,Y),u(d,K),u(d,Z),u(d,$),P($,e[2]),u(d,x),u(d,R),u(d,ee),u(d,y),P(y,e[3]),u(d,te),N&&N.m(d,null),u(t,le),_&&_.m(t,null),z||(re=[w(s,"input",e[8]),w(s,"input",e[7]),w(h,"input",e[9]),w(h,"input",e[7]),w($,"input",e[10]),w($,"input",e[7]),w(y,"input",e[11]),w(y,"input",e[7])],z=!0)},p(f,[g]){g&1&&E(s.value)!==f[0]&&P(s,f[0]),g&2&&E(h.value)!==f[1]&&P(h,f[1]),S&&L.p(f,g),g&16&&T(l,"cheaper",f[4]===1),g&4&&E($.value)!==f[2]&&P($,f[2]),g&8&&E(y.value)!==f[3]&&P(y,f[3]),ne&&N.p(f,g),g&16&&T(d,"cheaper",f[4]===2),f[4]!==null?_?_.p(f,g):(_=oe(f),_.c(),_.m(t,null)):_&&(_.d(1),_=null)},i:A,o:A,d(f){f&&W(t),L&&L.d(),N&&N.d(),_&&_.d(),z=!1,M(re)}}}function Ie(e,t,n){let r=0,l=0,i=0,c=0,m=null;const b=()=>r>0?l/r:null,s=()=>i>0?c/i:null,k=()=>{const S=b(),j=s();S!==null&&j!==null&&n(4,m=S<j?1:j<S?2:null)};function p(){r=E(this.value),n(0,r)}function C(){l=E(this.value),n(1,l)}function h(){i=E(this.value),n(2,i)}function O(){c=E(this.value),n(3,c)}return[r,l,i,c,m,b,s,k,p,C,h,O]}class Be extends Le{constructor(t){super(),Oe(this,t,Ie,je,he,{})}}new Be({target:document.getElementById("app")});
