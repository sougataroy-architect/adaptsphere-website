import { PageHeader,Section,Container,Eyebrow } from "@/components/UI";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";
import { EditorialVisualGrid, contactEditorialVisual } from "@/components/EditorialVisuals";
import { ContactPromptExplorer } from "@/components/ContactPromptExplorer";
export const metadata=pageMeta("Contact","Discuss an AI agent or Copilot workflow, the systems and permissions it touches, and the authorization or implementation work needed.","/contact");

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
            <ContactPromptExplorer/>
            <div className="callout"><strong>Keep the first message general.</strong><p>Do not send credentials, confidential architecture, personal data, or sensitive documents. Agree on an appropriate exchange process first.</p></div>
            <p className="small-note">This link opens your email application. There is no website submission form or automated booking service.</p>
          </div>
        </div>
        <div className="contact-editorial"><EditorialVisualGrid items={[contactEditorialVisual]} columns={1} label="An example of the first project conversation"/></div>
      </Container>
    </Section>
  </>;
}
