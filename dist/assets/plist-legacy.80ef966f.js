!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,c,i=[],a=!0,o=!1;try{for(e=e.call(n);!(a=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){o=!0,c=u}finally{try{a||null==e.return||e.return()}finally{if(o)throw c}}return i}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.abadc4cb.js","./File-legacy.c2a61562.js","./useUtil-legacy.acfa2f02.js","./api-legacy.09765fd8.js","./icon-legacy.e83df035.js","./index-legacy.1c8af90e.js","./index-legacy.80692537.js","./Layout-legacy.c70a6ca0.js","./EncodingSelect-legacy.758cebd3.js","./index-legacy.5946878a.js","./FolderTree-legacy.1928d053.js"],(function(t){"use strict";var e,r,c,i,a,o;return{setters:[function(n){e=n.u,r=n.c,c=n.e,i=n.B,a=n.N},function(n){o=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=e(),u=n(r(!1),2),l=u[0],f=u[1];return c(o,{get children(){return c(i,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+a.raw_url},onClick:function(){f(!0)},get children(){return t("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();
