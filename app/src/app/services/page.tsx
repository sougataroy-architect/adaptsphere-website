import { EngagementFinder } from "@/components/EngagementFinder";
import { pageMeta } from "@/lib/metadata";
import { services } from "@/content/services";
import { ServiceCard } from "@/components/Cards";
import { PageHeader,Section,Container,CTASection } from "@/components/UI";
export const metadata=pageMeta("Services","Seven connected engagements across enterprise AI architecture, governance, integration, modernization, and technical operations.","/services");
export default function Page(){return <><PageHeader label="Services" title="Architecture and engineering. Governed by design." text="Seven connected engagements. A practical route from understanding your environment to building and operating controlled AI." path="/services"/><Section><Container><div className="service-grid">{services.map((s,i)=><ServiceCard service={s} index={i} key={s.slug}/>)}</div><p className="small-note">Scope, dependencies, and delivery milestones are agreed for each engagement. Assessment does not certify regulatory compliance.</p></Container></Section><EngagementFinder/><CTASection/></>;}
