import{r,H as s}from"./index.181651b6.js";const v=()=>{const c=r(null),l=r(!1),a=r(null);return{loadProject:async t=>{try{const{data:e}=await s.from("projects").select("*").eq("name",t);e&&(c.value=e[0],l.value=!0)}catch(e){a.value=e.message}},updateProject:async(t,e,n,u,d,p,i)=>{const{data:j,error:o}=await s.from("projects").update({name:t,category:e,year:n,projectDescription:u,photoUrl:d,countries:p,photos:i}).eq("name",t).select();o&&(console.log(o.message),a.value=o.message),j&&(a.value=null)},deleteProject:async t=>{const{error:e}=await s.from("projects").delete().eq("id",t);e&&(a.value=e.message)},data:c,dataLoaded:l,errorMess:a}};export{v as u};
