import { PageHeader,Container } from "@/components/UI";
import { pageMeta } from "@/lib/metadata";
import { EditorialVisualGrid, contactEditorialVisual } from "@/components/EditorialVisuals";
import { ContactConversationBuilder } from "@/components/ContactConversationBuilder";
export const metadata=pageMeta("Contact","Discuss an AI agent or Copilot workflow, the systems and permissions it touches, and the authorization or implementation work needed.","/contact");

export default function Page(){
  return <>
    <PageHeader label="Contact" title="Discuss an AI workflow and its authority." text="Tell us what the workflow should do, which systems it would touch, and what is unclear about access, approval, or ownership. We can identify a useful first step together." path="/contact"/>
    <ContactConversationBuilder />
    <Container>
      <div className="contact-editorial"><EditorialVisualGrid items={[contactEditorialVisual]} columns={1} label="An example of the first project conversation"/></div>
    </Container>
  </>;
}
