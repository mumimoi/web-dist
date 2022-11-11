import{e,ae as _,bb as E,o,W as l,bf as y,bc as I,ay as g,bu as P,bE as T,t as h,bF as O,ak as x,ah as S,B as m,ai as k,v as D,aj as j,bG as b,k as d,a0 as f,bH as A,bI as L,G as a,H as s,bJ as $,bK as V,d as R,bs as M,P as F,Q as C,aw as z}from"./index.d7784eaf.js";import{u as v}from"./useT.763fd639.js";import{b as B}from"./useUtil.ef9475d8.js";import{g as W}from"./icon.374c8451.js";import{d as H}from"./Layout.c75b132a.js";import{O as c}from"./obj.fca5b341.js";const G=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(_,{get color(){return E()},boxSize:"$20",get as(){return W(o.obj)}}),e(l,{spacing:"$2",get children(){return[e(y,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(I,{color:"$neutral10",size:"sm",get children(){return[g(()=>P(o.obj.size))," \xB7 ",g(()=>T(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),w=()=>{const r=v(),n=h(()=>O(o.obj.name));return e(d,{get when(){return n().length},get children(){return e(x,{get children(){return[e(S,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:H})},get children(){return r("home.preview.open_with")}}),e(k,{get children(){return e(D,{get each(){return n()},children:i=>e(j,{as:"a",target:"_blank",get href(){return b(i.value,o.raw_url,o.obj.name)},get children(){return i.key}})})}})]}})}})},p=r=>{const n=v(),{copyCurrentRawLink:i}=B();return e(G,{get children(){return[e(f,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>i(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(d,{get when(){return r.openWith},get children(){return e(w,{})}})]}})},U=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),X=r=>e(L,{w:"$full",h:"70vh",get children(){return e(A.iframe,{w:"$full",h:"$full",get src(){return b(r.scheme,o.raw_url,o.obj.name)}})}}),J=r=>()=>e(X,{scheme:r}),K=[{name:"Markdown",type:c.TEXT,component:a(()=>s(()=>import("./markdown.22b97eb9.js"),["assets/markdown.22b97eb9.js","assets/index.d7784eaf.js","assets/index.659f4289.css","assets/useUtil.ef9475d8.js","assets/api.b6e19324.js","assets/useT.763fd639.js","assets/Markdown.f3e25bbf.js"]))},{name:"Text Editor",type:c.TEXT,component:a(()=>s(()=>import("./text-editor.2653ab1e.js"),["assets/text-editor.2653ab1e.js","assets/index.d7784eaf.js","assets/index.659f4289.css","assets/useT.763fd639.js","assets/useUtil.ef9475d8.js","assets/api.b6e19324.js"]))},{name:"HTML render",exts:["html"],component:a(()=>s(()=>import("./html.13428e82.js"),["assets/html.13428e82.js","assets/index.d7784eaf.js","assets/index.659f4289.css","assets/useUtil.ef9475d8.js","assets/api.b6e19324.js","assets/useT.763fd639.js"]))},{name:"Image",type:c.IMAGE,component:a(()=>s(()=>import("./image.21eee2ba.js"),["assets/image.21eee2ba.js","assets/index.d7784eaf.js","assets/index.659f4289.css","assets/useT.763fd639.js","assets/ImageWithError.700302d4.js"]))},{name:"Video",type:c.VIDEO,component:a(()=>s(()=>import("./video.b95c7c17.js"),["assets/video.b95c7c17.js","assets/index.d7784eaf.js","assets/index.659f4289.css","assets/useUtil.ef9475d8.js","assets/api.b6e19324.js","assets/useT.763fd639.js","assets/obj.fca5b341.js"]))},{name:"Audio",type:c.AUDIO,component:a(()=>s(()=>import("./audio.069a1d5e.js"),["assets/audio.069a1d5e.js","assets/audio.e5b5af14.css","assets/index.d7784eaf.js","assets/index.659f4289.css","assets/useUtil.ef9475d8.js","assets/api.b6e19324.js","assets/useT.763fd639.js","assets/obj.fca5b341.js"]))},{name:"Ipa",exts:["ipa"],component:a(()=>s(()=>import("./ipa.b18c9cf2.js"),["assets/ipa.b18c9cf2.js","assets/index.d7784eaf.js","assets/index.659f4289.css","assets/useT.763fd639.js","assets/useUtil.ef9475d8.js","assets/api.b6e19324.js","assets/icon.374c8451.js","assets/index.472518fa.js","assets/Layout.c75b132a.js","assets/useTitle.be7005c2.js","assets/Markdown.f3e25bbf.js","assets/index.1dde6a3b.js","assets/FolderTree.60b9de0c.js","assets/obj.fca5b341.js"]))},{name:"Plist",exts:["plist"],component:a(()=>s(()=>import("./plist.276eab22.js"),["assets/plist.276eab22.js","assets/index.d7784eaf.js","assets/index.659f4289.css","assets/useT.763fd639.js","assets/useUtil.ef9475d8.js","assets/api.b6e19324.js","assets/icon.374c8451.js","assets/index.472518fa.js","assets/Layout.c75b132a.js","assets/useTitle.be7005c2.js","assets/Markdown.f3e25bbf.js","assets/index.1dde6a3b.js","assets/FolderTree.60b9de0c.js","assets/obj.fca5b341.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/Aliyundrive/,component:a(()=>s(()=>import("./aliyun_office.2dc17060.js"),["assets/aliyun_office.2dc17060.js","assets/index.d7784eaf.js","assets/index.659f4289.css"]))}],Q=r=>{const n=[];return K.forEach(t=>{var u;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((u=t.exts)==null?void 0:u.includes($(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),V(r.name).forEach(t=>{n.push({name:t.key,component:J(t.value)})}),n.push({name:"Download",component:a(()=>s(()=>Promise.resolve().then(()=>U),void 0))}),n},q=()=>{const r=h(()=>Q({...o.obj,provider:o.provider})),[n,i]=R(r()[0]);return e(d,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(f,{w:"$full",spacing:"$2",get children(){return[e(M,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{i(r().find(u=>u.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(w,{})]}}),e(F,{get fallback(){return e(C,{})},get children(){return e(z,{get component(){return n().component}})}})]}})}})},ne=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));export{G as F,ne as a};