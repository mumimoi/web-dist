import{f as e,bf as i,ae as w,d as y,n as b,e as k,a as r,b6 as c,bt as R,as as C,W as o,v as x,ab as N,ap as T,I as W,a0 as B,B as g,h as F,aN as H,ck as L}from"./index.8bddcd24.js";const z=t=>e(i,{get children(){return t.content}}),D=t=>e(w,{get src(){return t.content}}),M={string:z,image:D},V=()=>{const t=y();b.info(t("manage.messenger-tips"));const[a,l]=k(""),[d,u]=r(()=>c.post("/admin/message/get")),[p,h]=r(()=>c.post("/admin/message/send",{message:a()})),[m,S]=R([]),s=async()=>{const n=await u();F(n,I=>{S(L($=>$.push(I)))})},f=async()=>{const n=await h();H(n)},v=setInterval(s,1e3);return C(()=>clearInterval(v)),e(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return t("manage.received_msgs")}}),e(x,{each:m,children:n=>e(N,T({get component(){return M[n.type]}},n))})]}}),e(W,{w:"$full",get value(){return a()},onInput:n=>l(n.currentTarget.value)}),e(B,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return d()},onClick:s,get children(){return t("manage.receive")}}),e(g,{get loading(){return p()},onClick:f,get children(){return t("manage.send")}})]}})]}})};export{V as Messenger,M as Shower,V as default};
