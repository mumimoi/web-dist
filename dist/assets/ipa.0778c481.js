import{a as m,d as n,W as p,h as e,a2 as u,B as r,cU as g,cV as d,Q as a,cT as f}from"./index.f1b0e6c9.js";import{F as h}from"./File.aedde1ea.js";import"./icon.6186ddea.js";import"./index.8bdc6b8e.js";import"./index.abe49a29.js";import"./Layout.b99a473b.js";import"./index.974d1f0d.js";import"./FolderTree.b2fc48e6.js";const j=()=>{const t=m(),[i,o]=n(!1),[s,l]=n(!1),{currentObjLink:c}=p();return e(h,{get children(){return e(u,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${g}/i/${d(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{o(!0)},get children(){return t(`home.preview.${i()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(c(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{j as default};