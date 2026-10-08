import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services,serviceHref } from "@/content/services";
import { insights } from "@/content/insights";
export default function sitemap():MetadataRoute.Sitemap{return [...new Set(["/","/services","/agent-governance","/microsoft-ai","/how-we-work","/insights","/about","/contact","/privacy","/terms","/accessibility",...services.map(serviceHref),...insights.map(x=>"/insights/"+x.slug)])].map(path=>({url:site.url+path}));}
