import { notFound } from "next/navigation";
import { insights,publicationDate } from "@/content/insights";
import { PageHeader,Container,Section,CTASection } from "@/components/UI";
import { ReadingTOC } from "@/components/ReadingTOC";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";
export function generateStaticParams(){return insights.map(x=>({slug:x.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const x=insights.find(i=>i.slug===slug);if(!x)notFound();const m=pageMeta(x.title,x.summary,"/insights/"+slug);return {...m,openGraph:{...m.openGraph,type:"article",publishedTime:publicationDate,authors:[site.name]}};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const x=insights.find(i=>i.slug===slug);if(!x)notFound();const sections=x.sections.map((s,i)=>({...s,id:"section-"+i}));return <><PageHeader label={x.category} title={x.title} text={x.summary} path={"/insights/"+slug}/><Section><Container><p className="article-meta">AdaptSphere Research · <time dateTime={publicationDate}>October 7, 2026</time> · Implementation note</p><div className="article-grid"><aside><ReadingTOC items={sections}/></aside><article className="reading">{sections.map(s=><section key={s.id} id={s.id}><h2>{s.title}</h2><p>{s.text}</p></section>)}<p className="small-note">This note describes an architecture approach, not a compliance certification or a customer case study.</p></article></div></Container></Section><JsonLd data={{"@context":"https://schema.org","@type":"Article",headline:x.title,description:x.summary,datePublished:publicationDate,dateModified:publicationDate,author:{"@id":site.url+"/#organization"},publisher:{"@id":site.url+"/#organization"},mainEntityOfPage:site.url+"/insights/"+slug,image:site.url+"/opengraph-image"}}/><CTASection/></>;}
