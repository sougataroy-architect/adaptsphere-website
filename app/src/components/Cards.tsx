import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/content/services";
import { serviceHref } from "@/content/services";
import { insights } from "@/content/insights";
import styles from "./ServiceCard.module.css";

const serviceArtwork: Record<string, { src: string; alt: string }> = {
  "governed-ai-architecture": { src: "/visuals/ai-architecture-v2.webp", alt: "Engineers map an AI workflow across connected business systems" },
  "ai-governance-assessment": { src: "/visuals/assessment-workbench-v2.webp", alt: "A governance review compares system settings with documented controls" },
  "agent-governance": { src: "/visuals/agent-governance-v2.webp", alt: "An agent authorization record is reviewed alongside its operating boundaries" },
  "microsoft-ai-governance": { src: "/visuals/microsoft-permissions-v2.webp", alt: "Microsoft identity and content permissions mapped to an AI workflow" },
  "ai-integration-modernization": { src: "/visuals/legacy-integration-v2.webp", alt: "An engineer plans a controlled connection to a legacy business system" },
  "platform-engineering": { src: "/visuals/platform-operations-v2.webp", alt: "A team reviews application operations and release planning" },
  "governance-remediation": { src: "/visuals/delivery-route-v2.webp", alt: "A team hands over a documented remediation and verification plan" },
};

export function ServiceCard({service,index}:{service:Service;index:number}) {
  const artwork = serviceArtwork[service.slug];
  return <Link href={serviceHref(service)} className={`service-card ${styles.card}`}>
    <span className="card-number">0{index+1}</span>
    {artwork && <span className={styles.media}><Image src={artwork.src} alt={artwork.alt} fill sizes="(max-width: 639px) 38vw, (max-width: 1023px) 34vw, 260px" /></span>}
    <div className={styles.copy}><h3>{service.title}</h3><p>{service.summary}</p><span className="card-link">Explore the engagement <ArrowUpRight size={16} aria-hidden="true"/></span></div>
  </Link>;
}
export function InsightCard({item}:{item:typeof insights[number]}){return <Link href={"/insights/"+item.slug} className="insight-card"><span className="eyebrow">{item.category}</span><h3>{item.title}</h3><p>{item.summary}</p><span className="card-link">Read the note<ArrowUpRight size={16} aria-hidden="true"/></span></Link>;}
