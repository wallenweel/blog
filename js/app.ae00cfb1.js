(function(e){function t(t){for(var r,a,o=t[0],c=t[1],s=t[2],l=0,f=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&f.push(u[a][0]),u[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==u[o]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},u={app:0},i=[];function o(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"411a6071","chunk-21a39aba":"8906ba20"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-21a39aba":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-21a39aba":"a8738364"}[e]+".css",u=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var s=i[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===u))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){s=f[o],l=s.getAttribute("data-href");if(l===r||l===u)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||u,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=u;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}u[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3755:function(e){e.exports=JSON.parse('{"f_found_article":"发现 {count} 篇文章","blog":"博客","search":"搜索","created":"创建","updated":"更新","article":"文章","comment":"评论"}')},"56d7":function(e,t,n){"use strict";n.r(t);n("eb18"),n("aa20"),n("737b"),n("f8cd");var r=n("d8bb"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],i=(n("5c0b"),n("4787")),o={},c=Object(i["a"])(o,a,u,!1,null,null,null),s=c.exports,l=n("719f");r["a"].use(l["a"]);var f=new l["a"]({routes:[{path:"/",name:"main",component:function(){return n.e("chunk-21a39aba").then(n.bind(null,"cd56"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),p=n("a32a"),d=n("4a78"),g=(n("86ea"),n("a77d")),b=n("22e1"),h=n.n(b),m=(n("7872"),n("20f9"),n("1d3f"),n("2e11"),n("f7b6"),n("eae5"),n("d90e")),v="production",w=!0,O={name:"GiBlog Alpha"},x={color:{primary:"#8a2be2"}},y={path:"./custom/",get gist(){return{file:this.path+"/gist.ini",reg:/^(id|public|base64_token|config|settings) *= *(.*)/gim,filename:{config:this.config.filename,settings:this.settings.filename}}},get config(){var e="config.json";return{filename:e,file:this.path+e}},get settings(){var e="settings.json";return{filename:e,file:this.path+e}},get example(){var e="example.";return{config:this.path+e+this.config.filename,settings:this.path+e+this.settings.filename}}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};try{for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=e(n);return[null,a]}catch(u){return[u]}},j=(n("5ea4"),function(){var e="font-family:sans-serif;display:inline-block;padding-bottom:.5px;",t=["%c  ".concat(O.name,"  %c  ").concat(v,"  "),"".concat(e,"border-radius:3px 0 0 3px;background:").concat(x.color.primary,";color:#f7f7f7;"),"".concat(e,"border-radius:0 3px 3px 0;background:#505050;color:#9f9f9f;font-style:italic;")],n=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"log",r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return r||w?(e=console[n]).bind.apply(e,[window.console].concat(t)):function(){}};return{log:n("log",!1),warn:n("warn"),error:n("error"),info:n("info")}}()),_="GET_GIST_FILE_FAILED",A="GET_GIST_OPTION_FAILED",T="GET_GIST_CONFIG_FAILED",S="GET_GIST_SETTINGS_FAILED",F="GET_CONFIG_FAILED",R="NOT_FOUND_CONFIG",E="CONNECT_API_ERROR",P="NOT_FOUND_ANY_ISSUES";function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach((function(t){Object(m["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(){return G.apply(this,arguments)}function G(){return G=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,u,i,o,c,s,l,f,p,g,b,h,m,v;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=y.gist,n=y.config,r=y.settings,a=y.example,u=null,i=null,o=null,e.next=4,U(t);case 4:if(c=e.sent,s=Object(d["a"])(c,2),u=s[0],i=s[1],null!==u){e.next=11;break}return l=[i[t.filename.config],i[t.filename.settings]],f=l[0],p=l[1],e.abrupt("return",[u,{config:f,settings:p}]);case 11:return e.next=13,D(n,r,a);case 13:if(g=e.sent,b=Object(d["a"])(g,2),u=b[0],o=b[1],null!==u){e.next=20;break}return h=[o[n.filename],o[r.filename]],m=h[0],v=h[1],e.abrupt("return",[u,{config:m,settings:v}]);case 20:return e.abrupt("return",[u]);case 21:case"end":return e.stop()}}),e)}))),G.apply(this,arguments)}function D(){return L.apply(this,arguments)}function L(){return L=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,u,i,o,c,s,l,f,p,b,h,v,w,O=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=O.length>0&&void 0!==O[0]?O[0]:{},r=O.length>1&&void 0!==O[1]?O[1]:{},a=O.length>2&&void 0!==O[2]?O[2]:{},u=null,i=null,o=null,c=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,fetch(t);case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",[n,a]);case 11:return e.prev=11,e.t0=e["catch"](1),j.error("Get Config File: ".concat(t," Failed."),e.t0),e.abrupt("return",[F,e.t0]);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),e.next=7,c(n.file);case 7:if(s=e.sent,l=Object(d["a"])(s,2),u=l[0],i=l[1],null===u){e.next=18;break}return e.next=14,c(a.config);case 14:f=e.sent,p=Object(d["a"])(f,2),u=p[0],i=p[1];case 18:if(null===u){e.next=20;break}return e.abrupt("return",[u]);case 20:return e.next=22,c(r.file);case 22:if(b=e.sent,h=Object(d["a"])(b,2),u=h[0],o=h[1],null===u){e.next=33;break}return e.next=29,c(a.settings);case 29:v=e.sent,w=Object(d["a"])(v,2),u=w[0],o=w[1];case 33:if(null===u){e.next=35;break}return e.abrupt("return",[u]);case 35:return e.abrupt("return",[u,(t={},Object(m["a"])(t,n.filename,i),Object(m["a"])(t,r.filename,o),t)]);case 36:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}function U(e){return B.apply(this,arguments)}function B(){return B=Object(g["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,u,i,o,c,s,l,f,p,b,v,w,O,x,y,E,P,N,C,G,D,L,U,B,J,M;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.file,r=t.reg,a=t.filename,u=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,a,u,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n);case 3:return t=e.sent,e.next=6,t.text();case 6:if(a=e.sent,u=a.match(r),u){e.next=10;break}return e.abrupt("return",[A]);case 10:return i=u,i=i.map((function(e){return e.split(/ *= */)})),i=i.reduce((function(e,t){var n=Object(d["a"])(t,2),r=n[0],a=n[1];return I({},e,Object(m["a"])({},r,a))}),{}),e.abrupt("return",[null,i]);case 16:return e.prev=16,e.t0=e["catch"](0),j.error(e.t0),e.abrupt("return",[_,e.t0]);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),i=null,o=null,e.next=6,u();case 6:if(c=e.sent,s=Object(d["a"])(c,2),i=s[0],o=s[1],j.log("Found Gist Options: ",o),null===i){e.next=13;break}return e.abrupt("return",[A]);case 13:return l=o,f=l.id,p=l.public,b=l.base64_token,v=l.config,w=l.settings,O=null,O="yes"!==p||b?new h.a({token:atob(b)}):new h.a,e.next=18,O.getGist(f).read();case 18:if(x=e.sent,y=x.status,E=x.data,P=void 0===E?{}:E,200===y){e.next=24;break}return e.abrupt("return",[F,y]);case 24:if(N=null,N=Object.entries(P.files),N.length){e.next=29;break}return j.error("Not Found Gist File, Please Check: ",P.html_url),e.abrupt("return",[R]);case 29:if(C=null,G=null,N=N.reduce((function(e,t){var n=Object(d["a"])(t,2),r=n[0],a=n[1];return I({},e,Object(m["a"])({},r,a))}),{}),D=N[v||a.config].content,L=k(JSON.parse,D),U=Object(d["a"])(L,2),i=U[0],C=U[1],null===i){e.next=38;break}return e.abrupt("return",[T]);case 38:if(N[a.config]=C,B=N[w||a.settings].content,J=k(JSON.parse,B),M=Object(d["a"])(J,2),i=M[0],G=M[1],null===i){e.next=46;break}return e.abrupt("return",[S]);case 46:return N[a.settings]=G,j.log("Found Gist Files",N),e.abrupt("return",[i,N]);case 49:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}var J=n("ed46");function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.avatar_url,n=e.bio,r=e.blog,a=e.email,u=e.followers,i=e.following,o=e.id,c=e.name,s=e.updated_at;return{avatar:t,description:n,home:r,email:a,followers:u,following:i,id:o,name:c,updated:s}}function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){var t=e.title,n=e.body,r=e.comments,a=e.created_at,u=e.html_url,i=e.id,o=e.number,c=e.state,s=e.updated_at,l=e.labels;return{title:t,content:n,excerpt:(n||"").slice(0,20),comments:r,created:a,url:u,id:i,number:o,state:c,updated:s,tags:z(l)}}))}function z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[{id:0,color:"",name:"no tag",url:""}];return e.length?[].concat(Object(J["a"])(t?n:[]),Object(J["a"])(e)).map((function(e){var t=e.color,n=e.id,r=e.name,a=e.url;return{color:t,id:n,name:r,url:a}})):n}var $={init:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,u,i,o,c,s,l,f,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.dispatch,a=[null,null],u=a[0],i=a[1],o=a[2],e.next=4,C();case 4:if(c=e.sent,s=Object(d["a"])(c,2),u=s[0],l=s[1],i=l.config,o=l.settings,null===u){e.next=12;break}return e.abrupt("return",[u]);case 12:return n("updateConfig",i),j.log("Updated Config: ",i),n("updateSettings",o),j.log("Updated Settings: ",o),e.next=18,r("firstFetching");case 18:if(f=e.sent,p=Object(d["a"])(f,1),u=p[0],null===u){e.next=23;break}return e.abrupt("return",[u]);case 23:return e.abrupt("return",[u]);case 24:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),firstFetching:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,u,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,r=null,e.next=4,n("getProfile");case 4:if(a=e.sent,u=Object(d["a"])(a,1),r=u[0],null===r){e.next=9;break}return e.abrupt("return",[r]);case 9:return e.next=11,n("getIssues");case 11:if(i=e.sent,o=Object(d["a"])(i,1),r=o[0],null===r){e.next=16;break}return e.abrupt("return",[r]);case 16:return e.abrupt("return",[r]);case 17:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),genApi:H,getProfile:Y,getIssues:V,getMarkdown:X};function H(e){return K.apply(this,arguments)}function K(){return K=Object(g["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,u,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,r=n.username,a=n.password,u=n.token,i=null,o=new h.a({username:r,password:a,token:u}),e.abrupt("return",[i,o]);case 5:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}function Y(e){return Q.apply(this,arguments)}function Q(){return Q=Object(g["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,u,i,o,c,s,l,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.dispatch,e.next=3,r("genApi");case 3:return a=e.sent,u=Object(d["a"])(a,2),i=u[1],e.next=8,i.getUser().getProfile();case 8:if(o=e.sent,c=o.status,s=o.data,l=void 0===s?[]:s,200===c){e.next=14;break}return e.abrupt("return",[E]);case 14:return f=M(l),n("updateProfile",f),e.abrupt("return",[null]);case 17:case"end":return e.stop()}}),e)}))),Q.apply(this,arguments)}function V(e){return W.apply(this,arguments)}function W(){return W=Object(g["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,u,i,o,c,s,l,f,p,b;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,r=t.commit,a=t.dispatch,e.next=3,a("genApi");case 3:return u=e.sent,i=Object(d["a"])(u,2),o=i[1],c=n.username,s=n.repo,l=o.getIssues(c,s),f=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,n,a,u,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.listIssues();case 2:if(t=e.sent,n=t.status,a=t.data,u=void 0===a?[]:a,200===n){e.next=8;break}return e.abrupt("return",E);case 8:if(u.length){e.next=10;break}return e.abrupt("return",P);case 10:i=q(u),r("updateArticles",i),r("updateFocusedArticles");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,n,a,u,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.listLabels();case 2:if(t=e.sent,n=t.status,a=t.data,u=void 0===a?[]:a,200===n){e.next=8;break}return e.abrupt("return",E);case 8:if(u.length){e.next=10;break}return e.abrupt("return",P);case 10:i=z(u,!0),r("updateTags",i);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=null,e.next=13,f();case 13:if(e.t0=e.sent,e.t0){e.next=16;break}e.t0=null;case 16:return b=e.t0,e.next=19,p();case 19:if(e.t1=e.sent,e.t1){e.next=22;break}e.t1=null;case 22:return b=e.t1,e.abrupt("return",[b]);case 24:case"end":return e.stop()}}),e)}))),W.apply(this,arguments)}function X(e){return Z.apply(this,arguments)}function Z(){return Z=Object(g["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,u,i,o,c,s,l=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.dispatch,r=l.length>1&&void 0!==l[1]?l[1]:"",r){e.next=4;break}return e.abrupt("return",["text is blank"]);case 4:return e.next=6,n("genApi");case 6:return a=e.sent,u=Object(d["a"])(a,2),i=u[1],e.next=11,i.getMarkdown().render({text:r});case 11:if(o=e.sent,c=o.status,s=o.data,200===c){e.next=16;break}return e.abrupt("return",[E]);case 16:return e.abrupt("return",[null,s]);case 17:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}var ee={updateInstall:function(e,t){var n=t.repo,r=t.config;Object.assign(e.install,{repo:n,config:r})},updateConfig:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];e.config=t;var n=t[0],r=n.base64_token,a=n.username,u=n.theme,i=n.repos;e.token=atob(r),e.username=a,e.repo=i[0],e.theme=u},updateSettings:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.theme;e.theme=n},updateProfile:function(e,t){Object.assign(e.profile,t)},updateArticles:function(e,t){e.articles=t},updateFocusedArticles:function(e){var t=e.articles||[],n=e.focusedTags||[];if(n.length){var r=t.filter((function(e){var t=e.tags,r=void 0===t?[]:t;return!!n.filter((function(e){return!!r.filter((function(t){return e===t.id})).length})).length})).map((function(e){var t=e.id;return t}));e.focusedArticles=r}else e.focusedArticles=t.map((function(e){var t=e.id;return t}))},updateArticle:function(e,t){e.article=t},updateTags:function(e,t){e.tags=t},addFocusedTag:function(e,t){var n=e.focusedTags||[];n.filter((function(e){return e===t})).length||(e.focusedTags=[].concat(Object(J["a"])(n),[t]))},subFocusedTag:function(e,t){e.focusedTags=(e.focusedTags||[]).filter((function(e){return e!==t}))},updateComments:function(e,t){e.comments=t}};r["a"].use(p["a"]);var te={config:null,repo:null,username:null,password:null,token:null,profile:{id:null,name:null,email:null,home:null,avatar:null,description:null,followers:null,following:null,updated:null},articles:null,focusedArticles:null,article:null,comments:null,tags:null,focusedTags:null,theme:null},ne=new p["a"].Store({state:te,mutations:ee,actions:$}),re=n("70ce"),ae=n("9626"),ue=n("3755");r["a"].use(re["a"]);var ie={en:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}},"zh-cn":{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0}}},oe=new re["a"]({locale:"zh-cn",fallbackLocale:"en-us",dateTimeFormats:ie,messages:{"en-us":ae,"zh-cn":ue}}),ce=n("0717");Object(ce["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,ne.dispatch("init"),new r["a"]({router:f,store:ne,i18n:oe,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("b9b9"),a=n.n(r);a.a},9626:function(e){e.exports=JSON.parse('{"f_found_article":"Found {count} Article","blog":"Blog","search":"Search","created":"Created","updated":"Updated","article":"Article | Article | Articles","comment":"Comment | Comments"}')},b9b9:function(e,t,n){}});
//# sourceMappingURL=app.ae00cfb1.js.map