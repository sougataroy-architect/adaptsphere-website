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

const insightArtwork: Record<string, { src: string; alt: string }> = {
  "authorize-the-schedule-that-runs-the-agent": { src: "/visuals/scheduled-agent-v2.webp", alt: "A scheduled agent run is linked to an accountable owner and review point" },
  "authorize-the-agent-chain": { src: "/visuals/agent-chain-v2.webp", alt: "A request moves through specialist agents, with the combined authority checked before action" },
  "agent-authorization-before-autonomy": { src: "/visuals/authorization-article-v2.webp", alt: "An agent’s identity and permitted actions are checked at an authorization boundary" },
  "modernization-is-an-ai-control": { src: "/visuals/modernization-control-v2.webp", alt: "An API boundary preserves business rules as an AI workflow connects to an existing system" },
  "governance-that-survives-deployment": { src: "/visuals/governance-operations-v2.webp", alt: "Governance requirements connect to technical controls, an operating owner, and review evidence" },
};

export function InsightCard({item}:{item:typeof insights[number]}){
  const artwork = insightArtwork[item.slug];
  return <Link href={"/insights/"+item.slug} className="insight-card">
    {artwork && <span className="insight-card-media"><Image src={artwork.src} alt={artwork.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 360px" /></span>}
    <span className="eyebrow">{item.category}</span><h3>{item.title}</h3><p>{item.summary}</p><span className="card-link">Read the note<ArrowUpRight size={16} aria-hidden="true"/></span>
  </Link>;
}
