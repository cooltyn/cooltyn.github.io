import{j as l,o as n,c as r,a as g,t as m,n as s,e as c}from"./index-BVSbK_V1.js";const u="_root_1vpa9_1",p="_wide_1vpa9_9",d="_title_1vpa9_24",y={root:u,wide:p,title:d},_=(e,i)=>{const o=e.__vccOpts||e;for(const[a,t]of i)o[a]=t;return o},h={__name:"ContentTile",props:{title:{type:String,required:!0},wide:{type:Boolean},image:{type:String,required:!0},link:{type:String}},setup(e){const i=e,o=l(),a=()=>{i.link.startsWith("/")&&o.push(i.link)};return(t,j)=>(n(),r("div",{class:s([t.$style.root,e.wide&&t.$style.wide]),style:c({backgroundImage:`url(${e.image})`}),onClick:a},[g("div",{class:s(t.$style.title)},m(e.title),3)],6))}},k={$style:y},w=_(h,[["__cssModules",k]]),v=[{title:"О нас",link:"/about",image:"/images/home/1.jpg"},{title:"Рум-сервис",image:"/images/home/2.jpg"},{title:"Заказ еды в номер",image:"/images/home/3.jpg",wide:!0},{title:"Ресторан",image:"/images/home/4.jpg"},{title:"Тренажерный зал",image:"/images/home/5.jpg"}],f=[{title:"WiFi",icon:"wifi"},{title:"Отзывы",icon:"like"},{title:"Такси",icon:"taxi"}],C=[{title:"Информация об отеле",image:"/images/about/1.jpg"},{title:"Номерной фонд",image:"/images/about/2.jpg"},{title:"Услуги в отеле",image:"/images/about/3.jpg"},{title:"Контакты отеля",image:"/images/about/4.jpg"}];export{w as C,_,f as a,C as b,v as h};
