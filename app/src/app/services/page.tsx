import { EngagementFinder } from "@/components/EngagementFinder";
import { pageMeta } from "@/lib/metadata";
import { services } from "@/content/services";
import { ServiceCard } from "@/components/Cards";
import { PageHeader,Section,Container,CTASection } from "@/components/UI";
export const metadata=pageMeta("Enterprise Agent Governance and Implementation","Review agent identity, data access, tool permissions, approval steps, and system integrations. Implement and verify controls across Microsoft and connected business systems.","/services");
export default function Page(){return <><PageHeader label="Services" title="Govern and implement AI agents in business systems." text="We examine what an agent can access and change, how its tools authenticate, and who owns it. Then we agree on the assessment, build, integration, or remediation work and its deliverables." path="/services"/><Section><Container><div className="service-grid">{services.map((s,i)=><ServiceCard service={s} index={i} key={s.slug}/>)}</div><p className="small-note">Scope, dependencies, and delivery milestones are agreed for each engagement. Assessment does not certify regulatory compliance.</p></Container></Section><EngagementFinder/><CTASection/></>;}
