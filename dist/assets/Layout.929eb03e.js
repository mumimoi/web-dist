import{u as wt,a as _,b as M,s as ee,n as E,c as at,p as J,g as _t,f as kt,_ as lt,l as te,o as Ae,d as k,e,P as $t,h as vt,i as yt,j as A,k as y,m as Ct,q as me,r as xt,t as St,v as Mt,w as ke,M as U,x as W,y as V,z as q,S as b,I as $e,T as Ot,F as Ft,A as re,B as S,C as K,D as ie,E as ce,G as Rt,H as Tt,J as Lt,K as De,L as it,N as It,O as Et,Q as Bt,R as se,U as fe,V as pe,W as Oe,X as He,Y as ve,Z as Fe,$ as B,a0 as p,a1 as zt,a2 as x,a3 as G,a4 as Pt,a5 as At,a6 as oe,a7 as Dt,a8 as st,a9 as Ht,aa as jt,ab as Vt,ac as Re,ad as z,ae as Nt,af as ye,ag as Ce,ah as be,ai as je,aj as Ut,ak as he,al as Ee,am as Ve,an as ne,ao as Wt,ap as qt,aq as Ne,ar as Kt,as as Gt,at as h,au as Ue,av as xe,aw as Xt,ax as Be,ay as ct,az as X,aA as Jt,aB as Yt,aC as Qt,aD as ut,aE as Zt,aF as dt,aG as C,aH as Te,aI as en,aJ as tn,aK as nn,aL as Je,aM as rn,aN as on,aO as an,aP as ln,aQ as sn,aR as cn,aS as P,aT as un,aU as D,aV as dn,aW as gn,aX as hn,aY as mn,aZ as fn,a_ as pn,a$ as bn,b0 as wn,b1 as Se,b2 as _n,b3 as kn,b4 as Ye,b5 as $n,b6 as vn,b7 as yn,b8 as Qe,b9 as Cn,ba as xn,bb as Sn,bc as Mn,bd as On,be as Fn,bf as Rn,bg as Tn,bh as Ln,bi as In,bj as En,bk as ze,bl as Bn,bm as zn,bn as Pn,bo as An,bp as Dn,bq as Hn,br as jn,bs as Vn,bt as Nn,bu as Un,bv as Wn,bw as qn,bx as Kn,by as Gn}from"./index.122e458b.js";import{u as Xn,B as gt,a as ht,b as Jn,c as Yn}from"./index.0c8c4dff.js";import{u as L,r as Qn,a as Zn,b as er,R as tr}from"./index.596a73d4.js";import{F as nr,M as We}from"./FolderTree.3d633c2d.js";import{A as rr,F as mt,C as or,a as ar,B as lr,b as ir,T as sr,c as Ze,d as cr}from"./index.c0346829.js";function _e(t){return t==null||t===""}function ur(t){return t==null}async function dr(t,n){let r="/downloads/alist";const o=await at.post(t,{id:Math.random().toString(),jsonrpc:"2.0",method:"aria2.getGlobalOption",params:["token:"+n]});return console.log(o),o.status===200&&(_e(o.data.result.dir)||(r=o.data.result.dir),r=r.endsWith("/")?r.slice(0,-1):r),r}const gr=()=>{const{rawLinks:t}=wt(),n=_(),{pathname:r}=M();return{batchDownloadSelected:()=>{t(!0).forEach(l=>{window.open(l,"_blank")})},sendToAria2:async()=>{const o=ee(),l=async(i,a)=>{var c;if(a.is_dir){const u=await kt(J(r(),i,a.name),lt());if(u.code!==200)return u.message;const d=[];for(const m of(c=u.data.content)!=null?c:[]){const $=await l(J(i,a.name),m);if(typeof $=="string")return $;d.push(...$)}return d}else return[{path:J(i,a.name),dir:i,url:_t(J(r(),i),a,"direct",!0),name:a.name}]},{aria2_rpc_url:s,aria2_rpc_secret:g}=te;if(!s){E.warning(n("home.toolbar.aria2_not_set"));return}try{let i="/downloads/alist";i=await dr(s,g);let a=!1;E.info(`${n("home.package_download.fetching_struct")}`);for(const c of o){const u=await l("",c);if(typeof u!="object"||u.length===void 0)return E.error(`${n("home.package_download.fetching_struct_failed")}: ${u}`),u;for(let d=0;d<u.length;d++){if(_e(u[d].path)||ur(u[d].dir)||_e(u[d].url)||_e(u[d].name)){E.error(`${n("home.package_download.fetching_struct_failed")}: ${JSON.stringify(u[d])}`);continue}a||(a=!0,E.info(`${n("home.package_download.downloading")}`));const m=await at.post(s,{id:Math.random().toString(),jsonrpc:"2.0",method:"aria2.addUri",params:["token:"+g,[u[d].url],{out:u[d].name,dir:i+u[d].dir,"check-certificate":"false"}]});console.log(m)}}E.success(n("home.toolbar.send_aria2_success"))}catch(i){console.error(i),E.error(`failed to send to aria2: ${i}`)}}}},hr=t=>(t=Array.isArray(t)?t[0]:t,t instanceof Element?t:void 0),mr=(t,n)=>{const r={once:!0};t.addEventListener("motioncomplete",n,r),k(t.removeEventListener.bind(t,"motioncomplete",n,r))},fr=t=>{let{initial:n=!0}=t;Ae(()=>n=!0);let r=!1,o=[],l=[],s=[];return k(()=>{s.concat(l).forEach(g=>g()),l=s=o=[]}),e(Mt.Provider,{value:{addCleanup:g=>l.push(g),addMount:g=>o.push(g),initial:()=>n},get children(){return e($t.Provider,{value:void 0,get children(){return vt(()=>{const g=yt(()=>t.children),i=A(()=>hr(g())),[a,c]=y(),[u,d]=y();return Ct(me(i,v=>{s.push(...l),l=[],xt(()=>{t.exitBeforeEnter?(c(),$(()=>!r&&m(v))):(m(v),$())})})),[a,u];function m(v){c(v),o.forEach(I=>I()),o=[]}function $(v){var ae;const I=()=>{d(),s.forEach(le=>le()),s=[],v==null||v()},f=d((ae=a())!=null?ae:u());if(!f)return I();const O=St.get(f);if(!O||!O.getOptions().exit)return I();O.setActive("exit",r=!0),mr(f,()=>{r=!1,I()})}})}})}})},Le=t=>{var i;const[n,r]=y((i=t.defaultValue)!=null?i:""),o=_();let l;const s=()=>{const a=n().lastIndexOf(".");setTimeout(()=>{a>0&&t.isRenamingFile?l.setSelectionRange(0,a):l.select()},10)};ke(()=>{l&&(l.focus(),s()),k(()=>{l&&l.setSelectionRange(0,0)})});const g=()=>{var a;if(!n()){E.warning(o("global.empty_input"));return}(a=t.onSubmit)==null||a.call(t,n()),r("")};return e(K,{blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},initialFocus:"#modal-input",get children(){return[e(U,{}),e(W,{get children(){return[e(V,{get children(){return o(t.title)}}),e(q,{get children(){return[e(b,{get when(){return t.topSlot},get children(){return t.topSlot}}),e(b,{get when(){return t.type==="text"},get fallback(){return e($e,{id:"modal-input",get type(){return t.type},get value(){return n()},ref:a=>l=a,onInput:a=>{r(a.currentTarget.value)},onFocus:s,onKeyDown:a=>{a.key==="Enter"&&g()}})},get children(){return e(Ot,{id:"modal-input",get value(){return n()},ref:a=>l=a,onInput:a=>{r(a.currentTarget.value)},onFocus:s})}}),e(b,{get when(){return t.tips},get children(){return e(Ft,{get children(){return t.tips}})}}),e(b,{get when(){return t.bottomSlot},get children(){return t.bottomSlot}})]}}),e(re,{display:"flex",gap:"$2",get children(){return[e(S,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return o("global.cancel")}}),e(S,{get loading(){return t.loading},onClick:()=>g(),get children(){return o("global.ok")}})]}})]}})]}})},pr=()=>{const{pathname:t}=M(),n=A(()=>["",...t().split("/").filter(Boolean)]),r=_(),{setPathAs:o}=L(),l=A(()=>{const s={_after:{content:"",bgColor:"$background",position:"absolute",height:"100%",width:"99vw",zIndex:-1,transform:"translateX(-50%)",left:"50%",top:0}};switch(te.position_of_header_navbar){case"only_navbar_sticky":return{...s,position:"sticky",zIndex:"$sticky",top:0};case"sticky":return{...s,position:"sticky",zIndex:"$sticky",top:60};default:return{_after:void 0,position:void 0,zIndex:void 0,top:void 0}}});return e(Bt,ie(l,{background:"$background",class:"nav",w:"$full",get children(){return e(ce,{get each(){return n()},children:(s,g)=>{const i=A(()=>g()===n().length-1),a=n().slice(0,g()+1).join("/"),c=Rt(a);let u=()=>s;return u()===""&&(u=()=>se("home_icon")+r("manage.sidemenu.home")),e(Tt,{class:"nav-item",get children(){return[e(Lt,{class:"nav-link",css:{wordBreak:"break-all"},color:"unset",get _hover(){return{bgColor:De(),color:"unset"}},_active:{transform:"scale(.95)",transition:"0.1s"},cursor:"pointer",p:"$1",rounded:"$lg",get currentPage(){return i()},get as(){return i()?void 0:it},get href(){return It(c)},onMouseEnter:()=>o(a),children:u}),e(b,{get when(){return!i()},get children(){return e(Et,{class:"nav-separator"})}})]}})}})}}))},br=fe(()=>pe(()=>import("./Folder.7185324d.js").then(t=>t.F),["assets/Folder.7185324d.js","assets/Folder.b511ba9e.css","assets/index.122e458b.js","assets/index.15d8d646.css","assets/icon.4126769c.js","assets/index.0c8c4dff.js","assets/index.c0346829.js","assets/index.ac470ba6.js","assets/video_box.9927fec5.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/index.596a73d4.js","assets/Paginator.654ce5bb.js"])),wr=fe(()=>pe(()=>import("./File.eabe91ae.js").then(t=>t.a),["assets/File.eabe91ae.js","assets/index.122e458b.js","assets/index.15d8d646.css","assets/icon.4126769c.js","assets/index.0c8c4dff.js","assets/index.c0346829.js","assets/index.ac470ba6.js"])),_r=fe(()=>pe(()=>import("./Password.c2a1caed.js"),["assets/Password.c2a1caed.js","assets/index.122e458b.js","assets/index.15d8d646.css","assets/index.596a73d4.js","assets/index.c0346829.js"])),[kr,$r]=y();let et=!0;const vr=()=>{const t=Oe("white","$neutral3"),{pathname:n}=M(),{handlePathChange:r}=L();let o=n();return ke(me(n,l=>{Xn(),et||Zn(),et=!1,Qn(o,window.scrollY),r(l),o=l})),e(G,{ref:l=>$r(l),class:"obj-box",w:"$full",rounded:"$xl",get bgColor(){return t()},p:"$2",shadow:"$lg",spacing:"$2",get children(){return e(He,{get fallback(){return e(ve,{})},get children(){return e(Fe,{get children(){return[e(B,{get when(){return p.err},get children(){return e(zt,{get msg(){return p.err},disableColor:!0})}}),e(B,{get when(){return[x.FetchingObj,x.FetchingObjs].includes(p.state)},get children(){return e(ve,{})}}),e(B,{get when(){return p.state===x.NeedPassword},get children(){return e(_r,{})}}),e(B,{get when(){return[x.Folder,x.FetchingMore].includes(p.state)},get children(){return e(br,{})}}),e(B,{get when(){return p.state===x.File},get children(){return e(wr,{})}})]}})}})}})};function tt(t){const n=Oe("white","$neutral3"),{proxyLink:r}=Pt(),{pathname:o}=M(),l=A(me(()=>p.state,()=>{if(![x.FetchingMore,x.Folder,x.File].includes(p.state))return"";if([x.FetchingMore,x.Folder].includes(p.state)){const i=p.objs.find(a=>t.files.find(c=>c.toLowerCase()===a.name.toLowerCase()));if(i)return r(i,!0)}return p[t.fromMeta]&&typeof p[t.fromMeta]=="string"?p[t.fromMeta]:""})),s=async i=>{let a={content:i};return/^https?:\/\//g.test(i)&&(a=await Ht(i)),setTimeout(()=>{er(o())}),a},[g]=At(l,s);return e(b,{get when(){return l()},get children(){return e(oe,{w:"$full",rounded:"$xl",p:"$4",get bgColor(){return n()},shadow:"$lg",get children(){return e(Dt,{get loading(){return g.loading},get children(){return e(st,{get children(){var i;return(i=g())==null?void 0:i.content},readme:!0,get toc(){return t.fromMeta==="readme"}})}})}})}})}const ft=t=>{const n=se("home_container");return e(Fe,{get fallback(){return e(oe,{w:"min(99%, 980px)",get children(){return t.children}})},get children(){return e(B,{when:n==="hope_container",get children(){return e(jt,{get children(){return t.children}})}})}})};function yr(){const{to:t}=M(),n=Vt(),[r,o]=y(),[l,s]=y(),[g,i]=y(-999),a=()=>i(0),c=()=>{const d=kr(),m=l();if(!d||!m)return;const $=d.offsetLeft>50?16:0;m.clientWidth<d.offsetLeft-$?i(0):i(`calc(-100% + ${d.offsetLeft}px - ${$}px)`)};let u;return Ae(()=>{const d=r();d==null||d.setPath(n.pathname),u=requestAnimationFrame(c),window.addEventListener("resize",c),k(()=>window.removeEventListener("resize",c))}),ke(me(()=>p.state,()=>{cancelAnimationFrame(u),u=requestAnimationFrame(c)})),ke(me(()=>n.pathname,()=>{const d=r();d==null||d.setPath(n.pathname)})),e(oe,{get as(){return Re.div},initial:{x:-999},get animate(){return{x:g()}},zIndex:"$overlay",pos:"fixed",left:3,top:3,h:"calc(100vh - 6px)",minW:180,p:"$2",overflow:"auto",shadow:"$lg",rounded:"$lg",bgColor:"white",_dark:{bgColor:"$neutral3"},onMouseEnter:a,onMouseLeave:c,ref:d=>s(d),get children(){return e(nr,{autoOpen:!0,showEmptyIcon:!0,showHiddenFolder:!1,onChange:d=>t(d),handle:d=>o(d)})}})}function Cr(){const t=A(()=>te.show_sidebar!=="none");return e(b,{get when(){return t()},get children(){return e(yr,{})}})}const xr=()=>e(ft,{get children(){return e(G,{class:"body",mt:"$1",py:"$2",px:"2%",minH:"80vh",w:"$full",gap:"$4",get children(){return[e(tt,{files:["header.md","top.md"],fromMeta:"header"}),e(pr,{}),e(vr,{}),e(tt,{files:["readme.md","footer.md","bottom.md"],fromMeta:"readme"}),e(Cr,{})]}})}}),Sr=be("<span>|</span>"),Mr=()=>{const t=_();return e(G,{class:"footer",w:"$full",py:"$4",get children(){return e(z,{spacing:"$1",get children(){return[e(Nt,{href:"https://discordapp.com/users/253478920626634752",external:!0,get children(){return t("home.footer.powered_by")}}),Sr.cloneNode(!0),e(rr,{as:it,get href(){return ye.is_guest(Ce())?"/@login":"/@manage"},get children(){return t(ye.is_guest(Ce())?"login.login":"home.footer.manage")}})]}})}})},nt={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},ue="^\\s*",de="\\s*$",Y="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",Q="([0-9A-Fa-f])",Z="([0-9A-Fa-f]{2})",Or=new RegExp(`${ue}rgb\\s*\\(${Y},${Y},${Y}\\)${de}`),Fr=new RegExp(`${ue}rgba\\s*\\(${Y},${Y},${Y},${Y}\\)${de}`),Rr=new RegExp(`${ue}#${Q}${Q}${Q}${de}`),Tr=new RegExp(`${ue}#${Z}${Z}${Z}${de}`),Lr=new RegExp(`${ue}#${Q}${Q}${Q}${Q}${de}`),Ir=new RegExp(`${ue}#${Z}${Z}${Z}${Z}${de}`);function F(t){return parseInt(t,16)}function pt(t){try{let n;if(n=Tr.exec(t))return[F(n[1]),F(n[2]),F(n[3]),1];if(n=Or.exec(t))return[j(n[1]),j(n[5]),j(n[9]),1];if(n=Fr.exec(t))return[j(n[1]),j(n[5]),j(n[9]),Pe(n[13])];if(n=Rr.exec(t))return[F(n[1]+n[1]),F(n[2]+n[2]),F(n[3]+n[3]),1];if(n=Ir.exec(t))return[F(n[1]),F(n[2]),F(n[3]),Pe(F(n[4])/255)];if(n=Lr.exec(t))return[F(n[1]+n[1]),F(n[2]+n[2]),F(n[3]+n[3]),Pe(F(n[4]+n[4])/255)];if(t in nt)return pt(nt[t]);throw new Error(`[seemly/rgba]: Invalid color value ${t}.`)}catch(n){throw n}}function Er(t){return t>1?1:t<0?0:t}function rt(t,n,r,o){return`rgba(${j(t)}, ${j(n)}, ${j(r)}, ${Er(o)})`}function ot(t,n){const[r,o,l,s=1]=Array.isArray(t)?t:pt(t);return n.alpha?rt(r,o,l,n.alpha):rt(r,o,l,s)}function Pe(t){const n=Math.round(Number(t)*100)/100;return n>1?1:n<0?0:n}function j(t){const n=Math.round(Number(t));return n>255?255:n<0?0:n}const Br={list:mt,grid:gt,image:ht},zr=()=>{const t=_();return e(Ne,{get children(){return[e(je,{as:Ut,get color(){return he()},get bgColor(){return ot(he(),{alpha:.15})},get _hover(){return{bgColor:ot(he(),{alpha:.2})}},"aria-label":"switch layout",compact:!0,size:"lg",get icon(){return e(Fe,{get children(){return[e(B,{get when(){return Ee()==="list"},get children(){return e(mt,{})}}),e(B,{get when(){return Ee()==="grid"},get children(){return e(gt,{})}}),e(B,{get when(){return Ee()==="image"},get children(){return e(ht,{})}})]}})}}),e(Ve,{get children(){return e(ce,{get each(){return Object.entries(Br)},children:n=>e(ne,{get icon(){return e(Wt,{get component(){return n[1]}})},onSelect:()=>{qt(n[0])},get children(){return t(`home.layouts.${n[0]}`)}})})}})]}})},Pr=()=>{const t=se("logo").split(`
`),n=Oe(t[0],t.pop()),r=A(()=>{switch(te.position_of_header_navbar){case"sticky":return{position:"sticky",zIndex:"$sticky",top:0};default:return{position:void 0,zIndex:void 0,top:void 0}}});return e(ct,ie(r,{bgColor:"$background",class:"header",w:"$full",get children(){return e(ft,{get children(){return e(z,{px:"calc(2% + 0.5rem)",py:"$2",w:"$full",justifyContent:"space-between",get children(){return[e(z,{class:"header-left",h:"44px",get children(){return e(Kt,{get src(){return n()},h:"$full",w:"auto",get fallback(){return e(Gt,{})}})}}),e(z,{class:"header-right",spacing:"$2",get children(){return e(b,{get when(){return p.state===x.Folder},get children(){return[e(b,{get when(){return se("search_index")!=="none"},get children(){return e(z,{bg:"$neutral4",w:"$32",p:"$2",rounded:"$md",justifyContent:"space-between",border:"2px solid transparent",cursor:"pointer",_hover:{borderColor:"$info6"},onClick:()=>{h.emit("tool","search")},get children(){return[e(Ue,{as:Jn}),e(z,{get children(){return[xe(()=>Xt?e(Be,{children:"Cmd"}):e(Be,{children:"Ctrl"})),e(Be,{children:"K"})]}})]}})}}),e(zr,{})]}})}})]}})}})}}))};function Ar(t){return X({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M9 11l3 3 8-8"/><path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h9"/>'},t)}function Dr(t){return X({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><rect width="12" height="12" x="8" y="8" rx="2"/><path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2"/>'},t)}function xo(t){return X({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M11 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-5M10 14L20 4M15 4h5v5"/>'},t)}function Hr(t){return X({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M14 3v4a1 1 0 001 1h4"/><path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2zM9 15h6"/><path d="M12.5 17.5L15 15l-2.5-2.5"/>'},t)}function jr(t){return X({a:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},c:'<path stroke="none" d="M0 0h24v24H0z"/><path d="M10 14a3.5 3.5 0 005 0l4-4a3.5 3.5 0 00-5-5l-.5.5"/><path d="M14 10a3.5 3.5 0 00-5 0l-4 4a3.5 3.5 0 005 5l.5-.5"/>'},t)}function Vr(t){return X({a:{viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M11 8v6h1V8h2.5l-3-3-3 3zM1 3h1.5v1H1V3zM3 3h1.5v1H3V3zM5 3h1v1.5H5V3zM1 6.5h1V8H1V6.5zM2.5 7H4v1H2.5V7zM4.5 7H6v1H4.5V7zM1 4.5h1V6H1V4.5zM5 5h1v1.5H5V5zM5 11v3H2v-3h3zm1-1H1v5h5v-5z"/>'},t)}function So(t){return X({a:{viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M14 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zM2 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zm1.5 5.5A1.5 1.5 0 005 13v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v2c0 .55.45 1 1 1s1-.45 1-1v-2a1.5 1.5 0 001.5-1.5V6h-9v5.5zM12.472 5a4.5 4.5 0 00-2.025-3.276l.5-1.001a.5.5 0 00-.895-.447L9.55 1.28l-.13-.052a4.504 4.504 0 00-2.84 0l-.13.052L5.948.276a.5.5 0 00-.895.447l.5 1.001A4.499 4.499 0 003.528 5v.5H12.5V5h-.028zM6.5 4a.5.5 0 01-.001-1h.002A.5.5 0 016.5 4zm3 0a.5.5 0 01-.001-1h.003a.5.5 0 01-.001 1z"/>'},t)}function Nr(t){return X({a:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},c:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>'},t)}const N={rename:{icon:or,color:"$accent9"},copy:{icon:Dr,color:"$success9"},move:{icon:Hr,color:"$warning9"},delete:{icon:Jt,color:"$danger9"},copy_link:{icon:jr,color:"$info9"},mkdir:{icon:ar,p:!0},recursive_move:{icon:Vr,p:!0},remove_empty_directory:{icon:Nr,p:!0},batch_rename:{icon:lr,p:!0},new_file:{icon:ir,p:!0},cancel_select:{icon:sr},download:{icon:Yt,color:"$primary9"}},Me=t=>{const n=Qt.findIndex(o=>o===t.name);if(n!==-1&&!ye.can(Ce(),n))return null;const r=_();return e(ut,{placement:"top",withArrow:!0,get label(){return r(`home.toolbar.${t.name}`)},get children(){return e(Ue,ie({get class(){return`toolbar-${t.name}`},get _hover(){return{bgColor:De()}},_focus:{outline:"none"},cursor:"pointer",boxSize:"$7",rounded:"$md",get p(){var o;return(o=N[t.name])!=null&&o.p?"$1_5":"$1"},_active:{transform:"scale(.94)",transition:"0.2s"},get as(){var o;return(o=N[t.name])==null?void 0:o.icon},get color(){var o;return(o=N[t.name])==null?void 0:o.color}},t))}})},T=t=>{const n=_();return e(ut,{get disabled(){return!t.tips},placement:"left",withArrow:!0,get label(){return n(`home.toolbar.${t.tips}`)},get children(){return e(Ue,ie({get color(){return he()},get _hover(){return{bgColor:he(),color:"white"}},_focus:{outline:"none"},cursor:"pointer",boxSize:"$8",rounded:"$lg",p:"$1",_active:{transform:"scale(.94)",transition:"0.2s"},get as(){return t.icon}},t))}})},Ur=()=>{const t=_(),{copySelectedPreviewPage:n,copySelectedRawLink:r}=Zt(),o="neutral";return e(Ne,{placement:"top",offset:10,get children(){return[e(je,{as:Me,name:"copy_link"}),e(Ve,{get children(){return[e(ne,{colorScheme:o,onSelect:()=>{n()},get children(){return t("home.toolbar.preview_page")}}),e(ne,{colorScheme:o,onSelect:()=>{r()},get children(){return t("home.toolbar.down_link")}}),e(ne,{colorScheme:o,onSelect:()=>{r(!0)},get children(){return t("home.toolbar.encode_down_link")}})]}})]}})},Wr=be("<p></p>"),qr=()=>{const t=_(),n="neutral",{batchDownloadSelected:r,sendToAria2:o}=gr();return e(Ne,{placement:"top",offset:10,get children(){return[e(je,{as:Me,name:"download"}),e(Ve,{get children(){return[e(ne,{colorScheme:n,onSelect:r,get children(){return t("home.toolbar.batch_download")}}),e(b,{get when(){return ye.is_admin(Ce())||dt("package_download")},get children(){return e(ne,{colorScheme:n,onSelect:()=>{h.emit("tool","package_download")},get children(){return t("home.toolbar.package_download")}})}}),e(ne,{colorScheme:n,onSelect:o,get children(){return t("home.toolbar.send_aria2")}})]}})]}})},Kr=fe(()=>pe(()=>import("./PackageDownload.2eed0032.js"),["assets/PackageDownload.2eed0032.js","assets/index.122e458b.js","assets/index.15d8d646.css"])),Gr=()=>{const t=_(),n=i=>{if(i==="package_download"){if(!dt("package_download"))return;o()}};h.on("tool",n),k(()=>{h.off("tool",n)});const{isOpen:r,onOpen:o,onClose:l}=C(),[s,g]=y("pre_tips");return e(K,{blockScrollOnMount:!1,get opened(){return r()},onClose:l,closeOnOverlayClick:!1,closeOnEsc:!1,get children(){return[e(U,{}),e(W,{get children(){return[e(V,{get children(){return t("home.toolbar.package_download")}}),e(He,{get fallback(){return e(ve,{})},get children(){return e(b,{get when(){return s()==="pre_tips"},get fallback(){return e(Kr,{onClose:l})},get children(){return[e(q,{get children(){const i=Wr.cloneNode(!0);return Te(i,()=>t("home.toolbar.pre_package_download-tips")),i}}),e(re,{display:"flex",gap:"$2",get children(){return[e(S,{onClick:l,colorScheme:"neutral",get children(){return t("global.cancel")}}),e(S,{colorScheme:"info",onClick:()=>{g("package_download")},get children(){return t("global.confirm")}})]}})]}})}})]}})]}})},Xr=()=>{const t=A(()=>[x.Folder,x.FetchingMore].includes(p.state)&&en()&&tn());return e(fr,{exitBeforeEnter:!0,get children(){return e(b,{get when(){return t()},get children(){return e(oe,{class:"center-toolbar",pos:"fixed",bottom:"$4",right:"50%",w:"max-content",color:"$neutral11",get as(){return Re.div},initial:{opacity:0,scale:.9,x:"50% ",y:10},animate:{opacity:1,scale:1,x:"50%",y:0},exit:{opacity:0,scale:.9},transition:{duration:.2},get children(){return e(z,{p:"$2",get bgColor(){return Oe("white","#000000d0")()},spacing:"$1",shadow:"0px 10px 30px -5px rgba(0, 0, 0, 0.3)",rounded:"$lg",css:{backdropFilter:"blur(8px)"},get children(){return[e(ce,{each:["rename","move","copy","delete"],children:n=>e(Me,{name:n,onClick:()=>{h.emit("tool",n)}})}),e(Ur,{}),e(qr,{}),e(Me,{name:"cancel_select",onClick:()=>{nn(!1)}})]}})}})}})}})},Jr=()=>{const{isOpen:t,onToggle:n}=C({defaultIsOpen:localStorage.getItem("more-open")==="true",onClose:()=>localStorage.setItem("more-open","false"),onOpen:()=>localStorage.setItem("more-open","true")}),r=A(()=>t()?"$4":"$5"),o=A(()=>p.state===x.Folder),{refresh:l}=L();return e(oe,{class:"left-toolbar-box",pos:"fixed",get right(){return r()},get bottom(){return r()},get children(){return e(b,{get when(){return t()},get fallback(){return e(T,{class:"toolbar-toggle",as:Ze,onClick:()=>{n()}})},get children(){return e(G,{class:"left-toolbar",p:"$1",rounded:"$lg",spacing:"$1",bgColor:"$neutral1",get as(){return Re.div},initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.6},transition:{duration:.2},get children(){return[e(G,{spacing:"$1",class:"left-toolbar-in",get children(){return[e(b,{get when(){return xe(()=>!!o(),!0)()&&(Je("write")||p.write)},get children(){return[e(T,{as:tr,tips:"refresh",onClick:()=>{l(void 0,!0)}}),e(T,{get as(){return N.new_file.icon},tips:"new_file",onClick:()=>{h.emit("tool","new_file")}}),e(T,{get as(){return N.mkdir.icon},p:"$1_5",tips:"mkdir",onClick:()=>{h.emit("tool","mkdir")}}),e(T,{get as(){return N.recursive_move.icon},tips:"recursive_move",onClick:()=>{h.emit("tool","recursiveMove")}}),e(T,{get as(){return N.remove_empty_directory.icon},tips:"remove_empty_directory",onClick:()=>{h.emit("tool","removeEmptyDirectory")}}),e(T,{get as(){return N.batch_rename.icon},tips:"batch_rename",onClick:()=>{h.emit("tool","batchRename")}}),e(T,{as:rn,tips:"upload",onClick:()=>{h.emit("tool","upload")}})]}}),e(b,{get when(){return xe(()=>!!o(),!0)()&&Je("offline_download")},get children(){return e(T,{as:on,pl:"0",tips:"offline_download",onClick:()=>{h.emit("tool","offline_download")}})}}),e(b,{get when(){return an()},get children(){return e(T,{as:cr,tips:"toggle_markdown_toc",onClick:()=>{ln(s=>!s)}})}}),e(T,{tips:"toggle_checkbox",as:Ar,onClick:sn}),e(T,{as:cn,tips:"local_settings",onClick:()=>{h.emit("tool","local_settings")}})]}}),e(T,{tips:"more",as:Ze,onClick:n})]}})}})}})},Yr=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),[o,l]=P(un),{pathname:s}=M(),{refresh:g}=L(),i=a=>{a==="copy"&&n()};return h.on("tool",i),k(()=>{h.off("tool",i)}),e(We,{get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(s(),a,ee().map(u=>u.name));D(c,()=>{g(),r()})}})},Qr=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),[o,l]=P(dn),{pathname:s}=M(),{refresh:g}=L(),i=a=>{a==="move"&&n()};return h.on("tool",i),k(()=>{h.off("tool",i)}),e(We,{get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(s(),a,ee().map(u=>u.name));D(c,()=>{g(),r()})}})},Zr=be("<p></p>"),eo=()=>{const t=_(),{isOpen:n,onOpen:r,onClose:o}=C(),[l,s]=P(gn),{refresh:g}=L(),{pathname:i}=M(),a=c=>{c==="delete"&&r()};return h.on("tool",a),k(()=>{h.off("tool",a)}),e(K,{blockScrollOnMount:!1,get opened(){return n()},onClose:o,size:{"@initial":"xs","@md":"md"},get children(){return[e(U,{}),e(W,{get children(){return[e(V,{get children(){return t("home.toolbar.delete")}}),e(q,{get children(){const c=Zr.cloneNode(!0);return Te(c,()=>t("home.toolbar.delete-tips")),c}}),e(re,{display:"flex",gap:"$2",get children(){return[e(S,{onClick:o,colorScheme:"neutral",get children(){return t("global.cancel")}}),e(S,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const c=await s(i(),ee().map(u=>u.name));D(c,()=>{g(),o()})},get children(){return t("global.confirm")}})]}})]}})]}})},to=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),o=_(),[l,s]=P(hn),{pathname:g}=M(),{refresh:i}=L(),a=c=>{if(c==="rename"){if(!mn()){E.warning(o("home.toolbar.only_one-tips"));return}n()}};return h.on("tool",a),k(()=>{h.off("tool",a)}),e(b,{get when(){return t()},get children(){return e(Le,{title:"home.toolbar.input_new_name",get isRenamingFile(){return!ee()[0].is_dir},get opened(){return t()},onClose:r,get defaultValue(){var c,u;return(u=(c=ee()[0])==null?void 0:c.name)!=null?u:""},get loading(){return l()},onSubmit:async c=>{const u=await s(J(g(),ee()[0].name),c);D(u,()=>{i(),r()})}})}})},no=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),[o,l]=P(fn),{refresh:s}=L(),{pathname:g}=M(),i=a=>{a==="new_file"&&n()};return h.on("tool",i),k(()=>{h.off("tool",i)}),e(Le,{title:"home.toolbar.input_filename",get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(J(g(),a),lt());D(c,()=>{s(),r()})}})},ro=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),[o,l]=P(pn),{pathname:s}=M(),{refresh:g}=L(),i=a=>{a==="mkdir"&&n()};return h.on("tool",i),k(()=>{h.off("tool",i)}),e(Le,{title:"home.toolbar.input_dir_name",get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const c=await l(J(s(),a));D(c,()=>{g(),r()})}})},oo=be("<p></p>"),ao=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),{isOpen:o,onOpen:l,onClose:s}=C(),[g,i]=P(bn),{pathname:a}=M(),{refresh:c}=L(),u=m=>{m==="recursiveMove"&&n()};h.on("tool",u),k(()=>{h.off("tool",u)});const d=_();return[e(K,{blockScrollOnMount:!1,get opened(){return t()},onClose:()=>r(),size:{"@initial":"xs","@md":"md"},get children(){return[e(U,{}),e(W,{get children(){return[e(V,{get children(){return d("home.toolbar.recursive_move")}}),e(q,{get children(){const m=oo.cloneNode(!0);return Te(m,()=>d("home.toolbar.recursive_move_directory-tips")),m}}),e(re,{display:"flex",gap:"$2",get children(){return[e(S,{onClick:()=>r(),colorScheme:"neutral",get children(){return d("global.cancel")}}),e(S,{onClick:()=>{r(),l()},colorScheme:"danger",get children(){return d("global.confirm")}})]}})]}})]}}),e(We,{get opened(){return o()},onClose:s,get loading(){return g()},onSubmit:async m=>{const $=await i(a(),m);D($,()=>{c(),s()})}})]},lo=be("<p></p>"),io=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),{pathname:o}=M(),[l,s]=P(wn),{refresh:g}=L(),i=c=>{c==="removeEmptyDirectory"&&n()};h.on("tool",i),k(()=>{h.off("tool",i)});const a=_();return e(K,{blockScrollOnMount:!1,get opened(){return t()},onClose:r,size:{"@initial":"xs","@md":"md"},get children(){return[e(U,{}),e(W,{get children(){return[e(V,{get children(){return a("home.toolbar.remove_empty_directory")}}),e(q,{get children(){const c=lo.cloneNode(!0);return Te(c,()=>a("home.toolbar.remove_empty_directory-tips")),c}}),e(re,{display:"flex",gap:"$2",get children(){return[e(S,{onClick:r,colorScheme:"neutral",get children(){return a("global.cancel")}}),e(S,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const c=await s(o());D(c,()=>{g(),r()})},get children(){return a("global.confirm")}})]}})]}})]}})},so=t=>e(Re.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return e(z,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:De()}},get children(){return[e(Se,{w:{"@initial":"50%","@md":"50%"},class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return t.obj.src_name},get children(){return t.obj.src_name}}),e(Se,{w:{"@initial":"50%","@md":"50%"},class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return t.obj.new_name},get children(){return t.obj.new_name}})]}})}}),co=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),{isOpen:o,onOpen:l,onClose:s}=C(),[g,i]=P(_n),{pathname:a}=M(),{refresh:c}=L(),[u,d]=y("1"),[m,$]=y(""),[v,I]=y(""),[f,O]=y("string"),[ae,le]=y([]),R=_(),qe=()=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:"left",cursor:"pointer"}),Ke=w=>{w==="batchRename"&&l()};h.on("tool",Ke),k(()=>{h.off("tool",Ke)});const Ie=()=>{if(!m()||!v()){E.warning(R("global.empty_input"));return}const w=new RegExp(m(),"g");let ge;if(u()==="1")ge=p.objs.filter(H=>H.name.match(m())).map(H=>({src_name:H.name,new_name:H.name.replace(w,v())}));else{let H=v();ge=p.objs.map(we=>{let Ge="";const Xe=we.name.lastIndexOf(".");Xe!==-1&&(Ge=we.name.substring(Xe+1));const bt={src_name:we.name,new_name:m()+H+"."+Ge};return H=(parseInt(H)+1).toString().padStart(H.length,"0"),bt})}le(ge),n(),s()};return[e(K,{blockScrollOnMount:!1,get opened(){return o()},onClose:s,initialFocus:"#modal-input1",size:{"@initial":"xs","@md":"md"},get children(){return[e(U,{}),e(W,{get children(){return[e(b,{get when(){return u()==="1"},get children(){return e(V,{get children(){return R("home.toolbar.regular_rename")}})}}),e(b,{get when(){return u()==="2"},get children(){return e(V,{get children(){return R("home.toolbar.sequential_renaming_desc")}})}}),e(q,{get children(){return[e(kn,{defaultValue:"1",style:{margin:"20px 0"},onChange:w=>{d(w),w==="1"?O("string"):w==="2"&&O("number")},get children(){return e(z,{spacing:"$4",get children(){return[e(Ye,{value:"1",get children(){return R("home.toolbar.regex_rename")}}),e(Ye,{value:"2",get children(){return R("home.toolbar.sequential_renaming")}})]}})}}),e(G,{spacing:"$2",get children(){return[e($e,{id:"modal-input1",type:"string",get value(){return m()},onInput:w=>{$(w.currentTarget.value)},onKeyDown:w=>{w.key==="Enter"&&Ie()}}),e($e,{id:"modal-input2",get type(){return f()},get value(){return v()},onInput:w=>{I(w.currentTarget.value)},onKeyDown:w=>{w.key==="Enter"&&Ie()}})]}})]}}),e(re,{display:"flex",gap:"$2",get children(){return[e(S,{onClick:()=>{d("1"),O("string"),s()},colorScheme:"neutral",get children(){return R("global.cancel")}}),e(S,{onClick:()=>Ie(),get disabled(){return!m()||!v()},get children(){return R("global.ok")}})]}})]}})]}}),e(K,{size:"xl",get opened(){return t()},onClose:r,get children(){return[e(U,{}),e(W,{get children(){return[e(V,{get children(){return R("home.toolbar.regex_rename_preview")}}),e(q,{get children(){return e(G,{class:"list",w:"$full",spacing:"$1",get children(){return[e(z,{class:"title",w:"$full",p:"$2",get children(){return[e(Se,ie({w:{"@initial":"50%","@md":"50%"}},qe,{get children(){return R("home.toolbar.regex_rename_preview_old_name")}})),e(Se,ie({w:{"@initial":"50%","@md":"50%"}},qe,{get children(){return R("home.toolbar.regex_rename_preview_new_name")}}))]}}),e(ce,{get each(){return ae()},children:(w,ge)=>e(so,{obj:w,get index(){return ge()}})})]}})}}),e(re,{display:"flex",gap:"$2",get children(){return[e(S,{onClick:()=>{le([]),d("1"),O("string"),r(),s()},colorScheme:"neutral",get children(){return R("global.cancel")}}),e(S,{onClick:()=>{le([]),r(),l()},colorScheme:"neutral",get children(){return R("global.back")}}),e(S,{get loading(){return g()},onClick:async()=>{const w=await i(a(),ae());D(w,()=>{le([]),$(""),I(""),d("1"),O("string"),c(),s(),r()})},get disabled(){return ae().length==0},get children(){return R("global.ok")}})]}})]}})]}})]},uo=["delete_on_upload_succeed","delete_on_upload_failed","delete_never","delete_always"],go=()=>{const t=_(),[n,r]=y([]),[o,l]=P(()=>$n.get("/public/offline_download_tools")),[s,g]=y(""),[i,a]=y("delete_on_upload_succeed");Ae(async()=>{const f=await l();vn(f,O=>{r(O),g(O[0])})});const{isOpen:c,onOpen:u,onClose:d}=C(),[m,$]=P(yn),{pathname:v}=M(),I=f=>{f==="offline_download"&&u()};return h.on("tool",I),k(()=>{h.off("tool",I)}),e(Le,{title:"home.toolbar.offline_download",type:"text",get opened(){return c()},onClose:d,get loading(){return o()||m()},get tips(){return t("home.toolbar.offline_download-tips")},get topSlot(){return e(oe,{mb:"$2",get children(){return e(Qe,{get value(){return s()},onChange:f=>g(f),get options(){return n().map(f=>({value:f,label:f}))}})}})},get bottomSlot(){return e(oe,{mb:"$2",get children(){return e(Qe,{get value(){return i()},onChange:f=>a(f),get options(){return uo.map(f=>({value:f,label:t(`home.toolbar.delete_policy.${f}`)}))}})}})},onSubmit:async f=>{const O=await $(v(),f.split(`
`),s(),i());D(O,()=>{d()})}})},ho=t=>{const n=_(),r=g=>{g===t.name&&l()};h.on("tool",r),k(()=>{h.off("tool",r)});const{isOpen:o,onOpen:l,onClose:s}=C();return e(K,{get blockScrollOnMount(){return t.blockScrollOnMount},get opened(){return o()},onClose:s,closeOnOverlayClick:!1,closeOnEsc:!1,size:{"@initial":"xs","@md":"md","@lg":"lg","@xl":"xl","@2xl":"2xl"},get children(){return[e(U,{}),e(W,{get children(){return[e(Cn,{}),e(V,{get children(){return n(t.title)}}),e(q,{get children(){return e(b,{get when(){return o()},get children(){return e(He,{get fallback(){return e(ve,{})},get children(){return t.children}})}})}})]}})]}})};function mo(t){const n=_();return e(qn,{get children(){return[e(En,{get children(){return n(`home.local_settings.${t.key}`)}}),e(Fe,{get fallback(){return e($e,{get value(){return te[t.key]},onInput:r=>{ze(t.key,r.currentTarget.value)}})},get children(){return[e(B,{get when(){return t.type==="select"},get children(){return e(Bn,{get id(){return t.key},get defaultValue(){return te[t.key]},onChange:r=>ze(t.key,r),get children(){return[e(zn,{get children(){return[e(Pn,{get children(){return n("global.choose")}}),e(An,{}),e(Dn,{})]}}),e(Hn,{get children(){return e(jn,{get children(){return e(ce,{get each(){return xe(()=>typeof t.options=="function",!0)()?t.options():t.options},children:r=>e(Vn,{value:r,get children(){return[e(Nn,{get children(){return n(`home.local_settings.${t.key}_options.${r}`)}}),e(Un,{})]}})})}})}})]}})}}),e(B,{get when(){return t.type==="boolean"},get children(){return e(Wn,{get defaultChecked(){return te[t.key]==="true"},onChange:r=>{ze(t.key,r.currentTarget.checked.toString())}})}})]}})]}})}const fo=()=>{const{isOpen:t,onOpen:n,onClose:r}=C(),o=_(),l=s=>{s==="local_settings"&&n()};return h.on("tool",l),k(()=>{h.off("tool",l)}),e(In,{get opened(){return t()},placement:"right",onClose:r,get children(){return[e(xn,{}),e(Sn,{get children(){return[e(Mn,{}),e(On,{color:"$info9",get children(){return o("home.toolbar.local_settings")}}),e(Fn,{get children(){return[e(G,{spacing:"$2",get children(){return e(ce,{get each(){return Rn.filter(s=>!s.hidden)},children:s=>e(mo,s)})}}),e(ct,{mt:"$4",get children(){return e(z,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[e(Tn,{}),e(Ln,{})]}})}})]}})]}})]}})},po=fe(()=>pe(()=>import("./Upload.d0dc435a.js"),["assets/Upload.d0dc435a.js","assets/index.122e458b.js","assets/index.15d8d646.css","assets/index.596a73d4.js"])),bo=()=>[e(Yr,{}),e(Qr,{}),e(to,{}),e(eo,{}),e(no,{}),e(ro,{}),e(ao,{}),e(io,{}),e(co,{}),e(go,{}),e(Gr,{}),e(ho,{name:"upload",title:"home.toolbar.upload",get children(){return e(po,{})}}),e(fo,{})],wo=()=>e(Gn,{get children(){return[e(Jr,{}),e(Xr,{}),e(bo,{}),e(Kn,{})]}}),_o=()=>{Yn(se("site_title"));const t=se("announcement");return t&&E.render(()=>e(st,{children:t})),[e(Pr,{}),e(wo,{}),e(xr,{}),e(Mr,{})]},Mo=Object.freeze(Object.defineProperty({__proto__:null,default:_o},Symbol.toStringTag,{value:"Module"}));export{So as I,Mo as L,xo as T,N as o,gr as u};