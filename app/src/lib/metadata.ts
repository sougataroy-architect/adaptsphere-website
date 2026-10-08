import type { Metadata } from "next";
import { site } from "./site";
export function pageMeta(title:string,description:string,path:string):Metadata{return {title,description,alternates:{canonical:site.url+path},openGraph:{type:"website",url:site.url+path,title,description,siteName:site.name,images:[{url:site.url+"/opengraph-image",width:1200,height:630,alt:"AdaptSphere. Governed AI Engineering."}]},twitter:{card:"summary_large_image",title,description,images:[site.url+"/opengraph-image"]}};}
