import { PageHeader,Section,Container,Eyebrow } from "@/components/UI";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";
export const metadata=pageMeta("Contact","Discuss an AI agent or Copilot workflow, the systems and permissions it touches, and the authorization or implementation work needed.","/contact");
const emailPrompts = [
  { title: "The task and your role", detail: "What work your team wants help with, and your role in the organization." },
  { title: "The workflow and systems", detail: "The tools, applications, and data sources the work touches." },
  { title: "The authority boundary", detail: "What the agent should do, and what must stay outside its authority." },
  { title: "The decision owner", detail: "Who approves actions, owns the workflow, or reviews exceptions." },
  { title: "Timing", detail: "An approximate timeframe, if one is already known." },
];

export default function Page(){
  return <>
    <PageHeader label="Contact" title="Discuss an AI workflow and its authority." text="Tell us what the workflow should do, which systems it would touch, and what is unclear about access, approval, or ownership. We can identify a useful first step together." path="/contact"/>
    <Section>
      <Container>
        <div className="contact-grid">
          <div className="contact-panel">
            <Eyebrow>Start a conversation</Eyebrow>
            <a className="email-link" href={"mailto:"+site.email+"?subject=Enterprise%20AI%20environment%20review"}>{site.email}<ArrowUpRight aria-hidden="true"/></a>
            <p className="contact-address">{site.legalName}<br/>{site.location}</p>
            <p className="contact-invitation">Send a short overview of the business task, the systems involved, and the decision you need to resolve. We can agree on next steps and a suitable way to share more information.</p>
            <div className="contact-flow">
              <p>A useful starting point</p>
              <ol aria-label="Describe the task, the systems it touches, and the decision to resolve">
                <li>Business task</li><li>Systems touched</li><li>Decision to resolve</li>
              </ol>
            </div>
          </div>
          <div className="contact-guidance">
            <Eyebrow>What to include</Eyebrow>
            <h2>Help us understand the work</h2>
            <p className="contact-guidance-intro">A few specifics help us see where the workflow starts, what it can access, and where a person needs to decide.</p>
            <ol className="contact-list">
              {emailPrompts.map((prompt,index)=><li key={prompt.title}><span className="contact-number">0{index+1}</span><div><h3>{prompt.title}</h3><p>{prompt.detail}</p></div></li>)}
            </ol>
            <div className="callout"><strong>Keep the first message general.</strong><p>Do not send credentials, confidential architecture, personal data, or sensitive documents. Agree on an appropriate exchange process first.</p></div>
            <p className="small-note">This link opens your email application. There is no website submission form or automated booking service.</p>
          </div>
        </div>
      </Container>
    </Section>
  </>;
}
