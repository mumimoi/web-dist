!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.a00c713e.js","./Folder-legacy.ad49998f.js","./index-legacy.7f7aca04.js","./index-legacy.e37680b0.js","./ImageWithError-legacy.e6f25415.js","./icon-legacy.6fa7b3d4.js"],(function(t){"use strict";var n,r,o,i,a,l,u,c,s,f,g,d,b,h,p,m,y,j,v,w,x,$,S,k,A,I,z;return{setters:[function(e){n=e.cA,r=e.e,o=e.ak,i=e.l,a=e.au,l=e.k,u=e.j,c=e.aI,s=e.b,f=e.a3,g=e.K,d=e.cS,b=e.r,h=e.aK,p=e.ay,m=e.at,y=e.S,j=e.c1,v=e.as,w=e.b1,x=e.ac},function(e){$=e.b},function(e){S=e.u},function(e){k=e.q},function(e){A=e.I},function(e){I=e.g,z=e.O}],execute:function(){t("G",(function(t){if((0,n().isHide)(t.obj))return null;var _=S().setPathAs,E=r(a,{get color(){return o()},get boxSize(){return"".concat(parseInt(i.grid_item_size)-30,"px")},get as(){return I(t.obj)}}),M=e(l(!1),2),C=M[0],O=M[1],H=u((function(){return c()&&(C()||t.obj.selected)})),K=$({id:1}).show,P=s(),D=P.pushHref,G=P.to;return r(x.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return r(f,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:g()}},as:k,get href(){return t.obj.name},"on:click":function(e){c()&&(e.preventDefault(),e.altKey?G(D(t.obj.name)):d(t.index,!t.obj.selected))},onMouseEnter:function(){O(!0),_(t.obj.name,t.obj.is_dir,!0)},onMouseLeave:function(){O(!1)},onContextMenu:function(e){b((function(){h(!1),d(t.index,!0,!0)})),K(e,{props:t.obj})},get children(){return[r(p,{class:"item-thumbnail",get h(){return"".concat(parseInt(i.grid_item_size),"px")},w:"$full","on:click":function(e){c()||t.obj.type===z.IMAGE&&(e.stopPropagation(),e.preventDefault(),m.emit("gallery",t.obj.name))},pos:"relative",get children(){return[r(y,{get when(){return H()},get children(){return r(j,{pos:"absolute",left:"$1",top:"$1","on:click":function(e){e.stopPropagation()},get checked(){return t.obj.selected},onChange:function(e){d(t.index,e.target.checked)}})}}),r(y,{get when(){return t.obj.thumb},fallback:E,get children(){return r(A,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return r(v,{size:"lg"})},fallbackErr:E,get src(){return t.obj.thumb},loading:"lazy"})}})]}}),r(w,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return t.obj.name},get children(){return t.obj.name}})]}})}})}))}}}))}();