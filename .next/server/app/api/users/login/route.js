"use strict";(()=>{var e={};e.id=373,e.ids=[373],e.modules={38013:e=>{e.exports=require("mongodb")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},2662:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>h,originalPathname:()=>v,patchFetch:()=>w,requestAsyncStorage:()=>c,routeModule:()=>q,serverHooks:()=>m,staticGenerationAsyncStorage:()=>g,staticGenerationBailout:()=>f});var s={};t.r(s),t.d(s,{POST:()=>d});var o=t(95419),i=t(69108),p=t(99678),n=t(6521),a=t.n(n),u=t(98984),x=t(33850),l=t(71766);async function d(e){let{db:r,reqBody:t}=await (0,l.N$)(x.Z,e),s=await (0,l.GY)(r,t.email);if(!s)return u.NextResponse.json({warningMessage:"Пользователя не существует"});if(!a().compareSync(t.password,s.password))return u.NextResponse.json({warningMessage:"Неправильный логин или пароль!"});let o=(0,l.X8)(s.name,t.email);return u.NextResponse.json(o)}let q=new o.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/users/login/route",pathname:"/api/users/login",filename:"route",bundlePath:"app/api/users/login/route"},resolvedPagePath:"C:\\Users\\hp\\Desktop\\online-shop\\app\\api\\users\\login\\route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:c,staticGenerationAsyncStorage:g,serverHooks:m,headerHooks:h,staticGenerationBailout:f}=q,v="/api/users/login/route";function w(){return(0,p.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:g})}}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,791,604,382],()=>t(2662));module.exports=s})();