import{a as c,k as n,a4 as p,e,ad as u,B as r,d4 as g,d5 as d,a0 as a,d3 as f}from"./index.e6b109ad.js";import{F as h}from"./File.cbeac057.js";import"./icon.7ca75330.js";import"./index.875554e3.js";import"./index.be96b7c7.js";import"./Layout.a80467c8.js";import"./index.ef7795e4.js";import"./FolderTree.be18ecf2.js";import"./index.3dd38b33.js";const B=()=>{const t=c(),[i,o]=n(!1),[s,l]=n(!1),{currentObjLink:m}=p();return e(h,{get children(){return e(u,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${g}/i/${d(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{o(!0)},get children(){return t(`home.preview.${i()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(m(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{B as default};
