import{d as _,u as C,a as x,b6 as u,e as v,ca as p,f as e,a2 as h,B as o,$ as T,cb as B,cc as F,cd as f,x as m,ce as b,cf as P,cg as s,bd as g,n as $,V as R,bx as D,ap as H,ar as I,a4 as L}from"./index.6067d580.js";import{o as M}from"./index.c51923b9.js";import{D as V}from"./DeletePopover.475f2797.js";import{W}from"./Wether.a80fc993.js";const z=n=>{const t=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return e(D,{get colorScheme(){return t[n.role].color},get children(){return t[n.role].name}})},O=n=>{const t=_(),i=a=>`$${a?"success":"danger"}9`;return e(h,{spacing:"$0_5",get children(){return e(m,{each:H,children:(a,d)=>e(I,{get label(){return t(`users.permissions.${a}`)},get children(){return e(T,{boxSize:"$2",rounded:"$full",get bg(){return i(L.can(n.user,d()))}})}})})}})},E=()=>{const n=_();M("manage.sidemenu.users");const{to:t}=C(),[i,a]=x(()=>u.get("/admin/user/list")),[d,k]=v([]),l=async()=>{const r=await a();g(r,c=>k(c.content))};l();const[S,U]=p(r=>u.post(`/admin/user/delete?id=${r}`)),[w,y]=p(r=>u.post(`/admin/user/cancel_2fa?id=${r}`));return e(R,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(h,{spacing:"$2",get children(){return[e(o,{colorScheme:"accent",get loading(){return i()},onClick:l,get children(){return n("global.refresh")}}),e(o,{onClick:()=>{t("/@manage/users/add")},get children(){return n("global.add")}})]}}),e(T,{w:"$full",overflowX:"auto",get children(){return e(B,{highlightOnHover:!0,dense:!0,get children(){return[e(F,{get children(){return e(f,{get children(){return[e(m,{each:["username","base_path","role","permission","available"],children:r=>e(b,{get children(){return n(`users.${r}`)}})}),e(b,{get children(){return n("global.operations")}})]}})}}),e(P,{get children(){return e(m,{get each(){return d()},children:r=>e(f,{get children(){return[e(s,{get children(){return r.username}}),e(s,{get children(){return r.base_path}}),e(s,{get children(){return e(z,{get role(){return r.role}})}}),e(s,{get children(){return e(O,{user:r})}}),e(s,{get children(){return e(W,{get yes(){return!r.disabled}})}}),e(s,{get children(){return e(h,{spacing:"$2",get children(){return[e(o,{onClick:()=>{t(`/@manage/users/edit/${r.id}`)},get children(){return n("global.edit")}}),e(V,{get name(){return r.username},get loading(){return S()===r.id},onClick:async()=>{const c=await U(r.id);g(c,()=>{$.success(n("global.delete_success")),l()})}}),e(o,{colorScheme:"accent",get loading(){return w()===r.id},onClick:async()=>{const c=await y(r.id);g(c,()=>{$.success(n("users.cancel_2fa_success")),l()})},get children(){return n("users.cancel_2fa")}})]}})}})]}})})}})]}})}})]}})};export{E as default};
