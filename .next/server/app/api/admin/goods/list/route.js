"use strict";(()=>{var e={};e.id=964,e.ids=[964],e.modules={38013:e=>{e.exports=require("mongodb")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},68420:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>q,originalPathname:()=>A,patchFetch:()=>y,requestAsyncStorage:()=>x,routeModule:()=>m,serverHooks:()=>g,staticGenerationAsyncStorage:()=>h,staticGenerationBailout:()=>f});var s={};t.r(s),t.d(s,{GET:()=>d,dynamic:()=>c});var o=t(95419),i=t(69108),a=t(99678),n=t(42582),u=t(33850),p=t(71766),l=t(98984);async function d(e){try{let{db:r}=await (0,p.N$)(u.Z,null),t=new URL(e.url),s=t.searchParams.get("range")||JSON.stringify([0,4]),o=t.searchParams.get("sort")||JSON.stringify(["name","ASC"]),i=JSON.parse(s),a=JSON.parse(o),d=async e=>await r.collection(e).find().sort({["id"===a[0]?"_id":a[0]]:"ASC"===a[1]?1:-1}).toArray(),[c,m]=await Promise.allSettled([d("cloth"),d("accessories")]);if("fulfilled"!==c.status||"fulfilled"!==m.status)return l.NextResponse.json({count:0,items:[]},n.e);let x=[...c.value,...m.value];return l.NextResponse.json({count:x.length,items:x.slice(i[0],i[1]).map(e=>({...e,id:e._id}))},n.e)}catch(e){throw Error(e.message)}}let c="force-dynamic",m=new o.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/admin/goods/list/route",pathname:"/api/admin/goods/list",filename:"route",bundlePath:"app/api/admin/goods/list/route"},resolvedPagePath:"C:\\Users\\hp\\Desktop\\online-shop\\app\\api\\admin\\goods\\list\\route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:x,staticGenerationAsyncStorage:h,serverHooks:g,headerHooks:q,staticGenerationBailout:f}=m,A="/api/admin/goods/list/route";function y(){return(0,a.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:h})}},42582:(e,r,t)=>{t.d(r,{e:()=>s});let s={headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Authorization"}}}};var r=require("../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,791,604,382],()=>t(68420));module.exports=s})();