import s from"./ContentSlot.1baa0f91.js";import{g as o,m,x as p,E as u}from"./entry.dd0150d5.js";import"./utils.ef742daf.js";import"./preview.1c7cde17.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=u(),{between:n,default:r}=m(),a=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:r,tags:a,between:n,parent:e}}});export{d as default};