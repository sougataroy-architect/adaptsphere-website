import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { JsonLd } from "./JsonLd";
import { site } from "@/lib/site";
export function Container({children,className=""}:{children:ReactNode;className?:string}){return <div className={cn("container",className)}>{children}</div>;}
export function Section({children,className="",id}:{children:ReactNode;className?:string;id?:string}){return <section id={id} className={cn("section",className)}>{children}</section>;}
export function Eyebrow({children}:{children:ReactNode}){return <p className="eyebrow">{children}</p>;}
function ButtonWash(){return <svg className="button-wash" viewBox="0 0 260 64" preserveAspectRatio="none" aria-hidden="true"><path d="M-20 20 C15 -12 100 -15 145 -6 C185 2 62 12 15 40 C-32 68 20 74 55 48 C92 20 164 65 203 16 C243 -33 240 8 197 42 C152 78 57 71 88 62 C125 51 231 64 263 18 C292 -24 294 39 249 68 C221 87 265 88 288 45" fill="none" stroke="currentColor" strokeWidth="34" strokeLinecap="round" pathLength="1000"/></svg>;}
export function ButtonLink({href,children,secondary=false}:{href:string;children:ReactNode;secondary?:boolean}){return <Link className={cn("button",secondary&&"button-secondary")} href={href}><span className="button-label"><ButtonWash/><span className="button-copy">{children}</span></span><span className="button-icon"><ButtonWash/><ArrowUpRight size={20} aria-hidden="true"/></span></Link>;}
export function SectionHeading({label,title,text}:{label:string;title:string;text?:string}){return <div className="section-heading"><Eyebrow>{label}</Eyebrow><h2>{title}</h2>{text&&<p>{text}</p>}</div>;}
export function PageHeader({label,title,text,path}:{label:string;title:string;text:string;path:string}){return <><Container><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{label}</span></nav></Container><header className="page-header"><Container><Eyebrow>{label}</Eyebrow><h1>{title}</h1><p>{text}</p></Container></header><JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:site.url},{"@type":"ListItem",position:2,name:label,item:site.url+path}]}}/></>;}
export function TextLink({href,children}:{href:string;children:ReactNode}){return <Link className="text-link" href={href}>{children}<ArrowRight size={16} aria-hidden="true"/></Link>;}
export function CTASection(){return <Section className="cta"><Container><div><Eyebrow>A practical starting point</Eyebrow><h2>Start with the environment<br/>you actually have.</h2><p>Bring the question, the systems, and the constraints. We will help define the next technical decision.</p></div><ButtonLink href="/contact">Assess Your AI Environment</ButtonLink></Container></Section>;}



