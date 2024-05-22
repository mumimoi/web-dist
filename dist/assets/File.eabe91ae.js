import{e,ar as O,au as _,ak as T,a0 as i,a3 as l,bM as I,b1 as y,av as h,c6 as P,cm as k,a as b,j as d,cn as x,a4 as v,aq as L,ai as $,B as m,am as A,E as S,an as D,cf as E,S as g,aE as j,ad as f,ci as V,K as R,co as M,U as o,V as a,cj as C,cp as z,k as F,b8 as B,X as W,Y as U,ao as X}from"./index.122e458b.js";import{g as H,O as c}from"./icon.4126769c.js";import{o as q}from"./index.c0346829.js";import{T as G}from"./Layout.929eb03e.js";const K=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(O,{boxSize:"$20",get fallback(){return e(_,{get color(){return T()},boxSize:"$20",get as(){return H(i.obj)}})},get src(){return i.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(I,{size:"lg",css:{wordBreak:"break-all"},get children(){return i.obj.name}}),e(y,{color:"$neutral10",size:"sm",get children(){return[h(()=>P(i.obj.size))," \xB7 ",h(()=>k(i.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),w=()=>{const r=b(),n=d(()=>x(i.obj.name)),{currentObjLink:s}=v();return e(g,{get when(){return n().length},get children(){return e(L,{get children(){return[e($,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:q})},get children(){return r("home.preview.open_with")}}),e(A,{get children(){return e(S,{get each(){return n()},children:t=>e(D,{as:"a",target:"_blank",get href(){return E(t.value,{raw_url:i.raw_url,name:i.obj.name,d_url:s(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=b(),{copyCurrentRawLink:s}=j();return e(K,{get children(){return[e(f,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>s(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return i.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(w,{})}})]}})},Y=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),J=r=>{const{currentObjLink:n}=v(),s=d(()=>E(r.scheme,{raw_url:i.raw_url,name:i.obj.name,d_url:n(!0),ts:!0}));return e(M,{w:"$full",h:"70vh",get children(){return[e(V.iframe,{w:"$full",h:"$full",get src(){return s()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:G,onClick:()=>{window.open(s(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return R()},p:"$1",boxSize:"$7"})]}})},N=r=>()=>e(J,{scheme:r}),Q=[{name:"HTML render",exts:["html"],component:o(()=>a(()=>import("./html.27bf6f80.js"),["assets/html.27bf6f80.js","assets/index.122e458b.js","assets/index.15d8d646.css"]))},{name:"Aliyun Video Previewer",type:c.VIDEO,provider:/^Aliyundrive(Open)?$/,component:o(()=>a(()=>import("./aliyun_video.137b0be0.js"),["assets/aliyun_video.137b0be0.js","assets/index.122e458b.js","assets/index.15d8d646.css","assets/icon.4126769c.js","assets/index.0c8c4dff.js","assets/index.c0346829.js","assets/Layout.929eb03e.js","assets/index.596a73d4.js","assets/FolderTree.3d633c2d.js","assets/index.ac470ba6.js","assets/video_box.9927fec5.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.58fcac46.js"]))},{name:"Markdown",type:c.TEXT,component:o(()=>a(()=>import("./markdown.3b49d80d.js"),["assets/markdown.3b49d80d.js","assets/index.122e458b.js","assets/index.15d8d646.css"]))},{name:"Markdown with word wrap",type:c.TEXT,component:o(()=>a(()=>import("./markdown_with_word_wrap.fe2b257b.js"),["assets/markdown_with_word_wrap.fe2b257b.js","assets/index.122e458b.js","assets/index.15d8d646.css"]))},{name:"Url Open",exts:["url"],component:o(()=>a(()=>import("./url.70265c15.js"),["assets/url.70265c15.js","assets/index.122e458b.js","assets/index.15d8d646.css","assets/icon.4126769c.js","assets/index.0c8c4dff.js","assets/index.c0346829.js","assets/Layout.929eb03e.js","assets/index.596a73d4.js","assets/FolderTree.3d633c2d.js","assets/index.ac470ba6.js"]))},{name:"Text Editor",type:c.TEXT,exts:["url"],component:o(()=>a(()=>import("./text-editor.39bac49d.js"),["assets/text-editor.39bac49d.js","assets/index.122e458b.js","assets/index.15d8d646.css","assets/index.2cb18b6d.js"]))},{name:"Image",type:c.IMAGE,component:o(()=>a(()=>import("./image.12bc3038.js"),["assets/image.12bc3038.js","assets/index.122e458b.js","assets/index.15d8d646.css","assets/ImageWithError.a2a38cd6.js"]))},{name:"Video",type:c.VIDEO,component:o(()=>a(()=>import("./video.07c09e37.js"),["assets/video.07c09e37.js","assets/index.122e458b.js","assets/index.15d8d646.css","assets/icon.4126769c.js","assets/index.0c8c4dff.js","assets/index.c0346829.js","assets/Layout.929eb03e.js","assets/index.596a73d4.js","assets/FolderTree.3d633c2d.js","assets/index.ac470ba6.js","assets/video_box.9927fec5.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.58fcac46.js"]))},{name:"Audio",type:c.AUDIO,component:o(()=>a(()=>import("./audio.55d9c3a3.js"),["assets/audio.55d9c3a3.js","assets/audio.e5b5af14.css","assets/index.122e458b.js","assets/index.15d8d646.css","assets/icon.4126769c.js","assets/index.0c8c4dff.js","assets/index.c0346829.js","assets/Layout.929eb03e.js","assets/index.596a73d4.js","assets/FolderTree.3d633c2d.js","assets/index.ac470ba6.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:o(()=>a(()=>import("./ipa.3b17717f.js"),["assets/ipa.3b17717f.js","assets/index.122e458b.js","assets/index.15d8d646.css","assets/icon.4126769c.js","assets/index.0c8c4dff.js","assets/index.c0346829.js","assets/Layout.929eb03e.js","assets/index.596a73d4.js","assets/FolderTree.3d633c2d.js","assets/index.ac470ba6.js"]))},{name:"Plist",exts:["plist"],component:o(()=>a(()=>import("./plist.1e586cc3.js"),["assets/plist.1e586cc3.js","assets/index.122e458b.js","assets/index.15d8d646.css","assets/icon.4126769c.js","assets/index.0c8c4dff.js","assets/index.c0346829.js","assets/Layout.929eb03e.js","assets/index.596a73d4.js","assets/FolderTree.3d633c2d.js","assets/index.ac470ba6.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:o(()=>a(()=>import("./aliyun_office.415882fc.js"),["assets/aliyun_office.415882fc.js","assets/index.122e458b.js","assets/index.15d8d646.css"]))},{name:"Asciinema",exts:["cast"],component:o(()=>a(()=>import("./asciinema.ec4d9b01.js"),["assets/asciinema.ec4d9b01.js","assets/asciinema.53412307.css","assets/index.122e458b.js","assets/index.15d8d646.css"]))}],Z=r=>{const n=[];return Q.forEach(t=>{var u;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((u=t.exts)==null?void 0:u.includes(C(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),z(r.name).forEach(t=>{n.push({name:t.key,component:N(t.value)})}),n.push({name:"Download",component:o(()=>a(()=>Promise.resolve().then(()=>Y),void 0))}),n},ee=()=>{const r=d(()=>Z({...i.obj,provider:i.provider})),[n,s]=F(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(f,{w:"$full",spacing:"$2",get children(){return[e(B,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{s(r().find(u=>u.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(w,{})]}}),e(W,{get fallback(){return e(U,{})},get children(){return e(X,{get component(){return n().component}})}})]}})}})},ae=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{K as F,ae as a};
