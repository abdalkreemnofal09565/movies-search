(function(e){function t(t){for(var n,o,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={1:0},a={1:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{2:"c99e01bd",3:"0ca6ba75",4:"f4ae749b",5:"dce95d3c",6:"c9ac232a",7:"1f78a8d8",8:"81255199"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={2:1,3:1,4:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{2:"c5bf1c4c",3:"b1f2e5a8",4:"b1f2e5a8",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0"}[e]+".css",a=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===n||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[e],f.parentNode.removeChild(f),r(s)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;s.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"2f39":function(e,t,r){"use strict";r.r(t);r("e6cf"),r("5319"),r("7d6e"),r("e54f"),r("985d"),r("31cd");var n=r("2b0e"),o=r("1f91"),a=r("42d2"),s=r("b05d"),i=r("2a19");n["a"].use(s["a"],{config:{},lang:o["a"],iconSet:a["a"],plugins:{Notify:i["a"]}});var c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},l=[],u={name:"App"},d=u,f=r("2877"),p=Object(f["a"])(d,c,l,!1,null,null,null),g=p.exports,h=r("ded3"),m=r.n(h),v=r("2f62"),b=r("bc3a"),y=r.n(b),w=e=>{let t=e.response.status,r=e.response.data,n=e.response.config;if(n.disableNotify)return;let o="",a="";400==t?(o=Object.values(r)[0],a="Validation Error"):401==t?(o=Object.values(r)[0],a="Authentication Error"):403==t?(o=Object.values(r)[0],a="Authorization Error"):500==t&&(o="Internal Server Error"),i["a"].create({message:o,caption:a,position:"top-right",type:"negative"})},P=r("b906");const S=y.a.create({baseURL:"https://baraa.usol.ca"});S.interceptors.request.use((e=>{let t=P["a"].getTokens();return t.access&&(e.headers["Authorization"]=`Bearer ${t.access}`),e}),(e=>Promise.reject(e))),S.interceptors.response.use((e=>e),(e=>(w(e),Promise.reject(e)))),n["a"].prototype.$axios=S;const j="user/register/",O="user/login/",E="user/personal_info/",C="director/view/",k="film/create/";class T{static register(e){return S.post(j,e).then((({data:e})=>e))}static login(e){return S.post(O,e).then((({data:e})=>e))}static getUser(){return S.get(E,{disableNotify:!0}).then((({data:e})=>e))}}var _={namespaced:!0,actions:{async register({},e){let t=await T.register(e);return P["a"].saveTokens(t),t}}},x={namespaced:!0,actions:{async login({},e){let t=await T.login(e);return P["a"].saveTokens(t),t}}};class A{static getCategories(){return S.get("/category/view/").then((({data:e})=>e))}}class D{static getDirectors(){return S.get(C).then((({data:e})=>e))}}class I{static addMovie(e){return S.post(k,e).then((({data:e})=>e))}}var N={namespaced:!0,state:{categories:[],directors:[]},getters:{categories:e=>e.categories,directors:e=>e.directors},mutations:{setCategories(e,t){e.categories=t},setDirectors(e,t){e.directors=t}},actions:{async fetchData({dispatch:e}){e("getCategories"),e("getDirectors")},async getCategories({commit:e}){let t=await A.getCategories();e("setCategories",t)},async getDirectors({commit:e}){let t=await D.getDirectors();e("setDirectors",t)},async submit({},e){let t=await I.addMovie(e);console.error(t)}}},L={SignUp:_,Login:x,AddMovie:N};n["a"].use(v["a"]);var M=function(){const e=new v["a"].Store({modules:m()({},L),strict:!1});return e},B=r("8c4f");r("ddb0");const U=[{path:"/",component:()=>Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"713b")),async beforeEnter(e,t,r){T.getUser().then((()=>r())).catch((()=>r("/auth/login")))},children:[{path:"",component:()=>Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"f5b8"))},{path:"movies/add",component:()=>Promise.all([r.e(0),r.e(8)]).then(r.bind(null,"b043"))}]},{path:"/auth",component:()=>Promise.all([r.e(0),r.e(6)]).then(r.bind(null,"3ce7")),beforeEnter(e,t,r){T.getUser().then((()=>r("/"))).catch((()=>r()))},children:[{path:"login",component:()=>Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"efcf"))},{path:"sign-up",component:()=>Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"80fd"))}]},{path:"*",component:()=>Promise.all([r.e(0),r.e(7)]).then(r.bind(null,"e51e"))}];var q=U;n["a"].use(B["a"]);var V=function(){const e=new B["a"]({scrollBehavior:()=>({x:0,y:0}),routes:q,mode:"history",base:"/"});return e},$=async function(){const e="function"===typeof M?await M({Vue:n["a"]}):M,t="function"===typeof V?await V({Vue:n["a"],store:e}):V;e.$router=t;const r={router:t,store:e,render:e=>e(g),el:"#q-app"};return{app:r,store:e,router:t}},z=r("ff52"),J=r("bc78");z["a"].set(!0),J["a"].setBrand("primary","#9c27b0");var F=async()=>{};const H="/";async function K(){const{app:e,store:t,router:r}=await $();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?r.resolve(e).route.fullPath:e;window.location.href=t},s=window.location.href.replace(window.location.origin,""),i=[void 0,F];for(let l=0;!1===o&&l<i.length;l++)if("function"===typeof i[l])try{await i[l]({app:e,router:r,store:t,Vue:n["a"],ssrContext:null,redirect:a,urlPath:s,publicPath:H})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&new n["a"](e)}K()},"31cd":function(e,t,r){},b906:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));const n="access",o="refresh";class a{static saveTokens({access:e,refresh:t}){void 0!==e&&localStorage.setItem(n,e),void 0!==e&&localStorage.setItem(o,t)}static getTokens(){return{access:localStorage.getItem(n)||void 0,refresh:localStorage.getItem(o)||void 0}}static resetTokens(){localStorage.removeItem(n),localStorage.removeItem(o)}}}});