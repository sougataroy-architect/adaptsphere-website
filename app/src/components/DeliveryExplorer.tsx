"use client";
import { useId, useState } from "react";
import { WorkflowScene } from "./WorkflowScene";
import { Search, Lightbulb, Wrench, ArrowRight } from "lucide-react";
const steps = [
  { icon: Search, title: "Review your systems", detail: "Workflows, applications, data, and exposure", heading: "Understand the work before choosing AI.", description: "Map how work gets done, what information is used, which identities and tools are involved, and where untrusted inputs or sensitive actions enter.", evidence: "A system and access map, an agreed business problem, and open security questions." },
  { icon: Lightbulb, title: "Identify useful AI opportunities", detail: "Value, feasibility, authority, and risk", heading: "Choose a use case worth implementing.", description: "Compare business value with data access, tool authority, misuse exposure, and delivery effort. Decide what needs a person’s approval and how the team will verify the controls.", evidence: "A priority use case, a governed design, and a practical verification plan." },
  { icon: Wrench, title: "Build, integrate, and verify", detail: "Enforced safeguards and maintainable software", heading: "Put the solution into the existing workflow.", description: "Build the integrations and enforce boundaries in the surrounding systems. Test expected use, malicious instructions, denied actions, and failure paths before handover.", evidence: "Working system connections, control test results, and clear monitoring and response responsibilities." }
];
const visualCaptions = ["Example · late-order workflow", "Example · value and readiness", "Example · build and release gates"];
export function DeliveryExplorer() {
  const [active, setActive] = useState(0);
  const id = useId();
  const step = steps[active];
  return <figure className="architecture-board interactive-board delivery-board">
    <figcaption><span className="signal-dot"/>HOW WE HELP</figcaption>
    <p className="explorer-hint">Choose a step to see how we help and what you receive.</p>
    <ol className="architecture-nodes">{steps.map(({icon: Icon, title, detail}, i) => <li key={title} className={active === i ? "node-selected" : ""}>
      <button type="button" id={`${id}-step-${i}`} aria-expanded={active === i} aria-controls={`${id}-panel`} onClick={() => setActive(i)}>
        <span className="node-icon"><Icon size={20} aria-hidden="true"/></span>
        <span className="node-copy"><span className="node-index">0{i+1}</span><strong>{title}</strong><span className="node-description">{detail}</span></span>
        <ArrowRight size={15} aria-hidden="true"/>
      </button>
    </li>)}</ol>
    <div className="delivery-art" key={active}><WorkflowScene variant={active} mode="delivery"/><span className="scene-example">{visualCaptions[active]}</span></div>
    <div className="control-panels"><section id={`${id}-panel`} aria-labelledby={`${id}-step-${active}`}>
      <h3>{step.heading}</h3><p>{step.description}</p><dl><div><dt>What you receive</dt><dd>{step.evidence}</dd></div></dl>
    </section></div>
    <div className="board-caption"><span className="signal-dot"/><span>Governance and security engineered throughout.</span></div>
  </figure>;
}
