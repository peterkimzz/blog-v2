import{i as h,j as g,k as y,n as _,u as w,l as C,g as v,m as D,q,s as r}from"./entry.dd0150d5.js";import x from"./ContentRenderer.59b14b90.js";import S from"./ContentQuery.f5f13050.js";import"./ContentRendererMarkdown.e8a0b77e.js";import"./index.a6ef77ff.js";import"./preview.1c7cde17.js";import"./query.3721a240.js";import"./utils.ef742daf.js";const a=(u,e=y())=>{const m=h(u),p=C();g(()=>h(u),(t=m)=>{if(!e.path||!t)return;const n=Object.assign({},(t==null?void 0:t.head)||{});n.meta=[...n.meta||[]],n.link=[...n.link||[]];const s=n.title||(t==null?void 0:t.title);s&&(n.title=s),p.public.content.host;const c=(n==null?void 0:n.description)||(t==null?void 0:t.description);c&&n.meta.filter(i=>i.name==="description").length===0&&n.meta.push({name:"description",content:c}),n!=null&&n.image||(t==null||t.image),_(()=>w(n))},{immediate:!0})},k=v({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(u){const e=D(),{tag:m,excerpt:p,path:f,query:t,head:n}=u,s={...t||{},path:f||(t==null?void 0:t.path)||q(y().path),find:"one"},c=(i,o)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:i,data:o},null,2));return r(S,s,{default:e!=null&&e.default?({data:i,refresh:o,isPartial:d})=>{var l;return n&&a(i),(l=e.default)==null?void 0:l.call(e,{doc:i,refresh:o,isPartial:d,excerpt:p,...this.$attrs})}:({data:i})=>(n&&a(i),r(x,{value:i,excerpt:p,tag:m,...this.$attrs},{empty:o=>e!=null&&e.empty?e.empty(o):c("default",i)})),empty:i=>{var o;return((o=e==null?void 0:e.empty)==null?void 0:o.call(e,i))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":i=>{var o;return((o=e==null?void 0:e["not-found"])==null?void 0:o.call(e,i))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),T=k;export{T as default};