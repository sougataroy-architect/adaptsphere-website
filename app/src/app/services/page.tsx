import { EngagementFinder } from "@/components/EngagementFinder";
import { pageMeta } from "@/lib/metadata";
import { services } from "@/content/services";
import { ServiceCard } from "@/components/Cards";
import { PageHeader,Section,Container,CTASection } from "@/components/UI";
export const metadata=pageMeta("AI Implementation & Governance Services","Explore AI governance assessments, agent authorization, Microsoft AI implementation, legacy integration, and remediation services from AdaptSphere.","/services");
export default function Page(){return <><PageHeader label="Services" title="Enterprise AI implementation and governance services." text="Choose the work your team needs: assess AI access, implement an agent, integrate legacy systems, or remediate governance findings. Each engagement defines scope and deliverables." path="/services"/><Section><Container><div className="service-grid">{services.map((s,i)=><ServiceCard service={s} index={i} key={s.slug}/>)}</div><p className="small-note">Scope, dependencies, and delivery milestones are agreed for each engagement. Assessment does not certify regulatory compliance.</p></Container></Section><EngagementFinder/><CTASection/></>;}
