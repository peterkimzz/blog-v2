import{g as i,x as a,o as n,c,i as o,M as h,l as u}from"./entry.c4a32e0c.js";const d=["src","alt","width","height"],g=i({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const e=t,s=a(()=>{var r;return(r=e.src)!=null&&r.startsWith("/")&&!e.src.startsWith("//")?h(e.src,u().app.baseURL):e.src});return(r,l)=>(n(),c("img",{src:o(s),alt:t.alt,width:t.width,height:t.height},null,8,d))}});export{g as default};
