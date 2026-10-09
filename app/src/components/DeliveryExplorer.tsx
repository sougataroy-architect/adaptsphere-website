"use client";
import { useId, useState } from "react";
import { WorkflowScene } from "./WorkflowScene";
import { Search, Lightbulb, Wrench, ArrowRight } from "lucide-react";
const steps = [
  { icon: Search, title: "Review your systems", detail: "Workflows, applications, and data", heading: "Understand the work before choosing AI.", description: "Map how work gets done, where time is lost, and which systems and data are involved.", evidence: "A current-state map and agreed business problem." },
  { icon: Lightbulb, title: "Identify useful AI opportunities", detail: "Value, feasibility, and risk", heading: "Choose a use case worth implementing.", description: "Compare the potential benefit with data readiness, integration effort, and risk. Define how the team will evaluate the solution.", evidence: "A prioritized use case, implementation scope, and evaluation criteria." },
  { icon: Wrench, title: "Build, integrate, and verify", detail: "Working software and operational handover", heading: "Put the solution into the existing workflow.", description: "Build the integrations, test task performance and failure cases, and prepare deployment and handover.", evidence: "Working integrations, test evidence, and operating responsibilities." }
];
export function DeliveryExplorer() {
  const [active, setActive] = useState(0);
  const id = useId();
  const step = steps[active];
  return <figure className="architecture-board interactive-board delivery-board">
    <figcaption><span className="signal-dot"/>HOW WE HELP</figcaption>
    <div className="delivery-art" key={active}><WorkflowScene variant={active}/><span className="scene-example">Illustrative workflow</span></div>
    <ol className="architecture-nodes">{steps.map(({icon: Icon, title, detail}, i) => <li key={title} className={active === i ? "node-selected" : ""}>
      <button type="button" id={`${id}-step-${i}`} aria-expanded={active === i} aria-controls={`${id}-panel`} onClick={() => setActive(i)}>
        <span className="node-icon"><Icon size={20} aria-hidden="true"/></span>
        <span className="node-copy"><span className="node-index">0{i+1}</span><strong>{title}</strong><span className="node-description">{detail}</span></span>
        <ArrowRight size={15} aria-hidden="true"/>
      </button>
    </li>)}</ol>
    <div className="control-panels"><section id={`${id}-panel`} aria-labelledby={`${id}-step-${active}`}>
      <h3>{step.heading}</h3><p>{step.description}</p><dl><div><dt>What you receive</dt><dd>{step.evidence}</dd></div></dl>
    </section></div>
    <div className="board-caption"><span className="signal-dot"/><span>Access, approvals, and ownership defined throughout.</span></div>
  </figure>;
}
