import { EngagementFinder } from "@/components/EngagementFinder";
import { pageMeta } from "@/lib/metadata";
import { services } from "@/content/services";
import { ServiceCard } from "@/components/Cards";
import { PageHeader,Section,Container,CTASection } from "@/components/UI";
import { EditorialVisualGrid, servicesEditorialVisuals } from "@/components/EditorialVisuals";
export const metadata=pageMeta("Governed and Secure AI Engineering Services","Assess, design, build, and remediate AI systems with scoped identities, data and tool boundaries, human approvals, security testing, and accountable operations.","/services");
export default function Page(){return <><PageHeader label="Services" title="Govern and secure AI in the systems your teams use." text="We examine what an agent can access and change, how its tools authenticate, where it could be misled, and who owns it. Then we agree the assessment, build, integration, or remediation work and its deliverables." path="/services"/><Section><Container><div className="service-grid">{services.map((s,i)=><ServiceCard service={s} index={i} key={s.slug}/>)}</div><EditorialVisualGrid items={servicesEditorialVisuals} columns={1} label="How an engagement scope is agreed"/><p className="small-note">Scope, dependencies, and delivery milestones are agreed for each engagement. Assessment does not certify regulatory compliance or replace a broader security program.</p></Container></Section><EngagementFinder/><CTASection/></>;}
