import{aG as y,a as F,e,I as A,S as d,B as g,ad as $,M as v,x as I,b9 as G,y as M,z as x,A as O,C as _,k as C,a6 as B,bF as J,aS as P,bG as q,_ as K,w as L,q as N,bH as X,ak as f,au as S,b1 as j,K as Q,av as U,bz as W,a3 as Y,E as Z,p,bI as ee,b6 as te,bJ as ne}from"./index.e6b109ad.js";import{e as re,f as oe}from"./index.be96b7c7.js";const z=ee(),R=t=>{var o;const[n,a]=C("/");return(o=t.handle)==null||o.call(t,{setPath:a}),e(B,{class:"folder-tree-box",w:"$full",overflowX:"auto",get children(){return e(z.Provider,{get value(){var r,l,s;return{value:n,onChange:i=>{a(i),t.onChange(i)},autoOpen:(r=t.autoOpen)!=null?r:!1,forceRoot:(l=t.forceRoot)!=null?l:!1,showEmptyIcon:(s=t.showEmptyIcon)!=null?s:!1}},get children(){return e(T,{path:"/"})}})}})},T=t=>{const[n,a]=C(),{value:o,onChange:r,forceRoot:l,autoOpen:s,showEmptyIcon:i}=J(z),E=()=>{var c;return Boolean(i&&n()!==void 0&&!((c=n())!=null&&c.length))},[V,D]=P(()=>q(t.path,K(),l));let b=!1;const m=async()=>{var w;if((w=n())!=null&&w.length)return;const c=await D();te(c,H=>{b=!0,a(H)},()=>{u()&&h()})},{isOpen:u,onToggle:h}=y(),k=()=>o()===t.path;return L(N(o,async c=>{!s||ne(t.path)(c)&&(u()||h(),b||m())})),e(B,{get children(){return[e($,{spacing:"$2",get children(){return[e(d,{get when(){return!V()},get fallback(){return e(X,{size:"sm",get color(){return f()}})},get children(){return e(d,{get when(){return!E()},get fallback(){return e(S,{get color(){return f()},as:re})},get children(){return e(S,{get color(){return f()},as:oe,get transform(){return u()?"rotate(90deg)":"none"},transition:"transform 0.2s",cursor:"pointer",onClick:()=>{h(),u()&&m()}})}})}}),e(j,{css:{whiteSpace:"nowrap"},fontSize:"$md",cursor:"pointer",px:"$1",rounded:"$md",get bgColor(){return k()?"$info8":"transparent"},get _hover(){return{bgColor:k()?"$info8":Q()}},onClick:()=>{r(t.path)},get children(){return U(()=>t.path==="/",!0)()?"root":W(t.path)}})]}}),e(d,{get when(){return u()},get children(){return e(Y,{mt:"$1",pl:"$4",alignItems:"start",spacing:"$1",get children(){return e(Z,{get each(){return n()},children:c=>e(T,{get path(){return p(t.path,c.name)}})})}})}})]}})},ue=t=>{var r;const n=F(),[a,o]=C((r=t.defaultValue)!=null?r:"");return e(_,{size:"xl",blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},get children(){return[e(v,{}),e(I,{get children(){return[e(M,{get children(){return n("home.toolbar.choose_dst_folder")}}),e(x,{get children(){return e(R,{onChange:o})}}),e(O,{display:"flex",gap:"$2",get children(){return[e(g,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return n("global.cancel")}}),e(g,{get loading(){return t.loading},onClick:()=>{var l;return(l=t.onSubmit)==null?void 0:l.call(t,a())},get children(){return n("global.ok")}})]}})]}})]}})},se=t=>{const{isOpen:n,onOpen:a,onClose:o}=y(),r=F();return[e($,{w:"$full",spacing:"$2",get children(){return[e(A,{get id(){return t.id},get value(){return t.value},onInput:l=>t.onChange(l.currentTarget.value),get readOnly(){return t.onlyFolder},get onClick(){return t.onlyFolder?a:()=>{}},get placeholder(){return r(`global.${t.onlyFolder?"choose_folder":"choose_or_input_path"}`)}}),e(d,{get when(){return!t.onlyFolder},get children(){return e(g,{onClick:a,get children(){return r("global.choose")}})}})]}}),e(_,{size:"xl",get opened(){return n()},onClose:o,get children(){return[e(v,{}),e(I,{get children(){return[e(G,{}),e(M,{get children(){return r("global.choose_folder")}}),e(x,{get children(){return e(R,{forceRoot:!0,get onChange(){return t.onChange}})}}),e(O,{get children(){return e(g,{onClick:o,get children(){return r("global.confirm")}})}})]}})]}})]};export{R as F,ue as M,se as a};
