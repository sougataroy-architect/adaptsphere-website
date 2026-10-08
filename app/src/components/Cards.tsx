import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/content/services";
import { serviceHref } from "@/content/services";
import { insights } from "@/content/insights";
export function ServiceCard({service,index}:{service:Service;index:number}){return <Link href={serviceHref(service)} className="service-card"><span className="card-number">0{index+1}</span><div><h3>{service.title}</h3><p>{service.summary}</p><span className="card-link">Explore the engagement <ArrowUpRight size={16} aria-hidden="true"/></span></div></Link>;}
export function InsightCard({item}:{item:typeof insights[number]}){return <Link href={"/insights/"+item.slug} className="insight-card"><span className="eyebrow">{item.category}</span><h3>{item.title}</h3><p>{item.summary}</p><span className="card-link">Read the note<ArrowUpRight size={16} aria-hidden="true"/></span></Link>;}
