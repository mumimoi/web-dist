!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,a=[],o=!0,c=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);o=!0);}catch(l){c=!0,i=l}finally{try{o||null==t.return||t.return()}finally{if(c)throw i}}return a}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.1a77090a.js","./useUtil-legacy.d0b67f6f.js","./File-legacy.73ef95d9.js","./api-legacy.6005676e.js","./icon-legacy.b3689132.js","./index-legacy.870a1844.js","./index-legacy.f34385a9.js","./Layout-legacy.a0a4a8e5.js","./Markdown-legacy.3803118b.js","./index-legacy.9e3c3d4a.js","./FolderTree-legacy.f72b695b.js"],(function(e){"use strict";var t,r,i,a,o,c,l,u,f,s,y;return{setters:[function(n){t=n.d,r=n.e,i=n.f,a=n.a2,o=n.B,c=n.ba,l=n.cx,u=n.o,f=n.cw},function(n){s=n.a},function(n){y=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),d=n(r(!1),2),g=d[0],m=d[1],p=n(r(!1),2),h=p[0],b=p[1],j=s().currentObjLink;return i(y,{get children(){return i(a,{spacing:"$2",get children(){return[i(o,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(c,"/i/").concat(l(encodeURIComponent(u.raw_url)+"/"+f(encodeURIComponent(u.obj.name))),".plist")},onClick:function(){m(!0)},get children(){return e("home.preview.".concat(g()?"installing":"install"))}}),i(o,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(j(!0))},onClick:function(){b(!0)},get children(){return e("home.preview.".concat(h()?"tr-installing":"tr-install"))}})]}})}})}))}}}))}();