import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/Header";
import { SiteFooter } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
const sans=Manrope({subsets:["latin"],weight:["400","500","600","700"],variable:"--font-ui",display:"swap"});
const serif=Cormorant_Garamond({subsets:["latin"],weight:["400","600"],style:["normal","italic"],variable:"--font-display",display:"swap"});
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:"AdaptSphere | Governed AI Engineering",template:"%s | AdaptSphere"},description:site.description,alternates:{canonical:site.url},openGraph:{title:"AdaptSphere | Governed AI Engineering",description:site.description,type:"website",siteName:site.name,url:site.url,images:[{url:"/opengraph-image",width:1200,height:630}]},twitter:{card:"summary_large_image",images:["/opengraph-image"]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={sans.variable+" "+serif.variable}><body><a className="skip-link" href="#main-content">Skip to main content</a><JsonLd data={{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":site.url+"/#organization",name:site.name,legalName:site.legalName,url:site.url,email:site.email,logo:{"@type":"ImageObject",url:site.url+"/brand/as-supplied.png"}},{"@type":"WebSite","@id":site.url+"/#website",name:site.name,url:site.url,publisher:{"@id":site.url+"/#organization"}}]}}/><SiteHeader/><main id="main-content" tabIndex={-1}>{children}</main><SiteFooter/></body></html>;}

