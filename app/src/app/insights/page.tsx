import { PageHeader,Section,Container } from "@/components/UI";
import { InsightCard } from "@/components/Cards";
import { insights } from "@/content/insights";
import { pageMeta } from "@/lib/metadata";
export const metadata=pageMeta("Insights","Practical notes on agent authorization, architecture, modernization, and operating governance.","/insights");
export default function Page(){return <><PageHeader label="Insights" title="Think clearly about the system beneath AI." text="Company notes on architecture, authorization, implementation, and governance." path="/insights"/><Section><Container><div className="insight-grid">{insights.map(item=><InsightCard item={item} key={item.slug}/>)}</div></Container></Section></>;}
