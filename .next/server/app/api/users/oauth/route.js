"use strict";(()=>{var e={};e.id=819,e.ids=[819],e.modules={38013:e=>{e.exports=require("mongodb")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},81974:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>c,originalPathname:()=>v,patchFetch:()=>f,requestAsyncStorage:()=>d,routeModule:()=>l,serverHooks:()=>q,staticGenerationAsyncStorage:()=>h,staticGenerationBailout:()=>m});var s={};t.r(s),t.d(s,{POST:()=>x});var o=t(95419),u=t(69108),i=t(99678),a=t(33850),p=t(71766),n=t(98984);async function x(e){let{db:r,reqBody:t}=await (0,p.N$)(a.Z,e),s=await (0,p.GY)(r,t.email);if(!s){let e=await (0,p.KM)(r,t);return n.NextResponse.json(e)}let o=(0,p.X8)(s.name,t.email);return n.NextResponse.json(o)}let l=new o.AppRouteRouteModule({definition:{kind:u.x.APP_ROUTE,page:"/api/users/oauth/route",pathname:"/api/users/oauth",filename:"route",bundlePath:"app/api/users/oauth/route"},resolvedPagePath:"C:\\Users\\hp\\Desktop\\online-shop\\app\\api\\users\\oauth\\route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:d,staticGenerationAsyncStorage:h,serverHooks:q,headerHooks:c,staticGenerationBailout:m}=l,v="/api/users/oauth/route";function f(){return(0,i.patchFetch)({serverHooks:q,staticGenerationAsyncStorage:h})}}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,791,604,382],()=>t(81974));module.exports=s})();