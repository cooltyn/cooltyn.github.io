import{_ as m,u as k,e as p,C as $,o as n,g as y,w as C,b as M,n as a,c as _,F as h,f as q,d as o,h as B,I as z,i as N,t as S}from"./index-BbbTO97t.js";import{M as V}from"./Modal-Bmz4vcsu.js";const b="_content_e30gq_1",w="_link_e30gq_8",F="_active_e30gq_13",L="_icon_e30gq_26",x={content:b,link:w,active:F,icon:L},D=["onClick"],E={__name:"lang",emits:["close"],setup(j,{emit:u}){const d=u,{availableLocales:g,locale:c,t:v}=k(),t=p(!1),l=()=>{t.value=!1,d("close")},f=e=>{c.value=e,localStorage.setItem("lang",e),l()},i={ru:0,en:1,cn:2,doc:3};return $(()=>{t.value=!0}),(e,A)=>(n(),y(V,{active:t.value,size:null,onClose:l},{default:C(()=>[M("div",{class:a(e.$style.content)},[(n(!0),_(h,null,q([...o(g)].sort((s,r)=>i[s]-i[r]),s=>(n(),_("div",{key:`locale-${s}`,class:a([e.$style.link,s===o(c)&&e.$style.active]),onClick:r=>f(s)},[B(z,{name:`flags-${s}`,class:a(e.$style.icon),size:"l"},null,8,["name","class"]),N(" "+S(o(v)(`langs.${s}`)),1)],10,D))),128))],2)]),_:1},8,["active"]))}},T={$style:x},I=m(E,[["__cssModules",T]]);export{I as default};
